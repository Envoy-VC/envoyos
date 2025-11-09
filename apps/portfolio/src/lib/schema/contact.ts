import { Schema } from "effect";

export const EmailSchema = Schema.String.pipe(
  Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
  Schema.brand("Email"),
);

export const PurposeSchema = Schema.Literal(
  "blog-post",
  "integration",
  "product-development",
  "other",
).annotations({
  description: "Purpose of contact",
  identifier: "Purpose",
  message: () => "Purpose is required",
  title: "Purpose",
});

export const ContactSchema = Schema.Struct({
  company: Schema.NonEmptyString.annotations({
    description: "Company name",
    identifier: "Company",
    message: () => "Company Name is required",
    title: "Company",
  }),
  email: Schema.String.annotations({
    message: () => "Invalid Email",
  })
    .pipe(
      Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
        message: () => "Invalid Email Format",
      }),
      Schema.brand("Email"),
    )
    .annotations({
      description: "Email of the person sending the message",
      identifier: "Email",
      title: "Email",
    }),
  firstName: Schema.NonEmptyString.annotations({
    description: "Name of the person sending the message",
    identifier: "First Name",
    message: () => "First Name is required",
    title: "Name",
  }).annotations({
    message: () => "First Name is required",
  }),
  lastName: Schema.NonEmptyString.annotations({
    description: "Last name of the person sending the message",
    identifier: "Last Name",
    message: () => "Last Name is required",
    title: "Last Name",
  }),
  message: Schema.NonEmptyString.annotations({
    description: "Message to send",
    identifier: "Message",
    message: () => "Message is required",
    title: "Message",
  }),
  purpose: PurposeSchema,
});

export type PurposeOfContact = typeof PurposeSchema.Type;
export type ContactInfo = typeof ContactSchema.Type;
