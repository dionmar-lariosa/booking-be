import UserRepository from "./user.repository.js";
import type { CreateUserInput } from "./user.types.js";

const UserService = {
  getUsers: () => {
    return UserRepository.getUsers();
  },
  getUserById: (id: string) => {},
  createUser: (input: CreateUserInput) => {}
};
export default UserService;
