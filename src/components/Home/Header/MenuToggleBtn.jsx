import { TasksActions } from "../../../Store/Slices/tasks-slice";
import { useDispatch } from "react-redux";

const MenuToggleBtn = () => {
  const dispatch = useDispatch();

  return (
    <section className="block xl:hidden -rotate-90 font-bold text-lg">
      <button onClick={() => dispatch(TasksActions.menuOn(true))}>||</button>
    </section>
  );
};

export default MenuToggleBtn;
