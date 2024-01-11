import { Plus } from "react-feather";

export default function Create() {
    return(
        <div className=" bg-zinc-300 rounded-md cursor-pointer flex flex-row justify-center mt-2 h-6 ">
            <button>
            <Plus className="text-black"/>
            </button>
        </div>
    );
}