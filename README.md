# Avery's Clubhouse

A public, password-free, fan-made sports, learning, music, and creator clubhouse for Avery. The app preserves the original dark charcoal, warm gold, condensed-type visual identity and photorealistic lounge while rebuilding the main interactions as a responsive React application.

## Setup

```powershell
pnpm install
pnpm run build
pnpm run dev -- --host 0.0.0.0 --port 4173 --strictPort
```

The production build is emitted to `dist/client`. The repository also includes the Sites worker packaging output and tests.

## Architecture

- `src/App.jsx`: public single-page clubhouse, Avery TV, lessons, languages, Guitar, Creator Lab, Backpack, and dialogs.
- `src/styles.css`: responsive source-matched design system and reduced-motion support.
- `src/remotion/`: editable scene-per-file Remotion composition using frame-driven animation and `@remotion/transitions`.
- `public/assets/`: copied user-owned source art, rendered intro, and original synthesized instrumental.
- `worker/`: static hosting worker; it is not a URL proxy and exposes no arbitrary-fetch endpoint.

## Feature status

| Feature | Status | Boundary |
| --- | --- | --- |
| Public access | Live | No app login, password, account, or child-lock requirement. |
| Avery TV text/search/URL | Live | YouTube embeds where permitted; other sites use a clear new-tab fallback. |
| Avery TV speech | Live when browser-supported | Performs a capability check and reports permission/unsupported errors. |
| Local media upload | Live | Media stays in the browser session and is not uploaded. |
| University quests | Local/demo | Included Grade 7 practice content. |
| English/grammar + Spanish/French/Mandarin/Italian | Local/demo | Included lesson plans, exercises, feedback, progress, difficulty, and read-aloud. |
| Live AI tutor | Requires provider configuration | No provider is bundled or claimed. |
| Guitar tones/timer | Live | Reference tones, not microphone tuning. |
| Creator Lab | Live/local demo | Safe arithmetic lesson, local badge export, photo keyframes, Remotion preview. |
| Backpack | Live/local | Files and notes are session-local; download/print/share use browser capabilities. |
| PS Remote Play | External official flow | Requires Sony's app, account, console, and parent oversight. |

## Media provenance and licensing

- `lounge.png`, `willie-avatar.webp`, and `icon.svg` were copied from the user-owned source site during the authorized rebuild.
- `avery-sports-intro.mp4` was rendered locally from the editable files in `src/remotion/`.
- `original-clubhouse-theme.wav` was synthesized locally by `tools/generate-music.mjs`; it contains no commercial recording.
- The intro contains no broadcast footage, commercial music, or implied team/player endorsement. `public/licensed-media-slots/README.md` explains how to add licensed clips later.

## Remotion

```powershell
pnpm run remotion:studio
pnpm run remotion:render
```

The composition is 1920×1080 at 30 fps; the committed web MP4 is rendered at 960×540 for efficient playback.

## Deployment

Run `pnpm run build` and `pnpm run test:sites`. Any static host can serve `dist/client`; SPA fallback should return `index.html`. Do not add an authentication gate unless the owner later requests one.

## Safety

The app never proxies arbitrary URLs, stores secrets, or pretends external sites can always be embedded. External results are not age-filtered. Parent Corner explains account, privacy, and provider boundaries.
