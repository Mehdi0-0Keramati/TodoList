import { useSelector } from "react-redux";
import { ReactComponent as SearchIcon } from "../../../assets/search.svg";
import { useState } from "react";

const Search = () => {
  const tasks = useSelector((state) => state.tasks);
  const [searchV, setSearchV] = useState("");

  return (
    <section className="relative">
      <form className="w-80 h-12 rounded-lg flex justify-between items-center relative bg-lightSecondBg dark:bg-secondBg pr-2">
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
        <div className="bg-lightSecondBg dark:bg-thirdBg absolute top-14 w-80 h-auto p-4 rounded-lg">
          {tasks
            ?.filter((task) => task.title.indexOf(searchV) !== -1)
            .map((task) => (
              <div className="flex justify-between mb-2">
                <span>{task.title}</span>
                <span>{task.date}</span>
              </div>
            ))}
        </div>
      )}
    </section>
  );
};

export default Search;
