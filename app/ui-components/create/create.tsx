import Link from "next/link";
import { Circle, X, Check } from "react-feather";
import { Redirect } from "next";
import { redirect } from "next/navigation";

export default function CreateBox() {

    async function createTask( data : FormData){
        'use server';
    
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
            
            redirect("/dashboard/home")
            
        }catch (error) {
            console.error('Error adding the task:', error);
            throw error;
        }
    
    }
    return(
        <div>
            <form className=" flex flex-row border-2 rounded-md p-4 w-full justify-between " action={createTask}>
            <div className=" flex flex-row">
            <Circle className='w-4 mr-4 '/>
            <input type="text" className=" bg-transparent border-none h-full outline-none" name="title"></input>
            </div>
            <div className="flex flex-row">
            <Link href={'/dashboard/home'}><X className=' w-4 mr-4 '/></Link>
            <button type="submit"><Check className='w-4 mr-4 '/></button>
            </div>
            </form>
        </div>
    );
}