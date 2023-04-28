import { AiOutlineGoogle, AiFillGithub } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const RightBar = () => {
  return (
    <div>
      <h5>Login Width</h5>
      <div>
        <div>
          <button
            type="button"
            className="btn btn-outline-primary"
            style={{ width: "-webkit-fill-available" }}
          >
            <AiOutlineGoogle
              style={{ width: "24px", height: "24px" }}
            ></AiOutlineGoogle>{" "}
            Login With Google
          </button>

          <button
            type="button"
            className="btn btn-outline-secondary mt-2"
            style={{ width: "-webkit-fill-available" }}
          >
            <AiFillGithub
              style={{ width: "24px", height: "24px" }}
            ></AiFillGithub>{" "}
            Login With Google
          </button>
        </div>
        <h6 className="my-3">Find Us On</h6>
        <div>
          <ul className="list-group">
            <li className="list-group-item">
              <BsFacebook
                style={{ width: "24px", height: "24px" }}
              ></BsFacebook>{" "}
              <a
                href=""
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "500",
                  marginLeft: "2px",
                }}
              >
                Facebook
              </a>
            </li>
            <li className="list-group-item">
              <BsTwitter style={{ width: "24px", height: "24px" }}></BsTwitter>{" "}
              <a
                href=""
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "500",
                  marginLeft: "2px",
                }}
              >
                Twitter
              </a>
            </li>
            <li className="list-group-item">
              <BsInstagram
                style={{ width: "24px", height: "24px" }}
              ></BsInstagram>{" "}
              <a
                href=""
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "500",
                  marginLeft: "2px",
                }}
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
