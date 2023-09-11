---
kip: 97
title: Referral Program Policy Adjustments
status: Draft
created: 2023-09-07
section: 4
---

## Simple Summary

This KIP proposes adjustments to the existing referral program policies in Kwenta, including the removal of certain policies and the introduction of a burn address referral code.

## Abstract

This proposal aims to modify the current referral program policies in Kwenta to better align with technical limitations and community needs. It suggests the removal of the policy related to escrowed $KWENTA and introduces a burn address referral code. Additionally, it proposes an increase in $KWENTA trading rewards and outlines a formal process for the referral program's launch and testing period.

## Motivation

The motivation for these policy changes is a variety of technical limitations, optimizations, and a desire to provide the Kwenta community with a full view of the release schedule and each aspect of its implementation.

### Removal of Escrowed $KWENTA Policy

The policy regarding escrowed $KWENTA has become challenging to implement due to technical limitations, and there is no immediate solution for its quick implementation. Additionally, the risk of users migrating escrowed $KWENTA early in the launch of Staking v2 for the purpose of gaming the referral system is minimal. As such, the removal of this policy is motivated by the need to streamline the referral program's launch and avoid technical complexities.

### Introduction of Burn Address Referral Code

The existing policy that "issuers will not be eligible to refer or earn rewards from wallets onboarded prior to the passage of this KIP" can be restrictive and penalizes previously active community members. By introducing a burn address referral code we provide a flexible solution. This code is shared with existing active community members, offering them an incentive to use it, as affiliate bonus rewards will be burned rather than added to the market. This soft enforcement ensures that affiliates can engage in marketing and issue Boost NFTs to previous traders who may have become inactive in the community. It also allows traders to choose to use the code of the trader who referred them, striking a balance between encouraging affiliates to expand the community and avoiding harsh penalties for those who have already been participating. The introduction of the burn address as an issuer is a symbolic step toward reducing the $KWENTA supply as a result of on-chain activity.

### Rewards Allocation Adjustment

Increasing the $KWENTA trading rewards allocation from 5% to 10% of inflation is warranted due to a significant reduction in inflation over previous epochs. This adjustment ensures that sufficient $KWENTA is allocated to boosts and bonuses without reducing the allocation to existing traders. It aligns with the program's goal of enhancing rewards for participants.

### Referral Program Launch and Testing Process

The gating of the initial launch for testing and user feedback purposes ensures we are able to test in a real world environment while keeping a manageable scale. Affiliates will be onboarded directly through a privately shared Testing URL. Transitioning to the public launch after a period of successful testing ensures that the referral program is fully functional and performing acceptably before scaling community involvement, and gives an opportunity for involved community members to take a direct role in the process and work with Kwenta CCs.

## Specification

### Policy Adjustments

#### Removal of Escrowed $KWENTA Policy

- The policy stating, "If a wallet has received escrowed $KWENTA due to migration, boost = 0 for that wallet" will be removed.

#### Introduction of Burn Address Referral Code

- The policy stating, "issuers will not be eligible to refer or earn rewards from wallets onboarded prior to the passage of this KIP" will be removed. 

- The MarketingDAO will launch an optional Gold tier referral code from gnosis safe as the issuer, then transfer ownership of the gnosis safe to the vanity burn address `0xfaded420faded420faded420faded420faded420`, effectively burning affiliate rewards associated with this code.

- This code will be shared with existing active community members through the Kwenta discord.

### Rewards Allocation Adjustment

- The $KWENTA trading rewards allocation will be increased from 5% to 10% of inflation beginning with the first epoch in which the referral program is considered in rewards calculations. 

- The allocation currently directed toward the treasury and earmarked for future rewards will be reduced from 15% to 10% to accomodate this change.

### Referral Program Launch and Testing Process

- The initial launch of the referral program will be gated for testing and user feedback purposes. Affiliates will be onboarded at the discretion of the MarketingDAO through a privately shared Testing URL.

- Gating will involve making the Affiliate tab of the feature inaccessible from the main Kwenta frontend but accessible from the Testing URL. The Trader tab of the referral feature will be accessible for all Kwenta users.

- The first epoch using the $KWENTA rewards distribution scheme outlined in KIP-84 will begin following Epoch 44 to allow for a full migration from Staking v1 to Staking v2, expected in Epoch 43-44.

- The testing period will conclude, and the public launch will commence after the version of Kwenta accessible through the Testing URL has been updated with full proper functionality and without critical errors for a period of 1 week.
