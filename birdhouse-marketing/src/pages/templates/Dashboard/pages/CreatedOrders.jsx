import {Typography} from "antd"
import React, {useEffect, useState} from "react";
import {CRM_BASE_URL} from "../../../../constants/endpoins.js";
import axios from "axios";
import {BHInfoCard} from "../../../../modules/BHInfoCard.jsx";

const { Title, Text} = Typography;
export const CreatedOrders = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Define the API URL

        const apiUrl = `${CRM_BASE_URL}/partners/{guid}/services`;

        axios.get(apiUrl)
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
            <Title>
                Created Orders
            </Title>
            {data.map(item => {
                const metaData = JSON.parse(item.meta_data); // Parse the JSON string
                return (
                    <BHInfoCard
                        key={item.guid}
                        userName={item.name}
                        adName={item.description}
                        category={metaData.category}
                        price={metaData.price}
                        bg={item.bg}
                    />
                );
            })}
        </>
    )
}
