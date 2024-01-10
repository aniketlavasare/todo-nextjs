import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { Circle, XCircle, Trash2 } from "react-feather";

export default function Task({index }: {index: number}){
    const IconBullet = Circle;
    const IconRemove = Trash2;
    return (
        <div className="flex flex-row border-2 rounded-md p-4 w-full justify-between group">
            <div><IconBullet className='w-4 mr-4 '/></div>
            <div>Random Generated Task 0{index}</div>
            <div className="ml-auto  opacity-0 group-hover:opacity-100 "><IconRemove className="  w-4 text-red-500 cursor-pointer" /></div>
        </div>
    );
}