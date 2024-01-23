"use server";

import { resend } from "@/lib/emails/client";

export async function sendResumeRequest({
  name,
  message,
  email,
}: {
  name: string;
  message: string;
  email: string;
}) {
  const data = await resend.emails.send({
    from: "LJM Resume <hey@levijmason.dev>",
    to: ["levijackmason@gmail.com"],
    reply_to: email,
    bcc: ["levi@levijmason.dev", "levi@tripthe.fan"],
    subject: `Resume request from ${name}`,
    text: `Hey Levi!
          ${name} (${email}) would like to request your resume! Here's what they said: 
          ${message}`,
  });
  if (data.error) {
    throw new Error(`ERROR: ${data.error.name}, ${data.error.message}`);
  }

  return data.data;
}
