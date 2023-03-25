---
kip: 70
title: Trial $KWENTA rewards for non-stakers
status: Draft
created: 2023-03-24
section: 3.4
---

## Summary

Distribute $KWENTA rewards to non-stakers who trade by adding 0.1 $KWENTA to the `staked_KWENTA` value in the rewards calculation for epochs 19 and 20.

## Abstract

This proposal suggests modifying the rewards calculation for Kwenta's incentive program to provide additional rewards for non-stakers, encouraging traders to migrate to Kwenta and incentivizing them to stake. The proposed change is to add 0.1 $KWENTA to the `staked_KWENTA` value in the rewards calculation, treating traders as if they have an additional 0.1 staked, eliminating the possibility of a 0 being used in the rewards calculation for any trader. The pilot program will run for two weeks in epochs 19 and 20, and will be evaluated by the Elite Council before continuation.

This proposal does not distribute $KWENTA tokens, modify $KWENTA balances, or impact any calculation involving $KWENTA tokens outside of the weekly trading rewards distribution during the pilot period. 

## Motivation

Currently, only stakers are eligible for rewards, which limits the potential user base for Kwenta. By providing rewards for non-stakers, we can introduce them to the Kwenta flywheel and encourage future participation in the rewards program. The program allows us to reward traders who do not yet have staked $KWENTA, but still providing additional incentive to stake by providing increased rewards for those who hold additional tokens.

While it is important to give additional value to wallets staking $KWENTA and demonstrating alignment with the DAO, the current rewards structure provides no incentive for non-stakers to migrate and gives no opportunity for new users to experience the benefits of staking without purchasing $KWENTA, which may prevent some users from getting involved.

A two week trial allows us to promote non-stake rewards and provides an opportunity to onboard new users, and allows the Elite Council to review the results after the first week and adjust or extend the program depending on the real world impact.

## Specification

Insert to section 3.4, line 56:
```
For epochs 19 and 20 only, `rewards_score` will be calculated using the formula `rewards_score = fees_paid^a * (staked_KWENTA+0.1)^1-a` in order to trial a non-stake $KWENTA rewards program.
```
Once the two-week pilot has ended, the program will be evaluated by the Elite Council before continuation, and will be terminated if it is not extended or modified by a subsequent proposal.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
