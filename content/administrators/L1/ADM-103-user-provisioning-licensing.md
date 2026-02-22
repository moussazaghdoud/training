# ADM-103: User Provisioning & License Assignment

| Field            | Value                                                      |
|------------------|------------------------------------------------------------|
| **Module ID**    | ADM-103                                                    |
| **Title**        | User Provisioning & License Assignment                     |
| **Track**        | Administrators (L1 Foundation)                             |
| **Duration**     | 45 minutes                                                 |
| **Content Types**| Reading, Video, Diagrams, Knowledge Check                  |
| **Prerequisites**| ADM-102: Company Setup & Organization Structure            |

## Learning Objectives

By the end of this module, you will be able to:

1. Create individual user accounts through the admin portal with all required fields correctly populated.
2. Perform bulk user provisioning using the CSV import template, including proper formatting and field mapping.
3. Explain the five Rainbow license types (Essential, Business, Enterprise, Connect, Hub) and their feature differences relevant to user assignment decisions.
4. Assign and change license tiers for individual users and groups, managing the organization's license pool effectively.
5. Manage the complete user lifecycle from account creation through activation, modification, deactivation, and deletion.

---

## 1. Individual User Creation

![video: Creating Your First User Account in Rainbow](adm-user-creation-walkthrough)

### 1.1 Navigating to User Creation

To create a new user account, navigate to **Users > Add User** in the admin portal. This opens the user creation form, which collects all the information needed to establish a new Rainbow account.

Before creating users, ensure that you have completed the following prerequisites:

- **Company profile** is configured (ADM-102) with the correct default language and timezone.
- **Sites** are created for all your locations.
- **Departments** are defined within each site (optional but recommended).
- **Licenses** are available — you need at least one unassigned license of the tier you plan to assign.

### 1.2 Required Fields

The user creation form requires the following information:

| Field                  | Description                                                              | Required | Example                      |
|------------------------|--------------------------------------------------------------------------|----------|------------------------------|
| **Email Address**      | The user's corporate email; becomes their Rainbow login ID               | Yes      | j.martin@dupont-mfg.fr      |
| **First Name**         | User's given name                                                        | Yes      | Jacques                      |
| **Last Name**          | User's family name                                                       | Yes      | Martin                       |
| **Site**               | The site to which this user belongs                                      | Yes      | Lyon - Headquarters          |
| **License Tier**       | The subscription tier to assign                                          | Yes      | Enterprise                   |
| **Department**         | Department within the assigned site                                      | No       | Engineering                  |
| **Job Title**          | User's position or role                                                  | No       | Senior Mechanical Engineer   |
| **Phone Number**       | User's business phone number (used for caller ID and directory)          | No       | +33 4 72 00 1234             |
| **Mobile Number**      | User's mobile phone number (used for SMS-based 2FA if enabled)           | No       | +33 6 12 34 56 78            |
| **Language**           | Preferred language for the Rainbow client (overrides company default)     | No       | French                       |
| **Timezone**           | Preferred timezone (overrides site default)                              | No       | Europe/Paris                 |

### 1.3 The Creation Process Step by Step

1. Navigate to **Users > Add User**.
2. Enter the user's email address. The system checks whether this email is already registered in Rainbow (across all companies). If it is, you will see a message indicating the email is already in use — you cannot create a duplicate account.
3. Fill in the first name, last name, and select the site.
4. Select the license tier from the dropdown. Only tiers with available licenses are shown. If all licenses of a particular tier are assigned, that tier appears grayed out with "0 available" beside it.
5. Optionally fill in department, job title, phone numbers, language, and timezone.
6. Review the information and click **Create User**.

Upon creation, the system performs the following actions automatically:

- A user account is created in the "Created" state (not yet activated).
- A **welcome email** is sent to the specified email address. This email contains an activation link that the user must click to set their password and activate their account.
- The license is deducted from the available pool for the assigned tier.
- The user appears in the company directory (with a "Pending" badge until they activate).

> **Key Concept:** The email address is the unique identifier for a Rainbow account across the entire platform. It cannot be changed after account creation. If a user's email address changes (for example, due to a name change), you must deactivate the old account and create a new one with the new email address, then migrate their Bubble memberships and settings manually.

### 1.4 Welcome Email and Activation

The welcome email contains:

- A greeting addressed to the user by first name
- A brief explanation of what Rainbow is
- An **activation link** that expires after 7 days
- Instructions for downloading the Rainbow client on their preferred platform
- Your company's custom welcome message (if configured in ADM-102)
- Your company's email footer (if configured)

When the user clicks the activation link, they are directed to a web page where they:

1. Set their password (must comply with your company's password policy).
2. Accept the Rainbow Terms of Service.
3. Optionally set up two-factor authentication (if your company policy requires it, this step is mandatory).

After completing these steps, the user's status changes from "Created" to "Active" and they can log in to the Rainbow client.

If the activation link expires before the user completes activation, a Company Administrator or Site Administrator can resend the welcome email from **Users > [Select User] > Resend Welcome Email**.

### 1.5 User Settings After Creation

Once a user is created, additional settings become available on their user profile page:

- **Caller ID**: The phone number displayed when the user makes outbound calls through Rainbow. This can be set to their direct line, the company's main number, or anonymous.
- **Voicemail PIN**: A numeric PIN used to access voicemail from a desk phone. Default is auto-generated; the user can change it in their client settings.
- **Device Associations**: Linking the user's account to specific devices — desk phone (via PBX extension), Rainbow desktop client, and Rainbow mobile client. A user can be associated with multiple devices simultaneously.
- **Call Forwarding**: Default call forwarding rules — forward to voicemail after X rings, forward to mobile when unavailable, simultaneous ring on desk phone and client.
- **Presence Settings**: Default presence behavior — automatic presence based on calendar integration, or manual presence only.

---

## 2. Bulk Provisioning via CSV Import

### 2.1 When to Use Bulk Import

Creating users one at a time is practical for small numbers (1-10 users). For larger deployments — onboarding a new office, migrating from another platform, or initial company rollout — the CSV import feature allows you to provision hundreds or thousands of users in a single operation.

The CSV import is accessible at **Users > Import Users**.

### 2.2 Downloading the CSV Template

Before preparing your import file, download the official CSV template:

1. Navigate to **Users > Import Users**.
2. Click **Download Template**.
3. The template downloads as a CSV file with the correct column headers and example data rows.

### 2.3 CSV Template Columns

The CSV template contains the following columns:

| Column Name      | Required | Description                                              | Valid Values / Format           |
|------------------|----------|----------------------------------------------------------|---------------------------------|
| **email**        | Yes      | User's email address (must be unique)                    | Valid email format              |
| **firstName**    | Yes      | User's first name                                        | Text, max 64 characters         |
| **lastName**     | Yes      | User's last name                                         | Text, max 64 characters         |
| **site**         | Yes      | Name of the site (must match an existing site exactly)   | Exact site name as configured   |
| **tier**         | Yes      | License tier to assign                                   | essential, business, enterprise, connect, hub |
| **department**   | No       | Department name within the site                          | Text, must match existing department or will be created |
| **jobTitle**     | No       | User's job title                                         | Text, max 128 characters        |
| **phoneNumber**  | No       | Business phone number                                    | E.164 format: +33472001234      |
| **mobileNumber** | No       | Mobile phone number                                      | E.164 format: +33612345678      |
| **language**     | No       | Preferred language                                       | ISO 639-1: en, fr, de, es, etc. |

### 2.4 Preparing the CSV File

When preparing your CSV file, follow these guidelines:

**File format requirements:**
- Encoding: UTF-8 (essential for names with accented characters like "Dupre", "Muller", "Gonzalez")
- Delimiter: Comma (,)
- Text qualifier: Double quotes (") for fields containing commas
- Line endings: Unix (LF) or Windows (CRLF) — both are accepted
- Maximum rows: 5,000 users per import batch

**Data quality checklist:**
- Verify all email addresses are valid and not already registered in Rainbow
- Ensure site names match exactly (case-sensitive) with sites configured in the admin portal
- Ensure sufficient licenses are available for each tier referenced in the file
- Remove any blank rows at the end of the file
- Check for duplicate email addresses within the file

> **Tip:** Before importing a large batch, do a test import with 5-10 users first. This validates your CSV formatting, site names, and license availability without risking a large-scale import failure. You can delete the test users afterward.

### 2.5 The Import Process

1. Navigate to **Users > Import Users**.
2. Click **Upload CSV** and select your prepared file.
3. The system validates the file and displays a **preview report**:
   - Total rows found
   - Valid rows (will be imported)
   - Invalid rows (will be skipped) with error descriptions
   - License impact (how many licenses of each tier will be consumed)
4. Review the preview report carefully. Common validation errors include:
   - "Email already exists" — the email is registered in Rainbow (in your company or another)
   - "Site not found" — the site name in the CSV does not match any configured site
   - "Insufficient licenses" — not enough licenses available for the specified tier
   - "Invalid email format" — the email address is malformed
   - "Missing required field" — a required column is empty for this row
5. If you are satisfied with the preview, click **Import**.
6. The import runs asynchronously. You can monitor progress on the **Import History** page.
7. When the import completes, a summary email is sent to you with the results: successful accounts, failed rows, and error details.

### 2.6 Post-Import Actions

After a successful bulk import:

- **Welcome emails** are sent to all newly created users automatically.
- All users are in "Created" status until they activate their accounts.
- Review the import results to identify any failed rows and address them manually.
- Monitor the "Never Activated" metric on the dashboard over the following days to track onboarding progress.
- Consider sending a separate internal communication (company email, intranet post) to inform users about Rainbow and encourage them to activate their accounts.

![diagram: CSV Import Workflow — From Template to Activated Users](adm-csv-import-flow)

---

## 3. License Types and Assignment

### 3.1 Understanding the Five License Tiers

Rainbow uses a named-user licensing model. Each user account is assigned exactly one license tier. The tier determines which features the user can access.

**Essential (Free)**

The Essential tier provides basic communications capabilities at no cost. It is suitable for:
- External guests who need to participate in Bubbles
- Users who only need basic messaging and peer-to-peer calls
- Trial users evaluating the platform

Key features: One-to-one messaging, basic presence, peer-to-peer audio/video calls, limited file sharing (1 GB storage), participation in Bubbles created by others.

Key limitations: No conference scheduling, no PBX integration, no admin console access, no screen sharing, limited Bubble creation.

**Business**

The Business tier is the standard collaboration license for organizations that do not need PBX integration. It is suitable for:
- Small and medium businesses using Rainbow as their primary collaboration tool
- Departments that need conferencing and screen sharing but not telephony features

Key additions over Essential: Bubble creation and management (up to 300 members), audio/video conferencing (up to 120 participants), screen sharing, conference scheduling with calendar integration, expanded file storage, admin console access, calendar-synced presence, message qualification tags.

**Enterprise**

The Enterprise tier is the full-featured license for organizations with complex requirements. It is suitable for:
- Large enterprises with existing PBX infrastructure
- Organizations requiring advanced security, compliance, and data sovereignty
- Companies that need AI-powered meeting features

Key additions over Business: Full PBX overlay (OmniPCX Enterprise, OmniPCX Office, third-party SIP), hybrid cloud deployment support, LDAP/Active Directory synchronization, advanced telephony (call transfer, call pickup, hunt groups), enhanced security controls, dedicated data residency, priority support SLA, AI features (transcription, smart summaries, translation).

**Connect**

The Connect tier is focused specifically on telephony integration. It is suitable for:
- Users who primarily need softphone capabilities alongside their desk phone
- Organizations that want to cloud-enable their PBX without full collaboration features

Key features: PBX integration with softphone capability, single number reach (desk phone and client ring simultaneously), call log synchronization, visual voicemail, basic messaging and presence.

**Hub**

The Hub tier is the developer and integration tier. It is suitable for:
- Bot accounts and service accounts used for automated workflows
- API-driven integrations that need programmatic access to Rainbow services
- Accounts used by system integrators for custom development

Key features: Full REST API access, SDK support, webhook configurations, usage-based billing for API calls and media minutes, sandbox environment access.

### 3.2 License Assignment Strategy: Mix-and-Match

Rainbow allows you to assign different license tiers to different users within the same company. This is called "mix-and-match" licensing and is one of Rainbow's cost-optimization advantages.

**Example scenario for a 500-user company:**

| User Group                  | Count | Tier        | Rationale                                           |
|-----------------------------|-------|-------------|-----------------------------------------------------|
| Executive team              | 20    | Enterprise  | Need AI meeting features and full telephony         |
| Office-based staff          | 150   | Enterprise  | Use desk phones with PBX integration daily          |
| Remote/mobile workers       | 100   | Business    | Collaboration-focused, no desk phone needed         |
| Warehouse floor workers     | 80    | Essential   | Basic messaging for shift coordination              |
| External contractors        | 30    | Essential   | Guest-level access for project collaboration        |
| Reception/front desk        | 15    | Connect     | Heavy phone use, softphone integration critical     |
| IT integration team         | 5     | Hub         | Building custom dashboards and workflow automations  |
| Remaining office staff      | 100   | Business    | Standard collaboration needs                        |

This mix-and-match approach means the company only pays for Enterprise licenses where the advanced features are needed, rather than licensing all 500 users at the Enterprise tier.

> **Key Concept:** License assignment should be driven by job function and feature requirements, not by organizational hierarchy. A warehouse worker who only needs messaging does not need the same license as a receptionist who manages phone calls all day. Map features to roles before assigning tiers.

### 3.3 Assigning and Changing Licenses

**Assigning a license during user creation:**
The license tier is selected during the user creation process (Section 1.2). The selected tier is applied immediately.

**Changing a license for an existing user:**
1. Navigate to **Users > User List**.
2. Select the user and click **Edit**.
3. Change the **License Tier** dropdown to the new tier.
4. Click **Save**.

**Important considerations when changing licenses:**

- **Upgrading** (e.g., Essential to Business): The user gains access to additional features immediately. No data is lost.
- **Downgrading** (e.g., Enterprise to Business): Features not available in the new tier become inaccessible. Data is preserved but some functionality is restricted:
  - PBX integration features are disabled (the user can no longer make calls through the PBX)
  - Conference recordings created under the higher tier remain accessible but no new recordings can be made
  - AI meeting features become unavailable
- **Bulk license changes**: Select multiple users in the user list (checkboxes), click **Bulk Actions > Change License**, and select the new tier. This is applied to all selected users simultaneously.

### 3.4 License Pool Management

The license pool is the total number of licenses your company has purchased, broken down by tier. You can view the current pool status in several places:

- **Dashboard > License Utilization** widget
- **Settings > Subscriptions > License Summary**

The license summary shows:

| Tier        | Purchased | Assigned | Available | Utilization |
|-------------|-----------|----------|-----------|-------------|
| Essential   | Unlimited | 110      | Unlimited | N/A         |
| Business    | 250       | 238      | 12        | 95%         |
| Enterprise  | 170       | 165      | 5         | 97%         |
| Connect     | 15        | 15       | 0         | 100%        |
| Hub         | 5         | 3        | 2         | 60%         |

> **Warning:** When the Connect tier shows 0 available licenses, you cannot assign any more users to that tier until you either purchase additional licenses or downgrade existing Connect users to free up licenses. Attempting to create or import users with a tier that has no available licenses will fail. Monitor your license utilization weekly and initiate procurement at 85% utilization to avoid provisioning delays.

Essential licenses are typically unlimited (or have a very high cap) because the Essential tier is free. However, other tiers are strictly limited by your subscription agreement.

---

## 4. User Settings and Configuration

### 4.1 Caller ID Configuration

Caller ID determines the phone number displayed to the recipient when a user makes an outbound call through Rainbow (via PBX integration or SIP). This setting is available for users on Enterprise and Connect tiers.

Options:

- **Direct Line**: The user's assigned DID (Direct Inward Dialing) number. This is the default and most common setting.
- **Main Company Number**: The organization's main reception number. Useful for call centers or support teams where individual numbers should not be exposed.
- **Anonymous**: No caller ID is presented. Used in specific business scenarios (collections, security investigations) but may cause calls to be rejected by recipients with call screening enabled.
- **Custom Number**: A specific number configured by the administrator. Useful for teams with shared numbers.

### 4.2 Voicemail Configuration

Voicemail settings are managed per user and are available for Enterprise and Connect tiers:

| Setting                    | Description                                              | Default          |
|----------------------------|----------------------------------------------------------|------------------|
| **Voicemail Enabled**      | Whether the user has voicemail                           | Enabled          |
| **Voicemail PIN**          | Numeric PIN for phone-based voicemail access             | Auto-generated   |
| **Greeting Type**          | System default, name recording, or custom audio file     | System default   |
| **Ring Before Voicemail**  | Number of rings before call diverts to voicemail         | 4 rings (~20s)   |
| **Voicemail to Email**     | Send voicemail messages as email attachments              | Disabled         |
| **Max Message Length**     | Maximum duration of a voicemail message                   | 120 seconds      |
| **Mailbox Quota**          | Maximum number of stored messages                        | 50 messages      |

### 4.3 Device Associations

Rainbow supports multiple simultaneous device associations per user. A single user can be associated with:

- **Desk phone**: Connected via the PBX. Identified by the user's PBX extension number.
- **Desktop client**: The Rainbow application installed on their Windows or macOS computer.
- **Mobile client**: The Rainbow application installed on their iOS or Android device.
- **Web client**: The browser-based Rainbow client at web.openrainbow.com.

When an incoming call arrives, all associated devices ring simultaneously (unless call forwarding rules direct the call elsewhere). The user can answer on any device. If they answer on one device, the others stop ringing.

Device associations are configured automatically when a user logs in to a new device for the first time. Administrators can view and manage device associations from the user's profile page under **Users > [Select User] > Devices**.

### 4.4 Call Forwarding Rules

Call forwarding rules determine what happens when a call is not answered or when the user is in a specific presence state. Rules are evaluated in order:

| Rule                        | Condition                              | Action                                    |
|-----------------------------|----------------------------------------|-------------------------------------------|
| **Forward on No Answer**    | Call not answered within X rings       | Forward to voicemail or another number    |
| **Forward on Busy**         | User is on another call                | Forward to voicemail or another number    |
| **Forward on Unavailable**  | User is offline or DND                 | Forward to voicemail or another number    |
| **Unconditional Forward**   | Always                                 | Forward all calls to a specified number   |
| **Simultaneous Ring**       | Always                                 | Ring desk phone and mobile simultaneously |

Administrators can configure default forwarding rules at the site level, which apply to all users at that site unless overridden at the user level. Users on Enterprise and Connect tiers can also modify their own forwarding rules through the Rainbow client settings.

---

## 5. User Lifecycle Management

### 5.1 Lifecycle States

Every Rainbow user account progresses through a defined lifecycle. Understanding these states is essential for managing your user base effectively.

| State            | Description                                                                     | Can Log In? |
|------------------|---------------------------------------------------------------------------------|-------------|
| **Created**      | Account has been provisioned but user has not yet activated (clicked welcome link) | No         |
| **Active**       | Account is fully operational; user has set their password and can use Rainbow    | Yes         |
| **Locked**       | Account is temporarily locked due to failed login attempts                       | No         |
| **Deactivated**  | Account has been disabled by an administrator; user cannot log in               | No         |
| **Deleted**      | Account has been permanently removed from the system                            | No          |

### 5.2 Activation

As described in Section 1.4, activation occurs when the user clicks the welcome email link and sets their password. Key points about activation:

- The activation link expires after 7 days. If it expires, an administrator can resend the welcome email.
- A user who has never activated does not consume API resources or generate activity data, but they **do** consume a license.
- The "Never Activated" metric on the dashboard helps you track users who may need follow-up.

### 5.3 Modification

Active user accounts can be modified at any time by a Company Administrator or the appropriate Site Administrator. Modifiable fields include:

- First name, last name (but **not** email address)
- Site and department assignment
- License tier
- Phone numbers (business and mobile)
- Job title
- Language and timezone preferences
- Caller ID, voicemail, and call forwarding settings
- Device associations
- Administrator role assignments

Changes take effect immediately. Some changes (such as license tier changes) may require the user to restart their Rainbow client to see the updated feature set.

### 5.4 Deactivation

Deactivation disables a user account without deleting it. This is appropriate when:

- An employee leaves the company
- An employee is on extended leave and should not have access
- A security incident requires immediate account suspension
- A contractor's engagement ends

**To deactivate a user:**
1. Navigate to **Users > User List**.
2. Select the user and click **Deactivate**.
3. Confirm the action.

**Effects of deactivation:**
- The user is immediately logged out of all Rainbow clients.
- The user cannot log in again until reactivated.
- The user's data (messages, files, Bubble memberships) is preserved.
- The user's license is **not** automatically released. To free the license, you must explicitly change the license tier to Essential or delete the account.
- The user remains in the company directory but is shown with an "Inactive" status.
- Any active phone forwarding rules continue to apply (calls to the user's number are still forwarded according to the configured rules).

> **Info:** Deactivation preserves the user's data and makes reactivation simple. If an employee returns from leave or a contractor's engagement is renewed, you can reactivate the account and the user retains all their previous messages, Bubble memberships, and settings. This is why deactivation is preferred over deletion for temporary separations.

### 5.5 Reactivation

To reactivate a deactivated user:
1. Navigate to **Users > User List**.
2. Filter for "Deactivated" status.
3. Select the user and click **Reactivate**.
4. The user's status changes back to "Active" and they can log in with their existing password.

If the user's password has expired during the deactivation period (based on the password maximum age policy), they will be prompted to set a new password on their first login after reactivation.

### 5.6 Deletion

Deletion permanently removes a user account from Rainbow. This action is irreversible.

**To delete a user:**
1. Navigate to **Users > User List**.
2. Select the user (the user must be in "Deactivated" status — you cannot delete an active user directly).
3. Click **Delete**.
4. Confirm the action by typing the user's email address.
5. Click **Confirm Delete**.

**Effects of deletion:**
- The user account is permanently removed.
- The user's license is released back to the available pool.
- The user's messages in one-to-one conversations are preserved for the other participant but attributed to "Deleted User."
- The user's messages in Bubbles are preserved but attributed to "Deleted User."
- The user's shared files are retained in Bubbles for the configured retention period but cannot be re-shared by the deleted user.
- The user's email address becomes available for registration again (either in your company or another).

**Deletion is appropriate when:**
- The user has permanently left the organization with no chance of return
- The account was created in error
- Regulatory requirements mandate data deletion (in which case, additional data purge steps may be required)

### 5.7 LDAP/Active Directory Sync Preview

For organizations using Microsoft Active Directory or another LDAP directory, Rainbow can synchronize user accounts automatically. When LDAP sync is enabled:

- New users created in AD are automatically provisioned in Rainbow
- User attributes (name, department, phone number) are kept in sync
- Disabled AD accounts are automatically deactivated in Rainbow
- Deleted AD accounts can be automatically deactivated or deleted in Rainbow (configurable)

LDAP/AD sync is covered in depth in the L2 (Intermediate) module ADM-201. At the Foundation level, it is important to know that:

- LDAP sync is available on the Enterprise tier only
- It requires a connector configuration in the Connectors section of the admin portal
- The sync runs on a configurable schedule (default: every 60 minutes)
- It can be run manually at any time by clicking "Sync Now" in the Connectors section
- The first sync should always be tested with a small organizational unit before syncing the entire directory

---

## Key Concepts Summary

| Concept                        | Definition                                                                                          |
|--------------------------------|-----------------------------------------------------------------------------------------------------|
| **Named-User Licensing**       | Each user is assigned exactly one license tier that determines their feature access                  |
| **CSV Import**                 | Bulk provisioning method using a comma-separated values file with defined column format              |
| **Activation**                 | The process by which a newly created user sets their password and begins using Rainbow               |
| **Essential Tier**             | Free tier with basic messaging and peer-to-peer calling; no admin console or PBX features           |
| **Enterprise Tier**            | Full-featured tier with PBX integration, AI features, LDAP sync, and data sovereignty               |
| **Mix-and-Match**              | Strategy of assigning different license tiers to different user groups based on feature needs        |
| **License Pool**               | The total count of purchased licenses by tier, shared across all sites                              |
| **User Lifecycle**             | The progression of a user account: Created > Active > (Locked) > Deactivated > Deleted             |
| **Deactivation vs. Deletion**  | Deactivation disables access but preserves data; deletion permanently removes the account           |
| **LDAP Sync**                  | Automated user provisioning and updates from Active Directory (Enterprise tier, covered in L2)      |

---

## Practice Exercise

**Scenario**: You are the Company Administrator for a regional bank with 800 employees. The bank is onboarding Rainbow across three branches: Main Branch (400 users), North Branch (250 users), and South Branch (150 users). Your license pool includes 200 Enterprise licenses, 500 Business licenses, and 100 Essential licenses. The IT director has provided a CSV export from the HR system containing all 800 employees.

**Task**: Based on what you have learned in this module, answer the following:

1. The HR export contains columns: employee_id, full_name, email, office, department, role. The Rainbow CSV template expects: email, firstName, lastName, site, tier, department. Describe how you would transform the HR data into the Rainbow import format. What challenges might you encounter?
2. Propose a license assignment strategy. Which roles would receive Enterprise licenses, which would receive Business, and which would receive Essential? Justify your choices based on the features each group needs.
3. After importing the 800 users, you notice that 150 users have not activated after one week. What steps would you take to improve the activation rate?
4. A teller at the Main Branch is transferring to the North Branch. Describe the steps you would take in the admin portal and what changes the user will experience.
5. A contractor who had an Essential license completed their engagement three months ago. The IT director asks you to permanently remove their account. Walk through the complete process from current state to deletion.

Write your answers as step-by-step procedures that could be followed by a junior administrator.

---

## Knowledge Check

**Question 1**: What is the maximum number of users that can be imported in a single CSV batch?

- A) 1,000
- B) 2,500
- C) 5,000
- D) 10,000

**Answer**: C — The CSV import supports a maximum of 5,000 users per import batch. For larger deployments, you would need to split the import into multiple batches of 5,000 or fewer.

---

**Question 2**: A user on the Enterprise tier is downgraded to the Business tier. What happens to their PBX integration?

- A) PBX features continue to work for 30 days as a grace period
- B) PBX integration features are disabled immediately
- C) The user must manually disconnect from the PBX
- D) Nothing changes — PBX features are available on all tiers

**Answer**: B — When a user is downgraded from Enterprise to Business, PBX integration features become immediately unavailable because the Business tier does not include PBX overlay capability. The user can still use all Business-tier features (messaging, conferencing, screen sharing).

---

**Question 3**: An administrator deactivates a user who has an Enterprise license. What happens to the license?

- A) The license is automatically released to the available pool
- B) The license remains assigned to the deactivated account
- C) The license is converted to an Essential license
- D) The license is permanently consumed and cannot be recovered

**Answer**: B — Deactivation does not automatically release the license. The license remains assigned to the deactivated account. To free the license, the administrator must either change the user's tier to Essential or delete the account entirely.

---

**Question 4**: Which field in a Rainbow user account cannot be changed after creation?

- A) First name
- B) Email address
- C) Site assignment
- D) License tier

**Answer**: B — The email address serves as the unique identifier for a Rainbow account across the entire platform and cannot be changed after creation. All other fields (name, site, department, license tier) can be modified.

---

**Question 5**: A CSV import preview shows 450 valid rows and 50 rows with the error "Site not found." What is the most likely cause?

- A) The sites have not been created in the admin portal yet
- B) The CSV file is corrupted
- C) The site names in the CSV do not exactly match the site names configured in Rainbow
- D) The import has exceeded the maximum batch size

**Answer**: C — The "Site not found" error occurs when the site name in the CSV file does not exactly match (case-sensitive) the site names configured in the admin portal. This could be due to spelling differences, extra spaces, or case mismatches. The administrator should compare the CSV values against the configured site names and correct any discrepancies.
