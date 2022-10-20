import './App.css';
import CategoryComponent from "./Components/CategoryComponent";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";


function App() {
  return (
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
          <div className="app-wrapper-content">
              <CategoryComponent />
          </div>
      </div>

  );
}

export default App;
