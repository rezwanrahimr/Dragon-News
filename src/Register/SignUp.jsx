import { Button } from "react-bootstrap";
import Header from "../Header/Header/Header";
import "./signUp.css";

const SignUp = () => {
  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    const condition = form.condition.checked;
  };
  return (
    <div style={{ backgroundColor: " #f4efef" }}>
      <Header></Header>
      <div className="signUp-container">
        <h2>Register your account</h2>
        <hr />
        <form
          style={{ margin: "0 auto", width: "fit-Content" }}
          onSubmit={handleForm}
        >
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control inputField "
            id="exampleFormControlInput1"
            placeholder="Name"
          />
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Photo Url
          </label>
          <input
            type="text"
            name="photoUrl"
            className="form-control inputField "
            id="exampleFormControlInput1"
            placeholder="Place Photo Url"
          />
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email{" "}
          </label>
          <input
            type="email"
            name="email"
            className="form-control inputField "
            id="exampleFormControlInput1"
            placeholder="Email"
          />
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Password{" "}
          </label>
          <input
            type="password"
            name="password"
            className="form-control inputField "
            id="exampleFormControlInput1"
            placeholder="Password"
          />
          <div className="form-check mt-3">
            <input
              className="form-check-input "
              name="condition"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Accept Term & Conditions
            </label>
          </div>

          <Button
            variant="secondary"
            type="submit"
            style={{ margin: "30px auto", width: "-webkit-fill-available" }}
          >
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
