import React, { useEffect, useState } from 'react';
import "./style.css";
import {Button, Checkbox, Col, Divider, InputNumber, Row, Select, Slider, Typography} from "antd";
import {AppstoreOutlined, BarsOutlined} from "@ant-design/icons";
import {BHInfoCard} from "../../../modules/BHInfoCard.jsx";
import {CRM_BASE_URL} from "../../../constants/endpoins.js";

const { Title, Text} = Typography;
const ExploreAdvertisers = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Make a GET request using fetch
        const apiUrl = `${CRM_BASE_URL}/merchants/88cf844b-14f9-423c-93ad-ddc8abc3b479/products`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const [selectedFilter, setSelectedFilter] = useState("LowHigh");

    const handleFilterChange = (value) => {
        setSelectedFilter(value);
    };

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100);

    const handleMinPriceChange = (value) => {
        setMinPrice(value);
    };

    const handleMaxPriceChange = (value) => {
        setMaxPrice(value);
    };

    const handleSliderChange = (values) => {
        setMinPrice(values[0]);
        setMaxPrice(values[1]);
    };

    return (
        <>
            <Col style={{
                alignSelf: "center",
                minWidth: 320,
                maxWidth: 1200,
                minHeight: 150,
                width: "calc(100% - 0px)",
                marginBottom: 100,
                marginTop: 150
            }}>
                {/* Upper panel */}
                <Row justify="space-between" gutter={20} align="middle">
                    <Col span={6}>
                        <Title level={3}>Explore Advertisers</Title>
                        <Divider />
                    </Col>
                    <Col span={18} style={{ textAlign: 'right' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ flex: 1, textAlign: 'left', color: "rgb(123, 123, 123)" }}>Found 0 Ads</span>
                            <Select
                                value={selectedFilter}
                                defaultValue="LowHigh"
                                onChange={handleFilterChange}
                                style={{ width: 200 }}
                            >
                                <Option value="LowHigh">Price: Low - High</Option>
                                <Option value="HighLow">Price: High - Low</Option>
                                <Option value="AZ">Name: A - Z</Option>
                                <Option value="ZA">Name: Z - A</Option>
                            </Select>
                            <Button icon={<AppstoreOutlined />} />
                            <Button icon={<BarsOutlined />} />
                        </div>
                        <Divider />
                    </Col>
                </Row>
                {/* Offers of the page */}
                <Row>
                    <Col span={5}>
                        <Title level={3}>Category</Title>
                        <Checkbox.Group style={{
                            marginBottom: 50
                        }}>
                            <Col>
                                <div>
                                    <Checkbox value="Beauty">Beauty</Checkbox>
                                </div>
                                <div>
                                    <Checkbox value="Crypto">Crypto</Checkbox>
                                </div>
                                <div>
                                    <Checkbox value="Fashion">Fashion</Checkbox>
                                </div>
                                <div>
                                    <Checkbox value="Lifestyle">Lifestyle</Checkbox>
                                </div>
                                <div>
                                    <Checkbox value="Music">Music</Checkbox>
                                </div>
                                <div>
                                    <Checkbox value="Other">Other</Checkbox>
                                </div>
                            </Col>
                        </Checkbox.Group>
                        <Title level={3}>Price</Title>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <InputNumber
                                style={{ width: 100 }}
                                value={minPrice}
                                addonAfter="$"
                                onChange={handleMinPriceChange}
                            />
                            <InputNumber
                                style={{ width: 100 }}
                                value={maxPrice}
                                addonAfter="$"
                                onChange={handleMaxPriceChange}
                            />
                        </div>
                        <Slider range value={[minPrice, maxPrice]} onChange={handleSliderChange}/>
                    </Col>
                    <Col span={19}>
                        <Row gutter={20} style={{
                            marginLeft: 50
                        }}>
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
                        </Row>
                    </Col>
                </Row>
            </Col>
        </>
    );
};

export default ExploreAdvertisers;