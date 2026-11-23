# Website: open list and hand-over

Kept by Thread Website. Last updated 23 Nov 2026.

**Scope (Salah, 22 Nov):** Thread Website owns the build, the technical side, security and design of cleanish.app. Thread Marketing writes the copy. Thread Legal writes privacy, Terms, consumer health data and the Impressum. Thread Support writes the help page. The website is built around their text, and no website copy is written here.

**Key dates (Launch Plan, re-dated 22 Nov):** posts with "waitlist link in bio" from 24 Nov · plain version complete 29 Nov · legal pages live 8 Dec (latest 16 Dec) · reveal ready and reviewed 10 Dec · submission 10 Dec (latest 18 Dec) · approval expected 13–17 Dec, when the app is released and the reveal goes live · 1 Jan campaign peak · 8 Jan founding price ends.

**Plan (step 2):** the Clean(ish) Website Plan, a private doc: https://claude.ai/artifact/86Q2Wo5udbNmcmhSawKNPF. This repository is public, so the plan lives there, not here.

## Open for Salah

Decided 23 Nov (Salah; passed on by Thread 0, 23 Nov, 18:45), all six as recommended:

- [x] **Waitlist storage:** stay on Formspree, with a `source` field taken from `?from=`, sent in the background with a plain form post as the fallback. Built 23 Nov.
- [x] **Page language stored with each sign-up** (`lang`, taken from the page and never asked). Built 23 Nov.
- [x] **Hosting:** stay on GitHub Pages through launch, with the security policy in a meta tag. Built 23 Nov.
- [x] **Wordmark:** keep the uppercase CLEAN(ish) logo, **on condition that it matches the app's own wordmark and icon exactly and is tidy.** Checked on 23 Nov against the spec Thread 0 read from the app (DESIGN.md, design-tokens.json, Wordmark.tsx on branch dash). The wordmark now matches: Inter 800, letter-spacing 0 (was 0.005em on CLEAN), line-height 1, "(ish)" 2% left margin, ink #151515 / #F2EEF0, berry #B05A7A / #D98AA8.
  - Still to do: the icon, favicon, Apple touch icon and social preview image are drawn by the site itself, and favicon.svg uses Helvetica, not Inter. They will be replaced with the app's own files (assets/icon.png, assets/favicon.png, assets/splash/wordmark-*.png on branch dash) once the app repository is attached.
- [x] **Impressum** carries the managing director's name (one exception to the "no real people" rule). Waits for Legal's text.
- [x] **First small technical merge now,** ahead of the full plain version. Built on the branch 23 Nov; goes to `main` once Salah has seen it.
Decided 23 Nov (Salah; passed on by Thread 0, 23 Nov, 19:55):

- [x] **Tools for the reveal:** GSAP yes, Lenis yes, React Bits yes. The reveal is its own build and can be React; the plain site stays static and minimal (the frame for the legal and help pages). Conditions:
  1. Lenis respects "reduce motion" and is tested on an iPhone and an Android phone; if it feels wrong, it comes out and GSAP does the work.
  2. React Bits components go in one at a time, each read, its extra libraries listed; nothing from a CDN, everything bundled, exact versions pinned, Dependabot on.
  3. Page weight under about 1 MB on first load.
  4. Thread Security reads the dependency list before the reveal goes live.

  Ready and reviewed by about 10 Dec.
- [ ] **Step 2 plan:** proposed 23 Nov in the Clean(ish) Website Plan, with six decisions for Salah at the end.
  - [x] Waitlist (Salah, 23 Nov, passed on by Thread 0, 20:10): the waitlist email goes out on release day, the day the stores approve; the form's promise stays as it is; on release day the form gives way to the store buttons.
  - [ ] The other five: still with Salah.

## Salah-only tasks

- [ ] Formspree dashboard: check the plan, whether reCAPTCHA is on, whether IP addresses are stored, and how long submissions are kept. If the plan offers it, restrict the form to the cleanish.app domain. The new background send no longer needs Formspree's custom redirect.
- [ ] GitHub, cleanish-site, Settings, Pages: confirm "Enforce HTTPS" is ticked.
- [ ] Branch protection on `main` of cleanish-site: changes by pull request only, no force-push. This is already on the Admin List for both repositories.
- [ ] If the plan is agreed: the organisation's Team plan (already on the Admin List), then make cleanish-site private by 30 Nov, and set Pages' source to "GitHub Actions".
- [ ] Let this session reach the app repository (cleanishapp/cleanish-app), so Thread Website can file `for-thread-0` issues. Attaching it was refused on 22 Nov.
- [ ] Let this session's network reach cleanish.app, so the live site can be checked. It is blocked today.

## Waiting on other threads (inputs the build needs)

| What | From | Needed by | Status |
|---|---|---|---|
| Plain version copy: home page line(s), waitlist label, button, consent line, thanks page, 404 page, page titles and meta descriptions, social preview image text | Marketing | 27 Nov | not asked yet |
| Channel codes for `?from=` (e.g. tiktok, tiktok-fr, instagram, bio links) | Marketing | 27 Nov | not asked yet |
| Website-only privacy notice (waitlist and hosting), to stand in until the full policy goes live | Legal | 27 Nov | not asked yet |
| Reveal copy and storyboard (see the plan) | Marketing | 3 Dec | not asked yet |
| Privacy policy, Terms and consumer health data, final text with version and date, in six languages (live 8 Dec) | Legal, then Translations | 5 Dec | not asked yet |
| Impressum text; Quebec contact for personal information | Legal | 5 Dec | not asked yet |
| Help page, English (approved 22 Nov in the Support doc); it goes at cleanish.app/help.html | Support | 27 Nov | ready to take |
| Help page and site copy in French, German, Swiss German, Dutch and Arabic | Translations, after Salah approves the English | 5 Dec | — |
| Images for the reveal (see the plan) | Build, through Thread 0 | 3 Dec | — |
| App Store and Google Play listing links (known now; they work from approval) | Thread 0 | 3 Dec | — |
| A security look at the waitlist form and the site's security policy before the plain version goes live | Security | 1 Dec | not asked yet |
| A read of the reveal's dependency list | Security | 8 Dec | — |

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
- **23 Nov, later:** wordmark matched to the app's spec. Tools decision recorded. Step 2 plan written in the private Clean(ish) Website Plan.
- **Next:** Salah's "merge" for the technical changes; his six decisions on the plan; then the plain version with Marketing's copy.
