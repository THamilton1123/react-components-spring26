import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const PizzaToppings = () => {
   return (

    <Card>
      <Card.Body>
      <Card.Title>
        Choose your pizza toppings...
      </Card.Title>
      <Button
      variant="outline-primary"
      >
        All
      </Button>

      <Button
      className="ms-3"
      variant="outline-primary"
      >
        None
      </Button>
      <div>
        Pizza toppings go here...
      </div>
      <h3>
        Total: $0.00
      </h3>
      </Card.Body>
    </Card>
  
  );
};

export default PizzaToppings;