import { useEffect, useState } from "react";
import "./AllCaterogy.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import CategoryItems from "./CategoryItems/CategoryItems";

const AllCaterogy = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/catagories")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div className="category-container">
      <h5>All Category</h5>
      <div>
        {category.map((element) => (
          <>
            <Link
              key={element.id}
              to={`/news/${element.id}`}
              className="category-btn"
            >
              <Button
                variant="light"
                className="m-1 "
                style={{
                  width: "-webkit-fill-available",
                  fontWeight: "500",
                  fontSize: "20px",
                  color: "#9F9F9F",
                }}
              >
                {" "}
                {element.name}
              </Button>
            </Link>
            <br />
          </>
        ))}
      </div>

      <CategoryItems></CategoryItems>
    </div>
  );
};

export default AllCaterogy;
