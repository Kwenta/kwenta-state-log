---
kip: 76
title: protocolDAO
status: Draft
created: 2023-05-09
section: TBD
---

## Summary

Introduce a multisig that controls protocol upgrades and parameter changes.

## Abstract

A 3/4 Gnosis Safe will be created consisting of two technical CCs, the adminDAO, and the Elite Council as signers to facilitate protocol changes.

## Motivation

Protocol upgrades or parameter changes require a technical understanding of the system in order to properly verify and sign off on upgrades. This responsibility is currently held by the adminDAO, however, the adminDAO is responsible for CC stipends, vendor payments, and other short term expenses -- not protocol upgrades. 

Secondly, the responsibility of owning the protocol falls heavily on the CCs (adminDAO). Adding in the EC as a signer moves this locus of control more across the DAO.

## Specification

A Gnosis Safe will be created with a 3/4 signing requirement. Two members will be protocol engineers (CCs). The initial protocol engineers are assigned by the adminDAO. The two remaining signature bodies are the adminDAO and the Elite Council (EC). 

This structure enables CCs to propose/verify changes necessary in a flexible manner, but also have the oversight of the adminDAO/EC. The flow is expected to happen in this manner:

1. 2 technical CCs propose (sign) an upgrade or parameter change
2. adminDAO or EC is communicated of this change and provides the final signature

### In Practice

- All deployed ownable contracts will have ownership migrated from the adminDAO to the pDAO.
- All future contracts deployed by CCs will have ownership granted to the pDAO after deployment.

### Availability Responsibility

Because of the responsibility held by those on this multisig there is an expectation that all members (even individual signers of adminDAO and EC) must be available within 24 hours in the event the system needs to be paused or an emergency upgrade needs to be undertaken.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).