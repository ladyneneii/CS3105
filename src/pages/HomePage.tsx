import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const HomePage = () => {
  const name = "Nene";
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/Feed");
  };

  return (
    <>
      <div className="position-absolute bottom-50 end-50">
        <h1>Hello, World!</h1>
        <p>By {name}</p>
        <Button color="primary" onClick={handleButtonClick}>
          Go to main page
        </Button>
      </div>
    </>
  );
};

export default HomePage;
