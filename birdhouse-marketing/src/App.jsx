import React, {Component, lazy, createContext, useContext} from 'react';
import {RouterProvider as Router, Route, Routes, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import {QueryClientProvider} from '@tanstack/react-query';

import {I18nextProvider} from 'react-i18next';
import i18next from './i18in.jsx'

import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";

import {App as AntApp} from './modules/antd/App';
import {
    loader as loginLoader,
    action as loginAction
} from "./pages/auth/login/login";
import {
    loader as logoutLoader,
} from "./pages/auth/logout/logout"
import {
    loader as registrationLoader,
    action as registrationAction
} from "./pages/auth/registration/registration";
import {
    loader as changePasswordLoader,
    action as changePasswordAction
} from "./pages/auth/change-password/changepassword";
import {
    loader as createNewPasswordLoader,
    action as createNewPasswordAction
} from "./pages/auth/create-new-password/create-new-password";
import {
    loader as createConfirmCodeLoader,
    action as createConfirmCodeAction
} from "./pages/auth/confirm-code/confirm-code";

import {queryClient} from "./middleware/clients/query.client"
import {MappingPaths} from './constants/mapping.paths.js';
import UserStoreContext, {UserStore } from "./stores/user";

const BasePage = React.lazy(() => import("./modules/Base/Base.jsx"))
const AboutPage = React.lazy(() => import("./pages/templates/AboutUs/AboutUs.jsx"))
const Account = React.lazy(() => import("./pages/account/account.tsx"))
const ContactUs = React.lazy(() => import("./pages/templates/ContactUs/ContactUs.jsx"))
const DashboardAdvertiser = React.lazy(() => import("./pages/dashboard/advertiser/dashboard.tsx"))
const DashboardBlogger = React.lazy(() => import("./pages/dashboard/blogger/dashboard.tsx"))
const DepositSuccess = React.lazy(() => import("./pages/templates/DepositSuccess/DepositSuccess.jsx"))
const DepositUnsuccess = React.lazy(() => import("./pages/templates/DepositUsuccess/DepositUnsuccess.jsx"))
const DepositWithdraw = React.lazy(() => import("./pages/templates/DepositWithdraw/DepositWithdraw.jsx"))
const Error = React.lazy(() => import("./pages/templates/Error/Error.jsx"))
const ExploreAdvertisers = React.lazy(() => import("./pages/templates/ExploreAdvertisers/ExploreAdvertisers.jsx"))
const ExploreBloggers = React.lazy(() => import("./pages/templates/ExploreBloggers/ExploreBloggers.jsx"))
const LandingAdvertisers = React.lazy(() => import("./pages/templates/LandingAdvertiser/LandingAdvertisers.jsx"))
const LandingBloggers = React.lazy(() => import("./pages/templates/LandingBlogger/LandingBlogger.jsx"))
const ProductPage = React.lazy(() => import("./pages/templates/ProductPage/ProductPage.jsx"))
const WithdrawSuccess = React.lazy(() => import("./pages/templates/WithdrawSuccess/WithdrawSuccess.jsx"))
const WithdrawUnsuccess = React.lazy(() => import("./pages/templates/WithdrawUnsuccess/WithdrawUnsuccess.jsx"))
const LoginPage = () => import('./pages/auth/login/login.tsx');
const LogoutPage = () => import('./pages/auth/logout/logout.tsx')
const RegistrationPage = () => import('./pages/auth/registration/registration.tsx');
const ChangePasswordPage = () => import('./pages/auth/change-password/changepassword.tsx')
const CreateNewPasswordPage = () => import('./pages/auth/create-new-password/create-new-password.tsx')
const CreateConfirmCodePage = () => import('./pages/auth/confirm-code/confirm-code.tsx')
const CreateDashboardPage = () => import('./pages/dashboard/dashboard.tsx')
const DocsPage = React.lazy(() => import("./pages/templates/Docs/Docs.jsx"))


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
    const userStore = useContext(UserStoreContext);

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route loader={userStore.fetchData}>

                <Route path={MappingPaths.ERROR}
                       element={<React.Suspense fallback='Loading...'> <Error/> </React.Suspense>}/>

                <Route path={MappingPaths.ROOT}
                       element={<React.Suspense fallback='Loading...'> <BasePage content={LandingBloggers}/>
                       </React.Suspense>}/>
                <Route path={MappingPaths.PUBLIC.ABOUT}
                       element={<React.Suspense fallback='Loading...'> <BasePage content={AboutPage}/>
                       </React.Suspense>}/>
                <Route path={MappingPaths.PUBLIC.CONTACT_US}
                       element={<React.Suspense fallback='Loading...'> <BasePage content={ContactUs}/>
                       </React.Suspense>}/>
                <Route path={MappingPaths.PUBLIC.LANDING_ADVERTISERS}
                       element={<React.Suspense fallback='Loading...'> <LandingAdvertisers/> </React.Suspense>}/>
                <Route path={MappingPaths.PUBLIC.LANDING_BLOGGERS}
                       element={<React.Suspense fallback='Loading...'> <BasePage content={LandingBloggers}/>
                       </React.Suspense>}/>
                <Route path={MappingPaths.PUBLIC.TERMS_AND_CONDITION}
                       element={<React.Suspense fallback='Loading'> <BasePage content={DocsPage}/>
                       </React.Suspense>}/>

                <Route path={MappingPaths.PUBLIC.LOGIN}
                       loader={loginLoader} action={loginAction}
                       element={<React.Suspense fallback='Loading...'> <BasePage content={React.lazy(LoginPage)}/>
                       </React.Suspense>}/>
                <Route path={MappingPaths.PUBLIC.REGISTRATION}
                       loader={registrationLoader} action={registrationAction}
                       element={<React.Suspense fallback='Loading...'> <BasePage
                           content={React.lazy(RegistrationPage)}/>
                       </React.Suspense>}/>
                <Route path={MappingPaths.PUBLIC.CHANGE_PASSWORD}
                       loader={changePasswordLoader} action={changePasswordAction}
                       element={<React.Suspense fallback='Loading...'> <BasePage
                           content={React.lazy(ChangePasswordPage)}/>
                       </React.Suspense>}/>
                <Route path={MappingPaths.PUBLIC.CREATE_NEW_PASSWORD}
                       loader={createNewPasswordLoader} action={createNewPasswordAction}
                       element={<React.Suspense fallback='Loading...'> <BasePage
                           content={React.lazy(CreateNewPasswordPage)}/>
                       </React.Suspense>}/>
                <Route path={MappingPaths.PUBLIC.CONFIRM_CODE}
                       loader={createConfirmCodeLoader} action={createConfirmCodeAction}
                       element={<React.Suspense fallback='Loading...'> <BasePage
                           content={React.lazy(CreateConfirmCodePage)}/>
                       </React.Suspense>}/>


                <Route path={MappingPaths.PRIVATE.LOGOUT}
                       loader={logoutLoader}
                       element={<React.Suspense fallback='Loading...'> <BasePage content={React.lazy(LogoutPage)}/>
                       </React.Suspense>}/>
                <Route path={MappingPaths.PRIVATE.DASHBOARD}
                       element={<React.Suspense fallback='Loading...'>
                           <BasePage content={React.lazy(CreateDashboardPage)}/>
                       </React.Suspense>}/>
                <Route path={MappingPaths.PRIVATE.DASHBOARD_ADVERTISERS}
                       element={<React.Suspense fallback='Loading...'> <BasePage content={DashboardAdvertiser}/>
                       </React.Suspense>}/>
                <Route path={MappingPaths.PRIVATE.DASHBOARD_BLOGGERS}
                       element={<React.Suspense fallback='Loading...'> <BasePage content={DashboardBlogger}/>
                       </React.Suspense>}/>
                <Route path={MappingPaths.PRIVATE.ACCOUNT}
                       element={<React.Suspense fallback='Loading...'> <BasePage content={Account}/>
                       </React.Suspense>}/>
                <Route path={MappingPaths.PRIVATE.EXPLORE_ADVERTISES}
                       element={<React.Suspense fallback='Loading...'> <BasePage content={ExploreAdvertisers}/>
                       </React.Suspense>}/>
                <Route path={MappingPaths.PRIVATE.EXPLORE_BLOGGERS}
                       element={<React.Suspense fallback='Loading...'> <BasePage content={ExploreBloggers}/>
                       </React.Suspense>}/>
                <Route path={MappingPaths.PRIVATE.PRODUCT_PAGE}
                       element={<React.Suspense fallback='Loading...'> <BasePage content={ProductPage}/>
                       </React.Suspense>}/>

                <Route path={MappingPaths.PRIVATE.PAYMENTS_PAGE}
                       element={<React.Suspense fallback='Loading...'> <BasePage content={DepositWithdraw}/>
                       </React.Suspense>}/>
                <Route path={MappingPaths.PRIVATE.DEPOSIT_PAGE}
                       element={<React.Suspense fallback='Loading...'> <BasePage content={DepositWithdraw}/>
                       </React.Suspense>}/>
                <Route path={MappingPaths.PRIVATE.WITHDRAW_PAGE}
                       element={<React.Suspense fallback='Loading...'> <BasePage content={DepositWithdraw}/>
                       </React.Suspense>}/>
                <Route path={MappingPaths.PRIVATE.WITHDRAW_SUCCESS_PAGE}
                       element={<React.Suspense fallback='Loading...'> <BasePage content={WithdrawSuccess}/>
                       </React.Suspense>}/>
                <Route path={MappingPaths.PRIVATE.WITHDRAW_FAIL_PAGE}
                       element={<React.Suspense fallback='Loading...'> <BasePage content={WithdrawUnsuccess}/>
                       </React.Suspense>}/>
                <Route path={MappingPaths.PRIVATE.DEPOSIT_SUCCESS_PAGE}
                       element={<React.Suspense fallback='Loading...'> <BasePage content={DepositSuccess}/>
                       </React.Suspense>}/>
                <Route path={MappingPaths.PRIVATE.DEPOSIT_FAIL_PAGE}
                       element={<React.Suspense fallback='Loading...'> <BasePage content={DepositUnsuccess}/>
                       </React.Suspense>}/>
            </Route>
        )
    );
    return (
        <UserStoreContext.Provider value={userStore}>
            <QueryClientProvider client={queryClient}>
                <I18nextProvider i18n={i18next}>
                    <AntApp>
                        <Router router={router}/>
                    </AntApp>
                </I18nextProvider>
            </QueryClientProvider>
        </UserStoreContext.Provider>
    );
}

export default App;

//docker-compose -f quickstart.yml -f quickstart-standalone.yml uo --build --force-recreate
