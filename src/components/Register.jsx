import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function BasicExample() {
  return (
    <Form className="w-50 text-center m-auto d-sm-block fs-2  fw-bold ">
      <h1 className="text-danger">REGİSTER</h1>
      <Form.Group className="mb-3" controlId="formBasicFirstName">
        <Form.Label>FirstName</Form.Label>
        <Form.Control type="text" placeholder="Enter your Firstname" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Lastname</Form.Label>
        <Form.Control type="text" placeholder="Enter your Lastname" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Your Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;
