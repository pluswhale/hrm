export type VacanciesExperienceProps = {
    experiences: Experience[];
};

export type ExperienceItemProps = {
    experience: any;
};

export type Experience = {
    id: number;
    experience: string;
    company_name: string;
    job_title: string;
    company_url: string;
    company_url_name: string;
    responsibilities_and_achievements: string[];
};

