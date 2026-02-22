# Demo Script: Salesforce Connector

> **Duration:** 15-20 minutes
> **Audience:** Sales managers, CRM administrators, IT decision-makers
> **Prerequisites for Demo Environment:** Rainbow Enterprise account with Salesforce connector enabled, Salesforce org with sample data (accounts, contacts, opportunities), Rainbow desktop client installed, test phone line configured
> **Last Updated:** February 2026

---

## Pre-Demo Setup Checklist

Before the demo, verify:

- [ ] Rainbow desktop client is logged in and showing green presence
- [ ] Salesforce is open in Chrome with the Rainbow CTI panel visible in the sidebar
- [ ] Test contact "Marie Dupont" exists in Salesforce with a valid phone number
- [ ] Test opportunity "Enterprise UCaaS Migration" is associated with Marie's account
- [ ] Call history for the test contact is cleared (for a clean demo)
- [ ] Rainbow telephony is active (softphone registered with the PBX)
- [ ] Screen sharing is set up and tested
- [ ] A colleague is standing by as the "inbound caller" for the screen pop demo

---

## Demo Flow

### Opening (2 minutes)

**[Show: Salesforce home page with Rainbow CTI panel visible in sidebar]**

**Talking Point:**
"What I'm about to show you is how Rainbow transforms Salesforce from a passive record-keeping system into an active communication hub. Your sales team will never leave Salesforce to make a call, and they will never have to manually log a customer interaction again. Let me walk you through what this looks like in practice."

**Talking Point:**
"The Rainbow connector for Salesforce is a native integration — it installs directly into your Salesforce org and appears as a CTI panel right here in the sidebar. No browser extension, no separate window. It is part of the Salesforce experience."

---

### Segment 1: Click-to-Call (3 minutes)

**[Action: Navigate to Contact record for "Marie Dupont"]**

**Talking Point:**
"Let's say one of your reps needs to follow up with Marie Dupont about the enterprise migration project. In a traditional setup, they would look up her number, switch to a phone application, dial, and then come back to Salesforce to log the call. With Rainbow, watch what happens."

**[Action: Click the phone number on Marie's contact record]**

**Talking Point:**
"One click. The call is now initiating through Rainbow. You can see the dialing status right here in the CTI panel. The call goes through your existing PBX — so it uses your business phone numbers, your existing trunk, your existing call routing. To Marie, it looks like a normal business call from your company."

**[Action: Let the call connect (colleague answers)]**

**Talking Point:**
"The call is connected. Notice the CTI panel is showing the call timer, the contact name, and the associated account — all pulled from Salesforce automatically. Your rep has full context without looking anything up."

**[Action: Hold a brief conversation, then hang up]**

**Key Moment to Emphasize:**
"That call was placed through your corporate PBX via Rainbow, logged automatically in Salesforce with the exact duration and timestamp, and associated with the correct contact and account. Zero manual data entry."

**[Action: Show the new Activity record in Salesforce with call details]**

---

### Segment 2: Automatic Call Logging (3 minutes)

**[Action: Open the Activity History on Marie's contact record]**

**Talking Point:**
"Here is what just happened behind the scenes. Rainbow automatically created this activity record. It captured the date, time, duration, direction — outbound in this case — and linked it to Marie's contact record and the associated account. But it goes further."

**[Action: Open the activity detail to show logged fields]**

**Talking Point:**
"The call subject is auto-populated. The call type is set. And there is a notes field where the rep can add a quick summary — which they can do right from the CTI panel without navigating away. Let me show you."

**[Action: Click the call log entry in the CTI panel and add a note: "Discussed Q3 timeline for migration. Marie confirmed budget approval. Follow-up meeting next week."]**

**Talking Point:**
"This is where the time savings become real. Research shows that sales reps spend 17% of their time on CRM data entry. With automatic call logging, that drops to near zero. For a team of 20 reps, that is the equivalent of getting 3.4 extra reps — without hiring anyone."

**ROI Data Point:**
"Customers using the Rainbow-Salesforce connector report a 70% reduction in CRM data entry time and a 23% increase in calls per rep per day, simply because the friction of logging is removed."

---

### Segment 3: Screen Pop — Inbound Call (4 minutes)

**[Action: Prepare the audience]**

**Talking Point:**
"Now let me show you what happens when a customer calls in. This is where the value really shines for customer-facing teams."

**[Action: Have the colleague call the demo line. The inbound call arrives.]**

**[Action: Show the screen pop — Salesforce automatically navigates to Marie's contact record as the call rings]**

**Talking Point:**
"The phone is ringing, and Salesforce has already identified the caller by matching the inbound number against your contacts. It has navigated directly to Marie's record. Before your rep even picks up the phone, they can see Marie's name, her company, her open opportunities, her last interaction — everything they need to personalize the conversation."

**[Action: Answer the call from the CTI panel]**

**Talking Point:**
"Your rep answers and can immediately say 'Hi Marie, good to hear from you. I see we spoke last Tuesday about the Q3 migration timeline — how can I help today?' That level of context changes the entire customer experience."

**[Action: End the call after a brief exchange]**

**Key Moment to Emphasize:**
"Screen pop is not just a convenience feature. It reduces average handle time by 15 to 20 seconds per call. For a contact center handling 500 calls a day, that saves over two hours of agent time daily. And the customer perception improvement is immeasurable."

---

### Segment 4: Presence Sync (3 minutes)

**[Action: Show the Rainbow CTI panel with current presence status (green/available)]**

**Talking Point:**
"One more thing your team will appreciate — presence synchronization. Right now, my status in Rainbow is Available, and Salesforce reflects that. Watch what happens when I go into a meeting."

**[Action: Change Rainbow presence to "In a meeting" (DND)]**

**[Action: Show that the Salesforce CTI panel updates to reflect DND status]**

**Talking Point:**
"Salesforce now shows that I am in a meeting. If a colleague looks at my availability in Salesforce to decide whether to transfer a call to me, they can see I am busy — without switching to another application. This works both ways: if I update my status in Salesforce, Rainbow reflects it."

**[Action: Change presence back to Available]**

**Talking Point:**
"Presence sync eliminates the 'let me check if they are available' problem. Your team can make transfer decisions and collaboration decisions instantly, which means faster resolution for your customers."

---

### Segment 5: Advanced Features Overview (3 minutes)

**[Action: Show the connector settings page briefly]**

**Talking Point:**
"Beyond what I have shown you, the connector also supports several advanced features that I want to mention."

**Feature Walkthrough:**

1. **Call Transfer from Salesforce:** "Your reps can do attended or blind transfers right from the CTI panel — no need to touch a physical phone."

2. **Conference Calling:** "Add a third party to any call directly from Salesforce. Great for bringing in a technical specialist during a sales call."

3. **Click-to-Chat:** "In addition to calls, your reps can initiate a Rainbow chat conversation from any Salesforce contact — perfect for quick questions that do not need a phone call."

4. **Opportunity Association:** "The connector can automatically link call activities to open opportunities, giving your sales managers visibility into which deals are getting attention."

5. **Custom Object Support:** "If you have custom Salesforce objects, the connector's screen pop can be configured to search those objects as well — useful for case numbers, order IDs, or membership numbers."

---

### Closing Value Summary (2 minutes)

**[Action: Return to Salesforce home page]**

**Talking Point:**
"Let me summarize what we have seen in the last 15 minutes."

**Value Summary:**

| Capability | Business Impact |
|---|---|
| Click-to-Call | Eliminates context switching; more calls per day |
| Automatic Call Logging | 70% reduction in CRM data entry time |
| Screen Pop | 15-20 second reduction in average handle time |
| Presence Sync | Faster internal collaboration and call routing |
| Zero Manual Logging | 100% of calls captured — no gaps in CRM data |

**Talking Point:**
"The underlying principle is simple: every customer interaction should be captured automatically, and every rep should have full context before they say hello. Rainbow does that natively inside Salesforce, using your existing phone infrastructure. There is no rip-and-replace — this works with your current PBX."

---

## Objection Handling

### "We already have Salesforce's built-in dialer."

**Response:** "Salesforce's native dialer is a good option for pure cloud telephony. But most organizations we work with have an existing PBX investment — OXE, OXO, or third-party SIP — that they want to preserve. Rainbow connects Salesforce to that existing infrastructure. You keep your phone numbers, your call routing, your IVR, and your trunk lines — and layer CRM integration on top. It is additive, not a replacement."

### "Can't we just use a CTI adapter from another vendor?"

**Response:** "You can, and many do. The advantage of Rainbow is that it is not just a CTI adapter — it is a full UCaaS platform. So in addition to the Salesforce integration, your team gets Rainbow's conferencing, messaging, file sharing, and AI features. And because Rainbow is the telephony layer and the CRM integration layer, there is one vendor, one support channel, and one licensing model instead of three."

### "Our Salesforce admin says integrations like this are hard to maintain."

**Response:** "The Rainbow connector is a managed package in Salesforce — it installs from AppExchange and updates automatically. The admin effort is minimal: configure field mappings once, set screen pop rules, and it runs. We have customers who completed the setup in under two hours with no Salesforce development required."

### "What about data security — does Rainbow store our Salesforce data?"

**Response:** "Rainbow does not store your Salesforce data. The connector operates in real time — it queries Salesforce when a call comes in, and it writes activity records back. Rainbow processes the call; Salesforce holds the data. And Rainbow itself is ISO 27001 certified and GDPR compliant, so both sides of the integration are enterprise-grade."

### "We are considering moving to Microsoft Teams for telephony."

**Response:** "That is a conversation we have often. Many of our customers use Rainbow and Teams together. Rainbow handles the telephony — PBX integration, IVR, call center features, CRM connectors — and Teams handles collaboration and chat. In fact, Rainbow integrates with Teams via Direct Routing, so your users can receive calls in Teams that go through Rainbow's telephony layer. The Salesforce connector then logs those calls regardless of which client answered them."

---

## Post-Demo Follow-Up

After the demo, provide the prospect with:

1. **Salesforce Connector datasheet** (PDF)
2. **AppExchange listing link** for self-guided exploration
3. **ROI calculator spreadsheet** customized with their team size and call volume
4. **Reference customer contact** (with permission) in a similar industry
5. **Proposed pilot plan** — 10 users, 30 days, full connector capabilities

---

*This demo script is designed for live or virtual demonstrations. Adapt the talking points to the audience's industry and specific pain points. Always confirm the demo environment is working 30 minutes before the session.*
