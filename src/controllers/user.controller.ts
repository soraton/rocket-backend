import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export const getUsers = async (_req: Request, res: Response) => {
  const users = await UserService.getAll();
  res.json(users);
};

export const createUser = async (req: Request, res: Response) => {
  const { name } = req.body;
  const user = await UserService.create(name);
  res.status(201).json(user);
};