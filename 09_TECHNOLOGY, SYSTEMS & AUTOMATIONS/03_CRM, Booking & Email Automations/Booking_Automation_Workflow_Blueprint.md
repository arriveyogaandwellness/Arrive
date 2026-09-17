# Master Booking & Guest Onboarding Automation Blueprint
**System:** Stripe -> Typeform -> Airtable CRM -> Mailchimp / Klaviyo -> Google Drive  
**Architecture Lead:** Carly Anne Kasinpila & Arrive Yoga Tech

```
+-----------------------------------------------------------------------------------------+
|                                AUTOMATION FLOW MAP                                      |
+-----------------------------------------------------------------------------------------+

 [STEP 1: Guest Application]
       │
       ▼
   Typeform / Website Application Form
       │
       ├──> Creates new record in Airtable CRM (`Retreat Pipeline`)
       └──> Sends Slack / Email notification to Carly Anne: "New High-Ticket Application"

 [STEP 2: Discovery Call & Deposit]
       │
       ▼
   Discovery Call Completed -> Application Status: "Accepted"
       │
       ├──> Generates Stripe Checkout Link ($500 USD Deposit)
       └──> Guest Pays Deposit

 [STEP 3: Post-Deposit Automated Triggers]
       │
       ├──> Stripe Webhook fires: `payment_intent.succeeded`
       ├──> Airtable updates: Guest Status = "Deposit Confirmed", Suite = "Locked"
       ├──> Mailchimp triggers: 5-Part Welcome & Preparation Email Automation:
       │      • Email 1 (Instant): "Welcome to The Art of Arrival! Complete your Guest Intake"
       │      • Email 2 (+7 Days): "Your Costa Rica Travel, Passport & Flight Guide"
       │      • Email 3 (+21 Days): "Meet Chef Mateo & Submit Dietary Allergies"
       │      • Email 4 (+45 Days): "Final Balance Reminder ($2,350 due)"
       │      • Email 5 (+75 Days): "Airport Shuttle Manifest & SJO Pickup Details"
       └──> Creates Guest Digital Folder in Google Drive: `/Guests/2026_Aug_CR/[Guest_Name]`
```
