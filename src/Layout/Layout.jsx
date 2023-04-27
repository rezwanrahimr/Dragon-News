import { Outlet } from "react-router-dom";
import Header from "../Header/Header/Header";
import TopHeader from "../Header/TopHeader/TopHeader";
import "./layout.css";

const Layout = () => {
  return (
    <div>
      <TopHeader></TopHeader>
      <Header></Header>
      <section className="all-news-container">
        <div>
          <h1>Left Side Bar</h1>
        </div>
        <div>
          <h1>Dragon News Home</h1>
          <Outlet></Outlet>
        </div>
        <div>
          <h1>right Side Bar</h1>
        </div>
      </section>
    </div>
  );
};

export default Layout;
