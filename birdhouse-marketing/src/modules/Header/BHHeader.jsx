import React from "react";
import "./style.css"
import {Layout, Input, Menu, Row, Col} from 'antd';
import {SearchOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {MappingPaths} from '../../constants/mapping.paths.js';

const { Header} = Layout;

export const BHHeader = () => {


    return (
        <>
            <Header
                style={{
                    backgroundColor: 'white',
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 25px 0px',
                }}
            >
                <Row style={{ maxWidth: 1180, margin: '0 auto', alignItems: 'center' }}>
                    <Col span={4} style={{ fontSize: 40, fontWeight: 800 }}>
                        <Link to={MappingPaths.ROOT}>
                            <span style={{ color: '#00ffff' }}>B</span>
                            <span style={{ color: '#000000' }}>H</span>
                        </Link>
                    </Col>
                    <Col span={6} style={{ display: 'flex', alignItems: 'center' }}>
                        <Input
                            size="large"
                            prefix={<SearchOutlined/>}
                            placeholder="Search ads, usernames, categories"
                        />
                    </Col>
                    <Col span={14}>
                        <Menu mode="horizontal" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Menu.Item key="1">
                                <Link to={MappingPaths.PRIVATE.EXPLORE_BLOGGERS}>Bloggers</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to={MappingPaths.PRIVATE.EXPLORE_ADVERTISES}>Advertisers</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to={MappingPaths.PRIVATE.DASHBOARD}>Create</Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link to={MappingPaths.PUBLIC.ABOUT}>About us</Link>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Link to={MappingPaths.PUBLIC.CONTACT_US}>Contact us</Link>
                            </Menu.Item>
                            <Menu.Item key="6" style={{
                                backgroundClip: "text",
                                backgroundImage: "linear-gradient(45deg, #244fff, #07b9ff)",
                                WebkitBackgroundClip: "text",
                                color: "transparent"
                            }}> <Link to={MappingPaths.PUBLIC.LOGIN}>Log in / Register</Link></Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </Header>
        </>
    );
};

export default BHHeader;
