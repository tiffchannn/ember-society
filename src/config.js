// Update these once the real accounts are live.
export const CONTACT_EMAIL = 'embersociety.la@gmail.com'
export const INSTAGRAM_HANDLE = '@embersociety.la'
export const INSTAGRAM_URL = 'https://instagram.com/embersociety.la'
export const SERVICE_AREA = 'Greater Los Angeles'

// Formspree endpoint (https://formspree.io) — e.g. 'https://formspree.io/f/abcdwxyz'.
// While this is empty the booking form falls back to opening an email draft.
export const FORM_ENDPOINT = 'https://formspree.io/f/xwlpwzan'

// Kit (kit.com) form ID — the number in the form's dashboard URL.
// While this is empty the newsletter section is hidden entirely.
export const KIT_FORM_ID = '9986864'

// ---------------------------------------------------------------------------
// UPCOMING EVENTS
//
// Adding an event here makes the "What's Coming Up" section appear on the
// homepage, above Events & Pricing. An empty list hides the section entirely,
// so the site looks finished either way.
//
// Fields:
//   date       ISO, YYYY-MM-DD. Drives both the display and the ordering.
//   time       Free text, shown as typed, e.g. '10:00 AM'.
//   title      What the event is called.
//   venue/city Shown together as "Venue · City". Either can be left out.
//   price      Free text, e.g. '$60' or 'From $60'. Hidden when sold out.
//   ticketUrl  Stripe payment link. See the three button states below.
//   soldOut    true shows a muted "Sold Out" badge instead of a button.
//
// The button changes itself:
//   ticketUrl set        -> gold "Get Tickets" going to Stripe
//   soldOut: true        -> muted "Sold Out", no price, not clickable
//   neither              -> outlined "Ask About It" going to the booking form
//
// So a date can be announced before the Stripe link exists: leave ticketUrl
// empty, and add it later.
//
// Past events disappear from the page on their own at midnight, but the entry
// stays in this file. Delete old ones when you next edit so the list does not
// pile up. The heading also changes itself: one event reads "Our next pop-up",
// several read "Where we'll be next".
//
// BEFORE PASTING A STRIPE LINK, on that payment link (full reasoning in #1):
//   - Limit the number of payments = the machine count for that event, with
//     the sold-out message set.
//   - Quantity fixed at 1 per checkout. The payment limit counts transactions,
//     not tickets, so letting people change quantity breaks the capacity math.
//   - Require customers to accept your terms of service = ON.
//   - Custom text above the pay button saying tickets are non-refundable.
//   - Build it in live mode. Sandbox links will not take real money.
// ---------------------------------------------------------------------------
export const EVENTS = [
  // {
  //   date: '2026-11-15',
  //   time: '10:00 AM',
  //   title: 'Lagree at the Rose Bowl Flea',
  //   venue: 'Rose Bowl Flea Market',
  //   city: 'Pasadena',
  //   price: '$60',
  //   ticketUrl: '',
  //   soldOut: false,
  // },
]
