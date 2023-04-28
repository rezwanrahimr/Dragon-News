import { Outlet } from "react-router-dom";
import Header from "../Header/Header/Header";
import TopHeader from "../Header/TopHeader/TopHeader";
import "./layout.css";
import AllCaterogy from "../Caterogy/AllCaterogy";
import NewsHome from "../Home/NewsHome/NewsHome";
import RightBar from "../RightBar/RightBar";

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
          <NewsHome></NewsHome>
          <Outlet></Outlet>
        </div>
        <div>
          <RightBar></RightBar>
        </div>
      </section>
    </div>
  );
};

export default Layout;
