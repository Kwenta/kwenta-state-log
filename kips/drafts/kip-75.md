---
kip: 75
title: Accumulate Vest Penalty Rewards Prior to Staking V2 Launch
status: Approved
created: 2023-04-19
section: adjusts kip-45
---

## Simple Summary

Track rewards that would have gone to stakers if [Staking V2](https://github.com/Kwenta/kwenta-state-log/blob/master/kips/drafts/kip-58.md) was implemented upon approval in order to ensure stakers capture maximum returns while Staking V2 is in queue for development and deliver rewards during the V2 staking launch. 

## Abstract

Track all vest penalty events and send the rewards to ongoing stakers once V2 staking launches.

## Motivation

[KIP-45](https://github.com/Kwenta/kwenta-state-log/blob/master/kips/drafts/kip-45.md) outlined a mechanism to share vest-penalty rewards with stakers (50%) and the treasury (50%). However, while Staking V2 is in queue for delivery, rewards accumulated that would have gone to stakers are currently going to the treasury. In order to maximize the potential returns for stakers, these rewards should be tracked and delivered to stakers at the launch of V2 staking. 

## Specification

This proposal extends the scope of KIP-45 with the following steps:

1. Track all rewards accumulated from vest-early penalties from when KIP-45 was approved to the the launch of V2 staking and put aside 50% of these rewards.
2. In the epoch that once V2 staking officially gets deployed to OP mainnet, the accumulated rewards would be distributed to stakers across 20 weeks (5% of the accumulated rewards each week) in escrow. 

Lastly, note that rewards will be a part of the module that is created for KIP-45's early vest fee redistribution. Therefore rewards will be **in addition** to ongoing redistribution rewards at the time of launch.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
