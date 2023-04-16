---
kip: 72
title: $OP Boost for $KWENTA stakers adjustment
status: Draft
created: 2023-04-10
section: 5.4
---

## Simple Summary
Adjust rewards calculations for the previously approved KIP-61 $OP rewards to scale linearly with fees paid and add a boost for $KWENTA stakers.

## Motivation
Due to the complicated nature of tracking OI and the removal of OI from rewards calculations by Synthetix, Kwenta's trading rewards should follow a similar distribution scheme.

Additionally, $KWENTA stakers have requested a boost component similar to the plan from Synthetix. Using a boost for staked $KWENTA should add minimal complexity to the calculation while helping to retain existing users and onboard new users to $KWENTA staking.

## Specification

Rewards for each trader will be calculated based on a rewards score. This score will be calculated by multiplying fees paid with a trader's $KWENTA staking boost. This replaces the calculation in KIP-61 with:

`traderScore = feesPaid * kwentaBoost`

The calculation being replaced is:

`traderScore = feesPaid^0.8 * averageoi^0.2`

Each trader will still earn a pro rata share of the total weekly rewards as:

`traderScore / sum(traderScores) * weeklyReward total = yourReward`

kwentaBoost values will have three tiers based on a stakers' $KWENTA balance at the time of the rewards snapshot. The tiers are:

| $KWENTA Staked |  kwentaBoost | 
|---|---|
| 1 ≤ $KWENTA < 10 |  1.05 |             
| 10 ≤ $KWENTA < 100 |  1.075 |             
| 100 ≤ $KWENTA < 200 |  1.1 |            
| $KWENTA > 200 |  1.15 |           

$KWENTA balance for each user will be the sum of staked escrow and liquid staked $KWENTA at the time of each snapshot.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
