import { TasksActions } from "../Store/Slices/tasks-slice";
import { useDispatch } from "react-redux";

const AddTaskButtonBox = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(TasksActions.popupOn())}
      className="h-64 w-full border border-dashed border-textColor rounded-lg hover:bg-slate-300 hover:dark:bg-secondBg"
    >
      Add new task
    </button>
  );
};

export default AddTaskButtonBox;
