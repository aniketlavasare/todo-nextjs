const { Client } = require('pg');
require('dotenv').config();

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
};

export async function connectToDatabase() {
    const client = new Client(config);

    await client.connect();
    console.log('Connected to database')
}

export async function disconnectDatabase() {
    const client = new Client(config);

    await client.end();
    console.log('Connection Closed');
}

async function seedTasks(client) {
    const tasks = [
        { description: 'Laundry', status: 'pending', date_completed: '2022-01-12 08:00:00' },
        { description: 'Complete Homework', status: 'pending', date_completed: null },
        { description: 'Watch so stuff', status: 'completed', date_completed: '2022-01-12 08:00:00' },
        { description: 'Kill the monster under the bed', status: 'pending', date_completed: null },
        { description: 'Go to La La Land', status: 'completed', date_completed: '2022-01-12 08:00:00' },
        { description: 'Deal with the devil', status: 'pending', date_completed: null },
        // Dummy Tasks
      ];
}