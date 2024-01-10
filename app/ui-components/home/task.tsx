import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { Circle } from "react-feather";

export default function Task({index }: {index: number}){
    const Icon = Circle;
    return (
        <div className="flex flex-row border-2 rounded-md p-4 ">
            <div><Icon className='w-4 mr-4 '/></div>
            <div>Random Generated Task 0{index}</div>
        </div>
    );
}