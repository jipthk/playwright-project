Project overview :-

Purpose :- This automation suite performs end-to-end UI testing of the Leave and Recruitment modules in the OrangeHRM application. It validates critical workflows to ensure leave requests and recruitment processes function correctly and provide a reliable user experience.

Test Specifications :-
The framework includes two main test files:
1.leave.spec.ts – Tests leave application workflows including leave type selection, date entry, and submission verification.
2.recruitment.spec.ts – Tests recruitment workflows such as vacancy creation, filtering, hiring manager selection, and result verification.

Test Workflow -:
1.Login: Authenticates user access.
2.Navigation: Navigates to Leave and Recruitment modules.
3.Form Interaction: Handles inputs, dropdowns, and date pickers.
4.Selection Handling: Selects values from dynamic dropdowns and autocomplete fields.
5.Submission & Validation: Submits forms and verifies confirmation messages and status updates.
6.Search Verification: Applies filters and validates search results.


Tools and Technologies :-
1.Test framework: Playwright (@playwright/test).
2.Language: TypeScript
3.Config: playwright.config.ts for test settings and projects.
4.Package manager: npm.

Prerequisites -
1.Playwright-supported version.
2.npm
3.Network: Access to https://opensource-demo.orangehrmlive.com.
4.Credentials:  Username Admin, Password admin123.
5.Git: optional for repo operations.

Setup Steps -
1.Clone the repo:
2.git clone https://github.com/jipthk/playwright-project.git
3.cd playwright-project
4.Install dependencies:
5.npm ci (or npm install)
6.Install Playwright browsers:
7.npx playwright install
8.Verify files present: see leave.spec.ts and recruitment.spec.ts.

Test Execution Steps -
1.Run the full suite: npx playwright test
2.Run a single spec: npx playwright test tests/leave.spec.ts
3.Run with headed browser and debug: npx playwright test --headed --debug

Assumptions / Limitations :- 
1.Repo currently uses demo credentials; do not commit any real credentials.
2.Exisiting data changes frequently.
3.When executing the test case, the data might not be available or the system shows No records found.