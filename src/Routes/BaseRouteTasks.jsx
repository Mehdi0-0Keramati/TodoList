import { useDispatch, useSelector } from "react-redux";

import Task from "./Task";
import { AddTaskButtonBox } from "../Layout";
import { ReactComponent as View1 } from ".././assets/view-1.svg";
import { ReactComponent as View2 } from ".././assets/view-2.svg";
import { TasksActions } from "../Store/Slices/tasks-slice";

const BaseRouteTasks = ({ tasksTitle, tasksData }) => {
  const dispatch = useDispatch();
  const horizontalTasksAlign = useSelector(
    (state) => state.horizontalTasksAlign
  );

  return (
    <section className="mt-10 w-full h-full text-textColor">
      <h1 className="text-center md:text-left text-lg md:text-2xl font-semibold dark:text-white">
        {tasksTitle}
      </h1>

      <div className="flex mt-5">
        <button
          onClick={() => dispatch(TasksActions.HorizontalTasksAlign())}
          className={`${
            horizontalTasksAlign == true ? "text-red-500" : ""
          } w-6`}
        >
          <View1 />
        </button>
        <button
          onClick={() => dispatch(TasksActions.HorizontalTasksAlign())}
          className={`${
            horizontalTasksAlign == false ? "text-red-500" : ""
          } w-6`}
        >
          <View2 />
        </button>
      </div>

      <div
        className={`${
          horizontalTasksAlign ? "grid-cols-1" : "grid-cols-2 md:grid-cols-3"
        } grid mt-10 md:gap-8 place-items-center gap-2 text-sm lg:text-base`}
      >
        {tasksData?.map(
          (task, idx) => task !== null && <Task key={idx} task={task} />
        )}

        <AddTaskButtonBox />
      </div>
    </section>
  );
};

export default BaseRouteTasks;
