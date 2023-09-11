import React from "react";
import { useSelector } from "react-redux";
import BaseRouteTasks from "./BaseRouteTasks";

const UnCompletedTasks = () => {
  const tasks = useSelector((state) => state.tasks);

  const UnCompletedTasksData = tasks?.map((task) =>
    task.isCompleted == false ? task : null
  );

  const CompletedCountTasks = [];
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].isCompleted == false) {
      CompletedCountTasks.push(tasks[i]);
    }
  }

  const TasksTitle = `UnCompleted ${
    CompletedCountTasks.length > 1
      ? `tasks (${CompletedCountTasks.length})`
      : `task (${CompletedCountTasks.length})`
  }`;

  return (
    <BaseRouteTasks tasksTitle={TasksTitle} tasksData={UnCompletedTasksData} />
  );
};

export default React.memo(UnCompletedTasks);
