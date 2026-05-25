export interface IOtpRepository {
    saveOtp(otp: string, phoneNumber: string, expiresIn: number): Promise<void>;
    getOtp(phoneNumber: string): Promise<string | null>;
    deleteOtp(phoneNumber: string): Promise<void>;
  }
  