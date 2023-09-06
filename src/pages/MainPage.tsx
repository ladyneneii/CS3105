import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Alert from "../components/Alert";

const MainPage = () => {
  const numCards = 16;
  const cardComponents = Array.from({ length: numCards }, (value, index) => (
    <Card key={index} />
  ));
  return (
    <>
      <Navbar></Navbar>
      <Alert color="info">This is the first layout</Alert>
      {cardComponents}
    </>
  );
};

export default MainPage;
