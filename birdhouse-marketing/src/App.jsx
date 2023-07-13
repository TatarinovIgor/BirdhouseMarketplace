import React, {Component, lazy} from 'react';
import { FrontendApi, Configuration } from "@ory/client"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const AboutPage = React.lazy(() => import("./pages/templates/AboutUs/AboutUs.jsx"))
const AccountPreview = React.lazy(() => import("./pages/templates/AccountPreview/AccountPreview.jsx"))
const ContactUs = React.lazy(() => import("./pages/templates/ContactUs/ContactUs.jsx"))
const Dashboard = React.lazy(() => import("./pages/templates/Dashboard/Dashboard.jsx"))
const DepositSuccess = React.lazy(() => import("./pages/templates/DepositSuccess/DepositSuccess.jsx"))
const DepositUnsuccess = React.lazy(() => import("./pages/templates/DepositUsuccess/DepositUnsuccess.jsx"))
const DepositWithdraw = React.lazy(() => import("./pages/templates/DepositWithdraw/DepositWithdraw.jsx"))
const Error = React.lazy(() => import("./pages/templates/Error/Error.jsx"))
const ExploreAdvertisers = React.lazy(() => import("./pages/templates/ExploreAdvertisers/ExploreAdvertisers.jsx"))
const ExploreBloggers = React.lazy(() => import("./pages/templates/ExploreBloggers/ExploreBloggers.jsx"))
const LandingAdvertisers = React.lazy(() => import("./pages/templates/LandingAdvertiser/LandingAdvertisers.jsx"))
const LandingBloggers = React.lazy(() => import("./pages/templates/LandingBlogger/LandingBlogger.jsx"))
const Login = React.lazy(() => import("./pages/templates/Login/Login.jsx"))
const ProductPage = React.lazy(() => import("./pages/templates/ProductPage/ProductPage.jsx"))
const WithdrawSuccess = React.lazy(() => import("./pages/templates/WithdrawSuccess/WithdrawSuccess.jsx"))
const WithdrawUnsuccess = React.lazy(() => import("./pages/templates/WithdrawUnsuccess/WithdrawUnsuccess.jsx"))
const OryVerify = React.lazy(() => import("./auth/verification.jsx"))
const OryRecovery = React.lazy(() => import("./auth/recovery.jsx"))
const OryLogin = React.lazy(() => import("./auth/login.jsx"))
const OryRegister = React.lazy(() => import("./auth/registration.jsx"))

function App() {
    // Get your Ory url from .env
    // Or localhost for local development
    const basePath = "http://127.0.0.1:4455"
    const ory = new FrontendApi(
        new Configuration({
            basePath,
            baseOptions: {
                withCredentials: true,
            },
        }),
    )

    return (
        <Router>
            <Routes>
                <Route path="/" element={<React.Suspense fallback='Loading...'> <LandingBloggers/> </React.Suspense>}/>
                <Route path="/about" element={<React.Suspense fallback='Loading...'> <AboutPage/> </React.Suspense>} />
                <Route path="/account_preview" element={<React.Suspense fallback='Loading...'> <AccountPreview/> </React.Suspense>} />
                <Route path="/contact_us" element={<React.Suspense fallback='Loading...'> <ContactUs/> </React.Suspense>} />
                <Route path="/dashboard" element={<React.Suspense fallback='Loading...'> <Dashboard/> </React.Suspense>} />                                    #ToDo Make dynamic
                <Route path="/deposit_success" element={<React.Suspense fallback='Loading...'> <DepositSuccess/> </React.Suspense>} />
                <Route path="/deposit_unsuccess" element={<React.Suspense fallback='Loading...'> <DepositUnsuccess/> </React.Suspense>} />
                <Route path="/deposit" element={<React.Suspense fallback='Loading...'> <DepositWithdraw/> </React.Suspense>} />
                <Route path="/deposit_withdraw" element={<React.Suspense fallback='Loading...'> <DepositWithdraw/> </React.Suspense>} />
                <Route path="/withdraw" element={<React.Suspense fallback='Loading...'> <DepositWithdraw/> </React.Suspense>} />
                <Route path="/error" element={<React.Suspense fallback='Loading...'> <Error/> </React.Suspense>} />
                <Route path="/explore_advertisers" element={<React.Suspense fallback='Loading...'> <ExploreAdvertisers/> </React.Suspense>} />
                <Route path="/explore_bloggers" element={<React.Suspense fallback='Loading...'> <ExploreBloggers/> </React.Suspense>} />
                <Route path="/landing_advertisers" element={<React.Suspense fallback='Loading...'> <LandingAdvertisers/> </React.Suspense>} />
                <Route path="/landing_bloggers" element={<React.Suspense fallback='Loading...'> <LandingBloggers/> </React.Suspense>} />
                <Route path="/login" element={<React.Suspense fallback='Loading...'> <Login/> </React.Suspense>} />
                <Route path="/product_page" element={<React.Suspense fallback='Loading...'> <ProductPage/> </React.Suspense>} />
                <Route path="/withdraw_success" element={<React.Suspense fallback='Loading...'> <WithdrawSuccess/> </React.Suspense>} />
                <Route path="/withdraw_unsuccess" element={<React.Suspense fallback='Loading...'> <WithdrawUnsuccess/> </React.Suspense>} />
                <Route path="/ory_login" element={<React.Suspense fallback='Loading...'> OryLogin(ory, basePath) </React.Suspense>} />
                <Route path="/ory_register" element={<React.Suspense fallback='Loading...'> OryRegister(ory, basePath) </React.Suspense>} />
                <Route path="/ory_recovery" element={<React.Suspense fallback='Loading...'> OryRecovery(ory,basePath) </React.Suspense>} />
                <Route path="/ory_verify" element={<React.Suspense fallback='Loading...'> OryVerify(ory, basePath) </React.Suspense>} />
            </Routes>
        </Router>
    );
}

export default App;

//docker-compose -f quickstart.yml -f quickstart-standalone.yml uo --build --force-recreate