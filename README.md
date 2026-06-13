# Playwright Test Automation Framework

This is a small test automation project built with Playwright and TypeScript.
It includes a few UI tests and one API test, with simple page objects and test data split into separate files.

## What is covered

- Login tests for valid and invalid users
- A basic home page check
- A simple API check against a public test endpoint
- Tests that run in Chromium, Firefox, and WebKit

## Project files

- `tests/ui/` - UI tests
- `tests/api/` - API tests
- `pages/` - page objects
- `test-data/` - test input data
- `playwright.config.ts` - Playwright setup

## Tech used

- Playwright
- TypeScript
- Node.js

## How to run

Install the packages:

```bash
npm install
```

Run the tests:

```bash
npx playwright test
```

Open the report:

```bash
npx playwright show-report
```

## Notes
- The repo is kept simple on purpose so it is easy to learn from and expand later
