import { Outlet } from "react-router-dom";
import Header from "./Header";

const Home = () => {
  return (
    <section className="w-full flex justify-center items-start">
      <div className="w-8/12 p-6 px-8">
        <Header />
        <Outlet />
      </div>
    </section>
  );
};

export default Home;
