---
kip: 68
title: Improve Trading Rewards Eligibility
status: Approved
created: 2023-03-15
section: 3.4
---

## Simple Summary

Remove keeper fees from trading rewards eligibility.

## Abstract

Currently all protocol fees and keeper fees increase the amount of KWENTA trading rewards received. This change will remove the keeper fees from that calculation, preventing potential abuse to farm rewards before OP rewards are launched.

## Motivation

There is a potential exploit where traders can submit trades they execute from a second account. This will increase the total fees paid and rewards received by that user, however since they receive the keeper fee back they aren't taking any risk.

## Specification

When calculating fees eligible for rewards, subtract the total of `keeperFeesPaid` from their total before distributing rewards.

Changes section 3.4 from:
```
It’s important to note that 𝑓𝑒𝑒𝑠_𝑝𝑎𝑖𝑑 is used here rather than 𝑡𝑟𝑎𝑑𝑖𝑛𝑔𝑣𝑜𝑙𝑢𝑚𝑒 to prevent abuse. Since different markets will have lower fees than others (e.g. FOREX markets may have extremely low fees), malicious stakers may inflate their rewards by trading large volumes in low fee markets. Using 𝑓𝑒𝑒𝑠_𝑝𝑎𝑖𝑑 levels the playing field for all stakers.
```
to:
```
It’s important to note that 𝑓𝑒𝑒𝑠_𝑝𝑎𝑖𝑑 is used here rather than 𝑡𝑟𝑎𝑑𝑖𝑛𝑔𝑣𝑜𝑙𝑢𝑚𝑒 to prevent abuse. Since different markets will have lower fees than others (e.g. FOREX markets may have extremely low fees), malicious stakers may inflate their rewards by trading large volumes in low fee markets. Keeper fees are excluded from 𝑓𝑒𝑒𝑠_𝑝𝑎𝑖𝑑 to avoid abuse from self-executed transactions. Limiting 𝑓𝑒𝑒𝑠_𝑝𝑎𝑖𝑑 to only include protocol fees levels the playing field for all stakers and ensures that traders must take risk to earn rewards.
```

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).