import mongoose, { Connection } from 'mongoose';
import env from './config/env';



export const connect = async () => {
    let connection: Connection;
    await mongoose.connect(env.mongodb_url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });

    connection = mongoose.connection
}

export const disconnect = async () => {
    await mongoose.disconnect();
}