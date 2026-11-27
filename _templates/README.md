# Page templates (not published)

`legal.html` is the one layout for every legal page in every language: privacy policy, Terms,
consumer health data, Impressum. Thread Website fills it; nobody else edits pages.

- Text comes from Thread Legal (English) and Thread Translations (the other five languages), as
  approved by Salah. Thread Website never writes or changes the words.
- Every page shows its **version** and **last-updated date** under the title, links to the same page
  in the other languages, and a contents list built from its headings.
- Addresses: English at the root (`/privacy.html`, `/terms.html`, `/consumer-health-data.html`,
  `/impressum.html`); other languages under `/fr/`, `/de/`, `/de-ch/`, `/nl/`, `/ar/` with the same
  file names. Arabic pages use `dir="rtl"`.
- Placeholders are in double braces. `{{HREFLANG_LINKS}}` lists the page's language versions for
  search engines; `{{LANG_LINKS}}` shows them to people.

This folder is excluded from the live site by `_config.yml`.
