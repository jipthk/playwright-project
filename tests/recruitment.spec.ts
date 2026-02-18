import {test, expect} from "@playwright/test";

test.beforeEach(async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com');
  //await page.getByRole("textbox", { name: "Username" }).click();
  await page.getByRole("textbox", { name: "Username" }).fill("Admin");
  //await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
})

test('recruitment list', async ({ page}) =>{
await page.getByRole("link", { name: /Recruitment/i}).click();
await page.getByRole("link", {name: /Candidates/i}).click();
await page.waitForURL("**/recruitment/viewCandidates**")

await expect(page.getByRole("table")).toBeVisible();

//To ensure the vacancy and candidate title
await expect(page.getByRole('columnheader', {name: /Vacancy/i})).toBeVisible();
await expect(page.getByRole('columnheader', {name: /Candidate/i})).toBeVisible();
});

test('search functionality', async ({page}) =>{

  //To ensure search functionality correctly
await page.getByRole("link", { name: /Recruitment/i}).click();
await page.getByRole("link", {name: /Candidates/i}).click();
await page.waitForURL("**/recruitment/viewCandidates**");

const vacancyDropdown = page.locator(
  '.oxd-input-group:has(label:has-text("Vacancy"))'
);

await vacancyDropdown.click();
await page.locator('.oxd-select-option', { hasText: 'Senior QA Lead' }).click();

const searchBtn = page.getByText('Search');
await searchBtn.click();
});

test('add new candidate', async ({page}) =>{

  //create a new candidates
await page.getByRole("link", { name: /Recruitment/i}).click();
await page.getByRole("button", {name: /Add/i}).click();
await page.waitForURL("**/recruitment/addCandidate**");

const firstName = page.getByPlaceholder('First Name')
await firstName.fill('test');
const middleName = page.getByPlaceholder('Middle Name')
await middleName.fill('demo');
const lastName = page.getByPlaceholder('Last Name')
await lastName.fill('tech');

const vacancyDropdown = page.locator('.oxd-input-group:has(label:has-text("Vacancy"))')

await vacancyDropdown.click();
await page.locator('.oxd-select-option',{ hasText: 'Payroll Administrator'}).click();

const emailInput = page.locator('.oxd-input-group:has(label:has-text("Email")) input');
await emailInput.fill('admin@example.com');

await page.getByRole('button', {name: /Save/i}).click();


});

