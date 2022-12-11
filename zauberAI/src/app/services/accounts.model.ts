// model for client accounts

export interface Account {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
    created_at: string;
    updated_at: string;
}