import React, {useContext, useEffect, useState} from 'react';
import "./style.css"
import {Row, Typography, Col, Tabs, Button} from "antd";
import {json, redirect, useLoaderData, useLocation, useSearchParams} from "react-router-dom";
import {CRM_BASE_URL} from "../../constants/endpoins.js";
import axios from "axios";
import {MappingPaths} from "../../constants/mapping.paths.js";
import {ServiceCRM} from "../../types/crm";

const {Title, Text} = Typography;
const {TabPane} = Tabs;
const ProductPage = () => {

    const productData = (useLoaderData() || {}) as ServiceCRM;

    const queryParam = window.location.search;
    const params = new URLSearchParams(queryParam);
    const guid = params.get("guid");

    console.log("my load resp:", productData)
    let RejectCreationButtonStatus = "none"
    let FinishButtonStatus = "none"
    let ApproveButtonStatus = "none"
    let ChangeButtonStatus = "none"
    let PutForSaleButtonStatus = "none"
    let BuyButtonStatus = "none"
    let RejectButtonStatus = "none"
    let StartButtonStatus = "none"
    let ConfirmButtonStatus = "none"
    let AdminHelpButtonStatus = "none"
    let ExecutedButtonStatus = "none"
    let RequestChangesButtonStatus = "none"
    let RejectAdminButtonStatus = "none"
    let DoneButtonStatus = "none"
    let CancelButtonStatus = "none"

    switch (productData.state) {
        case "": {
            FinishButtonStatus = "block"
            break;
        }
        case "ready": {
            RejectCreationButtonStatus = "block"
            ApproveButtonStatus = "block"
            CancelButtonStatus = "block"
            break;
        }
        case "approved": {
            PutForSaleButtonStatus = "block"
            break;
        }
        case "published": {
            ChangeButtonStatus = "block"
            BuyButtonStatus = "block"
            CancelButtonStatus = "block"
            break;
        }
        case "bought": {
            StartButtonStatus = "block"
            break;
        }
        case "pending_issuer_approval": {
            RejectButtonStatus = "block"
            ConfirmButtonStatus = "block"
            break;
        }
        case "delivering": {
            AdminHelpButtonStatus = "block"
            ExecutedButtonStatus = "block"
            break;
        }
        case "delivered": {
            AdminHelpButtonStatus = "block"
            DoneButtonStatus = "block"
            break;
        }
        case "admin_help": {
            RejectAdminButtonStatus = "block"
            DoneButtonStatus = "block"
            break;
        }
        case "canceled": {
            break;
        }

        default: {
            break;
        }
    }


    let imageGuid = productData.images[0]
    let productName = productData.name
    let productCategory = productData.categories[0].category
    let productPrice = productData.price
    let productDescription = productData.description
    let imageUrl = "url("+CRM_BASE_URL+"/images/content/"+imageGuid+")"
    imageUrl.replace(/&quot;|&#039;/g, "'")

    async function UpdateState(action: string) {
        let state = ""
        switch (action) {
            case "reject_creation": {
                state = ""
                break;
            }
            case "finish": {
                state = "ready"
                break;
            }
            case "approve": {
                state = "approved"
                break;
            }
            case "change": {
                state = ""
                break;
            }
            case "put_for_sale": {
                state = "published"
                break;
            }
            case "buy": {
                state = "bought"
                break;
            }
            case "reject": {
                state = "published"
                break;
            }
            case "start": {
                state = "pending_issuer_approval"
                break;
            }
            case "confirm": {
                state = "delivering"
                break;
            }
            case "admin_help": {
                state = "admin_help"
                break;
            }
            case "executed": {
                state = "delivered"
                break;
            }
            case "request_changes": {
                state = "delivering"
                break;
            }
            case "reject_admin": {
                state = "published"
                break;
            }
            case "done": {
                state = "done"
                break;
            }
            case "cancel":{
                state = "canceled"
                break;
            }
            default: {
                break;
            }
        }
        const data = {
            state: state
        }


        const response = await fetch(CRM_BASE_URL + '/services/' + guid + '/state', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log(response.status)
        }
    }

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

                        <div>
                            <Button onClick={() => UpdateState("reject_creation")} style={{
                                display: RejectCreationButtonStatus
                            }}>
                                Reject Creation
                            </Button>

                            <Button onClick={() => UpdateState("finish")} style={{
                                display: FinishButtonStatus
                            }}>
                                Finish
                            </Button>

                            <Button onClick={() => UpdateState("approve")} style={{
                                display: ApproveButtonStatus
                            }}>
                                Approve
                            </Button>

                            <Button onClick={() => UpdateState("change")} style={{
                                display: ChangeButtonStatus
                            }}>
                                Change
                            </Button>

                            <Button onClick={() => UpdateState("put_for_sale")} style={{
                                display: PutForSaleButtonStatus
                            }}>
                                Put for sale
                            </Button>

                            <Button onClick={() => UpdateState("buy")} style={{
                                display: BuyButtonStatus
                            }}>
                                Buy
                            </Button>

                            <Button onClick={() => UpdateState("reject")} style={{
                                display: RejectButtonStatus
                            }}>
                                Reject
                            </Button>

                            <Button onClick={() => UpdateState("start")} style={{
                                display: StartButtonStatus
                            }}>
                                Start
                            </Button>

                            <Button onClick={() => UpdateState("confirm")} style={{
                                display: ConfirmButtonStatus
                            }}>
                                Confirm
                            </Button>

                            <Button onClick={() => UpdateState("admin_help")} style={{
                                display: AdminHelpButtonStatus
                            }}>
                                Admin help
                            </Button>

                            <Button onClick={() => UpdateState("executed")} style={{
                                display: ExecutedButtonStatus
                            }}>
                                Executed
                            </Button>

                            <Button onClick={() => UpdateState("request_changes")} style={{
                                display: RequestChangesButtonStatus
                            }}>
                                Request changes
                            </Button>

                            <Button onClick={() => UpdateState("reject_admin")} style={{
                                display: RejectAdminButtonStatus
                            }}>
                                Reject
                            </Button>

                            <Button onClick={() => UpdateState("done")} style={{
                                display: DoneButtonStatus
                            }}>
                                Done
                            </Button>
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