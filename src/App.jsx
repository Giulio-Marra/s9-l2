import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavBar from "./components/MyNavbar";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <>
      <MyNavBar firstText="Home" secondText="About" thirdtText="Browse" />
      <Welcome />
      <AllTheBooks />
    </>
  );
}

export default App;
