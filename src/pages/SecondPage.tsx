import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import ListGroup from "../components/ListGroup";
import Alert from "../components/Alert";

const SecondPage = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };
  const numLists = 16;
  const listComponents = Array.from({ length: numLists }, (value, index) => (
    <div key={index}>
      <ListGroup />
      {(index + 1) % 2 === 0 && ( // Check if index is a multiple of 5
        <Button color="secondary" onClick={handleButtonClick}>
          Go back to Welcome Page
        </Button>
      )}
    </div>
  ));
  return (
    <>
      <Alert color="info">This is the second layout</Alert>
      {listComponents}
    </>
  );
};

export default SecondPage;
