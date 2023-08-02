import React, { useEffect, useState } from 'react';
import "./style.css"

const WithdrawUnsuccess = () => {
    return (
        <>
                {/* Content */}
                <div
                    className="bubble-element Group bubble-r-container flex column"
                    style={{
                        zIndex: 2,
                        alignSelf: "center",
                        minWidth: 300,
                        maxWidth: 560,
                        order: 2,
                        minHeight: 0,
                        height: "max-content",
                        flexGrow: 0,
                        flexShrink: 0,
                        width: "calc(100% - 20px)",
                        margin: "150px 10px 50px",
                        justifyContent: "flex-start",
                        overflow: "visible",
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        borderRadius: 15,
                        padding: "0px 10px",
                        opacity: 1
                    }}
                >
                    <div
                        className="bubble-element Group bubble-r-container flex column"
                        style={{
                            zIndex: 12,
                            alignSelf: "center",
                            minWidth: 0,
                            maxWidth: 370,
                            order: 1,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: 0,
                            justifyContent: "flex-start",
                            overflow: "visible",
                            borderRadius: 0,
                            opacity: 1
                        }}
                    >
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 2,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 2,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "auto",
                                margin: "38px 0px 40px",
                                whiteSpace: "pre-wrap",
                                overflow: "visible",
                                wordBreak: "break-word",
                                fontFamily: "Poppins",
                                fontSize: 28,
                                fontWeight: 700,
                                color: "rgb(0, 0, 0)",
                                lineHeight: "1.5",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            Withdraw unsuccessful
                        </div>
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 13,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 3,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "auto",
                                margin: "38px 0px 40px",
                                whiteSpace: "pre-wrap",
                                overflow: "visible",
                                wordBreak: "break-word",
                                fontFamily: "Poppins",
                                fontSize: 18,
                                fontWeight: 400,
                                color: "rgb(0, 0, 0)",
                                textAlign: "center",
                                lineHeight: "1.5",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            Thank you for using BirdHouse
                        </div>
                        <button
                            className="bubble-element Button clickable-element"
                            style={{
                                zIndex: 7,
                                alignSelf: "center",
                                minWidth: 0,
                                maxWidth: 150,
                                order: 11,
                                minHeight: 50,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 30px",
                                padding: 0,
                                cursor: "pointer",
                                background:
                                    "linear-gradient(120deg, rgb(45, 45, 255) 0%, rgb(0, 212, 255) 100%)",
                                border: "none",
                                textAlign: "center",
                                fontFamily: "Poppins",
                                fontSize: 16,
                                fontWeight: 500,
                                color: "rgb(255, 255, 255)",
                                letterSpacing: 1,
                                lineHeight: 1,
                                borderRadius: 5,
                                opacity: 1,
                                transition: "background 200ms ease 0s"
                            }}
                        >
                            Back home
                        </button>
                    </div>
                </div>
        </>

    );
};

export default WithdrawUnsuccess;