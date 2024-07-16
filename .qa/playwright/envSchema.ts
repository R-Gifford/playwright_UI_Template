import { z } from "zod";

export const envSchema = z.object({
  TEST_USERNAME: z.string(),
  TEST_PASSWORD: z.string(),
  BASE_URL: z.string(),
  AUTH_URL: z.string(),
  CLIENT_ID: z.string(),
  TOKEN: z.string(),
});
