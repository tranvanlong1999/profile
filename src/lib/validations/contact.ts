import * as z from 'zod';

import { emailSchema } from './email';
import { asStringRequired, validationMessages } from './validation.utility';

export const contactSchema = z.object({
  name: asStringRequired(z.string().min(1, validationMessages.required('Name'))),
  email: emailSchema.shape.email,
  subject: asStringRequired(z.string().min(1, validationMessages.required('Subject'))),
  message: asStringRequired(z.string().min(1, validationMessages.required('Message'))),
});

export type ContactSchema = z.infer<typeof contactSchema>;
