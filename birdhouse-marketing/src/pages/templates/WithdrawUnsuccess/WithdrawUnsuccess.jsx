import React, { useEffect, useState } from 'react';
import "./style.css"
import {Button, Col} from "antd";

const WithdrawUnsuccess = () => {
    return (
        <>
                {/* Content */}
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
            }}>
                <div style={{
                    margin: 30,
                    marginBottom: 70,
                    fontSize: 36,
                    fontWeight: "bold"
                }}>
                    Withdraw is unsuccessful
                </div>

                <div style={{
                    fontSize: 18,
                    marginBottom: 40
                }}>
                    Thank you for using BirdHouse
                </div>
                <div style={{
                    marginBottom: 30,
                }}>
                    <Button style={{
                        height: 50,
                        width: 150,
                        color: "white",
                        fontWeight: "bold",
                        letterSpacing: 1,
                        background: "linear-gradient(120deg, rgb(45, 45, 255) 0%, rgb(0, 212, 255) 100%)"
                    }}>
                        Back home
                    </Button>
                </div>
            </Col>
        </>

    );
};

export default WithdrawUnsuccess;