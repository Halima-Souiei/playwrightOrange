import { url } from "inspector";
import { createBdd } from "playwright-bdd";
const { Given, When, Then } = createBdd();

//1. Missing step definition for "login.feature:3:1"
Given('Je visite le site OrangeHRM', async ({page}) => {
   await page.goto(url)
});

// 2. Missing step definition for "login.feature:4:5"
When('Je saisis le login {string}', async ({page}, Username) => {
  await page.getByPlaceholder('Username').fill(Admin);
}
// 3. Missing step definition for "login.feature:5:5"
Then('Je saisis le mot de passe {string}', async ({ page }, password) => {
    await page.getByPlaceholder('Password').fill(password);
}));

// 4. Missing step definition for "login.feature:6:5"
When('Je clique sur le bouton login', async ({page}) => {
    
    await page.getByRole('button', { name: 'Login' }).click();

});

 //5. Missing step definition for "login.feature:7:5"
 Then('Je me redirige vers la page {string}', async ({ page }, expectedUrl) => {
    await page.waitForURL(expectedUrl);
    // Optionally, you can add an assertion here to check if the URL is correct
    if (page.url() !== expectedUrl) {
        throw new Error(`Expected to be on ${expectedUrl} but was on ${page.url()}`);
        
}});