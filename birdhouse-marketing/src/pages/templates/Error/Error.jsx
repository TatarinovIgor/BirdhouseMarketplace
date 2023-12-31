import React, { useEffect, useState } from 'react';
import "./style.css"

const Error = () => {
    return (
        <>
            <div
                className="main-page bubble-element Page"
                style={{
                    width: 1148,
                    height: 800,
                    minHeight: "100%",
                    marginRight: "auto",
                    marginLeft: "auto",
                    position: "absolute",
                    zIndex: 1,
                    boxSizing: "border-box",
                    top: 0,
                    overflow: "hidden",
                    background: "none rgb(255, 255, 255)",
                    opacity: 1
                }}
            >
                <div className="bubble-r-line" style={{ marginTop: 0, height: 563 }}>
                    <div
                        className="bubble-r-box"
                        style={{ height: 563, left: 0, width: 1148 }}
                    >
                        <div
                            className="bubble-element CustomElement bubble-r-container flex row"
                            style={{
                                justifyContent: "center",
                                height: "max-content",
                                gridTemplateRows: "max-content",
                                width: 1148,
                                left: 0,
                                position: "absolute",
                                boxSizing: "border-box",
                                zIndex: 2,
                                top: 0,
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
                                        placeholder="Search ads, usernames, categories"
                                        maxLength=""
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
                                            id=""
                                        >
                                            Bloggers
                                        </div>
                                        <div
                                            className="bubble-element Text clickable-element"
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
                                            id=""
                                        >
                                            Advertisers
                                        </div>
                                        <div
                                            className="bubble-element Text clickable-element"
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
                                            id=""
                                        >
                                            Create
                                        </div>
                                        <div
                                            className="bubble-element Text clickable-element"
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
                                            id=""
                                        >
                                            About us
                                        </div>
                                        <div
                                            className="bubble-element Text clickable-element"
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
                                            id=""
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
                                        id="gradient-text"
                                    >
                                        Balance:{" "}
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
                        <div
                            className="bubble-element Group"
                            style={{
                                boxSizing: "border-box",
                                width: 1148,
                                left: 0,
                                position: "absolute",
                                zIndex: 31,
                                top: 0,
                                background:
                                    "-webkit-linear-gradient(left, rgb(50, 67, 128) 0%, rgb(42, 61, 130) 100%)",
                                borderRadius: 0,
                                opacity: 1,
                                height: 563
                            }}
                        >
                            <div
                                className="bubble-r-line"
                                style={{ marginTop: 182, height: 318 }}
                            >
                                <div
                                    className="bubble-r-box"
                                    style={{ height: 318, left: 40, width: 1068 }}
                                >
                                    <div
                                        className="bubble-element Group"
                                        style={{
                                            boxSizing: "border-box",
                                            position: "absolute",
                                            zIndex: 3,
                                            top: 0,
                                            width: 1068,
                                            left: 0,
                                            borderRadius: 0,
                                            opacity: 1,
                                            height: 318
                                        }}
                                    >
                                        <div
                                            className="bubble-r-line"
                                            style={{ marginTop: 0, height: 318 }}
                                        >
                                            <div
                                                className="bubble-r-box"
                                                style={{ height: 318, left: 0, width: 548 }}
                                            >
                                                <div
                                                    className="bubble-element Group"
                                                    style={{
                                                        boxSizing: "border-box",
                                                        position: "absolute",
                                                        zIndex: 4,
                                                        top: 0,
                                                        width: 548,
                                                        left: 0,
                                                        borderRadius: 0,
                                                        opacity: 1,
                                                        height: 318
                                                    }}
                                                >
                                                    <div
                                                        className="bubble-r-line"
                                                        style={{ marginTop: 48, height: 78 }}
                                                    >
                                                        <div
                                                            className="bubble-r-box"
                                                            style={{ height: 78, left: 0, width: 548 }}
                                                        >
                                                            <div
                                                                className="bubble-element Text"
                                                                style={{
                                                                    whiteSpace: "pre-wrap",
                                                                    position: "absolute",
                                                                    boxSizing: "border-box",
                                                                    zIndex: 2,
                                                                    top: 0,
                                                                    width: 548,
                                                                    left: 0,
                                                                    height: 78,
                                                                    overflow: "visible",
                                                                    fontFamily: "Lato",
                                                                    fontSize: 14,
                                                                    fontWeight: 400,
                                                                    color: "rgb(37, 37, 37)",
                                                                    lineHeight: 1,
                                                                    borderRadius: 0,
                                                                    opacity: 1
                                                                }}
                                                            >
                                                                <div className="content">Oops! 404</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="bubble-r-line"
                                                        style={{ marginTop: 5, height: 40 }}
                                                    >
                                                        <div
                                                            className="bubble-r-box"
                                                            style={{ height: 40, left: 0, width: 548 }}
                                                        >
                                                            <div
                                                                className="bubble-element Text"
                                                                style={{
                                                                    whiteSpace: "pre-wrap",
                                                                    position: "absolute",
                                                                    boxSizing: "border-box",
                                                                    zIndex: 3,
                                                                    top: 0,
                                                                    width: 548,
                                                                    left: 0,
                                                                    height: 40,
                                                                    overflow: "visible",
                                                                    fontFamily: "Poppins",
                                                                    fontSize: 22,
                                                                    fontWeight: 700,
                                                                    color: "rgb(255, 255, 255)",
                                                                    lineHeight: "1.5",
                                                                    borderRadius: 0,
                                                                    opacity: 1
                                                                }}
                                                            >
                                                                <div className="content">It happens sometimes</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="bubble-r-line"
                                                        style={{ marginTop: 1, height: 85 }}
                                                    >
                                                        <div
                                                            className="bubble-r-box"
                                                            style={{ height: 85, left: 0, width: 400 }}
                                                        >
                                                            <div
                                                                className="bubble-element Text"
                                                                style={{
                                                                    whiteSpace: "pre-wrap",
                                                                    position: "absolute",
                                                                    boxSizing: "border-box",
                                                                    zIndex: 4,
                                                                    top: 0,
                                                                    width: 400,
                                                                    left: 0,
                                                                    height: 85,
                                                                    overflow: "visible",
                                                                    fontFamily: "Lato",
                                                                    fontSize: 14,
                                                                    fontWeight: 400,
                                                                    color: "rgb(37, 37, 37)",
                                                                    lineHeight: 1,
                                                                    borderRadius: 0,
                                                                    opacity: 1
                                                                }}
                                                            >
                                                                <div className="content">
                                                                    This page has got everything you need to get
                                                                    started. If you're already a Bubble Pro you can
                                                                    delete this boilerplate and design your own 404.
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bubble-r-line" style={{ marginTop: 0, height: 237 }}>
                    <div
                        className="bubble-r-box"
                        style={{ height: 237, left: 0, width: 1148 }}
                    >
                        <div
                            className="bubble-element CustomElement bubble-r-container flex column"
                            style={{
                                justifyContent: "flex-start",
                                height: "max-content",
                                gridTemplateRows: "max-content",
                                width: 1148,
                                left: 0,
                                position: "absolute",
                                boxSizing: "border-box",
                                zIndex: 3,
                                top: 0,
                                borderTop: "1px solid rgb(246, 246, 246)",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            <div
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    zIndex: 9,
                                    order: 2,
                                    height: "max-content",
                                    flexShrink: 0,
                                    justifyContent: "space-between",
                                    overflow: "visible",
                                    borderRadius: 0,
                                    opacity: 1,
                                    alignSelf: "flex-start",
                                    minWidth: 300,
                                    maxWidth: 1180,
                                    minHeight: 0,
                                    flexGrow: 0,
                                    width: "calc(100% - 20px)",
                                    margin: "23px 10px"
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
                                        MarketingBirdHouse
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
                                            <div
                                                style={{ position: "relative", paddingTop: "34.0136%" }}
                                            />
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
                                            <div
                                                style={{ position: "relative", paddingTop: "29.8137%" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    visibility: "hidden",
                                    zIndex: 10,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 1,
                                    minHeight: 0,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "calc(100% - 0px)",
                                    margin: 0,
                                    display: "none",
                                    justifyContent: "flex-start"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container flex column"
                                    style={{
                                        zIndex: 2,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 1,
                                        minHeight: 50,
                                        width: 0,
                                        flexGrow: 1,
                                        height: "max-content",
                                        margin: 0,
                                        justifyContent: "flex-start"
                                    }}
                                >
                                    <div
                                        className="bubble-element HTML"
                                        style={{
                                            zIndex: 2,
                                            alignSelf: "center",
                                            minWidth: 24,
                                            maxWidth: 24,
                                            order: 1,
                                            minHeight: 24,
                                            maxHeight: 24,
                                            height: 24,
                                            flexGrow: 1,
                                            width: 24,
                                            margin: "0px 0px 10px"
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
                                                d="M20.7159 9.80675L13.07 4.37035C12.4369 3.88496 11.5603 3.88496 10.9272 4.32181L3.33006 9.51552C2.98916 9.75821 2.89176 10.1951 3.13526 10.5348C3.37876 10.8746 3.81706 10.9717 4.15796 10.729L5.18065 10.0009V15.9712C5.18065 18.204 6.98255 20 9.22274 20H14.7745C17.0147 20 18.8166 18.204 18.8166 15.9712V10.2436L19.8393 10.9717C19.9854 11.0688 20.1315 11.1173 20.2776 11.1173C20.5211 11.1173 20.7159 11.0202 20.862 10.8261C21.1055 10.4863 21.0081 10.0494 20.7159 9.80675ZM17.3556 15.9712C17.3556 17.3789 16.1868 18.5438 14.7745 18.5438H9.22274C7.81044 18.5438 6.64165 17.3789 6.64165 15.9712V8.98158L11.8038 5.48676C11.9012 5.38968 12.0473 5.38968 12.1934 5.48676L17.3556 9.17574V15.9712Z"
                                                fill="#3C3C3B"
                                            />
                                        </svg>
                                    </div>
                                    <div
                                        className="bubble-element Text"
                                        style={{
                                            zIndex: 6,
                                            alignSelf: "center",
                                            minWidth: 0,
                                            order: 2,
                                            minHeight: 0,
                                            height: "max-content",
                                            flexGrow: 0,
                                            flexShrink: 0,
                                            width: "auto",
                                            margin: 0
                                        }}
                                    />
                                </div>
                                <div
                                    className="bubble-element Group bubble-r-container flex column"
                                    style={{
                                        zIndex: 3,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 50,
                                        width: 0,
                                        flexGrow: 1,
                                        height: "max-content",
                                        margin: 0,
                                        justifyContent: "flex-start"
                                    }}
                                >
                                    <div
                                        className="bubble-element HTML"
                                        style={{
                                            zIndex: 3,
                                            alignSelf: "center",
                                            minWidth: 24,
                                            maxWidth: 24,
                                            order: 1,
                                            minHeight: 24,
                                            maxHeight: 24,
                                            height: 24,
                                            flexGrow: 1,
                                            width: 24,
                                            margin: "0px 0px 10px"
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
                                                d="M11.9988 4L11.8896 4.36451V14.9417L11.9988 15.0487L16.9974 12.1466L11.9988 4Z"
                                                fill="#343434"
                                            />
                                            <path
                                                d="M11.9985 4L7 12.1466L11.9985 15.0488V9.91494V4Z"
                                                fill="#8C8C8C"
                                            />
                                            <path
                                                d="M11.998 15.9784L11.9365 16.052V19.8199L11.998 19.9964L16.9995 13.0776L11.998 15.9784Z"
                                                fill="#3C3C3B"
                                            />
                                            <path
                                                d="M11.9985 19.9964V15.9784L7 13.0776L11.9985 19.9964Z"
                                                fill="#8C8C8C"
                                            />
                                            <path
                                                d="M11.998 15.0487L16.9965 12.1466L11.998 9.91492V15.0487Z"
                                                fill="#141414"
                                            />
                                            <path
                                                d="M7 12.1466L11.9984 15.0487V9.91492L7 12.1466Z"
                                                fill="#393939"
                                            />
                                        </svg>
                                    </div>
                                    <div
                                        className="bubble-element Text"
                                        style={{
                                            zIndex: 7,
                                            alignSelf: "center",
                                            minWidth: 0,
                                            order: 2,
                                            minHeight: 0,
                                            height: "max-content",
                                            flexGrow: 0,
                                            flexShrink: 0,
                                            width: "auto",
                                            margin: 0
                                        }}
                                    />
                                </div>
                                <div
                                    className="bubble-element Group bubble-r-container flex column"
                                    style={{
                                        zIndex: 4,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 3,
                                        minHeight: 50,
                                        width: 0,
                                        flexGrow: 1,
                                        height: "max-content",
                                        margin: 0,
                                        justifyContent: "flex-start"
                                    }}
                                >
                                    <div
                                        className="bubble-element HTML"
                                        style={{
                                            zIndex: 4,
                                            alignSelf: "center",
                                            minWidth: 24,
                                            maxWidth: 24,
                                            order: 1,
                                            minHeight: 24,
                                            maxHeight: 24,
                                            height: 24,
                                            flexGrow: 1,
                                            width: 24,
                                            margin: "0px 0px 10px"
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
                                                d="M11.45 4V10.9091H12.55V4H11.45ZM11.45 13.8182V20H12.55V13.8182H11.45ZM12 13.2682C11.5004 13.2682 11.0954 12.8632 11.0954 12.3636H9.99545C9.99545 13.4707 10.8929 14.3682 12 14.3682V13.2682ZM12.9045 12.3636C12.9045 12.8632 12.4996 13.2682 12 13.2682V14.3682C13.1071 14.3682 14.0045 13.4707 14.0045 12.3636H12.9045ZM12 11.4591C12.4996 11.4591 12.9045 11.8641 12.9045 12.3636H14.0045C14.0045 11.2566 13.1071 10.3591 12 10.3591V11.4591ZM12 10.3591C10.8929 10.3591 9.99545 11.2566 9.99545 12.3636H11.0954C11.0954 11.8641 11.5004 11.4591 12 11.4591V10.3591ZM17.9954 4V14.5909H19.0954V4H17.9954ZM17.9954 17.5V20H19.0954V17.5H17.9954ZM18.5454 16.95C18.0459 16.95 17.6409 16.545 17.6409 16.0455H16.5409C16.5409 17.1525 17.4384 18.05 18.5454 18.05V16.95ZM19.45 16.0455C19.45 16.545 19.045 16.95 18.5454 16.95V18.05C19.6525 18.05 20.55 17.1525 20.55 16.0455H19.45ZM18.5454 15.1409C19.045 15.1409 19.45 15.5459 19.45 16.0455H20.55C20.55 14.9384 19.6525 14.0409 18.5454 14.0409V15.1409ZM18.5454 14.0409C17.4384 14.0409 16.5409 14.9384 16.5409 16.0455H17.6409C17.6409 15.5459 18.0459 15.1409 18.5454 15.1409V14.0409ZM4.90454 4L4.90455 6.5L6.00455 6.5L6.00454 4L4.90454 4ZM4.90455 9.40909L4.90454 20L6.00454 20L6.00455 9.40909L4.90455 9.40909ZM5.45455 8.85909C4.95498 8.85909 4.55 8.45411 4.55 7.95455H3.45C3.45 9.06162 4.34747 9.95909 5.45455 9.95909V8.85909ZM6.35909 7.95455C6.35909 8.45411 5.95411 8.85909 5.45455 8.85909V9.95909C6.56163 9.95909 7.45909 9.06162 7.45909 7.95455H6.35909ZM5.45455 7.05C5.95411 7.05 6.35909 7.45498 6.35909 7.95455H7.45909C7.45909 6.84747 6.56163 5.95 5.45455 5.95V7.05ZM5.45455 5.95C4.34747 5.95 3.45 6.84747 3.45 7.95455H4.55C4.55 7.45498 4.95498 7.05 5.45455 7.05V5.95Z"
                                                fill="#3C3C3B"
                                            />
                                        </svg>
                                    </div>
                                    <div
                                        className="bubble-element Text"
                                        style={{
                                            zIndex: 7,
                                            alignSelf: "center",
                                            minWidth: 0,
                                            order: 2,
                                            minHeight: 0,
                                            height: "max-content",
                                            flexGrow: 0,
                                            flexShrink: 0,
                                            width: "auto",
                                            margin: 0
                                        }}
                                    />
                                </div>
                                <div
                                    className="bubble-element Group bubble-r-container flex column"
                                    style={{
                                        zIndex: 5,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 4,
                                        minHeight: 50,
                                        width: 0,
                                        flexGrow: 1,
                                        height: "max-content",
                                        margin: 0,
                                        justifyContent: "flex-start"
                                    }}
                                >
                                    <div
                                        className="bubble-element HTML"
                                        style={{
                                            zIndex: 5,
                                            alignSelf: "center",
                                            minWidth: 24,
                                            maxWidth: 24,
                                            order: 1,
                                            minHeight: 24,
                                            maxHeight: 24,
                                            height: 24,
                                            flexGrow: 1,
                                            width: 24,
                                            margin: "0px 0px 10px"
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
                                                d="M18.75 21H17.25V17.2178C17.2494 16.6297 17.0156 16.066 16.5998 15.6502C16.184 15.2344 15.6203 15.0006 15.0322 15H8.96775C8.37975 15.0006 7.816 15.2344 7.40022 15.6502C6.98444 16.066 6.7506 16.6297 6.75 17.2178V21H5.25V17.2178C5.25119 16.2321 5.64326 15.2872 6.34022 14.5902C7.03717 13.8933 7.98211 13.5012 8.96775 13.5H15.0322C16.0179 13.5012 16.9628 13.8933 17.6598 14.5902C18.3567 15.2872 18.7488 16.2321 18.75 17.2178V21Z"
                                                fill="#3C3C3B"
                                            />
                                            <path
                                                d="M12 12C11.11 12 10.24 11.7361 9.49994 11.2416C8.75991 10.7471 8.18314 10.0443 7.84254 9.22208C7.50195 8.39981 7.41283 7.49501 7.58647 6.6221C7.7601 5.74918 8.18869 4.94736 8.81802 4.31802C9.44736 3.68869 10.2492 3.2601 11.1221 3.08647C11.995 2.91283 12.8998 3.00195 13.7221 3.34254C14.5443 3.68314 15.2471 4.25991 15.7416 4.99994C16.2361 5.73996 16.5 6.60999 16.5 7.5C16.4988 8.69311 16.0243 9.83701 15.1807 10.6807C14.337 11.5243 13.1931 11.9988 12 12V12ZM12 4.5C11.4067 4.5 10.8266 4.67595 10.3333 5.00559C9.83994 5.33524 9.45543 5.80377 9.22836 6.35195C9.0013 6.90013 8.94189 7.50333 9.05765 8.08527C9.1734 8.66722 9.45912 9.20177 9.87868 9.62132C10.2982 10.0409 10.8328 10.3266 11.4147 10.4424C11.9967 10.5581 12.5999 10.4987 13.1481 10.2716C13.6962 10.0446 14.1648 9.66006 14.4944 9.16671C14.8241 8.67337 15 8.09335 15 7.5C15 6.70435 14.6839 5.94129 14.1213 5.37868C13.5587 4.81607 12.7957 4.5 12 4.5Z"
                                                fill="#3C3C3B"
                                            />
                                        </svg>
                                    </div>
                                    <div
                                        className="bubble-element Text"
                                        style={{
                                            zIndex: 7,
                                            alignSelf: "center",
                                            minWidth: 0,
                                            order: 2,
                                            minHeight: 0,
                                            height: "max-content",
                                            flexGrow: 0,
                                            flexShrink: 0,
                                            width: "auto",
                                            margin: 0
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="bubble-element GroupFocus bubble-r-container flex column"
                style={{
                    visibility: "hidden",
                    display: "none",
                    position: "absolute",
                    minWidth: 0,
                    maxWidth: 344,
                    minHeight: 100,
                    height: "auto",
                    right: 20,
                    bottom: "unset",
                    zIndex: 2019,
                    marginRight: "auto",
                    overflowY: "auto",
                    justifyContent: "flex-start",
                    rowGap: 10
                }}
            >
                <div
                    className="bubble-element Group bubble-r-container flex column"
                    style={{
                        zIndex: 28,
                        alignSelf: "flex-start",
                        minWidth: 0,
                        order: 2,
                        minHeight: 25,
                        height: "max-content",
                        flexGrow: 0,
                        flexShrink: 0,
                        width: "calc(100% - 0px)",
                        margin: 0,
                        justifyContent: "flex-start",
                        rowGap: 10
                    }}
                >
                    <div
                        className="bubble-element Group bubble-r-container flex row"
                        style={{
                            zIndex: 25,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            order: 2,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: 0,
                            justifyContent: "space-between"
                        }}
                    >
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 3,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 1,
                                minHeight: 0,
                                width: "max-content",
                                flexGrow: 0,
                                height: "max-content",
                                margin: 0
                            }}
                        />
                        <div
                            className="bubble-element Text"
                            style={{
                                visibility: "hidden",
                                zIndex: 22,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 2,
                                minHeight: 0,
                                width: "max-content",
                                flexGrow: 0,
                                height: "max-content",
                                margin: 0,
                                display: "none"
                            }}
                        />
                    </div>
                    <div
                        className="bubble-element RepeatingGroup"
                        style={{
                            zIndex: 16,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            order: 3,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: 0,
                            display: "none"
                        }}
                    />
                    <div
                        className="bubble-element Text"
                        style={{
                            visibility: "hidden",
                            zIndex: 5,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            order: 4,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: 0
                        }}
                    />
                    <div
                        className="bubble-element Group bubble-r-container flex row"
                        style={{
                            zIndex: 26,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            order: 5,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: 0,
                            justifyContent: "space-between"
                        }}
                    >
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 18,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 1,
                                minHeight: 0,
                                width: "max-content",
                                flexGrow: 0,
                                height: "max-content",
                                margin: 0
                            }}
                        />
                        <div
                            className="bubble-element Text"
                            style={{
                                visibility: "hidden",
                                zIndex: 24,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 2,
                                minHeight: 0,
                                width: "max-content",
                                flexGrow: 0,
                                height: "max-content",
                                margin: 0,
                                display: "none"
                            }}
                        />
                    </div>
                    <div
                        className="bubble-element RepeatingGroup"
                        style={{
                            zIndex: 17,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            order: 6,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: 0,
                            display: "none"
                        }}
                    />
                    <div
                        className="bubble-element Text"
                        style={{
                            visibility: "hidden",
                            zIndex: 19,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            order: 7,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: 0
                        }}
                    />
                    <div
                        className="bubble-element Group bubble-r-container flex row"
                        style={{
                            zIndex: 27,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            order: 9,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: 0,
                            justifyContent: "space-between"
                        }}
                    >
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 21,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 1,
                                minHeight: 0,
                                width: "max-content",
                                flexGrow: 0,
                                height: "max-content",
                                margin: 0
                            }}
                        />
                        <div
                            className="bubble-element Text"
                            style={{
                                visibility: "hidden",
                                zIndex: 23,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 2,
                                minHeight: 0,
                                width: "max-content",
                                flexGrow: 0,
                                height: "max-content",
                                margin: 0,
                                display: "none"
                            }}
                        />
                    </div>
                    <div
                        className="bubble-element RepeatingGroup"
                        style={{
                            zIndex: 20,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            order: 11,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: 0,
                            display: "none"
                        }}
                    />
                    <div
                        className="bubble-element Text"
                        style={{
                            visibility: "hidden",
                            zIndex: 19,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            order: 13,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: 0
                        }}
                    />
                </div>
            </div>
            <div
                className="bubble-element GroupFocus bubble-r-container relative"
                style={{
                    visibility: "hidden",
                    display: "none",
                    position: "absolute",
                    minWidth: 0,
                    minHeight: 100,
                    height: "auto",
                    right: 20,
                    bottom: "unset",
                    zIndex: 2005,
                    marginRight: "auto",
                    overflowY: "auto"
                }}
            >
                <div
                    className="bubble-element Group bubble-r-container flex column"
                    style={{
                        zIndex: 28,
                        placeSelf: "start",
                        minWidth: 0,
                        minHeight: 25,
                        width: "calc(100% - 0px)",
                        height: "max-content",
                        margin: "20px 0px 0px",
                        justifyContent: "flex-start",
                        rowGap: 10
                    }}
                >
                    <div
                        className="bubble-element Group bubble-r-container flex row"
                        style={{
                            visibility: "hidden",
                            zIndex: 8,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            maxWidth: 344,
                            order: 1,
                            minHeight: 40,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: 0,
                            display: "none",
                            justifyContent: "center"
                        }}
                    >
                        <div
                            className="bubble-element Group bubble-r-container fixed"
                            style={{
                                zIndex: 2,
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
                        <input
                            type="input"
                            className="bubble-element Input"
                            style={{
                                zIndex: 3,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 2,
                                minHeight: 20,
                                width: 0,
                                flexGrow: 1,
                                height: 20,
                                margin: 0
                            }}
                        />
                    </div>
                    <div
                        className="bubble-element Group bubble-r-container flex row"
                        style={{
                            zIndex: 25,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            order: 2,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: 0,
                            justifyContent: "space-between"
                        }}
                    >
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 3,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 1,
                                minHeight: 0,
                                width: "max-content",
                                flexGrow: 0,
                                height: "max-content",
                                margin: 0
                            }}
                        />
                        <div
                            className="bubble-element Text"
                            style={{
                                visibility: "hidden",
                                zIndex: 22,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 2,
                                minHeight: 0,
                                width: "max-content",
                                flexGrow: 0,
                                height: "max-content",
                                margin: 0,
                                display: "none"
                            }}
                        />
                    </div>
                    <div
                        className="bubble-element RepeatingGroup"
                        style={{
                            zIndex: 16,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            order: 3,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: 0,
                            display: "none"
                        }}
                    />
                    <div
                        className="bubble-element Text"
                        style={{
                            visibility: "hidden",
                            zIndex: 5,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            order: 4,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: 0
                        }}
                    />
                    <div
                        className="bubble-element Group bubble-r-container flex row"
                        style={{
                            zIndex: 26,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            order: 5,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: 0,
                            justifyContent: "space-between"
                        }}
                    >
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 18,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 1,
                                minHeight: 0,
                                width: "max-content",
                                flexGrow: 0,
                                height: "max-content",
                                margin: 0
                            }}
                        />
                        <div
                            className="bubble-element Text"
                            style={{
                                visibility: "hidden",
                                zIndex: 24,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 2,
                                minHeight: 0,
                                width: "max-content",
                                flexGrow: 0,
                                height: "max-content",
                                margin: 0,
                                display: "none"
                            }}
                        />
                    </div>
                    <div
                        className="bubble-element RepeatingGroup"
                        style={{
                            zIndex: 17,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            order: 6,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: 0,
                            display: "none"
                        }}
                    />
                    <div
                        className="bubble-element Text"
                        style={{
                            visibility: "hidden",
                            zIndex: 19,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            order: 7,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: 0
                        }}
                    />
                    <div
                        className="bubble-element Group bubble-r-container flex row"
                        style={{
                            zIndex: 27,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            order: 9,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: 0,
                            justifyContent: "space-between"
                        }}
                    >
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 21,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 1,
                                minHeight: 0,
                                width: "max-content",
                                flexGrow: 0,
                                height: "max-content",
                                margin: 0
                            }}
                        />
                        <div
                            className="bubble-element Text"
                            style={{
                                visibility: "hidden",
                                zIndex: 23,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 2,
                                minHeight: 0,
                                width: "max-content",
                                flexGrow: 0,
                                height: "max-content",
                                margin: 0,
                                display: "none"
                            }}
                        />
                    </div>
                    <div
                        className="bubble-element RepeatingGroup"
                        style={{
                            zIndex: 20,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            order: 11,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: 0,
                            display: "none"
                        }}
                    />
                    <div
                        className="bubble-element Text"
                        style={{
                            visibility: "hidden",
                            zIndex: 19,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            order: 13,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: 0
                        }}
                    />
                </div>
                <div
                    className="bubble-element Group bubble-r-container relative"
                    style={{
                        zIndex: 29,
                        placeSelf: "start end",
                        minWidth: 24,
                        maxWidth: 24,
                        minHeight: 24,
                        maxHeight: 24,
                        width: 24,
                        height: 24,
                        margin: 0
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
            <div
                className="bubble-element GroupFocus bubble-r-container relative"
                style={{
                    visibility: "hidden",
                    display: "none",
                    position: "absolute",
                    minWidth: 0,
                    minHeight: 100,
                    height: "initial",
                    right: 20,
                    bottom: 20,
                    zIndex: 2005,
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
                            zIndex: 3,
                            alignSelf: "flex-end",
                            minWidth: 0,
                            order: 10,
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

export default Error;