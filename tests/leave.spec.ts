import {test, expect} from "@playwright/test";

test.beforeEach(async({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com');
  //await page.getByRole("textbox", { name: "Username" }).click();
  await page.getByRole("textbox", { name: "Username" }).fill("Admin");
  //await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();

});

test('assignleave', async({page}) => {

await page.getByRole("link", { name: /Leave/i}).click();
await page.waitForURL("**/leave/viewLeaveList**")
await page.getByRole("link", {name: /Assign Leave/i}).click();
await page.waitForURL("**/leave/assignLeave**")

// select employee
const input = page.getByPlaceholder(/Type for hints.../i);
await input.fill('john doe');

const suggestion = page.locator('.oxd-autocomplete-option');
await suggestion.first().waitFor({ state: 'visible' });
await suggestion.first().click();

const leaveDropdown = page.locator('.oxd-input-group:has(label:has-text("Leave Type"))')

await leaveDropdown.click();
await page.locator('.oxd-select-option',{ hasText: /CAN - Vacation/i}).click();

// select dates
// FROM DATE - target by label "From Date"
const fromDateLocator = page.locator('.oxd-input-group:has(label:has-text("From Date")) input[placeholder="yyyy-dd-mm"]');
await fromDateLocator.fill('2026-02-20');

// TO DATE - target by label "To Date"
const toDateLocator = page.locator('.oxd-input-group:has(label:has-text("To Date")) input[placeholder="yyyy-dd-mm"]');
await toDateLocator.fill('2026-02-22');

await page.getByRole('button', {name: /Assgin/i}).click();

//Go to myleave check wheather entry has come
await page.getByRole("link", {name: /My Leave/i}).click();
await page.waitForURL("**/leave/viewMyLeaveList**")

await expect(page.getByRole('cell', {name:/john doe/i} )).toBeVisible();

});

test('myleave', async ({page})=>{
  
await page.getByRole("link", { name: /Leave/i}).click();
await page.waitForURL("**/leave/viewLeaveList**")
await page.getByRole("link", { name: /My Leave/i}).click();
await page.waitForURL("**/leave/viewMyLeaveList**")

const leaveDropdown = page.locator('.oxd-input-group:has(label:has-text("Leave Type"))')

await leaveDropdown.click();
await page.locator('.oxd-select-option',{ hasText: /US - Vacation/i}).click();

await page.getByRole('button', {name: /Search/i}).click();

await expect(page.locator('span.oxd-text:has-text("No Records Found")')).toBeVisible();

});

