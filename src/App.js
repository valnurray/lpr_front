import './App.css';
import CategoryComponent from "./Components/Category/CategoryComponent";
import Header from "./Components/BasicPages/Header/Header";
import Navbar from "./Components/BasicPages/Navbar/Navbar";
import Footer from "./Components/BasicPages/Footer/Footer";
import {Routes, Route, BrowserRouter} from "react-router-dom"
import UsersListComponent from "./Components/User/UsersListComponent";
import About from "./Components/AboutUs/About";
import PageNotFound from "./Components/BasicPages/PageNotFound/PageNotFound";
import ProductComponent from "./Components/Product/ProductComponent";
import ContentComponent from "./Components/Content/ContentComponent";
import ViewUserComponent from "./Components/User/ViewUserComponent";


function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<CategoryComponent/>}/>
                    <Route path="/products" element={<ProductComponent/>}/>
                    <Route path="/content" element={<ContentComponent/>}/>
                    <Route path="/users" element={<UsersListComponent/>}/>
                    <Route path="/users/:id" element={<ViewUserComponent/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/*" element={<PageNotFound/>}/>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
