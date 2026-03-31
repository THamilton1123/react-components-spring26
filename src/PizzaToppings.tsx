import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const PizzaToppings = () => {
 
    //
    // Return JSX...
    // 
    return (
        <Card>
            <Card.Body>
                <Card.Title
                    className="mb-3"
                >
                    Choose your pizza toppings...
                </Card.Title>
                <Button
                    variant="outline-primary"
                >
                    All
                </Button>
                <Button
                    className="ms-2"
                    variant="outline-primary"
                >
                    None
                </Button>
                <h4
                    className="mt-3"
                >
                    Total: $0.00
                </h4>
            </Card.Body>
        </Card>
    );
}
