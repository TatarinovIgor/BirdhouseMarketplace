import React, {useContext, useEffect, useState} from 'react';
import {Trans, useTranslation} from "react-i18next";
import {Tabs, Typography} from "antd";
import {BHInfoCard} from "../../modules/BHInfoCard.jsx";
import {AppstoreOutlined, ThunderboltFilled, ThunderboltOutlined, ThunderboltTwoTone} from "@ant-design/icons";
import UserStoreContext from "../../stores/user.js";
import * as S from "./account.style";
import {Form} from "../../modules/antd/Form/Form";
import {Input} from "../../modules/antd/Input/Input";
import {Button} from "antd";
import {useNavigation} from "react-router-dom";

const {Title, Text} = Typography;
const {TabPane} = Tabs;

const Account = () => {
    const {t} = useTranslation();
    const userStore = useContext(UserStoreContext);
    const navigation = useNavigation();

    const handleSubmit = async (values: any) => {
        const formData = new FormData();
        userStore.setFirstName(values['user.first_name']);
        userStore.setLastName(values['user.last_name']);
        await userStore.uploadData();
    };
    const submitting = navigation.state === 'submitting';

    return (<S.Card>
            <Form onFinish={handleSubmit}>
                <Form.Item
                    key={'user.first_name'}
                    name={'user.first_name'}
                    initialValue={userStore.User.first_name}
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
                        placeholder={`${t(`account.first_name`)}`}
                    />
                </Form.Item>
                <Form.Item
                    key={'user.last_name'}
                    name={'user.last_name'}
                    initialValue={userStore.User.last_name}
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
                        placeholder={`${t(`account.last_name`)}`}
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
                        <Trans i18nKey="account.submit"/>
                    </Button>
                </Form.Item>
            </Form>
        </S.Card>
    );
};

export default Account;
