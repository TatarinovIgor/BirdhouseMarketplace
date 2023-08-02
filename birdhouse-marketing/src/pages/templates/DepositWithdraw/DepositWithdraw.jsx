import React, { useEffect, useState } from 'react';
import "./style.css"

const DepositWithdraw = () => {
    return (
        <>
            {/* Content */}
            <div
                className="bubble-element Group bubble-r-container flex column"
                style={{
                    zIndex: 3,
                    alignSelf: "center",
                    minWidth: 300,
                    maxWidth: 560,
                    order: 6,
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
                        zIndex: 13,
                        alignSelf: "center",
                        minWidth: 0,
                        maxWidth: 370,
                        order: 3,
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
                        Please enter amount
                    </div>
                    <div
                        className="bubble-element Group bubble-r-container flex row"
                        style={{
                            zIndex: 5,
                            alignSelf: "center",
                            minWidth: 0,
                            order: 6,
                            minHeight: 50,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: "0px 0px 20px",
                            justifyContent: "space-between",
                            overflow: "visible",
                            borderStyle: "solid",
                            borderWidth: 1,
                            borderColor: "rgb(238, 238, 238)",
                            borderRadius: 15,
                            opacity: 1
                        }}
                    >
                        <div
                            className="bubble-element Group bubble-r-container fixed"
                            style={{
                                zIndex: 4,
                                alignSelf: "center",
                                minWidth: 24,
                                maxWidth: 24,
                                order: 1,
                                minHeight: 24,
                                maxHeight: 24,
                                width: 24,
                                flexGrow: 1,
                                height: 24,
                                margin: 10,
                                overflow: "visible",
                                borderRadius: 0,
                                padding: 0,
                                opacity: 1,
                                backgroundColor: "rgba(255, 255, 255, 0)",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundImage:
                                    'url("https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647611511359x234169914605460540/contact.svg")'
                            }}
                        />
                        <input
                            type="input"
                            className="bubble-element Input a1688463591450x5136"
                            placeholder="Amount"
                            inputMode="decimal"
                            style={{
                                zIndex: 3,
                                alignSelf: "center",
                                minWidth: 0,
                                maxWidth: 320,
                                order: 2,
                                minHeight: 50,
                                width: 0,
                                flexGrow: 1,
                                height: 50,
                                margin: 0,
                                border: "none",
                                backgroundColor: "transparent",
                                borderRadius: 15,
                                fontFamily: "Poppins",
                                fontSize: 14,
                                fontWeight: 400,
                                color: "rgb(123, 123, 123)",
                                letterSpacing: "0.5px",
                                padding: "0px 10px",
                                opacity: 1
                            }}
                        />
                    </div>
                    <div
                        className="bubble-element Text"
                        style={{
                            zIndex: 8,
                            alignSelf: "center",
                            minWidth: 0,
                            order: 11,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "auto",
                            margin: "0px 0px 30px",
                            whiteSpace: "pre-wrap",
                            overflow: "visible",
                            wordBreak: "break-word",
                            fontFamily: "Poppins",
                            fontSize: 12,
                            fontWeight: 400,
                            color: "rgb(0, 0, 0)",
                            lineHeight: "1.5",
                            borderRadius: 0,
                            opacity: 1
                        }}
                    >
                        Select action
                    </div>
                    <div
                        className="bubble-element Group bubble-r-container flex row"
                        style={{
                            zIndex: 14,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            order: 12,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: 0,
                            justifyContent: "space-around",
                            overflow: "visible",
                            borderRadius: 0,
                            opacity: 1
                        }}
                    >
                        <button
                            className="bubble-element Button clickable-element"
                            style={{
                                zIndex: 12,
                                alignSelf: "flex-start",
                                minWidth: 150,
                                maxWidth: 150,
                                order: 1,
                                minHeight: 50,
                                width: 150,
                                flexGrow: 1,
                                height: "max-content",
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
                            Deposit
                        </button>
                        <button
                            className="bubble-element Button clickable-element"
                            style={{
                                zIndex: 7,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                maxWidth: 150,
                                order: 2,
                                minHeight: 50,
                                width: 0,
                                flexGrow: 1,
                                height: "max-content",
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
                            Withdraw
                        </button>
                    </div>
                </div>
            </div>
        </>

    );
};
export default DepositWithdraw;