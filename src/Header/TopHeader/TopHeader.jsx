import { Button } from "react-bootstrap";
import logo from "../../assets/logo.png";
import "./topHeader.css";

const TopHeader = () => {
  return (
    <div className="mx-auto text-center top-header-container">
      <div className="top-logo">
        <img src={logo} alt="News Logo" /> <br />
        <small>Journalism Without Fear or Favour</small>
        <p>Sunday, November 27, 2022</p>
      </div>
      <div className="latest-container d-flex align-items-center ">
        <Button variant="danger" className="mx-3">
          Latest
        </Button>{" "}
        <p>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
      </div>
    </div>
  );
};

export default TopHeader;
