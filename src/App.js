import './App.css';
import CategoryComponent from "./Components/Category/CategoryComponent";
import Header from "./Components/BasicPages/Header/Header";
import Navbar from "./Components/BasicPages/Navbar/Navbar";
import Footer from "./Components/BasicPages/Footer/Footer";
import {Routes, Route, BrowserRouter} from "react-router-dom"
import UserComponent from "./Components/User/UserComponent";
import About from "./Components/AboutUs/About";
import PageNotFound from "./Components/BasicPages/PageNotFound/PageNotFound";


function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<CategoryComponent/>}/>
                    <Route path="/users" element={<UserComponent/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/*" element={<PageNotFound/>}/>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
