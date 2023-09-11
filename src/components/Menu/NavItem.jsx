import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { TasksActions } from "../../Store/Slices/tasks-slice";

const NavItem = ({ title, to }) => {
  const dispatch = useDispatch();

  return (
    <NavLink
      onClick={() => dispatch(TasksActions.menuOn())}
      className={({ isActive }) =>
        isActive
          ? "py-3 text-red-400 bg-red-100 dark:text-white dark:bg-thirdBg border-r-4 border-solid border-red-700 dark:border-textColor"
          : "py-3"
      }
      to={to}
    >
      <p className="ml-4 text-base font-semibold">{title}</p>
    </NavLink>
  );
};

export default NavItem;
