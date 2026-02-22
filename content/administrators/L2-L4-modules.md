# Administrators Track — L2, L3, L4 Module Content Outlines

> Rainbow Training Academy | Administrators Track | Practitioner through Champion Levels

---

## LEVEL 2: PRACTITIONER (5 hours total)

---

### ADM-201: Telephony & PBX Integration

| Field | Value |
|---|---|
| **Module ID** | ADM-201 |
| **Title** | Telephony & PBX Integration |
| **Level** | L2 Practitioner |
| **Duration** | 60 minutes |
| **Content Types** | VID + LAB + REF |
| **Prerequisites** | ADM-104 (Platform Architecture) |

#### Detailed Content Outline

**1. PBX Overlay Architecture**
- How Rainbow sits on top of existing PBX infrastructure: Rainbow does not replace the PBX — it adds cloud collaboration, softphone, mobile access, and AI features while the PBX continues to handle PSTN trunking and desk phone registration
- Supported PBX systems: OmniPCX Enterprise (R12.x+), OXO Connect (R3.0+), and third-party SIP PBX systems (Cisco CUCM, Avaya Aura, Mitel MiVoice, Unify OpenScape) via standard SIP trunking
- Connection components: Rainbow Cloud Connector (software agent installed on a server in the customer's network) establishes a secure tunnel between the PBX and Rainbow cloud; it handles CTI signaling, presence sync, and directory synchronization
- Registration flow: Rainbow client registers with the cloud; the Cloud Connector bridges the registration to the PBX; the user's DID is mapped between the PBX extension and the Rainbow softphone — enabling simultaneous ring on desk phone and softphone
- Admin portal configuration path: Admin > Company > Sites > [site name] > PBX Configuration — enter PBX type, PBX IP address, SIP trunk port, connector credentials, and number plan

**2. SIP Trunk Configuration**
- SIP trunk between Rainbow and the PBX: the Cloud Connector acts as a SIP B2BUA (Back-to-Back User Agent) that translates between Rainbow's SIP dialect and the PBX's SIP dialect
- OmniPCX Enterprise SIP trunk setup: configure a SIP trunk group on the OmniPCX pointing to the Cloud Connector's IP; set the codec list (G.711, G.722, Opus), enable SRTP, configure SIP session timers to match Rainbow defaults (1800 seconds)
- OXO Connect SIP trunk setup: OXO supports a maximum of 64 SIP channels per trunk; configure the trunk IP, port 5060 (or 5061 for TLS), and enable T.38 for fax if required
- Third-party PBX SIP trunk: use generic SIP trunk configuration; ensure RFC 2833 DTMF relay is enabled, SIP session timers are aligned, and codec negotiation order matches Rainbow's preference (Opus > G.722 > G.711)
- Troubleshooting trunk registration: check Admin > Company > Sites > PBX Status for "Registered" / "Not Registered" / "Registered (No Media)"; common issues include wrong port, expired TLS certificate, SIP ALG interference on the network, and DNS resolution failure

**3. Number Plan and DID Assignment**
- Number plan structure: the admin defines the company's number plan in Admin > Telephony > Number Ranges; this maps E.164 PSTN numbers to internal extensions and Rainbow user accounts
- DID assignment: each Rainbow user can have one or more DIDs assigned; the DID links the user's Rainbow softphone to the PBX extension; inbound calls to the DID ring both the desk phone and the Rainbow client
- Number format normalization: Rainbow uses E.164 format internally (+33 6 12 34 56 78); the PBX may use local format (06 12 34 56 78); configure normalization rules in Admin > Telephony > Number Normalization to translate between formats
- Short code dialing: internal extension dialing (e.g., dial 1234 to reach extension 1234) is routed through the PBX via the Cloud Connector; the admin configures the short code prefix and length in the site PBX configuration
- Number porting: when migrating PSTN numbers from a legacy carrier to Rainbow SIP trunking, the admin initiates a porting request through Admin > Telephony > Number Porting; the process takes 5-15 business days depending on the country

**4. Simultaneous Ring and Call Forking**
- Simultaneous ring behavior: when an inbound call arrives for a user, the PBX forks the call to the desk phone while the Cloud Connector simultaneously alerts the Rainbow client (desktop and mobile); the first device to answer takes the call, and the other devices stop ringing
- Configuration: simultaneous ring is enabled per-user in Admin > Users > [user] > Telephony Settings > Ring Mode; options are "Desk Phone Only," "Softphone Only," "Simultaneous (Desk + Softphone)," and "Sequential (Desk first, Softphone after X seconds)"
- Call pickup: when simultaneous ring is active and the desk phone answers, the Rainbow client shows "Answered Elsewhere"; when the Rainbow client answers, the PBX sends a CANCEL to the desk phone
- Mobile ring delay: to prevent Rainbow mobile from ringing before the user notices (which would use cellular battery), configure a 3-5 second delay for mobile ring in Admin > Users > Telephony Settings > Mobile Delay
- Troubleshooting: "Rainbow client does not ring" — check DID assignment, Cloud Connector status, and user ring mode; "Desk phone shows missed call after Rainbow answered" — this is expected behavior with some PBX models; "Both devices ring but neither answers" — check SIP session timer conflict causing premature call teardown

**5. Voicemail and Call Forwarding**
- Voicemail architecture: Rainbow offers cloud-hosted voicemail or can integrate with the PBX's native voicemail system; the admin selects the voicemail mode per site in Admin > Telephony > Voicemail Configuration
- Cloud voicemail: messages are stored encrypted in the Rainbow data center; users access voicemail through the Rainbow client (visual voicemail with transcription on Enterprise tier); retention period is configurable (30-365 days)
- PBX voicemail integration: Rainbow forwards unanswered calls to the PBX voicemail system after a configurable timeout; the PBX voicemail notification is relayed to the Rainbow client via the Cloud Connector
- Call forwarding rules: Admin > Users > [user] > Telephony Settings > Call Forwarding; options include Forward Always (all calls), Forward on No Answer (after X seconds), Forward on Busy, and Forward on Not Reachable (client disconnected)
- Voicemail conflict: ensure only one voicemail system is active (Rainbow cloud OR PBX native) to prevent confusing callers with multiple voicemail greetings; the admin must disable PBX voicemail if Rainbow cloud voicemail is enabled

#### Lab Description (LAB)

**Setup**: The learner accesses a sandbox admin portal with a simulated OmniPCX Enterprise PBX at a fictional company "TechNova Industries" (150 users, 2 sites: Paris HQ and Lyon branch).

**Steps**:
1. Configure the SIP trunk for the Paris HQ site: enter the PBX IP, port 5060, codec list (G.711, G.722), and enable SRTP.
2. Create a number plan with DID range +33 1 44 00 01 00 to +33 1 44 00 02 50 and map to internal extensions 1100-1250.
3. Assign a DID and extension to test user "Marie Dupont" and enable simultaneous ring (desk + softphone).
4. Configure call forwarding for Marie: forward on no answer after 20 seconds to cloud voicemail, forward on not reachable to mobile number.
5. Test the configuration by simulating an inbound call and verifying that both desk phone and softphone ring, and that voicemail activates after 20 seconds.

**Expected Outcome**: Learner can configure PBX overlay end-to-end: SIP trunk, number plan, DID assignment, simultaneous ring, and call forwarding/voicemail.

#### Key Takeaways
- PBX overlay is configured per-site in the admin portal; each site can have a different PBX model and configuration
- The Cloud Connector is the bridge between Rainbow cloud and the on-premises PBX; its health is critical and should be monitored via Admin > Company > Sites > PBX Status
- Number normalization (E.164 vs. local format) is the most common source of inbound call routing failures; always verify normalization rules during setup
- Simultaneous ring requires both DID assignment and correct ring mode configuration; missing either results in the Rainbow client not ringing
- Only one voicemail system (Rainbow cloud or PBX native) should be active per user to avoid caller confusion

---

### ADM-202: Directory & Federation

| Field | Value |
|---|---|
| **Module ID** | ADM-202 |
| **Title** | Directory & Federation |
| **Level** | L2 Practitioner |
| **Duration** | 60 minutes |
| **Content Types** | VID + LAB + QIZ |
| **Prerequisites** | ADM-103 (User Provisioning) |

#### Detailed Content Outline

**1. LDAP/Active Directory Synchronization**
- Directory sync architecture: Rainbow connects to the customer's LDAP or Active Directory server to import and synchronize user accounts, organizational units, and group memberships; sync is one-way (AD to Rainbow) or bidirectional depending on configuration
- Configuration path: Admin > Company > Directory Sync > Configure; enter the LDAP server URL (ldaps://dc.company.com:636), bind DN (service account), base DN (OU=Users,DC=company,DC=com), and attribute mapping
- Attribute mapping: map AD attributes to Rainbow fields — displayName to Rainbow display name, mail to Rainbow login email, telephoneNumber to Rainbow DID, department to Rainbow department, memberOf to Rainbow company groups
- Sync frequency: configurable from every 15 minutes to every 24 hours; initial sync imports all matching users; subsequent syncs apply delta changes (new users, modified attributes, deleted/disabled users)
- Common issues: "Users not importing" — check base DN scope (the specified OU may not contain the target users), LDAP filter syntax (default filter is (&(objectClass=user)(mail=*))), and bind account permissions; "Duplicate users" — occurs when the same user exists with different email formats in AD (john.doe@company.com vs. j.doe@company.com); resolve by standardizing the mail attribute

**2. SCIM Provisioning**
- SCIM (System for Cross-domain Identity Management) provides a REST API for automated user provisioning and deprovisioning from identity providers like Azure AD, Okta, or OneLogin
- Azure AD SCIM setup: in Azure AD > Enterprise Applications > Rainbow > Provisioning, enter the SCIM endpoint URL (https://openrainbow.com/api/scim/v2) and the Bearer token generated from Rainbow admin portal
- Provisioning scope: configure which Azure AD users and groups are provisioned to Rainbow; use Azure AD scoping filters to include/exclude based on department, location, or group membership
- Automatic lifecycle management: when a user is created in Azure AD, SCIM creates them in Rainbow; when disabled in Azure AD, SCIM deactivates them in Rainbow; when deleted from Azure AD, SCIM removes them from Rainbow — fully automated
- Troubleshooting SCIM: check Azure AD provisioning logs for failed operations; common errors include "409 Conflict" (user already exists with that email), "400 Bad Request" (missing required attribute), and "401 Unauthorized" (SCIM token expired)

**3. Guest Access and External Federation**
- Guest users: external users who do not have a Rainbow account can be invited to Bubbles as guests; guests access Rainbow via a web link with email verification — no client installation required
- Guest access configuration: Admin > Company > Settings > Guest Policy; options include "Allow guests" (default), "Allow guests with email domain restriction" (only @partner.com domains), and "No guests" (closed company)
- External federation: Rainbow users from different companies can communicate with each other if both companies allow federation; configuration in Admin > Company > Settings > Federation Policy
- Federation modes: "Open" (any Rainbow user can contact your users), "Restricted" (only pre-approved companies can federate), "Closed" (no external communication)
- Directory visibility: configure which user attributes are visible to federated contacts; by default, only display name, email, and presence are shared; phone number, department, and title can be hidden for privacy

**4. Company Directory Management**
- Rainbow company directory: all provisioned users appear in the company directory, searchable by name, email, phone number, department, and title
- Organizational structure: create departments and teams in Admin > Company > Organization to reflect the company's structure; users assigned to departments appear grouped in the directory
- Directory search scope: by default, users can search the entire company directory; for large organizations (10,000+ users), consider creating directory scopes that limit search to the user's department or site to improve performance
- Contact cards: each user's contact card shows their name, title, department, phone numbers, email, and presence status; admins can customize which fields appear on contact cards via Admin > Company > Settings > Directory Display
- Bulk operations: use CSV import (Admin > Users > Import) to create or update users in bulk; the CSV template is downloadable from the import page and includes all required and optional fields

**5. Groups and Distribution Lists**
- Rainbow groups: logical groupings of users for administrative purposes (license assignment, policy application) and for communication (group messaging, group calling)
- Creating groups: Admin > Users > Groups > Create; add members manually or by LDAP group sync; group membership can be dynamic (based on AD attribute, e.g., all users in department "Sales") or static (manually managed)
- Distribution lists: a group with messaging enabled becomes a distribution list; messages sent to the distribution list are delivered to all members; replies go to the sender only (not reply-all)
- Group-based policy application: assign security policies, feature toggles, and license tiers to groups rather than individual users for scalable management
- Nested groups: Rainbow supports group nesting (Group A contains Group B); be cautious of circular references that can cause sync loops

#### Lab Description (LAB)

**Setup**: The learner configures directory synchronization for "Horizon Engineering" (500 users in Active Directory, 3 departments: Engineering, Sales, Operations).

**Steps**:
1. Configure LDAP sync with the simulated AD server: enter the LDAP URL, bind credentials, base DN, and attribute mapping.
2. Run an initial sync and verify that 500 users are imported with correct department assignments.
3. Create directory scopes: Engineering users can search all departments, Sales users can search Sales and Operations only, Operations users can search all departments.
4. Configure guest access: allow guests from @partner-company.com only; set federation to "Restricted" and approve two partner companies.
5. Create a dynamic group "All Sales" that automatically includes users with department="Sales" from AD; verify membership updates when a user's department changes.

**Expected Outcome**: Learner can configure LDAP sync, manage directory scopes, configure federation policies, and create dynamic groups.

#### Key Takeaways
- LDAP/AD sync is the recommended provisioning method for organizations with 100+ users; manual user creation does not scale
- SCIM provisioning from Azure AD or Okta provides automated lifecycle management (create, update, deactivate, delete) that reduces admin overhead and prevents orphaned accounts
- Federation and guest policies must be configured to match the organization's security posture; default "Open" federation is too permissive for most enterprise customers
- Dynamic groups based on AD attributes ensure that Rainbow group membership stays current without manual maintenance
- Directory visibility settings protect user privacy while enabling collaboration; always review which fields are exposed to federated contacts

---

### ADM-203: Security & Access Control

| Field | Value |
|---|---|
| **Module ID** | ADM-203 |
| **Title** | Security & Access Control |
| **Level** | L2 Practitioner |
| **Duration** | 60 minutes |
| **Content Types** | VID + LAB + REF |
| **Prerequisites** | ADM-103 (User Provisioning) |

#### Detailed Content Outline

**1. Authentication Methods**
- Local authentication: username/password stored in Rainbow's identity service; passwords must meet complexity requirements (minimum 8 characters, uppercase, lowercase, number, special character); configurable lockout after 5 failed attempts (default)
- SAML 2.0 SSO: integrate Rainbow with the organization's Identity Provider (Azure AD, ADFS, Okta, OneLogin, Ping Identity); Rainbow acts as the Service Provider (SP); configuration in Admin > Company > Authentication > SAML
- SAML configuration steps: upload the IdP metadata XML (or enter IdP URL, certificate, entity ID manually), configure the NameID format (emailAddress recommended), set the Assertion Consumer Service (ACS) URL, and test the SSO flow with a single user before rolling out
- OpenID Connect (OIDC): alternative to SAML for modern IdPs that support OIDC; configuration requires Client ID, Client Secret, Discovery URL, and redirect URI
- Multi-factor authentication (MFA): Rainbow supports MFA for local authentication (TOTP via authenticator app); for SSO, MFA is handled by the IdP — enforce MFA in the IdP (Azure AD Conditional Access, Okta policies) rather than in Rainbow

**2. Role-Based Access Control (RBAC)**
- Admin roles: Organization Admin (manages multiple companies in an organization), Company Admin (full control of a single company), Support Admin (read-only access for troubleshooting), Telephony Admin (manages PBX configuration and call routing), User Admin (manages user accounts and licenses)
- Role assignment: Admin > Users > [user] > Roles > Assign; a user can have multiple roles; roles are additive (no conflicting permission inheritance)
- Custom roles: Enterprise tier supports custom role definitions — create a role with specific permissions (e.g., "Marketing Admin" can manage users in the Marketing department only); configuration in Admin > Security > Roles > Create Custom Role
- Least privilege principle: assign the minimum role necessary for each admin; do not make IT helpdesk staff Company Admins when Support Admin (read-only) is sufficient
- Audit trail for admin actions: every admin action (user creation, license change, policy modification, PBX configuration change) is logged in Admin > Logs > Admin Actions with timestamp, admin user, action type, and affected resource

**3. Security Policies**
- Password policy: Admin > Security > Password Policy — configure minimum length, complexity requirements, expiration period (0 for no expiration, or 30/60/90 days), password history (prevent reuse of last N passwords)
- Session management: configure session timeout (default 30 minutes of inactivity), maximum concurrent sessions per user (default unlimited), and forced logout capability
- IP allowlisting: restrict admin portal access to specific IP ranges; Admin > Security > IP Restrictions > Add Allowed Range; users outside the allowed IP range are blocked from logging in
- Device management: Admin > Security > Device Policy — enforce device type restrictions (e.g., only company-managed devices can access Rainbow), require PIN or biometric lock on mobile devices, and enable remote wipe for lost devices
- Content policies: Admin > Security > Content Policy — enable/disable file sharing, set maximum file size, restrict file types (block .exe, .bat, .ps1), and configure message retention period

**4. Data Loss Prevention (DLP)**
- External sharing controls: restrict file sharing to internal users only (no sharing with guests or federated contacts); configure in Admin > Security > Sharing Policy
- Watermarking: Enterprise tier supports document watermarking — shared files display the recipient's name as a visible watermark to discourage unauthorized redistribution
- Message retention and deletion: configure automatic message deletion after a specified period (30 days, 90 days, 1 year, or custom); deleted messages are permanently removed from all participants' views
- Compliance hold: for legal or regulatory requirements, place specific users or Bubbles on compliance hold to prevent message deletion; Admin > Security > Compliance > Add Hold
- Export and discovery: for e-discovery or DSAR compliance, export all messages, files, and call logs for a specific user or date range via Admin > Users > [user] > Export Data

**5. Certificate and Encryption Management**
- TLS certificates for Edge deployments: Edge administrators must install and manage TLS certificates for the Rainbow application servers; use certificates from a trusted public CA (Let's Encrypt, DigiCert, GlobalSign) or an internal CA if all clients trust it
- Certificate renewal: TLS certificates have a defined validity period; set calendar reminders 30 days before expiration; Let's Encrypt certificates expire every 90 days and can be auto-renewed with certbot
- Encryption at rest: all Rainbow data (messages, files, call recordings, user profiles) is encrypted at rest using AES-256; encryption keys are managed per-tenant in the public cloud or per-deployment in Edge
- Customer-managed encryption keys (CMEK): Enterprise tier supports CMEK where the customer provides the master encryption key; this allows the customer to revoke access to their data at any time by revoking the key
- Certificate pinning for mobile: Rainbow mobile apps use certificate pinning to prevent man-in-the-middle attacks; corporate proxy SSL inspection that re-signs certificates will break certificate pinning — whitelist Rainbow domains from SSL inspection

#### Lab Description (LAB)

**Setup**: The learner configures security and access control for "SecureFinance Corp" (300 users, Enterprise tier, SAML SSO with Azure AD).

**Steps**:
1. Configure SAML SSO: upload the Azure AD metadata XML, set NameID to emailAddress format, configure ACS URL, and test SSO login with a test user.
2. Create admin roles: assign Company Admin to the IT Director, Telephony Admin to the voice team lead, Support Admin (read-only) to the helpdesk team, and a custom "HR Admin" role that can only manage users in the HR department.
3. Configure security policies: set password policy to 12-character minimum with 90-day expiration (for local auth fallback), session timeout to 15 minutes, and IP allowlisting for admin portal access to the corporate IP range.
4. Enable DLP controls: restrict file sharing to internal users only, block executable file types, and configure 1-year message retention with compliance hold for the Legal department.
5. Review the audit log and identify the actions performed during this lab exercise.

**Expected Outcome**: Learner can configure SSO, create RBAC roles, set security policies, enable DLP controls, and review audit logs.

#### Key Takeaways
- SAML SSO is the recommended authentication method for enterprise deployments; it centralizes authentication in the organization's IdP and enables MFA enforcement
- RBAC follows the least privilege principle: assign the minimum role necessary for each admin function to reduce the blast radius of a compromised account
- Security policies (password, session, IP restriction, device management) should be configured during initial deployment, not after an incident
- DLP controls (sharing restrictions, retention policies, compliance holds) are essential for regulated industries and should be part of the deployment checklist
- Audit logs are your forensic tool; every admin action is logged and should be reviewed regularly for unauthorized changes

---

### ADM-204: Connector Administration

| Field | Value |
|---|---|
| **Module ID** | ADM-204 |
| **Title** | Connector Administration |
| **Level** | L2 Practitioner |
| **Duration** | 60 minutes |
| **Content Types** | VID + LAB + REF |
| **Prerequisites** | ADM-103 (User Provisioning) |

#### Detailed Content Outline

**1. CRM Connector Administration**
- Available CRM connectors: Salesforce, Zendesk, ServiceNow, Microsoft Dynamics, and Zoho CRM; each connector has a server-side configuration in the Rainbow admin portal and a client-side browser extension
- Salesforce connector setup: Admin > Integrations > Salesforce > Configure; enter the Salesforce org ID, OAuth credentials (Client ID and Secret from a Salesforce Connected App), callback URL, and feature toggles (screen pop, call logging, click-to-call)
- Zendesk connector setup: Admin > Integrations > Zendesk > Configure; enter the Zendesk subdomain, API token, and agent mapping (map Rainbow users to Zendesk agents)
- ServiceNow connector setup: Admin > Integrations > ServiceNow > Configure; enter the ServiceNow instance URL, OAuth credentials, and configure the OpenFrame CTI settings
- Connector health monitoring: Admin > Integrations > [connector] > Status shows connection health (Connected/Disconnected), last sync timestamp, error count in the last 24 hours, and version compatibility status

**2. Microsoft Teams Connector**
- Teams Direct Routing setup: Admin > Integrations > Microsoft Teams > Direct Routing; configure the SBC FQDN, TLS certificate, and SIP trunk parameters; verify that DNS SRV records are pointing to the Rainbow SBC
- Teams coexistence mode: Admin > Integrations > Microsoft Teams > Coexistence; enable presence sync (Rainbow presence maps to Teams presence), calendar sync (M365 calendar events set Rainbow presence), and directory sync (Teams contacts appear in Rainbow directory)
- OAuth consent: the Teams connector requires Global Admin consent for Microsoft Graph API permissions; the admin navigates to a consent URL, authenticates as Global Admin, and approves the requested permissions (User.Read, Presence.ReadWrite, Calendars.Read)
- Troubleshooting Teams connector: check Admin > Integrations > Microsoft Teams > Diagnostics for connection status, OAuth token validity, and sync errors; common issues include expired OAuth token (re-consent required), Azure AD Conditional Access blocking the service principal, and DNS SRV misconfiguration

**3. Rainbow Bot Framework**
- Bot architecture: Rainbow bots are automated participants that respond to messages, process commands, and integrate with external services via webhooks; bots are created via the Rainbow Developer Portal and registered with the company
- Creating a bot: Developer Portal > Applications > Create Bot; configure the bot name, description, avatar, and webhook URL; the bot receives all messages sent to it via HTTP POST to the webhook URL
- Bot administration: Admin > Integrations > Bots > [bot name]; the admin can enable/disable bots per company, restrict bot access to specific Bubbles, and monitor bot activity (messages processed, errors, response time)
- Common bot use cases: helpdesk ticket creation (user messages the bot with an issue, bot creates a ServiceNow ticket), meeting scheduler (bot queries participant availability and suggests meeting times), approval workflow (bot routes an approval request to the designated approver)
- Bot security: bots authenticate with the Rainbow API using app ID and app secret; rotate app secrets quarterly; restrict bot API permissions to the minimum required scope

**4. Webhook and API Integration**
- Webhooks: Rainbow sends real-time event notifications (new message, call started, user logged in, presence changed) to external systems via HTTP POST; configure webhooks in Admin > Integrations > Webhooks > Create
- Webhook events: select which events trigger webhooks — message events (message created, message read), call events (call started, call ended, call missed), presence events (user status changed), admin events (user created, user deleted)
- Webhook security: each webhook includes a signature header (X-Rainbow-Signature) computed with the webhook's shared secret; the receiving system must verify the signature to prevent webhook spoofing
- API key management: Admin > Integrations > API Keys > Generate; API keys are used for server-to-server integration; keys have configurable expiration (30/60/90/365 days) and scope restrictions (read-only, read-write, admin)
- Rate limiting: Rainbow API enforces rate limits per application (default 1,000 requests per minute); exceeding the limit returns HTTP 429 Too Many Requests; design integrations to handle rate limiting with exponential backoff

**5. Connector Maintenance and Updates**
- Version management: Admin > Integrations > [connector] > Version shows the installed version and the latest available version; critical updates are flagged with an "Update Required" badge
- Update process: browser extensions are updated via the browser's extension store (Chrome Web Store, Firefox Add-ons, Edge Add-ons); server-side connector configurations are updated via Admin > Integrations > [connector] > Update
- Compatibility matrix: each connector version is validated against specific versions of the target platform (e.g., Salesforce connector v3.2 requires Salesforce Lightning Experience); check the compatibility matrix before updating either side
- Rollback: if a connector update causes issues, roll back to the previous version via Admin > Integrations > [connector] > Version History > Restore; rollback is available for the last 3 versions
- Scheduled maintenance: plan connector updates during low-usage periods (weekends or after business hours); notify affected users in advance with estimated downtime

#### Lab Description (LAB)

**Setup**: The learner configures integrations for "GlobalRetail Corp" (800 users, Enterprise tier, Salesforce CRM, Microsoft Teams deployed).

**Steps**:
1. Configure the Salesforce connector: enter OAuth credentials, enable screen pop and call logging, map 10 test users as Salesforce agents.
2. Configure the Microsoft Teams connector: set up Direct Routing with the demo SBC, enable presence sync and calendar sync, and complete OAuth consent.
3. Create a webhook that sends a notification to an external URL whenever a call is missed by a hunt group agent.
4. Register a helpdesk bot that receives messages and responds with a ticket confirmation number.
5. Verify all integrations are healthy: check connector status dashboards, test a screen pop from an incoming call, verify Teams presence sync, confirm webhook delivery.

**Expected Outcome**: Learner can configure and validate CRM connectors, Teams connector, webhooks, and bots in the admin portal.

#### Key Takeaways
- Connector administration is a critical admin skill; misconfigured connectors are a top source of user complaints
- Always verify connector version compatibility before updating Rainbow clients or the connected platform (Salesforce, Teams, etc.)
- Webhook signatures must be validated by the receiving system to prevent spoofing; never skip signature verification in production integrations
- Bot security requires regular API secret rotation and minimum-scope permissions; bots with overly broad permissions are a security risk
- Monitor connector health proactively via Admin > Integrations > [connector] > Status; do not wait for users to report integration failures

---

### ADM-205: Monitoring & Analytics

| Field | Value |
|---|---|
| **Module ID** | ADM-205 |
| **Title** | Monitoring & Analytics |
| **Level** | L2 Practitioner |
| **Duration** | 60 minutes |
| **Content Types** | VID + LAB + QIZ |
| **Prerequisites** | ADM-102 (Admin Portal Navigation) |

#### Detailed Content Outline

**1. Admin Dashboard Overview**
- Dashboard location: Admin > Dashboard — the landing page after admin login; shows a high-level summary of platform health and usage
- Key metrics on the dashboard: active users (daily/weekly/monthly active), subscription utilization (licenses used vs. purchased), system health status (green/yellow/red for core services), recent alerts (critical events in the last 24 hours)
- Dashboard time ranges: toggle between real-time (last 1 hour), daily (today), weekly (last 7 days), and monthly (last 30 days) views
- Custom dashboard widgets: Enterprise tier supports custom widgets — add specific metrics (call volume, message count, conference usage) to the dashboard for at-a-glance monitoring
- Dashboard export: export dashboard data as PDF (for executive reporting) or CSV (for further analysis in Excel/BI tools)

**2. Usage Analytics**
- User activity reports: Admin > Reports > User Activity — shows per-user metrics for messages sent/received, calls made/received, conferences joined, files shared, and last login date
- Communication patterns: Admin > Reports > Communication — aggregate metrics showing busiest communication hours, most active Bubbles, top callers/recipients, and cross-department communication patterns
- License utilization: Admin > Reports > Licenses — shows license allocation by tier (Essential/Business/Enterprise), active vs. inactive licenses, and license expiration dates; use this to optimize license spend (downgrade inactive users to Essential)
- Adoption tracking: measure platform adoption as the percentage of provisioned users who are active (logged in at least once in the last 7 days); target adoption rate is 80%+ within 90 days of deployment
- Report scheduling: configure reports to be generated and emailed automatically on a daily, weekly, or monthly basis; Admin > Reports > Scheduled Reports > Create

**3. Call Quality Monitoring**
- Call quality dashboard: Admin > Monitoring > Call Quality — shows aggregate call quality metrics including MOS score distribution, jitter, packet loss, and latency across all calls
- Per-call quality drill-down: click on any call in the call history to see detailed quality metrics for that specific call — MOS over time, codec used, network path (direct vs. TURN relay), and ICE candidate pair
- Quality thresholds: configure alert thresholds for call quality; Admin > Monitoring > Alerts > Call Quality — set alerts when MOS drops below 3.0, packet loss exceeds 2%, or jitter exceeds 50ms for more than 5 consecutive calls
- Site-level quality comparison: compare call quality metrics across sites to identify locations with network issues; a site with consistently lower MOS likely has a bandwidth or QoS configuration problem
- Quality trend analysis: track call quality trends over weeks and months to detect gradual degradation (e.g., increasing packet loss as a site adds more users without increasing bandwidth)

**4. System Health Monitoring**
- Service status: Admin > Monitoring > System Health — shows the status of core services (messaging, calling, conferencing, file storage, API gateway, authentication); each service shows "Operational," "Degraded," or "Down"
- External status page: status.openrainbow.com provides real-time platform status for public cloud deployments; subscribe to email/SMS alerts for outage notifications
- Edge-specific monitoring: for Edge deployments, Admin > Edge > System Health shows server CPU utilization, memory usage, storage capacity, database health, and certificate expiration dates
- Alert configuration: Admin > Monitoring > Alerts — create custom alerts for specific conditions (e.g., "alert when storage utilization exceeds 80%," "alert when any service status changes to Degraded," "alert when more than 10 users report login failures in 1 hour")
- Incident response: when an alert fires, follow the standard response process: acknowledge the alert, investigate root cause, communicate to affected users, resolve, and document

**5. Audit Logging and Compliance Reporting**
- Admin audit log: Admin > Logs > Admin Actions — every administrative action (user creation, policy change, configuration modification) is logged with timestamp, admin user, action type, and before/after values
- User activity log: Admin > Logs > User Events — login/logout events, authentication failures, device registrations, and client version updates for each user
- Compliance reports: Admin > Reports > Compliance — pre-built reports for GDPR (data subject access request log, data deletion log), MiFID II (call recording inventory with retention dates), and general audit (all admin actions for a specified period)
- Log retention: admin logs are retained for 1 year by default; compliance logs are retained for the duration configured in the compliance policy (up to 7 years for MiFID II)
- Log export: export logs as CSV for import into SIEM systems (Splunk, QRadar, Sentinel) for centralized security monitoring; configure automated log forwarding via syslog for real-time SIEM integration

#### Lab Description (LAB)

**Setup**: The learner explores the monitoring and analytics capabilities of a demo admin portal for "DataStream Analytics" (400 users, Enterprise tier, 3 sites).

**Steps**:
1. Review the admin dashboard and identify that the London site has a "yellow" health indicator; investigate and find that call quality MOS at London has dropped below 3.0 in the last 24 hours.
2. Drill into the London call quality data: identify that 15% packet loss is occurring on calls between London and Paris, while London-to-London calls are fine; diagnose as a WAN link issue.
3. Create an alert: configure a call quality alert that triggers when London site MOS drops below 3.0 for more than 3 consecutive calls.
4. Run a license utilization report and identify that 40 users have not logged in for 60+ days; recommend downgrading them from Business to Essential tier to save licensing costs.
5. Export the admin audit log for the last 30 days and identify a policy change that was made outside of the change management process.

**Expected Outcome**: Learner can navigate monitoring dashboards, diagnose quality issues, create alerts, optimize licensing, and review audit logs.

#### Key Takeaways
- The admin dashboard is the first place to check every morning; a "green" dashboard means the platform is healthy; any "yellow" or "red" indicator requires immediate investigation
- Call quality monitoring is proactive, not reactive; configure alerts so you know about quality issues before users report them
- License utilization reports are a cost optimization tool; downgrade inactive users to save licensing costs and demonstrate ROI to the CFO
- Audit logs are essential for compliance and security; review them regularly and export to SIEM for centralized monitoring
- Scheduled reports automate routine monitoring; configure weekly usage reports and monthly compliance reports to be emailed to stakeholders

---

## LEVEL 3: EXPERT (5 hours total)

---

### ADM-301: IVR & Call Flow Configuration

| Field | Value |
|---|---|
| **Module ID** | ADM-301 |
| **Title** | IVR & Call Flow Configuration |
| **Level** | L3 Expert |
| **Duration** | 60 minutes |
| **Content Types** | VID + LAB + QIZ |
| **Prerequisites** | ADM-201 (Telephony & PBX Integration) |

#### Detailed Content Outline

**1. IVR Flow Designer**
- Visual flow editor: Admin > Telephony > IVR > Create Flow; the drag-and-drop editor allows administrators to build call flows using visual nodes — greeting, menu, queue, agent, voicemail, external transfer, conditional branch
- Node types: Greeting (plays audio prompt or TTS), Menu (DTMF selection with up to 9 options per level), Queue (holds callers and distributes to agents), Agent (routes to a specific user), Transfer (sends call to external number), Condition (branches based on time-of-day, caller ID, or language), Webhook (calls external API for dynamic routing)
- Audio prompt management: upload WAV (8kHz/16kHz mono) or MP3 files; TTS engine supports 12 languages; naming convention: use descriptive names (e.g., "MainMenu_English_v2.wav") for easy management
- Multi-level IVR: create up to 3 levels of menus (e.g., Level 1: "Press 1 for Sales, 2 for Support"; Level 2: "Press 1 for Billing, 2 for Technical Support"; Level 3: "Press 1 for Password Reset, 2 for Connectivity Issue")
- Flow versioning: each published flow is versioned; the admin can view previous versions and roll back to a prior version if the new flow has issues; Admin > Telephony > IVR > [flow] > Version History

**2. Hunt Group Configuration**
- Hunt group types: Linear (fixed order, first agent always gets first chance), Circular (round-robin, starts from where the last call left off), Simultaneous (all agents ring at once), Longest Idle (routes to the agent who has been idle longest), Weighted (percentage-based distribution)
- Creating a hunt group: Admin > Telephony > Hunt Groups > Create; name the group, select the distribution type, add agents (by user or by skill tag), configure ring duration per agent (default 20 seconds), and set overflow destination
- Skill-based routing: assign skill tags to agents (e.g., "French," "Technical," "VIP"); configure the IVR to route callers to hunt groups filtered by skill; a caller who selects "French" is routed to agents tagged "French"
- Agent availability: only agents with presence status "Available" are included in the distribution; agents in "DND," "Busy," or "Away" are automatically skipped; the admin can configure whether "On the Phone" agents receive queue calls (default: no)
- Wrap-up time: after completing a call, agents enter a configurable wrap-up period (default 30 seconds) during which they are not offered new calls; this allows note-taking and CRM updates

**3. Business Hours and Calendar Configuration**
- Business hours: Admin > Telephony > Business Hours > Create Schedule; define open/close times for each day of the week (e.g., Monday-Friday 08:00-18:00, Saturday 09:00-13:00, Sunday closed)
- Holiday calendar: Admin > Telephony > Business Hours > Holidays; add recurring annual holidays (e.g., December 25) and one-time special closures; holidays override the weekly schedule
- Time zone per site: business hours are configured per site; each site uses its own time zone; a multi-site deployment across time zones requires separate business hour configurations
- After-hours routing: configure what happens when a call arrives outside business hours — route to voicemail, play an after-hours message with callback instructions, forward to an external after-hours service, or route to an international site in a different time zone
- Schedule override: for ad-hoc changes (office closure due to weather, early closing), the admin can create a temporary override that takes precedence over the regular schedule for a specified date range

**4. Call Queuing and Overflow**
- Queue configuration: Admin > Telephony > Queues > Create; configure maximum queue size (number of callers waiting), maximum wait time, music on hold (upload audio or use default), and position announcements ("You are number 3 in the queue")
- Queue overflow: when the queue is full or wait time exceeds the threshold, overflow to an alternative destination — secondary hunt group, voicemail, external overflow number, or a "callback request" option
- Callback request: Enterprise tier supports automated callback — the caller presses a key to leave their number and exit the queue; when an agent becomes available, the system automatically calls the customer back
- Queue monitoring: Admin > Telephony > Queues > Live View — real-time display of callers in queue, agents available, average wait time, and longest waiting caller; supervisors use this to decide when to add agents or activate overflow
- Queue reporting: Admin > Reports > Queue Performance — historical reports on average wait time, abandon rate (percentage of callers who hang up), service level (percentage of calls answered within X seconds), and agent occupancy

**5. Advanced Call Flow Patterns**
- Time-based routing: use the Condition node in the IVR flow designer to route calls differently based on time of day (morning vs. afternoon vs. evening) without creating separate flows
- Caller ID routing: route VIP customers (based on their phone number) to a priority queue that bypasses the standard IVR; configure a VIP caller list in Admin > Telephony > VIP List
- Language-based routing: the IVR greeting offers language selection (e.g., "Press 1 for English, 2 for French"); the selection routes to a language-specific hunt group
- Geographic routing: for multi-site deployments, route callers to the nearest site based on the caller's area code or country code
- Disaster recovery routing: configure a failover flow that activates when the primary site is unreachable; automatically reroute calls to a secondary site or external number

#### Lab Description (LAB)

**Setup**: The learner builds a complete IVR call flow for "EuropaCare Insurance" (a multi-lingual insurance company with departments for Claims, Policy, and Emergency Assistance).

**Steps**:
1. Create the main IVR flow: greeting in English and French, language selection (Press 1 for English, 2 for French), department selection (Press 1 for Claims, 2 for Policy, 3 for Emergency).
2. Create three hunt groups: Claims (Longest Idle, 5 agents), Policy (Circular, 3 agents), Emergency (Simultaneous, all agents ring).
3. Configure business hours: Monday-Friday 08:00-18:00 CET; Saturday 09:00-13:00 CET; add a holiday for the upcoming national holiday.
4. Set up queue with overflow: Claims queue maximum wait time 3 minutes, overflow to voicemail with callback request; Emergency queue no overflow (always ring all agents).
5. Test the entire flow end-to-end: simulate calls during business hours, after hours, and on the holiday; verify correct routing at each stage.

**Expected Outcome**: Learner can build a multi-level, multi-lingual IVR with hunt groups, business hours, queuing, and overflow — ready for production deployment.

#### Key Takeaways
- IVR design should minimize the number of menu levels (maximum 3) and options per level (maximum 5) to prevent caller frustration
- Hunt group distribution type should match the team's workflow: Longest Idle for equitable distribution, Simultaneous for urgent calls (emergency), Circular for balanced workload
- Business hours and holidays must be configured per site to account for time zone differences; time zone misconfiguration is the number one cause of after-hours routing failures
- Queue overflow should always have a destination — never let callers wait indefinitely; callback request is the best user experience for high-volume queues
- Test call flows end-to-end after every change; a single misconfigured node can break the entire routing chain

---

### ADM-302: Edge & Hybrid Deployment

| Field | Value |
|---|---|
| **Module ID** | ADM-302 |
| **Title** | Edge & Hybrid Deployment |
| **Level** | L3 Expert |
| **Duration** | 60 minutes |
| **Content Types** | VID + LAB + REF |
| **Prerequisites** | ADM-201 (Telephony & PBX Integration) |

#### Detailed Content Outline

**1. Rainbow Edge Architecture**
- What is Edge: Rainbow Edge is a private deployment of the entire Rainbow platform on customer-owned or partner-hosted infrastructure; all data processing, storage, and communication stay on-premises — no cloud dependency
- Component stack: application server cluster (minimum 3 nodes for high availability), PostgreSQL database cluster (primary + replica), media server (handles voice/video processing), file storage (NFS or S3-compatible object storage), TURN server (media relay for NAT traversal within the private network)
- Hardware requirements: each application server node requires 8 vCPU, 32 GB RAM, 500 GB SSD; database requires 4 vCPU, 16 GB RAM, 1 TB SSD; media server requires 8 vCPU, 16 GB RAM; total footprint for a 2,000-user deployment is approximately 6-8 servers
- Deployment options: bare metal servers, VMware vSphere, Hyper-V, or container orchestration (Kubernetes); the installer supports all four options with automated deployment scripts
- Networking: Edge operates on the customer's internal network; clients connect via the customer's internal DNS; external access (for mobile users outside the corporate network) requires a reverse proxy or VPN

**2. Edge Installation and Configuration**
- Pre-installation checklist: verify hardware meets minimum requirements, ensure DNS records are configured (edge.company.com A record pointing to the load balancer), TLS certificates are prepared (wildcard *.edge.company.com recommended), and firewall rules are configured (ports 443, 5060, 3478, 10000-20000 between clients and Edge servers)
- Installation process: download the Edge installer package from the ALE Partner Portal; run the installer on the first node; the installer deploys the application server, database, and media server containers; configure the remaining nodes as cluster members
- Initial configuration: access the Edge admin portal at https://edge.company.com/admin; create the organization, first company, and first admin user; configure LDAP sync, PBX integration, and authentication (local or SAML)
- License activation: Edge licenses are activated via an online license server or an offline license file (for air-gapped deployments); the license defines the maximum number of users, enabled features, and support entitlement
- Post-installation validation: run the Edge health check utility (rbw-edge-check) which validates all components (application server, database, media server, TURN server, certificate validity, DNS resolution) and reports pass/fail for each

**3. Edge Maintenance and Updates**
- Update process: Edge updates are released quarterly; the admin downloads the update package, reviews the release notes for breaking changes, takes a database backup, and applies the update using the Edge update utility (rbw-edge-update)
- Rolling update: in a 3+ node cluster, updates are applied one node at a time (rolling update) to maintain service availability; the update utility handles node draining, update, and re-joining automatically
- Backup and recovery: daily automated backups of the PostgreSQL database and file storage; backups are stored on a separate volume or offsite location; recovery is performed using the Edge restore utility (rbw-edge-restore)
- Certificate renewal: TLS certificates must be renewed before expiration; for Let's Encrypt, configure automated renewal with certbot; for commercial CAs, set a calendar reminder 30 days before expiration
- Monitoring: Edge includes a built-in Prometheus/Grafana monitoring stack; dashboards show CPU, memory, storage, database connections, API response time, and media server load; configure alerts for threshold breaches

**4. Hybrid Deployment Model**
- What is hybrid: a deployment model that combines Rainbow public cloud for collaboration features (messaging, presence, conferencing) with on-premises PBX for telephony; the Cloud Connector bridges the two
- Hybrid architecture: user authentication and profile data are in the public cloud; telephony signaling and media stay on-premises; the Cloud Connector maintains a persistent tunnel between the PBX and Rainbow cloud
- Hybrid benefits: cloud-managed collaboration with on-premises telephony control; no need to migrate PSTN trunks to the cloud; desk phones continue to function as before; mobile and desktop softphones connect to the cloud
- Hybrid limitations: if the internet connection is lost, telephony continues (PBX is local) but collaboration features (messaging, presence, conferencing) are unavailable; this is the opposite of Edge (which maintains full functionality during internet loss)
- Hybrid-to-cloud migration path: start with hybrid (keep PBX), then gradually migrate sites to cloud-native by moving PSTN trunks to Rainbow SIP trunking; when all sites are migrated, decommission the PBX

**5. Edge vs. Cloud vs. Hybrid Decision Framework**
- Choose cloud when: the organization has no data sovereignty requirements that mandate on-premises, wants zero infrastructure management, and needs rapid deployment (days, not weeks)
- Choose Edge when: the organization requires 100% data sovereignty with no cloud dependency (government, defense, classified environments), operates in locations with unreliable internet, or has regulatory requirements that prohibit cloud data processing
- Choose hybrid when: the organization has an existing PBX investment to protect, wants cloud collaboration features without disrupting telephony, and plans to migrate to cloud-native over time
- Cost comparison: cloud has the lowest initial cost (no infrastructure); Edge has the highest initial cost (hardware + deployment) but may be lower over 5 years for large deployments; hybrid is in between
- Migration between models: Rainbow supports migration from hybrid to cloud-native and from cloud to Edge; migration tools automate user data transfer, but some reconfiguration is required

#### Lab Description (LAB)

**Setup**: The learner works with a simulated Edge deployment environment for "DefenseCorps Industries" (1,500 users, Edge deployment, air-gapped network).

**Steps**:
1. Review the Edge system health dashboard: verify all 3 application server nodes are healthy, database replication is active, and TLS certificates are valid for 60+ days.
2. Simulate a certificate renewal: the current certificate expires in 15 days; generate a new certificate using the lab CA and install it on the Edge cluster.
3. Apply a quarterly update: download the update package, review release notes, take a database backup, and apply the rolling update across 3 nodes.
4. Configure a hybrid extension: connect the Edge deployment to a simulated public cloud instance for a satellite office that requires cloud-based conferencing.
5. Validate the hybrid configuration: verify that users in the satellite office can message Edge users, join conferences, and make calls through the local PBX.

**Expected Outcome**: Learner can manage an Edge deployment (health monitoring, certificate renewal, updates) and configure a hybrid extension.

#### Key Takeaways
- Edge deployments require active infrastructure management (hardware, certificates, updates, backups) that cloud deployments do not; plan for operational overhead
- Rolling updates maintain service availability during maintenance; never apply updates to all nodes simultaneously in a production Edge cluster
- TLS certificate expiration is the number one preventable Edge outage cause; automate renewal or set aggressive calendar reminders
- Hybrid is the most common deployment model for organizations with existing PBX infrastructure; it provides the best of both worlds (cloud collaboration + on-premises telephony)
- The decision between cloud, Edge, and hybrid should be driven by data sovereignty requirements, internet reliability, and existing infrastructure — not by feature preferences (all three support the same features)

---

### ADM-303: Compliance & Audit Configuration

| Field | Value |
|---|---|
| **Module ID** | ADM-303 |
| **Title** | Compliance & Audit Configuration |
| **Level** | L3 Expert |
| **Duration** | 60 minutes |
| **Content Types** | VID + CAS + QIZ |
| **Prerequisites** | ADM-203 (Security & Access Control) |

#### Detailed Content Outline

**1. Data Retention Policies**
- Retention configuration: Admin > Compliance > Data Retention; configure retention periods for messages (30 days to 7 years), files (30 days to 7 years), call recordings (30 days to 7 years), and call metadata/CDRs (1 year minimum for most regulations)
- Per-company vs. per-department retention: Enterprise tier supports different retention policies per department; e.g., the trading desk retains call recordings for 7 years (MiFID II) while the marketing department retains for 1 year (GDPR minimum)
- Retention enforcement: when the retention period expires, data is automatically and permanently deleted; the deletion is logged in the compliance audit trail; there is no recovery after automatic retention-based deletion
- Retention vs. compliance hold: compliance hold overrides retention — data on compliance hold is not deleted even if the retention period expires; this is used for legal hold during litigation or regulatory investigation
- Retention reporting: Admin > Reports > Compliance > Retention — shows data volumes subject to each retention policy, upcoming expirations, and compliance hold status

**2. Call Recording Administration**
- Recording configuration: Admin > Telephony > Recording; enable recording per-company, per-site, or per-user; recording modes include "All Calls" (automatic), "On-Demand" (user-initiated), and "Selective" (based on rules — e.g., record all external calls but not internal)
- Recording storage: recordings are stored encrypted (AES-256) in the Rainbow data center (cloud) or on-premises (Edge); storage consumption is tracked in Admin > Monitoring > Storage
- Recording access control: recordings are accessible only to the call participants and authorized administrators; configure recording access roles in Admin > Security > Roles > Recording Access
- Recording integrity: each recording file has a SHA-256 hash computed at creation time; the hash is stored in the compliance database; any modification to the recording file would change the hash, detecting tampering
- Recording export: for regulatory requests, export recordings as encrypted WAV files with associated metadata (caller, callee, timestamp, duration, hash) via Admin > Compliance > Recording Export

**3. GDPR Compliance Configuration**
- Data Processing Agreement (DPA): Enterprise contracts include a DPA; the admin should verify the DPA is signed and stored; the DPA defines ALE as data processor and the customer as data controller
- Data Subject Access Request (DSAR): when a user requests their data, navigate to Admin > Users > [user] > Export Data; the system generates an encrypted ZIP containing all messages, files, call logs, and profile data; delivery within 48 hours
- Right to Erasure: Admin > Users > [user] > Delete initiates permanent deletion; a 30-day soft-delete window allows recovery; after 30 days, all personal data is permanently removed from all systems including backups
- Consent management: if the organization requires explicit user consent for data processing (depends on legal basis — consent vs. legitimate interest), configure a consent banner that new users must accept on first login; Admin > Compliance > Consent > Configure
- Data portability: export user data in standard formats (JSON for messages, CSV for call logs, original format for files) for portability to another platform

**4. Industry-Specific Compliance Configuration**
- MiFID II (financial services): enable "All Calls" recording for trading floor users, set retention to 5-7 years, configure tamper-evident hash verification, and generate quarterly compliance reports showing recording completeness
- HDS (French healthcare): deploy on the HDS-certified Rainbow instance, configure role-based access to patient communication data, enable audit logging for all data access, and restrict data export to authorized personnel only
- ANSSI CSPN (French government): configure the highest security settings — TLS 1.3 enforcement, AES-256 encryption, MFA for all users, IP allowlisting for admin access, and disable guest access
- ENS (Spanish government): similar to ANSSI; additionally configure data residency to the EU data center region and enable enhanced audit logging for all administrative and user actions

**5. Audit Trail Management**
- Audit trail scope: Rainbow logs every administrative action, user authentication event, data access event, and configuration change with timestamp, actor, action, and affected resource
- Audit trail immutability: audit logs are stored in append-only storage; they cannot be modified or deleted by administrators — this ensures audit integrity for regulatory review
- Audit trail export: Admin > Compliance > Audit Trail > Export; generate audit trail reports for a specified date range and event category; export as CSV or PDF
- SIEM integration: forward audit trail events in real-time to an external SIEM (Splunk, QRadar, Microsoft Sentinel, Elastic) via syslog or API; configure in Admin > Compliance > Audit Trail > SIEM Integration
- Audit review cadence: review audit trails monthly for anomalies (unauthorized admin actions, unusual data exports, excessive login failures); conduct a comprehensive audit review annually or when required by regulators

#### Case Study (CAS)

**Scenario**: "Lyon Financial Group" (a French financial services firm, 600 users, Enterprise tier) has been notified of an upcoming MiFID II compliance audit. The compliance officer asks the admin to prepare: (1) evidence that all trading desk calls are recorded, (2) recording integrity verification, (3) data retention compliance proof, and (4) a complete admin audit trail for the last 12 months.

**Analysis Tasks**:
1. Verify recording configuration: confirm "All Calls" recording is enabled for the 80 trading desk users; check for any gaps in recording (calls that were not recorded due to configuration errors or system issues).
2. Run integrity verification: select a random sample of 50 recordings and verify that the SHA-256 hashes match the compliance database records — proving no recordings have been tampered with.
3. Generate retention compliance report: show that trading desk recordings have a 7-year retention policy configured and that no recordings have been prematurely deleted.
4. Export the admin audit trail: generate a 12-month audit trail report showing all administrative actions related to telephony configuration, recording settings, and user account changes.

#### Key Takeaways
- Data retention policies must be configured during deployment, not after a compliance audit notification; retroactive retention cannot recover data that has already been deleted
- Call recording integrity (tamper-evident hashing) is a regulatory requirement for MiFID II; verify that hashing is enabled and that hashes are stored in a separate, immutable compliance database
- Compliance holds override retention policies; use them proactively when litigation or regulatory investigation is anticipated — do not wait for the formal legal hold notice
- Audit trail immutability ensures that administrators cannot cover their tracks; this is a key control for regulatory audits
- SIEM integration provides real-time compliance monitoring; configure it during deployment rather than as an afterthought

---

### ADM-304: CLI & Automation

| Field | Value |
|---|---|
| **Module ID** | ADM-304 |
| **Title** | CLI & Automation |
| **Level** | L3 Expert |
| **Duration** | 60 minutes |
| **Content Types** | VID + LAB + REF |
| **Prerequisites** | ADM-205 (Monitoring & Analytics) |

#### Detailed Content Outline

**1. Rainbow CLI Overview**
- What is the Rainbow CLI: a command-line interface tool (rbw) that provides administrative access to Rainbow without using the web-based admin portal; available for Windows, macOS, and Linux
- Installation: download from the ALE Partner Portal or install via npm (`npm install -g rainbow-cli`); authenticate with admin credentials or API key
- Common commands: `rbw user list` (list all users), `rbw user create --email john@company.com --tier business` (create a user), `rbw user delete --email john@company.com` (delete a user), `rbw site list` (list all sites), `rbw pbx status` (show PBX connection status)
- Output formats: CLI supports JSON, CSV, and table output formats; use `--format json` for machine-readable output that can be piped to other tools
- Help and documentation: `rbw help` shows all available commands; `rbw help user` shows user-related subcommands; `rbw help user create` shows all parameters for user creation

**2. Bulk Operations via CLI**
- Bulk user creation: prepare a CSV file with user data (email, firstName, lastName, tier, department, phoneNumber); run `rbw user import --file users.csv` to create all users in batch
- Bulk license management: change the subscription tier for multiple users at once; `rbw user update-tier --department "Sales" --tier enterprise` upgrades all Sales department users to Enterprise tier
- Bulk group management: add all users from a department to a group; `rbw group add-members --group "Sales Team" --department "Sales"`
- Bulk export: export all user data, call logs, or message statistics; `rbw report user-activity --from 2025-01-01 --to 2025-12-31 --format csv > activity_report.csv`
- Dry run mode: most bulk operations support `--dry-run` flag that shows what would happen without actually executing; always use dry-run before bulk operations in production

**3. Scripting and Automation**
- Bash scripting: combine CLI commands with shell scripting for automated workflows; example: a script that creates users from AD export, assigns them to groups, and sends welcome emails
- PowerShell integration: on Windows, use PowerShell to call the CLI and process JSON output; `$users = rbw user list --format json | ConvertFrom-Json; $users | Where-Object { $_.tier -eq "essential" } | ForEach-Object { rbw user update-tier --email $_.email --tier business }`
- Scheduled tasks: use cron (Linux/macOS) or Task Scheduler (Windows) to run CLI scripts on a schedule; example: nightly script that syncs AD users, generates a usage report, and emails it to the IT manager
- Error handling: CLI commands return exit codes (0 = success, 1 = error); use exit codes in scripts to handle failures gracefully; `rbw user create ... || echo "Failed to create user" >> error.log`
- Idempotent operations: design scripts to be safely re-runnable; use `rbw user create --if-not-exists` to skip users that already exist rather than failing on duplicates

**4. Rainbow REST API for Automation**
- API overview: Rainbow exposes a comprehensive REST API at https://openrainbow.com/api; the API covers all admin portal functionality (users, groups, telephony, integrations, reporting) and more
- Authentication: API requests require a Bearer token obtained via the OAuth2 client credentials flow; Admin > Integrations > API Keys > Create to generate client credentials
- Common API endpoints: `GET /api/rainbow/admin/v1.0/users` (list users), `POST /api/rainbow/admin/v1.0/users` (create user), `PUT /api/rainbow/admin/v1.0/users/{userId}` (update user), `DELETE /api/rainbow/admin/v1.0/users/{userId}` (delete user)
- Pagination: list endpoints return paginated results; use `offset` and `limit` query parameters; default limit is 100; maximum is 1000
- Webhook-driven automation: combine API calls with incoming webhooks to create event-driven automation; example: when a new user is detected via webhook, automatically assign them to a group and send a welcome Bubble message

**5. Infrastructure as Code**
- Configuration management: export the entire Rainbow configuration (users, groups, policies, telephony settings, integrations) as a JSON document using `rbw config export > config.json`; this serves as a configuration backup and a baseline for configuration drift detection
- Configuration drift detection: periodically export the configuration and compare it with the baseline; differences indicate unauthorized or undocumented changes; use `rbw config diff --baseline baseline.json --current current.json`
- Disaster recovery automation: script the full deployment of a Rainbow environment from configuration backup — create organization, create company, import users, configure PBX, set security policies, enable integrations — all via CLI/API
- CI/CD integration: integrate Rainbow configuration changes into the organization's CI/CD pipeline; changes are reviewed as code (pull request), tested in a staging environment, and applied to production via automated deployment
- Terraform provider: for organizations using Terraform for infrastructure management, a community-maintained Rainbow Terraform provider enables Rainbow configuration management alongside other cloud infrastructure

#### Lab Description (LAB)

**Setup**: The learner automates administrative tasks for "AutoTech Manufacturing" (600 users, 3 sites) using the Rainbow CLI in a sandbox environment.

**Steps**:
1. Install the CLI and authenticate with the sandbox admin credentials.
2. Run a bulk user import: prepare a 50-user CSV file and import using `rbw user import`; use `--dry-run` first to validate.
3. Write a script that: (a) lists all users with "Essential" tier, (b) identifies those who have made more than 10 calls in the last month (using the API), (c) upgrades them to "Business" tier automatically.
4. Export the full configuration backup using `rbw config export` and save it as the baseline.
5. Create a scheduled report: write a script that generates a weekly call quality report and saves it as a CSV file; configure it to run every Monday at 7 AM.

**Expected Outcome**: Learner can use the CLI for bulk operations, write automation scripts, call the REST API, and manage configuration as code.

#### Key Takeaways
- The CLI is the admin's power tool: anything that can be done in the admin portal can be done faster via CLI, especially for bulk operations
- Always use `--dry-run` before executing bulk operations in production; a typo in a bulk delete command can be catastrophic
- Automation scripts should be idempotent (safely re-runnable) and include error handling; design for failure, not just success
- Configuration export and drift detection are essential for change management and disaster recovery; export the configuration baseline after every planned change
- REST API integration enables Rainbow to participate in the organization's broader automation ecosystem (CI/CD, ITSM, monitoring)

---

### ADM-305: Network & QoS Configuration

| Field | Value |
|---|---|
| **Module ID** | ADM-305 |
| **Title** | Network & QoS Configuration |
| **Level** | L3 Expert |
| **Duration** | 60 minutes |
| **Content Types** | VID + LAB + QIZ |
| **Prerequisites** | ADM-201 (Telephony & PBX Integration) |

#### Detailed Content Outline

**1. Network Requirements for Rainbow**
- Bandwidth per call type: audio-only 100 kbps symmetric, video (360p) 500 kbps, video (720p) 1.5 Mbps, screen sharing 1-3 Mbps, messaging/signaling negligible (<50 kbps)
- Site bandwidth calculation: (peak concurrent calls) x (bandwidth per call) x 1.3 (30% overhead for protocol headers and retransmissions); example: a 200-user site with 40 concurrent video calls needs 40 x 1.5 Mbps x 1.3 = 78 Mbps dedicated to Rainbow media
- Required firewall rules: HTTPS/WebSocket (TCP 443) to *.openrainbow.com, STUN/TURN (UDP 3478 and TCP 443) to turn.openrainbow.com, media (UDP 10000-20000) to media-*.openrainbow.com, SIP (TCP/UDP 5060-5061) between PBX and Cloud Connector
- DNS requirements: Rainbow clients resolve openrainbow.com via public DNS; Edge deployments require internal DNS for the Edge FQDN; split-horizon DNS may be needed if the same domain is used for both cloud and Edge
- Proxy considerations: transparent proxies work without configuration; explicit proxies require PAC file or proxy settings in the Rainbow client; SSL-inspecting proxies must whitelist Rainbow domains to avoid breaking WebSocket connections and certificate pinning on mobile clients

**2. QoS Policy Configuration**
- DSCP marking: Rainbow marks audio packets with DSCP EF (Expedited Forwarding, decimal 46), video packets with DSCP AF41 (Assured Forwarding, decimal 34), and signaling with DSCP CS3 (Class Selector, decimal 24)
- Network QoS enforcement: DSCP marks set by the Rainbow client must be honored by the network infrastructure (switches, routers, firewalls); configure QoS policies on network equipment to prioritize EF-marked traffic over all other traffic classes
- Dedicated voice VLAN: for maximum quality, deploy desk phones and Rainbow softphone traffic on a dedicated voice VLAN separate from data traffic; configure the voice VLAN with strict priority queuing for EF-marked traffic
- WAN QoS: for multi-site deployments connected via MPLS or SD-WAN, configure per-class bandwidth guarantees on the WAN links; allocate minimum 20% of WAN bandwidth to the voice traffic class
- Wi-Fi QoS: for users on wireless networks, enable WMM (Wi-Fi Multimedia) on access points and configure the voice priority queue; Wi-Fi calling requires 802.11n or later with WMM support for acceptable quality

**3. STUN/TURN Server Configuration**
- Default STUN/TURN: public cloud deployments use Rainbow's globally distributed STUN/TURN servers automatically; no admin configuration is required
- Custom TURN server: for Edge deployments or organizations that want to keep media traffic on-premises, deploy a custom TURN server; configure in Admin > Company > Network > TURN Configuration; enter the TURN server URL, port, and credentials
- TURN deployment for Edge: install the TURN server (coturn or similar) on the Edge infrastructure; configure TLS certificates, authentication credentials, and relay ports (UDP 49152-65535); register the TURN server in the Edge admin portal
- TURN high availability: deploy TURN servers in pairs (primary and secondary); the Rainbow client automatically fails over to the secondary if the primary is unreachable within 5 seconds
- TURN bandwidth monitoring: each TURN relay session consumes bandwidth at the TURN server; monitor TURN bandwidth usage via the Prometheus/Grafana stack (Edge) or Admin > Monitoring > Network (cloud); plan TURN server capacity for peak concurrent relay sessions

**4. Network Testing and Validation**
- Rainbow Network Test tool: accessible at test.openrainbow.com; performs automated tests of WebSocket connectivity, STUN reachability, TURN relay functionality, and media path quality; generates a shareable report
- Pre-deployment network assessment: run the Network Test tool from each site before deploying Rainbow; identify and resolve connectivity issues (blocked ports, high latency, insufficient bandwidth) before users are impacted
- Continuous monitoring: Admin > Monitoring > Network > Quality Dashboard — shows real-time and historical network quality metrics per site (jitter, packet loss, latency, MOS); configure alerts for threshold breaches
- Traceroute and MTR: for diagnosing latency issues, use traceroute (or mtr for continuous monitoring) from the client site to Rainbow media servers (media-*.openrainbow.com); identify hops with high latency or packet loss
- Packet capture: for deep troubleshooting, capture network traffic at the client (Wireshark) or at the network edge (port mirror/span) and filter for Rainbow traffic (SIP, RTP, STUN, TURN); analyze for retransmissions, codec negotiation, and ICE candidate selection

**5. SD-WAN Integration**
- SD-WAN benefits for Rainbow: automatic failover between WAN links, application-aware routing (prioritize Rainbow traffic over bulk data), dynamic path selection based on real-time quality metrics
- Rainbow traffic identification: configure the SD-WAN appliance to identify Rainbow traffic by FQDN (*.openrainbow.com), by DSCP marking (EF for audio, AF41 for video), or by application signature (if the SD-WAN vendor includes a Rainbow signature)
- Policy configuration: create an SD-WAN policy that routes Rainbow media traffic over the lowest-latency path, falls back to MPLS if the internet path degrades below quality thresholds, and blocks Rainbow media from high-latency satellite links
- Cloud on-ramp: some SD-WAN vendors (VMware VeloCloud, Cisco Meraki, Fortinet, Palo Alto Prisma) offer direct cloud on-ramp to Rainbow PoPs; this reduces latency by bypassing the public internet
- Monitoring integration: SD-WAN analytics and Rainbow call quality data should be correlated; a drop in MOS that coincides with an SD-WAN path change indicates a routing issue, not a Rainbow issue

#### Lab Description (LAB)

**Setup**: The learner configures network and QoS for "MetroHealth Clinics" (400 users across 5 clinic sites connected via SD-WAN).

**Steps**:
1. Calculate the bandwidth requirement for each site: Site A (100 users, 20 concurrent video calls), Site B (80 users, 15 concurrent calls), Sites C-E (70 users each, 10 concurrent calls each).
2. Configure firewall rules for all required Rainbow ports and domains; verify using the Network Test tool from each site.
3. Configure QoS policies on the simulated network equipment: set strict priority queuing for EF-marked audio traffic, weighted fair queuing for AF41-marked video traffic.
4. Deploy and configure a custom TURN server for the Edge deployment at Site A; verify relay functionality from Sites B-E to Site A.
5. Create an SD-WAN policy that prioritizes Rainbow traffic over the lowest-latency WAN link with automatic failover.

**Expected Outcome**: Learner can calculate bandwidth requirements, configure firewall rules and QoS, deploy TURN servers, and integrate with SD-WAN.

#### Key Takeaways
- Bandwidth planning must account for peak concurrent calls, not average; underprovisioning causes quality issues during busy hours
- QoS is not optional for voice/video quality; DSCP markings from Rainbow must be honored end-to-end by the network infrastructure
- SSL-inspecting proxies are the most common network-related Rainbow deployment issue; always whitelist Rainbow domains from SSL inspection
- Custom TURN servers are required for Edge deployments and recommended for organizations that want to keep media traffic on-premises
- SD-WAN integration provides the best network experience for multi-site Rainbow deployments; correlate SD-WAN analytics with Rainbow call quality data for holistic troubleshooting

---

## LEVEL 4: CHAMPION (3 hours total)

---

### ADM-401: Multi-Site & Multi-Company Administration

| Field | Value |
|---|---|
| **Module ID** | ADM-401 |
| **Title** | Multi-Site & Multi-Company Administration |
| **Level** | L4 Champion |
| **Duration** | 60 minutes |
| **Content Types** | VID + CAS + QIZ |
| **Prerequisites** | ADM-302 (Edge & Hybrid Deployment) |

#### Detailed Content Outline

**1. Organization-Level Administration**
- Organization vs. Company: in Rainbow, an "Organization" is a parent entity that contains one or more "Companies"; a multi-national corporation may have one Organization with Companies for each country; the Organization Admin has visibility across all Companies
- Organization Admin role: can create and manage Companies, assign Company Admins, view cross-company analytics, configure organization-level policies (security, federation, branding), and manage the organization's license pool
- Company creation: Admin > Organization > Companies > Create; specify the company name, country, data center region, default subscription tier, and assign a Company Admin
- Cross-company communication: by default, users in different Companies within the same Organization can communicate with each other; the Organization Admin can restrict inter-company communication if needed
- Centralized vs. delegated administration: decide whether to manage all Companies centrally (Organization Admin handles everything) or delegate to Company Admins (each country manages its own users, policies, and PBX); the decision depends on organizational structure and IT governance model

**2. Multi-Site PBX Administration**
- Site-per-PBX model: each physical site with its own PBX is configured as a separate site in Rainbow; Admin > Company > Sites > Create; enter the site name, address, time zone, and PBX configuration
- Multi-PBX topology: a company may have different PBX models at different sites (OmniPCX at HQ, OXO Connect at branches, Cisco CUCM at an acquired company's office); each site's PBX is configured independently with its own Cloud Connector
- Inter-site call routing: calls between sites can route via PBX tie-trunks (traditional), via Rainbow cloud mediation (SIP-to-SIP through the cloud), or via direct SIP trunk between sites; the admin configures the routing path per site pair
- Centralized number plan: for organizations that want a unified numbering scheme across sites (e.g., dial 1xxx for HQ, 2xxx for Branch A, 3xxx for Branch B), configure a global number plan in Admin > Telephony > Number Plan with site-based prefixes
- Site-level policy inheritance: security policies, feature toggles, and subscription tiers can be set at the company level (applies to all sites) or overridden per site; example: enable call recording at all sites but disable it at the cafeteria site

**3. Multi-Company License Management**
- License pool: the Organization Admin manages a pool of licenses that can be allocated to Companies; Admin > Organization > Licenses > Pool shows total purchased, allocated, and available licenses by tier
- License allocation: allocate licenses from the pool to each Company based on their user count; Companies cannot exceed their allocated license count without Organization Admin approval
- License optimization: run cross-company license utilization reports; identify Companies with underutilized licenses (low adoption) and reallocate to Companies with license demand
- License true-up: quarterly review of actual usage vs. allocated licenses; adjust allocations based on hiring, attrition, and adoption changes
- License cost allocation: for organizations that charge-back IT costs to business units, generate per-Company license cost reports for finance

**4. Global Policy Management**
- Organization-level policies: policies set at the Organization level (security, password, session) are inherited by all Companies; Company Admins can tighten but not relax Organization-level policies
- Security baseline: set a minimum security baseline at the Organization level (e.g., minimum password length 12, session timeout 30 minutes, MFA required); Companies can enforce stricter requirements but cannot disable Organization-level requirements
- Compliance consistency: for regulated multi-nationals, ensure that compliance settings (data retention, call recording, audit logging) are consistent across all Companies; use Organization-level policies to enforce consistency
- Branding: configure custom branding (logo, color scheme, login page) at the Organization level for a unified experience, or per-Company for distinct brand identities (e.g., different subsidiaries with different brand names)
- Emergency override: Organization Admins can override Company-level settings in emergency situations (e.g., lock down all Companies during a security incident by enabling IP allowlisting at the Organization level)

**5. Multi-Tenant Partner Administration**
- Partner model: ALE partners manage multiple customer organizations from a single partner admin portal; the partner has Organization Admin access to each customer's Rainbow environment
- Customer onboarding workflow: partner creates a new Organization and Company, configures the initial settings (authentication, PBX, security), provisions users via LDAP sync or CSV import, and hands off to the customer's Company Admin
- Customer isolation: each customer Organization is fully isolated — no data, configuration, or user information is shared between Organizations; the partner's admin access is audited
- Managed services: partners provide ongoing managed administration (monitoring, updates, troubleshooting, user management) as a service; the partner admin portal provides a unified view of all managed customers
- Partner-level reporting: generate cross-customer reports showing total users managed, license utilization, call quality metrics, and support ticket trends; use for business reviews and capacity planning

#### Case Study (CAS)

**Scenario**: "EuroGroup Holdings" (a European conglomerate, 15,000 users across 8 subsidiaries in 6 countries) is consolidating from 8 separate Rainbow deployments into a single Organization with 8 Companies. The Group CIO wants: centralized license management, consistent security policies, but delegated day-to-day administration to each subsidiary's IT team.

**Analysis Tasks**:
1. Design the Organization structure: one Organization "EuroGroup Holdings" with 8 Companies (one per subsidiary), each with a designated Company Admin.
2. Configure Organization-level security baseline: MFA required, minimum password length 14, session timeout 15 minutes, SAML SSO with each subsidiary's Azure AD tenant.
3. Set up the license pool: 15,000 total licenses (8,000 Business, 7,000 Enterprise) allocated proportionally to each Company based on user count.
4. Configure inter-company federation: enable communication between all 8 Companies for cross-subsidiary collaboration; restrict external federation to approved partner organizations only.
5. Create the governance model: Organization Admin (Group IT) handles license allocation, security baseline, and compliance settings; Company Admins (subsidiary IT) handle user management, PBX configuration, and daily operations.

#### Key Takeaways
- Organization-level administration provides centralized control with delegated execution — the optimal model for multi-national enterprises
- License pool management prevents waste (unused licenses at one subsidiary while another is short) and provides cost transparency
- Security policies should be set at the Organization level as a baseline; Companies can tighten but not relax — this ensures consistent compliance across the enterprise
- Multi-site PBX administration requires independent Cloud Connectors per site; each site's PBX configuration is isolated but the user experience is unified
- Partner administration is a scaled version of Organization administration; partners manage multiple Organizations with full isolation between customers

---

### ADM-402: Change Management & Governance

| Field | Value |
|---|---|
| **Module ID** | ADM-402 |
| **Title** | Change Management & Governance |
| **Level** | L4 Champion |
| **Duration** | 60 minutes |
| **Content Types** | VID + CAS + REF |
| **Prerequisites** | ADM-303 (Compliance & Audit Configuration) |

#### Detailed Content Outline

**1. Change Management Framework for Rainbow**
- Why change management matters: uncontrolled changes to Rainbow configuration (PBX settings, security policies, IVR flows, integrations) are the leading cause of service disruptions; a change management process prevents outages caused by unauthorized or untested changes
- Change categories: Standard (pre-approved, low-risk, repeatable — e.g., creating a new user), Normal (requires review and approval — e.g., modifying the IVR flow), Emergency (urgent, bypasses normal review — e.g., blocking a compromised account), and Major (requires CAB approval — e.g., Edge update, PBX configuration change)
- Change request workflow: Requester submits a change request (what, why, when, impact, rollback plan) > Reviewer assesses risk and completeness > Approver authorizes execution > Implementer executes the change > Validator confirms success > Documentation is updated
- Change Advisory Board (CAB): for organizations with formal ITIL processes, Rainbow configuration changes should be presented to the CAB alongside other IT changes; the CAB reviews impact, dependencies, and scheduling

**2. Configuration Baseline and Drift Detection**
- Configuration baseline: after initial deployment and after every approved change, export the full Rainbow configuration using the CLI (`rbw config export > baseline_YYYYMMDD.json`) and store in version control (Git)
- Drift detection: weekly automated comparison of current configuration against the baseline; any differences indicate unauthorized changes; `rbw config diff --baseline baseline.json --current current.json`
- Drift response: when drift is detected, investigate who made the change (check audit log), determine if the change was authorized, and either approve (update baseline) or revert (restore from baseline)
- Version control: store configuration baselines in Git with commit messages describing the approved change; this provides a complete history of all configuration changes over time
- Automated compliance check: create a script that validates the current configuration against required compliance settings (e.g., "call recording is enabled for trading desk," "data retention is 7 years for financial data," "MFA is required for all admins"); run this script weekly

**3. Testing and Validation Procedures**
- Staging environment: maintain a non-production Rainbow environment (sandbox tenant or Edge staging instance) that mirrors production configuration; test all changes in staging before applying to production
- Test plan for common changes: user provisioning change (test with 5 users), PBX configuration change (test with a single site), IVR flow change (test with simulated calls), security policy change (test with a non-admin account), connector update (test with a single integration)
- Validation checklist: after applying a change to production, validate: (1) the change works as expected, (2) no existing functionality is broken (regression), (3) monitoring shows no anomalies, (4) users are not reporting issues
- Rollback procedure: every change must have a documented rollback plan; for configuration changes, rollback is restoring from the baseline; for Edge updates, rollback is restoring from the pre-update backup; for PBX changes, rollback is reverting the PBX configuration file
- Post-change monitoring: monitor the platform for 30 minutes after applying a change; watch for error rate spikes, authentication failures, call quality degradation, or user complaints

**4. Incident Management Integration**
- Linking changes to incidents: when an incident occurs, the first diagnostic question is "what changed recently?"; cross-reference the incident timeline with the change log to identify potential causes
- Change-caused incidents: if a change causes an incident, execute the rollback plan immediately; do not debug in production — revert first, investigate later
- Post-incident review: every incident caused by a change should result in a post-incident review; analyze why the change caused the incident (was the test plan inadequate? was the change not tested in staging? was the rollback plan missing?)
- Change process improvement: use post-incident findings to improve the change process; add new test scenarios, update rollback procedures, and adjust risk assessment criteria

**5. Governance Documentation and Reporting**
- RACI matrix: document who is Responsible, Accountable, Consulted, and Informed for each type of Rainbow change; example: for an IVR flow change, the Telephony Admin is Responsible, the IT Manager is Accountable, the Contact Center Manager is Consulted, and affected agents are Informed
- Change calendar: maintain a forward-looking change calendar showing planned changes with scheduled dates, owners, and expected impact; share with stakeholders weekly
- Change metrics: track the number of changes per month, change success rate (percentage applied without rollback), change-caused incident rate, and average time from request to implementation
- Compliance reporting: generate monthly change management reports showing all changes made, their approval status, test results, and validation outcomes; this documentation is required for ISO 27001, SOC 2, and similar certifications
- Continuous improvement: review change metrics quarterly; if change-caused incident rate is increasing, tighten the review and testing process; if change velocity is too slow, streamline the approval process for standard changes

#### Case Study (CAS)

**Scenario**: "NordBank Group" (a Nordic bank, 2,000 users, Enterprise tier) experienced a 4-hour telephony outage caused by an unauthorized PBX configuration change. The CIO demands a formal change management process for all Rainbow-related changes.

**Analysis Tasks**:
1. Investigate the outage: the audit log shows that a junior admin changed the SIP trunk port from 5060 to 5061 at 14:00 on a Tuesday; the change was not tested, not approved, and there was no rollback plan; it took 3 hours to diagnose and 1 hour to revert.
2. Design the change management process: implement the 4-category change model (Standard, Normal, Emergency, Major) with appropriate review and approval gates for each.
3. Create the governance artifacts: RACI matrix for all change types, change request template, test plan template, rollback procedure template, and post-change validation checklist.
4. Implement drift detection: configure weekly configuration baseline comparison with automated alerting for unauthorized changes.
5. Define success metrics: target zero change-caused outages, 95% change success rate, and 100% change documentation compliance within 6 months.

#### Key Takeaways
- Uncontrolled configuration changes are the leading cause of Rainbow service disruptions; a formal change management process is not bureaucracy — it is operational risk mitigation
- Configuration baselines stored in version control provide an auditable history of all changes and enable rapid rollback when issues occur
- Every change must have a test plan and a rollback plan before it is approved; "I will fix it if it breaks" is not a rollback plan
- Drift detection catches unauthorized changes before they cause incidents; automate it and run it weekly
- Change management metrics (success rate, incident rate, velocity) should be tracked and reviewed quarterly to continuously improve the process

---

### ADM-403: Capacity Planning & Performance Optimization

| Field | Value |
|---|---|
| **Module ID** | ADM-403 |
| **Title** | Capacity Planning & Performance Optimization |
| **Level** | L4 Champion |
| **Duration** | 60 minutes |
| **Content Types** | VID + CAS + REF |
| **Prerequisites** | ADM-305 (Network & QoS Configuration) |

#### Detailed Content Outline

**1. Capacity Planning Fundamentals**
- Capacity domains: user capacity (how many users the deployment can support), call capacity (concurrent call limit per site), storage capacity (messages, files, recordings), network capacity (bandwidth per site), and infrastructure capacity (CPU, memory, storage for Edge)
- Capacity planning cycle: measure current utilization (Admin > Monitoring > Usage), project future demand (based on headcount growth, feature adoption, and seasonal patterns), compare against capacity limits, and plan upgrades before limits are reached
- Erlangs for voice capacity: use the Erlang B formula to calculate the number of SIP trunks needed per site; inputs are call arrival rate (calls per hour), average call duration, and target blocking probability (typically 1%); example: a site with 200 calls/hour at 3 minutes average needs 15 SIP trunks for 1% blocking
- Concurrent call capacity: Rainbow public cloud supports virtually unlimited concurrent calls (cloud-scaled); Edge deployments are limited by media server capacity (approximately 200 concurrent calls per media server instance); plan media server scaling based on peak concurrent calls
- Storage capacity: message storage grows at approximately 50 MB/user/year for typical messaging usage; call recordings grow at approximately 5 MB/minute (16kHz mono WAV); calculate total storage requirement based on user count, recording policy, and retention period

**2. Edge Infrastructure Sizing**
- Sizing model: Edge infrastructure is sized based on user count and feature utilization; the sizing guide provides server requirements for 500, 1,000, 2,000, 5,000, and 10,000 user deployments
- 500-user deployment: 3 application nodes (4 vCPU, 16 GB RAM each), 1 database node (4 vCPU, 16 GB RAM, 500 GB SSD), 1 media server (4 vCPU, 8 GB RAM)
- 2,000-user deployment: 3 application nodes (8 vCPU, 32 GB RAM each), 2 database nodes (primary + replica, 8 vCPU, 32 GB RAM, 1 TB SSD each), 2 media servers (8 vCPU, 16 GB RAM each)
- 10,000-user deployment: 5 application nodes (16 vCPU, 64 GB RAM each), 3 database nodes (primary + 2 replicas, 16 vCPU, 64 GB RAM, 2 TB SSD each), 4 media servers (16 vCPU, 32 GB RAM each)
- Scaling triggers: add application nodes when API response time exceeds 500ms at P95; add database replicas when database connection pool utilization exceeds 80%; add media servers when concurrent call count exceeds 80% of media server capacity

**3. Performance Monitoring and Optimization**
- Key performance indicators: API response time (P50, P95, P99), database query time, WebSocket connection latency, media server CPU utilization, memory utilization, and storage I/O throughput
- Monitoring tools: Edge deployments include Prometheus for metric collection and Grafana for visualization; cloud deployments surface performance metrics in Admin > Monitoring > Performance
- Common performance bottlenecks: database (slow queries, connection pool exhaustion, storage I/O saturation), media server (CPU overload during peak concurrent calls), network (bandwidth saturation at a specific site), and application server (memory pressure from large Bubbles with extensive history)
- Optimization techniques: database indexing (ensure all frequently queried fields are indexed), connection pooling tuning (adjust pool size based on concurrent user count), media server codec optimization (encourage Opus codec over G.711 to reduce bandwidth), and CDN configuration for static assets (Edge only)
- Proactive vs. reactive: configure alerts for all KPIs with thresholds at 70% (warning) and 85% (critical) of capacity; investigate at 70% and plan upgrades at 85% — never wait until 100%

**4. Growth Modeling and Forecasting**
- Historical trend analysis: use 6-12 months of utilization data to identify growth trends; plot user count, call volume, storage usage, and bandwidth consumption over time
- Growth projection: extrapolate trends 12-24 months forward; account for known events (office openings, acquisitions, product launches) that will cause step-function increases
- Seasonal patterns: many organizations have predictable seasonal variations (back-to-school for education, year-end for financial services, holiday season for retail); plan capacity for peak season, not average
- Scenario planning: create optimistic (10% annual growth), expected (20% annual growth), and pessimistic (50% annual growth due to acquisition) scenarios; budget infrastructure for the expected scenario with the ability to accelerate if the optimistic scenario materializes
- Budget forecasting: translate capacity requirements into cost projections; for cloud, this is additional license cost; for Edge, this is additional server procurement and deployment cost; present to finance with 12-month and 24-month views

**5. Disaster Recovery and Business Continuity**
- Cloud DR: Rainbow public cloud is inherently resilient with intra-region replication; the RPO (Recovery Point Objective) is near-zero and the RTO (Recovery Time Objective) is minutes; no customer action required
- Edge DR: the customer is responsible for Edge DR; implement daily database backups to an offsite location, document the disaster recovery procedure, and test it quarterly
- Edge DR procedure: (1) provision replacement hardware, (2) install Edge software from the installer package, (3) restore the database from the most recent backup, (4) restore file storage, (5) update DNS to point to the new infrastructure, (6) validate
- RTO and RPO targets: define targets based on business requirements; typical Edge targets are RTO < 4 hours and RPO < 24 hours (daily backup); organizations requiring lower RPO should implement database streaming replication to a standby site
- DR testing: conduct a tabletop DR exercise quarterly (walk through the procedure without executing) and a full DR test annually (actually restore to standby infrastructure and validate functionality)

#### Case Study (CAS)

**Scenario**: "EuroHealth Network" (a hospital network, 5,000 users across 10 hospitals, Rainbow Edge deployment) has been growing at 15% annually. The current infrastructure was sized for 5,000 users but utilization metrics show CPU at 75%, database storage at 70%, and media server capacity at 80% during peak hours. The CIO asks the Champion to develop a 24-month capacity plan.

**Analysis Tasks**:
1. Project growth: at 15% annual growth, 5,000 users becomes 5,750 in 12 months and 6,613 in 24 months; two new hospitals are planned (adding 600 users).
2. Assess capacity gaps: at 6,600 users, the current application servers will be overloaded (projected CPU 95%+), database storage will be exhausted (projected 95%+), and media server capacity will be exceeded during peak hours.
3. Design the upgrade plan: add 2 application server nodes (months 1-3), expand database storage by 1 TB and add a read replica (months 3-6), add 2 media server instances (months 6-9), and procure additional server hardware for the 2 new hospitals (months 12-18).
4. Budget the upgrade: calculate hardware costs, deployment services, and ongoing maintenance for the 24-month plan.
5. Implement proactive monitoring: configure 70%/85% threshold alerts for all capacity KPIs to detect if actual growth exceeds projections.

#### Key Takeaways
- Capacity planning is proactive: by the time users notice performance issues, you are already past the capacity threshold; plan and upgrade before limits are reached
- Use the Erlang B formula for voice trunk capacity and peak concurrent calls for media server capacity; never size based on averages — always plan for peaks
- Edge infrastructure sizing follows a predictable model based on user count and feature utilization; the sizing guide provides the blueprint — follow it
- Growth forecasting requires historical data, known events (office openings, acquisitions), and scenario planning; budget for the expected scenario with flexibility for the optimistic
- Disaster recovery for Edge is the customer's responsibility; define RTO/RPO targets, implement backups, document procedures, and test quarterly — a DR plan that has never been tested is not a DR plan
