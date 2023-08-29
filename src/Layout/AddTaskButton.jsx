import { useDispatch } from "react-redux";
import { TasksActions } from "../Store/Slices/tasks-slice";

const AddTaskButton = ({ classN }) => {
  const dispatch = useDispatch();
  return (
    <button
      className={`${classN} mx-auto block bg-red-500 hover:bg-red-600 rounded-md text-white`}
      onClick={() => dispatch(TasksActions.popupOn())}
    >
      Add new Task
    </button>
  );
};

export default AddTaskButton;
