# Admin Portal Navigation Map — Quick Reference Card

> **Version:** 2.0 | **Last Updated:** February 2026 | **Classification:** Partner & Admin Use
> **Portal URL:** admin.openrainbow.com

---

## Portal Access

### Login
1. Navigate to **admin.openrainbow.com**
2. Enter administrator email and password
3. Complete MFA challenge (if enabled)
4. Select the company to manage (if multi-company admin)

### Admin Roles

| Role | Scope | Typical User |
|---|---|---|
| **Company Admin** | Full control over one company | IT Manager |
| **Organization Admin** | Control over multiple companies | Channel Partner |
| **Support Admin** | Read-only + user assistance | Helpdesk Staff |
| **Site Admin** | Control over one physical site | Branch Office IT |
| **Analytics Admin** | Read-only access to analytics | Operations Manager |

---

## Main Navigation Sections

### 1. Dashboard (Home)

**What it shows:** High-level overview of the company's Rainbow deployment.

| Widget | Information |
|---|---|
| Active Users | Count of users who logged in within 30 days |
| Subscription Summary | Licenses assigned vs. available |
| System Health | Platform status and any active incidents |
| Recent Activity | Last 10 admin actions (audit trail preview) |
| Quick Actions | Shortcuts to common tasks |

**Key Actions:**
- View at-a-glance adoption metrics
- Click any widget to drill into the full section
- Access the notification center for alerts and updates

---

### 2. Users

**Path:** Sidebar > Users

| Sub-Section | Purpose |
|---|---|
| **User List** | View, search, filter, and manage all users |
| **Add User** | Create new user accounts (single or bulk) |
| **Import Users** | CSV bulk import or LDAP/AD sync |
| **User Profile** | Edit individual user details, assign licenses |
| **User Groups** | Organize users into functional groups |

**Key Actions:**

#### Add a Single User
1. Go to **Users > Add User**
2. Enter first name, last name, email address
3. Select subscription tier (Essential / Business / Enterprise)
4. Assign to a site (if multi-site)
5. Enable telephony (if applicable) — select PBX and assign extension
6. Click **Create**
7. User receives a welcome email with activation link

#### Bulk Import Users
1. Go to **Users > Import Users**
2. Download the CSV template
3. Fill in user data (name, email, tier, site, phone extension)
4. Upload the completed CSV
5. Review the import preview — check for errors
6. Click **Import**
7. Monitor the import progress bar

#### Assign or Change a License
1. Go to **Users > User List**
2. Search for the user by name or email
3. Click the user's name to open their profile
4. Under **Subscription**, select the new tier
5. Click **Save**
6. The change takes effect immediately

#### Reset a User's Password
1. Go to **Users > User List** > select user
2. Click **Actions > Reset Password**
3. User receives a password reset email
4. Alternatively, generate a temporary password to share directly

#### Enable Telephony for a User
1. Open the user's profile
2. Under **Telephony**, toggle **Enable PBX Integration**
3. Select the PBX system from the dropdown
4. Enter the user's phone number and extension
5. Click **Save**
6. The user's Rainbow client will show the telephony controls within 60 seconds

---

### 3. Subscriptions

**Path:** Sidebar > Subscriptions

| Sub-Section | Purpose |
|---|---|
| **License Overview** | Total, assigned, and available licenses per tier |
| **License Assignment** | View which users have which tier |
| **Add-Ons** | Manage optional features (recording, AI, Teams) |
| **Billing History** | View invoices and payment history |

**Key Actions:**
- Monitor license utilization to avoid over-provisioning
- Identify users on Essential who may benefit from an upgrade
- Review add-on usage and costs
- Export license report for finance teams

---

### 4. Company Settings

**Path:** Sidebar > Company Settings

| Sub-Section | Purpose |
|---|---|
| **General** | Company name, logo, address, industry |
| **Security** | Password policy, MFA, session timeout, IP allowlist |
| **Authentication** | SSO configuration (SAML 2.0 / OIDC) |
| **Customization** | Branding (logo, colors for web client) |
| **Notifications** | Admin alert preferences |
| **Data Management** | Retention policies, data export, account deletion |

**Key Actions:**

#### Configure Single Sign-On (SAML 2.0)
1. Go to **Company Settings > Authentication**
2. Click **Configure SSO**
3. Select **SAML 2.0**
4. Enter the Identity Provider metadata URL (or upload XML)
5. Map attributes: email, first name, last name
6. Test the SSO connection with a test user
7. Enable SSO for all users (or specific groups)
8. Optionally enforce SSO-only login (disable password login)

#### Set Password Policy
1. Go to **Company Settings > Security**
2. Set minimum password length (recommended: 12+)
3. Require complexity (upper, lower, number, symbol)
4. Set password expiration period (or disable for SSO users)
5. Set maximum failed login attempts before lockout
6. Click **Save**

#### Enable MFA
1. Go to **Company Settings > Security > Multi-Factor Authentication**
2. Select MFA method (authenticator app recommended)
3. Choose enforcement: all users, admin-only, or optional
4. Click **Enable**
5. Users will be prompted on their next login

---

### 5. Sites and PBX

**Path:** Sidebar > Sites & PBX

| Sub-Section | Purpose |
|---|---|
| **Sites** | Physical locations — address, timezone, users |
| **PBX Connections** | Registered PBX systems and their status |
| **PBX Agent** | Agent software status, version, logs |
| **Dial Plans** | Number formatting and routing rules |
| **Phone Numbers** | DID and extension inventory |

**Key Actions:**

#### Add a New Site
1. Go to **Sites & PBX > Sites > Add Site**
2. Enter site name, address, country, timezone
3. Assign a site admin (optional)
4. Click **Create**
5. Assign users to the new site

#### Connect a PBX
1. Go to **Sites & PBX > PBX Connections > Add PBX**
2. Select PBX type (OXE, OXO Connect, third-party SIP)
3. Download and install the Rainbow PBX agent on a server at the site
4. Enter the agent activation code shown in the portal
5. Wait for the agent to report "Connected"
6. Configure the SIP trunk or CSTA link between the agent and PBX
7. Test with a sample call

---

### 6. Business Directory

**Path:** Sidebar > Directory

| Sub-Section | Purpose |
|---|---|
| **Company Directory** | All users and their contact details |
| **External Contacts** | Manually added external contacts |
| **Directory Sync** | LDAP / Active Directory sync settings |
| **Federation** | Cross-company directory sharing (Hub) |

**Key Actions:**

#### Configure LDAP Sync
1. Go to **Directory > Directory Sync > Add LDAP Source**
2. Enter LDAP server address, port, and bind credentials
3. Define the search base DN and user filter
4. Map LDAP attributes to Rainbow fields (email, name, phone, department)
5. Set sync frequency (recommended: every 4 hours)
6. Run a manual sync to validate
7. Review the sync log for errors

---

### 7. Analytics

**Path:** Sidebar > Analytics

| Sub-Section | Purpose |
|---|---|
| **Overview** | Summary dashboard with key metrics |
| **Adoption** | Login frequency, active users, feature usage |
| **Communication** | Message volume, call volume, conference usage |
| **Call Quality** | MOS scores, jitter, packet loss by site/user |
| **Telephony** | CDRs, call durations, busiest hours |
| **Reports** | Scheduled and on-demand report generation |

**Key Actions:**

#### Generate a Monthly Usage Report
1. Go to **Analytics > Reports > Create Report**
2. Select report type: **Monthly Usage Summary**
3. Choose date range
4. Select scope (all users, specific site, specific department)
5. Choose format (PDF or CSV)
6. Click **Generate**
7. Download or schedule for automatic email delivery

#### Investigate Call Quality Issues
1. Go to **Analytics > Call Quality**
2. Filter by date range and affected user or site
3. Review MOS score trends — look for scores below 3.5
4. Click on a specific call to view detailed metrics (jitter, latency, packet loss)
5. Identify if the issue is network-wide or user-specific
6. Cross-reference with **Sites & PBX** for PBX health

---

### 8. Integrations

**Path:** Sidebar > Integrations

| Sub-Section | Purpose |
|---|---|
| **Marketplace** | Browse and enable available connectors |
| **Active Integrations** | Manage currently enabled integrations |
| **API Keys** | Manage application credentials for API access |
| **Bots** | Create and manage chatbot instances |
| **Webhooks** | Configure server-to-server event notifications |

**Key Actions:**
- Enable the Salesforce connector and configure CRM field mapping
- Create API keys for custom integrations
- Deploy a welcome bot for new employee onboarding
- Set up webhooks for ticket creation on missed calls

---

## Quick-Access Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl + K` / `Cmd + K` | Global search (users, settings, sections) |
| `Ctrl + N` / `Cmd + N` | Add new user |
| `Ctrl + Shift + A` | Jump to Analytics |
| `Ctrl + Shift + U` | Jump to Users |
| `Ctrl + Shift + S` | Jump to Settings |

---

## Common Admin Tasks — Quick Steps

| Task | Path | Steps |
|---|---|---|
| Unlock a locked-out user | Users > Search > Profile > Actions > Unlock | 3 clicks |
| Check platform status | Dashboard > System Health widget | 1 click |
| View a user's call history | Users > Search > Profile > Telephony > Call Log | 4 clicks |
| Export all users to CSV | Users > User List > Export | 2 clicks |
| Check PBX agent health | Sites & PBX > PBX Connections > Status column | 2 clicks |
| View current license usage | Subscriptions > License Overview | 1 click |
| Audit admin actions | Company Settings > Audit Log | 2 clicks |
| Change company logo | Company Settings > Customization > Logo | 3 clicks |

---

## Troubleshooting Admin Portal Access

| Issue | Resolution |
|---|---|
| Cannot log in | Verify admin credentials; check if SSO is enforced; clear browser cache |
| MFA token rejected | Sync device time (NTP); use backup codes if available |
| Portal loads slowly | Check browser (Chrome recommended); disable extensions; try incognito |
| Missing menu sections | Verify admin role has correct permissions |
| Changes not saving | Check for required fields; ensure browser allows cookies |
| User import fails | Validate CSV format against template; check for duplicate emails |

---

*This navigation map is designed for Rainbow company administrators. For developer and API administration, refer to the API Quick Start reference card.*
