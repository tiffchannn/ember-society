# Ember Society

Marketing site for Ember Society — movement & wellness. React + Vite + Tailwind, deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Runs at http://localhost:5173.

## Deploying to GitHub Pages

1. Create a GitHub repo named `ember-society` and push this project to `main`.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Every push to `main` builds and publishes automatically via `.github/workflows/deploy.yml`.

The site will be live at `https://<username>.github.io/ember-society/`.

`vite.config.js` sets the base path to `/ember-society/` only when `GITHUB_PAGES=true`, which the
workflow sets. If the repo is renamed, update that path to match. For a custom domain, set the base
back to `/` and add a `CNAME` file to `public/`.

Manual alternative: `npm run deploy` (publishes `dist` to a `gh-pages` branch).

## Things to update before launch

- **`src/config.js`** — contact email, Instagram handle and service area are placeholders.
- **Instructor portraits** — `src/components/Instructors.jsx` renders a monogram tile per bio.
  Replace each with `<img className="aspect-[4/5] w-full rounded-2xl object-cover" src="..." />`.
- **Liability waiver** — the copy in `src/components/WaiverModal.jsx` is placeholder language and
  needs review by a lawyer before taking real bookings.
- **Booking form** — currently opens a prefilled email draft (works on static hosting with no
  backend). For real ticketing, point the form at Formspree, Tally, or a booking platform.
- **Vendor event pricing** — listed as `$60 per participant`; confirm that's the right unit.

## Structure

```
src/
  components/    one file per page section, composed in App.jsx
  config.js      contact details in one place
  index.css      brand tokens (colors, fonts) + animations
```

Brand tokens live in `src/index.css` under `@theme`: amber `#E19F3F`, copper `#A16139`,
charcoal `#34302F`, cream `#F6F6E9` and clay `#CEC0B2`, plus warm near-blacks for the night
sections. These are the swatches as drawn in the brand kit — its hex labels don't match the
circles. Headings use Cinzel, body uses Inter.
