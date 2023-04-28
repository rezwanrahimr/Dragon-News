import { useEffect, useState } from "react";
import "./newsHome.css";
import { Link, useParams } from "react-router-dom";
import { FiSave } from "react-icons/fi";
import { BsShare } from "react-icons/bs";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { GrView } from "react-icons/gr";

const NewsHome = () => {
  const { id } = useParams();
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/news/${id}`)
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, [id]);

  console.log(news);
  return (
    <div>
      <h5>Dragon News Home</h5>
      {news.map((element) => (
        <div key={element._id} className="card-container">
          <div className="userProfile p-3 d-flex justify-content-between align-items-center">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                lineHeight: "7px",
              }}
            >
              <img src={element?.author?.img} alt="User Image" />
              <div className="ms-3">
                <h6 style={{ fontWeight: "600", fontSize: "16px" }}>
                  {element?.author?.name == ""
                    ? "Not Available"
                    : element?.author?.name}
                </h6>
                <p>{element?.author?.published_date}</p>
              </div>
            </div>
            <div>
              <FiSave style={{ width: "24px", height: "24px" }}></FiSave>

              <BsShare
                className="ms-3"
                style={{ width: "24px", height: "24px" }}
              ></BsShare>
            </div>
          </div>
          <div className="p-3">
            <h1
              style={{
                fontWeight: "700",
                fontSize: "20px",
                lineHeight: "35px",
              }}
            >
              {element.title}
            </h1>
            <img
              src={element.image_url}
              alt=""
              width={"518px"}
              height={"262px"}
            />
            <p
              style={{
                color: "#706F6F",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "26px",
                textAlign: "justify",
                margin: "25px 0",
              }}
            >
              {element.details.slice(0, 400)}
            </p>
            <Link style={{ textDecoration: "none", color: "#F75B5F" }}>
              Read More
            </Link>

            <div className="d-flex justify-content-between">
              <span>
                <AiFillStar
                  style={{ width: "24px", height: "24px", color: "#F75B5F" }}
                ></AiFillStar>
                <AiFillStar
                  style={{ width: "24px", height: "24px", color: "#F75B5F" }}
                ></AiFillStar>
                <AiFillStar
                  style={{ width: "24px", height: "24px", color: "#F75B5F" }}
                ></AiFillStar>
                <AiFillStar
                  style={{ width: "24px", height: "24px", color: "#F75B5F" }}
                ></AiFillStar>
                <AiOutlineStar
                  style={{ width: "24px", height: "24px", color: "#F75B5F" }}
                ></AiOutlineStar>
                <span
                  style={{
                    width: "25px",
                    height: "26px",
                    fontWeight: "500",
                    marginLeft: "10px",
                  }}
                >
                  {element.rating.number}
                </span>
              </span>
              <span>
                <GrView
                  style={{ width: "24px", height: "24px", marginRight: "10px" }}
                ></GrView>
                <span>{element.total_view}</span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsHome;
