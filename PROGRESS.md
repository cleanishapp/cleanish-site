# Website: open list and hand-over

Kept by Thread Website. Last updated 23 Nov 2026.

**Scope (Salah, 22 Nov):** Thread Website owns the build, the technical side, security and design of cleanish.app. Thread Marketing writes the copy. Thread Legal writes privacy, Terms, consumer health data and the Impressum. Thread Support writes the help page. The website is built around their text, and no website copy is written here.

**Key dates:** faceless posts with "waitlist link in bio" from 24 Nov · plain version live by 3 Dec (the plan's deadline is 17 Dec) · store submission 18 Dec · store approval expected 22–28 Dec, when the reveal goes live · download buttons from 1 Jan.

## Open for Salah

Decided 23 Nov (Salah; passed on by Thread 0, 23 Nov, 18:45), all six as recommended:

- [x] **Waitlist storage:** stay on Formspree, with a `source` field taken from `?from=`, sent in the background with a plain form post as the fallback. Built 23 Nov.
- [x] **Page language stored with each sign-up** (`lang`, taken from the page and never asked). Built 23 Nov.
- [x] **Hosting:** stay on GitHub Pages through launch, with the security policy in a meta tag. Built 23 Nov.
- [x] **Wordmark:** keep the uppercase CLEAN(ish) logo, **on condition that it matches the app's own wordmark and icon exactly and is tidy.** Still to check against docs/reference in the app repository; files requested from Thread 0 on 23 Nov.
- [x] **Impressum** carries the managing director's name (one exception to the "no real people" rule). Waits for Legal's text.
- [x] **First small technical merge now,** ahead of the full plain version. Built on the branch 23 Nov; goes to `main` once Salah has seen it.
- [ ] **Plain and reveal plan, with the two switches (step 2).** Proposal to follow.

## Salah-only tasks

- [ ] Formspree dashboard: check the plan, whether reCAPTCHA is on, whether IP addresses are stored, and how long submissions are kept. If the plan offers it, restrict the form to the cleanish.app domain. The new background send no longer needs Formspree's custom redirect.
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
- **23 Nov:** the technical merge is built on the branch, with no copy changes. It adds:
  - `source` from `?from=` (lower-case letters, numbers and hyphens, up to 32 characters; kept for the tab only; removed from the address bar) and `lang`
  - background send to Formspree, falling back to the plain post
  - a bot trap (hidden field, or a submit within 1.5 s)
  - a security policy in a meta tag (own scripts, styles, fonts and images only; form and connections to formspree.io only), with `strict-origin` referrers
  - canonical, og:url, og:type and og:locale on the indexable pages
  - `sitemap.xml`, `robots.txt` and a branded `404.html`
  - the fonts cut from 8 files to 2 (one variable font); the inline styles moved into the stylesheet

  19 browser checks pass on an iPhone 13-sized screen. The home page is pixel-identical to before. Meta descriptions for the other pages wait for Marketing's copy.
- **Next:** step 2 proposal (plain version, reveal version, the two switches), then the first small merge once Salah agrees.
