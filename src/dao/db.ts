import { Pool } from 'pg';

function init() {
    try {
        return new Pool({
            database: 'postgres',
            host: process.env.ATABEY_URL,
            port: parseInt(process.env.ATABEY_DB_PORT),
            user: process.env.ATABEY_MASTER_U,
            password: process.env.ATABEY_MASTER_P
        })
    } catch (e) {
        console.log(e);
    }
}

export const db = init();
