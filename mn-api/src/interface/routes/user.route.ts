import express, { Request, Response } from "express";
import { UserController } from "../controllers/user.controller";
import { UserRepository } from "../../infrastructure/repositories/UserRepository";
import { LoginUser, RegisterUser } from "../../applications/use-cases";
import { SendOtpUseCase } from "../../applications/use-cases/user/SentOtp.usecase";
import { GetAllUsers } from "../../applications/use-cases/user/GetAllUsers.usecase";
import { OtpRepository } from "../../infrastructure/repositories/OtpRepository";


const user_route = express.Router();
const userRepository = new UserRepository();
const otpRepository = new OtpRepository();
const registerUser = new RegisterUser(userRepository);
const loginUser = new LoginUser(userRepository)
const sendOtp = new SendOtpUseCase(otpRepository)
const getAllUsers = new GetAllUsers(userRepository)
const userController = new UserController(
loginUser,
registerUser,
sendOtp,
getAllUsers
);

user_route.post('/register', async (req: Request, res: Response) => { await userController.register(req, res)});
user_route.post('/login',async (req:Request,res:Response) => {await userController.login(req,res)})
user_route.get('/profiles', async (req: Request, res: Response) => { await userController.getProfiles(req, res)});


export default user_route;