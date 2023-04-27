import { useEffect, useState } from "react";
import "./AllCaterogy.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

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
            <Link key={element.id} to="">
              <Button
                className="m-1"
                style={{ width: "-webkit-fill-available" }}
              >
                {" "}
                {element.name}
              </Button>
            </Link>
            <br />
          </>
        ))}
      </div>
    </div>
  );
};

export default AllCaterogy;
