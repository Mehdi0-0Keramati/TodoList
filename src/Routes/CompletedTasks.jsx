import React from "react";
import { useSelector } from "react-redux";
import BaseRouteTasks from "./BaseRouteTasks";

const CompletedTasks = () => {
  const tasks = useSelector((state) => state.tasks);

  const CompletedTasksData = tasks?.map((task) =>
    task.isCompleted ? task : null
  );

  const CompletedCountTasks = [];
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].isCompleted == true) {
      CompletedCountTasks.push(tasks[i]);
    }
  }

  const TasksTitle = `Completed ${
    CompletedCountTasks.length > 1
      ? `tasks (${CompletedCountTasks.length})`
      : `task (${CompletedCountTasks.length})`
  }`;

  return (
    <BaseRouteTasks tasksTitle={TasksTitle} tasksData={CompletedTasksData} />
  );
};

export default React.memo(CompletedTasks);
