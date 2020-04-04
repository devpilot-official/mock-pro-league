import dotenv from 'dotenv';

dotenv.config();

const env = {
    app_name: process.env.APP_NAME || 'Mock-League-API',
    app_url: process.env.APP_URL,
    port: Number(process.env.PORT),
    redis_url: process.env.REDIS_URL,
    mongodb_url: String(process.env.MONGODB_URL),
    node_env: process.env.NODE_ENV || 'development',
    salt_rounds: Number(process.env.SALT_ROUNDS) || 10
};

export default env;