# ADM-101: Rainbow Admin Portal Overview

| Field            | Value                                                      |
|------------------|------------------------------------------------------------|
| **Module ID**    | ADM-101                                                    |
| **Title**        | Rainbow Admin Portal Overview                              |
| **Track**        | Administrators (L1 Foundation)                             |
| **Duration**     | 45 minutes                                                 |
| **Content Types**| Reading, Video, Diagrams, Knowledge Check                  |
| **Prerequisites**| None                                                       |

## Learning Objectives

By the end of this module, you will be able to:

1. Log in to the Rainbow admin portal and navigate the main sections of the interface.
2. Interpret the dashboard metrics including user count, active users, license utilization, and system health indicators.
3. Describe the purpose of each main navigation area: Company, Users, Services, Telephony, Connectors, Analytics, and Settings.
4. Differentiate between the three administrator roles — Company Administrator, Site Administrator, and Technical Administrator — and explain their scopes.
5. Locate support resources including the Help Center, community forums, and ticket submission workflows.

---

## 1. Accessing the Admin Portal

![video: Logging In to the Rainbow Admin Portal](adm-portal-login-tour)

### 1.1 Portal URL and Browser Requirements

The Rainbow administration portal is accessed at **admin.openrainbow.com**. This is a web-based console that does not require any software installation. It is separate from the end-user web client at web.openrainbow.com — the admin portal is exclusively for managing your Rainbow company, users, services, and configuration.

Supported browsers include:

- **Google Chrome** (version 90 and later) — recommended
- **Mozilla Firefox** (version 88 and later)
- **Microsoft Edge** (Chromium-based, version 90 and later)
- **Apple Safari** (version 14 and later)

The portal is fully responsive but is optimized for desktop screen resolutions of 1280x720 and above. While you can access it from a tablet, the experience is best on a laptop or desktop monitor due to the density of information presented in tables and configuration panels.

> **Tip:** Bookmark **admin.openrainbow.com** in your browser and pin it as a tab if you manage Rainbow daily. The portal session remains active for the duration configured in your company's session timeout policy (default is 60 minutes of inactivity).

### 1.2 Authentication and Login

To log in, you use the same Rainbow account credentials (email and password) that you use for the Rainbow client application. However, your account must have an administrator role assigned to it. A standard user account without administrator privileges will be denied access to the portal.

The login flow supports:

- **Standard email/password authentication** with optional two-factor authentication (2FA) via authenticator app or SMS.
- **Single Sign-On (SSO)** via SAML 2.0 if your organization has configured federated identity with an identity provider such as Azure AD, Okta, or ADFS. When SSO is enabled, clicking "Sign in with SSO" redirects you to your corporate identity provider's login page.

After successful authentication, you land on the **Dashboard** — the default home screen of the admin portal.

### 1.3 Session Management

Admin portal sessions are governed by the session timeout policy configured under Settings. By default, a session expires after 60 minutes of inactivity. When a session expires, you are redirected to the login page. Any unsaved changes in open configuration panels are lost upon session expiration.

For security, the portal also enforces:

- **Concurrent session limits**: A single admin account can have up to three active portal sessions simultaneously (for example, on different devices).
- **Automatic logout on password change**: If your password is changed — either by you or by another administrator — all active sessions are terminated immediately.
- **Audit logging**: Every login and logout event is recorded in the system audit log, including the IP address and browser user agent.

> **Warning:** If you leave the admin portal open on a shared workstation, another person could access your session before it times out. Always log out explicitly when you are finished, especially on shared or public computers.

---

## 2. The Dashboard

### 2.1 Dashboard Layout

The dashboard is the first screen you see after logging in. It provides a high-level overview of your Rainbow deployment's health and activity. The dashboard is divided into several widget panels, each displaying a specific category of information.

The standard dashboard layout includes:

- **User Summary** (top left): Total provisioned users, active users in the last 30 days, and users who have never logged in.
- **License Utilization** (top right): A bar chart showing how many licenses of each tier (Essential, Business, Enterprise, Connect, Hub) are assigned versus available.
- **System Health** (center): A status indicator showing the current operational status of Rainbow services — green (all services operational), amber (degraded performance), or red (service disruption).
- **Recent Activity** (bottom left): A feed of recent administrative actions such as user creation, license changes, and configuration modifications.
- **Quick Actions** (bottom right): Shortcut buttons for common tasks — Add User, Import Users, View Analytics, and Open Support Ticket.

### 2.2 User Metrics

The user summary widget displays three key numbers:

| Metric                | Description                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| **Total Users**       | The total number of user accounts provisioned in your company, regardless of status |
| **Active Users (30d)**| Users who have logged in to any Rainbow client at least once in the past 30 days   |
| **Never Activated**   | Users whose accounts have been created but who have never completed their first login |

These metrics help you understand adoption at a glance. A high "Never Activated" count may indicate onboarding issues — users who were provisioned but never received their welcome email, or who received it but did not follow through with activation.

Clicking on any of these numbers takes you directly to the Users section with a pre-applied filter matching that metric. For example, clicking "Never Activated" opens the user list filtered to show only users with a "Created" status.

### 2.3 License Utilization

The license utilization chart is critical for managing your subscription costs. It shows:

- **Assigned licenses**: The number of licenses currently allocated to users, grouped by tier.
- **Available licenses**: The number of purchased licenses that remain unassigned.
- **Over-allocation warnings**: If you have assigned more licenses than purchased (possible during grace periods), the chart highlights the overage in red.

Rainbow operates on a named-user licensing model. Each user is assigned exactly one license tier. You cannot assign multiple tiers to the same user. The license determines which features that user can access.

### 2.4 System Health

The system health widget connects to Rainbow's service status infrastructure. It reports the current operational state of the platform and displays any active incidents or scheduled maintenance windows.

The health indicator uses a simple traffic-light model:

- **Green**: All services operational. No action required.
- **Amber**: One or more services are experiencing degraded performance. Click for details.
- **Red**: A service disruption is in progress. Click for incident details, estimated time to resolution, and workaround guidance.

The system health widget pulls its data from the same source as the public Rainbow status page at **status.openrainbow.com**. Administrators can also subscribe to status page notifications (email or webhook) for proactive alerting.

> **Key Concept:** The dashboard is not just a display — it is an early warning system. Make it a habit to check the dashboard at the start of each workday. A spike in "Never Activated" users, a license over-allocation, or a system health warning can all be caught early from this single screen.

---

## 3. Main Navigation

### 3.1 Navigation Structure

The admin portal uses a left-side navigation panel with seven primary sections. Each section expands into sub-pages when selected.

![diagram: Admin Portal Navigation Map — Sections and Sub-Pages](adm-portal-nav-map)

The seven main navigation sections are:

| Section          | Purpose                                                                              |
|------------------|--------------------------------------------------------------------------------------|
| **Company**      | Company profile, sites, departments, organizational units, branding                  |
| **Users**        | User accounts, bulk import, directory, groups, guest management                      |
| **Services**     | Messaging settings, conferencing, file sharing, Bubbles, channels                    |
| **Telephony**    | PBX configuration, call routing, SIP trunks, voicemail, numbering plans              |
| **Connectors**   | Third-party integrations: CRM, calendar, LDAP, Microsoft 365, Google Workspace       |
| **Analytics**    | Usage reports, adoption metrics, call quality dashboards, export options              |
| **Settings**     | Security policies, session management, password rules, admin role assignments, API keys |

### 3.2 Company Section

The Company section is where you manage the organizational identity and structure of your Rainbow deployment. It includes:

- **Company Profile**: Legal name, address, primary contact, industry sector, company logo, and default language/timezone.
- **Sites**: Physical locations within your organization (headquarters, branch offices, remote sites). Each site can have its own PBX configuration, numbering plan, and local administrator.
- **Departments**: Logical groupings within a site for organizational management.
- **Organizational Units (OUs)**: Cross-site groupings that allow you to apply policies and delegate administration across organizational boundaries.

### 3.3 Users Section

The Users section is where you spend the majority of your time as an administrator. It provides:

- **User List**: A searchable, filterable table of all user accounts. You can filter by status (Active, Created, Deactivated), site, department, license tier, and role.
- **Add User**: Manual creation of individual user accounts.
- **Import Users**: Bulk provisioning via CSV file upload.
- **Directory**: The company-wide contact directory that users see in their Rainbow clients.
- **Groups**: Distribution groups for messaging and scheduling.
- **Guest Management**: External users who have been invited into your company's Bubbles or meetings.

### 3.4 Services Section

The Services section controls the collaboration features available to your users:

- **Messaging**: Company-wide messaging policies including message retention, external messaging permissions, and message qualification tags.
- **Conferencing**: Default conference settings, recording policies, maximum participant limits, and dial-in access numbers.
- **File Sharing**: Storage quotas, allowed file types, external sharing restrictions, and virus scanning settings.
- **Bubbles**: Default Bubble creation permissions, maximum membership, and archival policies.
- **Channels**: Company-wide broadcast channels for announcements and news.

### 3.5 Telephony Section

The Telephony section is relevant if your company uses Rainbow's PBX integration (Enterprise or Connect tiers):

- **PBX Systems**: Registration and management of connected PBX systems (OmniPCX Enterprise, OmniPCX Office, third-party SIP).
- **Call Routing**: Inbound and outbound call routing rules, dial plans, and emergency number configuration.
- **SIP Trunks**: Configuration of SIP trunk connections for PSTN breakout.
- **Voicemail**: Voicemail system settings, greeting management, and message-to-email configuration.
- **Numbering Plans**: Internal extension numbering, DID (Direct Inward Dialing) number assignments, and number portability management.

### 3.6 Connectors Section

The Connectors section manages integrations with external systems:

- **LDAP/Active Directory**: Directory synchronization for automated user provisioning (covered in depth in ADM L2).
- **Microsoft 365**: Calendar synchronization, Teams coexistence, and Outlook plugin settings.
- **Google Workspace**: Calendar and contact synchronization.
- **CRM Connectors**: Salesforce, Microsoft Dynamics, and other CRM integrations for click-to-call and contact lookup.
- **Custom Webhooks**: Outbound webhook configurations for event-driven integrations.

### 3.7 Analytics Section

The Analytics section provides reports and dashboards for understanding how your organization uses Rainbow:

- **Adoption Dashboard**: Daily/weekly/monthly active users, feature usage breakdown, and trend graphs.
- **Call Quality**: Mean Opinion Score (MOS), packet loss, jitter, and latency metrics for voice and video calls.
- **Usage Reports**: Message volumes, conference minutes, file sharing activity, and API call counts.
- **Export**: Download reports in CSV or PDF format for offline analysis or executive reporting.

### 3.8 Settings Section

The Settings section contains security, policy, and platform configuration options:

- **Security Policies**: Password complexity rules, two-factor authentication enforcement, session timeout duration, and IP allowlisting.
- **Admin Roles**: Assignment and management of administrator roles (detailed in Section 4).
- **API Keys**: Management of application API keys for Rainbow Hub integrations.
- **Notifications**: Configuration of system notification preferences for administrators.
- **Audit Log**: Searchable log of all administrative actions with timestamps, actor identity, and affected objects.

---

## 4. Administrator Roles

### 4.1 Role-Based Access Control

Rainbow implements a role-based access control (RBAC) model for administration. Rather than giving every administrator full access to every setting, the platform defines three distinct administrator roles, each with a specific scope and permission set.

This model follows the principle of least privilege: each administrator should have only the access necessary to perform their responsibilities, and no more.

### 4.2 Company Administrator

The Company Administrator is the highest-level administrative role. A company typically has one to three Company Administrators.

**Scope**: Full access to all sections of the admin portal, all sites, all users, and all settings.

**Key permissions**:
- Create, modify, and delete user accounts across all sites
- Assign and revoke licenses of any tier
- Create and manage sites, departments, and organizational units
- Configure company-wide security policies (password rules, 2FA, session timeout)
- Assign and revoke administrator roles for other users
- Access all analytics and audit logs
- Manage connectors and third-party integrations
- Configure telephony settings across all sites
- Manage branding (logo, welcome message, email templates)
- Submit and manage support tickets on behalf of the company

**Typical role holder**: Head of IT, CIO, or the primary IT administrator responsible for the organization's communication infrastructure.

### 4.3 Site Administrator

The Site Administrator is scoped to a specific site (physical location) within the company.

**Scope**: Access limited to users, departments, and settings within their assigned site.

**Key permissions**:
- Create, modify, and deactivate user accounts within their site
- Assign licenses to users within their site (within the company's available license pool)
- Manage departments within their site
- View analytics for their site only
- Manage site-level telephony settings (if applicable)

**Restrictions**:
- Cannot access users or settings at other sites
- Cannot modify company-wide policies
- Cannot assign or revoke administrator roles
- Cannot manage connectors or integrations
- Cannot access the company-level audit log (can only see site-level entries)

**Typical role holder**: Local IT staff at a branch office, regional IT coordinator, or office manager responsible for the technology at a specific location.

### 4.4 Technical Administrator

The Technical Administrator is a specialized role focused on telephony and infrastructure configuration.

**Scope**: Access to telephony, connectors, and technical settings across all sites, but limited access to user management and company settings.

**Key permissions**:
- Full access to the Telephony section (PBX configuration, call routing, SIP trunks, voicemail, numbering plans)
- Full access to the Connectors section (LDAP, Microsoft 365, Google Workspace, CRM, webhooks)
- View-only access to the Users section (can see user accounts but cannot create or modify them)
- Access to call quality analytics
- Access to system health and service status information

**Restrictions**:
- Cannot create, modify, or delete user accounts
- Cannot assign or revoke licenses
- Cannot modify company profile or branding
- Cannot change security policies
- Cannot assign administrator roles

**Typical role holder**: Telephony engineer, network administrator, or integration specialist who manages the technical connectivity between Rainbow and the organization's PBX, directory, and third-party systems.

### 4.5 Role Assignment

Administrator roles are assigned by a Company Administrator through **Settings > Admin Roles** in the portal. A user must already have a Rainbow account before they can be assigned an administrator role. The process is:

1. Navigate to **Settings > Admin Roles**.
2. Click **Add Administrator**.
3. Search for the user by name or email.
4. Select the role: Company Administrator, Site Administrator, or Technical Administrator.
5. For Site Administrator, select the site(s) to which the role applies.
6. Click **Confirm**.

The user receives an email notification informing them that they have been granted administrative access. The next time they log in to admin.openrainbow.com, they will see the portal sections appropriate to their role.

> **Info:** A single user can hold multiple administrator roles. For example, a user could be both a Site Administrator for one site and a Technical Administrator company-wide. In such cases, the portal displays the union of all permissions granted by their combined roles.

### 4.6 Comparing Administrator Roles

| Capability                     | Company Admin | Site Admin | Technical Admin |
|--------------------------------|:------------:|:----------:|:---------------:|
| Manage all users               | Yes          | Site only  | View only       |
| Assign licenses                | Yes          | Site only  | No              |
| Company-wide policies          | Yes          | No         | No              |
| Telephony configuration        | Yes          | Site only  | Yes             |
| Connectors & integrations      | Yes          | No         | Yes             |
| Analytics (full)               | Yes          | Site only  | Call quality only|
| Assign admin roles             | Yes          | No         | No              |
| Audit log access               | Full         | Site only  | Technical only  |
| Branding & company profile     | Yes          | No         | No              |
| Support ticket management      | Yes          | Yes        | Yes             |

---

## 5. Support Resources and Notifications

### 5.1 System Notifications

The admin portal includes a notification bell icon in the top-right corner of the interface. This notification center aggregates important alerts:

- **License threshold alerts**: Triggered when license utilization reaches 80% and 95% of purchased capacity.
- **Service incidents**: Notifications from the Rainbow operations team about ongoing or resolved service disruptions.
- **Scheduled maintenance**: Advance notice of planned maintenance windows that may affect service availability.
- **Security alerts**: Notifications about suspicious login attempts, password policy violations, or certificate expiration warnings.
- **System updates**: Announcements about new features, client updates, and platform changes.

Notifications can be configured to also send email alerts to designated administrator email addresses. This is configured under **Settings > Notifications**.

### 5.2 Service Status Page

The public Rainbow service status page is available at **status.openrainbow.com**. This page displays:

- Real-time operational status of all Rainbow services (messaging, voice, video, conferencing, admin portal, API)
- Active incident reports with timeline updates
- Scheduled maintenance announcements
- Historical uptime data for the past 90 days

Administrators can subscribe to status page updates via email, SMS, or webhook. This is independent of the admin portal notifications and ensures you receive incident alerts even if you are not logged in to the portal.

### 5.3 Help Center

The Rainbow Help Center is accessible via the **?** icon in the top-right corner of the admin portal, or directly at **support.openrainbow.com**. It contains:

- **Administrator guides**: Step-by-step documentation for all admin portal features
- **User guides**: End-user documentation that you can share with your users
- **FAQ sections**: Answers to common questions organized by topic
- **Release notes**: Detailed descriptions of new features and changes in each platform release
- **Video tutorials**: Short instructional videos for common administrative tasks

### 5.4 Community Forums

The Rainbow Community is an online forum where administrators, partners, and developers share knowledge, ask questions, and discuss best practices. It is accessible at **community.openrainbow.com**.

Key community areas include:

- **Admin Forum**: Discussions about admin portal features, configuration tips, and deployment strategies.
- **Telephony Forum**: Discussions about PBX integration, call routing, and SIP configuration.
- **Feature Requests**: A board where you can submit and vote on feature requests. ALE product management actively monitors this board.
- **Known Issues**: A curated list of known issues with workarounds, maintained by the Rainbow support team.

### 5.5 Submitting a Support Ticket

When you encounter an issue that you cannot resolve using the Help Center or community resources, you can submit a support ticket directly from the admin portal:

1. Click the **?** icon in the top-right corner.
2. Select **Contact Support**.
3. Fill in the ticket form: subject, description, severity (Critical, High, Medium, Low), and affected users.
4. Attach relevant screenshots, log files, or diagnostic reports.
5. Click **Submit**.

Tickets are routed to the appropriate ALE support team based on severity and topic. Response time SLAs vary by your subscription tier:

| Severity | Enterprise SLA    | Business SLA       |
|----------|-------------------|--------------------|
| Critical | 1 hour            | 4 hours            |
| High     | 4 hours           | 8 business hours   |
| Medium   | 8 business hours  | 2 business days    |
| Low      | 2 business days   | 5 business days    |

You can track ticket status, add comments, and view resolution details directly from the portal under **Settings > Support Tickets**.

### 5.6 Relationship Between Companies, Sites, Users, and Subscriptions

Understanding the organizational hierarchy in Rainbow is fundamental to effective administration:

- **Company**: The top-level entity. One company represents one Rainbow customer organization. All configuration, licensing, and billing is scoped to the company.
- **Sites**: Physical or logical locations within the company. Each site can have its own PBX configuration, numbering plan, and local administrators. Sites are used to model geographic distribution (headquarters, branch offices, remote locations).
- **Departments**: Organizational subdivisions within a site. Departments are used for user organization and reporting but do not affect access control or licensing.
- **Users**: Individual accounts within a site and department. Each user has one license tier, one primary site assignment, and zero or more administrator roles.
- **Subscriptions**: The commercial agreement that defines how many licenses of each tier the company has purchased. Subscriptions are managed at the company level and the license pool is shared across all sites.

This hierarchy means that when you provision a user, you must assign them to a site and optionally to a department. The license they receive comes from the company-wide pool, not a site-specific allocation (unless you have chosen to manually partition your license pool by site for internal tracking purposes).

---

## Key Concepts Summary

| Concept                        | Definition                                                                                          |
|--------------------------------|-----------------------------------------------------------------------------------------------------|
| **Admin Portal**               | Web-based management console at admin.openrainbow.com for configuring Rainbow                       |
| **Dashboard**                  | Home screen showing user metrics, license utilization, system health, and recent activity            |
| **Company Administrator**      | Highest admin role with full access to all settings, users, and sites                               |
| **Site Administrator**         | Admin role scoped to a specific site — manages users and settings within that location               |
| **Technical Administrator**    | Admin role focused on telephony, connectors, and infrastructure configuration                       |
| **License Utilization**        | Dashboard metric showing assigned vs. available licenses by tier                                    |
| **System Health**              | Traffic-light indicator (green/amber/red) showing current Rainbow service operational status         |
| **Audit Log**                  | Searchable record of all administrative actions with timestamps and actor identity                   |
| **Service Status Page**        | Public page at status.openrainbow.com showing real-time platform operational status                  |

---

## Practice Exercise

**Scenario**: You have just been appointed as the Company Administrator for a manufacturing firm with 600 employees. The company has three locations: a headquarters in Lyon (350 users), a factory in Nantes (180 users), and a sales office in Paris (70 users). Each location has a local IT person. The CTO wants you to set up the admin portal so that each local IT person can manage their own site's users, while the telephony engineer at headquarters manages PBX configuration across all three sites.

**Task**: Based on what you have learned in this module, answer the following:

1. What administrator role would you assign to each of the three local IT people, and what scope would each assignment have?
2. What administrator role would you assign to the telephony engineer, and what will they be able to access?
3. After logging in for the first time, which three dashboard widgets would you check first, and what would you look for in each?
4. A new employee starts at the Nantes factory. The local IT person in Nantes creates the account but reports they cannot assign an Enterprise license. What are two possible explanations for this problem?
5. Where would you direct the local IT people to get help if they encounter an issue they cannot resolve?

Write your answers in complete sentences, as if you were documenting an administrative procedures guide for your IT team.

---

## Knowledge Check

**Question 1**: What is the URL for the Rainbow administration portal?

- A) portal.openrainbow.com
- B) admin.openrainbow.com
- C) manage.openrainbow.com
- D) console.openrainbow.com

**Answer**: B — The Rainbow admin portal is accessed at admin.openrainbow.com. This is separate from the end-user web client at web.openrainbow.com.

---

**Question 2**: Which administrator role has the ability to assign other users as administrators?

- A) Company Administrator only
- B) Both Company Administrator and Site Administrator
- C) All three administrator roles
- D) Technical Administrator only

**Answer**: A — Only the Company Administrator can assign and revoke administrator roles. Site Administrators and Technical Administrators cannot modify role assignments.

---

**Question 3**: A Site Administrator at the Paris office reports that they cannot see users at the Lyon headquarters. What is the explanation?

- A) The Paris site has been deactivated
- B) Site Administrators can only access users within their assigned site
- C) The Lyon users have not activated their accounts yet
- D) A system outage is preventing cross-site visibility

**Answer**: B — Site Administrators are scoped to their assigned site. They can only see and manage users, departments, and settings within that specific location. This is by design and follows the principle of least privilege.

---

**Question 4**: What does an amber indicator on the System Health dashboard widget mean?

- A) All services are operating normally
- B) One or more services are experiencing degraded performance
- C) A critical service outage is in progress
- D) A scheduled maintenance window is approaching

**Answer**: B — Amber indicates degraded performance for one or more Rainbow services. Green means all operational, and red means a service disruption is in progress. Administrators should click the indicator for details.

---

**Question 5**: Which navigation section would you use to configure LDAP directory synchronization?

- A) Users
- B) Settings
- C) Connectors
- D) Services

**Answer**: C — LDAP/Active Directory synchronization is managed under the Connectors section, which handles all third-party integrations including directory services, Microsoft 365, Google Workspace, and CRM systems.
