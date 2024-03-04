import {test as setup, expect} from "@playwright/test";
import { envSchema } from "../envSchema";
require("dotenv").config();

const authFile = ".auth/user.json";
setup("authenticate", async ({ page }) => {
    // Validate the environment variables
    const validatedEnv = envSchema.parse(process.env);
    // Go to the base URL defined in the environment variables
    await page.goto(validatedEnv.BASE_URL);
    // Fill login information and submit
    await page.getByLabel('Username or email').fill(validatedEnv.TEST_USER);
    await page.getByLabel('Password').fill(validatedEnv.SECRET_PASSWORD);
    await page.keyboard.press('Enter');
    // Verify page loads and image is seen
    await expect(page.getByRole('heading')).toContainText('Welcome');
    // Save the state of the browser
    await page.context().storageState({ path: authFile });

}) 