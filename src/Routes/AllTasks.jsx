import React from "react";
import { AddTaskButtonBox } from "../Layout/index";
import Task from "./Task";
import { useSelector } from "react-redux";

const AllTasks = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <section className="mt-10 w-full h-full text-textColor">
      <h1 className="text-2xl font-semibold dark:text-white">
        All tasks ({tasks.length} tasks)
      </h1>

      <section className="grid grid-cols-3 place-items-center  gap-8 mt-20">
        {tasks?.map((task) => (
          <Task key={task.id} task={task} />
        ))}

        <AddTaskButtonBox />
      </section>
    </section>
  );
};

export default React.memo(AllTasks);
