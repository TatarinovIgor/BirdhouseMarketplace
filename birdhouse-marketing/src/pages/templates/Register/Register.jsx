import React, { useEffect, useState } from 'react';
import "./style.css";
import profile from "../../../assets/img/icons/profileIcon.svg";
import contact from "../../../assets/img/icons/contact.svg";
import phone from "../../../assets/img/icons/phone.svg";
import password from "../../../assets/img/icons/password.svg";
import {Button, Col, Divider, Input, Radio, Space, Typography} from "antd";
import {BugFilled} from "@ant-design/icons";
import {Link} from "react-router-dom";

const {Title} = Typography;
const Register = () => {
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <>
                <div style={{
                        backgroundColor: "white",
                        borderRadius: 20,
                        maxWidth: 560,
                        width: "100%",
                        alignSelf: "center",
                        marginTop: 150,
                        marginBottom: 100,
                }}>
                        <Col style={{
                            marginTop: 30,
                            textAlign: "center",
                            paddingRight: 95,
                            paddingLeft: 95,
                            paddingTop: 30,
                            paddingBottom: 30
                        }}>
                            <div style={{
                                fontWeight: "bold",
                                fontSize: 30,
                                marginBottom: 35
                            }}>
                                Register on BirdHouse
                            </div>
                            <Space style={{width: "100%"}} direction="vertical" size="large">
                                <Input size="large" placeholder="Email" prefix={
                                    <img style={{width: 24, marginRight: 10}} src={contact} alt="Email"/>
                                }/>
                                <Input.Password size="large" placeholder="Password" prefix={
                                    <img style={{width: 24, marginRight: 10}} src={password} alt="Password"/>
                                }/>
                                <Button style={{
                                    background: "linear-gradient(120deg, rgb(45, 45, 255) 0%, rgb(0, 212, 255) 100%)",
                                    color: "white",
                                    height: 50,
                                    width: 150,
                                    fontWeight: "bold"
                                }}>
                                    Log in
                                </Button>
                                <Divider>or</Divider>
                                You already have an account?
                                <Link to="/login" style={{
                                    backgroundClip: "text",
                                    backgroundImage: "linear-gradient(45deg, #244fff, #07b9ff)",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                    fontSize: 16,
                                    fontWeight: "bold"
                                }}>Register</Link>
                            </Space>
                        </Col>
                </div>
        </>

    )
};

export default Register;