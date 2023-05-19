---
kip: 79
title: Smart Margin Account Upgrade v2.0.2
status: Draft
created: 2023-04-17
section: 4
---

## Summary
Upgrade Smart Margin (SM) account conditional order related logic based on price feeds provided by Pyth's Oracle Network.

## Motivation
This proposal suggests enhancing the performance of Smart Margin (SM) accounts by integrating Pyth's Oracle Network to obtain more accurate price feeds. The existing latency issues associated with the current price feeds used by SM accounts negatively impact user experience (UX). Therefore, replacing the current mechanism utilized by SM accounts will directly enhance the trading experience on Kwenta.

## Specification
The integration of Pyth's on-chain price feed service is a necessary step to improve the precision of conditional orders within SM accounts. A comprehensive guide outlining the process for integrating Pyth's on-chain price feed service can be found in the following document: https://docs.pyth.network/pythnet-price-feeds/best-practices. To access the price feeds, SM accounts will utilize a contract deployed by Synthetix that enables direct querying of base asset prices (refer to IPerpsV2ExchangeRate).

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).