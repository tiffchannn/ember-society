# Event checklist

Everything that has to happen for one event, in the order it happens. Copy this
file for each event, or work through it in place and reset the boxes afterwards.

Sections marked **[NEEDS YOUR INPUT]** are gaps — operational details only you and
Stef know. Fill them in once and they become part of the template.

---

## 1. When the date is confirmed

- [ ] Lock the details: **date, start time, venue name, city, machine count**
- [ ] Confirm the venue in writing (even a text thread) — date, hours, load-in time, power, floor space, whether they take a cut or a fee
- [ ] Decide the ticket price for this event
- [ ] Check both founders are actually free, including setup and teardown time

**Machine count is the number everything else keys off** — it sets the Stripe cap and the room layout. Decide it before anything goes on sale.

---

## 2. Stripe — before tickets go on sale

Full reasoning in [#1](https://github.com/tiffchannn/ember-society/issues/1). Build this in **live** mode; sandbox links can't take real money.

- [ ] Create a **fresh payment link** for this event (never reuse an old one — the payment cap is per link)
- [ ] Price set
- [ ] **Limit the number of payments** = machine count
- [ ] Sold-out message set, for people arriving from an old Instagram post
- [ ] **Quantity fixed at 1** per checkout — the cap counts transactions, not tickets, so an adjustable quantity breaks the capacity math
- [ ] **Require terms of service acceptance: ON** (points at embersociety.la/waiver/ via the account setting)
- [ ] **Custom text above the pay button**: tickets are non-refundable. California generally needs this disclosed *before* payment, not only on the terms page
- [ ] Description carries the event date and location
- [ ] Confirmation message covers: arrival 30 minutes early, grip socks required, bring water, and the **waiver link**
- [ ] Deactivate any leftover test links so they can't take real money

---

## 3. Google Form — before tickets go on sale

Form: https://forms.gle/CHzAk9uWwgQhUipw6 · details in [#14](https://github.com/tiffchannn/ember-society/issues/14)

- [ ] **Turn "Accepting responses" back ON** — it's switched off between events. Someone opening the link and seeing "no longer accepting responses" at a check-in table with a queue is the failure mode to avoid
- [ ] Submit one test response, confirm it lands in the Sheet, then **delete that row**
- [ ] Generate the QR code for the form link

**Do not edit the form.** It's frozen. If the waiver text ever changes, build a new form — Google Forms stores answers, not the document, so it can't prove which version an earlier signer saw.

---

## 4. The website

- [ ] Add the event to `EVENTS` in [`src/config.js`](../src/config.js) — field-by-field notes are in the comment block above the array
- [ ] Paste the Stripe link into `ticketUrl` (leave it empty to announce the date early; the button becomes "Ask About It" and points at the booking form)
- [ ] Delete any past events from the array while you're in there — they vanish from the page on their own but stay in the file
- [ ] Commit and push; the deploy runs itself
- [ ] Check the live site: right date, right price, button goes to the right Stripe link

---

## 5. Promotion

- [ ] Instagram post and stories with the ticket link
- [ ] Update the link in bio
- [ ] Tag the venue and any vendors sharing the activation
- [ ] **[NEEDS YOUR INPUT]** — is there a newsletter send here? Right now Kit emails land in spam ([#4](https://github.com/tiffchannn/ember-society/issues/4)), so Instagram is the reliable channel until that's fixed

---

## 6. Week of

- [ ] Email or DM every ticket holder the **waiver link** — this is the main chance to get waivers signed before the day, so check-in isn't a bottleneck
- [ ] Remind them: arrive 30 minutes early, grip socks required, bring water, 18+ with ID
- [ ] Confirm load-in time and parking with the venue
- [ ] Check the weather if any part of it is outdoors, and decide the call-it-off threshold in advance
- [ ] Print the waiver QR code, or save it somewhere findable offline on a phone

---

## 7. Day before

- [ ] Check how many tickets sold vs machines, and how many waivers are already signed
- [ ] Charge everything that needs charging
- [ ] Pack (see below)
- [ ] **[NEEDS YOUR INPUT]** — anything that has to be picked up, borrowed, or collected the day before?

---

## 8. What to bring

**[NEEDS YOUR INPUT — this is the section I can't write for you.]**

What's verified from the site copy and the waiver:

- [ ] Machines (count = the Stripe cap)
- [ ] Waiver QR code, printed and on a phone
- [ ] Something to write on — for anyone who opts out of photography verbally on the day
- [ ] A charged phone for check-in (ticket list + waiver responses)

Guests bring their own grip socks and water. **We don't carry spares** — worth being clear about that in the reminders so nobody arrives expecting them.

Still to add, from how you actually run these — speaker and music, cleaning supplies, first aid kit, a check-in table or sign, signage, water for yourselves, a cash float if there's any walk-up sales, transport and how long load-in really takes.

---

## 9. Setup, on the day

- [ ] Arrive with enough time to be fully set up **before** the 30-minutes-early arrival window opens — guests turning up to a half-built room undoes the experience
- [ ] Machines laid out and wiped down
- [ ] Check-in point set up with the QR code visible
- [ ] Sound tested
- [ ] **[NEEDS YOUR INPUT]** — realistic setup time from arrival to ready?

---

## 10. Check-in

**Nothing automatically links a Stripe ticket buyer to a signed waiver — matching them is manual.** This is the one genuinely fiddly part of the day.

- [ ] Pull up the Stripe payment list (who paid) and the waiver Sheet (who signed) side by side
- [ ] Each guest: confirm they paid, confirm a signed waiver exists
- [ ] No waiver → QR code, sign on their phone before they get on a machine. **No signature, no participation**
- [ ] 18+ — ask for ID if anyone looks under age; the waiver reserves that right
- [ ] Note anyone who opts out of photography verbally, in writing, that day
- [ ] Tickets bought as gifts: the buyer's name on Stripe won't match the person in front of you. The waiver is signed by the **participant**, so that's the record that counts

---

## 11. After the event

- [ ] **Export this event's waiver responses to PDF** and store them durably — not only in Sheets
- [ ] Keep signed waivers **at least 4 years** (California: 2 years personal injury, 4 years written contract)
- [ ] Switch the Google Form's "Accepting responses" **OFF** if the next event is far out
- [ ] Deactivate the Stripe payment link so it can't sell tickets to a past event
- [ ] Remove the event from `EVENTS` in `src/config.js`, commit, push
- [ ] Before posting any photos, **filter out everyone who opted out** — both the checkbox column in the Sheet and whatever was noted verbally on the day
- [ ] **[NEEDS YOUR INPUT]** — equipment check, cleaning, anything that needs repair or replacing?

---

## Known gaps

Things that are genuinely unresolved, so they don't come as a surprise:

- **Ticket buyer ≠ signed waiver.** Stripe proves purchase and terms acceptance; the form proves signature and emergency contact. Joining them is manual at check-in.
- **Newsletter lands in spam.** Kit can't sign mail as a Gmail address ([#4](https://github.com/tiffchannn/ember-society/issues/4)). Needs an address on embersociety.la.
- **Counsel hasn't seen the e-signature paragraph** in the Google Form ([#14](https://github.com/tiffchannn/ember-society/issues/14)).
- **No refunds is guest-side only.** If *we* cancel, guests get a reschedule or a refund — have a plan for how that gets issued in Stripe.
