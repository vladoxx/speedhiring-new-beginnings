export interface JobProps {
  _id?: string;
  jobTitle?: string;
  professionalArea?: string;
  hierarchicalLevel?: string;
  workday?: string;
  workModel?: string;
  educationLevel?: string;
  contractType?: string;
  salary?: number;
  jobDescription?: string;
  email?: string;
  companyName?: string;
  companyId?: string;
  state?: string;
}

export interface JobOneProps {
  jobs?: string[];
}

export interface CandidatureJobs {
  _id?: string;
  user?: string;
  curriculum?: string;
  job?: string;
}
