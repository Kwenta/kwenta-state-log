---
kip: 63
title: Deprecation of Synthetix Futures (V1) on Kwenta
status: Draft
created: 2023-02-01
section: 4.4, 4.5
---

## Simple Summary

With the launch of new markets on Synthetix Futures (V2), Synthetix will gradually sunset the Synthetix Futures (V1) markets, making it unpleasent to trade on Cross Margin (V1) and and Advanced Orders (V1) as defined in sections 4.4 and 4.5.

## Abstract

This KIP proposes the deprecation and removal of the Synthetix Futures (V1) protocol functionality from the Kwenta frontend in favor of the new Synthetix Futures (V2) deployment.

Cross Margin, which enables the current advanced orders product, being an abstraction layer built on top of the Synthetix Futures (V1) protocol, will become unusable due to the forseeable deprecation of Synthetix Futures (V1). Kwenta should therefore focus its efforts on the development of Cross Margin V2 (see [KIP-55](./kip-55.md), which once implemented would replace the current Cross Margin and Advanced Orders product). 


## Motivation

The current Synthetix Futures (V1) protocol charges users significantly higher fees and is technically inferior to the Synthetix Futures (V2) protocol. In order to focus community and core contributor efforts on the development of new products on top of Synthetix Futures (V2), support for the inferior Synthetix Futures (V1) protocol should be discontinued as soon as possible.

## Specification

In order to make the process for traders on Synthetix Futures (V1) as smooth as possible, a gradual approach should be implemented:

* Kwenta should inform users through all its communication channels that Synthetix Futures (V1) is being deprecated in the near future
* Kwenta should offer users a legacy frontend to make it possible to access and close their Synthetix Futures (V1) positions as well as deposits after the official deprecation. This legacy frontend should be communicated through all communication channels available.
* Kwenta developers will freeze any further code development on the Synthetix Futures (V1) frontend in favor of the frontend supporting Synthetix Futures (V2)
* Shortly before the deprecation, Kwenta should add a clear warning onto the Synthetix Futures (V1) frontend, clearly outlining the implications of keeping orders open beyond the deprecation date

### Suggested KSL Changes

```
diff --git a/sections/4.md b/sections/4.md
index adc1919..630f691 100644
--- a/sections/4.md
+++ b/sections/4.md
@@ -6,10 +6,8 @@
 1. [Roadmap Development Process](#roadmap-development-process)
 2. [Decentralized Deployment](#decentralized-deployment)
 3. [Asset Listing Process](#asset-listing-process)
-4. [Cross Margin](#cross-margin)
-5. [Advanced Orders](#advanced-orders)
-6. [Synth Swap](#synth-swap)
-7. [Socket Plugin](#socket-plugin)
+4. [Synth Swap](#synth-swap)
+5. [Socket Plugin](#socket-plugin)
 ---
 
 ## Roadmap Development Process
@@ -57,144 +55,6 @@ In case of disagreements, abandonment or forks of the endorsed Kwenta source cod
 
 In the event the Synthetix protocol supports a new synth, the Kwenta protocol will automatically list the asset and make it available for use in the product. Kwenta shall not take custodial control over users' assets and shall continue to act as a decentralized trading protocol.
 
-## Cross Margin
-
-Cross margin opens the door for new trading strategies and increases the accessibility of futures on Kwenta. It is an abstraction layer to be built on top of the Synthetix Futures (V1) protocol which creates "margin accounts" for each trader. Margin accounts enable Kwenta to simplify rebalancing operations and provide cross margin functionality.
-
-The current futures system requires traders to deposit margin into specific markets before trading. This two step process causes friction when trying to act on market conditions and when managing margin between multiple markets. Cross margin improves the UX of trading on Kwenta.
-
-With the introduction of a "margin account" system, each trader will be required to set up a smart contract wallet (this step is managed by the frontend) that holds margin on behalf of the trader. Smart contract accounts also open the door for future functionality as seen under [advanced orders](./4.md#advanced-orders).
-
-Cross margin is achieved by bundling together the margin step and the trade step when modifying a futures position. With the current implementation a trader can also open/modify/close multiple positions at once (atomically). It will be up to the frontend implementation on how to manage and rebalance margin.
-
-### Rationale & User Flows
-
-As a **trader** I want:
-* To manage positions on **a singular asset**:
-    * By opening BTC position without having to perform two transactions.
-    * By opening BTC position using the margin from closing a LINK position.
-
-* To manage positions on **a basket of assets**:
-    * By opening positions across many markets in one step.
-    * By rebalancing all assets at once to keep leverage constant and avoid liquidation
-* To speculate on the **ratio between two asset prices**:
-    * By opening pair trade ETH/SOL in one step.
-    * By rebalancing a pair trade with profits from a drifting asset.
-
-### Technical Specification
-
-There will be a factory contract (MarginAccountFactory) that creates new margin accounts. Each margin account's functionality will be restricted to the owner of the account, which is the original creator. 
-
-The current architecture relies on [MinimalProxies](https://eips.ethereum.org/EIPS/eip-1167) where each margin account is a minimal proxy. This substantially decreases the gas costs of account creation at the expense of slightly increased interaction cost. Events are emitted on account creation and these are expected to be indexed by a subgraph.
-
-`distributeMargin` is the core function of Cross Margin and accepts an array of `NewPosition` structs.
-
-`function distributeMargin(NewPosition[] memory _newPositions);`
-
-Each position defined via NewPosition will specify the market, margin Δ (delta), and size Δ.
-
-```
-struct NewPosition {
-        bytes32 marketKey;
-        int256 marginDelta;
-        int256 sizeDelta;
-}
-```
-
-A positive margin Δ will deposit margin into a specified market and a negative margin delta will withdraw margin from a specified market.
-
-A positive size Δ will increase the notional size of a position. A negative size Δ will decrease the notional size of a position. A sufficiently large size Δ may invert the direction of a position (long vs. short).
-
-A position can be closed if the passed size Δ is the exact inverse of the current size. When closing a position, all margin in that market will be withdrawn back to the user's margin account in a single transaction.
-
-### Fee Structure
-
-Fees can be imposed on all trades placed through the cross margin contract. The fee will be a function of size delta but not margin delta. Fees are additive on top of Synthetix base fees. The fee will be controlled through governance. The fee will initially be set at 2 basis points and revenue will be sent to the treasury.
-
-### Caveats
-
-An expectation of typical cross margin is rebalancing. This iteration does not include rebalancing due to keeper system constraints. It will be up to the end user to balance their margin. For example if a trader opens two positions with equal margin for both, over time their positions will become unbalanced respective to market movements and it will be possible for one position to be liquidated before the other.
-
-## Advanced Orders
-
-Advanced orders enable new trading strategies for futures. Leveraging Gelato's keeper system, Kwenta will automate specialized orders for futures. The first two products utilizing this are limit orders and stop orders.
-
-Market orders are the only available order type (next-price orders are market orders under the hood) for Kwenta futures at the moment. There are trading benefits by allowing orders to execute in the future based on defined conditions.
-
-Advanced orders are now feasible as a result of "margin accounts" introduced with [cross Margin](./4.md#cross-margin).
-
-A trader can specify a limit order or stop market order and register the task with Gelato. If the specified condition evaluates true, Gelato keepers will execute the order on behalf of the trader. Keeper fees are paid in ETH (on execution) and will be required to be stored in the margin account for future execution.
-Margin will be committed for an advanced order meaning it cannot be used for any other order or cross margin while the order is active.
-
-### Slippage
-
-Users specify a price for the execution of their order, however trades are always executed at the current oracle price. Thus, a trader's buy order may be filled at a price below their specified order resulting in positive slippage. Similarly, a trader's stop loss may trigger at a price below their specified order resulting in negative slippage. Below are detailed examples of each scenario:
-
-* If the next oracle price falls below a given limit price during an order to open a long, (ie. $400 to buy ETH & new oracle price = $398) the order will experience positive slippage and will execute at $398.
-
-* If the next oracle price falls below a given stop loss price for an order to close a long, (ie. $400 stop loss & new oracle price = $398) the order will experience negative slippage and will execute at $398.
-
-### Rationale & User Flow
-
-As a **trader** I want:
-* To gain exposure at a particular price:
-    * By placing a limit open to buy/sell an asset at a given price or better.
-* To reduce risk on a bounce or take profits on a position:
-    * By placing a limit close to sell/buyback an asset at a given price or better.
-* To catch a trend:
-    * By placing a stop order to enter a trade at a given price.
-* To cap downside on a trade:
-    * By placing a stop loss order to sell a declining asset (if long) or buy a rising asset (if short) at a given price.
-
-### Technical Specification
-
-All advanced orders are indexed by orderId. orderId is a counter that starts from 0 and increments with each order placed. There are three key functions for interacting with advanced orders:
-
-* Placing an order. This stores the order on chain until execution or cancellation.
-
-```
-function placeOrder(
-    address market, 
-    int256 marginDelta, 
-    int256 sizeDelta, 
-    uint256 targetPrice,
-    OrderTypes orderType // LIMIT or STOP
-) payable external onlyOwner;
-```
-
-*This function is payable because a trader is responsible for providing ETH to their margin accounts to pay for Gelato executed transactions. Note that the margin account must have a minimum of 0.01 ETH before orders can be placed.*
-
-* Canceling an order. This removes an order for a given market.
-
-`function cancelOrder(address market) external onlyOwner;`
-
-* Executing an order. This will be executed by a keeper when a condition is true.
-
-`function executeOrder(address market) external onlyOps;`
-
-When an order is placed, margin is committed to that order. This prevents weird UX loopholes where margin expected for a limit order can accidentally be used by other orders or cross margin. Committed margin is also not eligible for withdrawal from the margin account. The remaining amount of freeMargin is visible in the contract with:
-
-`function freeMargin() public view returns (uint256);`
-
-Additionally, due to the volatility and unpredictability of the [dynamic fee](https://sips.synthetix.io/sips/sip-184/) orders can specify a cap on the dynamic fee that can be charged to a position modification. This is enabled through a separate order placement function:
-
-```
-function placeOrderWithFeeCap(
-        ...,
-        uint256 maxDynamicFee
-) payable external onlyOwner;
-```
-
-### Fee Structure
-
-Fees are charged for each advanced order executed. There are two new fees users are accountable for, the Keeper fee (Gelato) and the Kwenta fee. Kwenta fee parameters will be controlled through governance. Fees will initially be sent to the treasury.
-At the start market order fees will be set to 0.2%. All advanced orders are subject to cross margin fees when executed.
-
-| Order Type  | Kwenta Fee | Keeper Fee |
-| ----------- | ---------- | ---------- |
-| Limit       | 3 bp        | Dependent on network congestion (ETH)  |
-| Stop        | 3 bp        | Dependent on network congestion (ETH)  |
-
 ## Synth Swap
 
 Leveraging 1inch (smart contracts and API) and Synthetix, Kwenta will enable the exchange of any ERC20 tokens for any synths (and vice versa) directly on its platform. The first iteration will support most ERC20 tokens that can be swapped on 1inch but will withhold the ability to add custom tokens for swaps.
```

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).