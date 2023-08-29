import Search from "./Search";
import Date from "./TimeDate";
import Notification from "./Notifation";
import { AddTaskButton } from "../../../Layout/index";

const Header = () => {
  return (
    <header className="flex justify-between items-baseline gap-x-10 text-textColor">
      <Search />
      <Date />
      <div className="flex items-center gap-4 ml-auto">
        <Notification />
        <AddTaskButton classN="py-3 px-7" />
      </div>
    </header>
  );
};

export default Header;
