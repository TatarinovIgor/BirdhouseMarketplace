import React, { useEffect, useState } from 'react';
import "./style.css"

const WithdrawUnsuccess = () => {
    return (
        <>
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
                    opacity: 1
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
                            onclick="location.href='landing_'"
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
                                    onclick="location.href='explore_bloggers'"
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
                                    onclick="location.href='explore_advertisers'"
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
                                    onclick="location.href='dashboard#create'"
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
                                    onclick="location.href='about'"
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
                                onclick="location.href='dashboard'"
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
                                onclick="location.href='deposit'"
                            >
                                <p id="UserBalance" />{" "}
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
                                    onclick="location.href='contact_us'"
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
                                        <div style={{ position: "relative", paddingTop: "34.0136%" }} />
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
                                        <div style={{ position: "relative", paddingTop: "29.8137%" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sticky Header */}
            <div
                className="bubble-element GroupFocus bubble-r-container relative"
                style={{
                    visibility: "hidden",
                    display: "none",
                    position: "absolute",
                    minWidth: 0,
                    minHeight: 500,
                    height: "initial",
                    right: 20,
                    bottom: 20,
                    zIndex: 2019,
                    marginRight: "auto",
                    overflowY: "auto"
                }}
            >
                <div
                    className="bubble-element Group bubble-r-container flex column"
                    style={{
                        zIndex: 5,
                        placeSelf: "start center",
                        minWidth: 0,
                        minHeight: 0,
                        width: "calc(100% - 20px)",
                        height: "max-content",
                        margin: "25px 20px 0px 0px",
                        justifyContent: "flex-start"
                    }}
                >
                    <div
                        className="bubble-element HTML"
                        style={{
                            visibility: "hidden",
                            zIndex: 16,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            maxWidth: 1,
                            order: 2,
                            minHeight: 0,
                            maxHeight: 1,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "auto",
                            margin: 0,
                            display: "none"
                        }}
                    >
                        <style
                            dangerouslySetInnerHTML={{
                                __html:
                                    "\n        #gradient-text {\n          background: linear-gradient(94.7deg, #2D2DFF -29.74%, #00D4FF 121.45%, #00D4FF 121.45%);\n          -webkit-background-clip: text;\n          -webkit-text-fill-color: transparent;\n          background-clip: text;\n          text-fill-color: transparent;\n        }\n        #burger-bar{\n          height: 100vh !important;\n          left: inherit !important;\n          right: 0 !important;\n          top: 0 !important;\n          width: 100% !important;\n          overflow-y: scroll !important;\n          position: fixed !important;\n        }\n        #burger-bar::-webkit-scrollbar {\n          width: 0px;\n        }\n        #scrolling{\n          overflow : scroll !important;\n        }\n        #scrolling::-webkit-scrollbar {\n          height: 0px !important;\n          width: 0px !important;\n        }\n        #RG{\n          overflow: inherit !important;\n        }\n        #position-sticky{\n          top: 100px !important;\n          position: sticky;\n        }\n        @media only screen and (max-width: 410px) {\n          #focus {\n            left: auto;\n            max-width: 100%;\n            width: calc(100% - 20px);\n            margin: 0px 10px;\n          }\n        }\n        #repeating-center{\n          max-width: fit-content !important;\n        }\n        #repeating-scroll::-webkit-scrollbar {\n          width: 2px;\n        }\n        #repeating-scroll::-webkit-scrollbar-track {\n          background: #ffffff;\n        }\n        #repeating-scroll::-webkit-scrollbar-thumb {\n          background: linear-gradient(180deg, #2D2DFF 0.38%, #00D4FF 99.62%, #00D4FF 99.62%);\n        }\n        .jquery-slider.ui-slider.ui-corner-all.ui-widget.ui-widget-content.ui-slider-horizontal{\n          background: #DEDEDE !important;\n          border-color: #DEDEDE !important;\n          height: 1px !important;\n        }\n        .ui-slider-range.ui-corner-all.ui-widget-header{\n          top: -1px !important;\n          height: 2px !important;\n          background: linear-gradient(94.7deg, #2D2DFF -29.74%, #00D4FF 121.45%, #00D4FF 121.45%) !important;\n        }\n        .ui-slider-handle.ui-corner-all.ui-state-default{\n          border-color: #2D2DFF !important;\n          border-radius: 100% !important;\n          border-width: 1.5px !important;\n          top: -7px !important;\n          height: 14px !important;\n          width: 14px !important;\n          background: rgb(255, 255, 255) !important;\n        }\n        #floating-stiky{\n          position: sticky !important;\n          top: 100px;\n        }\n        #fixed-bottom{\n          position: fixed !important;\n          bottom: 0;\n        }\n        #header{\n          position: sticky;\n          top: 0px;\n        }\n      "
                            }}
                        />
                    </div>
                    <div
                        className="bubble-element Text"
                        style={{
                            zIndex: 2,
                            alignSelf: "flex-end",
                            minWidth: 0,
                            order: 3,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "auto",
                            margin: "0px 0px 20px"
                        }}
                    />
                    <div
                        className="bubble-element Text"
                        style={{
                            zIndex: 22,
                            alignSelf: "flex-end",
                            minWidth: 0,
                            order: 4,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "auto",
                            margin: "0px 0px 20px"
                        }}
                    />
                    <div
                        className="bubble-element Text"
                        style={{
                            zIndex: 3,
                            alignSelf: "flex-end",
                            minWidth: 0,
                            order: 11,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "auto",
                            margin: "0px 0px 20px"
                        }}
                    />
                    <div
                        className="bubble-element Text"
                        style={{
                            zIndex: 3,
                            alignSelf: "flex-end",
                            minWidth: 0,
                            order: 12,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "auto",
                            margin: "0px 0px 20px"
                        }}
                    />
                    <div
                        className="bubble-element Text"
                        style={{
                            zIndex: 17,
                            alignSelf: "flex-end",
                            minWidth: 0,
                            order: 13,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "auto",
                            margin: "0px 0px 20px"
                        }}
                    />
                    <div
                        className="bubble-element Text"
                        style={{
                            zIndex: 18,
                            alignSelf: "flex-end",
                            minWidth: 0,
                            order: 14,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "auto",
                            margin: "0px 0px 20px"
                        }}
                    />
                    <div
                        className="bubble-element Text"
                        style={{
                            zIndex: 18,
                            alignSelf: "flex-end",
                            minWidth: 0,
                            order: 15,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "auto",
                            margin: "0px 0px 20px"
                        }}
                    />
                    <div
                        className="bubble-element Text"
                        style={{
                            zIndex: 19,
                            alignSelf: "flex-end",
                            minWidth: 0,
                            order: 16,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "auto",
                            margin: "0px 0px 20px"
                        }}
                    />
                    <div
                        className="bubble-element Text"
                        style={{
                            zIndex: 20,
                            alignSelf: "flex-end",
                            minWidth: 0,
                            order: 17,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "auto",
                            margin: "0px 0px 20px"
                        }}
                    />
                    <div
                        className="bubble-element Text"
                        style={{
                            zIndex: 21,
                            alignSelf: "flex-end",
                            minWidth: 0,
                            order: 18,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "auto",
                            margin: "0px 0px 20px"
                        }}
                    />
                    <div
                        className="bubble-element Text"
                        style={{
                            zIndex: 23,
                            alignSelf: "flex-end",
                            minWidth: 0,
                            order: 19,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "auto",
                            margin: "0px 0px 20px"
                        }}
                    />
                </div>
                <div
                    className="bubble-element Group bubble-r-container relative"
                    style={{
                        zIndex: 28,
                        placeSelf: "start",
                        minWidth: 24,
                        maxWidth: 24,
                        minHeight: 24,
                        maxHeight: 24,
                        width: 24,
                        height: 24,
                        margin: "20px 0px 0px 20px"
                    }}
                >
                    <div
                        className="bubble-element HTML"
                        style={{
                            zIndex: 2,
                            placeSelf: "center",
                            minWidth: 24,
                            minHeight: 24,
                            width: "calc(100% - 0px)",
                            height: "calc(100% - 0px)",
                            margin: 0
                        }}
                    >
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16.7437 8.49378C17.0854 8.15206 17.0854 7.59802 16.7437 7.25629C16.402 6.91457 15.8479 6.91457 15.5062 7.25629L12 10.7625L8.49379 7.25629C8.15207 6.91457 7.59803 6.91457 7.2563 7.25629C6.91458 7.59802 6.91458 8.15206 7.2563 8.49378L10.7625 12L7.25629 15.5062C6.91457 15.8479 6.91457 16.402 7.25629 16.7437C7.59801 17.0854 8.15206 17.0854 8.49378 16.7437L12 13.2375L15.5062 16.7437C15.8479 17.0854 16.402 17.0854 16.7437 16.7437C17.0854 16.402 17.0854 15.8479 16.7437 15.5062L13.2375 12L16.7437 8.49378Z"
                                fill="#212121"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </>

    );
};

export default WithdrawUnsuccess;