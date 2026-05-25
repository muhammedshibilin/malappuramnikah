import { Request, Response } from "express";
import { RegisterUser } from "../../applications/use-cases/user/registerUser.usecase";
import { LoginUser } from "../../applications/use-cases/user/LoginUser.usecase";
import { SendOtpUseCase } from "../../applications/use-cases/user/SentOtp.usecase";

export class UserController {
  constructor(
    private loginUser: LoginUser,
    private registerUser: RegisterUser,
    private sendOtp: SendOtpUseCase,
    private getAllUsers: any
  ) {}

  async register(req: Request, res: Response) {
    console.log(req.body, "re body");

    try {
      console.log("Request body:", req.body);
      const user = await this.registerUser.execute(req.body);
      console.log("User from use case:", user);

      const phoneNumber = req.body.mobile_number;
      await this.sendOtp.execute(phoneNumber);

      return res
        .status(200)
        .json({ success: true, message: "Registration successful", user });
    } catch (error: any) {
      console.error("Error during registration:", error);
      
      let message = "Registration failed";
      if (error.code === 'P2002' || (error.message && error.message.includes('Unique constraint failed'))) {
        message = "Mobile number already exists. Please log in instead.";
      } else if (error.message) {
        message = error.message;
      }

      return res
        .status(400)
        .json({ success: false, message });
    }
  }

  async login(req: Request, res: Response): Promise<Response> {
    try {
      console.log("Request Body:", req.body);

      const { status, message, token, refreshToken } =
        await this.loginUser.execute({
          mobile_number: req.body.mobile_number,
          password: req.body.password,
        });

      res.cookie("refresh_token", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      return res.status(200).json({
        status,
        message,
        token,
      });
    } catch (error: any) {
      console.error("Error:", error.message);
      return res.status(400).json({
        success: false,
        message: error.message || "Login failed",
      });
    }
  }

  async getProfiles(req: Request, res: Response): Promise<Response> {
    try {
      const users = await this.getAllUsers.execute();
      return res.status(200).json({ success: true, users });
    } catch (error: any) {
      console.error("Error fetching users:", error);
      return res.status(500).json({ success: false, message: "Failed to fetch users" });
    }
  }
}
