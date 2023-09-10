import {Col, Row, Typography} from "antd"
import React, {useContext, useEffect, useState} from "react";
import {CRM_BASE_URL} from "../../../../constants/endpoins.js";
import axios from "axios";
import {BHInfoCard} from "../../../../modules/BHInfoCard.jsx";
import {Link} from "react-router-dom";
import OfferStoreContext from "../../../../stores/offers";

const { Title, Text} = Typography;
export const CreatedOrders = () => {
    const [data, setData] = useState([]);

    const offerStore = useContext(OfferStoreContext);
    const offers = Object.entries(offerStore.GetOffers())
    //console.log(offers)
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
