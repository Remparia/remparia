export type ContactFormValues = {
  name: string;
  company: string;
  email: string;
  message: string;
};

export type ContactField = keyof ContactFormValues;

export type ContactFormErrors = Partial<Record<ContactField, string>>;

export const EMAIL_RE =
  /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i;

export const NAME_RE = /^[\p{L}\p{M}\s'.-]{2,120}$/u;

const CITY_RE = /^[\p{L}\p{M}\d\s'./+-]{2,120}$/u;

const LINKEDIN_RE =
  /^(https?:\/\/)?(www\.)?linkedin\.com\/(in|pub|company)\/[\w%-]+\/?/i;

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

export function isValidEmail(email: string) {
  return EMAIL_RE.test(email);
}

type ValidationCopy = {
  nameRequired: string;
  nameInvalid: string;
  companyRequired: string;
  companyInvalid: string;
  emailRequired: string;
  emailInvalid: string;
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
      return "email";
    case "invalid_message":
      return "message";
    default:
      return null;
  }
}

export type CareersIdentityValues = {
  name: string;
  email: string;
  linkedin: string;
  city: string;
  role: string;
};

export type CareersIdentityField = keyof CareersIdentityValues;

export type CareersIdentityErrors = Partial<
  Record<CareersIdentityField, string>
>;

export type CareersIdentityCopy = {
  nameRequired: string;
  nameInvalid: string;
  emailRequired: string;
  emailInvalid: string;
  linkedinInvalid: string;
  cityRequired: string;
  cityInvalid: string;
  roleRequired: string;
};

export function normalizeCareersIdentity(
  values: CareersIdentityValues,
): CareersIdentityValues {
  return {
    name: values.name.trim().replace(/\s+/g, " "),
    email: values.email.trim().toLowerCase(),
    linkedin: values.linkedin.trim(),
    city: values.city.trim().replace(/\s+/g, " "),
    role: values.role.trim(),
  };
}

export function validateCareersIdentity(
  raw: CareersIdentityValues,
  copy: CareersIdentityCopy,
): {
  values: CareersIdentityValues;
  errors: CareersIdentityErrors;
  valid: boolean;
} {
  const values = normalizeCareersIdentity(raw);
  const errors: CareersIdentityErrors = {};

  if (!values.name) {
    errors.name = copy.nameRequired;
  } else if (!NAME_RE.test(values.name)) {
    errors.name = copy.nameInvalid;
  }

  if (!values.email) {
    errors.email = copy.emailRequired;
  } else if (!EMAIL_RE.test(values.email)) {
    errors.email = copy.emailInvalid;
  }

  if (values.linkedin && !LINKEDIN_RE.test(values.linkedin)) {
    errors.linkedin = copy.linkedinInvalid;
  }

  if (!values.city) {
    errors.city = copy.cityRequired;
  } else if (!CITY_RE.test(values.city)) {
    errors.city = copy.cityInvalid;
  }

  if (!values.role) {
    errors.role = copy.roleRequired;
  }

  return {
    values,
    errors,
    valid: Object.keys(errors).length === 0,
  };
}

export function getCareersIdentityApiError(
  values: CareersIdentityValues,
): string | null {
  const v = normalizeCareersIdentity(values);
  if (!v.name || !NAME_RE.test(v.name)) return "invalid_name";
  if (!v.email || !EMAIL_RE.test(v.email)) return "invalid_email";
  if (v.linkedin && !LINKEDIN_RE.test(v.linkedin)) return "invalid_linkedin";
  if (!v.city || !CITY_RE.test(v.city)) return "invalid_city";
  if (!v.role) return "invalid_role";
  return null;
}
