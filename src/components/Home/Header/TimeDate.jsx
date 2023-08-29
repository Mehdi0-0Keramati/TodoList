const todayDate = new Date().toLocaleString(undefined, {
  year: "numeric",
  month: "short",
  day: "numeric",
});

const TimeDate = () => {
  return <time>{todayDate}</time>;
};

export default TimeDate;
