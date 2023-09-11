import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Task from "./Task";

const SearchedTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const { SearchTaskId } = useParams();

  let SearchedTask = [];

  tasks.forEach((task) => {
    if (task.id == SearchTaskId) {
      return (SearchedTask = task);
    }
  });

  return (
    <section className="mt-28 w-full h-full text-textColor ">
      <div>
        <Task task={SearchedTask} />
      </div>
    </section>
  );
};

export default React.memo(SearchedTask);
