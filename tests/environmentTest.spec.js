import { test,expect } from "../src/fixtures/pages.fixtures";

test('testenvdemo',async ({homePage})=>
{
    await homePage.launchPage();
})