# ADMINISTRATORS TRACK -- Silver (Certified) Assessment

**Assessment ID:** ADM-CERT-01
**Passing Score:** 70% (18 of 25)
**Total Questions:** 25
**Time Limit:** 45 minutes

**Domain Weighting:**
- Admin Portal & Setup: 15% (4 questions)
- User Provisioning & Licensing: 25% (6 questions)
- Telephony & PBX: 25% (6 questions)
- Security & Access Control: 20% (5 questions)
- Monitoring & Analytics: 15% (4 questions)

---

## Domain 1: Admin Portal & Setup

### Question 1

```yaml
id: ADM-CERT-01-Q01
type: multiple_choice
difficulty: easy
domain: Admin Portal & Setup
question: >
  What is the URL for the Rainbow admin portal, and which role is required
  at minimum to access it for troubleshooting purposes?
options:
  a: portal.openrainbow.com; Company Admin role required
  b: admin.openrainbow.com; Support Admin (read-only) role is the minimum for troubleshooting access
  c: manage.openrainbow.com; Organization Admin role required
  d: admin.openrainbow.com; any Rainbow user can access the admin portal
correct_answer: b
explanation: >
  The Rainbow admin portal is accessed at admin.openrainbow.com. The
  Support Admin role provides read-only access for troubleshooting purposes
  — viewing user status, telephony configuration, and logs without the
  ability to make changes. This is the minimum role needed for support
  activities and follows the least-privilege principle.
```

### Question 2

```yaml
id: ADM-CERT-01-Q02
type: multiple_choice
difficulty: medium
domain: Admin Portal & Setup
question: >
  An administrator needs to configure Rainbow for a company with offices
  in France and Germany. What is the correct approach for data center
  region selection?
options:
  a: Select the US data center for the best global performance
  b: Select the EU data center region at company creation; all data will be stored and processed exclusively in the EU
  c: Create two separate companies — one in the France region and one in the Germany region
  d: The data center region is automatically determined based on the admin's IP address
correct_answer: b
explanation: >
  At company creation, the administrator selects the data center region.
  For a French-German company, the EU data center region ensures all data
  is stored and processed within the EU. There is no need to create
  separate companies for France and Germany — one company in the EU region
  serves both offices. The region selection cannot be changed later without
  a data migration, so it must be chosen correctly at setup.
```

### Question 3

```yaml
id: ADM-CERT-01-Q03
type: multiple_choice
difficulty: medium
domain: Admin Portal & Setup
question: >
  What is the difference between an "Organization" and a "Company" in
  Rainbow's administrative hierarchy?
options:
  a: They are synonyms for the same entity
  b: An Organization is a parent entity containing one or more Companies; the Organization Admin has visibility across all Companies, while Company Admins manage a single Company
  c: A Company is a parent entity containing multiple Organizations
  d: An Organization is for cloud deployments and a Company is for Edge deployments
correct_answer: b
explanation: >
  In Rainbow's hierarchy, an Organization is the top-level entity that
  contains one or more Companies. A multi-national corporation might have
  one Organization with Companies for each country or subsidiary. The
  Organization Admin can manage all Companies, allocate licenses from a
  shared pool, and enforce organization-wide policies. Company Admins
  manage their individual Company's users, settings, and configurations.
```

### Question 4

```yaml
id: ADM-CERT-01-Q04
type: true_false
difficulty: easy
domain: Admin Portal & Setup
question: >
  Rainbow supports three deployment models: Public Cloud (SaaS), Edge
  (private on-premises), and Hybrid (cloud collaboration with on-premises
  PBX telephony).
options:
  a: "True"
  b: "False"
correct_answer: a
explanation: >
  Rainbow supports all three deployment models. Public Cloud is a
  multi-tenant SaaS platform hosted across 22 data centers. Edge is a
  private deployment on customer-owned infrastructure with no cloud
  dependency. Hybrid combines cloud-based collaboration features with
  on-premises PBX for telephony, connected by the Cloud Connector. The
  deployment model should be selected based on data sovereignty
  requirements, internet reliability, and existing infrastructure.
```

---

## Domain 2: User Provisioning & Licensing

### Question 5

```yaml
id: ADM-CERT-01-Q05
type: multiple_choice
difficulty: easy
domain: User Provisioning & Licensing
question: >
  Which provisioning method is recommended for organizations with 100 or
  more users?
options:
  a: Manual user creation via the admin portal one user at a time
  b: LDAP/Active Directory synchronization for automated provisioning
  c: Asking each user to self-register on the Rainbow website
  d: Sending bulk invitation emails with registration links
correct_answer: b
explanation: >
  LDAP/Active Directory synchronization is the recommended provisioning
  method for organizations with 100+ users. It automates user creation,
  attribute mapping (name, email, department, phone number), and ongoing
  synchronization of changes. Manual creation does not scale, self-
  registration lacks administrative control, and invitation emails are
  unreliable for large deployments.
```

### Question 6

```yaml
id: ADM-CERT-01-Q06
type: multiple_choice
difficulty: medium
domain: User Provisioning & Licensing
question: >
  An administrator configures LDAP synchronization but no users are
  imported after the initial sync. Which of the following is the MOST
  likely cause?
options:
  a: The LDAP server is running a version that is incompatible with Rainbow
  b: The base DN scope does not contain the target users, or the LDAP filter syntax is incorrect
  c: Rainbow cannot connect to LDAP servers outside the EU
  d: Users must accept an invitation before they appear in the directory
correct_answer: b
explanation: >
  The most common cause of failed LDAP imports is an incorrect base DN
  (the specified OU does not contain the target users) or an incorrect
  LDAP filter. The default filter is (&(objectClass=user)(mail=*)), which
  requires users to have a mail attribute. If users are in a different OU
  or lack the mail attribute, they will not be imported. The admin should
  verify the base DN scope and filter syntax before troubleshooting other
  causes.
```

### Question 7

```yaml
id: ADM-CERT-01-Q07
type: scenario
difficulty: hard
domain: User Provisioning & Licensing
question: >
  Scenario: An organization uses Azure AD with SCIM provisioning to
  Rainbow. A user is disabled in Azure AD, but their Rainbow account
  remains active 24 hours later. What should the administrator
  investigate?
options:
  a: SCIM does not support user deactivation — the admin must manually deactivate in Rainbow
  b: Check the Azure AD SCIM provisioning logs for failed operations; common causes include expired SCIM Bearer token (401 Unauthorized) or Azure AD scoping filter excluding the user from sync
  c: Azure AD changes take 7 days to propagate to Rainbow
  d: The user's Rainbow account must be deleted rather than deactivated
correct_answer: b
explanation: >
  SCIM supports full lifecycle management including deactivation. If a
  disabled Azure AD user remains active in Rainbow, the SCIM provisioning
  cycle has failed. The admin should check Azure AD > Enterprise
  Applications > Rainbow > Provisioning logs for errors. Common causes
  are an expired SCIM Bearer token (401 Unauthorized), Azure AD scoping
  filters that excluded the user from the provisioning scope, or a
  transient network error. Re-generating the SCIM token and forcing a
  sync typically resolves the issue.
```

### Question 8

```yaml
id: ADM-CERT-01-Q08
type: multiple_choice
difficulty: medium
domain: User Provisioning & Licensing
question: >
  Which Rainbow subscription tiers are available, listed from the most
  basic to the most feature-rich?
options:
  a: Free, Standard, Premium, Ultimate
  b: Essential, Business, Enterprise, Connect, Hub
  c: Starter, Professional, Enterprise
  d: Basic, Advanced, Premium
correct_answer: b
explanation: >
  Rainbow offers five subscription tiers: Essential (free tier with basic
  messaging and presence), Business (adds telephony, conferencing, and PBX
  integration), Enterprise (adds AI features, advanced recording, and
  compliance), Connect (extends to multi-company collaboration scenarios),
  and Hub (adds CPaaS capabilities with API access, webhooks, and bot
  framework). Each tier builds on the features of the previous tier.
```

### Question 9

```yaml
id: ADM-CERT-01-Q09
type: multiple_choice
difficulty: medium
domain: User Provisioning & Licensing
question: >
  An administrator wants to optimize licensing costs. A report shows that
  50 users with Business tier licenses have not logged in for 60 or more
  days. What is the recommended action?
options:
  a: Delete all 50 user accounts to reclaim the licenses
  b: Do nothing — the licenses might be needed in the future
  c: Downgrade the 50 inactive users from Business to Essential tier to free up Business licenses, and contact the users to confirm their status
  d: Disable the 50 users' accounts permanently
correct_answer: c
explanation: >
  The recommended approach is to downgrade inactive users from Business
  to Essential (the free tier that preserves their account and basic
  access) rather than deleting them. This reclaims the Business licenses
  for reallocation to active users while preserving the user accounts.
  The admin should also contact the inactive users to determine if they
  still need the service — they may have left the company or switched to
  a different tool.
```

### Question 10

```yaml
id: ADM-CERT-01-Q10
type: multiple_choice
difficulty: hard
domain: User Provisioning & Licensing
question: >
  An organization needs different directory visibility rules: Engineering
  can search all departments, but Sales can only search Sales and
  Operations. How should the administrator configure this?
options:
  a: Create separate Rainbow companies for each department
  b: Configure directory scopes that limit search visibility based on the user's department or group membership
  c: This is not possible in Rainbow — all users can search the entire directory
  d: Ask each department to use a different Rainbow login URL
correct_answer: b
explanation: >
  Rainbow supports directory scopes that limit which users a person can
  search and see. The administrator creates scopes in the admin portal
  that define visibility rules based on department, group membership, or
  site. Engineering users can be assigned a scope that includes all
  departments, while Sales users are assigned a scope limited to Sales
  and Operations. This is configured in Admin > Company > Directory >
  Scopes without requiring separate companies.
```

---

## Domain 3: Telephony & PBX

### Question 11

```yaml
id: ADM-CERT-01-Q11
type: multiple_choice
difficulty: easy
domain: Telephony & PBX
question: >
  What is the Rainbow Cloud Connector and what role does it play in PBX
  overlay deployments?
options:
  a: A physical hardware appliance that replaces the PBX
  b: A software agent installed on the customer's network that establishes a secure tunnel between the PBX and Rainbow cloud, handling CTI signaling, presence sync, and directory synchronization
  c: A browser extension that enables click-to-call functionality
  d: A mobile application for making calls over cellular networks
correct_answer: b
explanation: >
  The Rainbow Cloud Connector is a software agent installed on a server in
  the customer's network. It creates a secure tunnel between the on-premises
  PBX and the Rainbow cloud, bridging CTI signaling (call control events),
  presence synchronization, and directory data. It acts as a SIP B2BUA
  that translates between Rainbow's SIP dialect and the PBX's SIP dialect.
  Its health is critical for PBX overlay functionality and should be
  monitored via Admin > Company > Sites > PBX Status.
```

### Question 12

```yaml
id: ADM-CERT-01-Q12
type: scenario
difficulty: hard
domain: Telephony & PBX
question: >
  Scenario: After configuring PBX overlay, inbound PSTN calls ring the
  desk phone but not the Rainbow softphone. The PBX status shows
  "Registered" in the admin portal. What should the administrator check
  first?
options:
  a: The user's internet connection speed
  b: Whether the user has a DID assigned and their ring mode is set to "Simultaneous (Desk + Softphone)" in the telephony settings
  c: Whether the user has the latest Rainbow desktop client installed
  d: Whether the PBX firmware needs an upgrade
correct_answer: b
explanation: >
  When the PBX is registered but the softphone does not ring on inbound
  calls, the two most common causes are: (1) the user does not have a DID
  assigned that maps their PBX extension to the Rainbow account, and (2)
  the ring mode is set to "Desk Phone Only" instead of "Simultaneous."
  Both settings are configured in Admin > Users > [user] > Telephony
  Settings. The PBX registration being healthy rules out connectivity
  issues between Rainbow and the PBX.
```

### Question 13

```yaml
id: ADM-CERT-01-Q13
type: multiple_choice
difficulty: medium
domain: Telephony & PBX
question: >
  What is the most common cause of inbound call routing failures when
  PBX overlay is first configured?
options:
  a: The user's Rainbow client is not the latest version
  b: The PBX does not support SIP
  c: Number format normalization mismatch between E.164 format used by Rainbow and local format used by the PBX
  d: The Rainbow server is in the wrong data center region
correct_answer: c
explanation: >
  Number normalization is the most common source of inbound call routing
  failures. Rainbow uses E.164 format internally (+33 6 12 34 56 78),
  while many PBX systems send calls using local format (06 12 34 56 78).
  If the normalization rules in Admin > Telephony > Number Normalization
  are not configured to translate between formats, Rainbow cannot match
  the incoming call to the correct user, and the softphone will not ring.
```

### Question 14

```yaml
id: ADM-CERT-01-Q14
type: multiple_choice
difficulty: medium
domain: Telephony & PBX
question: >
  An administrator needs to configure simultaneous ring with a 5-second
  delay before the mobile client rings. Where is this configured?
options:
  a: In the PBX configuration panel
  b: Admin > Users > [user] > Telephony Settings > Ring Mode (set to Simultaneous) and Mobile Delay (set to 5 seconds)
  c: The user configures this in their Rainbow mobile app settings
  d: This feature is only available on Enterprise tier
correct_answer: b
explanation: >
  Simultaneous ring with mobile delay is configured per-user in the admin
  portal at Admin > Users > [user] > Telephony Settings. The ring mode
  must be set to "Simultaneous (Desk + Softphone)" and the Mobile Delay
  field set to 5 seconds. This prevents the mobile client from ringing
  before the user notices (which would consume cellular battery) while
  still ensuring the mobile rings if the user is away from their desk.
```

### Question 15

```yaml
id: ADM-CERT-01-Q15
type: multiple_choice
difficulty: hard
domain: Telephony & PBX
question: >
  A company has two voicemail systems active — Rainbow cloud voicemail and
  the PBX native voicemail. What problem does this cause and how should
  it be resolved?
options:
  a: This is the recommended configuration for redundancy
  b: Callers may reach different voicemail greetings depending on the call path, causing confusion; the admin should disable one voicemail system so only one is active per user
  c: Both voicemail systems will merge messages into a single inbox automatically
  d: The PBX voicemail will always take priority regardless of configuration
correct_answer: b
explanation: >
  Having two active voicemail systems causes caller confusion because
  different call paths may reach different voicemail greetings. For example,
  a call that times out on the softphone may reach Rainbow cloud voicemail,
  while a call that times out on the desk phone may reach PBX voicemail.
  The admin should ensure only one voicemail system is active per user —
  either Rainbow cloud voicemail (preferred for visual voicemail and
  transcription features) or PBX native voicemail, but not both.
```

### Question 16

```yaml
id: ADM-CERT-01-Q16
type: multiple_choice
difficulty: medium
domain: Telephony & PBX
question: >
  What is the maximum number of SIP channels supported by the OXO Connect
  PBX per trunk, and why is this important for capacity planning?
options:
  a: 16 channels — sufficient for small offices only
  b: 64 channels — this limits the number of concurrent calls between Rainbow and the OXO Connect PBX at a branch site
  c: 256 channels — more than enough for most deployments
  d: Unlimited — SIP channels are not a concern for OXO Connect
correct_answer: b
explanation: >
  The OXO Connect PBX supports a maximum of 64 SIP channels per trunk.
  This means a maximum of 64 concurrent calls can flow between Rainbow
  and the OXO Connect PBX at a single branch site. For sites with more
  than 64 concurrent call demand, the admin must either configure multiple
  SIP trunks or consider upgrading to an OmniPCX Enterprise which supports
  significantly higher channel counts. This is a critical capacity planning
  consideration for branch offices.
```

---

## Domain 4: Security & Access Control

### Question 17

```yaml
id: ADM-CERT-01-Q17
type: multiple_choice
difficulty: medium
domain: Security & Access Control
question: >
  An organization wants to implement Single Sign-On for Rainbow. Which
  authentication protocols does Rainbow support for SSO?
options:
  a: Only SAML 2.0
  b: SAML 2.0 and OpenID Connect (OIDC)
  c: Only OAuth 2.0
  d: LDAP authentication only
correct_answer: b
explanation: >
  Rainbow supports both SAML 2.0 and OpenID Connect (OIDC) for Single
  Sign-On. SAML 2.0 is the more commonly used protocol with enterprise
  Identity Providers like Azure AD, ADFS, and Okta. OIDC is supported
  as an alternative for modern IdPs that prefer the OAuth2-based approach.
  For either protocol, MFA should be enforced at the IdP level rather than
  in Rainbow, allowing the organization to use their existing MFA
  infrastructure.
```

### Question 18

```yaml
id: ADM-CERT-01-Q18
type: multiple_choice
difficulty: medium
domain: Security & Access Control
question: >
  According to the least-privilege principle, which admin role should be
  assigned to IT helpdesk staff who need to troubleshoot user issues but
  should not make configuration changes?
options:
  a: Company Admin
  b: Organization Admin
  c: Support Admin (read-only)
  d: Telephony Admin
correct_answer: c
explanation: >
  The Support Admin role provides read-only access to the admin portal,
  allowing helpdesk staff to view user status, telephony configuration,
  and logs without the ability to make changes. Following the least-
  privilege principle, this is the appropriate role for troubleshooting.
  Company Admin would grant full write access, Organization Admin spans
  multiple companies, and Telephony Admin grants PBX configuration
  permissions — all of which exceed what helpdesk staff need.
```

### Question 19

```yaml
id: ADM-CERT-01-Q19
type: scenario
difficulty: hard
domain: Security & Access Control
question: >
  Scenario: An administrator discovers that 15 users at the Berlin office
  are experiencing repeated SAML SSO login failures with the error
  "SAML_ASSERTION_EXPIRED." Users at other offices are not affected.
  What is the most likely root cause?
options:
  a: The Rainbow server is rejecting all Berlin IP addresses
  b: Clock skew between the Berlin office's Identity Provider server and Rainbow — the SAML assertion timestamp falls outside the acceptable window
  c: The users' Rainbow licenses have expired
  d: The Berlin office firewall is blocking SAML traffic
correct_answer: b
explanation: >
  The "SAML_ASSERTION_EXPIRED" error occurs when the timestamp in the
  SAML assertion falls outside the acceptable time window (typically
  5 minutes). Since the issue is isolated to the Berlin office, the most
  likely cause is clock skew on the Berlin IdP server — the server's clock
  is more than 5 minutes off from the correct time. The fix is to synchronize
  the Berlin IdP server clock with an NTP time source. This is a common
  SSO issue in multi-site deployments.
```

### Question 20

```yaml
id: ADM-CERT-01-Q20
type: multiple_choice
difficulty: hard
domain: Security & Access Control
question: >
  An organization needs to prevent specific file types from being shared
  through Rainbow and restrict file sharing to internal users only. Where
  are these controls configured?
options:
  a: These controls must be implemented on the network firewall, not in Rainbow
  b: Admin > Security > Content Policy for file type restrictions and Admin > Security > Sharing Policy for internal-only sharing
  c: Users must individually configure their sharing preferences in the Rainbow client
  d: These features are only available on Edge deployments
correct_answer: b
explanation: >
  Rainbow provides two admin portal settings for file sharing control.
  Content Policy (Admin > Security > Content Policy) allows the admin to
  block specific file types (e.g., .exe, .bat, .ps1) and set maximum
  file sizes. Sharing Policy (Admin > Security > Sharing Policy) restricts
  file sharing to internal users only, preventing sharing with guests or
  federated contacts. Both are company-level settings enforced for all
  users — they do not require individual user configuration.
```

### Question 21

```yaml
id: ADM-CERT-01-Q21
type: multiple_choice
difficulty: medium
domain: Security & Access Control
question: >
  What happens to a user's data when their account is deleted from
  Rainbow, and how can an administrator recover a deleted account?
options:
  a: Data is immediately and permanently deleted with no recovery option
  b: A 30-day soft-delete window preserves the account and all data; the admin can restore via Admin > Users > Deleted Users; after 30 days, deletion is permanent
  c: The user's data is archived indefinitely and can be restored at any time
  d: Only the user profile is deleted; messages and files remain accessible to other users forever
correct_answer: b
explanation: >
  Rainbow implements a soft-delete mechanism with a 30-day retention
  window. When an account is deleted, it enters a soft-delete state where
  all data (messages, files, call logs, profile) is preserved. During
  this 30-day window, the admin can restore the account from Admin >
  Users > Deleted Users. After 30 days, the deletion becomes permanent
  and all personal data is irreversibly removed from all systems,
  including backups — in compliance with GDPR's Right to Erasure.
```

---

## Domain 5: Monitoring & Analytics

### Question 22

```yaml
id: ADM-CERT-01-Q22
type: multiple_choice
difficulty: easy
domain: Monitoring & Analytics
question: >
  Where should an administrator check first each morning to assess the
  overall health of the Rainbow platform?
options:
  a: The Rainbow mobile app
  b: Admin > Dashboard — the landing page showing active users, subscription utilization, system health indicators, and recent alerts
  c: The user's personal Rainbow client
  d: The PBX admin interface
correct_answer: b
explanation: >
  The admin dashboard (Admin > Dashboard) is the landing page after admin
  login and provides a high-level summary of platform health. It shows
  active user counts, subscription utilization, system health status
  (green/yellow/red for core services), and recent alerts. Any yellow or
  red indicator should be investigated immediately. This is the
  administrator's primary daily health check.
```

### Question 23

```yaml
id: ADM-CERT-01-Q23
type: scenario
difficulty: hard
domain: Monitoring & Analytics
question: >
  Scenario: The admin dashboard shows a "yellow" health indicator for
  the London site. Call quality monitoring reveals that calls between
  London and Paris have 15% packet loss, while London-to-London calls
  are normal. What is the most likely root cause?
options:
  a: The Rainbow media server is overloaded
  b: A WAN link issue between the London and Paris offices causing packet loss on inter-site traffic
  c: The London users need to update their Rainbow client
  d: The Paris PBX configuration is incorrect
correct_answer: b
explanation: >
  The key diagnostic clue is that London-to-London calls are normal but
  London-to-Paris calls experience 15% packet loss. This pattern indicates
  the issue is on the network path between the two sites (WAN link), not
  on the Rainbow platform or at either site locally. The admin should
  investigate the WAN link quality (using traceroute/MTR to Rainbow media
  servers), check for bandwidth saturation, and review QoS policies on
  the inter-site network path.
```

### Question 24

```yaml
id: ADM-CERT-01-Q24
type: multiple_choice
difficulty: medium
domain: Monitoring & Analytics
question: >
  An administrator wants call quality alerts to trigger automatically
  when voice quality degrades. Which metric and threshold should be
  configured?
options:
  a: Alert when bandwidth usage exceeds 50%
  b: Alert when MOS score drops below 3.0 for more than 3-5 consecutive calls, or when packet loss exceeds 2% or jitter exceeds 50ms
  c: Alert when more than 10 users are online simultaneously
  d: Alert when the admin portal load time exceeds 5 seconds
correct_answer: b
explanation: >
  Call quality alerts should be configured based on MOS (Mean Opinion
  Score), packet loss, and jitter — the three primary indicators of voice
  quality. A MOS below 3.0 indicates "fair to poor" quality, packet loss
  above 2% causes audible degradation, and jitter above 50ms causes choppy
  audio. These alerts are configured in Admin > Monitoring > Alerts >
  Call Quality and should trigger before users report issues — enabling
  proactive rather than reactive troubleshooting.
```

### Question 25

```yaml
id: ADM-CERT-01-Q25
type: multiple_choice
difficulty: medium
domain: Monitoring & Analytics
question: >
  For compliance and security purposes, which type of log should an
  administrator regularly review and export to a SIEM system for
  centralized monitoring?
options:
  a: User chat message content
  b: Admin audit logs showing all administrative actions (user creation, policy changes, configuration modifications) with timestamps and responsible admin
  c: Individual user call recordings
  d: User password hashes
correct_answer: b
explanation: >
  Admin audit logs (Admin > Logs > Admin Actions) record every
  administrative action including user creation, license changes, policy
  modifications, PBX configuration changes, and security setting
  adjustments. Each entry includes a timestamp, the admin user who
  performed the action, the action type, and before/after values. These
  logs should be regularly reviewed for unauthorized changes and exported
  to a SIEM system (Splunk, QRadar, Microsoft Sentinel) via syslog for
  real-time centralized security monitoring.
```

---

## Answer Key Summary

| Question | Answer | Domain                        | Difficulty |
|----------|--------|-------------------------------|------------|
| Q01      | B      | Admin Portal & Setup          | Easy       |
| Q02      | B      | Admin Portal & Setup          | Medium     |
| Q03      | B      | Admin Portal & Setup          | Medium     |
| Q04      | A      | Admin Portal & Setup          | Easy       |
| Q05      | B      | User Provisioning & Licensing | Easy       |
| Q06      | B      | User Provisioning & Licensing | Medium     |
| Q07      | B      | User Provisioning & Licensing | Hard       |
| Q08      | B      | User Provisioning & Licensing | Medium     |
| Q09      | C      | User Provisioning & Licensing | Medium     |
| Q10      | B      | User Provisioning & Licensing | Hard       |
| Q11      | B      | Telephony & PBX               | Easy       |
| Q12      | B      | Telephony & PBX               | Hard       |
| Q13      | C      | Telephony & PBX               | Medium     |
| Q14      | B      | Telephony & PBX               | Medium     |
| Q15      | B      | Telephony & PBX               | Hard       |
| Q16      | B      | Telephony & PBX               | Medium     |
| Q17      | B      | Security & Access Control     | Medium     |
| Q18      | C      | Security & Access Control     | Medium     |
| Q19      | B      | Security & Access Control     | Hard       |
| Q20      | B      | Security & Access Control     | Hard       |
| Q21      | B      | Security & Access Control     | Medium     |
| Q22      | B      | Monitoring & Analytics        | Easy       |
| Q23      | B      | Monitoring & Analytics        | Hard       |
| Q24      | B      | Monitoring & Analytics        | Medium     |
| Q25      | B      | Monitoring & Analytics        | Medium     |

**Difficulty Distribution:** Easy: 4 | Medium: 12 | Hard: 9
