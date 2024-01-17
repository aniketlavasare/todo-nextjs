import Task from "@/app/ui-components/home/task";
import { Circle } from "react-feather";
import CreateButton from "@/app/ui-components/home/createButton";

 import { getPendingTasks} from "@/app/lib/data";

export default async function Home () {
    const tasks = await getPendingTasks();
    return (
    <>
    <div className="flex flex-col gap-3">
        {tasks.map((task) => {
            return(
            // {console.log(task.description)}
            // {console.log(task.id)}
            <div key={task.id}>
            <Task title={task.description} type="home" id={task.id}/>
          </div>
            )
        })}
      
    </div>
    <CreateButton />
    </>
    );
}