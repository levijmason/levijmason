"use server";

import { resend } from "@/lib/emails/client";
import { ContactEmail } from "@/ui/emails";

export async function sendContactEmail({
  name,
  message,
  email,
}: {
  name: string;
  message: string;
  email: string;
}) {
  const data = await resend.emails.send({
    from: "LJM Contact <hey@levijmason.dev>",
    to: ["levijackmason@gmail.com"],
    reply_to: email,
    bcc: ["levi@levijmason.dev", "levi@tripthe.fan"],
    subject: `A message from ${name}`,
    react: ContactEmail({
      name,
      email,
      message,
    }),
    text: `Hey Levi!
          You got a message from ${name} (${email}): 
          ${message}`,
  });
  if (data.error) {
    throw new Error(`ERROR: ${data.error.name}, ${data.error.message}`);
  }

  return data.data;
}
