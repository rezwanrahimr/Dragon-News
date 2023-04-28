import { Card } from "react-bootstrap";
import { CiCalendarDate } from "react-icons/ci";
import img1 from "../../assets/Rectangle 3986 (1).png";
import img2 from "../../assets/Rectangle 3986 (2).png";
import img3 from "../../assets/Rectangle 3986.png";
const CategoryItems = () => {
  return (
    <div>
      <Card style={{ width: "fluid", border: "none" }}>
        <Card.Img variant="top" src={img3} />
        <Card.Body>
          <Card.Title>
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </Card.Title>

          <p>
            Sports{" "}
            <span>
              <CiCalendarDate /> Jan 4, 2022
            </span>
          </p>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
      <Card style={{ width: "fluid", border: "none" }}>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </Card.Title>

          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
      <Card style={{ width: "fluid", border: "none" }}>
        <Card.Img variant="top" src={img2} />
        <Card.Body>
          <Card.Title>
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </Card.Title>

          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CategoryItems;
