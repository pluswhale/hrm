export type User = {
    id: number,
    name: string,
    role: string,
    avatar: string,
    info: {
        contacts: UserInfoRow[],
        key: UserInfoRow[]
    },
    skills: string[],
}

type UserInfoRow = {
    label: string,
    value: any
}