# Repository Guidelines

## Project Structure and Module Organization

VVSA-frontend is an Angular 17 application. The entry point is `src/main.ts`. Application providers live in `src/app/app.config.ts`, and lazy-loaded routes are defined in `src/app/app.routes.ts`. Keep the main menu in `src/app/main-page/` and transaction views in `src/app/basic-accounts/`. Put API calls in `src/app/api/`, shared data types in `src/app/models/`, and display pipes in `src/app/utils/pipes/`. Global styles live in `src/styles.css`, and static assets belong in `src/assets/`.

## Build, Run, and Test

- Run `npm ci` from the repository root to install dependencies from `package-lock.json`.
- Run `npm start` and open `http://localhost:4200/` for local development.
- For transaction flows, run `node server.js` from the companion mock server’s `../VVSA_cvicenia_FE_mock_server/server/` directory. The Angular development server proxies `/api` to port 5000 through `proxy.conf.json`.
- Run `npm run build` to verify the production build. Output goes to `dist/vvsa-frontend/`.
- Run `npm test` for watch mode or `npm test -- --watch=false --browsers=ChromeHeadless` for a single Karma run with Chrome available.

## Coding Style and Testing

Follow `.editorconfig` with two-space indentation, UTF-8, and a final newline. Use single quotes in TypeScript. Use kebab-case filenames and Angular suffixes such as `transactions-list.component.ts` and `transactions.service.ts`. Keep component templates and styles beside their TypeScript files. Use relative `/api` URLs so local requests go through the development proxy.

Keep Jasmine specs next to the code they cover as `*.spec.ts`. When changing transaction behavior, verify that **Basic account** opens the transaction list and that expanding a row loads its details with the mock API running.

## Commits and Pull Requests

Keep commits focused and use short, descriptive subjects such as `Fix transaction detail loading`. In pull requests, summarize the affected flow, list the checks you ran, and attach screenshots for visible changes. Note any mock API or configuration changes reviewers need to reproduce the behavior.
