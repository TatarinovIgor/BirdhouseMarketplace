import React, {useContext} from 'react';
import {useTranslation} from "react-i18next";
import {Navigate} from "react-router-dom";
import {MappingPaths} from '../../constants/mapping.paths';
import {Loader} from "../../modules/antd/Loader/Loader";
import {EntitiesType} from '../../types/bh';
import UserStoreContext, {UserStore} from "../../stores/user";

// That is just routing to dashboard depending on current user state
export const DashboardPage = () => {
    const {t} = useTranslation();
    const userStore = useContext(UserStoreContext);

    if (!userStore.isAuthenticated) {
        return <Navigate to={MappingPaths.PUBLIC.LOGIN}/>
    }
    const currentEntity = userStore.CurrentEntity;
    switch (currentEntity.Type) {
        case EntitiesType.Agents:
            // TODO: agent page
            return <Loader/>;
        case EntitiesType.Advertisers:
            return <Navigate to={MappingPaths.PRIVATE.DASHBOARD_ADVERTISERS}/>
        case EntitiesType.Bloggers:
            return <Navigate to={MappingPaths.PRIVATE.DASHBOARD_BLOGGERS}/>
        case EntitiesType.Admins:
            // TODO: merchant page
            return <Loader/>;
        default:
            return <Navigate to={MappingPaths.PRIVATE.ACCOUNT}/>
    }
};

export default DashboardPage;
