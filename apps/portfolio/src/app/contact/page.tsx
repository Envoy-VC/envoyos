import { ContactForm } from "./components";

const ContactPage = () => {
  return (
    <div className="mx-auto my-[20dvh] flex w-full max-w-2xl flex-col gap-6 px-4">
      <div className="text-center font-formula text-5xl uppercase tracking-wider sm:text-6xl md:text-7xl">
        Let's make
        <br />
        something great
      </div>
      <p className="mx-auto max-w-lg text-center text-base text-muted-foreground md:text-lg">
        For project enquiries please fill the form below to start a discussion.
        Happy to connect on{" "}
        <a className="font-medium text-primary" href="#socials">
          socials
        </a>{" "}
        for anything else.
      </p>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
