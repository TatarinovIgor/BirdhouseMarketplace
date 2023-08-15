import React, { useEffect, useState } from 'react';
import "./style.css"
import {BHInfoCard} from "../../../modules/BHInfoCard.jsx";
import {Row, Typography, Col, Tabs} from "antd";
import {AppstoreOutlined, ThunderboltOutlined} from "@ant-design/icons";

const {Title, Text} = Typography;
const {TabPane} = Tabs;
const ProductPage = () => {

    return (
        <>
                {/* Content */}
                <div
                    style={{
                        alignSelf: "center",
                        maxWidth: 1200,
                        width: "calc(100% - 0px)",
                        margin: "145px 0px 60px",
                        justifyContent: "flex-start",
                    }}
                >
                    <Row
                        style={{
                            alignSelf: "center",
                            minWidth: 320,
                            width: "calc(100% - 0px)",
                            margin: "0px 0px 60px",
                        }}
                    >
                        <Col>
                            <BHInfoCard userName="Qwerty" adName="Res" category="Lifestyle" price="10$" bg={
                                "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1688368811224x263609441702520770%2F14f6944b242eef8884e860f46c01a291.png?w=512&h=512&auto=compress&dpr=2&fit=crop&q=100"
                            }/>
                        </Col>
                        <Col style={{
                            justifyContent: "flex-start"
                        }}>
                            <div style={{
                                marginBottom: 50,
                            }}>
                                <Text style={{
                                    fontSize: 21
                                }}>
                                    Advertiser:
                                </Text>
                            </div>
                            <div style={{
                                marginBottom: 50,
                            }}>
                                <Text style={{
                                    fontSize: 21
                                }}>
                                    Category:
                                </Text>
                            </div>
                            <div>
                                <Text style={{
                                    fontSize: 21
                                }}>
                                    Price:
                                </Text>
                            </div>
                        </Col>
                    </Row>
                    <Tabs size="large" style={{
                        paddingLeft: 30,
                        borderRadius: 30,
                        backgroundColor: "white"
                    }}>
                        <TabPane tab="Description" key="1">
                            Created by:
                        </TabPane>
                        <TabPane tab="Price History" key="2">

                        </TabPane>
                        <TabPane tab="Details" key="3">
                            Unique ID
                            Token ID
                            9921
                            Token Standard
                            ERC-721
                            Blockchain
                        </TabPane>
                        <TabPane tab="Item Activity" key="4">

                        </TabPane>
                    </Tabs>
                </div>
        </>

    );
};

export default ProductPage;