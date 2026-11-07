# cycraft.co

## Contribution Guide

Starting a new ticket:

1. Create a new branch from `main` with branch name `pr-<issue nr.>`
2. Focus development on just the task for that issue nr.
3. Open a pull request towards `main` branch

When you stop developing for the day but the task is not finished yet, be sure to:

1. Make a "WIP" commit
2. Sync with Github
3. Open a "draft" pull request from your branch towards `main`

Remember we're using `npm` (as opposed to `yarn`)

## Project setup

```
npm i
```

### Compiles and hot-reloads for development

```
npm run dev
```

## Analytics and deployment

`public/analytics.js` loads PostHog only on `cycraft.co` and `www.cycraft.co`, using cookieless pageview tracking without browser persistence, person profiles, autocapture or session recording. Set its `projectToken` to the CyCraft project's public token and enable cookieless tracking under that project's Web analytics settings. An empty token disables analytics, including loading the SDK.

Deployment is manual; this repository has no GitHub Actions deployment workflow. Run `NODE_OPTIONS=--openssl-legacy-provider npm run build`, then `firebase deploy --only hosting --project cycraft-co --account mesqueeb@gmail.com`. The build prerenders into `.presite`, which Firebase Hosting serves. Use this explicit Hosting command instead of `npm run deploy`, whose script also stages and commits all working tree changes.
