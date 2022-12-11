import './App.css';
import CategoryListComponent from "./Components/BuisnessComponents/Category/CategoryListComponent";
import Header from "./Components/BasicPages/Header/Header";
import Navbar from "./Components/BasicPages/Navbar/Navbar";
import Footer from "./Components/BasicPages/Footer/Footer";
import {Routes, Route, BrowserRouter} from "react-router-dom"
import UsersListComponent from "./Components/BuisnessComponents/User/UsersListComponent";
import About from "./Components/BasicPages/AboutUs/About";
import PageNotFound from "./Components/BasicPages/PageNotFound/PageNotFound";
import ProductListComponent from "./Components/BuisnessComponents/Product/ProductListComponent";
import ContentComponent from "./Components/BuisnessComponents/Content/ContentComponent";
import ViewUserComponent from "./Components/BuisnessComponents/User/ViewUserComponent";
import styles from './App.css'
import ViewProductComponent from "./Components/BuisnessComponents/Product/ViewProductComponent";
import LoginPage from "./Components/BasicPages/LoginPage/LoginPage";
import ViewCategoryComponent from "./Components/BuisnessComponents/Category/ViewCategoryComponent";
import Support from "./Components/BasicPages/Support/SupportComponent";
import UserCreateComponent from "./Components/BuisnessComponents/User/UserCreateComponent";
import UserUpdateComponent from "./Components/BuisnessComponents/User/UserUpdateComponent";
import OrderFieldComponent from "./Components/BuisnessComponents/OrderField/OrderFieldComponent";


function App() {
    return (
        <BrowserRouter>
            <div className={styles.backwrap}>
                <div className="app-wrapper">
                    <Header/>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<LoginPage/>}/>
                        <Route path="/category" element={<CategoryListComponent/>}/>
                        <Route path="/category/:id" element={<ViewCategoryComponent/>}/>
                        <Route path="/products" element={<ProductListComponent/>}/>
                        <Route path="/products/:id" element={<ViewProductComponent/>}/>
                        <Route path="/content" element={<ContentComponent/>}/>
                        <Route path="/users" element={<UsersListComponent/>}/>
                        <Route path="/users/:id" element={<ViewUserComponent/>}/>
                        <Route path="/add-user/:id" element={<UserCreateComponent/>}/>
                        <Route path="/update-user/:id" element={<UserUpdateComponent/>}/>
                        <Route path="/orderfield/:id" element={<OrderFieldComponent/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/support" element={<Support/>}/>
                        {/*<Route path="/settings" element={<SettingsComponent/>}/>*/}
                        <Route path="/*" element={<PageNotFound/>}/>
                    </Routes>
                    <Footer/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
