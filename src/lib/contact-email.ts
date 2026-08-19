/** Public inbox for contact & careers forms. */
export const CONTACT_EMAIL = "contact@remparia.com";

/** Destination inbox for form submissions (server-side). */
export function getContactToEmail() {
  return process.env.CONTACT_TO_EMAIL?.trim() || CONTACT_EMAIL;
}

/** Verified Resend sender (must match a domain verified in Resend). */
export function getContactFromEmail() {
  return (
    process.env.CONTACT_FROM_EMAIL?.trim() ||
    `Remparia <${CONTACT_EMAIL}>`
  );
}
