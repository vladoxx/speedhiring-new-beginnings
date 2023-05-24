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
  jobs?: JobProps[];
}

export interface ReceivedCurriculumProps {
  user: string;
  curriculum: string;
  receivedDate: string;
}

export interface JobProps {
  job: string;
}

export interface CompanyTokenContextProps {
  jwtCompany: string;
  setJwtCompany: (jwtCompany: string) => void;
}

export interface CompanyIdContextProps {
  companyId: string;
  setCompanyId: (companyId: string) => void;
}

export interface CompanyContextProviderProps {
  children: ReactNode;
}
