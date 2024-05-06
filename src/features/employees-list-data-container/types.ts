export type EmployeesDataContainerProps = {
    employees: Employee[],
}

type Employee = {
    id: number,
    imageSrc: string,
    name: string,
    role: string,
    skills: string[]
}