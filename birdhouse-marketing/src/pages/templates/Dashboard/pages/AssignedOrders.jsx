import {Typography} from "antd";

const { Title, Text } = Typography;

export const AssignedOrders = () => {
    return (
        <>
            <Title>
                Assigned Orders
            </Title>
            <Text style={{
                fontWeight: 500,
            }}>
                No orders found.
            </Text>
        </>
    )
}
