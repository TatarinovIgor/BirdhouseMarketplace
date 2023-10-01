import React, {useContext, useEffect, useState} from 'react';
import "./style.css"
import {Row, Typography, Col, Tabs} from "antd";
import {json, redirect, useLoaderData, useLocation, useSearchParams} from "react-router-dom";
import {CRM_BASE_URL} from "../../constants/endpoins.js";
import axios from "axios";
import {MappingPaths} from "../../constants/mapping.paths.js";
import {ServiceCRM} from "../../types/crm";

const {Title, Text} = Typography;
const {TabPane} = Tabs;
const ProductPage = () => {

    const productData = (useLoaderData() || {}) as ServiceCRM;

    console.log("my load resp:", productData)

    let imageGuid = productData.images[0]
    let productName = productData.name
    let productCategory = productData.categories[0].category
    let productPrice = productData.price
    let productDescription = productData.description
    let imageUrl = "url("+CRM_BASE_URL+"/images/content/"+imageGuid+")"
    imageUrl.replace(/&quot;|&#039;/g, "'")
    // @ts-ignore
    // @ts-ignore
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
                        <div
                            style={{
                                height: 280,
                                width: 280,
                                borderRadius: 20,
                                backgroundSize: "cover",
                                backgroundImage: imageUrl,
                                alignItems: "flex-end",
                                display: "flex",
                                marginBottom: 20,
                                marginRight: 20,
                            }}
                        ></div>
                    </Col>
                    <Col style={{
                        justifyContent: "flex-start"
                    }}>
                        <>
                                    <span style={{
                                        fontSize: 30,
                                        fontWeight: "bold"
                                    }}>
                                        {productName}
                                    </span>

                            Category: {productCategory}
                        </>
                        <div>
                            by n
                        </div>
                        <div>
                            <Text style={{
                                fontSize: 21
                            }}>
                                {productPrice} $
                            </Text>
                        </div>
                        <div>
                            <div style={{
                                fontSize: 25
                            }}>
                                Description:
                            </div>
                            {productDescription}
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

export const loader = async () => {

    const queryParam = window.location.search;
    const params = new URLSearchParams(queryParam);
    const guid = params.get("guid");
    const apiUrl = `${CRM_BASE_URL}/services/${guid}`;

    console.log(guid)
    try {
        const response = await axios.get(apiUrl)
        console.log("loader response: ", response.data)
        return response.data;
    } catch (e: any) {
        // check for axios@0.21 Error
        if (!e.isAxiosError) {
            throw e;
        }

        const {data} = e.response;

        if (data.error) {
            return redirect(MappingPaths.PRIVATE.EXPLORE_ADVERTISES);
        }

        if (data.ui) {
            return data;
        }
        throw e;
    }
};
export default ProductPage;