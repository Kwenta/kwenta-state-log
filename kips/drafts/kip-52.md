---
kip: 52
title: Direct Trading Rewards to Perps V2
status: Draft
created: 2023-01-12
---

## Summary
This KIP proposes porting trading rewards from Perps V1 to Perps V2.

## Abstract
This KIP would allow for escrowed Kwenta to be earned for fees generated on trades on V2 Perps, thus transitioning from V1 to V2. 

## Motivation
Earning rewards based on fees paid on perps is a major motivator for traders as it incentivises them to use the platform as well as builds loyalty in the long run. Earned Kwenta can be staked and the rewards from staking gives traders an additional incentive as well. 

Currently, however, these rewards are earnable on V1. Porting rewards to V2 would make V2 usage significantly more enticing for regular traders and become the de facto home for all trading activity on the platform. 

## Specification
Move trading rewards from V1 to V2. In order to facilitate a seamless transition to V2 and to make calculation easier, trading rewards on V1 will be halted thus supporting rewards on only one version of the platform (V2). Trading rewards should be ported to V2 with the launch of new market on V2.

The suggested last epoch for V1 rewards is epoch 12, ending February 14th, 23:59 UTC. Starting with epoch 13, trading rewards should be calculated based on fees paid on Perps V2 instead of V1.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
