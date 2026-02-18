Project overview

Purpose :- This automation suite performs end-to-end UI testing of the Leave and Recruitment modules in the OrangeHRM application. It validates critical workflows to ensure leave requests and recruitment processes function correctly and provide a reliable user experience.

Test Specifications
The framework includes two main test files:
leave.spec.ts – Tests leave application workflows including leave type selection, date entry, and submission verification.
recruitment.spec.ts – Tests recruitment workflows such as vacancy creation, filtering, hiring manager selection, and result verification.

Test Workflow
Login: Authenticates user access.
Navigation: Navigates to Leave and Recruitment modules.
Form Interaction: Handles inputs, dropdowns, and date pickers.
Selection Handling: Selects values from dynamic dropdowns and autocomplete fields.
Submission & Validation: Submits forms and verifies confirmation messages and status updates.
Search Verification: Applies filters and validates search results.


Tools and Technologies
Test framework: Playwright (@playwright/test).
Language: TypeScript
Config: playwright.config.ts for test settings and projects.
Package manager: npm.

Prerequisites -
Playwright-supported version.
npm
Network: Access to https://opensource-demo.orangehrmlive.com.
Credentials:  Username Admin, Password admin123.
Git: optional for repo operations.

Setup Steps -
Clone the repo:
git clone https://github.com/jipthk/playwright-project.git
cd playwright-project
Install dependencies:
npm ci (or npm install)
Install Playwright browsers:
npx playwright install
Verify files present: see leave.spec.ts and recruitment.spec.ts.

Test Execution Steps -
Run the full suite: npx playwright test
Run a single spec: npx playwright test tests/leave.spec.ts
Run with headed browser and debug: npx playwright test --headed --debug
Generate HTML report: npx playwright show-report
Common options: Use --grep / -g to run matching tests, --retries to retry flaky tests.

Assumptions / Limitations - 
Repo currently uses demo credentials; do not commit any real credentials.
Exisiting data changes frequently.
When executing the test case, the data might not be available or the system shows No records found.