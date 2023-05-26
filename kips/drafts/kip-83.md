---
kip: 83
title: Establish Risk Protection Fund
status: draft
created: 2023-05-26
section: 2.5
---

## Simple Summary
This proposal aims to establish a Risk Protection Fund, establish initial funding, and an ongoing funding source. The Risk Protection Fund will be placed under the management of the AdminDAO and will be used to reward users that report bugs and errors in the Protocol’s codebase.

## Abstract
The creation of the Risk Protection Fund formalizes the process for rewarding users that identify and report bugs and errors in the Protocol’s codebase. 

## Motivation
As the KwentaDAO continues to successfully facilitate a higher  volume of transactions, the risk of user loss   becomes greater. Although users themselves must  be aware of the risks of using the Protocol, a formal program that is similar to a traditional “bug bounty” program will incentivize users  to report potential issues to the AdminDAO in detail. By proactively addressing reported issues, the KwentaDAO can prioritize building a reliable and  positive experience for its users. 

With the establishment of the Risk Protection Fund, the KwentaDAO will have a clear mandate, as well as the requisite funds, to evaluate and address bugs and errors moving forward. Additionally, the users of the Protocol will have an active role in this process.

## Specification

# Funding
As initial funding for the Risk Protection Fund, 100,000 $SNX will be allocated from existing SNX received through SIP-2002, Revised Volume Source Fee Program, incentives. Thereafter, up to 10% of the monthly incentives from this program will be diverted to the Risk Protection Fund as long as the balance in the Risk Protection Fund remains under 100,000 $SNX.

# Use Cases
The following guidelines will be established as an internal framework for use of the Risk Protection Fund. AdminDAO will maintain a document describing this framework. Adjustments to this framework are within the discretion of AdminDAO.
The Risk Protection Fund may be used in the following situations:
- When a loss is sustained or a considerable risk of loss is identified as a direct result of a bug in the Kwenta codebase.
- To reward  users or community members that report potential bugs in the codebase and subsequently cooperate with contributors during the investigation of said incident or vulnerability.
- The Risk Protection Fund may not be used in the following situations:
- When a loss or risk of loss is identified but is related to 3rd party infrastructure, user equipment or a situation outside of the codebase of the Protocol.
- When a user sustains a loss that could have been mitigated by user action is due to the inherent risks of market exposure, or is a result of user negligence.
- When a user requests compensation for a realized loss but is not able to demonstrate that the loss was due to the Kwenta platform itself or does not reasonably cooperate with the KwentaDAO’s investigation.
- When a user requests compensation for identifying a potential bug but is not able to demonstrate that the risk is due to the Kwenta platform itself, or that loss is likely and imminent.

The disbursement of rewards will be at the discretion of AdminDAO, but will follow these general guidelines:
- Tokens  that are distributed as awards should be valued at the market rate against sUSD on liquid exchanges for the purposes of these guidelines.
- Individual rewards to a user should be based only on excess losses which are a direct result of an error or bug in the KwentaDAO codebase.. 
- Awards are always within the discretion of the AdminDAO.
- Awards for a single event or tightly clustered series of events cannot exceed the total holdings of the Risk Protection Fund.
- $KWENTA tokens that are distributed from the Risk Protection Fund should follow the same vesting schedule as rewards from staking.

# Prevention Measures
To mitigate the risk of losses in the future and ensure users are informed about the state of the Kwenta platform, a review of the KwentaDAO product offerings and platform should be completed with the following goals:
- The terms of service should include an open and obvious warning that the use of Kwenta may result in a total loss of funds. 
- Specific and visible warnings should be placed on all new features or recent significant changes to the Kwenta platform. 
- Each major product update should include a review process.

## Technical Specification
The Risk Protection Fund will be held in a multisig wallet controlled by AdminDAO members separate from the AdminDAO’s primary budget which funds day to day operations.

Suggested changes to the KSL:

> ## Risk Protection Fund
> # Establishment of the Risk Protection Fund
> A Risk Protection Fund will be created, placed under the management of the AdminDAO, and used to reward users that report bugs and errors in the Protocol’s codebase. 
> # Funding
> As initial funding for the Risk Protection Fund, 100,000 $SNX will be allocated from existing SNX received through SIP-2002, Revised Volume Source Fee Program, incentives. Thereafter, up to 10% of the monthly incentives from this program will be diverted to the Risk Protection Fund as long as the balance in the Risk Protection Fund remains under 100,000 $SNX.
> # Internal Guidelines
> Internal guidelines will be established as an internal framework for use of the Risk Protection Fund. AdminDAO will maintain a document describing this framework. Adjustments to this framework are within the discretion of AdminDAO.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
