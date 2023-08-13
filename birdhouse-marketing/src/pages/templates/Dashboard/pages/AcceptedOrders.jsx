import {Typography} from "antd";

const { Title, Text } = Typography;
export const AcceptedOrders = () => {
    return (
        <>
            <Title>
                Accepted Orders
            </Title>
            <Text style={{
                fontWeight: 500,
            }}>
                No orders found.
            </Text>
        </>
    )
}
