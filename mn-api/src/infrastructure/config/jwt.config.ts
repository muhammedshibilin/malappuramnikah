
export const accessTokenConfig = {
    secret: process.env.ACCESS_TOKEN_SECRET || 'access-token-secret',
    expiresIn: '15m', 
  };
  
  export const refreshTokenConfig = {
    secret: process.env.REFRESH_TOKEN_SECRET || 'refresh-token-secret',
    expiresIn: '7d', 
  };
  