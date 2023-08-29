import AddTaskButton from "../../Layout/AddTaskButton";
import NavItem from "./NavItem.jsx";

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
  return (
    <section className="fixed top-0 left-0 w-56 h-screen bg-lightSecondBg dark:bg-secondBg text-thirdBg dark:text-textColor">
      <nav>
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
