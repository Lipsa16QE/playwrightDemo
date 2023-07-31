# Framework & E2E tests

- JS naming conventions [./docs/js-naming-conventions.md](https://basarat.gitbook.io/typescript/styleguide)

### Projects covered with E2E tests(used in configuration):

- DemoBlaze

### System requirements

- Docker for allure reports(optional)

### Installation

- `npm install`

### Usage

1. Create our .env file from .env.example
2. Complete the project and environment
3. Optionally `docker-compose up -d` It will spin up docker containers for local Allure reports, reports will be automatically generated every 40seconds(configured in `docker-compose.yml`)
   1. add to .env your local allure server url and set it as true
4. `npm run test` All tests within selected project on selected environment in Chrome(by default) browser.

### Run locally

Sometimes it is helpful to run e2e test suite againts your balanced server locally, one needs to properly config e2e as follow.

1. Create a new .env file and overwrite with these values:

```
PROJECT=DemoBlaze
TEST_ENVIRONMENT=demo1
```

2. Open file `urls.ts` and update `demo1.website` with `https://www.demoblaze.com/index.html`

3. Run command

```
npx playwright test --trace on --workers 1
```

_Note_: If one find tests run too slow, speed it up by:

- Increasing number of workers running concurrently (eg. `--workers 4`).
- Decreasing slow motion by editing field `slowMo` in file `project.config.ts`.

Beware speeding up may cause more flakiness from tests.
