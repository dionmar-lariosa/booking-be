import { readFileSync } from "node:fs";
import { join } from "node:path";

import type { User, CreateUserInput } from "./user.types.js";

const filePath = join(process.cwd(), "src/data/users.json");

const users: User[] = JSON.parse(readFileSync(filePath, "utf-8"));

export const getUsers = (): User[] => {
  return users;
};

export const getUserById = (id: number): User | undefined => {
  return users.find((user) => user.id === id);
};

export const createUser = (input: CreateUserInput): User => {
  const user: User = {
    id: Math.max(0, ...users.map((user) => user.id)) + 1,
    ...input,
    isActive: true,
    createdAt: new Date().toISOString()
  };

  users.push(user);

  return user;
};
