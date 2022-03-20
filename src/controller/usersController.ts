import { Request, Response, Router } from 'express';
import { userService } from "../service/userService"

export const userController = Router()

userController.get("/", (req: Request, res: Response) => res.send('bateu na rota/users/'))
userController.post("/", (req: Request, res: Response) => userService.CreateUser(req, res))
