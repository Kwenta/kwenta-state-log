---
kip: 78
title: Distribute Staking V2 Rewards to Locked V1 Stakers During Migration Period
status: draft
created: 2023-05-18
section: adjust kip-58
---

## Simple Summary

Ensure that users with funds locked in Staking V1 will still be awarded rewards for their locked funds after the V2 migration is complete.

## Abstract

The Staking V2 contract will query Staking V1 to get V1 balances and distribute proportional rewards to V1 stakers after the migration is complete.

## Motivation

[KIP-58](https://github.com/Kwenta/kwenta-state-log/blob/master/kips/drafts/kip-58.md) stated that during migration "The mapping of staked escrowed balances will be copied over from the StakingRewards V1 contract to the StakingRewards V2 contract.". However this has been discovered to be technically unfeasible.

Hence an alternative method for the migration has had to be devised.

[KIP-58](https://github.com/Kwenta/kwenta-state-log/blob/master/kips/drafts/kip-58.md) also stated that "Inflation will be directed to the new V2 staking contract incentivizing immediate migration." Unfortunately it was discovered that it would not be possible to move all funds from V1 to V2 due to the limitations of the immutability of the V1 contracts. Hence such an incentivization mechanism would be futile for users with locked funds.

So instead it is suggested that we instead make the Staking V2 contracts query V1 and distribute awards proportionally to V2 stakers and V1 locked stakers.

## Specification

1. Pass in and store the address of the `StakingRewards` V1 contract in the initializer of the `StakingRewardsV2` contract.
2. Update the `StakingRewardsV2` contract to query the V1 contract for the `totalSupply()` and sum it with the V2 `totalSupply()`  when calculating the `rewardPerToken()`
3. Update the `StakingRewardsV2` contract to query the V1 contract for the `balanceOf()` and sum it with the V2 `balanceOf()` of the user when calculating the `earned()` of a user.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
