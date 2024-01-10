import Task from "@/app/ui-components/home/task";
import { Circle } from "react-feather";
import Create
 from "@/app/ui-components/home/create";
export default function Home () {
    return (
    <>
    <div className="flex flex-col gap-3">
        {Array.from({ length: 5 }, (_, i) => (
        <div key={i}>
          <Task index = {i}/>
        </div>
      ))}
      
    </div>
    <Create />
    </>
    );
}