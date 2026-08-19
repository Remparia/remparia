export type ContactFormValues = {
  name: string;
  company: string;
  email: string;
  message: string;
};

export type ContactField = keyof ContactFormValues;

export type ContactFormErrors = Partial<Record<ContactField, string>>;

/** Consumer / free-mail domains — contact form accepts professional addresses only. */
const BLOCKED_EMAIL_DOMAINS = new Set([
  "aol.com",
  "bbox.fr",
  "free.fr",
  "gmail.com",
  "gmx.com",
  "gmx.fr",
  "googlemail.com",
  "hotmail.co.uk",
  "hotmail.com",
  "hotmail.fr",
  "icloud.com",
  "laposte.net",
  "live.com",
  "live.fr",
  "mac.com",
  "mail.com",
  "mail.ru",
  "me.com",
  "msn.com",
  "neuf.fr",
  "orange.fr",
  "outlook.com",
  "outlook.fr",
  "pm.me",
  "proton.me",
  "protonmail.com",
  "sfr.fr",
  "tuta.io",
  "tutanota.com",
  "wanadoo.fr",
  "yahoo.co.uk",
  "yahoo.com",
  "yahoo.fr",
  "ymail.com",
  "yandex.com",
]);

const EMAIL_RE =
  /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i;

const NAME_RE = /^[\p{L}\p{M}\s'.-]{2,120}$/u;

export function normalizeContactInput(values: ContactFormValues): ContactFormValues {
  return {
    name: values.name.trim().replace(/\s+/g, " "),
    company: values.company.trim().replace(/\s+/g, " "),
    email: values.email.trim().toLowerCase(),
    message: values.message.trim().replace(/\r\n/g, "\n"),
  };
}

export function emailDomain(email: string) {
  const at = email.lastIndexOf("@");
  if (at < 0) return "";
  return email.slice(at + 1).toLowerCase();
}

export function isProfessionalEmail(email: string) {
  if (!EMAIL_RE.test(email)) return false;
  const domain = emailDomain(email);
  if (!domain || BLOCKED_EMAIL_DOMAINS.has(domain)) return false;
  return true;
}

type ValidationCopy = {
  nameRequired: string;
  nameInvalid: string;
  companyRequired: string;
  companyInvalid: string;
  emailRequired: string;
  emailInvalid: string;
  emailPersonal: string;
  messageRequired: string;
  messageTooShort: string;
  messageTooLong: string;
};

export function validateContactForm(
  raw: ContactFormValues,
  copy: ValidationCopy,
): { values: ContactFormValues; errors: ContactFormErrors; valid: boolean } {
  const values = normalizeContactInput(raw);
  const errors: ContactFormErrors = {};

  if (!values.name) {
    errors.name = copy.nameRequired;
  } else if (!NAME_RE.test(values.name)) {
    errors.name = copy.nameInvalid;
  }

  if (!values.company) {
    errors.company = copy.companyRequired;
  } else if (values.company.length < 2) {
    errors.company = copy.companyInvalid;
  } else if (values.company.length > 160) {
    errors.company = copy.companyInvalid;
  }

  if (!values.email) {
    errors.email = copy.emailRequired;
  } else if (!EMAIL_RE.test(values.email)) {
    errors.email = copy.emailInvalid;
  } else if (BLOCKED_EMAIL_DOMAINS.has(emailDomain(values.email))) {
    errors.email = copy.emailPersonal;
  }

  if (!values.message) {
    errors.message = copy.messageRequired;
  } else if (values.message.length < 20) {
    errors.message = copy.messageTooShort;
  } else if (values.message.length > 5000) {
    errors.message = copy.messageTooLong;
  }

  return {
    values,
    errors,
    valid: Object.keys(errors).length === 0,
  };
}

export function getContactFormApiError(values: ContactFormValues): string | null {
  const v = normalizeContactInput(values);

  if (!v.name || !NAME_RE.test(v.name)) return "invalid_name";
  if (!v.company || v.company.length < 2 || v.company.length > 160) {
    return "invalid_company";
  }
  if (!v.email || !EMAIL_RE.test(v.email)) return "invalid_email";
  if (BLOCKED_EMAIL_DOMAINS.has(emailDomain(v.email))) return "personal_email";
  if (!v.message || v.message.length < 20 || v.message.length > 5000) {
    return "invalid_message";
  }
  return null;
}

export function apiErrorToField(error: string | undefined): ContactField | null {
  switch (error) {
    case "invalid_name":
      return "name";
    case "invalid_company":
      return "company";
    case "invalid_email":
    case "personal_email":
      return "email";
    case "invalid_message":
      return "message";
    default:
      return null;
  }
}
