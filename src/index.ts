import express from 'express';
import { OK } from "http-status-codes";
import env from './config/env';
import { connect, disconnect } from './db';

const app = express();
const port = env.port;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const start = async () => {
    try {
        await connect();   
        console.log("Database started");
    } catch (error) {
        console.log(error.message);
    }
}

app.get('/', (req, res) => { 
    res.json({
        message: "Welcome to Mock Pro League API",
        author: "Muhammed Saifudeen Salaudeen",
        status: OK
    });
});

app.post('/', (req, res) => {
    res.json({
        data: req.body.name
    });
})

const log_message = {
    app_name: env.app_name,
    port,
    environment: env.node_env
};

app.listen(port, async () => {
    await start();
    console.log(log_message);
});