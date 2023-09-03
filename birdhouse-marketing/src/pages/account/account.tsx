import React, {useContext, useEffect, useState} from 'react';
import {Trans, useTranslation} from "react-i18next";
import {Collapse, List, Radio, Typography} from "antd";
import type {CollapseProps} from 'antd';
import {BHInfoCard} from "../../modules/BHInfoCard.jsx";
import {AppstoreOutlined, ThunderboltFilled, ThunderboltOutlined, ThunderboltTwoTone} from "@ant-design/icons";
import UserStoreContext from "../../stores/user.js";
import * as S from "./account.style";
import {Form} from "../../modules/antd/Form/Form";
import {Input} from "../../modules/antd/Input/Input";
import {Button} from "antd";
import {useNavigation} from "react-router-dom";
import {EntityData} from "../../types/crm";
import {EntitiesType} from "../../types/bh";
import {CRM_BASE_URL} from "../../constants/endpoins";

const {Title, Text} = Typography;

const Account = () => {
    const {t} = useTranslation();
    const [isUploaded, changeUploaded] = useState(true);
    const userStore = useContext(UserStoreContext);
    const navigation = useNavigation();
    const entities = {} as EntityData[]

    const handleSubmit = async (values: any) => {
        userStore.setFirstName(values['user.first_name']);
        userStore.setLastName(values['user.last_name']);
        userStore.uploadData().then(() => {
            changeUploaded(true);
        });
        window.location.reload();
    };
    const handleCreate = async (values: any) => {
        const data = {
            name: values['entity.name'],
            email: values['entity.name'],
        }
        const response = await fetch(CRM_BASE_URL + '/'+ values['entity.type']  +'/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            window.location.reload()
        }

    };
    const submitting = navigation.state === 'submitting';

    return (<S.Card>
            <Form onFinish={handleSubmit}>
                <Title>{t('account.user_info')}</Title>
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
                        onChange={() => {
                            changeUploaded(false)
                        }}
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
                        onChange={() => {
                            changeUploaded(false)
                        }}
                    />
                </Form.Item>
                <Form.Item name={'user_submit'} key={'user_submit'} noStyle>
                    <Button
                        value={'user_submit'}
                        type="primary"
                        loading={submitting}
                        disabled={isUploaded}
                        size="large"
                        htmlType="submit"
                        block
                    >
                        <Trans i18nKey="account.submit"/>
                    </Button>
                </Form.Item>
            </Form>
            <Title level={2}>{t('account.user_entities')}</Title>
            <List
                itemLayout="horizontal"
                dataSource={userStore.ListEntities}
                renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                            title={`${item.Email}`}
                            description={`${item.ID}`}
                        />
                    </List.Item>
                )}/>
            <Collapse items={Collapse['new'] = [{
                key: 1, label: t('account.entity.new'), children:
                    <Form onFinish={handleCreate}>
                        <Form.Item
                            key={'entity.type'}
                            name={'entity.type'}
                            rules={[
                                {
                                    required: true,
                                    message: t('validation.required')!,
                                },
                            ]}
                        >
                            <Radio.Group defaultValue="a">
                                <Radio.Button value={EntitiesType.Advertisers}>
                                    {t('account.entity.advertiser')}</Radio.Button>
                                <Radio.Button value={EntitiesType.Bloggers}>
                                    {t('account.entity.blogger')}</Radio.Button>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item
                            key={'entity.name'}
                            name={'entity.name'}
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
                                placeholder={`${t(`account.entity.name`)}`}
                            />
                        </Form.Item>
                        <Form.Item
                            key={'entity.email'}
                            name={'entity.email'}
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
                                placeholder={`${t(`account.entity.email`)}`}
                            />
                        </Form.Item>
                        <Form.Item name={'entity_create'} key={'entity_create'} noStyle>
                            <Button
                                value={'entity_create'}
                                type="primary"
                                loading={submitting}
                                size="large"
                                htmlType="submit"
                                block
                            >
                                <Trans i18nKey="account.entity.create"/>
                            </Button>
                        </Form.Item>
                    </Form>
            }]}>
            </Collapse>
        </S.Card>
    );
};

export default Account;
