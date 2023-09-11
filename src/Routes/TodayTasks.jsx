import React from "react";
import { useSelector } from "react-redux";
import BaseRouteTasks from "./BaseRouteTasks";

const TodayTasks = () => {
  const tasks = useSelector((state) => state.tasks);

  const TodayTasksData = tasks?.map((task) => (task.isToday ? task : null));

  const TodayCountTasks = [];
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].isToday == true) {
      TodayCountTasks.push(tasks[i]);
    }
  }

  const TasksTitle = `Today's ${
    TodayCountTasks.length > 1
      ? `tasks (${TodayCountTasks.length})`
      : `task (${TodayCountTasks.length})`
  }`;

  return <BaseRouteTasks tasksTitle={TasksTitle} tasksData={TodayTasksData} />;
};

export default React.memo(TodayTasks);
