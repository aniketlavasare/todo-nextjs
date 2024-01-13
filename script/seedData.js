const { Client } = require('pg');
require('dotenv').config();


const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
};

const client = new Client(config);

async function connectToDatabase(client) {
    await client.connect();
    console.log('Connected to database')
}

async function disconnectDatabase(client) {
    await client.end();
    console.log('Connection Closed');
}

async function seedTasks(client) {
    const tasks = [
      { description: 'Laundry', status: 'pending', date_completed: '2022-01-12 08:00:00' },
      { description: 'Complete Homework', status: 'pending', date_completed: null },
      { description: 'Watch some stuff', status: 'completed', date_completed: '2022-01-12 08:00:00' },
      { description: 'Kill the monster under the bed', status: 'pending', date_completed: null },
      { description: 'Go to La La Land', status: 'completed', date_completed: '2022-01-12 08:00:00' },
      { description: 'Deal with the devil', status: 'pending', date_completed: null },
      // Dummy Tasks
    ];
  
    try {
      await client.query(`
        CREATE TABLE IF NOT EXISTS tasks (
          id SERIAL PRIMARY KEY,
          description VARCHAR(255) NOT NULL,
          status VARCHAR(20) NOT NULL,
          date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          date_completed TIMESTAMP
        );
      `);
  
      console.log('Created "tasks" table');
    } catch (error) {
      console.error('Error creating "tasks" table:', error);
      throw error;
    }
  
    try {
      const insertedTasks = await Promise.all(
        tasks.map(async (task) => {
          await client.query(`
            INSERT INTO tasks (description, status, date_created, date_completed)
            VALUES ($1, $2, $3, $4)
          `, [task.description, task.status, new Date(), task.date_completed]);
        })
      );
  
      console.log(`Seeded ${insertedTasks.length} tasks`);
      return insertedTasks;
    } catch (error) {
      console.error('Error seeding tasks:', error);
      throw error;
    }
  }
    
async function main(client) {
    try {
        await connectToDatabase(client);
        await seedTasks(client);
    } finally {
        await disconnectDatabase(client);
    }
}

main(client).catch((err) => {
    console.error('An error occurred while attempting to seed the database:', err);
});

module.exports = {
    connectToDatabase,
    disconnectDatabase,
}