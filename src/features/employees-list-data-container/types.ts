export type EmployeesDataContainerProps = {
    employees: Employee[];
};

type Employee = {
    id: number;
    imageSrc: string;
    first_name: string;
    last_name: string;
    sub_position: SubPosition;
    is_dismissed: boolean;
    key_skills: KeySkill[];
};

export type KeySkill = {
    id: number;
    name: string;
};

export type SubPosition = {
    id: number;
    title: string;
};

