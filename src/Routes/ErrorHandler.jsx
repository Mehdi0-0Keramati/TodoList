import { useRouteError } from "react-router-dom";

const ErrorHandler = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <section className="flex justify-center items-center w-full min-h-screen">
      <h1>An Error occurred</h1>
      <p>{error}</p>
    </section>
  );
};

export default ErrorHandler;
