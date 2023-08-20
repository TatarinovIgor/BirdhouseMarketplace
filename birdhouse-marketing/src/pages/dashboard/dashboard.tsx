import {useContext} from 'react';
import {Trans, useTranslation} from "react-i18next";
import {
    ActionFunctionArgs,
    Link,
    LoaderFunctionArgs,
    Navigate,
    redirect,
    useLoaderData,
    useNavigation
} from "react-router-dom";

import {MappingPaths} from '../../constants/mapping.paths';
import {DashboardPageLoaderData} from "../../types/crm";
import * as S from "./dashboard.style";
import {Form} from "../../modules/antd/Form/Form";
import {Loader} from "../../modules/antd/Loader/Loader";
import UserStoreContext from "../../stores/user";
import {Input} from "../../modules/antd/Input/Input";
import {Button} from "antd";

export const DashboardPage = () => {
    const {t} = useTranslation();
    const userStore = useContext(UserStoreContext);
    const navigation = useNavigation();

    const handleSubmit = async (values: any) => {
        const formData = new FormData();
        userStore.setFirstName(values['user.first_name']);
        userStore.setLastName(values['user.last_name']);
        await userStore.uploadData();
    };
    if (!userStore.isAuthenticated) {
        return <Loader/>;
    }
    const submitting = navigation.state === 'submitting';
    const user = userStore.user;
    switch (user.agents.length + user.clients.length + user.merchants.length) {
        case 0:
            // create new entities
            return (
                <S.Card>
                    <Form onFinish={handleSubmit}>
                        <Form.Item
                            key={'user.first_name'}
                            name={'user.first_name'}
                            initialValue={user.first_name}
                            rules={[
                                {
                                    required: true,
                                    message: t('validation.required')!,
                                },
                            ]}
                        >
                            <Input
                                size="large"
                                allowClear
                                placeholder={`${t(`dashboard.first_name`)}`}
                            />
                        </Form.Item>
                        <Form.Item
                            key={'user.last_name'}
                            name={'user.last_name'}
                            initialValue={user.last_name}
                            rules={[
                                {
                                    required: true,
                                    message: t('validation.required')!,
                                },
                            ]}
                        >
                            <Input
                                size="large"
                                allowClear
                                placeholder={`${t(`dashboard.last_name`)}`}
                            />
                        </Form.Item>
                        <Form.Item name={'user_submit'} key={'user_submit'} noStyle>
                            <Button
                                value={'user_submit'}
                                type="primary"
                                loading={submitting}
                                size="large"
                                htmlType="submit"
                                block
                            >
                                <Trans i18nKey="dashboard.submit"/>
                            </Button>
                        </Form.Item>
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
export const loader = async ({route}) => {
    const userStore = useContext(UserStoreContext);
    return userStore.fetchData();
};
