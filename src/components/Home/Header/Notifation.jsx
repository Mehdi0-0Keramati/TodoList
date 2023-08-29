import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as NotifationIcon } from "../../../assets/bell.svg";
import { TasksActions } from "../../../Store/Slices/tasks-slice";

const Notification = () => {
  const dispatch = useDispatch();
  const notificationOn = useSelector((state) => state.notificationOn);
  return (
    <section className="relative ">
      <button onClick={() => dispatch(TasksActions.notificationOn())}>
        <NotifationIcon className="w-6" />
      </button>

      {notificationOn && (
        <div className="absolute top-10 right-0 w-44 text-sm flex justify-center items-center flex-col h-auto py-2 pl-1 rounded-lg border border-textColor bg-thirdBg">
          There are no Notification
        </div>
      )}
    </section>
  );
};

export default Notification;
