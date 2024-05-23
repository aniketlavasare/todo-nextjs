import { redirect } from "next/navigation";

export default function ProgressCard({title, value, placeholder} : {title: string, value: number | string, placeholder: string}) {
    return(
        <div className="flex flex-col justify-center items-center h-auto border-2 rounded-md p-4">
            <div className="text-2xl">{title}</div>
            <div className=" text-8xl mx-20 my-14">{value}</div>
            <div className="bg-zinc-300 rounded-md cursor-pointer flex flex-row justify-center text-black w-full h-8 text-lg"><button>{placeholder}</button></div>
        </div>
    );
}