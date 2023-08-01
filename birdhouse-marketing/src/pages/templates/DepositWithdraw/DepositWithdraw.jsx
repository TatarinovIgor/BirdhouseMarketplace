import React, { useEffect, useState } from 'react';
import "./style.css"

const DepositWithdraw = () => {
    return (
        <div
            className="main-page bubble-element Page bubble-r-container flex column"
            style={{
                width: "100%",
                marginRight: "auto",
                marginLeft: "auto",
                position: "relative",
                zIndex: 1,
                minHeight: "max(0px, 100%)",
                height: "max-content",
                flexShrink: 0,
                justifyContent: "flex-start",
                opacity: 1,
                background:
                    'url("https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1648041737080x327779852184630900%2FGroup%25201000000955.png?w=1536&h=&auto=compress&dpr=2&fit=max") center top / cover repeat-y rgba(255, 255, 255, 0)'
            }}
        >
            {/* Header */}
            <div
                className="bubble-element CustomElement bubble-r-container flex row"
                id="header"
                style={{
                    zIndex: 4,
                    alignSelf: "flex-start",
                    minWidth: 0,
                    order: 1,
                    minHeight: 80,
                    height: "max-content",
                    flexGrow: 0,
                    flexShrink: 0,
                    width: "calc(100% - 0px)",
                    margin: 0,
                    justifyContent: "center",
                    overflow: "visible",
                    backgroundColor: "rgb(255, 255, 255)",
                    borderRadius: 0,
                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 4px 25px 0px",
                    opacity: 1
                }}
            >
                <div
                    className="bubble-element Group bubble-r-container flex row"
                    style={{
                        zIndex: 15,
                        alignSelf: "center",
                        minWidth: 300,
                        maxWidth: 1180,
                        order: 3,
                        minHeight: 0,
                        width: 300,
                        flexGrow: 1,
                        height: "max-content",
                        margin: "0px 10px",
                        justifyContent: "space-between",
                        overflow: "visible",
                        backgroundColor: "rgb(255, 255, 255)",
                        borderRadius: 0,
                        opacity: 1
                    }}
                >
                    <div
                        className="bubble-element Group bubble-r-container flex row clickable-element"
                        style={{
                            zIndex: 2,
                            alignSelf: "center",
                            minWidth: 82,
                            maxWidth: 82,
                            order: 1,
                            minHeight: 28,
                            width: 82,
                            flexGrow: 1,
                            height: "max-content",
                            margin: 0,
                            justifyContent: "center",
                            overflow: "visible",
                            borderRadius: 0,
                            opacity: 1,
                            cursor: "pointer"
                        }}
                        onClick="location.href='landing_advertisers'"
                    >
                        <div
                            className="bubble-element Text"
                            style={{
                                alignSelf: "flex-start",
                                minWidth: 74,
                                maxWidth: 74,
                                order: 1,
                                minHeight: 21,
                                width: 74,
                                flexGrow: 1,
                                height: "max-content",
                                margin: 0,
                                whiteSpace: "pre-wrap",
                                overflow: "visible",
                                wordBreak: "break-word",
                                fontFamily: '"Montserrat Alternates"',
                                fontSize: 40,
                                fontWeight: 800,
                                color: "rgb(3, 180, 198)",
                                letterSpacing: "-5px",
                                lineHeight: "1.5",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            <font color="#00ffff">B</font>
                            <font color="#000000">H</font>
                        </div>
                    </div>
                    <div
                        className="bubble-element Group bubble-r-container relative"
                        style={{
                            zIndex: 4,
                            alignSelf: "center",
                            minWidth: 0,
                            maxWidth: 394,
                            order: 2,
                            minHeight: 40,
                            width: 0,
                            flexGrow: 1,
                            height: "max-content",
                            margin: "0px 10px",
                            overflow: "visible",
                            borderStyle: "solid",
                            borderWidth: 1,
                            borderColor: "rgb(238, 238, 238)",
                            borderRadius: 10,
                            padding: "0px 10px",
                            opacity: 1
                        }}
                    >
                        <div
                            className="bubble-element Group bubble-r-container fixed"
                            style={{
                                zIndex: 2,
                                placeSelf: "center start",
                                minWidth: 25,
                                maxWidth: 25,
                                minHeight: 23,
                                maxHeight: 23,
                                width: 25,
                                height: 23,
                                margin: "0px 14px 0px 0px",
                                overflow: "visible",
                                borderRadius: 0,
                                padding: 0,
                                opacity: 1,
                                backgroundColor: "rgba(255, 255, 255, 0)",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundImage:
                                    'url("https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647387433266x621007601971848000/search.svg")'
                            }}
                        />
                        <input
                            type="input"
                            className="bubble-element Input"
                            placeholder="Search ads, usernames, categories"
                            maxLength=""
                            style={{
                                zIndex: 3,
                                placeSelf: "center end",
                                minWidth: 0,
                                maxWidth: 337,
                                minHeight: 40,
                                width: "calc(100% - 0px)",
                                height: "calc(100% - 0px)",
                                margin: 0,
                                border: "none",
                                backgroundColor: "transparent",
                                borderRadius: 0,
                                fontFamily: "Poppins",
                                fontSize: 14,
                                fontWeight: 400,
                                color: "rgb(123, 123, 123)",
                                letterSpacing: "0.5px",
                                opacity: 1
                            }}
                        />
                        <div
                            className="bubble-element Group bubble-r-container flex row clickable-element"
                            style={{
                                zIndex: 4,
                                placeSelf: "center",
                                minWidth: 0,
                                minHeight: 0,
                                width: "calc(100% - 0px)",
                                height: "calc(100% - 0px)",
                                margin: 0,
                                justifyContent: "flex-start",
                                overflow: "visible",
                                borderRadius: 0,
                                opacity: 1,
                                cursor: "pointer"
                            }}
                        />
                    </div>
                    <div
                        className="bubble-element Group bubble-r-container flex row"
                        style={{
                            zIndex: 5,
                            alignSelf: "center",
                            minWidth: 0,
                            order: 3,
                            minHeight: 0,
                            width: "max-content",
                            flexGrow: 0,
                            height: "max-content",
                            margin: 0,
                            justifyContent: "center",
                            overflow: "visible",
                            borderRadius: 0,
                            opacity: 1
                        }}
                    >
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                zIndex: 3,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 3,
                                minHeight: 0,
                                width: "max-content",
                                flexGrow: 0,
                                height: "max-content",
                                margin: "0px 20px 0px 0px",
                                justifyContent: "center",
                                overflow: "visible",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            <div
                                className="bubble-element Text clickable-element"
                                id=""
                                style={{
                                    zIndex: 2,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 1,
                                    minHeight: 0,
                                    width: "max-content",
                                    flexGrow: 0,
                                    height: "max-content",
                                    margin: "0px 20px 0px 0px",
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: "rgb(33, 33, 33)",
                                    letterSpacing: "0.1px",
                                    lineHeight: "1.5",
                                    borderRadius: 0,
                                    opacity: 1,
                                    cursor: "pointer",
                                    transition: "color 300ms linear 0s"
                                }}
                                onClick="location.href='explore_bloggers'"
                            >
                                Bloggers
                            </div>
                            <div
                                className="bubble-element Text clickable-element"
                                id=""
                                style={{
                                    zIndex: 4,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 2,
                                    minHeight: 0,
                                    width: "max-content",
                                    flexGrow: 0,
                                    height: "max-content",
                                    margin: "0px 20px 0px 0px",
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: "rgb(33, 33, 33)",
                                    letterSpacing: "0.1px",
                                    lineHeight: "1.5",
                                    borderRadius: 0,
                                    opacity: 1,
                                    cursor: "pointer",
                                    transition: "color 300ms linear 0s"
                                }}
                                onClick="location.href='explore_advertisers'"
                            >
                                Advertisers
                            </div>
                            <div
                                className="bubble-element Text clickable-element"
                                id=""
                                style={{
                                    zIndex: 3,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 4,
                                    minHeight: 0,
                                    width: "max-content",
                                    flexGrow: 0,
                                    height: "max-content",
                                    margin: "0px 20px 0px 0px",
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: "rgb(33, 33, 33)",
                                    letterSpacing: "0.1px",
                                    lineHeight: "1.5",
                                    borderRadius: 0,
                                    opacity: 1,
                                    cursor: "pointer",
                                    transition: "color 300ms linear 0s"
                                }}
                                onClick="location.href='dashboard#create'"
                            >
                                Create
                            </div>
                            <div
                                className="bubble-element Text clickable-element"
                                id=""
                                style={{
                                    zIndex: 3,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 5,
                                    minHeight: 0,
                                    width: "max-content",
                                    flexGrow: 0,
                                    height: "max-content",
                                    margin: "0px 20px 0px 0px",
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: "rgb(33, 33, 33)",
                                    letterSpacing: "0.1px",
                                    lineHeight: "1.5",
                                    borderRadius: 0,
                                    opacity: 1,
                                    cursor: "pointer",
                                    transition: "color 300ms linear 0s"
                                }}
                                onClick="location.href='about'"
                            >
                                About us
                            </div>
                            <div
                                className="bubble-element Text clickable-element"
                                id="gradient-text"
                                style={{
                                    zIndex: 3,
                                    alignSelf: "flex-start",
                                    minWidth: 83,
                                    order: 6,
                                    minHeight: 0,
                                    width: 83,
                                    flexGrow: 1,
                                    height: "max-content",
                                    margin: 0,
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: "rgb(33, 33, 33)",
                                    letterSpacing: "0.1px",
                                    lineHeight: "1.5",
                                    borderRadius: 0,
                                    opacity: 1,
                                    cursor: "pointer",
                                    transition: "color 300ms linear 0s"
                                }}
                            >
                                Contact us
                            </div>
                        </div>
                        <div
                            className="bubble-element Group bubble-r-container fixed clickable-element"
                            style={{
                                zIndex: 4,
                                alignSelf: "center",
                                minWidth: 40,
                                maxWidth: 40,
                                order: 4,
                                minHeight: 40,
                                maxHeight: 40,
                                width: 40,
                                flexGrow: 1,
                                height: 40,
                                margin: 0,
                                overflow: "visible",
                                borderRadius: 100,
                                padding: 0,
                                opacity: 1,
                                cursor: "pointer",
                                backgroundColor: "rgba(255, 255, 255, 0)",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundImage:
                                    'url("https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647552379244x207864892994998200/Group%20462.svg")'
                            }}
                            onClick="location.href='dashboard'"
                        />
                        <div
                            className="bubble-element Text"
                            style={{
                                visibility: "hidden",
                                zIndex: 4,
                                alignSelf: "center",
                                minWidth: 83,
                                order: 5,
                                minHeight: 0,
                                width: "max-content",
                                flexGrow: 0,
                                height: "max-content",
                                margin: "0px 0px 0px 20px",
                                display: "none"
                            }}
                        />
                        <div
                            className="bubble-element Text clickable-element"
                            id="gradient-text"
                            style={{
                                zIndex: 5,
                                alignSelf: "center",
                                minWidth: 83,
                                order: 6,
                                minHeight: 0,
                                width: "max-content",
                                flexGrow: 0,
                                height: "max-content",
                                margin: "0px 0px 0px 20px",
                                whiteSpace: "pre-wrap",
                                overflow: "visible",
                                wordBreak: "break-word",
                                fontFamily: "Poppins",
                                fontSize: 14,
                                fontWeight: 500,
                                color: "rgb(33, 33, 33)",
                                letterSpacing: "0.1px",
                                lineHeight: "1.5",
                                borderRadius: 0,
                                opacity: 1,
                                cursor: "pointer",
                                transition: "color 300ms linear 0s"
                            }}
                            onClick="location.href='deposit'"
                        >
                            <p id="UserBalance"/>{" "}
                        </div>
                    </div>
                    <div
                        className="bubble-element Group bubble-r-container flex row"
                        style={{
                            visibility: "hidden",
                            zIndex: 7,
                            alignSelf: "center",
                            minWidth: 0,
                            order: 4,
                            minHeight: 0,
                            width: "max-content",
                            flexGrow: 0,
                            height: "max-content",
                            margin: 0,
                            display: "none",
                            justifyContent: "space-between"
                        }}
                    >
                        <div
                            className="bubble-element Group bubble-r-container fixed"
                            style={{
                                zIndex: 4,
                                alignSelf: "center",
                                minWidth: 25,
                                maxWidth: 25,
                                order: 1,
                                minHeight: 23,
                                maxHeight: 23,
                                width: 25,
                                flexGrow: 1,
                                height: 23,
                                margin: "0px 14px 0px 0px"
                            }}
                        />
                        <div
                            className="bubble-element Image"
                            style={{
                                zIndex: 6,
                                alignSelf: "center",
                                minWidth: 18,
                                maxWidth: 18,
                                order: 2,
                                minHeight: 14,
                                maxHeight: 14,
                                width: 18,
                                flexGrow: 1,
                                height: 14,
                                margin: 0
                            }}
                        />
                    </div>
                </div>
            </div>
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
            {/* Footer starts here -*/}
            <div
                className="bubble-element CustomElement bubble-r-container flex column"
                style={{
                    zIndex: 6,
                    alignSelf: "center",
                    minWidth: 0,
                    maxWidth: 1200,
                    order: 8,
                    minHeight: 0,
                    height: "max-content",
                    flexGrow: 0,
                    flexShrink: 0,
                    width: "calc(100% - 0px)",
                    margin: 0,
                    justifyContent: "flex-start",
                    overflow: "visible",
                    borderTop: "1px solid rgb(246, 246, 246)",
                    borderRadius: 0,
                    opacity: 1
                }}
                id=""
            >
                <div
                    className="bubble-element CustomElement bubble-r-container flex column"
                    style={{
                        zIndex: 3,
                        alignSelf: "center",
                        minWidth: 0,
                        maxWidth: 1200,
                        order: 6,
                        minHeight: 0,
                        height: "max-content",
                        flexGrow: 0,
                        flexShrink: 0,
                        width: "calc(100% - 0px)",
                        margin: 0,
                        justifyContent: "flex-start",
                        overflow: "visible",
                        borderTop: "1px solid rgb(246, 246, 246)",
                        borderRadius: 0,
                        opacity: 1
                    }}
                >
                    <div
                        className="bubble-element Group bubble-r-container flex row"
                        style={{
                            zIndex: 9,
                            alignSelf: "flex-start",
                            minWidth: 300,
                            maxWidth: 1180,
                            order: 2,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 20px)",
                            margin: "46px 10px 36px",
                            justifyContent: "space-between",
                            overflow: "visible",
                            borderRadius: 0,
                            opacity: 1
                        }}
                    >
                        <div
                            className="bubble-element Group bubble-r-container flex column"
                            style={{
                                zIndex: 8,
                                alignSelf: "stretch",
                                minWidth: 280,
                                maxWidth: 300,
                                order: 1,
                                minHeight: 0,
                                width: 280,
                                flexGrow: 1,
                                height: "auto",
                                margin: "0px 0px 30px",
                                justifyContent: "flex-start",
                                overflow: "visible",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            <div
                                className="bubble-element Text"
                                style={{
                                    zIndex: 3,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    maxWidth: 266,
                                    order: 2,
                                    minHeight: 0,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "calc(100% - 0px)",
                                    margin: "0px 0px 30px",
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    paddingBottom: 0,
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 400,
                                    color: "rgb(123, 123, 123)",
                                    letterSpacing: "0.1px",
                                    lineHeight: "1.5",
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                BirdHouse
                            </div>
                            <div
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    zIndex: 4,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 3,
                                    minHeight: 0,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: 0,
                                    justifyContent: "flex-start",
                                    overflow: "visible",
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container fixed"
                                    style={{
                                        zIndex: 2,
                                        alignSelf: "flex-start",
                                        minWidth: 35,
                                        maxWidth: 35,
                                        order: 1,
                                        minHeight: 35,
                                        maxHeight: 35,
                                        width: 35,
                                        flexGrow: 1,
                                        height: 35,
                                        margin: "0px 10px 0px 0px",
                                        overflow: "visible",
                                        borderRadius: 0,
                                        padding: 0,
                                        opacity: 1,
                                        backgroundColor: "rgba(255, 255, 255, 0)",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                        backgroundImage:
                                            'url("https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647387110450x225588365466711900/Group%20252.svg")'
                                    }}
                                />
                                <div
                                    className="bubble-element Group bubble-r-container fixed"
                                    style={{
                                        zIndex: 3,
                                        alignSelf: "flex-start",
                                        minWidth: 35,
                                        maxWidth: 35,
                                        order: 2,
                                        minHeight: 35,
                                        maxHeight: 35,
                                        width: 35,
                                        flexGrow: 1,
                                        height: 35,
                                        margin: "0px 10px 0px 0px",
                                        overflow: "visible",
                                        borderRadius: 0,
                                        padding: 0,
                                        opacity: 1,
                                        backgroundColor: "rgba(255, 255, 255, 0)",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                        backgroundImage:
                                            'url("https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647387114934x751236047018641900/Group%20253.svg")'
                                    }}
                                />
                                <div
                                    className="bubble-element Group bubble-r-container fixed"
                                    style={{
                                        zIndex: 3,
                                        alignSelf: "flex-start",
                                        minWidth: 35,
                                        maxWidth: 35,
                                        order: 3,
                                        minHeight: 35,
                                        maxHeight: 35,
                                        width: 35,
                                        flexGrow: 1,
                                        height: 35,
                                        margin: "0px 10px 0px 0px",
                                        overflow: "visible",
                                        borderRadius: 0,
                                        padding: 0,
                                        opacity: 1,
                                        backgroundColor: "rgba(255, 255, 255, 0)",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                        backgroundImage:
                                            'url("https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647387119622x631156546568235800/Group%20254.svg")'
                                    }}
                                />
                                <div
                                    className="bubble-element Group bubble-r-container fixed"
                                    style={{
                                        zIndex: 3,
                                        alignSelf: "flex-start",
                                        minWidth: 35,
                                        maxWidth: 35,
                                        order: 4,
                                        minHeight: 35,
                                        maxHeight: 35,
                                        width: 35,
                                        flexGrow: 1,
                                        height: 35,
                                        margin: 0,
                                        overflow: "visible",
                                        borderRadius: 0,
                                        padding: 0,
                                        opacity: 1,
                                        backgroundColor: "rgba(255, 255, 255, 0)",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                        backgroundImage:
                                            'url("https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647453372274x846150973190001900/Group%20255%20%281%29.svg")'
                                    }}
                                />
                            </div>
                        </div>
                        <div
                            className="bubble-element Group bubble-r-container flex column"
                            style={{
                                zIndex: 6,
                                alignSelf: "stretch",
                                minWidth: 280,
                                maxWidth: 300,
                                order: 2,
                                minHeight: 0,
                                width: 280,
                                flexGrow: 1,
                                height: "auto",
                                margin: "0px 0px 30px",
                                justifyContent: "flex-start",
                                overflow: "visible",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            <h3
                                className="bubble-element Text"
                                style={{
                                    zIndex: 2,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 1,
                                    minHeight: 0,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "0px 0px 20px",
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    paddingBottom: 0,
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 18,
                                    fontWeight: 600,
                                    color: "rgb(0, 0, 0)",
                                    letterSpacing: "0.2px",
                                    lineHeight: 1,
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                Navigation
                            </h3>
                            <div
                                className="bubble-element Text clickable-element"
                                style={{
                                    zIndex: 3,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 2,
                                    minHeight: 0,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "0px 0px 18px",
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    paddingBottom: 0,
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 400,
                                    color: "rgb(123, 123, 123)",
                                    letterSpacing: "0.5px",
                                    lineHeight: 1,
                                    borderRadius: 0,
                                    opacity: 1,
                                    cursor: "pointer"
                                }}
                            >
                                About Us
                            </div>
                            <div
                                className="bubble-element Text clickable-element"
                                style={{
                                    zIndex: 5,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 3,
                                    minHeight: 0,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "0px 0px 18px",
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    paddingBottom: 0,
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 400,
                                    color: "rgb(123, 123, 123)",
                                    letterSpacing: "0.5px",
                                    lineHeight: "1.5",
                                    borderRadius: 0,
                                    opacity: 1,
                                    cursor: "pointer"
                                }}
                                onClick="location.href='contact_us'"
                            >
                                Contact Us
                            </div>
                            <div
                                className="bubble-element Text clickable-element"
                                style={{
                                    zIndex: 5,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 4,
                                    minHeight: 0,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "0px 0px 18px",
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    paddingBottom: 0,
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 400,
                                    color: "rgb(123, 123, 123)",
                                    letterSpacing: "0.5px",
                                    lineHeight: 1,
                                    borderRadius: 0,
                                    opacity: 1,
                                    cursor: "pointer"
                                }}
                            >
                                Terms &amp; Conditions
                            </div>
                            <div
                                className="bubble-element Text clickable-element"
                                style={{
                                    zIndex: 5,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 5,
                                    minHeight: 0,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "0px 0px 5px",
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    paddingBottom: 0,
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 400,
                                    color: "rgb(123, 123, 123)",
                                    letterSpacing: "0.5px",
                                    lineHeight: 1,
                                    borderRadius: 0,
                                    opacity: 1,
                                    cursor: "pointer"
                                }}
                            >
                                Privacy Policy
                            </div>
                        </div>
                        <div
                            className="bubble-element Group bubble-r-container flex column"
                            style={{
                                zIndex: 5,
                                alignSelf: "stretch",
                                minWidth: 280,
                                maxWidth: 300,
                                order: 3,
                                minHeight: 0,
                                width: 280,
                                flexGrow: 1,
                                height: "auto",
                                margin: "0px 0px 30px",
                                justifyContent: "flex-start",
                                overflow: "visible",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            <h3
                                className="bubble-element Text"
                                style={{
                                    zIndex: 6,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 1,
                                    minHeight: 0,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "0px 0px 20px",
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    paddingBottom: 0,
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 18,
                                    fontWeight: 600,
                                    color: "rgb(0, 0, 0)",
                                    letterSpacing: "0.2px",
                                    lineHeight: 1,
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                Contact Us
                            </h3>
                            <div
                                className="bubble-element Text"
                                style={{
                                    zIndex: 6,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 2,
                                    minHeight: 0,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "0px 0px 18px",
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    paddingBottom: 0,
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 400,
                                    color: "rgb(123, 123, 123)",
                                    letterSpacing: "0.5px",
                                    lineHeight: 1,
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                +1 23 456 789 123
                            </div>
                            <div
                                className="bubble-element Text"
                                style={{
                                    zIndex: 6,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 3,
                                    minHeight: 0,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "0px 0px 5px",
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    paddingBottom: 0,
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 400,
                                    color: "rgb(123, 123, 123)",
                                    letterSpacing: "0.5px",
                                    lineHeight: 1,
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                itatarinov@gmail.com
                            </div>
                        </div>
                        <div
                            className="bubble-element Group bubble-r-container flex column"
                            style={{
                                zIndex: 7,
                                alignSelf: "stretch",
                                minWidth: 280,
                                maxWidth: 300,
                                order: 4,
                                minHeight: 0,
                                width: 280,
                                flexGrow: 1,
                                height: "auto",
                                margin: "0px 0px 30px",
                                justifyContent: "flex-start",
                                overflow: "visible",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            <h3
                                className="bubble-element Text"
                                style={{
                                    zIndex: 7,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 1,
                                    minHeight: 0,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "0px 0px 20px",
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    paddingBottom: 0,
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 18,
                                    fontWeight: 600,
                                    color: "rgb(0, 0, 0)",
                                    letterSpacing: "0.2px",
                                    lineHeight: 1,
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                Soon available
                            </h3>
                            <div
                                className="bubble-element Text"
                                style={{
                                    zIndex: 7,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 2,
                                    minHeight: 0,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "calc(100% - 0px)",
                                    margin: "0px 0px 23px",
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    paddingBottom: 0,
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 400,
                                    color: "rgb(123, 123, 123)",
                                    letterSpacing: "0.5px",
                                    lineHeight: 1,
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                Vulputate hac felis morbi egestas.
                            </div>
                            <div
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    zIndex: 6,
                                    alignSelf: "center",
                                    minWidth: 0,
                                    order: 3,
                                    minHeight: 0,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "calc(100% - 0px)",
                                    margin: 0,
                                    justifyContent: "space-between",
                                    overflow: "visible",
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                <div
                                    className="bubble-element Image"
                                    style={{
                                        zIndex: 7,
                                        alignSelf: "center",
                                        minWidth: 132,
                                        maxWidth: "45%",
                                        order: 3,
                                        width: 132,
                                        flexGrow: 1,
                                        height: "max-content",
                                        margin: 0,
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    <img
                                        alt=""
                                        src="https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647386772268x850938693558971400/Frame%20670.svg"
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            display: "block",
                                            width: "100%",
                                            height: "100%",
                                            margin: 0,
                                            borderRadius: 0
                                        }}
                                    />
                                    <div style={{position: "relative", paddingTop: "34.0136%"}}/>
                                </div>
                                <div
                                    className="bubble-element Image"
                                    style={{
                                        zIndex: 6,
                                        alignSelf: "center",
                                        minWidth: 146,
                                        maxWidth: "45%",
                                        order: 4,
                                        width: 146,
                                        flexGrow: 1,
                                        height: "max-content",
                                        margin: 0,
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    <img
                                        alt=""
                                        src="https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647386777421x635310095370716000/Frame%20669.svg"
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            display: "block",
                                            width: "100%",
                                            height: "100%",
                                            margin: 0,
                                            borderRadius: 0
                                        }}
                                    />
                                    <div style={{position: "relative", paddingTop: "29.8137%"}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default DepositWithdraw;