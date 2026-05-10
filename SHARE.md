# Sharing Idle Town

Idle Town builds as a static web app. After it is hosted, copy the public URL into Discord so other people can play it in their browser.

## Make The Share Build

```powershell
npm run build
```

The finished app is in `dist/`.

## Easiest Hosting Options

- GitHub Pages: push this repo to GitHub. The included workflow builds `dist/` and publishes it through Pages.
- Itch.io: create a new HTML game, zip the contents of `dist/`, upload it, and set the game to run in the browser.
- Netlify: drag the `dist/` folder into Netlify Drop.

## Local Preview

```powershell
npm run preview
```

The local preview is only for your computer. For Discord, use a hosted URL rather than `127.0.0.1`.
