export interface CompanyProps {
  corporate_name: string;
  sector: string;
  cnpj: string;
  email: string;
  website?: string;
  address: string;
  phone: string;
  password: string;
  confirm_password: string;
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
