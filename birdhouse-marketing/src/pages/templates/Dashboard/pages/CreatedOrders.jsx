import {Typography} from "antd"

const { Title, Text} = Typography;
export const CreatedOrders = () => {
    return (
        <>
            <Title>
                Created Orders
            </Title>
            <Text style={{
                fontWeight: 500,
            }}>
                No orders found.
            </Text>
        </>
    )
}
