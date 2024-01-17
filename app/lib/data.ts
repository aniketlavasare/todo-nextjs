import { Redirect } from "next";
import { redirect } from "next/dist/server/api-utils";

export async function getPendingTasks(){
    const { Client } = require('pg');
    require('dotenv').config();


    const config = {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
    };

    const client : typeof Client = new Client(config);

    try {

        await client.connect();

        const result = await client.query(`
        SELECT * FROM tasks
        WHERE status = 'pending';
        `)

        await client.end();
        return result.rows
    } catch (error) {
        console.error('Error fetching pending tasks:', error);
        throw error;
    }
}

export async function getCompletedTasks(){
    const { Client } = require('pg');
    require('dotenv').config();


    const config = {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
    };

    const client : typeof Client = new Client(config);

    try {

        await client.connect();

        const result = await client.query(`
        SELECT * FROM tasks
        WHERE status = 'completed';
        `)

        await client.end();
        return result.rows
    } catch (error) {
        console.error('Error fetching pending tasks:', error);
        throw error;
    }
}


export async function getProgressData(){
    const { Client } = require('pg');
    require('dotenv').config();


    const config = {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
    };

    const client : typeof Client = new Client(config);

    try {

        await client.connect();

        const completed = await client.query(`
            SELECT COUNT (id)
            FROM tasks
            WHERE status = 'completed'
          ;
        `)

        const pending = await client.query(`
            SELECT COUNT (id)
            FROM tasks
            WHERE status = 'pending'
          ;
        `)

        const completedCount = Number(completed.rows[0].count)
        const pendingCount = Number(pending.rows[0].count)
        
        await client.end();
        
        return {
            completedCount,
            pendingCount,
        };

    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

