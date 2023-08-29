import React from "react";
import { useDispatch } from "react-redux";
import { TasksActions } from "../Store/Slices/tasks-slice";

import { ReactComponent as DateIcon } from "../assets/date.svg";
import { ReactComponent as ImportantIcon } from "../assets/star-line.svg";
import { ReactComponent as TrashIcon } from "../assets/trash.svg";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-between w-full h-64 bg-lightSecondBg dark:bg-secondBg darK:bg-secondBg rounded-lg gap-2 p-4">
      <div>
        <h3 className="font-semibold text-mainBg dark:text-lightMainBg darK:text-white">
          {task.title || "Title"}
        </h3>
        <p className="line-clamp-4">{task.description || "Description"}</p>
      </div>

      <div>
        <div className="flex items-center justify-start gap-2">
          <DateIcon className="w-6" />
          <time>{task.date || "date"}</time>
        </div>

        <hr className="my-2 border-1 border-textColor border-dashed" />
        <div className="flex justify-between gap-x-1 p-3">
          <button
            onClick={() => dispatch(TasksActions.isCompleted(task.id))}
            className={`${
              task.isCompleted
                ? "text-green-800 bg-green-200"
                : "text-yellow-800 bg-yellow-200"
            } font-semibold px-4 py-1 rounded-2xl `}
          >
            {task.isCompleted ? "Completed" : "UnCompleted"}
          </button>

          <button
            onClick={() => dispatch(TasksActions.isImportant(task.id))}
            className={`${task.isImportant && "text-red-600"} ml-auto`}
          >
            <ImportantIcon className="w-6" />
          </button>
          <button onClick={DeleteTask}>
            <TrashIcon className="w-6" />
          </button>
        </div>
      </div>
    </div>
  );
  function DeleteTask() {
    const sure = confirm("Are you Sure wanna delete this task??");
    sure && dispatch(TasksActions.removeTask(task.id));
  }
};

export default React.memo(Task);
