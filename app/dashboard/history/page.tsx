import Task from "@/app/ui-components/home/task";
import { Circle } from "react-feather";
import Create
 from "@/app/ui-components/home/createButton";

 import { getCompletedTasks} from "@/app/lib/data";

export default async function History () {
    const tasks = await getCompletedTasks();
    return (
    <>
    <div className="flex flex-col gap-3">
        {tasks.map((task) => {
            return(
            // {console.log(task.description)}
            // {console.log(task.id)}
            <div key={task.id}>
            <Task title={task.description} type="history"/>
          </div>
            )
        })}
      
    </div>
    </>
    );
}