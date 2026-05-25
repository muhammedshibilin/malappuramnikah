import jwt, { JwtPayload, Secret, SignOptions } from 'jsonwebtoken';

export interface TokenConfig {
  secret: string;
  expiresIn: string; 
  algorithm?: jwt.Algorithm; 
}

export class AuthService {
  static generateToken(payload: object, config: TokenConfig): string {
    const { secret, expiresIn, algorithm = 'HS256' } = config;
    const options: SignOptions = {
      expiresIn: expiresIn as any, 
      algorithm,
    };

    return jwt.sign(payload, secret as Secret, options);
  }

  static verifyToken(token: string, secret: string): JwtPayload | string {
    try {
      return jwt.verify(token, secret as Secret);
    } catch (error) {
      throw new Error('Invalid or expired token');
    }
  }

  static decodeToken(token: string): null | JwtPayload | string {
    return jwt.decode(token);
  }
}
