import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Main />
    </div>
  );
};

export default App;
