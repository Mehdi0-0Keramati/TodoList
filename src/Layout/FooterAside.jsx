import { useDispatch } from "react-redux";
import { TasksActions } from "../Store/Slices/tasks-slice";

const FooterAside = () => {
  const dispatch = useDispatch();
  return (
    <footer>
      <button onClick={DeleteAllTasks} className="mb-4">
        Delete All Tasks
      </button>
      <div className="p-4 bg-lightMainBg text-slate-500 dark:bg-thirdBg rounded-xl">
        <h5 className="text-md font-semibold">
          Created by
          <a href="https://github.com/mehdi0-0keramati">
            {" "}
            Mehdi Keramati with ♥{" "}
          </a>
        </h5>
      </div>
    </footer>
  );
  function DeleteAllTasks() {
    const sure = confirm("Are you sure wanna delete all tasks??");
    sure && dispatch(TasksActions.deleteALLTasks());
  }
};

export default FooterAside;
