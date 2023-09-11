import { TasksActions } from "../../../Store/Slices/tasks-slice";
import { useDispatch } from "react-redux";
import userPic from "../../../assets/avatar-1.jpg";

const SidebarToggleBtn = () => {
  const dispatch = useDispatch();

  return (
    <section className="block xl:hidden">
      <button
        className="w-10"
        onClick={() => dispatch(TasksActions.sidebarOn())}
      >
        <img className="w-full rounded-full" src={userPic} alt="user pic" />
      </button>
    </section>
  );
};

export default SidebarToggleBtn;
