import { useContext } from 'react';
import {useTranslation} from "react-i18next";
import {ActionFunctionArgs, Link, LoaderFunctionArgs, Navigate, redirect, useLoaderData} from "react-router-dom";

import {MappingPaths} from '../../constants/mapping.paths';
import {DashboardPageLoaderData} from "../../types/crm";
import * as S from "./dashboard.style";
import {Form} from "../../modules/antd/Form/Form";
import {Loader} from "../../modules/antd/Loader/Loader";
import UserStoreContext from "../../stores/user";

export const DashboardPage = () => {
    const {t} = useTranslation();
    const userStore = useContext(UserStoreContext);

    const handleSubmitBlogger = async (values: any) => {
        const formData = new FormData();
    };
    const handleSubmitAdvertiser = async (values: any) => {
        const formData = new FormData();
    };

    if (!userStore.isAuthenticated) {
        return <Loader/>;
    }
    const user = userStore.user;
    switch (user.agents.length + user.clients.length + user.merchants.length) {
        case 0:
            // create new entities
            return (
                <S.Card>
                    <Form onFinish={handleSubmitBlogger}>
                    </Form>
                </S.Card>
            )
        case 1:
            // redirect to created
            if (user.agents.length == 1) {
                // TODO: agent page
                return <Loader/>;
            } else if (user.clients.length == 1) {
                return <Navigate to={MappingPaths.PRIVATE.DASHBOARD_ADVERTISERS}/>
            } else if (user.partners.length == 1) {
                return <Navigate to={MappingPaths.PRIVATE.DASHBOARD_BLOGGERS}/>
            } else {
                // TODO: merchant page
                return <Loader/>;
            }
        default:
            // select one from many entities
            return (
                <S.Card>

                </S.Card>
            );
    }

};
export default DashboardPage;

export const action = async ({request}: ActionFunctionArgs) => {

}
export const loader = async () => {
    const userStore = useContext(UserStoreContext);
    await userStore.fetchData();
    return null;
};
