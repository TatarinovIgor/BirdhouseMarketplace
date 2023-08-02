import React, {Component, lazy} from 'react';
import { FrontendApi, Configuration } from "@ory/client"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const BasePage = React.lazy(() => import("./modules/Base/Base.jsx"))
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


function App() {

    // Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyBkDkZ0uC_fWgufs0mVIgW_fFjQjSvrAHE",
        authDomain: "birdhouse-6f71f.firebaseapp.com",
        projectId: "birdhouse-6f71f",
        storageBucket: "birdhouse-6f71f.appspot.com",
        messagingSenderId: "1030264927942",
        appId: "1:1030264927942:web:77617dfeed23a9b28d49c7",
        measurementId: "G-JRWRECB89N"
    };

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);


    return (
        <Router>
            <Routes>
                <Route path="/base" element={<React.Suspense fallback='loading...'> <BasePage/> </React.Suspense> } />
                <Route path="/" element={<React.Suspense fallback='Loading...'> <BasePage content={LandingBloggers}/> </React.Suspense>}/>
                <Route path="/about" element={<React.Suspense fallback='Loading...'> <BasePage content={AboutPage}/> </React.Suspense>} />
                <Route path="/account_preview" element={<React.Suspense fallback='Loading...'> <BasePage content={AccountPreview}/> </React.Suspense>} />
                <Route path="/contact_us" element={<React.Suspense fallback='Loading...'> <BasePage content={ContactUs}/> </React.Suspense>} />
                <Route path="/dashboard" element={<React.Suspense fallback='Loading...'> <BasePage content={Dashboard}/> </React.Suspense>} />                                    #ToDo Make dynamic
                <Route path="/deposit_success" element={<React.Suspense fallback='Loading...'> <BasePage content={DepositSuccess}/> </React.Suspense>} />
                <Route path="/deposit_unsuccess" element={<React.Suspense fallback='Loading...'> <BasePage content={DepositUnsuccess}/> </React.Suspense>} />
                <Route path="/deposit" element={<React.Suspense fallback='Loading...'> <BasePage content={DepositWithdraw}/> </React.Suspense>} />
                <Route path="/deposit_withdraw" element={<React.Suspense fallback='Loading...'> <BasePage content={DepositWithdraw}/> </React.Suspense>} />
                <Route path="/withdraw" element={<React.Suspense fallback='Loading...'> <BasePage content={DepositWithdraw}/> </React.Suspense>} />
                <Route path="/error" element={<React.Suspense fallback='Loading...'> <Error/> </React.Suspense>} />
                <Route path="/explore_advertisers" element={<React.Suspense fallback='Loading...'> <BasePage content={ExploreAdvertisers}/> </React.Suspense>} />
                <Route path="/explore_bloggers" element={<React.Suspense fallback='Loading...'> <BasePage content={ExploreBloggers}/> </React.Suspense>} />
                <Route path="/landing_advertisers" element={<React.Suspense fallback='Loading...'> <LandingAdvertisers/> </React.Suspense>} />
                <Route path="/landing_bloggers" element={<React.Suspense fallback='Loading...'> <BasePage content={LandingBloggers}/> </React.Suspense>} />
                <Route path="/login" element={<React.Suspense fallback='Loading...'> <BasePage content={Login}/> </React.Suspense>} />
                <Route path="/product_page" element={<React.Suspense fallback='Loading...'> <BasePage content={ProductPage}/> </React.Suspense>} />
                <Route path="/withdraw_success" element={<React.Suspense fallback='Loading...'> <BasePage content={WithdrawSuccess}/> </React.Suspense>} />
                <Route path="/withdraw_unsuccess" element={<React.Suspense fallback='Loading...'> <BasePage content={WithdrawUnsuccess}/> </React.Suspense>} />
            </Routes>
        </Router>
    );
}

export default App;

//docker-compose -f quickstart.yml -f quickstart-standalone.yml uo --build --force-recreate