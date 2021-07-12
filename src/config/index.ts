import dotenv from 'dotenv'
dotenv.config()

const config = {
    DEV: process.env.NODE_ENV !== 'production',
    PORT: process.env.PORT || 3000,
    CORS: process.env.CORS,
    JWT_SECRET: process.env.AUTH_JWT_SECRET,
    DATABASE_URL: process.env.DATABASE_URL
  };

  export default config