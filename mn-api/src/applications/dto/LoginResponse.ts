export interface LoginResponse{
    status:number;
    message:string,
    token?:string,
    refreshToken?:string
}