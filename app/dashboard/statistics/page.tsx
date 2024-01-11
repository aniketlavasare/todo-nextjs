import ProgressCard from "@/app/ui-components/progress/progress-card";

export default function Statistics () {
    return (
    <div className="flex flex-col gap-4">
    <div className="flex flex-row justify-around">
       <ProgressCard title={"Tasks Completed"} value={"07"} placeholder={"View All"}/>
       <ProgressCard title={"Tasks Pending"} value={"07"} placeholder={"View All"}/>
    </div>
    <div className="bg-zinc-300 rounded-md cursor-pointer flex flex-row justify-center text-black w-full h-12 text-lg"><button>Set Target</button></div>
    </div>
    );
}