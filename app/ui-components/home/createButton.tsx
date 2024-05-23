import { Plus } from "react-feather";
import Link from "next/link";

export default function CreateButton({status,setCreate }: {status : boolean, setCreate: React.Dispatch<React.SetStateAction<boolean>>}) {
    return(
        
        <button onClick={()=>{setCreate(!status)}} className=" bg-zinc-300 rounded-md cursor-pointer flex flex-row justify-center mt-2 h-6 w-full">
            <Plus className="text-black"/>
        </button>
    );
}