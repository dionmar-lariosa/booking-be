export type UserRole = "admin" | "manager" | "employee" | "customer";

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  isActive: boolean;
  createdAt: string;
}

export interface CreateUserInput {
  name: string;
  email: string;
  role: UserRole;
}
