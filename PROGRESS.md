# Website: open list and hand-over

Kept by Thread Website. Last updated 22 Nov 2026.

**Scope (Salah, 22 Nov):** Thread Website owns the build, the technical side, security and design of cleanish.app. Thread Marketing writes the copy. Thread Legal writes privacy, Terms, consumer health data and the Impressum. Thread Support writes the help page. The website is built around their text, and no website copy is written here.

**Key dates:** faceless posts with "waitlist link in bio" from 24 Nov · plain version live by 3 Dec (the plan's deadline is 17 Dec) · store submission 18 Dec · store approval expected 22–28 Dec, when the reveal goes live · download buttons from 1 Jan.

## Open for Salah

Each item has a recommendation (Rec) and an alternative (Alt).

- [ ] **Waitlist storage.** Rec: keep Formspree (already named in the privacy notice) and add a `source` field from `?from=`. Submit in the background so visitors never leave our page, with a plain form post as the fallback. Alt: our own small endpoint storing data in the EU (more control, but it needs a server and secrets).
- [ ] **Store the page language with each sign-up,** so the 1 January email goes out in the right language. Rec: yes, taken from the page and never asked. Alt: email and source only, with one launch email in English.
- [ ] **Hosting.** Rec: stay on GitHub Pages through launch (domain verified, no new provider). The security policy goes in a meta tag. Alt: Cloudflare Pages, for real security headers (frame protection, HSTS control). That means a new account, a DNS change and a new provider in the privacy policy.
- [ ] **Wordmark.** Rec: keep the uppercase CLEAN(ish) logo, which matches the filed trademark CLEAN(ISH) and the app icon. Running text always says Clean(ish). Alt: a mixed-case logo.
- [ ] **Impressum and the "no real people" rule.** German law needs the managing director's name on the Impressum. That name is public at Companies House. Rec: allow this one exception. Alt: no Impressum (not an option if Germany, Austria or Switzerland launch).
- [ ] **First small merge this week, before the full plain version.** It would add channel-source capture, canonical URLs and meta tags on every page, a sitemap, robots.txt, a branded 404 and fewer font files. Reason: the "waitlist link in bio" posts start 24 Nov, and sign-ups before this is live have no source. Rec: yes. Alt: wait for the full plain version (about 3 Dec).
- [ ] **Plain and reveal plan, with the two switches (step 2).** Proposal to follow.

## Salah-only tasks

- [ ] Formspree dashboard: check the plan (custom redirects need a paid plan, as far as I know), whether reCAPTCHA is on, whether IP addresses are stored, and how long submissions are kept.
- [ ] GitHub, cleanish-site, Settings, Pages: confirm "Enforce HTTPS" is ticked.
- [ ] Branch protection on `main` of cleanish-site: changes by pull request only, no force-push. This is already on the Admin List for both repositories.
- [ ] Let this session reach the app repository (cleanishapp/cleanish-app), so Thread Website can file `for-thread-0` issues. Attaching it was refused on 22 Nov.
- [ ] Let this session's network reach cleanish.app, so the live site can be checked. It is blocked today.

## Waiting on other threads (inputs the build needs)

| What | From | Needed by | Status |
|---|---|---|---|
| Plain version copy: home page line(s), waitlist label, button, consent line, thanks page, 404 page, page titles and meta descriptions, social preview image text | Marketing | 27 Nov | not asked yet |
| Channel codes for `?from=` (e.g. tiktok, tiktok-fr, instagram, bio links) | Marketing | 27 Nov | not asked yet |
| Website-only privacy notice (waitlist and hosting), to replace the app draft now live, which names Flora | Legal | 27 Nov | not asked yet |
| Reveal version copy: the story, sections, Clean(ish) January, pre-order and pre-registration buttons, launch-day download wording | Marketing | 12 Dec | not asked yet |
| App privacy policy, Terms and consumer health data, as v0.9 (lawyer-ready), at their permanent addresses before submission | Legal | 15 Dec | not asked yet |
| Impressum text; Quebec contact for personal information | Legal | 15 Dec | not asked yet |
| Signed v1.0 of each legal page, with version and last-updated date | Legal | after the lawyer's sign-off (19–25 Dec) | — |
| Help page, English (approved 22 Nov in the Support doc); it goes at cleanish.app/help/ | Support | 1 Dec | ready to take |
| Help page and site copy in French, German, Swiss German, Dutch and Arabic | Translations, after Salah approves the English | 15 Dec | — |
| App screenshots for the reveal (the store listing images) | Build, through Thread 0 | 18 Dec | — |
| App Store and Google Play links, pre-order and pre-registration links | Salah, through Thread 0 | the day of approval | — |
| A security look at the waitlist form and the site's security policy before the plain version goes live | Security | 1 Dec | not asked yet |

## Hand-over

- **22 Nov:** audit done (in the session; summary: wording and scope fixes are now Marketing's and Legal's; missing canonical URLs, meta tags, sitemap, robots.txt, 404 page and `?from=` handling; fonts duplicated four times; no secrets in the history). Nothing built yet. Working branch: `claude/lucid-sagan-520v2e`. Merges to `main` only after Salah has seen the result.
- **Next:** step 2 proposal (plain version, reveal version, the two switches), then the first small merge once Salah agrees.
