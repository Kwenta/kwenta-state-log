---
kip: 73
title: Smart Margin Account Upgrade v2.1.0
status: Draft
author: Jared Borders (@jaredborders)
created: 2023-04-17
---

## Summary
This KIP proposes upgrading Smart Margin (SM) accounts to improve risk management and conditional order execution accuracy.

## Motivation
The implementation of SM has necessitated the adoption of risk management measures to mitigate unforeseen account behavior during upgrades to the Synthetix system and Kwenta's. Specifically, the capability to suspend command execution has been identified as a crucial tool for ensuring system stability. Additionally, the integration of a pause feature in SM account trading would offer an extra layer of security to safeguard against potential losses due to smart contract exploits.

While the introduction of SM has enabled conditional orders, the existing Chainlink oracle price feeds utilized to verify acceptable order conditions for execution exhibit a delay absent in Pyth oracle-provided price feeds. As such, this proposal advocates for SM accounts to access lower-latency oracles to enhance trade accuracy and optimize user experience.

## Specification
By introducing a single verification within the `Account.execute` function that queries the SM account factory contract, a system-wide suspension of command execution can be executed while retaining the ability to target individual accounts. This dedicated suspension logic will enhance the risk management capabilities of the system.

In order to enhance the accuracy of conditional orders, the integration of Pyth's on-chain price feed service into SM accounts is required. The process for integrating Pyth's on-chain price feed service is detailed in this document: https://docs.pyth.network/pythnet-price-feeds/best-practices.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).