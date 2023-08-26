import "./style.css";
import {Tabs, Typography} from "antd";
import {CreatedOrders} from "./pages/CreatedOrders.jsx";
import {AcceptedOrders} from "./pages/AcceptedOrders.jsx";
import {AssignedOrders} from "./pages/AssignedOrders.jsx";
import {CreateOrderPage} from "./pages/CreateOrderPage.jsx";
import {Profile} from "./pages/Profile.jsx";
import {Settings} from "./pages/Settings.jsx";
import createdOrdersIcon from "../../../assets/img/icons/toDoListIcon.png"
import acceptedOrdersIcon from "../../../assets/img/icons/dashboardIcon.png"
import assignedOrdersIcon from "../../../assets/img/icons/checkboxIcon.png"
import createOrderIcon from "../../../assets/img/icons/edit.svg"
import profileIcon from "../../../assets/img/icons/user.svg"
import settingsIcon from "../../../assets/img/icons/settings.svg"
import React from "react";

const { TabPane } = Tabs;
const { Title } = Typography;

const Dashboard = () => {
    const isMobile = window.innerWidth <= 768;

    const tabPosition = isMobile ? 'top' : 'left';


    return (
        <>
            <div
                style={{
                    alignSelf: "center",
                    minWidth: 320,
                    maxWidth: 1200,
                    width: "calc(100% - 0px)",
                    margin: "100px 0px",
                    justifyContent: "space-between",
                }}
            >
                    <Tabs size="large" tabPosition={tabPosition}>
                    <TabPane tab={
                        <span style={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <img style={{width: 24, marginRight: 10}} src={createdOrdersIcon} alt="Created orders icon"/>
                            Created orders
                        </span>
                    } key="1">
                        <CreatedOrders/>
                    </TabPane>
                    <TabPane tab={
                        <span style={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <img style={{width: 24, marginRight: 10}} src={acceptedOrdersIcon} alt="Accepted orders icon"/>
                            Accepted orders
                        </span>
                    } key="2">
                        <AcceptedOrders />
                    </TabPane>
                    <TabPane tab={
                        <span style={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <img style={{width: 24, marginRight: 10}} src={assignedOrdersIcon} alt="Assigned orders icon"/>
                            Assigned orders
                        </span>
                    } key="3">
                        <AssignedOrders />
                    </TabPane>
                    <TabPane tab={
                        <span style={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <img style={{width: 24, marginRight: 10}} src={createOrderIcon} alt="Create order icon"/>
                            Create order
                        </span>
                    } key="4">
                        <CreateOrderPage />
                    </TabPane>
                    <TabPane tab={
                        <span style={{
                            display: "flex",
                            alignItems: "center",
                        }}>
                            <img style={{width: 24, marginRight: 10}} src={profileIcon} alt="Profile icon"/>
                            Profile
                        </span>
                    } key="5">
                        <Title>Profile settings</Title>
                        <Profile />
                    </TabPane>
                    <TabPane tab={
                            <span style={{
                                display: "flex",
                                alignItems: "center"
                            }}>
                                <img style={{width: 24, marginRight: 10}} src={settingsIcon} alt="Settings icon"/>
                                Settings
                            </span>
                    } key="6">
                        <Title> Settings </Title>
                        <Settings />
                    </TabPane>
                </Tabs>
            </div>
        </>
    );
};

export default Dashboard;