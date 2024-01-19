import * as React from "react";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmail: React.FC<Readonly<ContactEmailProps>> = ({
  name,
  email,
  message,
}: ContactEmailProps) => (
  <section>
    <h1>Hey Levi!</h1>
    <strong>
      You got a message from {name} ({email}):
    </strong>
    <br />
    <div>
      <p>{message}</p>
    </div>
  </section>
);
