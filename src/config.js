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

// Upcoming events, soonest first. Leave the array empty and the section disappears.
// `ticketUrl` is the Stripe payment link; omit it and the card points at the inquiry form.
// Remove an event once it has passed — nothing clears it automatically.
export const EVENTS = [
  // {
  //   date: '2026-11-15',           // ISO date, used for display and ordering
  //   time: '10:00 AM',
  //   title: 'Lagree at the Rose Bowl Flea',
  //   venue: 'Rose Bowl Flea Market',
  //   city: 'Pasadena',
  //   price: '$60',
  //   ticketUrl: '',               // Stripe payment link
  //   soldOut: false,
  // },
]
