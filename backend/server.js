const express = require('express');
const pool = require('./db');
const app = express();
const PORT = 3000;

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