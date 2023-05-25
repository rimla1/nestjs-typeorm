export type CreateUserParams = {
    username: string,
    password: string,
}

export type UpdateUserParams = {
    username: string,
    password: string,
}

export type CreateProfileParams = {
    first_name: string
    last_name: string
    age: number
    dob: string
}