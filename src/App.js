import './App.css';
import CategoryListComponent from "./Components/BuisnessComponents/Category/CategoryListComponent";
import Header from "./Components/BasicPages/Header/Header";
import Navbar from "./Components/BasicPages/Navbar/Navbar";
import Footer from "./Components/BasicPages/Footer/Footer";
import {Routes, Route, BrowserRouter} from "react-router-dom"
import UsersListComponent from "./Components/BuisnessComponents/User/UsersListComponent";
import About from "./Components/AboutUs/About";
import PageNotFound from "./Components/BasicPages/PageNotFound/PageNotFound";
import ProductListComponent from "./Components/BuisnessComponents/Product/ProductListComponent";
import ContentComponent from "./Components/BuisnessComponents/Content/ContentComponent";
import ViewUserComponent from "./Components/BuisnessComponents/User/ViewUserComponent";
import styles from './App.css'
import ViewProductComponent from "./Components/BuisnessComponents/Product/ViewProductComponent";


function App() {
    return (
        <BrowserRouter>
            <div className={styles.backwrap}>
                <div className="app-wrapper">
                    <Header/>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<CategoryListComponent/>}/>
                        <Route path="/products" element={<ProductListComponent/>}/>
                        <Route path="/products/:id" element={<ViewProductComponent/>}/>
                        <Route path="/content" element={<ContentComponent/>}/>
                        <Route path="/users" element={<UsersListComponent/>}/>
                        <Route path="/users/:id" element={<ViewUserComponent/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/*" element={<PageNotFound/>}/>
                    </Routes>
                    <Footer/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
