import React from "react";
import { useSelector } from "react-redux";
import BaseRouteTasks from "./BaseRouteTasks";

const ImportantTasks = () => {
  const tasks = useSelector((state) => state.tasks);

  const ImportantTasksData = tasks?.map((task) =>
    task.isImportant ? task : null
  );

  const ImportantCountTasks = [];
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].isImportant == true) {
      ImportantCountTasks.push(tasks[i]);
    }
  }

  const TasksTitle = `Important ${
    ImportantCountTasks.length > 1
      ? `tasks (${ImportantCountTasks.length})`
      : `task (${ImportantCountTasks.length})`
  }`;

  return (
    <BaseRouteTasks tasksTitle={TasksTitle} tasksData={ImportantTasksData} />
  );
};

export default React.memo(ImportantTasks);
