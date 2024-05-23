'use client';
import Link from "next/link";
import { Circle, X, Check } from "react-feather";
import { Redirect } from "next";
import { redirect } from "next/navigation";
import { createTask } from "@/app/lib/data";
import { useState } from "react";

export default function CreateBox({status,setCreate,handleCreate }: {status : boolean, setCreate: React.Dispatch<React.SetStateAction<boolean>>, handleCreate: (title: string)=> void} ) {
    const [title, setTitle] = useState('');

    if(status){
        return(
            <div>
                <div className=" flex flex-row border-2 rounded-md p-4 w-full justify-between ">
                <div className=" flex flex-row">
                <Circle className='w-4 mr-4 '/>
                <input type="text"  className=" bg-transparent border-none h-full outline-none" name="title" autoFocus value={title} onChange={(e) => setTitle(e.target.value)}></input>
                </div>
                <div className="flex flex-row">
                <button onClick={()=>{setCreate(!status)}}><X className=' w-4 mr-4 '/></button>
                <button type="submit" onClick={() => {handleCreate(title); setTitle('')}}><Check className='w-4 mr-4 '/></button>
                </div>
                </div>
            </div>
        );
    }
    else{
        return null;
    }
}