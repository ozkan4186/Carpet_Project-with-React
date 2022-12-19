import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function BasicExample() {
  const navigate=useNavigate()
  const { currentUser, setCurrentUser } = useContext(AuthContext);
 
   const handleSubmit=(e)=>{
    e.preventDefault();

    setCurrentUser({...currentUser,login:"False"})
      navigate("/home")
   }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser({ ...currentUser, [name]: value });
    console.log(currentUser);
  };

  return (
    <Form onSubmit={handleSubmit} className="w-50 text-center m-auto d-sm-block fs-2  fw-bold ">
      <h1 className="text-danger">REGİSTER</h1>
      <Form.Group className="mb-3">
        <Form.Label>FirstName</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your Firstname"
          onChange={handleChange}
          value={currentUser?.firstName}
          id="firstName"
          name="firstName"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Lastname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your Lastname"
          onChange={handleChange}
          value={currentUser?.lastName}
          id="lastName"
          name="lastName"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter Your Email"
          onChange={handleChange}
          value={currentUser?.email}
          id="email"
          name="email"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={currentUser?.password}
          id="password"
          name="password"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;
