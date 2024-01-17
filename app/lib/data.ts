"use server";
import { Redirect } from "next";
import { redirect } from "next/navigation";



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

export async function createTask( data : FormData){

    "use server";

    const { Client } = require('pg');
    require('dotenv').config();


    const config = {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
    };

    const client  = new Client(config);

    const title = data.get('title')?.valueOf();

    if (typeof title !== "string" || title.length === 0){
        throw new Error("Invalid Title")
    }

    try {

        await client.connect();

        const query = {
            text: 'INSERT INTO tasks(description, status) VALUES($1, $2)',
            values: [title, 'pending'],
          };
    
          await client.query(query);

        await client.end();
        
        redirect("/dashboard/home");
        
    }catch (error) {
        console.error('Error adding the task:', error);
        throw error;
    }

}

export async function deleteTask(id : string) {

    "use server";

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
    
    try{
        await client.connect();

        await client.query(`
        UPDATE tasks
        SET status = 'pending'
        WHERE id = ${id};
        `);

        await client.end()
    }catch (error) {
        console.error('Error Deleting:', error);
        throw error;
    }
}