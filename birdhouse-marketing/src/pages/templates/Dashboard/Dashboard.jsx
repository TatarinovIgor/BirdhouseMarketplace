import "./style.css";
import {Layout, Menu} from "antd";
import {CheckCircleOutlined, FileDoneOutlined, PlusOutlined, ProfileOutlined, SettingOutlined} from "@ant-design/icons";
import {CreatedOrders} from "./pages/CreatedOrders.jsx";
import {AcceptedOrders} from "./pages/AcceptedOrders.jsx";
import {AssignedOrders} from "./pages/AssignedOrders.jsx";
import {useState} from "react";
import {CreateOrderPage} from "./pages/CreateOrderPage.jsx";
import {Profile} from "./pages/Profile.jsx";
import {Settings} from "./pages/Settings.jsx";

const { Sider } = Layout;
const { SubMenu } = Menu;


const Dashboard = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState('created-orders');

    const handleMenuItemClick = (itemKey) => {
        setSelectedMenuItem(itemKey);
    };

    const renderSelectedContent = () => {
        switch (selectedMenuItem) {
            case 'created-orders':
                return <CreatedOrders/>;
            case 'accepted-orders':
                return <AcceptedOrders/>;
            case 'assigned-orders':
                return <AssignedOrders/>;
            case 'create-order':
                return <CreateOrderPage/>;
            case 'profile':
                return <Profile/>;
            case 'settings':
                return <Settings/>;
            default:
                return null;
        }
    };


    return (
        <>
            {/* Content */}
                <div
                style={{
                    alignSelf: "center",
                    minWidth: 320,
                    maxWidth: 1200,
                    width: "calc(100% - 0px)",
                    margin: "100px 0px 0px",
                    justifyContent: "space-between",
                }}
            >
                <Sider>
                    <Menu mode="inline" selectedKeys={[selectedMenuItem]} onSelect={(e) => handleMenuItemClick(e.key)}>
                        <Menu.Item key="created-orders" icon={<FileDoneOutlined />}>
                            Created orders
                        </Menu.Item>
                        <Menu.Item key="accepted-orders" icon={<CheckCircleOutlined />}>
                            Accepted orders
                        </Menu.Item>
                        <Menu.Item key="assigned-orders" icon={<CheckCircleOutlined />}>
                            Assigned orders
                        </Menu.Item>
                        <Menu.Item key="create-order" icon={<PlusOutlined />}>
                            Create order
                        </Menu.Item>
                        <Menu.Item key="profile" icon={<ProfileOutlined />}>
                            Profile
                        </Menu.Item>
                        <Menu.Item key="settings" icon={<SettingOutlined />}>
                            Settings
                        </Menu.Item>
                    </Menu>
                </Sider>
                {renderSelectedContent()}
            </div>
        </>
    );
};

export default Dashboard;