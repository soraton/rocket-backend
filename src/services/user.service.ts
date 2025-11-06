import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";

const userRepo = AppDataSource.getRepository(User);

export const UserService = {
  getAll: () => userRepo.find(),
  create: (name: string) => userRepo.save({ name }),
};
