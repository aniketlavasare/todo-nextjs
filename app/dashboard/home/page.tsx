'use client';
import Task from "@/app/ui-components/home/task";
import { Circle } from "react-feather";
import CreateButton from "@/app/ui-components/home/createButton";

import { getPendingTasks, deleteTask} from "@/app/lib/data";

import React, {useState, useEffect} from 'react';

export default function Home () {

    const [tasks, setTasks] = useState<{ id: string; description: string; }[]>([]);

    useEffect(() => {
        const fetchData = async () =>{
            const fetchedTasks = await getPendingTasks();
            setTasks(fetchedTasks);
        };
        fetchData();
    }, []);

    const handleDelete = async (id: string): Promise<void> => {
        await deleteTask(id);
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    }
    // const tasks = await getPendingTasks();
    return (
    <>
    <div className="flex flex-col gap-3">
        {tasks.map((task) => {
            return(
            // {console.log(task.description)}
            // {console.log(task.id)}
            <div key={task.id}>
            <Task title={task.description} type="home" id={task.id} handleDelete={handleDelete}/>
          </div>
            )
        })}
      
    </div>
    <CreateButton />
    </>
    );
}