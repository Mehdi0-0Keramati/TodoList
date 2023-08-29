import {
  UserInformation,
  ToggleTheme,
  TaskCounter,
  FooterAside,
} from "../../Layout/index";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 right-0 w-56 h-screen flex flex-col justify-between bg-lightSecondBg dark:bg-secondBg text-thirdBg dark:text-textColor  p-3 px-4">
      <div className="flex flex-col gap-y-6">
        <UserInformation />
        <ToggleTheme />
        <TaskCounter />
      </div>
      <FooterAside />
    </aside>
  );
};

export default Sidebar;
