import Search from "./Search";
import Date from "./TimeDate";
import Notification from "./Notifation";
import { AddTaskButton } from "../../../Layout/index";
import MenuToggleBtn from "./MenuToggleBtn";
import SidebarToggleBtn from "./SidebarToggleBtn";

const Header = () => {
  return (
    <header className="text-xs md:text-sm p-5 flex justify-between items-center gap-x-6 text-textColor">
      <MenuToggleBtn />
      <Search />
      <div className="flex-1 text-center">
        <Date />
      </div>
      <Notification />
      <AddTaskButton classN="py-3 px-7 hidden text-xs md:block" />
      <SidebarToggleBtn />
    </header>
  );
};

export default Header;
