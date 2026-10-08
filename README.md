# Mustafa Hamzabhai — Developer Portfolio

A responsive static portfolio for Mustafa Hamzabhai, a BCA student and Developer at **Burhanuddin Hamzabhai Softwares**.

## Website

Intended GitHub Pages address after publication:

https://burhanuddinhamzabhai.github.io/mustafa-hamzabhai-portfolio/

## Features

- Responsive layouts for mobile, tablet and desktop
- Dark and light themes, with an optional saved preference
- Profile, current employment, education and featured portfolio sections
- Keyboard focus styles, semantic landmarks and reduced-motion support
- GitHub enquiry and source links, clearly attributed to the repository maintainer
- No build step, npm packages, backend or secrets

## Run locally

Open `index.html` directly, or serve this directory:

```sh
python3 -m http.server 8080
```

Open http://localhost:8080.

## Publish on GitHub Pages

1. Create the public repository `mustafa-hamzabhai-portfolio` under `burhanuddinhamzabhai`.
2. Push these files to its `main` branch, keeping `index.html` at the repository root.
3. In **Settings → Pages**, choose **Deploy from a branch**.
4. Select **main** and **/(root)**, then save.
5. Wait for GitHub’s Pages build to succeed and verify the published address.

Reference: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

The `.nojekyll` file bypasses Jekyll processing. Relative asset paths work at a GitHub Pages project URL and with a custom domain.

## Update the portfolio

- **Content:** edit `index.html`.
- **Appearance:** edit `styles.css`.
- **Contact:** fill the `contact` object at the top of `app.js` with approved public details. Empty fields stay hidden.
- **Projects:** replace or extend the featured portfolio section with verified projects and real links.
- **Repository:** update GitHub links if the repository owner or name changes.

Fonts load from Google Fonts; local system fonts provide a fallback if it is unavailable. The complete profile and navigation remain usable without JavaScript.

## Content grounding

The name, BCA studies and employer were supplied by the user. Intermediate HTML knowledge appears in the supplied video. No employment dates, college name, additional personal skills, client projects, testimonials or achievements have been invented. CSS and JavaScript tags describe this website’s implementation, not a claimed proficiency level.

The reference video’s contact text was too blurry to transcribe reliably. Public email and phone details are intentionally left empty. The supplied portrait was a small image inside a recording of a monitor; a typographic monogram is used rather than publishing a low-resolution crop.

The source repository is maintained by Burhanuddin Hamzabhai; it is not presented as Mustafa’s personal GitHub account.
