import React, {useContext, useEffect, useState} from "react";
import "./style.css"
import {Layout, Input, Menu, Row, Col, Dropdown, Typography, Button} from 'antd';
import {
    DesktopOutlined,
    DollarOutlined,
    LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined,
    UserOutlined
} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {MappingPaths} from '../../constants/mapping.paths.js';
import UserStoreContext from "../../stores/user.tsx";
import profileIcon from "../../assets/img/icons/profileIcon.svg";
import caretDownIcon from "../../assets/img/icons/carretDown.svg"

const { Sider } = Layout;
const { SubMenu } = Menu;
const { Header} = Layout;

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowWidth;
};


export const BHHeader = () => {
    const userStore = useContext(UserStoreContext);
    const [collapsed, setCollapsed] = useState(false);
    const windowWidth = useWindowWidth(); // Custom hook to get window width

    const isMobile = windowWidth <= 768;
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const items = [
        {
            key: '1',
            label: (
                <Link to={MappingPaths.PRIVATE.ACCOUNT_PREVIEW}>Account</Link>
            ),
            icon: <UserOutlined />
        },
        {
            key: '2',
            label: 'Balance: ',
            icon: <DollarOutlined />,
            disabled: true
        },
        {
            key: '3',
            label: (
                <Link to={MappingPaths.PRIVATE.DASHBOARD}>Dashboard</Link>
            ),
            icon: <PieChartOutlined />
        },
        {
            key: '4',
            label: (
                <Link to="/">Log out</Link>
            ),
            icon: <LogoutOutlined />,
        },
    ];

    const menuForMobile = (
        <Sider width={200} theme="light" style={{alignSelf: "end"}}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
            >
                <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                    <Menu.Item key="1">Profile</Menu.Item>
                    <Menu.Item key="2">Settings</Menu.Item>
                </SubMenu>
                <Menu.Item key="3" icon={<DesktopOutlined />}>
                    Dashboard
                </Menu.Item>
                <Menu.Item key="4" icon={<PieChartOutlined />}>
                    Charts
                </Menu.Item>
            </Menu>
        </Sider>
    );
    return (
        <>
            <Header
                style={{
                    backgroundColor: 'white',
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 25px 0px',
                    width: "100%"
                }}
            >
                <Row style={{ maxWidth: 1180, margin: '0 auto', alignItems: 'center' }}>
                    <Col span={6} style={{ fontSize: 40, fontWeight: 800 }}>
                        <Link to={MappingPaths.ROOT}>
                            <span style={{ color: '#00ffff' }}>B</span>
                            <span style={{ color: '#000000' }}>H</span>
                        </Link>
                    </Col>
                    <Col span={4} style={{ display: 'flex', alignItems: 'center' }}>
                        qw
                    </Col>
                    <Col span={14}>
                        <Layout>
                            {isMobile ? (
                                menuForMobile
                            ) : (
                                <Menu className="desktop-menu" mode="horizontal" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
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
                                        color: "transparent",
                                    }}>
                                        {userStore.is_authenticated
                                            ? <Dropdown
                                                menu={{
                                                    items,
                                                }}
                                                trigger={['click']}
                                            >
                                                <div style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                }}>
                                                    <span style={{
                                                        marginRight: 10,
                                                    }}>
                                                        AntonTat27
                                                    </span>
                                                    <img src={profileIcon} alt="profile icon"/>
                                                    <img src={caretDownIcon} alt="Caret down icon"/>
                                                </div>
                                            </Dropdown>
                                            : <Link to={MappingPaths.PUBLIC.LOGIN}>Log in / Register</Link>
                                        }
                                    </Menu.Item>
                                </Menu>
                            )}
                        </Layout>
                    </Col>
                </Row>
            </Header>
        </>
    );
};
