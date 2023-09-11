import AddTaskButton from "../../Layout/AddTaskButton";
import NavItem from "./NavItem.jsx";
import { useDispatch, useSelector } from "react-redux";
import { TasksActions } from "../../Store/Slices/tasks-slice";

const navItems = [
  {
    title: "All Tasks",
    to: "/",
  },
  {
    title: "Today's Tasks",
    to: "/today",
  },
  {
    title: "Important Tasks",
    to: "/important",
  },
  {
    title: "Completed Tasks",
    to: "/completed",
  },
  {
    title: "UnCompleted Tasks",
    to: "/uncompleted",
  },
];

const Menu = () => {
  const menuOn = useSelector((state) => state.menuOn);
  const dispatch = useDispatch();

  return (
    <section
      className={`
        ${menuOn ? "flex" : "hidden"}
       fixed top-0 left-0 xl:flex w-56 h-screen  z-20 xl:z-0
      `}
    >
      <div
        onClick={() => dispatch(TasksActions.menuOn(false))}
        className={`${
          menuOn ? "block" : "hidden"
        } w-screen h-screen fixed top-0 left-0 bg-[#0000007c] OVERLAY-BG`}
      ></div>

      <nav className="w-full h-full z-40 xl:z-0 bg-lightSecondBg dark:bg-secondBg text-thirdBg dark:text-textColor">
        <ul className="h-full flex flex-col">
          <div className="mb-8">
            <h2 className="mt-4 mb-8 text-center text-xl font-bold ">
              TO-DO LIST
            </h2>
            <AddTaskButton classN="py-3 px-12" />
          </div>

          {navItems.map((item) => (
            <NavItem key={item.title} title={item.title} to={item.to} />
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Menu;
