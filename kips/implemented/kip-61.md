---
kip: 61
title: Perps V2 Trading Incentives
status: Implemented
created: 2023-02-08
section: 5.4
---

## Simple Summary
Distribute 30,000 OP in weekly Perps V2 trading rewards for 20 weeks, totaling 600,000 OP.

## Abstract
Due to hurdles implementing KIP-29 and the deprecation of V1 Cross Margin, it is necessary to replace the KIP-29 distribution plan with an updated distribution for v2.

This KIP replaces KIP-29 with a plan which closely mirrors a distribution plan from Synthetix, providing some overlap in technical implementation and ensuring a large number of Kwenta traders can realize a more significant benefit than Kwenta could offer by distributing rewards in isolation.

## Motivation
The SIP-2003 proposal currently being discussed in Synthetix governance distributes 200,000 OP tokens per week to perps v2 traders, which will be claimed through the Kwenta frontend. A distribution of Kwenta’s OP tokens over the same time period ensures that Kwenta traders realize the maximum benefit over this period.

Although previous plans targeted traders on other platforms, this unique opportunity to work in conjunction with Synthetix and maximize rewards for Kwenta traders should incentivize users to migrate and try Perps v2 without the need for the added complexity of targeting only users of other exchanges.
To ensure the spirit of the original Optimism Grant proposal is maintained, no tier multiplier will exist for KWENTA stakers in order to direct incentives at new users migrating from other platforms. Incentives for KWENTA distributed in locked KWENTA already ensure that staking is attractive for traders.

## Specification

Rewards for each trader will be calculated based on fees paid and average open interest over the period. In this distribution, fees are weighted more heavily than volume, which incentivizes trading over arbitrage and other low risk strategies, which is most attractive to the type of user most likely to generate revenue for Kwenta in the future when the v2 implementation of cross margin is available.

Users are assigned a trader score based on their total fees paid and time-averaged open interest:

`traderScore = feesPaid^0.8 * averageoi^0.2`

Each trader will then earn a pro rata share of the total weekly rewards:

`traderScore / sum(traderScores) * weeklyReward total = yourReward`

Traders will be able to claim their OP token rewards weekly in the same place that OP rewards from Synthetix are claimable. Rewards will begin simultaneously with rewards from Synthetic, and for the same 20 week period.

## Suggested KSL Changes

```
diff --git a/sections/5.md b/sections/5.md
index 8be42d5..739ea7a 100644
--- a/sections/5.md
+++ b/sections/5.md
@@ -6,7 +6,7 @@
 1. [Aelin Funding](#aelin-funding)
 2. [Synthetix Staker and Trader Token Distribution](#synthetix-staker-and-trader-token-distribution)
 3. [Sovereignty Phase](#sovereignty-phase)
-4. [OP Token Phase 0 Proposal](#op-token-phase-0-proposal)
+4. [OP Token Phase 0 Distribution](#op-token-phase-0-distribution)
 5. [Community Rewards](#community-rewards)
 6. [Trial Liquidity Mining on Velodrome](#trial-liquidity-mining-on-velodrome)
 ---
@@ -55,93 +55,40 @@ opportunity.
 * minPrice: 0
 * maxPrice: Infinity
 
-## OP Token Phase 0 Proposal
+## OP Token Phase 0 Distribution
 
 Kwenta is being distributed 900,000 OP tokens but is required to propose how the tokens will benefit the Optimism ecosystem. Kwenta will use the OP tokens to fuel development and incentivize trader migration to Optimism. Kwenta will leverage the OP token to drive Optimism adoption while relying on Kwenta’s tokenomics and unique product offerings to retain those users who migrate.
 
 ### Specification
 
-The proposal for Kwenta’s OP is as follows:
+The distribution for Kwenta’s OP is as follows:
 
 **Distribution Breakdown**
 * Platform Migration Incentives 66%
 * Competition Prizes 14%
 * DAO Contributor Incentives 20%
 
-**Platform Migration Incentives**
-Amount: 600,000 OP
+**Perps V2 Trading Incentives**
 
-**Tier 1 - Onboarding**
+Amount: 600,000 OP
 
-Amount: 200,000 OP
+Rewards for each trader will be calculated based on fees paid and average open interest over the period. In this distribution, fees are weighted more heavily than volume, which incentivizes trading over arbitrage and other low risk strategies, which is most attractive to the type of user most likely to generate revenue for Kwenta in the future when the v2 implementation of cross margin is available.
 
-Reward per wallet for full completion: 80 OP
+Users are assigned a trader score based on their total fees paid and time-averaged open interest:
 
-Required actions:
-* Deposit at least $1,000 in a cross margin account
-* Open a position worth at least $100 notional volume using a limit order
-* Verify authenticity in the Kwenta Discord
+`traderScore = feesPaid^0.8 * averageoi^0.2`
 
-**Tier 2 - Test Drive**
+Each trader will then earn a pro rata share of the total weekly rewards:
 
-Amount: 200,000 OP
+`traderScore / sum(traderScores) * weeklyReward total = yourReward`
 
-Reward per wallet for full completion: 80 OP
+Traders will be able to claim their OP token rewards weekly.
 
-Required actions:
-Complete Tier 1 requirements
-* Make at least 4 additional trades of at least $100 notional volume each trade
-* At least 2 total trades must be triggered stop loss or limit orders
-* Generate a realized PnL of at least $100 in either direction
-* Tier 2 actions must be completed within 21 days of the completion of Tier 1 actions
-
-**Bonus A - DYDX Trader Boost**
-Amount: 100,000 OP
-
-Max reward per wallet: 40 OP
-
-Required actions:
-* Complete Tier 1 requirements using a wallet which interacted with DYDX prior to September 1st, 2022 to earn 20 OP.
-* Complete Tier 2 requirements from a wallet which interacted with DYDX prior to September 1st, 2022 to earn 20 additional OP.
-*September 1st, 2022 will be defined as beginning with ETH mainnet block 15449618.
-
-**Bonus B - Optimism Quest Boost**
-
-Amount: 100,000 OP
-
-Max reward per wallet: 40 OP
-
-Required actions:
-* Complete Tier 1 requirements using a wallet which completed the Optimism Quest and received the NFT to earn 20 OP
-* Complete Tier 2 requirements from a wallet which completed the Optimism Quest and received the NFT to earn 20 additional OP
-
-**Dependencies**
-
-All on-chain actions will be dependent on the launch of Kwenta cross margin functionality, currently scheduled for launch in mid-October, and users may begin completing on-chain actions immediately following this launch.
-
-Users will be able to claim OP tokens at a later date, which is dependent on the KWENTA token launch and completion of the token claim UI.
-
-**Disqualification**
-
-The following actions may result in resetting a wallet’s progress on the tiered incentive program:
-* Withdrawing from the cross margin wallet.
-* Leaving the Kwenta Discord server.
-
-The following actions may result in a wallet being permanently disqualified from the OP incentives program:
-
-* Removal from Discord due to being flagged as a bot or malicious user.
-
-**Maximum eligible users**
-
-Rewards from Tier 1 and Tier 2 will be awarded to the first 2,500 unique users to complete each individual bounty or bonus. Users must be eligible to receive rewards from Tier 1 in order to qualify for Tier 1 bonuses or Tier 2 rewards. Users m
ust be eligible to receive rewards from Tier 2 in order to be eligible for Tier 2 bonuses.
-
-In the case that 2,500 eligible users have completed Tier 1 actions and 21 days has passed, unallocated OP may be reallocated to this program, or other incentive programs or marketing initiatives at the discretion of the treasury.
-
-In the case that OP tokens have not been claimed 180 days after the launch of the incentive program, tokens may be clawed back and used at the discretion of the treasury for future incentive programs or marketing initiatives.
+**Competition**

 Competition Prizes: 120,000 OP
 
-Method: Kwenta will be hosting 2 competitions to kickoff the launch of the Kwenta token. The OP token will be used to incentivize participation by being added to the prize pool.
+Method: Kwenta hosted 2 competitions to kickoff the launch of the Kwenta token. The OP token was used to incentivize participation by being added to the prize pool.
 
 **DAO Contributors**
 
@@ -149,38 +96,6 @@ Amount: 180,000 OP
 
 Method: Individuals who have contributed towards governance and development within the Kwenta DAO will receive 50% of the OP based on a Core Contributor-derived assessment of the value provided by the included members. 50% of the OP would put 
towards Kwenta devDAO bounties, incentivizing development on top of Kwenta and Optimism.
 
-**New Users**
-
-The above incentives will draw users to bridge to Optimism and have a meaningful experience in the ecosystem. Traders will be incentivized to experience a realistic trial of a new and competitive platform that can rival their favored perpetual
 futures platform. Builders will be incentivized to experiment with development on Optimism alongside a community of talented developers.
-
-**Retention**
-
-**Trader Retention:**
-
-In addition to offering users an incentive to bridge to Optimism, traders who complete trades on Kwenta to unlock their OP will receive trading incentives in the form of KWENTA which remain locked for 1 year while still being stakeable (which 
includes additional trader rewards) creating a sticky flywheel of incentives. This, in addition to the unique offerings unavailable elsewhere (such as gold and silver perps) will ensure we retain users who come to Kwenta to claim their OP.
-
-**Builder Retention:**
-
-The devDAO is a component of Kwenta which hosts bounties for developer work. Of the existing 20 devDAO contributors, around than 20% of members sold their SNX compensation while the remaining 80% either held or staked their SNX and became furt
her engaged with the development community on Optimism. Many new devDAO members have gone on to contribute to Lyra, Thales, OptiPunk, and other projects in addition to Kwenta. Over $100,000 USD worth SNX has been spent on devDAO bounties with 8
0 tickets being resolved by community members ranging from beginner level to advanced difficulty. We believe this trend will continue as devDAO momentum has steadily grown since its inception earlier this year.
-
-**Effectiveness Evaluation:**
-
-Kwenta’s inflationary model offers the treasuryDAO an opportunity to offer multiple rounds of migration incentives should they prove beneficial for the protocol. Using OP for migration incentives will enable Kwenta to gather data regarding the
 effectiveness of these campaigns and refine our tactics to maximize the impact they have.
-
-**Timeline & Requirements**
-
-**Pre-Airdrop Requirements:**
-
-Once Kwenta has completed the launch of the KWENTA token, the OP Airdrop will be implemented. The KWENTA token plays a crucial role in retention, as outlined above. Audits are currently set to conclude in late June setting up the Kwenta DAO fo
r a launch in early summer.
-
-**Airdrop Timeline:**
-Traders from alternative chains who meet the criteria listed above will have a period of 6 months to claim their OP tokens. Afterward, any remaining OP tokens will be clawed back and used at the treasury’s discretion for future growth initiati
ves.
-
-**Co-incentives**
-Kwenta’s ongoing trading incentives will follow the mechanism defined above in an upcoming KIP.
-
-Kwenta will be offering KWENTA in the upcoming competitions alongside OP. There will be no change to the existing developer compensation model, OP will be used to fuel development alongside the existing proven model.
-
```

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
