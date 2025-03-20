const dotenv = require('dotenv');
const path = require('path');

const envPath = path.resolve(__dirname, '..', '.env');
dotenv.config({ path: envPath });

const { Pool } = require('pg')

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.myapp_env == 'docker' ? process.env.POSTGRES_HOST : 'localhost',
    port: 5432
});

const connectPg = async () => {
    try {
        const response = await pool.connect();
        
        if (response['_connected']) {
            console.log('Connected to PostgreSQL');
        }

    } catch (err) {
        console.error("Error connecting to PostgreSQL: ", err);
    }
};

connectPg();

module.exports = pool;
