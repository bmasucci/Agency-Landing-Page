# BrAIn Flux landing page

A static, dependency-free landing page for the BrAIn Flux AI and automation agency.
No build step: plain HTML, CSS and JavaScript.

## Structure

```
index.html              Page markup (header, hero, services, process, contact, footer)
assets/css/styles.css   Design tokens at the top, then base, layout, components, sections
assets/js/main.js       Mobile menu, "Flux" wordmark ripple, footer year
```

## Deploy on GitHub Pages

1. Create a new repository on GitHub and push these files to the `main` branch.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose `main` and `/ (root)`, then save.
4. After a minute the site is live at `https://<your-username>.github.io/<repository-name>/`.

All asset paths are relative, so the page works both at that address and on a custom domain.

## Customize

- **Colours and type:** edit the tokens in the `:root` block at the top of `assets/css/styles.css`.
- **Email address:** replace `hello@brainflux.example` in the contact section of `index.html`.
- **Services:** copy a `<li class="service">` block in `index.html`.
- **Process steps:** copy a `<li class="step">` block and update the numbers. The grid is set for four steps in `styles.css` (`.steps`).

## Adding pages later

New pages can live next to `index.html` (for example `about.html`). Reuse the header, footer and `styles.css`, and change the `#section` links in the nav to `index.html#section`.
