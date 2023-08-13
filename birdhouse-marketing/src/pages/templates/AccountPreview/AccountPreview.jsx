import React, { useEffect, useState } from 'react';
import {Card, Checkbox, Col, InputNumber, Row, Slider, Tabs, Typography} from "antd";
import {BHInfoCard} from "../../../modules/BHInfoCard.jsx";
import {AppstoreOutlined, ThunderboltFilled, ThunderboltOutlined, ThunderboltTwoTone} from "@ant-design/icons";

const { Title, Text } = Typography;
const { TabPane } = Tabs;

const AccountPreview = () => {
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

        const items = [
                {
                        key: '1',
                        label: `Tab 1`,
                        children: `Content of Tab Pane 1`,
                },
                {
                        key: '2',
                        label: `Tab 2`,
                        children: `Content of Tab Pane 2`,
                },
        ];

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
                                <Row justify="center" style={{ marginTop: 80, marginBottom: 100 }}>
                                        <Col span={24} style={{ maxWidth: 130, margin: "0 auto", textAlign: "center" }}>
                                                <img
                                                    alt=""
                                                    src="https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647552379244x207864892994998200/Group%20462.svg"
                                                    style={{ width: "100%", height: "100%", maxWidth: "130px", borderRadius: "100%" }}
                                                />
                                        </Col>

                                        <Col span={24} style={{ marginTop: 35, textAlign: "center" }}>
                                                <div>
                                                        <p id="UserName">User's Name</p>
                                                </div>
                                        </Col>

                                        <Col span={24} style={{ marginTop: 20, textAlign: "center" }}>
                                                {/* User stats */}
                                                <Row justify="center" gutter={[16, 16]}>
                                                        <Col>
                                                                <Card title="Items" bordered={false}>
                                                                        {/* Add user's items content here */}
                                                                </Card>
                                                        </Col>
                                                        <Col>
                                                                <Card title="Trades" bordered={false}>
                                                                        {/* Add user's trades content here */}
                                                                </Card>
                                                        </Col>
                                                        <Col>
                                                                <Card title="Volume Traded" bordered={false}>
                                                                        {/* Add user's volume traded content here */}
                                                                </Card>
                                                        </Col>
                                                </Row>
                                        </Col>
                                </Row>
                                <Row style={{
                                        display: "flex",
                                        alignSelf: "flex-start",
                                }}>
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
                                                <Tabs size="large" style={{
                                                        marginLeft: 50,
                                                }}>
                                                        <TabPane tab={ <span> <AppstoreOutlined/>Items </span> } key="1">
                                                                <Row gutter={20}>
                                                                        <BHInfoCard userName="Qwerty" adName="Res" category="Lifestyle" price="10$"/>
                                                                        <BHInfoCard userName="Qwerty" adName="Res" category="Lifestyle" price="10$"/>
                                                                        <BHInfoCard userName="Qwerty" adName="Res" category="Lifestyle" price="10$"/>
                                                                </Row>
                                                        </TabPane>
                                                        <TabPane tab={ <span> <ThunderboltOutlined/>Activity</span>} key="2">
                                                                <Row gutter={20} style={{
                                                                        marginLeft: 50
                                                                }}>
                                                                        No activities found
                                                                </Row>
                                                        </TabPane>
                                                </Tabs>
                                        </Col>
                                </Row>
                        </Col>
        </>
    );
};

export default AccountPreview;