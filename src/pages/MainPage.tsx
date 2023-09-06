import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Alert from "../components/Alert"

const MainPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <Alert color="info">This is the first layout</Alert>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </>
  );
};

export default MainPage;
