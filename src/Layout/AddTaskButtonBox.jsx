import { TasksActions } from "../Store/Slices/tasks-slice";
import { useDispatch, useSelector } from "react-redux";

const AddTaskButtonBox = () => {
  const dispatch = useDispatch();
  const horizontalTasksAlign = useSelector(
    (state) => state.horizontalTasksAlign
  );

  return (
    <button
      onClick={() => dispatch(TasksActions.popupOn())}
      className={`${
        horizontalTasksAlign ? "h-36" : "h-56 md:h-64"
      }  w-full border border-dashed border-textColor rounded-lg hover:bg-slate-300 hover:dark:bg-secondBg`}
    >
      Add new task
    </button>
  );
};

export default AddTaskButtonBox;
