import { Outlet } from "react-router-dom";
import Header from "./Header";

const Home = () => {
  return (
    <section className="w-full flex justify-center items-start">
      <div className="w-full xl:w-8/12 md:p-6 md:px-8">
        <Header />
        <div className="pt-10 px-5">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Home;
