# Check-in

How ticket buyers, signed waivers and actual attendance get reconciled.

**The short version:** check-in should not be where matching happens. Do the
matching the day before, arrive with one printed list, and the table becomes
"find name, tick box."

---

## Why the day-before reconciliation matters

Guests arrive 30 minutes early and there are 10–15 of them. That's roughly two
minutes a head, which is comfortable *if* the waivers are already signed. It is
not comfortable if eight people are reading fifteen clauses on their phones in
the sun while the class is meant to start. Everything below is aimed at making
the day-of version of this as close to empty as possible.

---

## Step 1 — Push signing to purchase time

The single biggest lever. Someone who just paid is already on their phone and
already in the mindset; a week later they are not.

- The Stripe **confirmation message and confirmation email** both carry the
  waiver link. That's the moment most signatures should come from.
- The **week-of reminder** chases whoever hasn't.
- Target is everyone signed before the day. Walk-ups and gift recipients are the
  only ones who should ever sign at the table.

---

## Step 2 — Build one list, the day before

**There is a ready-made spreadsheet for this: [`check-in-template.xlsx`](check-in-template.xlsx).**
Upload it to Google Drive, right-click it and choose *Open with → Google Sheets*.
The START HERE tab walks through it. You paste twice and type nothing else —
the formulas are already in place.

The rest of this section explains what it's doing, in case it ever needs
changing.

Two sources, one sheet:

- **Stripe** — who paid. Export the payments for this event's payment link; it
  gives you the customer's name, email and time of purchase.
- **The waiver Sheet** — who signed.

Make a new tab, one row per ticket holder, and paste the Stripe export in. Then
let the sheet do the join rather than your eyes.

### The formula

In a "Waiver" column, assuming the buyer's name is in column A and their email
in column B of your check-in tab:

```
=IF(COUNTIF('Form Responses 1'!$B:$B,TRIM($B2))>0,"signed",
 IF(COUNTIF('Form Responses 1'!$C:$C,TRIM($A2))>0,"signed (name match)",
 "NOT SIGNED"))
```

It checks the email first, then falls back to the name. Adjust the column
letters to match your actual response sheet — open it and check, don't assume.
`COUNTIF` is case-insensitive in Sheets, and `TRIM` absorbs stray spaces, which
between them catch most of the mismatches.

A **name match** is worth treating as a soft yes, not a hard one. It usually
means a gift ticket, where the buyer's email and the participant's email are
different people. Glance at those rows.

### Filtering to this event

The event field on the form is free text, so matching on it is unreliable. Two
better options:

- **By date** — sort the responses by Timestamp and look only at rows since the
  last event.
- **By the form being closed** — because responses are switched off between
  events, anything that arrived since you turned it back on belongs to this one.
  This is the easier of the two and a good reason to keep that habit.

### Then chase

Anyone reading NOT SIGNED gets a direct message with the link that evening. Each
one you clear is one fewer person standing at the table.

---

## Step 3 — Print it

For 10–15 people at a flea market, **paper beats a phone.** No signal
dependency, no battery, no screen glare, and both of you can work from it at
once if you print two copies.

Columns worth having:

| Name | Paid | Waiver | No photos | Here |
|------|------|--------|-----------|------|

- **Waiver** pre-ticked from the reconciliation, so most rows arrive done
- **No photos** pre-filled from the opt-out column, because that's the one you
  have to know *before* you start shooting
- **Here** is the only column you fill on the day

Keep a phone handy anyway for the waiver QR and for looking someone up in Stripe
if they insist they bought a ticket and aren't on the list.

---

## Step 4 — On the day

The rule that matters: **no signature, no machine.** Not "sign it later," not
"I'll do it after" — the signature is the thing that has to exist before someone
is on spring-loaded equipment, and it's unenforceable collected afterwards.

- Tick **Here** as each person arrives
- Anyone unsigned gets the QR code and signs before they get on
- ID if anyone looks under 18 — the waiver reserves that right
- Note verbal photography opt-outs on the sheet, in writing, that day

### Gift tickets

The buyer's name on Stripe won't be the person in front of you. The waiver is
signed by the **participant**, so that's the record that counts — the Stripe
list tells you a seat was paid for, not who's sitting in it. Write the actual
participant's name on the paper list next to the buyer's.

### Walk-ups

Make a small printed card with two QR codes, labelled in order:

1. **Buy a ticket** → the Stripe payment link
2. **Sign the waiver** → the Google Form

If the event is sold out, the Stripe cap blocks the first step on its own, which
saves you having that conversation.

---

## Step 5 — Afterwards

- Transfer the **Here** ticks into the sheet while it's fresh — for 15 people
  this is two minutes, and it's your record of who actually participated
- Export this event's waiver responses to PDF and store them durably
- Add any verbal photo opt-outs to the row before you post anything

Attendance matters for more than curiosity: if there's ever an injury claim, the
signed waiver plus a record of who was actually present is the pair you want.

---

## When to stop doing it this way

This is a manual process and it's fine at 10–15 people. The threshold to watch
is **running two or three events a month, or regularly over ~20 guests** — at
that point a ticketing platform that handles payment, guest list and check-in
together starts being worth its per-ticket cut. Noted in
[#1](https://github.com/tiffchannn/ember-society/issues/1) as the trade.

The other thing that would collapse most of this: a waiver tool with its own
check-in screen. Smartwaiver was priced at $19/mo when it was compared
([#14](https://github.com/tiffchannn/ember-society/issues/14)) and Google Forms
won on cost, which was right for launch. If check-in turns out to be the painful
part of running events, that's the line item to revisit.
