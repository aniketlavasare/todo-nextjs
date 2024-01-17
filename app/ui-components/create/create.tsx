import Link from "next/link";
import { Circle, X, Check } from "react-feather";
import { Redirect } from "next";
import { redirect } from "next/navigation";
import { createTask } from "@/app/lib/data";

export default function CreateBox() {
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