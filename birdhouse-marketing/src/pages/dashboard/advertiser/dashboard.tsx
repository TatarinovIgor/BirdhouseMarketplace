
import React, { useContext } from 'react';
import {Tabs, Typography} from "antd";
import {CreatedOrders} from "../../templates/Dashboard/pages/CreatedOrders.jsx";
import {AcceptedOrders} from "../../templates/Dashboard/pages/AcceptedOrders.jsx";
import {AssignedOrders} from "../../templates/Dashboard/pages/AssignedOrders.jsx";
import {CreateOrderPage} from "../../templates/Dashboard/pages/CreateOrderPage.jsx";
import {Profile} from "../../templates/Dashboard/pages/Profile.jsx";
import {Settings} from "../../templates/Dashboard/pages/Settings.jsx";

import * as S from "./dashboard.style";

import createdOrdersIcon from '../../../assets/img/icons/toDoListIcon.png'
import acceptedOrdersIcon from "../../../assets/img/icons/dashboardIcon.png"
import assignedOrdersIcon from "../../../assets/img/icons/checkboxIcon.png"
import createOrderIcon from "../../../assets/img/icons/edit.svg"
import profileIcon from "../../../assets/img/icons/user.svg"
import settingsIcon from "../../../assets/img/icons/Settings.svg"
import {ActionFunctionArgs} from "react-router-dom";

const {TabPane} = Tabs;
const {Title} = Typography;

const Dashboard = () => {
    const isMobile = window.innerWidth <= 768;

    const tabPosition = isMobile ? 'top' : 'left';
    if (!isMobile) {
        return (
            <S.Card style={{
                backgroundColor: "transparent"
            }}>
                <Tabs size="large" tabPosition={tabPosition}>
                    <TabPane tab={
                        <span style={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                                <img style={{width: 24, marginRight: 10}} src={createdOrdersIcon}
                                     alt="Created orders icon"/>
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
                                <img style={{width: 24, marginRight: 10}} src={acceptedOrdersIcon}
                                     alt="Accepted orders icon"/>
                                Accepted orders
                            </span>
                    } key="2">
                        <AcceptedOrders/>
                    </TabPane>
                    <TabPane tab={
                        <span style={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                                <img style={{width: 24, marginRight: 10}} src={assignedOrdersIcon}
                                     alt="Assigned orders icon"/>
                                Assigned orders
                            </span>
                    } key="3">
                        <AssignedOrders/>
                    </TabPane>
                    <TabPane tab={
                        <span style={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                                <img style={{width: 24, marginRight: 10}} src={createOrderIcon}
                                     alt="Create order icon"/>
                                Create order
                            </span>
                    } key="4">
                        <CreateOrderPage/>
                    </TabPane>
                    <TabPane tab={
                        <span style={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                                <img style={{width: 24, marginRight: 10}} src={profileIcon} alt="Profile icon"/>
                                Profile
                            </span>
                    } key="5">
                        <Title>Profile settings</Title>
                        <Profile/>
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
                        <Settings/>
                    </TabPane>
                </Tabs>
            </S.Card>
        );
    } else {
        return (
            <S.Card style={{
                backgroundColor: "transparent"

            }}>
                <Tabs size="small" tabPosition={tabPosition}>
                    <TabPane tab={
                        <span style={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                                <img style={{width: 24, marginRight: 10}} src={createdOrdersIcon}
                                     alt="Created orders icon"/>
                            </span>
                    } key="1">
                        <CreatedOrders/>
                    </TabPane>
                    <TabPane tab={
                        <span style={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                                <img style={{width: 24, marginRight: 10}} src={acceptedOrdersIcon}
                                     alt="Accepted orders icon"/>
                            </span>
                    } key="2">
                        <AcceptedOrders/>
                    </TabPane>
                    <TabPane tab={
                        <span style={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                                <img style={{width: 24, marginRight: 10}} src={assignedOrdersIcon}
                                     alt="Assigned orders icon"/>
                            </span>
                    } key="3">
                        <AssignedOrders/>
                    </TabPane>
                    <TabPane tab={
                        <span style={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                                <img style={{width: 24, marginRight: 10}} src={createOrderIcon}
                                     alt="Create order icon"/>
                            </span>
                    } key="4">
                        <CreateOrderPage/>
                    </TabPane>
                    <TabPane tab={
                        <span style={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                                <img style={{width: 24, marginRight: 10}} src={profileIcon} alt="Profile icon"/>
                            </span>
                    } key="5">
                        <Profile/>
                    </TabPane>
                    <TabPane tab={
                        <span style={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                                    <img style={{width: 24, marginRight: 10}} src={settingsIcon} alt="Settings icon"/>
                                </span>
                    } key="6">
                        <Settings/>
                    </TabPane>
                </Tabs>
            </S.Card>
        );
    }
};
export const action = async ({request}: ActionFunctionArgs) => {

}
export const loader = async () => {
    //const userStore = useContext(UserStoreContext);
    //await userStore.fetchData();
    return null;
};

export default Dashboard;
