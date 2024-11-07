export interface IUserData {
    username: string;
    fullName: string
    email: string;
    address: string;
    password: string;
    phone: string;
}
// phone?: its mean that is optional 

export interface IFormInput {
    label: string,
    type:string,
    id:string,
    name:keyof IUserData,
}