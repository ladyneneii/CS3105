import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Card = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/SecondPage");
  };

  return (
    <>
      <div className="card custom-card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Button color="danger" onClick={handleButtonClick}>
            Go to Second Page
          </Button>
        </div>
      </div>
    </>
  );
};

export default Card;
