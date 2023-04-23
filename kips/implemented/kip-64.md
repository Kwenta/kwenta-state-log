---
kip: 64
title: Liquidity Mining Incentives
status: Implemented
created: 2023-02-08
section: 5.6
---

## Simple Summary
This KIP proposes to incentivize liquidity mining on Velodrome based on the findings from the second trial phase.

## Abstract
KIP-46, KIP-49, and KIP-50 [(Section 5.6 of the KSL)](../../sections/5.md#trial-liquidity-mining-on-velodrome) introduced a trial of liquidity mining between Uniswap and Velodrome. The results of the second trial have been analyzed and, as a result, this KIP proposes to incentivize liquidity mining on Velodrome.

## Motivation
The second trial revealed that the Velodrome WETH/KWENTA pool was able to attract roughly 100% more TVL per 1 KWENTA of incentives compared to the Arrakis WETH/KWENTA pool. Additionally, the KWENTA trading volume during this period was 87% higher on Velodrome than on Uniswap. These findings have led to the conclusion that Velodrome is the more efficient platform for liquidity mining incentives.

![Liquidity Mining Incentives](../../images/kip-64-liquidity-incentives.png)

## Specification
The allocation of liquidity mining incentives will be based on the KWENTA inflation schedule, starting from epoch 16. The incentives will be equal to 0.5% of the scheduled inflation for each epoch. For example for epoch 16 the proposed 0.5% of the scheduled inflation would be 53 KWENTA.

Liquidity mining incentives allocation schedule:

* Epoch 13: 50 KWENTA Velodrome, 50 KWENTA Arrakis 
* Epoch 14: 50 KWENTA Velodrome, 35 KWENTA Arrakis 
* Epoch 15: 50 KWENTA Velodrome, 20 KWENTA Arrakis
* From epoch 16 and beyond, all of the liquidity mining incentives will be allocated solely to Velodrome. 

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).