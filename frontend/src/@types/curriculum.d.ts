export interface Curriculum {
  userId?: string;
  _id?: string;
  personalInfo?: PersonalInfoProps | undefined;
  objective?: string;
  professionalExperience?: ProfessionalExperienceProps[];
  education?: EducationProps[] | undefined;
  skills?: SkillProps[] | undefined;
  courses?: CourseProps[];
  certifications?: CertificationProps[];
  languages?: LanguageProps[];
}

export interface PersonalInfoProps {
  birthDate?: string;
  nationality?: string;
  cpf?: string;
  maritalStatus?: string;
  genderIdentity?: string;
  pronouns?: string;
  sexualOrientation?: string;
  ethnicity?: string;
  disabilities?: string;
  about?: string;
}

export interface ProfessionalExperienceProps {
  company: string;
  country: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  jobDescription: string;
  _id: string;
}

export interface EducationProps {
  institution?: string;
  country?: string;
  level?: string;
  fieldOfStudy?: string;
  startDate?: string;
  endDate?: string;
  status?: string;
  _id?: string;
}

export interface SkillProps {
  skillName: string;
  experienceLevel: string;
  _id: string;
}

export interface CourseProps {
  courseName: string;
  institution: string;
  country: string;
  startDate: string;
  endDate: string;
  _id: string;
}

export interface CertificationProps {
  certificationName: string;
  institution: string;
  country: string;
  startDate: string;
  endDate: string;
  _id: string;
}

export interface LanguageProps {
  language: string;
  proficiency: string;
  _id: string;
}
