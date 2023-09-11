import React from "react";
import { useDispatch } from "react-redux";
import Styles from "./ToggleTheme.module.css";
import { TasksActions } from "../Store/Slices/tasks-slice";

const ToggleTheme = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between">
      <h4>Change Theme</h4>
      <div>
        <input
          className={Styles.ToggleTheme}
          id="ToggleTheme"
          type="checkbox"
          onChange={() => dispatch(TasksActions.setCurrentTheme())}
        />
        <label className="bg-slate-700" htmlFor="ToggleTheme">
          <span className="bg-red-400"></span>
        </label>
      </div>
    </div>
  );
};

export default React.memo(ToggleTheme);
