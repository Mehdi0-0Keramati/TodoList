import { useSelector } from "react-redux";

const TaskCounter = () => {
  const tasks = useSelector((state) => state.tasks);


  return (
    <section>
      <div className="flex justify-between">
        <h5>All Tasks</h5>
        <h6>0/{tasks.length}</h6>
      </div>
      <div className="relative mt-4 w-full h-2 rounded-md bg-lightMainBg dark:bg-thirdBg overflow-hidden">
        <span className="absolute top-0 left-0 h-full bg-red-200"></span>
      </div>
    </section>
  );
  
};

export default TaskCounter;
