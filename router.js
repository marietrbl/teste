const { Route } = require("express/lib/router")
import { userController } from "./controller/userController";
import { userService } from "../service/userService";

export const router = Router()
router.use("/users", )