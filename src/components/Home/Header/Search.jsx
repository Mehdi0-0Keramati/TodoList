import { useSelector } from "react-redux";
import { ReactComponent as SearchIcon } from "../../../assets/search.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Search = () => {
  const tasks = useSelector((state) => state.tasks);
  const [searchV, setSearchV] = useState("");

  const fildredResult = tasks
    ?.filter((task) => task.title.indexOf(searchV) !== -1)
    .map((task, idx) => (
      <div key={idx} className="flex justify-between mb-2">
        <NavLink className="hover:text-blue-300" to={`tasks/${task.id}`}>
          {task.title}
        </NavLink>
        <span>{task.date}</span>
      </div>
    ));

  return (
    <section className="absolute md:relative w-full md:w-auto left-0 top-20 md:top-0 ">
      <form className="w-11/12 md:w-64 lg:w-80 mx-auto  md:ml-0  h-12 rounded-lg border border-transparent transition-all hover:border-red-400 flex justify-between items-center relative bg-lightSecondBg dark:bg-secondBg pr-2">
        <input
          value={searchV}
          onChange={(e) => setSearchV(e.target.value)}
          className=" text-mainBg dark:text-lightMainBg outline-none p-4 w-full h-full bg-transparent"
          type="text"
          placeholder="Search Task"
        />
        <SearchIcon className="w-6" />
      </form>
      {searchV && (
        <div className="bg-lightSecondBg dark:bg-thirdBg absolute left-5 sm:left-7 md:left-0 top-14 w-80 h-auto p-4 rounded-lg">
          {fildredResult.length > 0 ? fildredResult : "Task Not Found !"}
        </div>
      )}
    </section>
  );
};

export default Search;
