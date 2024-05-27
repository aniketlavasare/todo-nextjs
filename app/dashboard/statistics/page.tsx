import ProgressCard from "@/app/ui-components/progress/progress-card";
import { getProgressData } from "@/app/lib/data";

export default async function Statistics () {

    const {
        pendingCount,
        completedCount,
      } = await getProgressData();

    return (
    <div className="flex flex-col gap-4">
    <div className="flex flex-row justify-around">
       <ProgressCard title={"Tasks Completed"} value={completedCount} placeholder={"View All"} link={"/dashboard/history"} />
       <ProgressCard title={"Tasks Pending"} value={pendingCount} placeholder={"View All"} link={"/dashboard/home"}/>
    </div>
    <div className="bg-zinc-300 rounded-md cursor-pointer flex flex-row justify-center text-black w-full h-12 text-lg"><button>Set Target</button></div>
    </div>
    );
}