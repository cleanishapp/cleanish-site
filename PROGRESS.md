# Website: open list and hand-over

Kept by Thread Website. Last updated 23 Nov 2026.

**Scope (Salah, 22 Nov):** Thread Website owns the build, the technical side, security and design of cleanish.app. Thread Marketing writes the copy. Thread Legal writes privacy, Terms, consumer health data and the Impressum. Thread Support writes the help page. The website is built around their text, and no website copy is written here.

**Key dates (Launch Plan, re-dated 22 Nov):** posts with "waitlist link in bio" from 24 Nov · plain version complete 29 Nov · legal pages live 8 Dec (latest 16 Dec) · reveal ready and reviewed 10 Dec · submission 10 Dec (latest 18 Dec) · approval expected 13–17 Dec, when the app is released and the reveal goes live · 1 Jan campaign peak · 8 Jan founding price ends.

**Plan (step 2):** the Clean(ish) Website Plan, a private doc (link on the Team Sheet). Rule while this repository is public (Thread Security, 26 Nov): no links to any Claude Doc in any file here; refer to docs by name.

## Open decisions for Salah

Decided 23 Nov (Salah; passed on by Thread 0, 23 Nov, 18:45), all six as recommended:

- [x] **Waitlist storage:** stay on Formspree, with a `source` field taken from `?from=`, sent in the background with a plain form post as the fallback. Built 23 Nov.
- [x] **Page language stored with each sign-up** (`lang`, taken from the page and never asked). Built 23 Nov.
- [x] **Hosting:** stay on GitHub Pages through launch, with the security policy in a meta tag. Built 23 Nov.
- [x] **Wordmark:** keep the uppercase CLEAN(ish) logo, **on condition that it matches the app's own wordmark and icon exactly and is tidy.** Checked on 23 Nov against the spec Thread 0 read from the app (DESIGN.md, design-tokens.json, Wordmark.tsx on branch dash). The wordmark now matches: Inter 800, letter-spacing 0 (was 0.005em on CLEAN), line-height 1, "(ish)" 2% left margin, ink #151515 / #F2EEF0, berry #B05A7A / #D98AA8.
  - Icon, 23 Nov: the site showed a pink "(ish)" square that isn't the app icon. Replaced on the branch with the real icon (cleanish-app `dash`, assets/icon.png): the home-page icon, favicon-32.png, apple-touch-icon.png and the social preview image (same words, real icon); favicon.svg removed. The app's assets/favicon.png is Expo's default placeholder, so it wasn't used. Waiting for Salah's look before merging.
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
  - [x] Private repository (Salah, 23 Nov, passed on by Thread 0, 20:20): the GitHub Team plan (Salah is finishing it), then cleanish-site goes private, by 30 Nov. No reveal content is pushed until it is private.
  - [x] The other four (Salah, 23 Nov, "yes to all" in this thread): the reveal switches on through a pull request prepared in advance that Salah merges; deploy through GitHub Actions; the reveal pre-rendered to plain HTML; a copy switch at 00:00 UK on 1 Jan and the founding-price line off automatically at 00:00 UK on 8 Jan.
- [x] **Technical changes live** (Salah, 23 Nov): merged to `main` the same evening.
- [x] **Requests to Marketing, Legal and Support** with the dates below (Salah, 23 Nov): posted to the Noticeboard the same evening.

- [ ] **Merge the PROGRESS.md fix now** (one file, nothing visible changes). Recommended: yes, today.
- [ ] **Help page before approval.** It names Flora and explains the app, but the stores need a working support address at submission (10 Dec), and testers' build links to cleanish.app/help. Recommended: live at /help now, marked noindex, not linked from the site or the sitemap until the reveal. Alternative: hold it until approval day.
- [ ] **Real app icon:** merge.
- [ ] **Reveal design checkpoints** (28 Nov, 5 Dec, 9 Dec) and matching the app's white/black look.

## Salah-only tasks

- [ ] Formspree dashboard: check the plan, whether reCAPTCHA is on, whether IP addresses are stored, and how long submissions are kept. If the plan offers it, restrict the form to the cleanish.app domain. The new background send no longer needs Formspree's custom redirect.
- [ ] GitHub, cleanish-site, Settings, Pages: confirm "Enforce HTTPS" is ticked.
- [ ] Branch protection on `main` of cleanish-site: changes by pull request only, no force-push. This is already on the Admin List for both repositories.
- [ ] If the plan is agreed: the organisation's Team plan (already on the Admin List), then make cleanish-site private by 30 Nov, and set Pages' source to "GitHub Actions".
- [ ] Let this session reach the app repository (cleanishapp/cleanish-app), so Thread Website can file `for-thread-0` issues. Attaching it was refused on 22 Nov.
- [x] Let this session's network reach cleanish.app: done 23 Nov (personal environment "cleanish-site", the same as Default plus cleanish.app and www.cleanish.app).

## Docs and inputs I'm waiting for, and from whom

| What | From | Needed by | Status |
|---|---|---|---|
| Plain version copy: home page line(s), waitlist label, button, consent line, thanks page, 404 page, page titles and meta descriptions, social preview image text | Marketing | 27 Nov | asked 23 Nov |
| Channel codes for `?from=` (e.g. tiktok, tiktok-fr, instagram, bio links) | Marketing | 27 Nov | asked 23 Nov |
| Website-only privacy notice (waitlist and hosting), to stand in until the full policy goes live | Legal | 27 Nov | asked 23 Nov |
| Reveal copy and storyboard (see the plan) | Marketing | 3 Dec | asked 23 Nov |
| Privacy policy, Terms and consumer health data, final text with version and date, in six languages (live 8 Dec) | Legal, then Translations | 5 Dec | asked 23 Nov |
| Impressum text; Quebec contact for personal information | Legal | 5 Dec | asked 23 Nov |
| Help page, English (approved 22 Nov in the Support doc); it goes at cleanish.app/help, the address the app links to (Build #39) | Support | 27 Nov | asked 23 Nov |
| Help page and site copy in French, German, Swiss German, Dutch and Arabic | Translations, after Salah approves the English | 5 Dec | — |
| Images for the reveal (see the plan) | Build, through Thread 0 | 3 Dec | asked 23 Nov |
| App Store and Google Play listing links (known now; they work from approval) | Thread 0 | 3 Dec | asked 23 Nov |
| A security look at the waitlist form and the site's security policy before the plain version goes live | Security | 1 Dec | asked 23 Nov, through Thread 0 |
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
- **23 Nov, evening:** Salah said yes to all. Technical changes merged to `main`; requests posted; plan decisions recorded.
- **23 Nov, late:** live site checked from the new environment. All 19 browser checks pass on cleanish.app itself (form sending intercepted, nothing sent to Formspree). The 404 page is ours. www redirects to cleanish.app. The sitemap, robots.txt, script and fonts are served. GitHub Pages sends no HSTS header for the custom domain (expected on Pages). `/help` is a 404 until Support's page is built.
- **24 Nov:** Thread Security's look at the waitlist form and security policy (cleanish-app `security` branch, docs/SECURITY-AUDIT-1.md section 8) found nothing to fix. Its A15 hashes checked against the live site: all 10 files match `main` at a556618 (terms.html needed a re-fetch; four re-fetches matched byte for byte). Result sent to Thread 0.
- **24 Nov, 21:10 UK:** Thread 0 restarted. Ping it at `session_01AVn4eDSbEXUHuAXch2cvK4` (checked: same environment and planning branch as the old session, which handed over and stopped). The old `session_01AVn4eF18baSXTEahHhWAAC` is retired.
- **26 Nov, 01:45 UTC:** Thread 0 restarted again. Ping it at `session_01AVn4eD2mmyBhfU3B31CFes` (checked: started from the web on the planning branch; the previous session had just handed over). `session_01AVn4eDSbEXUHuAXch2cvK4` is retired. GitHub issues labelled `for-thread-0` remain the channel.
- **26 Nov, evening:**
  - Help page built on the branch at `/help` from Support's English (Support doc, "Help page"; checked word for word). It has a contents list, 11 sections and one H1, and passes all checks. It is marked noindex and not linked from other pages, because it names Flora and explains the app; see Open decisions.
  - Legal-page template in `_templates/` (version, last-updated date, language links, contents list). Not published.
  - **Found:** GitHub Pages has published PROGRESS.md as a page on cleanish.app since 23 Nov. That page loads an outside script (anchor-js from a CDN). The fix, `_config.yml` excluding it, is on the branch. Pushing it to `main` was blocked pending Salah's OK.
  - Language folders wait for the first translated page, because git can't hold empty folders.
- **26 Nov, 23:00 UTC:** Thread Security's verdict on the PROGRESS.html exposure: Low, nothing to rotate. Filed as issue #1 in this repository (for-website), with the status of its three asks. `.nojekyll` not added (it would publish more, not less); Thread 0 agrees. The lasting fix is the Actions deploy.
- **26 Nov, late:** Security review 2A for the website (5 Low findings, issue #2). Fixed on the branch:
  - `/.well-known/security.txt` (Contact hello@, Expires 26 Nov 2027; included through `_config.yml`)
  - waitlist.js: the 1.5 s timing trap removed, so fast real people are never dropped; a failed send now shows an error line and never posts twice by itself

  24 checks pass. The error line's words ("Sorry, that didn't go through. Please try again.") are a stand-in for Marketing. Waiting on others: privacy text (Legal), wording (Salah) and the help page (Salah).
- **Next:** the plain version as Marketing's copy, Legal's notice and Support's help page arrive (target 29 Nov); the deploy workflow and the reveal's empty scaffolding (no screens, no story) until the repository is private (30 Nov).
