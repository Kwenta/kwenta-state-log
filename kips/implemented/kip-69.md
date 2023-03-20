---
kip: 69
title: Host KSL on GitHub
status: Implemented
created: 2023-03-15
section: 4.2
---

## Simple Summary

Host the Kwenta State Log repository on GitHub for easier maintenance and community collaboration.

## Abstract

The current state of Radicle development does not allow for efficient and smooth maintenance and collaboration, resulting in too many disruptions and additional CC resources necessary to maintain it. To solve this, the KIP suggests moving the Kwenta State Log repository from Radicle to GitHub for easier maintenance and collaboration.

## Motivation

After several months of using Radicle, it became evident that the product is not stable mission ready. While Radicle has the potential to become an excellent protocol for decentralized code collaboration, the current stable version is difficult to maintain and collaborate on. Furthermore, the development of the existing legacy system has stopped in favor of a new version that has yet to ship. To make the submission of Kwenta Improvement Proposals (KIPs) and maintenance of KSL easier for community members, moving the repository to GitHub is proposed as a temporary solution.

## Specification

This KIP suggests the following changes:
    
* Host the Kwenta State Log on GitHub
* Clarify that active development as of now is happening on GitHub for both the frontend and KSL
* Update Elite Council endorsed links to decentralized code repositories and GitHub repository

Suggested changes to the KSL:

```
diff --git a/sections/4.md b/sections/4.md
index 630f691..b6eec66 100644
--- a/sections/4.md
+++ b/sections/4.md
@@ -20,7 +20,7 @@ Milestones on the roadmap will include budgets of KWENTA bonuses for the adminDA
 
 ## Decentralized Deployment
 
-The Kwenta frontend source code and Kwenta State Log (KSL) are distributed through a decentralized code collaboration network called Radicle. The elected Elite Council votes on the repositories it officially endorses.
+The Kwenta frontend source code and Kwenta State Log (KSL) are hosted both on GitHub and distributed through a decentralized code collaboration network called Radicle. The elected Elite Council votes on the repositories it officially endorses.
 The Elite Council and Core Contributors manage a multisig which requires 2/6 votes, 5 of which are held by Elite Council members and 1 of which is held by the Core Contributors (any Core Contributor).
 
 ### Frontend
@@ -33,7 +33,7 @@ The endorsed decentralized code project for Kwenta is:
 
 `rad:git:hnrkdc9jh3a1ud7k3spy9pper1ptbkh55yy5y`
 
-And can be found at: <https://app.radicle.xyz/seeds/maple.radicle.garden/rad:git:hnrkdc9jh3a1ud7k3spy9pper1ptbkh55yy5y>
+And can be found at: <https://kwenta-gov.on.fleek.co/seeds/maple.radicle.garden/rad:git:hnrkdc9jh3a1ud7k3spy9pper1ptbkh55yy5y/tree> or on Github at: <https://github.com/Kwenta/kwenta>
 
 ### Kwenta State Log Repository
 
@@ -41,13 +41,12 @@ The endorsed decentralized code project for the KSL is:
 
 `rad:git:hnrkq1oex148yz4zi9tm7spfnjaryyuc93yay`
 
-And can be found at: <https://app.radicle.xyz/seeds/maple.radicle.garden/rad:git:hnrkq1oex148yz4zi9tm7spfnjaryyuc93yay/tree/master>
+And can be found at: <https://kwenta-gov.on.fleek.co/seeds/maple.radicle.garden/rad:git:hnrkq1oex148yz4zi9tm7spfnjaryyuc93yay/tree/master> or on GitHub at: <https://github.com/Kwenta/kwenta-state-log>
 
 
 ### Radicle Note
 
-Due to Radicles current limitations while under active development, a gradual step-by-step approach is applied to avoid interruptions to the protocols development while giving contributors the chance to become familiar with Radicle and iron out any hiccups along the way.
-
+Due to Radicles current limitations while under active development, active development of the frontend code repository and code collaboration of the Kwenta State Log are taking place on GitHub.
 In case of disagreements, abandonment or forks of the endorsed Kwenta source code project, community members can put forward requests to the Elite Council in order to vote on alternative project ids being supported and officially endors
ed.
```

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
