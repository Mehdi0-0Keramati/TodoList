import { TasksActions } from "../../Store/Slices/tasks-slice";
import { useDispatch, useSelector } from "react-redux";

import {
  UserInformation,
  ToggleTheme,
  TaskCounter,
  FooterAside,
} from "../../Layout/index";

const Sidebar = () => {
  const sidebarOn = useSelector((state) => state.sidebarOn);
  const dispatch = useDispatch();

  return (
    <section className={`${sidebarOn ? "flex" : "hidden"} xl:flex`}>
      <div
        onClick={() => dispatch(TasksActions.sidebarOn())}
        className={`${
          sidebarOn ? "block" : "hidden"
        }  z-0 w-screen h-screen fixed top-0 left-0 bg-[#0000007c]`}
      ></div>

      <aside className="z-40 xl:z-0 fixed top-0 right-0 w-56 h-screen flex flex-col justify-between bg-lightSecondBg dark:bg-secondBg text-thirdBg dark:text-textColor  p-3 px-4">
        <div className="flex flex-col gap-y-6">
          <UserInformation />
          <ToggleTheme />
          <TaskCounter />
        </div>
        <FooterAside />
      </aside>
    </section>
  );
};

export default Sidebar;
