import {Col, Row, Typography} from "antd"
import React, {useEffect, useState} from "react";
import {CRM_BASE_URL} from "../../../../constants/endpoins.js";
import axios from "axios";
import {BHInfoCard} from "../../../../modules/BHInfoCard.jsx";
import {Link} from "react-router-dom";

const { Title, Text} = Typography;
export const CreatedOrders = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Define the API URL

        const apiUrl = `${CRM_BASE_URL}/partners/63c53aa5-5165-49c5-8b81-b01b1362a4d5/services`;
        axios.get(apiUrl)
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
            <Title>
                Created Orders
            </Title>
            <Col>
                <Row gutter={20} style={{
                    marginLeft: 50
                }}>
                    {data.map(item => {
                        const metaData = JSON.parse(item.meta_data);
                        return (
                            <Link
                                to={'/ui/product_page'}
                                state={{
                                    userName: item.name,
                                    description: item.description,
                                    adName: item.name,
                                    category: metaData.category,
                                    price: metaData.price,
                                    bg: item.bg,
                                }}
                                style={{ textDecoration: "none" }}
                            >
                                <BHInfoCard
                                    key={item.guid}
                                    userName={item.name}
                                    adName={item.description}
                                    category={metaData.category}
                                    price={metaData.price}
                                    bg={item.bg}
                                />
                            </Link>
                        );
                    })}
                </Row>
            </Col>
        </>
    )
}
