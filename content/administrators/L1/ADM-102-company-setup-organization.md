# ADM-102: Company Setup & Organization Structure

| Field            | Value                                                      |
|------------------|------------------------------------------------------------|
| **Module ID**    | ADM-102                                                    |
| **Title**        | Company Setup & Organization Structure                     |
| **Track**        | Administrators (L1 Foundation)                             |
| **Duration**     | 30 minutes                                                 |
| **Content Types**| Reading, Video, Diagrams, Knowledge Check                  |
| **Prerequisites**| ADM-101: Rainbow Admin Portal Overview                     |

## Learning Objectives

By the end of this module, you will be able to:

1. Configure the company profile with accurate organizational details including name, logo, default language, and timezone.
2. Design and implement a multi-site structure that reflects your organization's physical and logical locations.
3. Explain the site hierarchy (company > sites > departments > users) and how it affects administration and reporting.
4. Configure company-wide default policies for password complexity, session timeout, file sharing, and guest access.
5. Apply custom branding to your Rainbow deployment including logo, welcome messages, and email templates.

---

## 1. Company Profile Configuration

![video: Setting Up Your Company Profile in Rainbow](adm-company-profile-setup)

### 1.1 Accessing the Company Profile

The company profile is the foundational configuration for your Rainbow deployment. It establishes the organizational identity that all users, sites, and settings inherit from. To access it, navigate to **Company > Company Profile** in the admin portal.

The company profile was initially created when your organization first subscribed to Rainbow. However, many of the fields may contain default or placeholder values that need to be updated to reflect your organization accurately.

### 1.2 Basic Company Information

The company profile includes the following fields:

| Field                  | Description                                                                                  | Example                        |
|------------------------|----------------------------------------------------------------------------------------------|--------------------------------|
| **Company Name**       | The legal or trading name of your organization                                               | Dupont Manufacturing SAS       |
| **Industry Sector**    | Primary business sector (drop-down selection)                                                | Manufacturing                  |
| **Company Size**       | Number of employees (range selection)                                                        | 501-1000                       |
| **Street Address**     | Physical address of the company headquarters                                                 | 42 Rue de l'Innovation         |
| **City**               | City of the headquarters                                                                     | Lyon                           |
| **Country**            | Country of registration                                                                      | France                         |
| **Primary Contact**    | Name and email of the main administrative contact                                            | Marie Laurent, m.laurent@...   |
| **Support Contact**    | Email address where ALE support communications are sent                                      | it-support@dupont-mfg.fr       |
| **Default Language**   | The default language for the admin portal and system-generated communications                 | French                         |
| **Timezone**           | The default timezone used for timestamps, reports, and scheduled operations                   | Europe/Paris (UTC+1)           |

### 1.3 Company Logo

The company logo appears in several places throughout the Rainbow experience:

- The admin portal header (visible to administrators)
- The Rainbow client login screen (visible to all users in your company)
- Email notifications sent by the system (welcome emails, password reset emails)
- Conference meeting invitations

To upload a company logo:

1. Navigate to **Company > Company Profile > Branding**.
2. Click **Upload Logo**.
3. Select an image file meeting these requirements:
   - Format: PNG or SVG (recommended for crispness at all sizes)
   - Dimensions: Minimum 200x200 pixels, maximum 1024x1024 pixels
   - File size: Maximum 2 MB
   - Background: Transparent background recommended for best appearance across light and dark themes
4. Preview the logo in both light and dark modes.
5. Click **Save**.

> **Tip:** Use an SVG file for your company logo whenever possible. SVG images scale perfectly to any size without pixelation, ensuring your logo looks sharp on high-DPI displays, mobile devices, and printed meeting invitations alike.

### 1.4 Default Language and Timezone

The default language setting affects:

- The language of the admin portal interface for administrators who have not set a personal language preference
- System-generated emails (welcome emails, password reset emails, notification emails)
- Default language for new user accounts (users can override this in their personal settings)

Rainbow supports over 20 languages including English, French, German, Spanish, Italian, Portuguese, Dutch, Chinese (Simplified and Traditional), Japanese, Korean, Arabic, and Russian.

The timezone setting affects:

- Timestamps displayed in analytics and audit logs
- Scheduled operations such as automated reports and maintenance windows
- Default timezone for new user accounts
- Conference scheduling defaults

> **Warning:** Changing the default timezone after your deployment is operational can cause confusion in audit logs and reports. Historical entries retain their original timestamps, but the display timezone changes, which may make it appear as though events occurred at different times. Plan your timezone setting carefully before going live.

### 1.5 Data Center Assignment

Each Rainbow company is assigned to a specific data center region at the time of subscription creation. This assignment determines where your organization's data — messages, files, call records, user profiles — is stored and processed.

The data center assignment is displayed on the company profile page but **cannot be changed** by administrators. It is set by ALE during provisioning based on your organization's geographic location and contractual requirements.

Common data center regions include:

- **Europe (France)**: Primary region for EU customers, GDPR-compliant
- **Europe (Germany)**: For customers requiring German data residency
- **North America (Canada)**: For North American customers
- **Asia-Pacific (Singapore)**: For APAC customers
- **Middle East (UAE)**: For Middle Eastern customers

If your organization requires a change in data center assignment (for example, due to a regulatory change or corporate relocation), you must contact ALE support to initiate a migration process.

---

## 2. Multi-Site Structure

### 2.1 Why Sites Matter

In Rainbow, a **site** represents a physical or logical location within your organization. Sites are the primary organizational unit below the company level and serve several important purposes:

- **Telephony scoping**: Each site can have its own PBX configuration, numbering plan, and call routing rules. This is essential for organizations with PBX systems at multiple locations.
- **Administrative delegation**: Site Administrators can be assigned to manage specific sites, enabling distributed administration without granting company-wide access.
- **Analytics and reporting**: Usage reports can be filtered by site, allowing you to compare adoption and activity across locations.
- **User organization**: Users are assigned to a site, which determines their default phone configuration, local directory, and administrative scope.

### 2.2 Default Site

When your Rainbow company is first provisioned, a single default site is created automatically. This site typically carries the company name and headquarters address. All users created before additional sites are configured are assigned to this default site.

The default site cannot be deleted, but it can be renamed and reconfigured. In a single-site organization, this default site is sufficient. In a multi-site organization, you should rename it to represent your headquarters and then create additional sites for each location.

### 2.3 Creating a New Site

To create a new site:

1. Navigate to **Company > Sites**.
2. Click **Add Site**.
3. Fill in the site details:

| Field                  | Description                                                              | Required |
|------------------------|--------------------------------------------------------------------------|----------|
| **Site Name**          | A descriptive name for the location                                      | Yes      |
| **Street Address**     | Physical address of the site                                             | Yes      |
| **City**               | City where the site is located                                           | Yes      |
| **Country**            | Country where the site is located                                        | Yes      |
| **Timezone**           | Local timezone for the site (overrides company default for users at this site) | No |
| **Site Code**          | An optional short code for internal reference (e.g., "LYN-HQ", "NTS-FAC") | No     |
| **PBX Association**    | If this site has a connected PBX, select it here                         | No       |
| **Site Administrator** | Assign a user as the Site Administrator for this location                | No       |

4. Click **Save**.

After creation, the site appears in the site list and becomes available as a destination when creating or moving users.

### 2.4 Site Hierarchy and Inheritance

![diagram: Rainbow Organization Hierarchy — Company, Sites, Departments, Users](adm-org-hierarchy)

The Rainbow organizational hierarchy follows a strict parent-child model:

```
Company
├── Site A (Headquarters)
│   ├── Department: Engineering
│   │   ├── User: alice@company.com
│   │   └── User: bob@company.com
│   ├── Department: Marketing
│   │   └── User: carol@company.com
│   └── User: dave@company.com (no department)
├── Site B (Branch Office)
│   ├── Department: Sales
│   │   └── User: eve@company.com
│   └── Department: Support
│       └── User: frank@company.com
└── Site C (Factory)
    └── User: grace@company.com (no department)
```

Key rules of this hierarchy:

- Every user belongs to exactly one site.
- A user may optionally belong to one department within their site.
- Departments belong to exactly one site and cannot span multiple sites.
- Company-wide policies apply to all sites unless overridden at the site level.
- Site-level settings (such as timezone and PBX configuration) apply to all users at that site.

### 2.5 Moving Users Between Sites

Users can be moved from one site to another by a Company Administrator or by the Site Administrator of the source site (with Company Administrator approval). Moving a user changes:

- Their site assignment and associated analytics grouping
- Their PBX configuration (if the new site has a different PBX)
- Their Site Administrator oversight (they fall under the new site's administrator)
- Their department assignment (they are removed from their current department and must be reassigned at the new site)

To move a user:

1. Navigate to **Users > User List**.
2. Select the user and click **Edit**.
3. Change the **Site** field to the new site.
4. Optionally assign a new department within the new site.
5. Click **Save**.

The user receives a notification about their site change. If the new site has a different PBX configuration, their telephony settings are updated automatically.

> **Key Concept:** In multi-site deployments, the site assignment is more than just an address label. It determines which PBX handles the user's calls, which Site Administrator manages their account, and how their activity is grouped in analytics. Always verify the correct site before provisioning a new user.

---

## 3. Departments and Organizational Units

### 3.1 Departments

Departments are subdivisions within a site that represent functional groups or teams. They are the lowest level of the organizational hierarchy.

**Creating a department:**

1. Navigate to **Company > Sites**.
2. Select the site where you want to add a department.
3. Click the **Departments** tab.
4. Click **Add Department**.
5. Enter the department name (e.g., "Engineering", "Human Resources", "Sales - East Region").
6. Click **Save**.

**Department uses:**

- **User organization**: Departments appear in the company directory, making it easier for users to find colleagues by team.
- **Reporting**: Analytics can be filtered by department to understand feature adoption within specific teams.
- **Bulk operations**: You can select all users in a department for bulk license changes, policy updates, or communications.

Departments do not have their own configuration settings or administrators. They are purely organizational labels. All policy and telephony configuration is handled at the site or company level.

### 3.2 Organizational Units

Organizational Units (OUs) are a more advanced grouping mechanism that can span multiple sites. While departments are contained within a single site, OUs can include users from any site in the company.

**Use cases for OUs:**

- A "Sales" OU that includes sales staff from all sites
- A "Management" OU that includes executives and directors across the organization
- A "Project Alpha" OU that includes cross-functional team members from multiple locations
- A "Restricted Access" OU for users who need special policy configurations

**Creating an OU:**

1. Navigate to **Company > Organizational Units**.
2. Click **Add Organizational Unit**.
3. Enter a name and description for the OU.
4. Add users by searching for them individually or by selecting entire departments.
5. Click **Save**.

**Policy application via OUs:**

OUs can be used to apply specific policy overrides. For example, you could create an OU for "External Contractors" and apply a policy that disables file sharing and limits conference participation to audio only. This policy would override the company-wide default for users in that OU.

Policy precedence follows this order (most specific wins):

1. User-level override (highest priority)
2. Organizational Unit policy
3. Site-level policy
4. Company-wide default (lowest priority)

### 3.3 Best Practices for Organizational Structure

When designing your Rainbow organizational structure, consider these guidelines:

- **Mirror your real organization**: Sites should correspond to physical locations. Departments should match your HR organization chart. This makes it intuitive for administrators and users alike.
- **Start simple**: Begin with sites and departments only. Add OUs later if you need cross-site groupings or policy overrides.
- **Use consistent naming**: Establish a naming convention for sites (e.g., "City - Building" or "Country Code - Office Name") and departments (e.g., matching your HR system's department names).
- **Plan for growth**: Consider how your structure will accommodate new offices, mergers, or reorganizations. OUs provide flexibility for temporary or cross-cutting groupings without restructuring sites and departments.
- **Document your structure**: Maintain a simple diagram or spreadsheet that maps your Rainbow organizational structure. This becomes invaluable when onboarding new administrators or troubleshooting user assignment issues.

---

## 4. Company-Wide Default Policies

### 4.1 Password Policy

The password policy controls the complexity requirements and lifecycle rules for user passwords. It is configured under **Settings > Security > Password Policy**.

Available settings:

| Setting                    | Description                                              | Default          |
|----------------------------|----------------------------------------------------------|------------------|
| **Minimum Length**         | Minimum number of characters required                    | 8 characters     |
| **Require Uppercase**      | At least one uppercase letter (A-Z)                      | Yes              |
| **Require Lowercase**      | At least one lowercase letter (a-z)                      | Yes              |
| **Require Digit**          | At least one numeric digit (0-9)                         | Yes              |
| **Require Special Char**   | At least one special character (!@#$%^&*)                | No               |
| **Password History**       | Number of previous passwords that cannot be reused       | 5                |
| **Maximum Age**            | Days before a password must be changed (0 = never)       | 90 days          |
| **Lockout Threshold**      | Failed login attempts before account lockout             | 5 attempts       |
| **Lockout Duration**       | Minutes the account remains locked after exceeding threshold | 30 minutes    |

> **Warning:** If you enforce a strict password policy (e.g., 12+ characters, special characters required, 30-day expiration), be prepared for an increase in password reset requests from users. Balance security with usability, and consider enabling SSO or 2FA as alternatives to overly complex password rules.

### 4.2 Session Timeout

The session timeout policy controls how long an inactive session remains valid before requiring re-authentication. It applies to both the admin portal and the web client.

- **Admin portal timeout**: Default is 60 minutes. Configurable from 15 minutes to 480 minutes (8 hours).
- **Web client timeout**: Default is 480 minutes. Configurable from 60 minutes to 1440 minutes (24 hours).
- **Mobile client**: Mobile clients use token-based authentication with a configurable refresh token lifetime (default 30 days). The mobile client does not require re-authentication on each use unless the refresh token expires.

### 4.3 File Sharing Policy

The file sharing policy controls how users can share files through Rainbow messaging and Bubbles. It is configured under **Settings > Services > File Sharing**.

| Setting                    | Description                                              | Default          |
|----------------------------|----------------------------------------------------------|------------------|
| **Enable File Sharing**    | Master toggle for file sharing functionality             | Enabled          |
| **Maximum File Size**      | Maximum size per individual file upload                   | 100 MB           |
| **Allowed File Types**     | Whitelist or blacklist of file extensions                 | All allowed      |
| **External Sharing**       | Allow files to be shared with external (guest) users     | Enabled          |
| **Virus Scanning**         | Automatically scan uploaded files for malware            | Enabled          |
| **Retention Period**       | Days before shared files are automatically deleted        | 365 days         |

For organizations in regulated industries, you may want to:

- Disable external file sharing to prevent data leakage
- Block executable file types (.exe, .bat, .cmd, .ps1) to reduce malware risk
- Set a shorter retention period to comply with data minimization requirements

### 4.4 Guest Access Rules

Guest access controls how external users can interact with your Rainbow environment. Guests are users from outside your company who are invited into Bubbles or meetings.

| Setting                        | Description                                              | Default          |
|--------------------------------|----------------------------------------------------------|------------------|
| **Allow Guest Invitations**    | Users can invite external people into Bubbles            | Enabled          |
| **Guest Invitation Approval**  | Require administrator approval for guest invitations     | Disabled         |
| **Guest Feature Restrictions** | Limit what guests can do (messaging only, no files, etc.)| No restrictions  |
| **Guest Account Expiration**   | Auto-deactivate guest accounts after a period of inactivity | 90 days       |
| **Guest Visibility**           | Whether guests appear in the company directory           | Hidden           |

> **Info:** Guest access is one of the most frequently audited settings in regulated industries. Healthcare organizations often disable guest invitations entirely or require administrator approval. Financial institutions may allow guest access but disable file sharing for guests. Review your organization's security policy before configuring these settings.

### 4.5 Two-Factor Authentication (2FA)

Two-factor authentication adds an additional security layer beyond password authentication. It is configured under **Settings > Security > Two-Factor Authentication**.

Options include:

- **Disabled**: 2FA is not required (users can optionally enable it for their own accounts).
- **Optional**: Users are prompted to set up 2FA but can skip it.
- **Required for Administrators**: All users with administrator roles must use 2FA. Standard users can optionally use it.
- **Required for All Users**: Every user must set up 2FA before they can access Rainbow.

Supported 2FA methods:

- **Authenticator App** (TOTP): Google Authenticator, Microsoft Authenticator, Authy, or any TOTP-compatible app. This is the recommended method.
- **SMS**: A one-time code sent via text message to the user's registered phone number. Less secure than authenticator apps due to SIM-swapping risks.
- **Email**: A one-time code sent to the user's registered email address. Least secure option, recommended only as a backup method.

---

## 5. Branding and Customization

### 5.1 Custom Logo

As described in Section 1.3, the company logo can be uploaded under **Company > Company Profile > Branding**. The logo appears in:

- Admin portal header
- Rainbow client login screen
- System-generated emails
- Conference meeting invitations
- The company directory card

### 5.2 Welcome Message

The welcome message is displayed to users when they first log in to the Rainbow client after account activation. It is an opportunity to communicate organizational expectations, provide quick-start instructions, or share contact information for internal IT support.

To configure the welcome message:

1. Navigate to **Company > Company Profile > Branding**.
2. Click **Welcome Message**.
3. Enter your message using the rich text editor (supports bold, italic, links, and bullet lists).
4. Preview the message as it will appear in the client.
5. Click **Save**.

Example welcome message:

> Welcome to Rainbow at Dupont Manufacturing! Rainbow is our company-wide collaboration platform for messaging, calls, and video meetings. If you need help getting started, contact the IT Help Desk at extension 4500 or email helpdesk@dupont-mfg.fr. Please review our Acceptable Use Policy before sending your first message.

The welcome message can be updated at any time. Users who have already seen the previous message will not see the updated version unless they clear their client cache or log in on a new device.

### 5.3 Email Templates

Rainbow sends several types of system-generated emails to users:

- **Welcome email**: Sent when a new user account is created, containing the activation link
- **Password reset email**: Sent when a user requests a password reset
- **Invitation email**: Sent when a user is invited to join a Bubble or meeting
- **Admin notification email**: Sent when a user is granted an administrator role

While the core content and formatting of these emails is controlled by the Rainbow platform, you can customize:

- **From name**: The sender name that appears in the email (default: "Rainbow by ALE")
- **Reply-to address**: The email address that receives replies (default: noreply@openrainbow.com — you may want to set this to your IT help desk address)
- **Email footer**: A custom text block added to the bottom of all system-generated emails (useful for adding your company name, privacy policy link, or support contact information)

These settings are configured under **Company > Company Profile > Branding > Email Customization**.

### 5.4 Company Directory Settings

The company directory is the contact list that all users in your Rainbow deployment can see in their client application. You can control:

- **Directory visibility**: Whether users can see all users across all sites, or only users within their own site.
- **Contact information display**: Which fields are visible in the directory (email, phone number, department, site, title).
- **Photo policy**: Whether user profile photos are required, optional, or disabled.
- **External directory**: Whether your company directory is visible to federated partner companies (if you have federation agreements).

For organizations with privacy requirements, restricting directory visibility to same-site users and hiding phone numbers may be necessary. This is particularly relevant in healthcare (patient-facing staff privacy) and government (security clearance considerations).

---

## Key Concepts Summary

| Concept                        | Definition                                                                                          |
|--------------------------------|-----------------------------------------------------------------------------------------------------|
| **Company Profile**            | Top-level configuration defining organizational identity, logo, language, and timezone               |
| **Site**                       | A physical or logical location within the company, scoping PBX config and admin delegation           |
| **Department**                 | A subdivision within a site for user organization and reporting                                      |
| **Organizational Unit (OU)**   | A cross-site grouping mechanism for applying policies to users across multiple locations             |
| **Default Site**               | The automatically created first site, typically representing the headquarters                        |
| **Password Policy**            | Company-wide rules governing password complexity, history, age, and lockout behavior                |
| **Session Timeout**            | Duration of inactivity before a user must re-authenticate                                           |
| **Guest Access**               | Policies controlling how external users can participate in your Rainbow environment                  |
| **Branding**                   | Custom logo, welcome message, and email template settings that reflect your organizational identity  |
| **Policy Precedence**          | Order of policy application: user override > OU > site > company default                            |

---

## Practice Exercise

**Scenario**: You are the Company Administrator for a logistics company with four locations: Paris (headquarters, 200 users), Marseille (warehouse, 80 users), Brussels (EU office, 50 users), and Montreal (Canada office, 40 users). The company needs to comply with GDPR for its European locations. The Brussels office has strict requirements about file sharing with external parties. The Montreal office operates in a different timezone and uses English rather than French.

**Task**: Based on what you have learned in this module, answer the following:

1. How would you structure the sites in the Rainbow admin portal? List each site with its key configuration settings (name, timezone, language).
2. The Brussels office requires that no files be shared with external guests. How would you implement this without affecting the other three sites?
3. The CEO wants a "Global Management" group that includes the director from each location for company-wide announcements. Would you use a department or an organizational unit for this? Explain why.
4. What branding elements would you configure, and how would you handle the fact that two offices use English and two use French?
5. The company currently has no password policy. Draft a password policy configuration that balances security with usability for warehouse workers who share workstations.

Write your answers as a configuration plan that you could present to the CTO for approval.

---

## Knowledge Check

**Question 1**: What is the correct organizational hierarchy in Rainbow, from highest to lowest level?

- A) Company > Departments > Sites > Users
- B) Company > Sites > Departments > Users
- C) Company > Organizational Units > Sites > Users
- D) Company > Sites > Users > Departments

**Answer**: B — The hierarchy is Company > Sites > Departments > Users. Sites represent physical or logical locations, and departments are subdivisions within a site. Organizational Units exist as a parallel cross-site grouping mechanism but are not part of the core hierarchy.

---

**Question 2**: What happens to a user's department assignment when they are moved to a different site?

- A) The department assignment is preserved
- B) The user is automatically assigned to a department with the same name at the new site
- C) The department assignment is removed and must be manually reassigned at the new site
- D) The move is blocked until a department is selected at the new site

**Answer**: C — When a user is moved between sites, their department assignment is removed because departments are site-specific. The administrator must manually assign the user to a department at the new site after the move.

---

**Question 3**: In what order does Rainbow apply policies when there are overlapping configurations at multiple levels?

- A) Company > Site > OU > User
- B) User > OU > Site > Company (most specific wins)
- C) Site > Company > OU > User
- D) OU > User > Company > Site

**Answer**: B — Policy precedence follows the principle of most specific wins: user-level overrides take highest priority, followed by Organizational Unit policies, then site-level policies, and finally company-wide defaults at the lowest priority.

---

**Question 4**: Which of the following can a Company Administrator customize in system-generated emails?

- A) The entire email body and subject line
- B) The from name, reply-to address, and email footer
- C) Only the company logo
- D) Email templates cannot be customized

**Answer**: B — Administrators can customize the from name (sender display name), reply-to address, and email footer text. The core email content and formatting is controlled by the Rainbow platform.

---

**Question 5**: An organization wants to apply a policy that disables file sharing only for external contractor accounts across all sites. What is the best approach?

- A) Disable file sharing in the company-wide default policy
- B) Create a department called "Contractors" at each site and configure it
- C) Create an Organizational Unit for contractors and apply a file sharing restriction policy to that OU
- D) Manually disable file sharing on each contractor's individual user account

**Answer**: C — Creating an Organizational Unit for contractors is the best approach because OUs can span multiple sites and have policies applied at the OU level. This is more maintainable than manual per-user overrides and more targeted than a company-wide restriction. Departments cannot have policies applied to them directly.
