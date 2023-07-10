import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from "./pages/templates/AboutUs/AboutUs.jsx";
import AccountPreview from "./pages/templates/AccountPreview/AccountPreview.jsx";
import ContactUs from "./pages/templates/ContactUs/ContactUs.jsx";
import Dashboard from "./pages/templates/Dashboard/Dashboard.jsx";
import DepositSuccess from "./pages/templates/DepositSuccess/DepositSuccess.jsx";
import DepositUnsuccess from "./pages/templates/DepositUsuccess/DepositUnsuccess.jsx";
import DepositWithdraw from "./pages/templates/DepositWithdraw/DepositWithdraw.jsx";
import Error from "./pages/templates/Error/Error.jsx";
import ExploreAdvertisers from "./pages/templates/ExploreAdvertisers/ExploreAdvertisers.jsx";
import ExploreBloggers from "./pages/templates/ExploreBloggers/ExploreBloggers.jsx";
import LandingAdvertisers from "./pages/templates/LandingAdvertiser/LandingAdvertisers.jsx";
import LandingBloggers from "./pages/templates/LandingBlogger/LandingBlogger.jsx";
import Login from "./pages/templates/Login/Login.jsx";
import ProductPage from "./pages/templates/ProductPage/ProductPage.jsx";
import WithdrawSuccess from "./pages/templates/WithdrawSuccess/WithdrawSuccess.jsx";
import WithdrawUnsuccess from "./pages/templates/WithdrawUnsuccess/WithdrawUnsuccess.jsx";

function App() {
    return (
        <Router>
            <Routes>
                 <Route path="/" element={<LandingBloggers/>} />
                <Route path="/about" element={<AboutPage/>} />
                <Route path="/account_preview" element={<AccountPreview/>} />
                <Route path="/contact_us" element={<ContactUs/>} />
                <Route path="/dashboard" element={<Dashboard/>} />                                    #ToDo Make dynamic
                <Route path="/deposit_success" element={<DepositSuccess/>} />
                <Route path="/deposit_unsuccess" element={<DepositUnsuccess/>} />
                <Route path="/deposit" element={<DepositWithdraw/>} />
                <Route path="/deposit_withdraw" element={<DepositWithdraw/>} />
                <Route path="/withdraw" element={<DepositWithdraw/>} />
                <Route path="/error" element={<Error/>} />
                <Route path="/explore_advertisers" element={<ExploreAdvertisers/>} />
                <Route path="/explore_bloggers" element={<ExploreBloggers/>} />
                <Route path="/landing_advertisers" element={<LandingAdvertisers/>} />
                <Route path="/landing_bloggers" element={<LandingBloggers/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/product_page" element={<ProductPage/>} />
                <Route path="/withdraw_success" element={<WithdrawSuccess/>} />
                <Route path="/withdraw_unsuccess" element={<WithdrawUnsuccess/>} />
            </Routes>
        </Router>
    );
}

export default App;