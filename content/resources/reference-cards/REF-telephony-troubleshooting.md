# Telephony Troubleshooting Checklist — Quick Reference Card

> **Version:** 2.0 | **Last Updated:** February 2026 | **Classification:** Partner & Support Use

---

## How to Use This Card

Follow the diagnostic flow for each symptom category. Start at Step 1 and proceed sequentially. Each step includes a check, expected result, and remediation if the check fails.

---

## Issue 1: No Audio (One-Way or Both Ways)

### Diagnostic Flow

| Step | Action | Expected Result | If Failed |
|---|---|---|---|
| 1 | Verify microphone/speaker permissions in OS | Rainbow has mic and speaker access | Grant permissions, restart client |
| 2 | Check audio device selection in Rainbow Settings > Audio | Correct device selected | Select correct device, test with built-in speakers |
| 3 | Run Rainbow built-in audio test (Settings > Audio > Test) | Test tone audible, mic level responds | Reinstall audio drivers |
| 4 | Check if issue is one-way or two-way | Identify direction | One-way suggests NAT/firewall; two-way suggests client or network |
| 5 | Verify UDP ports 10000-20000 are open outbound | Ports reachable | Open ports on firewall, or enable TURN relay |
| 6 | Check if TURN/STUN server is reachable (UDP 3478) | Connection established | Whitelist openrainbow.com TURN servers |
| 7 | Test on a different network (mobile hotspot) | Audio works | Network/firewall is blocking media; escalate to IT |
| 8 | Check PBX overlay configuration (if applicable) | SIP trunk registered, audio codec negotiated | Verify SIP trunk settings, check codec mismatch |

### Common Root Causes
- Corporate firewall blocking UDP media ports
- Symmetric NAT without TURN relay configured
- VPN tunnel not routing media correctly
- Bluetooth headset defaulting to HFP profile (low quality) instead of A2DP

---

## Issue 2: Poor Call Quality (Choppy, Robotic, Delayed)

### Diagnostic Flow

| Step | Action | Expected Result | If Failed |
|---|---|---|---|
| 1 | Run a speed test from the user's machine | > 5 Mbps up/down, < 150 ms latency, < 30 ms jitter | Bandwidth insufficient; check for competing traffic |
| 2 | Check Rainbow call quality indicator (in-call icon) | Green indicator | Yellow/red indicates network degradation |
| 3 | Verify QoS/DSCP tagging is enabled on the network | Voice traffic tagged EF (DSCP 46) | Configure QoS on switches and routers |
| 4 | Check for Wi-Fi interference | Stable Wi-Fi signal > -65 dBm | Switch to wired connection or 5 GHz band |
| 5 | Verify no bandwidth-heavy applications running | Low background network usage | Close streaming, large downloads |
| 6 | Check VPN split tunneling configuration | Rainbow media traffic bypasses VPN | Configure split tunnel for Rainbow IP ranges |
| 7 | Review Rainbow Admin Portal > Analytics > Call Quality | MOS scores > 3.5 | Identify pattern (time of day, specific users, sites) |
| 8 | Test with a different codec (if PBX overlay) | Improved audio | Switch from G.711 to Opus, or vice versa |

### Quality Benchmarks

| Metric | Good | Acceptable | Poor |
|---|---|---|---|
| MOS Score | > 4.0 | 3.5 - 4.0 | < 3.5 |
| Latency (one-way) | < 100 ms | 100 - 150 ms | > 150 ms |
| Jitter | < 15 ms | 15 - 30 ms | > 30 ms |
| Packet Loss | < 0.5% | 0.5 - 1% | > 1% |

---

## Issue 3: Call Drops (Unexpected Disconnection)

### Diagnostic Flow

| Step | Action | Expected Result | If Failed |
|---|---|---|---|
| 1 | Check if drops are consistent or intermittent | Identify pattern | Consistent = config; intermittent = network |
| 2 | Review call duration at drop | Note time | Drops at exactly 30 min or 60 min suggest session timer |
| 3 | Check SIP session timer settings on PBX | Timer disabled or > 3600s | Extend or disable SIP session timer |
| 4 | Verify network stability during calls | No disconnections | Check for Wi-Fi roaming, DHCP lease renewal |
| 5 | Check Rainbow client logs for disconnect reason | Normal hangup vs. error | See Error Codes table below |
| 6 | Review PBX overlay keepalive settings | Keepalive interval < session timeout | Adjust keepalive interval |
| 7 | Check if call recording or compliance features interfere | Calls without recording do not drop | Disable recording temporarily to isolate |

### Common Root Causes
- SIP session timer expiring (especially on OXE)
- Wi-Fi roaming between access points dropping the media stream
- Network address translation (NAT) binding timeout (< 30 seconds)
- VPN reconnection cycle dropping established sessions

---

## Issue 4: Softphone Not Registering

### Diagnostic Flow

| Step | Action | Expected Result | If Failed |
|---|---|---|---|
| 1 | Verify user has a telephony license assigned | License visible in Admin Portal | Assign PBX telephony license |
| 2 | Check PBX connection status in Admin Portal > PBX | PBX shows "Connected" | Verify PBX agent connectivity |
| 3 | Verify the user's phone device is configured in the PBX | Device profile exists | Create device profile on PBX |
| 4 | Check Rainbow client status bar | Shows phone icon with green indicator | Red/grey = registration failed |
| 5 | Verify SIP credentials (if manual config) | Username and password correct | Reset credentials on PBX |
| 6 | Check TCP 5060/5061 or TLS connectivity to PBX | Port reachable | Open SIP signaling port |
| 7 | Restart the Rainbow PBX agent service | Agent reconnects | Check agent logs for errors |
| 8 | Re-provision the user (remove and re-add telephony) | Fresh registration | Contact support if persists |

---

## Issue 5: PBX Overlay Issues

### Diagnostic Flow

| Step | Action | Expected Result | If Failed |
|---|---|---|---|
| 1 | Verify PBX agent is installed and running | Agent process active, connected to cloud | Reinstall agent, check network |
| 2 | Check PBX agent version | Latest version installed | Update agent from Admin Portal |
| 3 | Verify PBX agent can reach Rainbow cloud | Outbound HTTPS to openrainbow.com | Open TCP 443 outbound |
| 4 | Check PBX model compatibility | OXO Connect / OXE / supported third-party SIP | Verify compatibility matrix |
| 5 | Review PBX agent logs for errors | No recurring errors | Address specific error (see codes below) |
| 6 | Verify CSTA/SIP trunk between agent and PBX | Trunk active | Reconfigure trunk on PBX |
| 7 | Test basic call via desk phone (bypassing Rainbow) | Call succeeds | PBX issue, not Rainbow issue |
| 8 | Check number format and dial plan | E.164 format, correct country code | Adjust dial plan in PBX agent config |

---

## Network Requirements Checklist

### Mandatory Ports

| Port | Protocol | Direction | Purpose |
|---|---|---|---|
| 443 | TCP (TLS) | Outbound | Signaling, REST API, WebSocket |
| 3478 | UDP | Outbound | STUN/TURN discovery |
| 3478 | TCP | Outbound | TURN relay fallback |
| 10000-20000 | UDP | Outbound | Media (RTP/SRTP) |
| 5location | TCP/TLS | Internal | SIP signaling (PBX agent to PBX) |

### Mandatory Domains to Whitelist

| Domain | Purpose |
|---|---|
| *.openrainbow.com | All Rainbow cloud services |
| *.openrainbow.net | Media relay servers |
| *.al-enterprise.com | Updates and licensing |

### Bandwidth Requirements

| Use Case | Bandwidth Per User |
|---|---|
| Audio call (Opus) | 50-100 kbps |
| Audio call (G.711) | 100 kbps |
| Video call (720p) | 1.5 Mbps |
| Video call (1080p) | 3.0 Mbps |
| Screen sharing | 1.0 - 2.5 Mbps |
| Conference (audio, 10 participants) | 100 kbps (mixed server-side) |

---

## Common Error Codes and Meanings

| Error Code | Description | Resolution |
|---|---|---|
| **401** | Unauthorized — invalid credentials | Reset user credentials; verify license |
| **403** | Forbidden — insufficient permissions | Check user role and feature entitlements |
| **404** | Not Found — resource does not exist | Verify phone number, bubble ID, or endpoint |
| **408** | Request Timeout — server did not respond in time | Check network connectivity; retry |
| **location3** | Registration Failed — SIP registration rejected | Verify SIP credentials and PBX config |
| **location6** | Call Failed — no route to destination | Check dial plan and trunk configuration |
| **location8** | Media Negotiation Failed — codec mismatch | Align codecs between Rainbow and PBX |
| **480** | Temporarily Unavailable — callee not reachable | Check callee's device status; try alternate contact |
| **location03** | Service Unavailable — server overloaded | Wait and retry; check status.openrainbow.com |
| **location08** | Call Barred — outbound calling restricted | Check calling restrictions in user profile |
| **487** | Request Terminated — call cancelled by caller | Normal behavior when caller hangs up before answer |
| **488** | Not Acceptable — media incompatibility | Review SDP offer/answer for codec support |
| **location00** | Internal Server Error — unexpected failure | Collect logs, contact Rainbow support |

---

## Log Collection Guide

### Client Logs
1. Open Rainbow client
2. Go to **Settings > About > Troubleshooting**
3. Click **Export Logs**
4. Attach the ZIP file to the support ticket

### PBX Agent Logs
1. Navigate to the PBX agent installation directory
2. Locate `/logs/` folder
3. Collect all logs from the timeframe of the issue
4. Include `agent.log`, `sip.log`, and `media.log`

### Admin Portal Diagnostics
1. Go to **Admin Portal > Analytics > Call History**
2. Filter by user and time range
3. Export the call detail records (CDR)
4. Include in the support ticket

---

## Escalation Path

| Level | Contact | Response Time |
|---|---|---|
| **L1 — Partner Support** | Partner helpdesk | Immediate |
| **L2 — ALE Technical Support** | support.openrainbow.com | 4 hours (Business), 1 hour (Enterprise) |
| **L3 — Engineering Escalation** | Via L2 ticket escalation | 8 hours |
| **P1 — Service Down** | Emergency hotline (in support contract) | 30 minutes |

---

*This troubleshooting card is intended for trained support engineers and partners. Always collect diagnostic data before escalating to ALE support.*
