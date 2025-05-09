import { z } from "zod";

const urlSchema = z.object({
  originalUrl: z
    .string()
    .trim()
    .min(1, "URL is required")
    .url("Please enter a valid URL"),
});

export default urlSchema;
