export class Otp {
  constructor(
    public phoneNumber: string,
    public otpCode: string,
    public expiresIn: number = 480
  ) {}
}
