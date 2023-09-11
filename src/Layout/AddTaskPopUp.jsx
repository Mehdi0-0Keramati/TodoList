import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { TasksActions } from "../Store/Slices/tasks-slice";
import { ReactComponent as SvgX } from "../assets/x.svg";

const AddTaskPopUp = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.currentTheme);

  return createPortal(
    <section
      className={`${
        currentTheme == "dark" ? "dark" : ""
      } flex justify-center w-full h-full bg-[#0000007c] fixed left-0 top-0`}
    >
      <div
        onClick={closePopup}
        className="overlay w-full h-full bg-[#00000073] absolute top-0 left-0 z-20"
      ></div>

      <form
        onSubmit={AddTaskHandler}
        className="rounded-2xl z-40 flex flex-col justify-around gap-4 w-4/5 sm:w-3/5 md:w-2/5 xl:w-1/3 bg-lightMainBg dark:bg-[#0F172A] dark:text-textColor p-4"
      >
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-2xl dark:text-white ">
            Add a task
          </h2>
          <button type="button" onClick={closePopup}>
            <SvgX />
          </button>
        </div>
        <div>
          <label htmlFor="Title">Title</label>
          <input
            required
            className="bg-lightSecondBg dark:bg-secondBg  w-full transition-all duration-500 p-2 px-4 rounded-lg border border-transparent hover:border-red-600"
            id="Title"
            type="text"
            name="title"
            placeholder="e.g , study for the test"
          />
        </div>
        <div>
          <label htmlFor="data">Date</label>
          <input
            required
            className="bg-lightSecondBg dark:bg-secondBg  w-full transition-all duration-500 p-2 px-4 rounded-lg border border-transparent hover:border-red-600"
            id="data"
            name="date"
            type="date"
            placeholder="e.g , study for the test"
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            className="bg-lightSecondBg dark:bg-secondBg  w-full transition-colors duration-500 p-2 px-4 rounded-lg border border-transparent hover:border-red-600"
            name="description"
            id="description"
            cols="10"
            rows="2"
          ></textarea>
        </div>

        <div>
          <div className="flex gap-2">
            <input id="Important" name="important" type="checkbox" />
            <label htmlFor="Important">Mark as important</label>
          </div>

          <div className="flex gap-2">
            <input id="completed" name="completed" type="checkbox" />
            <label htmlFor="completed">Mark as Completed</label>
          </div>
        </div>

        <button className="rounded-xl w-full py-4 bg-red-500 hover:bg-red-600 text-white">
          Add a task
        </button>
      </form>
    </section>,
    document.getElementById("AddTaskPopUp")
  );

  function AddTaskHandler(e) {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target).entries());

    const todayDate = new Date();
    const year = todayDate.getFullYear();
    const month = todayDate.getMonth() + 1;
    const day = todayDate.getDate();

    const dateFormated =
      year +
      "-" +
      month.toString().padStart(2, "0") +
      "-" +
      day.toString().padStart(2, "0");

    const newTask = {
      id: Math.floor(Math.random() * 100000 + 1),
      title: data.title,
      description: data.description,
      date: data.date.replaceAll("-", "/"),
      isCompleted: data.completed == "on" ? true : false,
      isImportant: data.important == "on" ? true : false,
      isToday: data.date == dateFormated ? true : false,
    };

    dispatch(TasksActions.AddTask(newTask));
    dispatch(TasksActions.popupOn());
  }

  function closePopup() {
    dispatch(TasksActions.popupOn());
  }
};

export default AddTaskPopUp;
