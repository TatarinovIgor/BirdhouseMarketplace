import {useTranslation} from "react-i18next";
import {ActionFunctionArgs, LoaderFunctionArgs, redirect} from "react-router-dom";
import {kratos} from '../../auth/kratos';

import {MappingPaths} from '../../constants/mapping.paths';
import {CRM_BASE_URL} from '../../constants/endpoins';

export const DashboardPage = () => {
    const {t} = useTranslation();

}
export default DashboardPage;

export const action = async ({request}: ActionFunctionArgs) => {

}
export const loader = async ({request}: LoaderFunctionArgs) => {
    try {
        const response = await fetch(CRM_BASE_URL + 'users/');
        response.json().then(res => {
                console.log(res);
            }
        )
    } catch (e: any) {

    }
    return null;
};
