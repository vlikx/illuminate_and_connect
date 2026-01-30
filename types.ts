export interface RegistrationFormData {
  firstName: string;
  lastName: string;
  email: string;
  organization?: string;
}

export interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  terms?: string;
}