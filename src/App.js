import './App.css';
import CategoryComponent from "./Components/Category/CategoryComponent";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import {Routes, Route, BrowserRouter} from "react-router-dom"
import UserComponent from "./Components/User/UserComponent";
import About from "./Components/AboutUs/About";
import PageNotFound from "./Components/PageNotFound/PageNotFound";


function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                {/*<div className="app-wrapper-content">*/}
                {/*     <CategoryComponent />*/}
                {/*</div>*/}
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
