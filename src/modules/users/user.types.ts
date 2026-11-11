export type UserRole = "admin" | "manager" | "employee" | "customer";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  password: string;
  role: UserRole;
  isActive: boolean;
  createdAt: string;
}

export type CreateUserInput = Omit<User, "id" | "role" | "isActive" | "createdAt">;
