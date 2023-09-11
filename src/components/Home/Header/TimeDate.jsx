const todayDate = new Date().toLocaleString(undefined, {
  year: "numeric",
  month: "short",
  day: "numeric",
});

const TimeDate = () => {
  return (
    <div className="ml-6 sm:ml-0 text-xs">
      <h3 className="text-black dark:text-white  text-sm font-bold">TO-DO LIST</h3>
      <time className=" font-semibold ">{todayDate}</time>
    </div>
  );
};

export default TimeDate;
