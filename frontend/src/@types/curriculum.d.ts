export interface Curriculum {
  personalInfo: PersonalInfo;
  _id?: string;
  user_id?: string;
  objective?: string;
  professional_experience?: ProfessionalExperience[];
  education?: Education[] | undefined;
  skills?: Skill[] | undefined;
  courses?: Course[];
  certifications?: Certification[];
  languages?: Language[];
}

export interface PersonalInfo {
  birth_date?: string;
  nationality?: string;
  cpf?: string;
  marital_status?: string;
  gender_identity?: string;
  pronouns?: string;
  sexual_orientation?: string;
  ethnicity?: string;
  disabilities?: string;
  about?: string;
}

export interface ProfessionalExperience {
  company: string;
  country: string;
  job_title: string;
  start_date: string;
  end_date: string;
  job_description: string;
  _id: string;
}

export interface Education {
  institution?: string;
  country?: string;
  level?: string;
  field_of_study?: string;
  start_date?: string;
  end_date?: string;
  _id?: string;
}

export interface Skill {
  skill_name: string;
  experience_level: string;
  _id: string;
}

export interface Course {
  courseName: string;
  institution: string;
  country: string;
  startDate: string;
  endDate: string;
  _id: string;
}

export interface Certification {
  certificationName: string;
  institution: string;
  country: string;
  startDate: string;
  endDate: string;
  _id: string;
}

export interface Language {
  language: string;
  proficiency: string;
  _id: string;
}
