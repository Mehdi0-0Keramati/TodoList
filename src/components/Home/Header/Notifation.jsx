import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as NotifationIcon } from "../../../assets/bell.svg";
import { TasksActions } from "../../../Store/Slices/tasks-slice";
import { NavLink } from "react-router-dom";

const Notification = () => {
  const dispatch = useDispatch();
  const notificationOn = useSelector((state) => state.notificationOn);
  const tasks = useSelector((state) => state.tasks);

  let totdayUnCompletedTasks = [];

  for (let i = 0; i <= tasks.length; i++) {
    if (tasks[i]?.isCompleted == false && tasks[i]?.isToday == true) {
      totdayUnCompletedTasks.push(tasks[i]);
    }
  }

  window.onclick = (e) => {
    if (!e.target.matches("#notifBTN")) {
      notificationHandler(false);
    } else {
      notificationHandler(true);
    }
  };

  function notificationHandler(status) {
    dispatch(TasksActions.notificationOn(status));
  }

  return (
    <section id="notification" className="relative">
      {totdayUnCompletedTasks.length > 0 && (
        <span className="absolute w-2 h-2 bg-red-500 rounded-full"></span>
      )}

      <button className="relative w-6 h-6">
        <div
          id="notifBTN"
          className="w-full h-full absolute top-0 left-0 z-10"
        ></div>

        <NotifationIcon className="w-full absolute top-0 left-0 z-0" />
      </button>

      {notificationOn && (
        <div className="absolute top-10 right-0 w-44 text-sm flex justify-center items-center flex-col h-auto py-2 pl-1 rounded-lg border border-textColor bg-lightSecondBg dark:bg-thirdBg">
          {totdayUnCompletedTasks.length <= 0 ? (
            "There Are No Notification"
          ) : (
            <h6 className="font-semibold mb-3">
              You have {totdayUnCompletedTasks.length} uncompleted tasks today:
            </h6>
          )}

          <ol className="list-decimal">
            {totdayUnCompletedTasks.map((task) => (
              <li className="hover:text-blue-300" key={task.id}>
                <NavLink className="" to={`tasks/${task.id}`}>
                  {task.title}
                </NavLink>
              </li>
            ))}
          </ol>
        </div>
      )}
    </section>
  );
};

export default Notification;
