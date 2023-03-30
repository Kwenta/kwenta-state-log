---
kip: 71
title: Abolish Presidental Governance 
status: Draft
created: 2023-03-14
section: 2.2, 2.10, 4.1
---

## Simple Summary

Abolish the Elite Council president and distribute its task among existing DAO institutions.

## Abstract

The KIP proposes to abolish the role of the president within the Elite Council. Tasks under the role of the president can be easily picked up by existing Kwenta subDAOs, such as the Management Contributors, adminDAO and Elite Council, making its role obsolete.

## Motivation

While the initial establishment of a president intended to introduce a decisive party in case of a draw for voting decisions with the Elite Council, the DAO should strive for more unanimous decision-making in case of Elite Council dividedness. The current 3/5 majority should suffice for Elite Council decision-making.

The other task of the president is currently to establish the strategy and roadmap of the KwentaDAO, however the president alone should not be solely responsible for the roadmap. Different institutions within the DAO are involved in determining the roadmap, such as the Core Contributors, Management Contributors, adminDAO, treasuryDAO and ultimately also the Elite Council. Is is therefore of the interest of the DAO to have a mutually worked out roadmap and stategy in place, which is ultimately approved by the Elite Council.

## Specification

The KIP suggests the following changes to the KSL:
    
* Remove the additional vote of the president and maintain solely a 3/5 majority requirement
* Remove the president role
* Add the strategic direction responsibility to the Management Contributors as part of their roadmap oversight
* Update Section 2 to add *DAO Role Compensation* as section 2.10 to the existing document, and move *marketingDAO Grants Council Trial* into section 2.11.

Suggested changes section 2:

```
diff --git a/sections/2.md b/sections/2.md
index e0e2abd..5795cae 100644
--- a/sections/2.md
+++ b/sections/2.md
@@ -13,7 +13,8 @@
 7. [devDAO](#devdao)
 8. [marketingDAO](#marketingdao)
 9. [Product Elite](#product-elite)
-10. [marketingDAO Grants Council Trial](#marketingdao-grants-council-trial)
+10. [DAO Role Compensation](#dao-role-compensation)
+11. [marketingDAO Grants Council Trial](#marketingdao-grants-council-trial)
 ---
 
 Kwenta governance follows a democratic structure with multiple semi-independent governing bodies, each with their own goals and operational structure.
@@ -26,11 +27,7 @@ To become a staker, KWENTA holders can use the Kwenta staking interface to stake
 
 ## Elite Council
 
-Token holders will vote every 6 (six) months on 5 community members to operate the Elite Council. To win an election candidates must have been assigned enough voting power from stakers to be among the top five candidates with the most voting power. To become a candidate community members must nominate themselves in Discord once a nomination period has been opened by the adminDAO at the end of an epoch. The Elite Council will be responsible for voting to pass or block KIPs. Proposals must reach a majority to pass (3/5 votes or 4/6 votes in the event the president uses their additional vote). Meta-Governance proposals require unanimous support.
-
-### president
-
-One of the 5 Elite Council members will become the president. The president is elected within the Elite Council, requiring 3/5 members' support. The president will be responsible for the strategic direction of the protocol and will have one additional vote of power representing the equivalent of two Elite Council members.
+Token holders will vote every 6 (six) months on 5 community members to operate the Elite Council. To win an election candidates must have been assigned enough voting power from stakers to be among the top five candidates with the most voting power. To become a candidate community members must nominate themselves in Discord once a nomination period has been opened by the adminDAO at the end of an epoch. The Elite Council will be responsible for voting to pass or block KIPs. Proposals must reach a majority to pass (3/5 votes). Meta-Governance proposals require unanimous support.
 
 ## treasuryDAO
 
@@ -38,7 +35,7 @@ The treasuryDAO controls the treasury, investment, and growth funds for the Kwen
 
 ## Management Contributors
 
-There are only two management roles currently available: operations management and development management. These positions can be reduced or expanded upon with the introduction of a KIP. These are senior positions held by individuals that are responsible for ensuring their branch of the protocol is functioning smoothly. These individuals are responsible for delivering on roadmap goals by coordinating with other DAO roles. Management Contributors will have structured packages as a retainer for their services. Only Core Contributors are eligible for this position.
+There are only two management roles currently available: operations management and development management. These positions can be reduced or expanded upon with the introduction of a KIP. These are senior positions held by individuals that are responsible for ensuring their branch of the protocol is functioning smoothly. These individuals are responsible for stategic development and subsequent delivering on roadmap goals by coordinating with other DAO roles. Management Contributors will have structured packages as a retainer for their services. Only Core Contributors are eligible for this position.
 
 ## adminDAO
 
@@ -189,7 +186,6 @@ The number of available feedback slots per grant and the grant value are depende
 | Role | Amount | Frequency |
 | ----------- | ---------- | ---------- |
 | Elite Council | 2500 USD in Kwenta | Monthly  |
-| president | 2500 USD in Kwenta | Monthly  |
 | treasuryDAO | 2500 USD in Kwenta | Monthly  |
 | Management Contributors | 1000 USD in Kwenta | Monthly  |
 | adminDAO | 1000 USD in Kwenta | Monthly  |
```

Suggested changes section 4:

```
diff --git a/sections/4.md b/sections/4.md
index b375c1e..b0bdaa3 100644
--- a/sections/4.md
+++ b/sections/4.md
@@ -12,7 +12,7 @@
 
 ## Roadmap Development Process
 
-Any time a new council is voted in, it will be the responsibility of the Elite Council, in collaboration with Core Contributors, to establish a refreshed roadmap. The Elite Council President will be accountable for coordinating the development of the roadmap. The roadmap will need to pass a feasibility check by all Core Contributors (CCs) where consensus is reached amongst CCs that they are comfortable with the scope of work and direction. If the roadmap does not receive majority support within the council or amongst CCs, the roadmap will need to be adjusted until it passes both checks.
+Any time a new council is voted in, it will be the responsibility of the Elite Council, in collaboration with Management Contributors, Core Contributors, and adminDAO to establish a refreshed roadmap. The roadmap will need to pass a feasibility check by all Core Contributors (CCs) where consensus is reached amongst CCs that they are comfortable with the scope of work and direction. If the roadmap does not receive majority support within the Elite Council or amongst CCs, the roadmap will need to be adjusted until it passes both checks.
 
 Once the roadmap is approved, the Core Contributors will work to establish a delivery schedule reflective of the roadmap. As new KIPs are introduced, the CCs will be tasked with updating the delivery schedule to accommodate for the newly passed KIPs.
 ```

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).