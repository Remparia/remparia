export async function sendMail(input: {
  subject: string;
  text: string;
  replyTo?: string;
}) {
  const to = process.env.MAIL_TO ?? "contact@remparia.com";
  const from = process.env.MAIL_FROM ?? "Remparia GED <noreply@remparia.com>";
  const resendApiKey = process.env.RESEND_API_KEY ?? "";

  if (!resendApiKey) {
    throw new Error(
      "Email non configuré. Définissez RESEND_API_KEY pour le formulaire GED.",
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: input.subject,
      text: input.text,
      reply_to: input.replyTo,
    }),
  });
  if (!response.ok) {
    const detail = await response.text();
    throw new Error(
      `Envoi email Resend échoué (${response.status}): ${detail}`,
    );
  }
  return { provider: "resend" as const };
}
