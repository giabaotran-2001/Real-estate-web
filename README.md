# Real Estate Web

This repository contains a full-stack real-estate web project (React front-end + Node.js/Express back-end). It combines a client application located in `front-end/` and an API server in `back-end/` to support property listings, user authentication, and related services.

## Quick overview

- Front-end: React (Create React App)
- Back-end: Node.js, Express, Mongoose
- Purpose: Demo / internal real-estate listing platform used for development and testing

## Quickstart

Prerequisites

- Node.js (16+) and npm installed
- MongoDB accessible (local or remote)

Install and run the back-end

```powershell
cd back-end
npm install
# development (uses nodemon)
npm run dev
```

Install and run the front-end

```powershell
cd front-end
npm install
npm start
```

Open the client at [http://localhost:3000](http://localhost:3000) by default. The API server (development) commonly runs on port 5000 in this project; see the Environment section below.

## Environment / configuration

Create appropriate `.env` files for each side (there are example values in repo or configs). Important variables used in development:

- Front-end: `REACT_APP_API_URL` — the base URL for the API the client talks to.
- Back-end: `APP_PORT`, `SERVER_URL` — server listening port and base URL.

Important development note

> [!warning]
> Ports in the original template default to 3000 for both client and server. To avoid port collisions during local development the team has used port 5000 for the back-end. If you run both client and server on the same machine, ensure `REACT_APP_API_URL` (front-end) points to your back-end port, and adjust `APP_PORT` / `SERVER_URL` (back-end) accordingly.

Example: when running front-end on `localhost:3000` and back-end on `localhost:5000`, set `REACT_APP_API_URL=http://localhost:5000` in the front-end `.env`.

## Project structure (high level)

- `back-end/` — Express API, loaders, middlewares, routes, Mongoose models

- `src/app.js` — application entry for development
- `front-end/` — React client (Create React App)

## Useful scripts

Back-end (from `back-end/`)

- `npm run dev` — start in development with `nodemon` (recommended for dev)
- `npm run lint` — run ESLint checks
- `npm run prettier` — format code with Prettier

Front-end (from `front-end/`)

- `npm start` — run the development React server
- `npm run build` — create production build

## Notes for contributors and testers

- The repository contains assets and images in `front-end/public` and `front-end/src/assests/` used by the UI.
- The back-end includes Swagger and other loaders; when the server is running, API docs may be available depending on the environment and loader configuration.

## Troubleshooting

- If the client shows CORS or network errors, verify `REACT_APP_API_URL` points to the running back-end and that the back-end `APP_PORT` is correct.
- If an API or auth provider (e.g., Google/Facebook OAuth) is failing on localhost, check the configured client IDs and allowed redirect/origins for `localhost:3000` or whatever port your client uses.

## Where to look next

- Back-end: `back-end/src` for routes, controllers, and loaders
- Front-end: `front-end/src` for UI components and pages

---
