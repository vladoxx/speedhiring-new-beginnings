export interface CompanyProps {
  _id?: string;
  corporate_name?: string;
  sector?: string;
  cnpj?: string;
  email?: string;
  description_company?: string;
  website?: string;
  address?: string;
  phone?: string;
  password?: string;
  confirm_password?: string;
  receivedCurriculums?: ReceivedCurriculumProps[];
  jobs?: string[];
}

export interface CompanyVacancyProps {
  _id?: string;
  jobs?: JobProps[];
  corporate_name?: string;
  cnpj?: string;
  email?: string;
  website?: string;
  address?: string;
  phone?: string;
  job?: string;
  receivedCurriculums?: ReceivedCurriculumProps[];
}

export interface ReceivedCurriculumProps {
  user: string;
  curriculum: string;
  receivedDate: string;
}

export interface CompanyTokenContextProps {
  jwtCompany: string;
  setJwtCompany: (jwtCompany: string) => void;
}

export interface CompanyIdContextProps {
  companyId: string;
  setCompanyId: (companyId: string) => void;
}

export interface CompanyNameContextProps {
  companyName: string;
  setCompanyName: (companyName: string) => void;
}

export interface CompanyContextProviderProps {
  children: ReactNode;
}
