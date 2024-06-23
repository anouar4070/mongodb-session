import express from "express"
import { userModel } from "../../models/user.model.js";

import * as userController from "./user.controller.js"
const userRouter = express.Router()


userRouter.get("/",userController.getAllUsers);
userRouter.post("/",userController.addUser );

userRouter.put("/",userController.updateUser );

userRouter.delete("/",userController.deleteUser );

export default userRouter;