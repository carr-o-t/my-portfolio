import { z } from "zod";

export const contactSchema = z.object({
  full_name: z.string().min(1, "Name is required"),
  email: z.string().email(),
  message: z.string().min(1, {
    message: "Message is required",
  }),
});
