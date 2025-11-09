import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Html,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

import { purposeOfContact } from "@/data";
import type { ContactInfo } from "@/lib/schema/contact";

import { tailwindConfig } from "./tailwind.config";

export const ContactEmail = ({
  firstName,
  lastName,
  company,
  email,
  message,
  purpose,
}: ContactInfo) => {
  const previewText = `New message from ${firstName} ${lastName}`;
  const purposeText =
    purposeOfContact.find((p) => p.id === purpose)?.label ?? "Other";

  return (
    <Html>
      <Head />
      <Tailwind config={tailwindConfig}>
        <Body className="bg-white font-geist">
          <Preview>{previewText}</Preview>
          <Container className="mx-auto w-[580px] max-w-full py-5 pb-12">
            <Text className="mb-6 font-semibold text-2xl">⌘ envoyos</Text>

            {/* Name & Company */}
            <Section>
              <Row>
                <Column className="w-1/2 pr-1">
                  <Text className="font-bold text-[#484848] text-[16px] leading-[1.3]">
                    Name
                  </Text>
                  <Text className="rounded-lg bg-[#f2f3f3] px-4 py-2 text-[#484848] text-lg leading-[1.4]">
                    {firstName} {lastName}
                  </Text>
                </Column>

                <Column className="w-1/2 pl-1">
                  <Text className="font-bold text-[#484848] text-[16px] leading-[1.3]">
                    Company
                  </Text>
                  <Text className="rounded-lg bg-[#f2f3f3] px-4 py-2 text-[#484848] text-lg leading-[1.4]">
                    {company}
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Email & Purpose */}
            <Section>
              <Row>
                <Column className="w-1/2 pr-2">
                  <Text className="font-bold text-[#484848] text-[16px] leading-[1.3]">
                    Email
                  </Text>
                  <Text className="rounded-lg bg-[#f2f3f3] px-4 py-2 text-[#484848] text-lg leading-[1.4]">
                    {email}
                  </Text>
                </Column>

                <Column className="w-1/2 pl-2">
                  <Text className="font-bold text-[#484848] text-[16px] leading-[1.3]">
                    Purpose
                  </Text>
                  <Text className="rounded-lg bg-[#f2f3f3] px-4 py-2 text-[#484848] text-lg leading-[1.4]">
                    {purposeText}
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section>
              <Text className="font-bold text-[#484848] text-[16px] leading-[1.3]">
                Message
              </Text>
              <Text className="whitespace-pre-wrap rounded-lg bg-[#f2f3f3] px-4 py-2 text-[#484848] text-lg leading-[1.4]">
                {message}
              </Text>
            </Section>

            {/* CTA */}
            <Section className="text-center">
              <Button
                className="block rounded-2xl bg-primary px-8 py-3 text-center text-[18px] text-white no-underline"
                href={`mailto:${email}`}
                style={{
                  color: "#fff",
                }}
              >
                Reply to this message
              </Button>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

ContactEmail.PreviewProps = {
  company: "Pied Piper",
  email: "richard@piedpiper.com",
  firstName: "Richard",
  lastName: "Hendricks",
  message: `I'm interested in your product. I've been using it for a few weeks and I really like it. I'd love to get a review.
    
Regards,
Richard`,
  purpose: "integration",
} as ContactInfo;

ContactEmail.tailwindConfig = tailwindConfig;

// biome-ignore lint/style/useComponentExportOnlyModules: safe
// biome-ignore lint/style/noDefaultExport: safe
export default ContactEmail;
