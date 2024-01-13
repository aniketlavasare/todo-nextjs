import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { Circle, XCircle, Trash2, CheckCircle, RotateCcw} from "react-feather";
import clsx from "clsx";

export default function Task({title, type} : {title : string, type: 'home' | 'history'}){
    const IconBullet = Circle;
    const IconRemove = Trash2;
    const IconComplete = CheckCircle;
    const IconUndo = RotateCcw;
    return (
        <div className="flex flex-row border-2 rounded-md p-4 w-full justify-between group">
            <div><IconBullet className='w-4 mr-4 '/></div>
            <div>{title}</div>
            <div className="ml-auto opacity-0 group-hover:opacity-100 ">
                <IconUndo className={clsx(" h-0 w-0 text-white cursor-pointer",{ 'h-4 w-4': type === "history",},)} />
                <IconComplete className={clsx(" hidden w-4 text-green-500 cursor-pointer",{ 'inline': type === "home",},)} />
                <IconRemove className="  w-4 text-red-500 cursor-pointer" /></div>
        </div>
    );
}