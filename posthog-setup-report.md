<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of the Xion Sound Waves website. PostHog was already initialized with `posthog-js` and had strong event coverage across the site. Four new events were added to fill gaps in the conversion funnels and error tracking, and a new Analytics basics dashboard was created with 5 insights covering the key business flows. Environment variables (`VITE_PUBLIC_POSTHOG_KEY` and `VITE_PUBLIC_POSTHOG_HOST`) are set in `.env` — no keys are hardcoded.

## New events added

| Event Name | Description | File |
|---|---|---|
| `experience_page_viewed` | Fired when a user views the Experience Us page — the top of the inquiry conversion funnel | `src/components/Experience/Experience.tsx` |
| `not_found_page_viewed` | Fired when a user lands on the 404 Not Found page — useful for detecting broken or outdated links | `src/components/NotFound/NotFound.tsx` |
| `not_found_homepage_link_clicked` | Fired when a user clicks "Take me to the Homepage" from the 404 page | `src/components/NotFound/NotFound.tsx` |
| `photo_credit_clicked` | Fired when a user clicks the @_big_fern_ photographer credit on the homepage slideshow | `src/components/Home/Slideshow.tsx` |

## Existing events (already instrumented)

| Event Name | Description | File |
|---|---|---|
| `contact_form_submitted` | Contact form submission with subject property | `src/components/Contact/Contact.tsx` |
| `events_page_viewed` | Events page viewed with future/past event counts | `src/components/Events/Events.tsx` |
| `event_address_clicked` | Event venue address link clicked | `src/components/Events/Event.tsx` |
| `get_tickets_clicked` | Get Tickets button clicked for a future event | `src/components/Events/Event.tsx` |
| `homepage_video_played` | Homepage featured video played | `src/components/Home/Home.tsx` |
| `nav_item_clicked` | Navigation item clicked (navbar and footer) | `src/components/NavBar/NavBar.tsx`, `src/components/Footer/Footer.tsx` |
| `social_media_link_clicked` | Social media link clicked with platform property | `src/components/Footer/Footer.tsx` |
| `ceremonial_inquiry_clicked` | Ceremony inquiry CTA clicked | `src/components/Experience/Experience.tsx` |
| `concert_booking_inquiry_clicked` | Concert booking inquiry CTA clicked | `src/components/Experience/Experience.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://us.posthog.com/project/335957/dashboard/1342671
- **Ceremony Inquiry Funnel** (Experience Us → Ceremony inquiry → Contact form): https://us.posthog.com/project/335957/insights/tr6ZqjdR
- **Concert Booking Inquiry Funnel** (Experience Us → Concert booking → Contact form): https://us.posthog.com/project/335957/insights/b7RHXDlx
- **Ticket Sales Funnel** (Events page → Get Tickets click): https://us.posthog.com/project/335957/insights/tTxLgffb
- **Social Media Clicks by Platform** (weekly breakdown by instagram/facebook/youtube): https://us.posthog.com/project/335957/insights/JTutMWot
- **Homepage Video Plays & 404 Errors** (weekly trend): https://us.posthog.com/project/335957/insights/qwQgLPrq

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/posthog-integration-javascript_node/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
