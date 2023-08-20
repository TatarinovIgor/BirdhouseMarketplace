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
            {data.map(item => (
                <BHInfoCard
                    key={item.guid} // Assuming 'guid' is a unique identifier
                    userName={item.name}
                    adName={item.description}
                    category={item.category}
                    price={item.price}
                    bg={item.bg}
                />
            ))}
        </>
    )
}
