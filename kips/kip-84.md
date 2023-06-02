---
kip: 84
title: Develop Referral Program
status: Draft
created: 2023-05-31
section: 4
---

## Simple Summary

Add a referral program that modifies the existing trading rewards calculations, allowing Kwenta traders to add to their own rewards_score by holding an NFT which represents referring a trader, being referred, or participating in promotions directed by the Grants Council.

To prevent self-referrals or Sybil attacks and incentivize wallets participating in the program to stake $KWENTA tokens, the NFTs representing referrals will have a tiered impact on the rewards_score of a wallet based on a combination of factors, including the $KWENTA balance of the issuing wallet.

## Abstract

This proposal aims to introduce a referral program to Kwenta, enhancing the trading rewards system and incentivizing traders to refer new users. The referral program will utilize NFTs to represent referrals, with different tiers and impact on rewards_score based on factors such as the $KWENTA balance of the issuing wallet. By implementing the referral program, Kwenta aims to increase user acquisition and provide additional value to $KWENTA stakers and traders.

## Motivation

Referral programs are a common marketing strategy for both centralized and decentralized exchanges, offering advantages such as permissionless onboarding, low overhead, and performance-based incentives. By introducing a referral program tied to the rewards_score variable described in KIP-3 and the $KWENTA staking mechanism, Kwenta can leverage a clearly defined source of funding for user acquisition while providing additional value to $KWENTA stakers and traders.

The referral program aims to utilize the existing $KWENTA trading rewards mechanism to reward participants. Additionally, by storing Issuer and Recipient data on-chain, Kwenta can target Issuer wallets with future rewards sources from Kwenta or partner protocols, creating incentives for immediate referral participation.

## Specification

### Definition of Terms

- Issuer: The user wallet that initiates the referral of a new user.
- Recipient: The user wallet that mints the soulbound Boost NFT.
- Boost NFT: A soulbound NFT held by a recipient, referencing an issuer.
- referral_score: The value assigned to issuer wallets, determining the type and impact of the Boost NFT.
- Bonus: The bonus awarded to the issuer, calculated as the recipient's rewards_score multiplied by the bonusRate.

### Boost NFT Tiers

| Tier   | referral_score               | boost | bonusRate |
| ------ | ---------------------------- | ----- | --------- |
| Bronze | 0 < referral_score < 100     | 0.05  | 0.5       |
| Silver | 100 ≥ referral_score < 200   | 0.10  | 0.55      |
| Gold   | referral_score ≥ 200         | 0.15  | 0.6       |

### Rewards Calculations

- rewards_score calculation: `rewards_score = fees_paid^a * (staked_KWENTA+0.1)^1-a`
- final_score calculation for a trader: `final_score = rewards_score + (rewards_score * boost) + Σbonus`
- referral_score calculation for an issuer: `referral_score = staked_KWENTA + nftScore`

`a` is a configurable value currently set to `0.7` under KIP-3, the Cobb-Douglas function defining the weighting between fees_paid and staked_KWENTA.

### Technical Specifications

- Deploy a contract allowing the MarketingDAO or AdminDAO to mint and distribute Affiliate NFTs with an nftScore value.
- Deploy a contract allowing a Recipient to mint a single soulbound Boost NFT and define an Issuer address.

### Special Cases

To prevent abuse and migration-based circumvention of holding multiple NFTs, when a trader migrates escrowed $KWENTA between wallets:
- If a wallet has received escrowed $KWENTA due to migration, boost = 0 for that wallet.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
