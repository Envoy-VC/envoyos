"use server";

import { Resend } from "resend";

import { env } from "@/env";

import { ContactEmail } from "../components/emails/contact";
import type { ContactInfo } from "./schema/contact";

const resend = new Resend(env.RESEND_API_KEY);

export const sendEmail = async (props: ContactInfo) => {
  const { data, error } = await resend.emails.send({
    from: "vedant@envoy1084.xyz",
    react: <ContactEmail {...props} />,
    subject: `New message from ${props.firstName} ${props.lastName}`,
    to: "vedant@envoy1084.xyz",
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
