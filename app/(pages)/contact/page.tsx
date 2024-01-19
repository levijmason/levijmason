"use client";

import { ContactForm } from "@/app/ui/features/contact-form";
import { sendContactEmail } from "@/lib/emails/";

const PLACEHOLDER = {
  name: "Peter Gregory || Founder",
  email: "peter.gregory@raviga.capital",
  message:
    "Have any of you ever eaten at a 'Burger King'? I'd like to acquire one, but I'm told they're impossible to acquire.",
};

export default function Contact() {
  return (
    <section className="w-full flex flex-col space-y-14">
      <div className="flex flex-col space-y-4">
        <h2 className="text-4xl font-bold pb-4 pt-8">
          Interested in getting in touch? 🤝
        </h2>
        <p>
          Feel free to reach out using the form below, and I&apos;ll get back to
          you as soon as possible!
        </p>
      </div>
      <ContactForm action={sendContactEmail} placeholders={PLACEHOLDER} />
    </section>
  );
}
