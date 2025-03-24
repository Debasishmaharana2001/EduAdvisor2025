import * as z from "zod";

export const consultationFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name cannot exceed 50 characters" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .regex(/^[0-9()\-\s+]*$/, { message: "Please enter a valid phone number" }),
  program: z
    .string()
    .min(1, { message: "Please select a program" }),
  message: z
    .string()
    .max(500, { message: "Message cannot exceed 500 characters" })
    .optional(),
});

export type ConsultationFormValues = z.infer<typeof consultationFormSchema>;