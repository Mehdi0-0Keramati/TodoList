import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { Menu, Sidebar } from "./components/index";
import { AddTaskPopUp } from "./Layout";

import "./App.css";

function App() {
  const popUpOn = useSelector((state) => state.popupOn);
  const currentTheme = useSelector((state) => state.currentTheme);

  return (
    <section className={currentTheme}>
      <div className="w-full min-h-screen flex justify-between text-textLightColor dark:text-textColor bg-lightMainBg dark:bg-mainBg">
        {popUpOn && <AddTaskPopUp />}
        <Menu />
        <Outlet />
        <Sidebar />
      </div>
    </section>
  );
}

export default App;
