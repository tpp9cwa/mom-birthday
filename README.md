# A little world, just for Mom

Version 0.3: a complete first iteration with sample content. Minimal opening → animated heart envelope → letter → softly revealed menu. Separate garden, memories, and compliments pages. Gentle original synthesized music, keyboard/touch movement, accessible flower list, local discovery progress, and reduced-motion styling.

## Run on your laptop

Install Node.js 22 or later. Unzip this folder, open a terminal in it, and run:

```sh
npm run dev
```

Open http://localhost:5173. There are no application dependencies to install. This is an ES-module project; opening index.html by double-clicking will not work correctly. The server is for local development only.

Phone/tablet: connect to the same Wi-Fi as your laptop, then open `http://YOUR-LAPTOP-LAN-IP:5173`. On macOS the Wi-Fi details show your IP address. Allow the Node local-network/firewall prompt if asked. Your laptop must remain on for this local preview. The deployed website runs independently.

## Personalize

Edit `src/content.js`. Everything is sample copy: replace the letter, signature, compliments, flower messages, and memory captions.

- Put your photos in `public/assets/`, then update `memories[].image` and `alt`. Use appropriately resized JPEG/WebP photos. The sample SVG scenes are original placeholders, not family photos.
- Add another memory object to the memories array; navigation adapts automatically.
- Add another flower with a unique permanent `id`, `x` between 10–90 and `y` between 20–80. Positions are percentages. Space flowers apart. Do not change IDs once shared if you want discovered progress preserved.
- Add compliments to the array.
- Set `music.file` to `/assets/your-song.mp3` to use music you have permission to share; otherwise the included original synthesized melody plays. Music starts on the first tap. The music control appears with the menu after the letter opens. Browser audio permission or silent-mode behavior can still require an additional tap on that control.
- Change colors/spacing in `src/style.css`. The handwriting uses device-local handwriting fonts, so its appearance varies by operating system; a licensed self-hosted font can be added later for exact consistency.
- Change the avatar illustration in `src/pages/garden.js`.
- The sample-photo notice is in `src/pages/memories.js`; remove it when your real photos replace the illustrations.

The opening plays on a fresh visit to `/`. `/#letter` goes straight to the letter; other routes are `/#garden`, `/#memories`, and `/#compliments`. Reload `/` to replay the opening. Garden discoveries persist in that browser when local storage is available, not across devices.

## GitHub → Cloudflare Workers

This project uses Cloudflare Workers static assets, keeping your laptop → GitHub → Cloudflare workflow. It does not need the server-rendered framework used by your earlier projects. There is no account or deployed project attached yet.

1. Create a new private GitHub repository and push this folder to `main`. Keep photos/content you plan to publish in the project; never add tokens, `.env` secrets, or private keys.
2. In Cloudflare, create/import a Worker from that GitHub repository and select `main` as the production branch.
3. Worker name: `a-little-world-for-mom`, matching `wrangler.jsonc`. If you choose another name, update both.
4. Root: repository root. Build command: `npm run build`. Deploy command: `npx wrangler deploy`. Use Node 22 or later. Wrangler is resolved by npx during deployment; for a reproducible CLI version later, install a tested Wrangler version as a devDependency and commit the package-lock.
5. First test the Cloudflare-provided address. Pushes to the configured production branch build and deploy subsequent changes.
6. Buy your domain at Namecheap when ready. Add the domain to your Cloudflare account, update its nameservers at Namecheap to those assigned by Cloudflare, and attach a Custom Domain under the Worker's settings/domains. Domain registration stays with Namecheap. If the domain already has email/DNS records, preserve them during that setup.

For manual deployment from your laptop, `npm run deploy` builds and invokes Wrangler; you will need Cloudflare authentication. It is optional when Git deployments are configured.

Official reference: https://developers.cloudflare.com/workers/static-assets/
Git deployments: https://developers.cloudflare.com/workers/ci-cd/builds/
Custom domains: https://developers.cloudflare.com/workers/configuration/routing/custom-domains/

## Architecture / adding things later

```text
src/content.js          editable content, stable IDs
src/data.js             async repository adapter and local progress
src/app.js              page registry, navigation, shared music lifetime
src/pages/              independent page modules with cleanup functions
src/garden-logic.js     movement bounds and proximity, independent of UI
src/music.js            audio engine; swappable file source
public/assets/          illustrations, photos, optional audio/fonts
```

Pages call the async repository rather than fetching content directly. To add a sticky-notes feature later, add a notes page module, register it in `app.js`, and add repository methods for loading notes. A Cloudflare Worker API and durable storage can then sit behind those methods. An SMS provider/webhook would belong on that server side, with sender verification, authentication, validation, and private provider credentials—not in browser code. No SMS, phone-number linkage, webhook, note ingestion, database, or simulated inbox is implemented in this version. There is no reason to pay for an SMS number now.

For future API routes, add a Worker entrypoint and an assets binding to the Wrangler config; keep API routing separate from the static page modules. Do not put credentials in `src/content.js` or anything in `dist`.

## Checks and limitations

```sh
npm test
npm run build
npm run preview
```

Tests cover garden bounds, nearby interaction selection, and reachability/IDs for current flower content. Source syntax, module imports, and output assets are checked during delivery. This version has not had real browser/device QA in the creation environment. Verify envelope timing, music startup, dialog behavior, keyboard controls, tap-to-walk, portrait/landscape layouts, and reduced motion on your actual devices before gifting it.

This first iteration is local and not published. A private GitHub repository does not make the deployed website private: access protection would be a separate decision before publishing personal photos.


## Updating from 0.1

Copy the updated `src` folder into your existing project. Keep your existing `src/content.js` if you have already personalized it; the gift works with the old content file too. Keep your existing `public/assets` photos and music. Copy the updated tests as well if you use them. No dependency installation or Cloudflare settings changes are needed.

The gift box now appears at the end of the letter. Tap it to lift its lid and reveal the year-long revisit message. To customize that wording, optionally add `gift: { message: 'your message' }` inside the exported content object. This is a message only; actual availability depends on keeping the deployment and domain active.

Compliment messages shuffle without repeats until all messages have been shown, then shuffle again without a consecutive repeat at the cycle boundary. There is no visible total, counter, or completion notice. Add any number of entries to `compliments` in `src/content.js`. The garden discovery count and completion announcement are also removed; visited flower markers are retained.

After copying the update, run `npm run dev` to check it, then commit and push to your existing repository:

```sh
git add .
git commit -m "Add animated gift and endless-feeling messages"
git push
```


## Version 0.3: your 18 photos

This is the full project with all previous updates included. Add `pic1.jpg` through `pic18.jpg` to `public/assets/`. File names and capitalization must match exactly on Cloudflare. The gallery loads these in numeric order and displays every photo whole, preserving its proportions. Blank captions are hidden; there are no photo or message counters. Sample illustrations are no longer used.

If replacing an existing local project, retain your existing `.git` folder and copy the new project files into that same repository folder. Keep any personalized content separately before replacing `src/content.js`; this package still contains sample letter/compliment text. No reinstall or Cloudflare configuration change is needed. Add the photos, run `npm run dev` to check locally, then commit and push as usual.
