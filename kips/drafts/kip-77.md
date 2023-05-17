---
kip: 77
title: Make Staking V2 Upgradeable
status: draft
created: 2023-05-17
---

## Simple Summary

The Staking V2 contracts - specifically `StakingRewardsV2` and `RewardEscrowV2` should be upgradeable following the `UUPS` proxy standard.

## Abstract

The change will mean rather than deploying Staking V2 contracts as immutable contracts, they will be deployed as proxies. This will allow for the contracts to be upgraded in the future if necessary.

## Motivation

When attempting the upgrade from Staking V1 to V2, it was discovered that certain technical limitations due to the nature of the immutable smart contracts meant that it was impossible to migrate automatically and that there would be significant added technical complexity in the migration process due to the immutability of the contracts.

Furthermore, some assets would simply be impossible to migrate from the old over to the new system for at least 1 year, due to the immutable nature of the contracts.

This adds significant complexity and difficulty to the migration process that is expensive and time consuming to implement. It also introduces a significant amount of risk to the migration process, and broadens the attack surface for the migration process and the new contracts which have added complexity due to the limitations of the migration process.

By using a standardised upgrade process such as the UUPS proxy standard, we can significantly reduce the complexity, cost, and risk of any future upgrade processes.

This would mean if the community decides to further upgrade the staking functionality in the future, we would be much better equipped to do so.

## Specification

1. Move all constructor logic from `StakingRewardsV2` and `RewardEscrowV2` to an `initialize` function.
2. Inherit the `UUPSUpgradeable` openzeppelin implementation in `StakingRewardsV2` and `RewardEscrowV2`.
3. Upgrade the migration scripts to deploy the contracts as proxies following the UUPS standard with a ERC1967 compliant Proxy contracts.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
