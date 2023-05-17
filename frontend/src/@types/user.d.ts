export interface UserProps {
  name: string;
  email: string;
  phone: string;
  address: string;
  cep: string;
  city: string;
  state: string;
  job: string;
  password: string | undefined;
  confirm_password: string | undefined;
}
