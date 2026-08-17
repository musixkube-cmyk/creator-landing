# MusicOSY — SEO Pages

Next.js conversion of the MusicOSY SEO landing pages. These pages supplement
the core MusicOSY application — they are not a standalone app.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** component primitives

## Pages

| Route             | Purpose                                                  |
| ----------------- | -------------------------------------------------------- |
| `/`               | Homepage — platform overview                             |
| `/about`          | About MusicOSY                                           |
| `/ads-business`   | Ads & business partnerships                              |
| `/careers`        | Open roles                                               |
| `/contact`        | Contact routing                                          |
| `/creators`       | For creators — release, market, get paid                 |
| `/developers`     | API documentation                                        |
| `/distribution`   | In-house distribution                                    |
| `/fans`           | For fans — listen, follow, support                       |
| `/get-app`        | App availability                                         |
| `/help`           | Support center                                           |
| `/news`           | Platform updates                                         |
| `/podcast`        | Podcast network                                          |
| `/signup`         | Account creation                                         |
| `/stream`         | Streaming surface                                        |
| `/sync`           | Sync licensing                                           |

Each page has a function-specific CTA button in the top header that routes
visitors into the main MusicOSY application. Update the `cta.href` values in
each `src/app/*/page.tsx` to point to your actual application URL.

## Develop

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Build

```bash
npm run build
npm start
```
