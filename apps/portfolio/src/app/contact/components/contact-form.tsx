"use client";

import { useState } from "react";

import { effectTsResolver } from "@hookform/resolvers/effect-ts";
import { Loader2Icon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/text-area";
import { purposeOfContact } from "@/data";
import { sendEmail } from "@/lib/email";
import { type ContactInfo, ContactSchema } from "@/lib/schema/contact";
import { cn } from "@/lib/utils";

export const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);

  const form = useForm({
    defaultValues: {
      company: "",
      firstName: "",
      lastName: "",
      message: "",
      purpose: "blog-post",
    },
    resolver: effectTsResolver(ContactSchema),
  });

  const onSubmit = async (data: ContactInfo) => {
    try {
      setIsSending(true);
      console.log(data);
      await sendEmail(data);
      console.log("Email sent");
      setIsSending(false);
      form.reset();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form className="space-y-4 py-8" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup className="flex flex-col gap-4 md:flex-row">
        <Controller
          control={form.control}
          name="firstName"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel className="" htmlFor="form-rhf-input-first-name">
                First Name:
              </FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                autoComplete="first-name"
                id="form-rhf-input-first-name"
                placeholder="Richard"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          control={form.control}
          name="lastName"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-rhf-input-last-name">
                Last Name:
              </FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                autoComplete="last-name"
                id="form-rhf-input-last-name"
                placeholder="Hendricks"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <FieldGroup className="flex flex-col gap-4 md:flex-row">
        <Controller
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel className="" htmlFor="form-rhf-input-email">
                Email:
              </FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                autoComplete="email"
                id="form-rhf-input-email"
                placeholder="richard@piedpiper.com"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          control={form.control}
          name="company"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-rhf-input-company">Company:</FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                autoComplete="company"
                id="form-rhf-input-company"
                placeholder="Pied Piper"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <FieldGroup className="flex flex-col gap-4">
        <Controller
          control={form.control}
          name="purpose"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel className="" htmlFor="form-rhf-input-email">
                Purpose:
              </FieldLabel>
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                {purposeOfContact.map(({ id, label }, index) => {
                  const charIndex = String.fromCharCode(index + 65);
                  return (
                    <button
                      className={cn(
                        "flex h-9 w-full min-w-0 cursor-pointer flex-row items-center justify-start gap-2 rounded-lg border bg-[rgba(255,255,255,0.055)] px-3 py-1 text-base text-foreground shadow-xs outline-none transition-[color,box-shadow] selection:bg-primary selection:text-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-gray-500 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/30",
                        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
                        field.value === id
                          ? "border-primary bg-primary/5 dark:bg-primary/10"
                          : "border-input bg-[rgba(255,255,255,0.055)] dark:bg-input/30",
                      )}
                      key={id}
                      onClick={() => field.onChange(id)}
                      type="button"
                    >
                      <span
                        className={cn(
                          "flex size-5 items-center justify-center rounded-md font-bold text-sm",
                          field.value === id
                            ? "bg-primary"
                            : "bg-muted-foreground",
                        )}
                      >
                        {charIndex}
                      </span>
                      <span>{label}</span>
                    </button>
                  );
                })}
              </div>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          control={form.control}
          name="message"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-rhf-textarea-message">
                Message:
              </FieldLabel>
              <Textarea
                {...field}
                aria-invalid={fieldState.invalid}
                className="min-h-[120px]"
                id="form-rhf-textarea-message"
                placeholder="Hi, I'm interested in your product..."
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <button
        className="flex h-9 w-20 cursor-pointer items-center justify-center rounded-lg bg-primary px-3 py-1.5 font-medium text-base text-foreground shadow-sm hover:bg-primary/80 focus-visible:outline-2 focus-visible:outline-primary/50 focus-visible:outline-offset-2 disabled:cursor-not-allowed"
        type="submit"
      >
        {!isSending ? (
          "Submit"
        ) : (
          <Loader2Icon className="size-5 animate-spin" />
        )}
      </button>
    </form>
  );
};
