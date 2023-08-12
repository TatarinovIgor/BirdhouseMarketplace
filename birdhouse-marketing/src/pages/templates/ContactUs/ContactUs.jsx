import React, { useEffect, useState } from 'react';
import {Button, Col, Input, Row, Typography} from "antd";
import nftImg from "../../../assets/img/images/nft.png";
import phoneIcon from "../../../assets/img/icons/phone.svg";
import locationIcon from "../../../assets/img/icons/locationIcon.svg"
const { Title, Text} = Typography;
const { TextArea } = Input;

const ContactUs = () => {
    return (
        <>
                <Row style={{
                        alignSelf: "center",
                        minWidth: 320,
                        maxWidth: 1200,
                        width: "calc(100% - 0px)",
                        marginTop: 150,
                        marginBottom: 70,
                }}>
                        <Col span={12} style={{
                                paddingRight: 30
                        }}>
                                <Title>
                                        Send a message
                                </Title>
                                <Text style={{
                                        fontSize: 15,
                                        color: "rgb(123, 123, 123)"
                                }}>
                                        Share your thoughts or inquires with us, we’ll be happy to assist with anything in mind. We reply within 24 hours.
                                </Text>
                                <div style={{
                                        marginTop: 15
                                }}>
                                                <Text style={{
                                                        fontWeight: "bold"
                                                }}>
                                                        Email
                                                </Text>
                                                <Input size="large" placeholder="Enter email"/>
                                </div>
                                <div style={{
                                        marginTop: 15
                                }}>
                                        <Text style={{
                                                fontWeight: "bold"
                                        }}>
                                                Subject
                                        </Text>
                                        <Input size="large" placeholder="Enter subject"/>
                                </div>
                                <div style={{
                                        marginTop: 15
                                }}>
                                        <Text style={{ fontWeight: "bold" }}> Message </Text>
                                        <TextArea size="large" placeholder="Enter message"/>
                                </div>
                                <Button
                                    type="primary"
                                    size="large"
                                    style={{
                                            marginTop: 15,
                                            maxWidth: 138,
                                            width: "100%",
                                            background: "linear-gradient(120deg, rgb(45, 45, 255) 0%, rgb(0, 212, 255) 100%)",
                                            marginBottom: 50,
                                    }}
                                >
                                        Send
                                </Button>
                                <div>
                                        <Title>
                                                Contact us
                                        </Title>

                                        <div style={{
                                                display: "flex",
                                                alignItems: "center"
                                        }}>
                                                <img src={locationIcon} alt="location icon"/>
                                                <Text style={{
                                                        fontSize: 16,
                                                        marginLeft: 10,
                                                        color: "rgb(123, 123, 123)"
                                                }}> BirdHouse office </Text>
                                        </div>
                                        <div style={{
                                                display: "flex",
                                                alignItems: "center"
                                        }}>
                                                <img src={phoneIcon} alt="phone icon"/>
                                                <Text style={{
                                                        fontSize: 16,
                                                        marginLeft: 10,
                                                        color: "rgb(123, 123, 123)"
                                                }}> +1 234-567-890 </Text>
                                        </div>
                                </div>
                        </Col>
                        <Col span={12}>
                                <img style={{
                                        margin: 30,
                                        maxWidth: 643,
                                        textAlign: "left"
                                }} src={nftImg} alt="N F T image"/>
                        </Col>
                </Row>
        </>

    );
};

export default ContactUs;