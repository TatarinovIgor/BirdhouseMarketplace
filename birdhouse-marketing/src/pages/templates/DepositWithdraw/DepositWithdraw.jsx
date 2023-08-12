import React, { useEffect, useState } from 'react';
import "./style.css"
import {Button, Col, Input} from "antd";

const DepositWithdraw = () => {
    return (
        <>
                <Col style={{
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        width: "calc(100% - 20px)",
                        alignSelf: "center",
                        borderRadius: 15,
                        minWidth: 300,
                        maxWidth: 560,
                        textAlign: "center",
                        marginTop: 150,
                        marginBottom: 50,
                        padding: 35
                }}>
                        <div style={{
                                fontSize: 36,
                                fontWeight: "bold"
                        }}>
                                Please enter amount
                        </div>
                        <Input size="large" placeholder="Amount" prefix="$" style={{
                                maxWidth: 370,
                                marginTop: 40,
                        }}/>
                        <div style={{margin: 25}}>
                                Select action
                        </div>
                        <div>
                                <Button style={{
                                        marginRight: 35,
                                        width: 150,
                                        height: 50,
                                        letterSpacing: 0.5,
                                        fontWeight: "bold",
                                        color: "white",
                                        background: "linear-gradient(120deg, rgb(45, 45, 255) 0%, rgb(0, 212, 255) 100%)"
                                }}> Deposit </Button>

                                <Button style={{
                                        width: 150,
                                        height: 50,
                                        letterSpacing: 0.5,
                                        fontWeight: "bold",
                                        color: "white",
                                        background: "linear-gradient(120deg, rgb(45, 45, 255) 0%, rgb(0, 212, 255) 100%)"
                                }}> Withdraw </Button>
                        </div>
                </Col>
        </>

    );
};
export default DepositWithdraw;