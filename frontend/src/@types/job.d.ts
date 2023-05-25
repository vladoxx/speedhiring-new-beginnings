export interface JobProps {
  jobTitle?: string;
  professionalArea?: string;
  hierarchicalLevel?: string;
  workday?: string;
  workModel?: string;
  educationLevel?: string;
  contractType?: string;
  salary?: number;
  jobDescription?: string;
  company: string;
  state?: string;
}

export interface CandidatureJobs {
  _id?: string;
  user?: string;
  curriculum?: string;
  job?: string;
}
