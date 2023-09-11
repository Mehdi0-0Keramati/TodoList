import React from "react";
import { AddTaskButtonBox } from "../Layout/index";
import Task from "./Task";
import { useSelector } from "react-redux";
import BaseRouteTasks from "./BaseRouteTasks";

const AllTasks = () => {
  const tasks = useSelector((state) => state.tasks);

  const AllTasksData = tasks?.map((task) => task);
  const TasksTitle = `All ${
    tasks.length > 0 ? `tasks (${tasks.length})` : `task (${tasks.length})`
  }`;

  return <BaseRouteTasks tasksTitle={TasksTitle} tasksData={AllTasksData} />;
};

export default React.memo(AllTasks);
