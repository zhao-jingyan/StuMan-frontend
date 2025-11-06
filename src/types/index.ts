export interface UserInfo {
    id: string;
    name: string;
    nickname: string;
    role: string;
    password: string;
    class: string;
}

export interface LoginInfo {
    id: string;
    role: string;
    password: string
}

export interface ClassInfo {
    id: string;
    count: number;
}