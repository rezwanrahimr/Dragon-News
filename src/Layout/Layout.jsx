import { Outlet } from "react-router-dom";
import Header from "../Header/Header/Header";
import TopHeader from "../Header/TopHeader/TopHeader";
import "./layout.css";
import AllCaterogy from "../Caterogy/AllCaterogy";

const Layout = () => {
  return (
    <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
      <TopHeader></TopHeader>
      <Header></Header>
      <section className="all-news-container">
        <div>
          <AllCaterogy></AllCaterogy>
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
