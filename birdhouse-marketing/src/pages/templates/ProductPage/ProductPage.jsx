import React, { useEffect, useState } from 'react';
import "./style.css"

const ProductPage = () => {
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
                    opacity: 1,
                    background:
                        'url("https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1648041880300x169707593944904420%2FGroup%25201000000957.png?w=1536&h=&auto=compress&dpr=2&fit=max") center top / cover repeat-y rgba(255, 255, 255, 0)'
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
                        zIndex: 6,
                        alignSelf: "center",
                        minWidth: 0,
                        maxWidth: 1200,
                        order: 2,
                        minHeight: 0,
                        height: "max-content",
                        flexGrow: 0,
                        flexShrink: 0,
                        width: "calc(100% - 0px)",
                        margin: "145px 0px 60px",
                        justifyContent: "flex-start",
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
                            minWidth: 320,
                            order: 1,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: "0px 0px 60px",
                            justifyContent: "space-between",
                            overflow: "visible",
                            borderRadius: 0,
                            opacity: 1
                        }}
                    >
                        <div
                            className="bubble-element Image"
                            style={{
                                zIndex: 9,
                                alignSelf: "flex-start",
                                minWidth: 300,
                                maxWidth: 360,
                                order: 1,
                                width: 300,
                                flexGrow: 1,
                                height: "max-content",
                                margin: "0px 10px 20px",
                                borderStyle: "solid",
                                borderWidth: 1,
                                borderColor: "rgb(9, 23, 71)",
                                borderRadius: 20,
                                opacity: 1
                            }}
                        >
                            <img
                                alt=""
                                src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1688368811224x263609441702520770%2F14f6944b242eef8884e860f46c01a291.png?w=512&h=512&auto=compress&dpr=2&fit=crop&q=100"
                                style={{
                                    borderRadius: 20,
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    display: "block",
                                    width: "100%",
                                    height: "100%",
                                    margin: 0,
                                    objectFit: "contain"
                                }}
                            />
                            <div style={{ position: "relative", paddingTop: "100%" }} />
                        </div>
                        <div
                            className="bubble-element Group bubble-r-container flex column"
                            style={{
                                zIndex: 13,
                                alignSelf: "center",
                                minWidth: 300,
                                order: 3,
                                minHeight: 0,
                                width: 300,
                                flexGrow: 1,
                                height: "max-content",
                                margin: "0px 10px",
                                justifyContent: "flex-start",
                                overflow: "visible",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            <div
                                className="bubble-element Text clickable-element"
                                id="gradient-text"
                                style={{
                                    zIndex: 10,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 1,
                                    minHeight: 0,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "0px 0px 15px",
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 600,
                                    color: "rgb(5, 5, 5)",
                                    lineHeight: 1,
                                    borderRadius: 0,
                                    opacity: 1,
                                    cursor: "pointer",
                                    wordBreak: "break-word"
                                }}
                            >
                                Advertiser: IgorTatarinov
                            </div>
                            <div
                                className="bubble-element Text"
                                id=""
                                style={{
                                    zIndex: 12,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 2,
                                    minHeight: 0,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "0px 0px 25px",
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    fontFamily: "Poppins",
                                    fontSize: 24,
                                    fontWeight: 600,
                                    color: "rgb(0, 0, 0)",
                                    lineHeight: 1,
                                    borderRadius: 0,
                                    opacity: 1,
                                    wordBreak: "break-word"
                                }}
                            >
                                Costa Coffe
                            </div>
                            <div
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    zIndex: 20,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 3,
                                    minHeight: 17,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "0px 10px 0px 0px",
                                    justifyContent: "flex-start",
                                    overflow: "visible",
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 13,
                                        alignSelf: "center",
                                        minWidth: 0,
                                        order: 1,
                                        minHeight: 0,
                                        width: "max-content",
                                        flexGrow: 0,
                                        height: "max-content",
                                        margin: 0,
                                        whiteSpace: "pre-wrap",
                                        overflow: "visible",
                                        wordBreak: "break-word",
                                        fontFamily: "Poppins",
                                        fontSize: 18,
                                        fontWeight: 500,
                                        color: "rgb(123, 123, 123)",
                                        lineHeight: 1,
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    Category:{" "}
                                </div>
                                <div
                                    className="bubble-element Image clickable-element"
                                    id="gradient-text"
                                    style={{
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 17,
                                        width: 0,
                                        flexGrow: 1,
                                        height: "max-content",
                                        margin: 0,
                                        borderRadius: 0,
                                        opacity: 1,
                                        cursor: "pointer"
                                    }}
                                >
                                    <img
                                        alt=""
                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                        style={{
                                            position: "relative",
                                            top: 0,
                                            left: 0,
                                            display: "block",
                                            width: "100%",
                                            height: "100%",
                                            margin: 0,
                                            borderRadius: 0
                                        }}
                                    />
                                    <div style={{ display: "none" }} />
                                </div>
                                <div
                                    className="bubble-element Text"
                                    id="gradient-text"
                                    style={{
                                        zIndex: 17,
                                        alignSelf: "center",
                                        minWidth: 0,
                                        order: 4,
                                        minHeight: 17,
                                        width: "max-content",
                                        flexGrow: 0,
                                        height: "max-content",
                                        margin: 0,
                                        whiteSpace: "pre-wrap",
                                        overflow: "visible",
                                        fontFamily: "Poppins",
                                        fontSize: 18,
                                        fontWeight: 500,
                                        color: "rgb(123, 123, 123)",
                                        lineHeight: 1,
                                        borderRadius: 0,
                                        opacity: 1,
                                        wordBreak: "break-word"
                                    }}
                                >
                                    {" "}
                                    Lifestyle
                                </div>
                                <div
                                    className="bubble-element Image"
                                    style={{
                                        alignSelf: "flex-start",
                                        minWidth: 48,
                                        order: 5,
                                        width: 48,
                                        flexGrow: 1,
                                        height: "max-content",
                                        margin: 0,
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    <img
                                        alt=""
                                        style={{
                                            borderRadius: 0,
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            display: "block",
                                            width: "100%",
                                            height: "100%",
                                            margin: 0,
                                            objectFit: "contain"
                                        }}
                                        src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1657617335996x289766229915394050%2Fsun.png?w=64&h=64&auto=compress&dpr=2&fit=max"
                                    />
                                    <div style={{ position: "relative", paddingTop: "100%" }} />
                                </div>
                            </div>
                            <div
                                className="bubble-element Text"
                                style={{
                                    zIndex: 17,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 4,
                                    minHeight: 0,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "15px 0px",
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: "rgb(123, 123, 123)",
                                    lineHeight: 1,
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                Price
                            </div>
                            <div
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    zIndex: 20,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 5,
                                    minHeight: 0,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "0px 0px 10px",
                                    justifyContent: "flex-start",
                                    overflow: "visible",
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                <div
                                    className="bubble-element Image"
                                    style={{
                                        zIndex: 18,
                                        alignSelf: "flex-start",
                                        minWidth: 20,
                                        maxWidth: 20,
                                        order: 1,
                                        minHeight: 32,
                                        maxHeight: 32,
                                        width: 20,
                                        flexGrow: 1,
                                        height: 32,
                                        margin: "0px 10px 0px 0px",
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    <img
                                        alt=""
                                        style={{
                                            borderRadius: 0,
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            display: "block",
                                            width: "100%",
                                            height: "100%",
                                            margin: 0,
                                            objectFit: "contain"
                                        }}
                                        src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1657633985492x211575392420328060%2F25228.png?w=24&h=38&auto=compress&dpr=2&fit=max"
                                    />
                                    <div style={{ display: "none" }} />
                                </div>
                                <div
                                    className="bubble-element Text"
                                    id=""
                                    style={{
                                        zIndex: 19,
                                        alignSelf: "center",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 0,
                                        width: "max-content",
                                        flexGrow: 0,
                                        height: "max-content",
                                        margin: 0,
                                        whiteSpace: "pre-wrap",
                                        overflow: "visible",
                                        fontFamily: "Poppins",
                                        fontSize: 24,
                                        fontWeight: 600,
                                        color: "rgb(0, 0, 0)",
                                        lineHeight: 1,
                                        borderRadius: 0,
                                        opacity: 1,
                                        wordBreak: "break-word"
                                    }}
                                >
                                    0
                                </div>
                            </div>
                            <div
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    visibility: "hidden",
                                    zIndex: 21,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 6,
                                    minHeight: 30,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: 0,
                                    justifyContent: "flex-start",
                                    overflow: "visible"
                                }}
                            >
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 14,
                                        alignSelf: "center",
                                        minWidth: 0,
                                        order: 1,
                                        minHeight: 0,
                                        width: "max-content",
                                        flexGrow: 0,
                                        height: "max-content",
                                        margin: 0,
                                        whiteSpace: "pre-wrap"
                                    }}
                                />
                                <div
                                    className="bubble-element Text clickable-element"
                                    style={{
                                        zIndex: 16,
                                        alignSelf: "center",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 20,
                                        width: "max-content",
                                        flexGrow: 0,
                                        height: "max-content",
                                        margin: 0,
                                        whiteSpace: "pre-wrap"
                                    }}
                                />
                            </div>
                            <div
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    zIndex: 25,
                                    alignSelf: "flex-start",
                                    minWidth: 200,
                                    order: 7,
                                    minHeight: 54,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "calc(100% - 0px)",
                                    margin: "15px 0px",
                                    justifyContent: "flex-start",
                                    overflow: "visible",
                                    backgroundColor: "rgb(255, 255, 255)",
                                    borderRadius: 7,
                                    opacity: 1
                                }}
                            >
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 17,
                                        alignSelf: "center",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 0,
                                        width: "max-content",
                                        flexGrow: 0,
                                        height: "max-content",
                                        margin: 0,
                                        whiteSpace: "pre-wrap",
                                        overflow: "visible",
                                        fontFamily: "Poppins",
                                        fontSize: 16,
                                        fontWeight: 500,
                                        color: "rgb(0, 0, 0)",
                                        textAlign: "center",
                                        lineHeight: 1,
                                        borderRadius: 0,
                                        opacity: 1,
                                        wordBreak: "break-word"
                                    }}
                                >
                                    Debug: current state is: 200000
                                </div>
                            </div>
                            <div
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    zIndex: 29,
                                    alignSelf: "flex-start",
                                    minWidth: 200,
                                    order: 8,
                                    minHeight: 54,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "calc(100% - 0px)",
                                    margin: "15px 0px",
                                    justifyContent: "flex-start",
                                    overflow: "visible",
                                    backgroundColor: "rgb(255, 255, 255)",
                                    borderRadius: 7,
                                    opacity: 1
                                }}
                            >
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        visibility: "hidden",
                                        zIndex: 17,
                                        alignSelf: "center",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 0,
                                        width: "max-content",
                                        flexGrow: 0,
                                        height: "max-content",
                                        margin: 0,
                                        whiteSpace: "pre-wrap"
                                    }}
                                />
                            </div>
                            <div
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    visibility: "hidden",
                                    zIndex: 28,
                                    alignSelf: "flex-start",
                                    minWidth: 200,
                                    maxWidth: 200,
                                    order: 9,
                                    minHeight: 54,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: 200,
                                    margin: 0,
                                    display: "none",
                                    justifyContent: "center"
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
                                        width: 24,
                                        flexGrow: 1,
                                        height: 24,
                                        margin: "0px 10px 0px 0px"
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
                                            d="M14.8108 13.2973C14.8108 13.1253 14.8792 12.9603 15.0008 12.8386C15.1224 12.717 15.2874 12.6486 15.4595 12.6486H17.1892C17.3612 12.6486 17.5262 12.717 17.6479 12.8386C17.7695 12.9603 17.8378 13.1253 17.8378 13.2973C17.8378 13.4693 17.7695 13.6343 17.6479 13.756C17.5262 13.8776 17.3612 13.9459 17.1892 13.9459H15.4595C15.2874 13.9459 15.1224 13.8776 15.0008 13.756C14.8792 13.6343 14.8108 13.4693 14.8108 13.2973ZM4 5.72973H4.01211C4.06529 5.25404 4.29193 4.81465 4.64869 4.49554C5.00544 4.17644 5.4673 4.00001 5.94595 4H15.8919C16.1474 4 16.4005 4.05033 16.6366 4.14813C16.8727 4.24592 17.0872 4.38926 17.2679 4.56995C17.4486 4.75065 17.5919 4.96517 17.6897 5.20126C17.7875 5.43736 17.8378 5.6904 17.8378 5.94595V6.66984C18.4535 6.81601 19.0018 7.16557 19.3942 7.66198C19.7865 8.1584 20 8.77265 20 9.40541V16.7568C20 17.5022 19.7039 18.2172 19.1767 18.7443C18.6496 19.2714 17.9347 19.5676 17.1892 19.5676H6.81081C6.06534 19.5676 5.3504 19.2714 4.82327 18.7443C4.29614 18.2172 4 17.5022 4 16.7568V5.72973ZM17.1892 7.89189H5.2973V16.7568C5.2973 17.5922 5.97535 18.2703 6.81081 18.2703H17.1892C17.5906 18.2703 17.9756 18.1108 18.2594 17.827C18.5432 17.5431 18.7027 17.1582 18.7027 16.7568V9.40541C18.7027 9.004 18.5432 8.61903 18.2594 8.33519C17.9756 8.05135 17.5906 7.89189 17.1892 7.89189V7.89189ZM16.5405 6.59459V5.94595C16.5405 5.77391 16.4722 5.60893 16.3506 5.48728C16.2289 5.36564 16.0639 5.2973 15.8919 5.2973H5.94595C5.77391 5.2973 5.60893 5.36564 5.48728 5.48728C5.36564 5.60893 5.2973 5.77391 5.2973 5.94595C5.2973 6.11798 5.36564 6.28296 5.48728 6.40461C5.60893 6.52626 5.77391 6.59459 5.94595 6.59459H16.5405Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 17,
                                        alignSelf: "center",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 0,
                                        width: "max-content",
                                        flexGrow: 0,
                                        height: "max-content",
                                        margin: 0
                                    }}
                                />
                            </div>
                            <div
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    visibility: "hidden",
                                    zIndex: 21,
                                    alignSelf: "flex-start",
                                    minWidth: 200,
                                    maxWidth: 200,
                                    order: 10,
                                    minHeight: 54,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: 200,
                                    margin: "15px 0px 0px",
                                    display: "none",
                                    justifyContent: "center"
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
                                        width: 24,
                                        flexGrow: 1,
                                        height: 24,
                                        margin: "0px 10px 0px 0px"
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
                                            d="M14.8108 13.2973C14.8108 13.1253 14.8792 12.9603 15.0008 12.8386C15.1224 12.717 15.2874 12.6486 15.4595 12.6486H17.1892C17.3612 12.6486 17.5262 12.717 17.6479 12.8386C17.7695 12.9603 17.8378 13.1253 17.8378 13.2973C17.8378 13.4693 17.7695 13.6343 17.6479 13.756C17.5262 13.8776 17.3612 13.9459 17.1892 13.9459H15.4595C15.2874 13.9459 15.1224 13.8776 15.0008 13.756C14.8792 13.6343 14.8108 13.4693 14.8108 13.2973ZM4 5.72973H4.01211C4.06529 5.25404 4.29193 4.81465 4.64869 4.49554C5.00544 4.17644 5.4673 4.00001 5.94595 4H15.8919C16.1474 4 16.4005 4.05033 16.6366 4.14813C16.8727 4.24592 17.0872 4.38926 17.2679 4.56995C17.4486 4.75065 17.5919 4.96517 17.6897 5.20126C17.7875 5.43736 17.8378 5.6904 17.8378 5.94595V6.66984C18.4535 6.81601 19.0018 7.16557 19.3942 7.66198C19.7865 8.1584 20 8.77265 20 9.40541V16.7568C20 17.5022 19.7039 18.2172 19.1767 18.7443C18.6496 19.2714 17.9347 19.5676 17.1892 19.5676H6.81081C6.06534 19.5676 5.3504 19.2714 4.82327 18.7443C4.29614 18.2172 4 17.5022 4 16.7568V5.72973ZM17.1892 7.89189H5.2973V16.7568C5.2973 17.5922 5.97535 18.2703 6.81081 18.2703H17.1892C17.5906 18.2703 17.9756 18.1108 18.2594 17.827C18.5432 17.5431 18.7027 17.1582 18.7027 16.7568V9.40541C18.7027 9.004 18.5432 8.61903 18.2594 8.33519C17.9756 8.05135 17.5906 7.89189 17.1892 7.89189V7.89189ZM16.5405 6.59459V5.94595C16.5405 5.77391 16.4722 5.60893 16.3506 5.48728C16.2289 5.36564 16.0639 5.2973 15.8919 5.2973H5.94595C5.77391 5.2973 5.60893 5.36564 5.48728 5.48728C5.36564 5.60893 5.2973 5.77391 5.2973 5.94595C5.2973 6.11798 5.36564 6.28296 5.48728 6.40461C5.60893 6.52626 5.77391 6.59459 5.94595 6.59459H16.5405Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 17,
                                        alignSelf: "center",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 0,
                                        width: "max-content",
                                        flexGrow: 0,
                                        height: "max-content",
                                        margin: 0
                                    }}
                                />
                            </div>
                            <div
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    visibility: "hidden",
                                    zIndex: 22,
                                    alignSelf: "flex-start",
                                    minWidth: 200,
                                    maxWidth: 200,
                                    order: 11,
                                    minHeight: 54,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: 200,
                                    margin: "15px 0px 0px",
                                    display: "none",
                                    justifyContent: "center"
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
                                        width: 24,
                                        flexGrow: 1,
                                        height: 24,
                                        margin: "0px 10px 0px 0px"
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
                                            d="M14.8108 13.2973C14.8108 13.1253 14.8792 12.9603 15.0008 12.8386C15.1224 12.717 15.2874 12.6486 15.4595 12.6486H17.1892C17.3612 12.6486 17.5262 12.717 17.6479 12.8386C17.7695 12.9603 17.8378 13.1253 17.8378 13.2973C17.8378 13.4693 17.7695 13.6343 17.6479 13.756C17.5262 13.8776 17.3612 13.9459 17.1892 13.9459H15.4595C15.2874 13.9459 15.1224 13.8776 15.0008 13.756C14.8792 13.6343 14.8108 13.4693 14.8108 13.2973ZM4 5.72973H4.01211C4.06529 5.25404 4.29193 4.81465 4.64869 4.49554C5.00544 4.17644 5.4673 4.00001 5.94595 4H15.8919C16.1474 4 16.4005 4.05033 16.6366 4.14813C16.8727 4.24592 17.0872 4.38926 17.2679 4.56995C17.4486 4.75065 17.5919 4.96517 17.6897 5.20126C17.7875 5.43736 17.8378 5.6904 17.8378 5.94595V6.66984C18.4535 6.81601 19.0018 7.16557 19.3942 7.66198C19.7865 8.1584 20 8.77265 20 9.40541V16.7568C20 17.5022 19.7039 18.2172 19.1767 18.7443C18.6496 19.2714 17.9347 19.5676 17.1892 19.5676H6.81081C6.06534 19.5676 5.3504 19.2714 4.82327 18.7443C4.29614 18.2172 4 17.5022 4 16.7568V5.72973ZM17.1892 7.89189H5.2973V16.7568C5.2973 17.5922 5.97535 18.2703 6.81081 18.2703H17.1892C17.5906 18.2703 17.9756 18.1108 18.2594 17.827C18.5432 17.5431 18.7027 17.1582 18.7027 16.7568V9.40541C18.7027 9.004 18.5432 8.61903 18.2594 8.33519C17.9756 8.05135 17.5906 7.89189 17.1892 7.89189V7.89189ZM16.5405 6.59459V5.94595C16.5405 5.77391 16.4722 5.60893 16.3506 5.48728C16.2289 5.36564 16.0639 5.2973 15.8919 5.2973H5.94595C5.77391 5.2973 5.60893 5.36564 5.48728 5.48728C5.36564 5.60893 5.2973 5.77391 5.2973 5.94595C5.2973 6.11798 5.36564 6.28296 5.48728 6.40461C5.60893 6.52626 5.77391 6.59459 5.94595 6.59459H16.5405Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 17,
                                        alignSelf: "center",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 0,
                                        width: "max-content",
                                        flexGrow: 0,
                                        height: "max-content",
                                        margin: 0
                                    }}
                                />
                            </div>
                            <div
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    visibility: "hidden",
                                    zIndex: 24,
                                    alignSelf: "flex-start",
                                    minWidth: 200,
                                    maxWidth: 200,
                                    order: 12,
                                    minHeight: 54,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: 200,
                                    margin: "15px 0px 0px",
                                    display: "none",
                                    justifyContent: "center"
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
                                        width: 24,
                                        flexGrow: 1,
                                        height: 24,
                                        margin: "0px 10px 0px 0px"
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
                                            d="M14.8108 13.2973C14.8108 13.1253 14.8792 12.9603 15.0008 12.8386C15.1224 12.717 15.2874 12.6486 15.4595 12.6486H17.1892C17.3612 12.6486 17.5262 12.717 17.6479 12.8386C17.7695 12.9603 17.8378 13.1253 17.8378 13.2973C17.8378 13.4693 17.7695 13.6343 17.6479 13.756C17.5262 13.8776 17.3612 13.9459 17.1892 13.9459H15.4595C15.2874 13.9459 15.1224 13.8776 15.0008 13.756C14.8792 13.6343 14.8108 13.4693 14.8108 13.2973ZM4 5.72973H4.01211C4.06529 5.25404 4.29193 4.81465 4.64869 4.49554C5.00544 4.17644 5.4673 4.00001 5.94595 4H15.8919C16.1474 4 16.4005 4.05033 16.6366 4.14813C16.8727 4.24592 17.0872 4.38926 17.2679 4.56995C17.4486 4.75065 17.5919 4.96517 17.6897 5.20126C17.7875 5.43736 17.8378 5.6904 17.8378 5.94595V6.66984C18.4535 6.81601 19.0018 7.16557 19.3942 7.66198C19.7865 8.1584 20 8.77265 20 9.40541V16.7568C20 17.5022 19.7039 18.2172 19.1767 18.7443C18.6496 19.2714 17.9347 19.5676 17.1892 19.5676H6.81081C6.06534 19.5676 5.3504 19.2714 4.82327 18.7443C4.29614 18.2172 4 17.5022 4 16.7568V5.72973ZM17.1892 7.89189H5.2973V16.7568C5.2973 17.5922 5.97535 18.2703 6.81081 18.2703H17.1892C17.5906 18.2703 17.9756 18.1108 18.2594 17.827C18.5432 17.5431 18.7027 17.1582 18.7027 16.7568V9.40541C18.7027 9.004 18.5432 8.61903 18.2594 8.33519C17.9756 8.05135 17.5906 7.89189 17.1892 7.89189V7.89189ZM16.5405 6.59459V5.94595C16.5405 5.77391 16.4722 5.60893 16.3506 5.48728C16.2289 5.36564 16.0639 5.2973 15.8919 5.2973H5.94595C5.77391 5.2973 5.60893 5.36564 5.48728 5.48728C5.36564 5.60893 5.2973 5.77391 5.2973 5.94595C5.2973 6.11798 5.36564 6.28296 5.48728 6.40461C5.60893 6.52626 5.77391 6.59459 5.94595 6.59459H16.5405Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 17,
                                        alignSelf: "center",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 0,
                                        width: "max-content",
                                        flexGrow: 0,
                                        height: "max-content",
                                        margin: 0
                                    }}
                                />
                            </div>
                            <div
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    visibility: "hidden",
                                    zIndex: 27,
                                    alignSelf: "flex-start",
                                    minWidth: 200,
                                    maxWidth: 200,
                                    order: 13,
                                    minHeight: 54,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: 200,
                                    margin: "15px 0px 0px",
                                    display: "none",
                                    justifyContent: "center"
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
                                        width: 24,
                                        flexGrow: 1,
                                        height: 24,
                                        margin: "0px 10px 0px 0px"
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
                                            d="M14.8108 13.2973C14.8108 13.1253 14.8792 12.9603 15.0008 12.8386C15.1224 12.717 15.2874 12.6486 15.4595 12.6486H17.1892C17.3612 12.6486 17.5262 12.717 17.6479 12.8386C17.7695 12.9603 17.8378 13.1253 17.8378 13.2973C17.8378 13.4693 17.7695 13.6343 17.6479 13.756C17.5262 13.8776 17.3612 13.9459 17.1892 13.9459H15.4595C15.2874 13.9459 15.1224 13.8776 15.0008 13.756C14.8792 13.6343 14.8108 13.4693 14.8108 13.2973ZM4 5.72973H4.01211C4.06529 5.25404 4.29193 4.81465 4.64869 4.49554C5.00544 4.17644 5.4673 4.00001 5.94595 4H15.8919C16.1474 4 16.4005 4.05033 16.6366 4.14813C16.8727 4.24592 17.0872 4.38926 17.2679 4.56995C17.4486 4.75065 17.5919 4.96517 17.6897 5.20126C17.7875 5.43736 17.8378 5.6904 17.8378 5.94595V6.66984C18.4535 6.81601 19.0018 7.16557 19.3942 7.66198C19.7865 8.1584 20 8.77265 20 9.40541V16.7568C20 17.5022 19.7039 18.2172 19.1767 18.7443C18.6496 19.2714 17.9347 19.5676 17.1892 19.5676H6.81081C6.06534 19.5676 5.3504 19.2714 4.82327 18.7443C4.29614 18.2172 4 17.5022 4 16.7568V5.72973ZM17.1892 7.89189H5.2973V16.7568C5.2973 17.5922 5.97535 18.2703 6.81081 18.2703H17.1892C17.5906 18.2703 17.9756 18.1108 18.2594 17.827C18.5432 17.5431 18.7027 17.1582 18.7027 16.7568V9.40541C18.7027 9.004 18.5432 8.61903 18.2594 8.33519C17.9756 8.05135 17.5906 7.89189 17.1892 7.89189V7.89189ZM16.5405 6.59459V5.94595C16.5405 5.77391 16.4722 5.60893 16.3506 5.48728C16.2289 5.36564 16.0639 5.2973 15.8919 5.2973H5.94595C5.77391 5.2973 5.60893 5.36564 5.48728 5.48728C5.36564 5.60893 5.2973 5.77391 5.2973 5.94595C5.2973 6.11798 5.36564 6.28296 5.48728 6.40461C5.60893 6.52626 5.77391 6.59459 5.94595 6.59459H16.5405Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 17,
                                        alignSelf: "center",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 0,
                                        width: "max-content",
                                        flexGrow: 0,
                                        height: "max-content",
                                        margin: 0
                                    }}
                                />
                            </div>
                            <div
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    visibility: "hidden",
                                    zIndex: 23,
                                    alignSelf: "flex-start",
                                    minWidth: 200,
                                    maxWidth: 200,
                                    order: 14,
                                    minHeight: 54,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: 200,
                                    margin: "15px 0px 0px",
                                    display: "none",
                                    justifyContent: "center"
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
                                        width: 24,
                                        flexGrow: 1,
                                        height: 24,
                                        margin: "0px 10px 0px 0px"
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
                                            d="M14.8108 13.2973C14.8108 13.1253 14.8792 12.9603 15.0008 12.8386C15.1224 12.717 15.2874 12.6486 15.4595 12.6486H17.1892C17.3612 12.6486 17.5262 12.717 17.6479 12.8386C17.7695 12.9603 17.8378 13.1253 17.8378 13.2973C17.8378 13.4693 17.7695 13.6343 17.6479 13.756C17.5262 13.8776 17.3612 13.9459 17.1892 13.9459H15.4595C15.2874 13.9459 15.1224 13.8776 15.0008 13.756C14.8792 13.6343 14.8108 13.4693 14.8108 13.2973ZM4 5.72973H4.01211C4.06529 5.25404 4.29193 4.81465 4.64869 4.49554C5.00544 4.17644 5.4673 4.00001 5.94595 4H15.8919C16.1474 4 16.4005 4.05033 16.6366 4.14813C16.8727 4.24592 17.0872 4.38926 17.2679 4.56995C17.4486 4.75065 17.5919 4.96517 17.6897 5.20126C17.7875 5.43736 17.8378 5.6904 17.8378 5.94595V6.66984C18.4535 6.81601 19.0018 7.16557 19.3942 7.66198C19.7865 8.1584 20 8.77265 20 9.40541V16.7568C20 17.5022 19.7039 18.2172 19.1767 18.7443C18.6496 19.2714 17.9347 19.5676 17.1892 19.5676H6.81081C6.06534 19.5676 5.3504 19.2714 4.82327 18.7443C4.29614 18.2172 4 17.5022 4 16.7568V5.72973ZM17.1892 7.89189H5.2973V16.7568C5.2973 17.5922 5.97535 18.2703 6.81081 18.2703H17.1892C17.5906 18.2703 17.9756 18.1108 18.2594 17.827C18.5432 17.5431 18.7027 17.1582 18.7027 16.7568V9.40541C18.7027 9.004 18.5432 8.61903 18.2594 8.33519C17.9756 8.05135 17.5906 7.89189 17.1892 7.89189V7.89189ZM16.5405 6.59459V5.94595C16.5405 5.77391 16.4722 5.60893 16.3506 5.48728C16.2289 5.36564 16.0639 5.2973 15.8919 5.2973H5.94595C5.77391 5.2973 5.60893 5.36564 5.48728 5.48728C5.36564 5.60893 5.2973 5.77391 5.2973 5.94595C5.2973 6.11798 5.36564 6.28296 5.48728 6.40461C5.60893 6.52626 5.77391 6.59459 5.94595 6.59459H16.5405Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 17,
                                        alignSelf: "center",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 0,
                                        width: "max-content",
                                        flexGrow: 0,
                                        height: "max-content",
                                        margin: 0
                                    }}
                                />
                            </div>
                            <div
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    visibility: "hidden",
                                    zIndex: 23,
                                    alignSelf: "flex-start",
                                    minWidth: 200,
                                    maxWidth: 200,
                                    order: 15,
                                    minHeight: 54,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: 200,
                                    margin: "15px 0px 0px",
                                    display: "none",
                                    justifyContent: "center"
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
                                        width: 24,
                                        flexGrow: 1,
                                        height: 24,
                                        margin: "0px 10px 0px 0px"
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
                                            d="M14.8108 13.2973C14.8108 13.1253 14.8792 12.9603 15.0008 12.8386C15.1224 12.717 15.2874 12.6486 15.4595 12.6486H17.1892C17.3612 12.6486 17.5262 12.717 17.6479 12.8386C17.7695 12.9603 17.8378 13.1253 17.8378 13.2973C17.8378 13.4693 17.7695 13.6343 17.6479 13.756C17.5262 13.8776 17.3612 13.9459 17.1892 13.9459H15.4595C15.2874 13.9459 15.1224 13.8776 15.0008 13.756C14.8792 13.6343 14.8108 13.4693 14.8108 13.2973ZM4 5.72973H4.01211C4.06529 5.25404 4.29193 4.81465 4.64869 4.49554C5.00544 4.17644 5.4673 4.00001 5.94595 4H15.8919C16.1474 4 16.4005 4.05033 16.6366 4.14813C16.8727 4.24592 17.0872 4.38926 17.2679 4.56995C17.4486 4.75065 17.5919 4.96517 17.6897 5.20126C17.7875 5.43736 17.8378 5.6904 17.8378 5.94595V6.66984C18.4535 6.81601 19.0018 7.16557 19.3942 7.66198C19.7865 8.1584 20 8.77265 20 9.40541V16.7568C20 17.5022 19.7039 18.2172 19.1767 18.7443C18.6496 19.2714 17.9347 19.5676 17.1892 19.5676H6.81081C6.06534 19.5676 5.3504 19.2714 4.82327 18.7443C4.29614 18.2172 4 17.5022 4 16.7568V5.72973ZM17.1892 7.89189H5.2973V16.7568C5.2973 17.5922 5.97535 18.2703 6.81081 18.2703H17.1892C17.5906 18.2703 17.9756 18.1108 18.2594 17.827C18.5432 17.5431 18.7027 17.1582 18.7027 16.7568V9.40541C18.7027 9.004 18.5432 8.61903 18.2594 8.33519C17.9756 8.05135 17.5906 7.89189 17.1892 7.89189V7.89189ZM16.5405 6.59459V5.94595C16.5405 5.77391 16.4722 5.60893 16.3506 5.48728C16.2289 5.36564 16.0639 5.2973 15.8919 5.2973H5.94595C5.77391 5.2973 5.60893 5.36564 5.48728 5.48728C5.36564 5.60893 5.2973 5.77391 5.2973 5.94595C5.2973 6.11798 5.36564 6.28296 5.48728 6.40461C5.60893 6.52626 5.77391 6.59459 5.94595 6.59459H16.5405Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 17,
                                        alignSelf: "center",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 0,
                                        width: "max-content",
                                        flexGrow: 0,
                                        height: "max-content",
                                        margin: 0
                                    }}
                                />
                            </div>
                            <div
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    visibility: "hidden",
                                    zIndex: 26,
                                    alignSelf: "flex-start",
                                    minWidth: 200,
                                    maxWidth: 200,
                                    order: 16,
                                    minHeight: 54,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: 200,
                                    margin: "15px 0px 0px",
                                    display: "none",
                                    justifyContent: "center"
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
                                        width: 24,
                                        flexGrow: 1,
                                        height: 24,
                                        margin: "0px 10px 0px 0px"
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
                                            d="M14.8108 13.2973C14.8108 13.1253 14.8792 12.9603 15.0008 12.8386C15.1224 12.717 15.2874 12.6486 15.4595 12.6486H17.1892C17.3612 12.6486 17.5262 12.717 17.6479 12.8386C17.7695 12.9603 17.8378 13.1253 17.8378 13.2973C17.8378 13.4693 17.7695 13.6343 17.6479 13.756C17.5262 13.8776 17.3612 13.9459 17.1892 13.9459H15.4595C15.2874 13.9459 15.1224 13.8776 15.0008 13.756C14.8792 13.6343 14.8108 13.4693 14.8108 13.2973ZM4 5.72973H4.01211C4.06529 5.25404 4.29193 4.81465 4.64869 4.49554C5.00544 4.17644 5.4673 4.00001 5.94595 4H15.8919C16.1474 4 16.4005 4.05033 16.6366 4.14813C16.8727 4.24592 17.0872 4.38926 17.2679 4.56995C17.4486 4.75065 17.5919 4.96517 17.6897 5.20126C17.7875 5.43736 17.8378 5.6904 17.8378 5.94595V6.66984C18.4535 6.81601 19.0018 7.16557 19.3942 7.66198C19.7865 8.1584 20 8.77265 20 9.40541V16.7568C20 17.5022 19.7039 18.2172 19.1767 18.7443C18.6496 19.2714 17.9347 19.5676 17.1892 19.5676H6.81081C6.06534 19.5676 5.3504 19.2714 4.82327 18.7443C4.29614 18.2172 4 17.5022 4 16.7568V5.72973ZM17.1892 7.89189H5.2973V16.7568C5.2973 17.5922 5.97535 18.2703 6.81081 18.2703H17.1892C17.5906 18.2703 17.9756 18.1108 18.2594 17.827C18.5432 17.5431 18.7027 17.1582 18.7027 16.7568V9.40541C18.7027 9.004 18.5432 8.61903 18.2594 8.33519C17.9756 8.05135 17.5906 7.89189 17.1892 7.89189V7.89189ZM16.5405 6.59459V5.94595C16.5405 5.77391 16.4722 5.60893 16.3506 5.48728C16.2289 5.36564 16.0639 5.2973 15.8919 5.2973H5.94595C5.77391 5.2973 5.60893 5.36564 5.48728 5.48728C5.36564 5.60893 5.2973 5.77391 5.2973 5.94595C5.2973 6.11798 5.36564 6.28296 5.48728 6.40461C5.60893 6.52626 5.77391 6.59459 5.94595 6.59459H16.5405Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 17,
                                        alignSelf: "center",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 0,
                                        width: "max-content",
                                        flexGrow: 0,
                                        height: "max-content",
                                        margin: 0
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className="bubble-element Group bubble-r-container flex column"
                        style={{
                            zIndex: 4,
                            alignSelf: "center",
                            minWidth: 300,
                            order: 2,
                            minHeight: 300,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 20px)",
                            margin: "0px 10px",
                            justifyContent: "flex-start",
                            overflow: "visible",
                            backgroundColor: "rgba(255, 255, 255, 0.7)",
                            borderStyle: "solid",
                            borderWidth: 1,
                            borderColor: "rgb(238, 238, 238)",
                            borderRadius: 20,
                            opacity: 1
                        }}
                    >
                        <div
                            className="bubble-element Group bubble-r-container flex column"
                            style={{
                                zIndex: 8,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 2,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 50px)",
                                margin: "20px 25px",
                                justifyContent: "flex-start",
                                overflow: "visible",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            <div
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    zIndex: 6,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
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
                                    padding: "0px 0px 25px",
                                    opacity: 1
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container flex row"
                                    id="scrolling"
                                    style={{
                                        zIndex: 7,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 1,
                                        minHeight: 0,
                                        width: 0,
                                        flexGrow: 1,
                                        height: "max-content",
                                        margin: 0,
                                        justifyContent: "flex-start",
                                        overflow: "visible",
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 6,
                                            alignSelf: "flex-start",
                                            minWidth: 430,
                                            order: 1,
                                            minHeight: 0,
                                            width: 430,
                                            flexGrow: 1,
                                            height: "max-content",
                                            margin: 0,
                                            justifyContent: "flex-start",
                                            overflow: "visible",
                                            borderRadius: 0,
                                            opacity: 1
                                        }}
                                    >
                                        <div
                                            className="bubble-element Text clickable-element"
                                            id="gradient-text"
                                            style={{
                                                zIndex: 2,
                                                alignSelf: "flex-start",
                                                minWidth: 0,
                                                order: 1,
                                                minHeight: 17,
                                                width: "max-content",
                                                flexGrow: 0,
                                                height: "max-content",
                                                margin: "0px 35px 0px 0px",
                                                whiteSpace: "pre-wrap",
                                                overflow: "visible",
                                                wordBreak: "break-word",
                                                fontFamily: "Poppins",
                                                fontSize: 14,
                                                fontWeight: 500,
                                                color: "rgb(123, 123, 123)",
                                                letterSpacing: "0.5px",
                                                lineHeight: 1,
                                                borderRadius: 0,
                                                opacity: 1,
                                                cursor: "pointer"
                                            }}
                                        >
                                            Description
                                        </div>
                                        <div
                                            className="bubble-element Text clickable-element"
                                            style={{
                                                zIndex: 3,
                                                alignSelf: "flex-start",
                                                minWidth: 0,
                                                order: 2,
                                                minHeight: 17,
                                                width: "max-content",
                                                flexGrow: 0,
                                                height: "max-content",
                                                margin: "0px 35px 0px 0px",
                                                whiteSpace: "pre-wrap",
                                                overflow: "visible",
                                                wordBreak: "break-word",
                                                fontFamily: "Poppins",
                                                fontSize: 14,
                                                fontWeight: 500,
                                                color: "rgb(123, 123, 123)",
                                                letterSpacing: "0.5px",
                                                lineHeight: 1,
                                                borderRadius: 0,
                                                opacity: 1,
                                                cursor: "pointer"
                                            }}
                                        >
                                            Price History
                                        </div>
                                        <div
                                            className="bubble-element Text clickable-element"
                                            style={{
                                                zIndex: 4,
                                                alignSelf: "flex-start",
                                                minWidth: 0,
                                                order: 3,
                                                minHeight: 17,
                                                width: "max-content",
                                                flexGrow: 0,
                                                height: "max-content",
                                                margin: "0px 35px 0px 0px",
                                                whiteSpace: "pre-wrap",
                                                overflow: "visible",
                                                wordBreak: "break-word",
                                                fontFamily: "Poppins",
                                                fontSize: 14,
                                                fontWeight: 500,
                                                color: "rgb(123, 123, 123)",
                                                letterSpacing: "0.5px",
                                                lineHeight: 1,
                                                borderRadius: 0,
                                                opacity: 1,
                                                cursor: "pointer"
                                            }}
                                        >
                                            Details
                                        </div>
                                        <div
                                            className="bubble-element Text clickable-element"
                                            style={{
                                                zIndex: 5,
                                                alignSelf: "flex-start",
                                                minWidth: 0,
                                                order: 4,
                                                minHeight: 17,
                                                width: "max-content",
                                                flexGrow: 0,
                                                height: "max-content",
                                                margin: 0,
                                                whiteSpace: "pre-wrap",
                                                overflow: "visible",
                                                wordBreak: "break-word",
                                                fontFamily: "Poppins",
                                                fontSize: 14,
                                                fontWeight: 500,
                                                color: "rgb(123, 123, 123)",
                                                letterSpacing: "0.5px",
                                                lineHeight: 1,
                                                borderRadius: 0,
                                                opacity: 1,
                                                cursor: "pointer"
                                            }}
                                        >
                                            Item Activity
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element Group bubble-r-container flex column"
                                style={{
                                    zIndex: 8,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 2,
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
                                    className="bubble-element Group bubble-r-container flex row"
                                    style={{
                                        zIndex: 24,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 0,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "auto",
                                        margin: "0px 0px 25px",
                                        justifyContent: "flex-start",
                                        overflow: "visible",
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    <div
                                        className="bubble-element Text"
                                        id=""
                                        style={{
                                            zIndex: 22,
                                            alignSelf: "flex-start",
                                            minWidth: 0,
                                            order: 1,
                                            minHeight: 0,
                                            width: "max-content",
                                            flexGrow: 0,
                                            height: "max-content",
                                            margin: "0px 5px 0px 0px",
                                            whiteSpace: "pre-wrap",
                                            overflow: "visible",
                                            wordBreak: "break-word",
                                            fontFamily: "Poppins",
                                            fontSize: 14,
                                            fontWeight: 600,
                                            color: "rgb(123, 123, 123)",
                                            lineHeight: 1,
                                            borderRadius: 0,
                                            opacity: 1
                                        }}
                                    >
                                        Created by{" "}
                                    </div>
                                    <div
                                        className="bubble-element Text clickable-element"
                                        id="gradient-text"
                                        style={{
                                            zIndex: 23,
                                            alignSelf: "flex-start",
                                            minWidth: 0,
                                            order: 2,
                                            minHeight: 0,
                                            width: "max-content",
                                            flexGrow: 0,
                                            height: "max-content",
                                            margin: 0,
                                            whiteSpace: "pre-wrap",
                                            overflow: "visible",
                                            fontFamily: "Poppins",
                                            fontSize: 14,
                                            fontWeight: 700,
                                            color: "rgb(123, 123, 123)",
                                            lineHeight: 1,
                                            borderRadius: 0,
                                            opacity: 1,
                                            cursor: "pointer",
                                            wordBreak: "break-word"
                                        }}
                                    >
                                        IgorTatarinov
                                    </div>
                                </div>
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 20,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 3,
                                        minHeight: 0,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "auto",
                                        margin: 0,
                                        whiteSpace: "pre-wrap",
                                        overflow: "visible",
                                        fontFamily: "Poppins",
                                        fontSize: 14,
                                        fontWeight: 400,
                                        color: "rgb(123, 123, 123)",
                                        lineHeight: "1.5",
                                        borderRadius: 0,
                                        opacity: 1,
                                        wordBreak: "break-word"
                                    }}
                                />
                                <a
                                    className="bubble-element Link"
                                    style={{
                                        visibility: "hidden",
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 4,
                                        minHeight: 20,
                                        height: 20,
                                        flexGrow: 1,
                                        width: "calc(100% - 0px)",
                                        margin: "0px 0px 30px",
                                        display: "none"
                                    }}
                                />
                                <div
                                    className="bubble-element RepeatingGroup bubble-rg"
                                    style={{
                                        zIndex: 8,
                                        alignSelf: "center",
                                        minWidth: 0,
                                        order: 5,
                                        minHeight: 50,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "calc(100% - 0px)",
                                        margin: "0px 0px 30px",
                                        gap: 1,
                                        gridTemplateRows: "repeat(1, minmax(max-content, auto))",
                                        gridAutoColumns: "minmax(max-content, 44px)",
                                        gridAutoFlow: "column",
                                        overflow: "auto",
                                        borderStyle: "solid",
                                        borderWidth: 1,
                                        borderColor: "rgb(238, 238, 238)",
                                        borderRadius: 15,
                                        backgroundColor: "rgba(255, 255, 255, 0.7)",
                                        opacity: 1
                                    }}
                                    id="repeating-center"
                                >
                                    <div
                                        className="bubble-element GroupItem bubble-r-container relative group-item entry-1"
                                        style={{
                                            boxSizing: "content-box",
                                            minWidth: 44,
                                            borderTopStyle: "none",
                                            borderLeftStyle: "none"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 2,
                                                placeSelf: "center",
                                                minWidth: 34,
                                                maxWidth: 34,
                                                width: 34,
                                                height: "max-content",
                                                margin: 5,
                                                borderRadius: 0,
                                                opacity: 1
                                            }}
                                        >
                                            <img
                                                alt=""
                                                src="https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647536889240x427907597683149250/website.svg"
                                                style={{
                                                    borderRadius: 0,
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                    display: "block",
                                                    width: "100%",
                                                    height: "100%",
                                                    margin: 0,
                                                    objectFit: "contain"
                                                }}
                                            />
                                            <div style={{ position: "relative", paddingTop: "100%" }} />
                                        </div>
                                        <a
                                            className="bubble-element Link clickable-element"
                                            target="_blank"
                                            href="//birdhouse.technology"
                                            style={{
                                                zIndex: 3,
                                                placeSelf: "center",
                                                minWidth: 0,
                                                minHeight: 0,
                                                width: "calc(100% - 0px)",
                                                height: "calc(100% - 0px)",
                                                margin: 0,
                                                whiteSpace: "pre-wrap",
                                                textDecoration: "none",
                                                wordBreak: "break-word",
                                                userSelect: "none",
                                                cursor: "pointer",
                                                pointerEvents: "auto",
                                                fontFamily: "Barlow",
                                                fontSize: 10,
                                                fontWeight: 500,
                                                color: "rgba(2, 179, 199, 0)",
                                                lineHeight: "0.5",
                                                borderRadius: 0,
                                                opacity: 1
                                            }}
                                        >
                                            <div>...edit me...</div>
                                        </a>
                                    </div>
                                    <div
                                        className="bubble-element GroupItem bubble-r-container relative group-item entry-2"
                                        style={{
                                            boxSizing: "content-box",
                                            minWidth: 44,
                                            borderTopStyle: "none",
                                            borderLeft: "1px solid rgb(238, 238, 238)",
                                            marginLeft: "-1px",
                                            display: "none"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 2,
                                                placeSelf: "center",
                                                minWidth: 34,
                                                maxWidth: 34,
                                                width: 34,
                                                height: "max-content",
                                                margin: 5
                                            }}
                                        />
                                        <a
                                            className="bubble-element Link"
                                            style={{
                                                zIndex: 3,
                                                placeSelf: "center",
                                                minWidth: 0,
                                                minHeight: 0,
                                                width: "calc(100% - 0px)",
                                                height: "calc(100% - 0px)",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="bubble-element GroupItem bubble-r-container relative group-item entry-3"
                                        style={{
                                            boxSizing: "content-box",
                                            minWidth: 44,
                                            borderTopStyle: "none",
                                            borderLeft: "1px solid rgb(238, 238, 238)",
                                            marginLeft: "-1px",
                                            display: "none"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 2,
                                                placeSelf: "center",
                                                minWidth: 34,
                                                maxWidth: 34,
                                                width: 34,
                                                height: "max-content",
                                                margin: 5
                                            }}
                                        />
                                        <a
                                            className="bubble-element Link"
                                            style={{
                                                zIndex: 3,
                                                placeSelf: "center",
                                                minWidth: 0,
                                                minHeight: 0,
                                                width: "calc(100% - 0px)",
                                                height: "calc(100% - 0px)",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="bubble-element GroupItem bubble-r-container relative group-item entry-4"
                                        style={{
                                            boxSizing: "content-box",
                                            minWidth: 44,
                                            borderTopStyle: "none",
                                            borderLeft: "1px solid rgb(238, 238, 238)",
                                            marginLeft: "-1px",
                                            display: "none"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 2,
                                                placeSelf: "center",
                                                minWidth: 34,
                                                maxWidth: 34,
                                                width: 34,
                                                height: "max-content",
                                                margin: 5
                                            }}
                                        />
                                        <a
                                            className="bubble-element Link"
                                            style={{
                                                zIndex: 3,
                                                placeSelf: "center",
                                                minWidth: 0,
                                                minHeight: 0,
                                                width: "calc(100% - 0px)",
                                                height: "calc(100% - 0px)",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="bubble-element GroupItem bubble-r-container relative group-item entry-5"
                                        style={{
                                            boxSizing: "content-box",
                                            minWidth: 44,
                                            borderTopStyle: "none",
                                            borderLeft: "1px solid rgb(238, 238, 238)",
                                            marginLeft: "-1px",
                                            display: "none"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 2,
                                                placeSelf: "center",
                                                minWidth: 34,
                                                maxWidth: 34,
                                                width: 34,
                                                height: "max-content",
                                                margin: 5
                                            }}
                                        />
                                        <a
                                            className="bubble-element Link"
                                            style={{
                                                zIndex: 3,
                                                placeSelf: "center",
                                                minWidth: 0,
                                                minHeight: 0,
                                                width: "calc(100% - 0px)",
                                                height: "calc(100% - 0px)",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="bubble-element GroupItem bubble-r-container relative group-item entry-6"
                                        style={{
                                            boxSizing: "content-box",
                                            minWidth: 44,
                                            borderTopStyle: "none",
                                            borderLeft: "1px solid rgb(238, 238, 238)",
                                            marginLeft: "-1px",
                                            display: "none"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 2,
                                                placeSelf: "center",
                                                minWidth: 34,
                                                maxWidth: 34,
                                                width: 34,
                                                height: "max-content",
                                                margin: 5
                                            }}
                                        />
                                        <a
                                            className="bubble-element Link"
                                            style={{
                                                zIndex: 3,
                                                placeSelf: "center",
                                                minWidth: 0,
                                                minHeight: 0,
                                                width: "calc(100% - 0px)",
                                                height: "calc(100% - 0px)",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="bubble-element GroupItem bubble-r-container relative group-item entry-7"
                                        style={{
                                            boxSizing: "content-box",
                                            minWidth: 44,
                                            borderTopStyle: "none",
                                            borderLeft: "1px solid rgb(238, 238, 238)",
                                            marginLeft: "-1px",
                                            display: "none"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 2,
                                                placeSelf: "center",
                                                minWidth: 34,
                                                maxWidth: 34,
                                                width: 34,
                                                height: "max-content",
                                                margin: 5
                                            }}
                                        />
                                        <a
                                            className="bubble-element Link"
                                            style={{
                                                zIndex: 3,
                                                placeSelf: "center",
                                                minWidth: 0,
                                                minHeight: 0,
                                                width: "calc(100% - 0px)",
                                                height: "calc(100% - 0px)",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="bubble-element GroupItem bubble-r-container relative group-item entry-8"
                                        style={{
                                            boxSizing: "content-box",
                                            minWidth: 44,
                                            borderTopStyle: "none",
                                            borderLeft: "1px solid rgb(238, 238, 238)",
                                            marginLeft: "-1px",
                                            display: "none"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 2,
                                                placeSelf: "center",
                                                minWidth: 34,
                                                maxWidth: 34,
                                                width: 34,
                                                height: "max-content",
                                                margin: 5
                                            }}
                                        />
                                        <a
                                            className="bubble-element Link"
                                            style={{
                                                zIndex: 3,
                                                placeSelf: "center",
                                                minWidth: 0,
                                                minHeight: 0,
                                                width: "calc(100% - 0px)",
                                                height: "calc(100% - 0px)",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="bubble-element GroupItem bubble-r-container relative group-item entry-9"
                                        style={{
                                            boxSizing: "content-box",
                                            minWidth: 44,
                                            borderTopStyle: "none",
                                            borderLeft: "1px solid rgb(238, 238, 238)",
                                            marginLeft: "-1px",
                                            display: "none"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 2,
                                                placeSelf: "center",
                                                minWidth: 34,
                                                maxWidth: 34,
                                                width: 34,
                                                height: "max-content",
                                                margin: 5
                                            }}
                                        />
                                        <a
                                            className="bubble-element Link"
                                            style={{
                                                zIndex: 3,
                                                placeSelf: "center",
                                                minWidth: 0,
                                                minHeight: 0,
                                                width: "calc(100% - 0px)",
                                                height: "calc(100% - 0px)",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="bubble-element GroupItem bubble-r-container relative group-item entry-10"
                                        style={{
                                            boxSizing: "content-box",
                                            minWidth: 44,
                                            borderTopStyle: "none",
                                            borderLeft: "1px solid rgb(238, 238, 238)",
                                            marginLeft: "-1px",
                                            display: "none"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 2,
                                                placeSelf: "center",
                                                minWidth: 34,
                                                maxWidth: 34,
                                                width: 34,
                                                height: "max-content",
                                                margin: 5
                                            }}
                                        />
                                        <a
                                            className="bubble-element Link"
                                            style={{
                                                zIndex: 3,
                                                placeSelf: "center",
                                                minWidth: 0,
                                                minHeight: 0,
                                                width: "calc(100% - 0px)",
                                                height: "calc(100% - 0px)",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="bubble-element GroupItem bubble-r-container relative group-item entry-11"
                                        style={{
                                            boxSizing: "content-box",
                                            minWidth: 44,
                                            borderTopStyle: "none",
                                            borderLeft: "1px solid rgb(238, 238, 238)",
                                            marginLeft: "-1px",
                                            display: "none"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 2,
                                                placeSelf: "center",
                                                minWidth: 34,
                                                maxWidth: 34,
                                                width: 34,
                                                height: "max-content",
                                                margin: 5
                                            }}
                                        />
                                        <a
                                            className="bubble-element Link"
                                            style={{
                                                zIndex: 3,
                                                placeSelf: "center",
                                                minWidth: 0,
                                                minHeight: 0,
                                                width: "calc(100% - 0px)",
                                                height: "calc(100% - 0px)",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="bubble-element GroupItem bubble-r-container relative group-item entry-12"
                                        style={{
                                            boxSizing: "content-box",
                                            minWidth: 44,
                                            borderTopStyle: "none",
                                            borderLeft: "1px solid rgb(238, 238, 238)",
                                            marginLeft: "-1px",
                                            display: "none"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 2,
                                                placeSelf: "center",
                                                minWidth: 34,
                                                maxWidth: 34,
                                                width: 34,
                                                height: "max-content",
                                                margin: 5
                                            }}
                                        />
                                        <a
                                            className="bubble-element Link"
                                            style={{
                                                zIndex: 3,
                                                placeSelf: "center",
                                                minWidth: 0,
                                                minHeight: 0,
                                                width: "calc(100% - 0px)",
                                                height: "calc(100% - 0px)",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="bubble-element GroupItem bubble-r-container relative group-item entry-13"
                                        style={{
                                            boxSizing: "content-box",
                                            minWidth: 44,
                                            borderTopStyle: "none",
                                            borderLeft: "1px solid rgb(238, 238, 238)",
                                            marginLeft: "-1px",
                                            display: "none"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 2,
                                                placeSelf: "center",
                                                minWidth: 34,
                                                maxWidth: 34,
                                                width: 34,
                                                height: "max-content",
                                                margin: 5
                                            }}
                                        />
                                        <a
                                            className="bubble-element Link"
                                            style={{
                                                zIndex: 3,
                                                placeSelf: "center",
                                                minWidth: 0,
                                                minHeight: 0,
                                                width: "calc(100% - 0px)",
                                                height: "calc(100% - 0px)",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="bubble-element GroupItem bubble-r-container relative group-item entry-14"
                                        style={{
                                            boxSizing: "content-box",
                                            minWidth: 44,
                                            borderTopStyle: "none",
                                            borderLeft: "1px solid rgb(238, 238, 238)",
                                            marginLeft: "-1px",
                                            display: "none"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 2,
                                                placeSelf: "center",
                                                minWidth: 34,
                                                maxWidth: 34,
                                                width: 34,
                                                height: "max-content",
                                                margin: 5
                                            }}
                                        />
                                        <a
                                            className="bubble-element Link"
                                            style={{
                                                zIndex: 3,
                                                placeSelf: "center",
                                                minWidth: 0,
                                                minHeight: 0,
                                                width: "calc(100% - 0px)",
                                                height: "calc(100% - 0px)",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="bubble-element GroupItem bubble-r-container relative group-item entry-15"
                                        style={{
                                            boxSizing: "content-box",
                                            minWidth: 44,
                                            borderTopStyle: "none",
                                            borderLeft: "1px solid rgb(238, 238, 238)",
                                            marginLeft: "-1px",
                                            display: "none"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 2,
                                                placeSelf: "center",
                                                minWidth: 34,
                                                maxWidth: 34,
                                                width: 34,
                                                height: "max-content",
                                                margin: 5
                                            }}
                                        />
                                        <a
                                            className="bubble-element Link"
                                            style={{
                                                zIndex: 3,
                                                placeSelf: "center",
                                                minWidth: 0,
                                                minHeight: 0,
                                                width: "calc(100% - 0px)",
                                                height: "calc(100% - 0px)",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="bubble-element GroupItem bubble-r-container relative group-item entry-16"
                                        style={{
                                            boxSizing: "content-box",
                                            minWidth: 44,
                                            borderTopStyle: "none",
                                            borderLeft: "1px solid rgb(238, 238, 238)",
                                            marginLeft: "-1px",
                                            display: "none"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 2,
                                                placeSelf: "center",
                                                minWidth: 34,
                                                maxWidth: 34,
                                                width: 34,
                                                height: "max-content",
                                                margin: 5
                                            }}
                                        />
                                        <a
                                            className="bubble-element Link"
                                            style={{
                                                zIndex: 3,
                                                placeSelf: "center",
                                                minWidth: 0,
                                                minHeight: 0,
                                                width: "calc(100% - 0px)",
                                                height: "calc(100% - 0px)",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="bubble-element GroupItem bubble-r-container relative group-item entry-17"
                                        style={{
                                            boxSizing: "content-box",
                                            minWidth: 44,
                                            borderTopStyle: "none",
                                            borderLeft: "1px solid rgb(238, 238, 238)",
                                            marginLeft: "-1px",
                                            display: "none"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 2,
                                                placeSelf: "center",
                                                minWidth: 34,
                                                maxWidth: 34,
                                                width: 34,
                                                height: "max-content",
                                                margin: 5
                                            }}
                                        />
                                        <a
                                            className="bubble-element Link"
                                            style={{
                                                zIndex: 3,
                                                placeSelf: "center",
                                                minWidth: 0,
                                                minHeight: 0,
                                                width: "calc(100% - 0px)",
                                                height: "calc(100% - 0px)",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="bubble-element GroupItem bubble-r-container relative group-item entry-18"
                                        style={{
                                            boxSizing: "content-box",
                                            minWidth: 44,
                                            borderTopStyle: "none",
                                            borderLeft: "1px solid rgb(238, 238, 238)",
                                            marginLeft: "-1px",
                                            display: "none"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 2,
                                                placeSelf: "center",
                                                minWidth: 34,
                                                maxWidth: 34,
                                                width: 34,
                                                height: "max-content",
                                                margin: 5
                                            }}
                                        />
                                        <a
                                            className="bubble-element Link"
                                            style={{
                                                zIndex: 3,
                                                placeSelf: "center",
                                                minWidth: 0,
                                                minHeight: 0,
                                                width: "calc(100% - 0px)",
                                                height: "calc(100% - 0px)",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="bubble-element GroupItem bubble-r-container relative group-item entry-19"
                                        style={{
                                            boxSizing: "content-box",
                                            minWidth: 44,
                                            borderTopStyle: "none",
                                            borderLeft: "1px solid rgb(238, 238, 238)",
                                            marginLeft: "-1px",
                                            display: "none"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 2,
                                                placeSelf: "center",
                                                minWidth: 34,
                                                maxWidth: 34,
                                                width: 34,
                                                height: "max-content",
                                                margin: 5
                                            }}
                                        />
                                        <a
                                            className="bubble-element Link"
                                            style={{
                                                zIndex: 3,
                                                placeSelf: "center",
                                                minWidth: 0,
                                                minHeight: 0,
                                                width: "calc(100% - 0px)",
                                                height: "calc(100% - 0px)",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="bubble-element GroupItem bubble-r-container relative group-item entry-20"
                                        style={{
                                            boxSizing: "content-box",
                                            minWidth: 44,
                                            borderTopStyle: "none",
                                            borderLeft: "1px solid rgb(238, 238, 238)",
                                            marginLeft: "-1px",
                                            display: "none"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 2,
                                                placeSelf: "center",
                                                minWidth: 34,
                                                maxWidth: 34,
                                                width: 34,
                                                height: "max-content",
                                                margin: 5
                                            }}
                                        />
                                        <a
                                            className="bubble-element Link"
                                            style={{
                                                zIndex: 3,
                                                placeSelf: "center",
                                                minWidth: 0,
                                                minHeight: 0,
                                                width: "calc(100% - 0px)",
                                                height: "calc(100% - 0px)",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="bubble-element GroupItem bubble-r-container relative group-item entry-21"
                                        style={{
                                            boxSizing: "content-box",
                                            minWidth: 44,
                                            borderTopStyle: "none",
                                            borderLeft: "1px solid rgb(238, 238, 238)",
                                            marginLeft: "-1px",
                                            display: "none"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 2,
                                                placeSelf: "center",
                                                minWidth: 34,
                                                maxWidth: 34,
                                                width: 34,
                                                height: "max-content",
                                                margin: 5
                                            }}
                                        />
                                        <a
                                            className="bubble-element Link"
                                            style={{
                                                zIndex: 3,
                                                placeSelf: "center",
                                                minWidth: 0,
                                                minHeight: 0,
                                                width: "calc(100% - 0px)",
                                                height: "calc(100% - 0px)",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="bubble-element GroupItem bubble-r-container relative group-item entry-22"
                                        style={{
                                            boxSizing: "content-box",
                                            minWidth: 44,
                                            borderTopStyle: "none",
                                            borderLeft: "1px solid rgb(238, 238, 238)",
                                            marginLeft: "-1px",
                                            display: "none"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 2,
                                                placeSelf: "center",
                                                minWidth: 34,
                                                maxWidth: 34,
                                                width: 34,
                                                height: "max-content",
                                                margin: 5
                                            }}
                                        />
                                        <a
                                            className="bubble-element Link"
                                            style={{
                                                zIndex: 3,
                                                placeSelf: "center",
                                                minWidth: 0,
                                                minHeight: 0,
                                                width: "calc(100% - 0px)",
                                                height: "calc(100% - 0px)",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="bubble-element GroupItem bubble-r-container relative group-item entry-23"
                                        style={{
                                            boxSizing: "content-box",
                                            minWidth: 44,
                                            borderTopStyle: "none",
                                            borderLeft: "1px solid rgb(238, 238, 238)",
                                            marginLeft: "-1px",
                                            display: "none"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 2,
                                                placeSelf: "center",
                                                minWidth: 34,
                                                maxWidth: 34,
                                                width: 34,
                                                height: "max-content",
                                                margin: 5
                                            }}
                                        />
                                        <a
                                            className="bubble-element Link"
                                            style={{
                                                zIndex: 3,
                                                placeSelf: "center",
                                                minWidth: 0,
                                                minHeight: 0,
                                                width: "calc(100% - 0px)",
                                                height: "calc(100% - 0px)",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="bubble-element GroupItem bubble-r-container relative group-item entry-24"
                                        style={{
                                            boxSizing: "content-box",
                                            minWidth: 44,
                                            borderTopStyle: "none",
                                            borderLeft: "1px solid rgb(238, 238, 238)",
                                            marginLeft: "-1px",
                                            display: "none"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 2,
                                                placeSelf: "center",
                                                minWidth: 34,
                                                maxWidth: 34,
                                                width: 34,
                                                height: "max-content",
                                                margin: 5
                                            }}
                                        />
                                        <a
                                            className="bubble-element Link"
                                            style={{
                                                zIndex: 3,
                                                placeSelf: "center",
                                                minWidth: 0,
                                                minHeight: 0,
                                                width: "calc(100% - 0px)",
                                                height: "calc(100% - 0px)",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="bubble-element GroupItem bubble-r-container relative group-item entry-25"
                                        style={{
                                            boxSizing: "content-box",
                                            minWidth: 44,
                                            borderTopStyle: "none",
                                            borderLeft: "1px solid rgb(238, 238, 238)",
                                            marginLeft: "-1px",
                                            display: "none"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 2,
                                                placeSelf: "center",
                                                minWidth: 34,
                                                maxWidth: 34,
                                                width: 34,
                                                height: "max-content",
                                                margin: 5
                                            }}
                                        />
                                        <a
                                            className="bubble-element Link"
                                            style={{
                                                zIndex: 3,
                                                placeSelf: "center",
                                                minWidth: 0,
                                                minHeight: 0,
                                                width: "calc(100% - 0px)",
                                                height: "calc(100% - 0px)",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element Group bubble-r-container flex column"
                                style={{
                                    visibility: "hidden",
                                    zIndex: 9,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    maxWidth: 600,
                                    order: 4,
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
                                    className="bubble-element Group bubble-r-container flex row"
                                    style={{
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 3,
                                        minHeight: 0,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "calc(100% - 0px)",
                                        margin: 0,
                                        justifyContent: "flex-start"
                                    }}
                                >
                                    <div
                                        className="bubble-element Text"
                                        style={{
                                            zIndex: 22,
                                            alignSelf: "flex-start",
                                            minWidth: 280,
                                            order: 1,
                                            minHeight: 0,
                                            width: 280,
                                            flexGrow: 1,
                                            height: "max-content",
                                            margin: "0px 0px 20px"
                                        }}
                                    />
                                    <div
                                        className="bubble-element Text"
                                        style={{
                                            zIndex: 22,
                                            alignSelf: "flex-start",
                                            minWidth: 280,
                                            order: 2,
                                            minHeight: 0,
                                            width: 280,
                                            flexGrow: 1,
                                            height: "max-content",
                                            margin: "0px 0px 20px"
                                        }}
                                    />
                                </div>
                                <div
                                    className="bubble-element Group bubble-r-container flex row"
                                    style={{
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 4,
                                        minHeight: 0,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "calc(100% - 0px)",
                                        margin: 0,
                                        justifyContent: "flex-start"
                                    }}
                                >
                                    <div
                                        className="bubble-element Text"
                                        style={{
                                            zIndex: 22,
                                            alignSelf: "flex-start",
                                            minWidth: 280,
                                            order: 1,
                                            minHeight: 0,
                                            width: 280,
                                            flexGrow: 1,
                                            height: "max-content",
                                            margin: "0px 0px 20px"
                                        }}
                                    />
                                    <div
                                        className="bubble-element Text"
                                        style={{
                                            zIndex: 23,
                                            alignSelf: "flex-start",
                                            minWidth: 280,
                                            order: 2,
                                            minHeight: 0,
                                            width: 280,
                                            flexGrow: 1,
                                            height: "max-content",
                                            margin: "0px 0px 20px"
                                        }}
                                    />
                                </div>
                                <div
                                    className="bubble-element Group bubble-r-container flex row"
                                    style={{
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 5,
                                        minHeight: 34,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "calc(100% - 0px)",
                                        margin: 0,
                                        justifyContent: "flex-start"
                                    }}
                                >
                                    <div
                                        className="bubble-element Text"
                                        style={{
                                            zIndex: 22,
                                            alignSelf: "flex-start",
                                            minWidth: 280,
                                            order: 1,
                                            minHeight: 0,
                                            width: 280,
                                            flexGrow: 1,
                                            height: "max-content",
                                            margin: "0px 0px 20px"
                                        }}
                                    />
                                    <div
                                        className="bubble-element Text"
                                        style={{
                                            zIndex: 23,
                                            alignSelf: "flex-start",
                                            minWidth: 280,
                                            order: 2,
                                            minHeight: 0,
                                            width: 280,
                                            flexGrow: 1,
                                            height: "max-content",
                                            margin: "0px 0px 20px"
                                        }}
                                    />
                                </div>
                                <div
                                    className="bubble-element Group bubble-r-container flex row"
                                    style={{
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 6,
                                        minHeight: 0,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "calc(100% - 0px)",
                                        margin: 0,
                                        justifyContent: "flex-start"
                                    }}
                                >
                                    <div
                                        className="bubble-element Text"
                                        style={{
                                            zIndex: 22,
                                            alignSelf: "flex-start",
                                            minWidth: 280,
                                            order: 1,
                                            minHeight: 0,
                                            width: 280,
                                            flexGrow: 1,
                                            height: "max-content",
                                            margin: 0
                                        }}
                                    />
                                    <div
                                        className="bubble-element Text"
                                        style={{
                                            zIndex: 23,
                                            alignSelf: "flex-start",
                                            minWidth: 280,
                                            order: 2,
                                            minHeight: 0,
                                            width: 280,
                                            flexGrow: 1,
                                            height: "max-content",
                                            margin: 0
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                className="bubble-element Group bubble-r-container flex column"
                                style={{
                                    visibility: "hidden",
                                    zIndex: 12,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 5,
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
                                    className="bubble-element Group bubble-r-container flex row"
                                    style={{
                                        visibility: "hidden",
                                        zIndex: 25,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 3,
                                        minHeight: 0,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "calc(100% - 0px)",
                                        margin: 0,
                                        justifyContent: "space-between",
                                        gap: "0px 20px"
                                    }}
                                >
                                    <select
                                        className="bubble-element Dropdown"
                                        style={{
                                            zIndex: 14,
                                            alignSelf: "center",
                                            minWidth: 200,
                                            maxWidth: 200,
                                            order: 1,
                                            minHeight: 25,
                                            maxHeight: 25,
                                            width: 200,
                                            flexGrow: 1,
                                            height: 25,
                                            margin: "0px 0px 20px"
                                        }}
                                    />
                                    <div
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 25,
                                            alignSelf: "center",
                                            minWidth: 0,
                                            order: 2,
                                            minHeight: 24,
                                            width: "max-content",
                                            flexGrow: 0,
                                            height: "max-content",
                                            margin: "0px 0px 20px",
                                            justifyContent: "space-between",
                                            gap: "0px 10px"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Text"
                                            style={{
                                                zIndex: 24,
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
                                                zIndex: 18,
                                                alignSelf: "center",
                                                minWidth: 0,
                                                order: 2,
                                                minHeight: 0,
                                                width: "max-content",
                                                flexGrow: 0,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                </div>
                                <div
                                    className="bubble-element chartjs-LineBarChart"
                                    style={{
                                        visibility: "hidden",
                                        zIndex: 6,
                                        alignSelf: "flex-start",
                                        minWidth: 120,
                                        order: 4,
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "calc(100% - 0px)",
                                        margin: 0,
                                        height: 250
                                    }}
                                />
                                <div
                                    className="bubble-element chartjs-LineBarChart"
                                    style={{
                                        visibility: "hidden",
                                        zIndex: 15,
                                        alignSelf: "flex-start",
                                        minWidth: 120,
                                        order: 5,
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "calc(100% - 0px)",
                                        margin: 0,
                                        display: "none",
                                        height: 250
                                    }}
                                />
                                <div
                                    className="bubble-element chartjs-LineBarChart"
                                    style={{
                                        visibility: "hidden",
                                        zIndex: 16,
                                        alignSelf: "flex-start",
                                        minWidth: 120,
                                        order: 6,
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "calc(100% - 0px)",
                                        margin: 0,
                                        display: "none",
                                        height: 250
                                    }}
                                />
                                <div
                                    className="bubble-element chartjs-LineBarChart"
                                    style={{
                                        visibility: "hidden",
                                        zIndex: 17,
                                        alignSelf: "flex-start",
                                        minWidth: 120,
                                        order: 7,
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "calc(100% - 0px)",
                                        margin: 0,
                                        display: "none",
                                        height: 250
                                    }}
                                />
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        visibility: "hidden",
                                        zIndex: 13,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 13,
                                        minHeight: 0,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "auto",
                                        margin: 0,
                                        display: "none"
                                    }}
                                />
                            </div>
                            <div
                                className="bubble-element Group bubble-r-container flex column"
                                id="scrolling"
                                style={{
                                    zIndex: 13,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 6,
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
                                    className="bubble-element Group bubble-r-container flex column"
                                    style={{
                                        visibility: "hidden",
                                        zIndex: 11,
                                        alignSelf: "flex-start",
                                        minWidth: 950,
                                        order: 1,
                                        minHeight: 100,
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
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            visibility: "hidden",
                                            zIndex: 8,
                                            alignSelf: "flex-start",
                                            minWidth: 0,
                                            order: 1,
                                            minHeight: 60,
                                            maxHeight: 60,
                                            height: 60,
                                            flexGrow: 1,
                                            width: "calc(100% - 0px)",
                                            margin: 0,
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Text"
                                            style={{
                                                zIndex: 2,
                                                alignSelf: "center",
                                                minWidth: 0,
                                                order: 1,
                                                minHeight: 0,
                                                width: 0,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                        <div
                                            className="bubble-element Text"
                                            style={{
                                                zIndex: 3,
                                                alignSelf: "center",
                                                minWidth: 0,
                                                order: 2,
                                                minHeight: 0,
                                                width: 0,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                        <div
                                            className="bubble-element Text"
                                            style={{
                                                zIndex: 4,
                                                alignSelf: "center",
                                                minWidth: 0,
                                                order: 3,
                                                minHeight: 0,
                                                width: 0,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                        <div
                                            className="bubble-element Text"
                                            style={{
                                                zIndex: 5,
                                                alignSelf: "center",
                                                minWidth: 0,
                                                order: 4,
                                                minHeight: 0,
                                                width: 0,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                        <div
                                            className="bubble-element Text"
                                            style={{
                                                zIndex: 6,
                                                alignSelf: "center",
                                                minWidth: 0,
                                                order: 5,
                                                minHeight: 0,
                                                width: 0,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                        <div
                                            className="bubble-element Text"
                                            style={{
                                                zIndex: 7,
                                                alignSelf: "center",
                                                minWidth: 0,
                                                order: 6,
                                                minHeight: 0,
                                                width: 0,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="bubble-element RepeatingGroup"
                                        style={{
                                            visibility: "hidden",
                                            zIndex: 12,
                                            alignSelf: "flex-start",
                                            minWidth: 0,
                                            order: 6,
                                            minHeight: 100,
                                            height: "max-content",
                                            flexGrow: 0,
                                            flexShrink: 0,
                                            width: "calc(100% - 0px)",
                                            margin: 0
                                        }}
                                    />
                                    <div
                                        className="bubble-element Text"
                                        style={{
                                            visibility: "hidden",
                                            zIndex: 9,
                                            alignSelf: "flex-start",
                                            minWidth: 0,
                                            order: 7,
                                            minHeight: 0,
                                            height: "max-content",
                                            flexGrow: 0,
                                            flexShrink: 0,
                                            width: "auto",
                                            margin: 0,
                                            display: "none"
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="bubble-element Group bubble-r-container flex row"
                    style={{
                        visibility: "hidden",
                        zIndex: 7,
                        alignSelf: "center",
                        minWidth: 0,
                        maxWidth: 1200,
                        order: 3,
                        minHeight: 0,
                        height: "max-content",
                        flexGrow: 0,
                        flexShrink: 0,
                        width: "calc(100% - 0px)",
                        margin: "155px 0px 176px",
                        display: "none",
                        justifyContent: "space-between"
                    }}
                >
                    <div
                        className="bubble-element Group bubble-r-container flex column"
                        style={{
                            zIndex: 5,
                            alignSelf: "flex-start",
                            minWidth: 300,
                            order: 1,
                            minHeight: 0,
                            width: "max-content",
                            flexGrow: 0,
                            height: "max-content",
                            margin: "0px 10px",
                            justifyContent: "flex-start"
                        }}
                    >
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                zIndex: 4,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 1,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "auto",
                                margin: "0px 0px 20px",
                                justifyContent: "flex-start"
                            }}
                        >
                            <div
                                className="bubble-element HTML"
                                style={{
                                    zIndex: 2,
                                    alignSelf: "flex-start",
                                    minWidth: 20,
                                    maxWidth: 20,
                                    order: 1,
                                    minHeight: 20,
                                    maxHeight: 20,
                                    width: 20,
                                    flexGrow: 1,
                                    height: 20,
                                    margin: "0px 5px 0px 0px"
                                }}
                            >
                                <svg
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6.30055 10.4167L8.56694 12.6831C8.81102 12.9272 8.81102 13.3229 8.56694 13.567C8.32286 13.8111 7.92714 13.8111 7.68306 13.567L4.34972 10.2336C4.10565 9.98957 4.10565 9.59384 4.34972 9.34977L7.68306 6.01643C7.92714 5.77235 8.32286 5.77235 8.56694 6.01643C8.81102 6.26051 8.81102 6.65624 8.56694 6.90032L6.30055 9.16671L14.375 9.16671C14.7202 9.16671 15 9.44653 15 9.79171C15 10.1369 14.7202 10.4167 14.375 10.4167L6.30055 10.4167Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                            <div
                                className="bubble-element Text"
                                style={{
                                    zIndex: 3,
                                    alignSelf: "center",
                                    minWidth: 0,
                                    order: 2,
                                    minHeight: 0,
                                    width: "max-content",
                                    flexGrow: 0,
                                    height: "max-content",
                                    margin: 0
                                }}
                            />
                        </div>
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 4,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 2,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "auto",
                                margin: "0px 0px 35px"
                            }}
                        />
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                zIndex: 26,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 3,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 42px",
                                justifyContent: "flex-start"
                            }}
                        >
                            <div
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    zIndex: 27,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 3,
                                    minHeight: 0,
                                    width: "max-content",
                                    flexGrow: 0,
                                    height: "max-content",
                                    margin: 0,
                                    justifyContent: "flex-start"
                                }}
                            />
                            <div
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    visibility: "hidden",
                                    zIndex: 25,
                                    alignSelf: "flex-start",
                                    minWidth: 60,
                                    maxWidth: 60,
                                    order: 4,
                                    minHeight: 62,
                                    width: 60,
                                    flexGrow: 1,
                                    height: "max-content",
                                    margin: "0px 0px 0px 10px",
                                    display: "none",
                                    justifyContent: "center"
                                }}
                            >
                                <div
                                    className="bubble-element HTML"
                                    style={{
                                        zIndex: 18,
                                        alignSelf: "center",
                                        minWidth: 20,
                                        maxWidth: 20,
                                        order: 4,
                                        minHeight: 20,
                                        maxHeight: 20,
                                        width: 20,
                                        flexGrow: 1,
                                        height: 20,
                                        margin: 0
                                    }}
                                >
                                    <svg
                                        width={20}
                                        height={20}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_267_2288)">
                                            <path
                                                d="M12 18C12 16.8954 11.1046 16 10 16C8.89543 16 8 16.8954 8 18C8 19.1046 8.89543 20 10 20C11.1046 20 12 19.1046 12 18Z"
                                                fill="black"
                                            />
                                            <path
                                                d="M12 10C12 8.89547 11.1046 8.00004 10 8.00004C8.89543 8.00004 8 8.89547 8 10C8 11.1046 8.89543 12.0001 10 12.0001C11.1046 12.0001 12 11.1046 12 10Z"
                                                fill="black"
                                            />
                                            <path
                                                d="M12 2.00001C12 0.895435 11.1046 0 10 0C8.89543 0 8 0.895435 8 2.00001C8 3.10459 8.89543 4.00003 10 4.00003C11.1046 4.00003 12 3.10459 12 2.00001Z"
                                                fill="black"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_267_2288">
                                                <rect width={20} height={20} fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                visibility: "hidden",
                                zIndex: 27,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 4,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: 0,
                                justifyContent: "flex-start"
                            }}
                        >
                            <div
                                className="bubble-element Group bubble-r-container flex column"
                                style={{
                                    zIndex: 29,
                                    alignSelf: "center",
                                    minWidth: 555,
                                    maxWidth: 555,
                                    order: 2,
                                    minHeight: 200,
                                    width: 555,
                                    flexGrow: 1,
                                    height: "max-content",
                                    margin: 0,
                                    justifyContent: "flex-start"
                                }}
                            >
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 28,
                                        alignSelf: "flex-start",
                                        minWidth: 555,
                                        maxWidth: 555,
                                        order: 1,
                                        minHeight: 35,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: 555,
                                        margin: "0px 0px 5px"
                                    }}
                                />
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 19,
                                        alignSelf: "flex-start",
                                        minWidth: 555,
                                        maxWidth: 555,
                                        order: 2,
                                        minHeight: 44,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: 555,
                                        margin: "0px 0px 25px"
                                    }}
                                />
                                <textarea
                                    className="bubble-element MultiLineInput"
                                    style={{
                                        zIndex: 30,
                                        alignSelf: "flex-start",
                                        minWidth: 555,
                                        maxWidth: 555,
                                        order: 4,
                                        minHeight: 200,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: 555,
                                        margin: 0
                                    }}
                                    defaultValue={""}
                                />
                            </div>
                        </div>
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                visibility: "hidden",
                                zIndex: 28,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 5,
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
                                className="bubble-element Image"
                                style={{
                                    zIndex: 2,
                                    alignSelf: "flex-start",
                                    minWidth: 257,
                                    maxWidth: 257,
                                    order: 1,
                                    width: 257,
                                    flexGrow: 1,
                                    height: "max-content",
                                    margin: "0px 20px 20px 0px"
                                }}
                            />
                            <div
                                className="bubble-element Group bubble-r-container flex column"
                                style={{
                                    zIndex: 29,
                                    alignSelf: "center",
                                    minWidth: 0,
                                    order: 3,
                                    minHeight: 53,
                                    width: "max-content",
                                    flexGrow: 0,
                                    height: "max-content",
                                    margin: 0,
                                    justifyContent: "flex-start"
                                }}
                            >
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 28,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 1,
                                        minHeight: 0,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "auto",
                                        margin: "0px 0px 25px"
                                    }}
                                />
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 19,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        maxWidth: 269,
                                        order: 2,
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
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                visibility: "hidden",
                                zIndex: 29,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 6,
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
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    zIndex: 2,
                                    alignSelf: "flex-start",
                                    minWidth: 180,
                                    maxWidth: 180,
                                    order: 1,
                                    minHeight: 0,
                                    width: 180,
                                    flexGrow: 1,
                                    height: "max-content",
                                    margin: "0px 20px 0px 0px",
                                    justifyContent: "flex-start"
                                }}
                            >
                                <div
                                    className="bubble-element Image"
                                    style={{
                                        zIndex: 2,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        maxWidth: 180,
                                        order: 1,
                                        width: 0,
                                        flexGrow: 1,
                                        height: "max-content",
                                        margin: 15
                                    }}
                                />
                            </div>
                            <div
                                className="bubble-element Group bubble-r-container flex column"
                                style={{
                                    zIndex: 29,
                                    alignSelf: "center",
                                    minWidth: 0,
                                    order: 2,
                                    minHeight: 53,
                                    width: "max-content",
                                    flexGrow: 0,
                                    height: "max-content",
                                    margin: 0,
                                    justifyContent: "flex-start"
                                }}
                            >
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 28,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 1,
                                        minHeight: 0,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "auto",
                                        margin: "0px 0px 25px"
                                    }}
                                />
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 19,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        maxWidth: 299,
                                        order: 2,
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
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                zIndex: 30,
                                alignSelf: "flex-start",
                                minWidth: 150,
                                maxWidth: 150,
                                order: 11,
                                minHeight: 54,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: 150,
                                margin: "20px 0px",
                                justifyContent: "center"
                            }}
                        >
                            <div
                                className="bubble-element HTML"
                                style={{
                                    zIndex: 2,
                                    alignSelf: "center",
                                    minWidth: 24,
                                    maxWidth: 24,
                                    order: 2,
                                    minHeight: 24,
                                    maxHeight: 24,
                                    width: 24,
                                    flexGrow: 1,
                                    height: 24,
                                    margin: "0px 10px 0px 0px"
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
                                        d="M14.8108 13.2973C14.8108 13.1253 14.8792 12.9603 15.0008 12.8386C15.1224 12.717 15.2874 12.6486 15.4595 12.6486H17.1892C17.3612 12.6486 17.5262 12.717 17.6479 12.8386C17.7695 12.9603 17.8378 13.1253 17.8378 13.2973C17.8378 13.4693 17.7695 13.6343 17.6479 13.756C17.5262 13.8776 17.3612 13.9459 17.1892 13.9459H15.4595C15.2874 13.9459 15.1224 13.8776 15.0008 13.756C14.8792 13.6343 14.8108 13.4693 14.8108 13.2973ZM4 5.72973H4.01211C4.06529 5.25404 4.29193 4.81465 4.64869 4.49554C5.00544 4.17644 5.4673 4.00001 5.94595 4H15.8919C16.1474 4 16.4005 4.05033 16.6366 4.14813C16.8727 4.24592 17.0872 4.38926 17.2679 4.56995C17.4486 4.75065 17.5919 4.96517 17.6897 5.20126C17.7875 5.43736 17.8378 5.6904 17.8378 5.94595V6.66984C18.4535 6.81601 19.0018 7.16557 19.3942 7.66198C19.7865 8.1584 20 8.77265 20 9.40541V16.7568C20 17.5022 19.7039 18.2172 19.1767 18.7443C18.6496 19.2714 17.9347 19.5676 17.1892 19.5676H6.81081C6.06534 19.5676 5.3504 19.2714 4.82327 18.7443C4.29614 18.2172 4 17.5022 4 16.7568V5.72973ZM17.1892 7.89189H5.2973V16.7568C5.2973 17.5922 5.97535 18.2703 6.81081 18.2703H17.1892C17.5906 18.2703 17.9756 18.1108 18.2594 17.827C18.5432 17.5431 18.7027 17.1582 18.7027 16.7568V9.40541C18.7027 9.004 18.5432 8.61903 18.2594 8.33519C17.9756 8.05135 17.5906 7.89189 17.1892 7.89189V7.89189ZM16.5405 6.59459V5.94595C16.5405 5.77391 16.4722 5.60893 16.3506 5.48728C16.2289 5.36564 16.0639 5.2973 15.8919 5.2973H5.94595C5.77391 5.2973 5.60893 5.36564 5.48728 5.48728C5.36564 5.60893 5.2973 5.77391 5.2973 5.94595C5.2973 6.11798 5.36564 6.28296 5.48728 6.40461C5.60893 6.52626 5.77391 6.59459 5.94595 6.59459H16.5405Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <div
                                className="bubble-element Text"
                                style={{
                                    zIndex: 17,
                                    alignSelf: "center",
                                    minWidth: 0,
                                    order: 3,
                                    minHeight: 0,
                                    width: "max-content",
                                    flexGrow: 0,
                                    height: "max-content",
                                    margin: 0
                                }}
                            />
                        </div>
                    </div>
                    <div
                        className="bubble-element Group bubble-r-container flex column"
                        style={{
                            zIndex: 8,
                            alignSelf: "flex-start",
                            minWidth: 300,
                            maxWidth: 380,
                            order: 2,
                            minHeight: 0,
                            width: 300,
                            flexGrow: 1,
                            height: "max-content",
                            margin: "0px 10px",
                            justifyContent: "flex-start"
                        }}
                    >
                        <div
                            className="bubble-element Image"
                            style={{
                                zIndex: 7,
                                alignSelf: "center",
                                minWidth: 300,
                                maxWidth: 350,
                                order: 1,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: 0
                            }}
                        />
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 2,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 2,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "auto",
                                margin: "15px 0px"
                            }}
                        />
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 3,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 3,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "auto",
                                margin: "0px 0px 31px"
                            }}
                        />
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                zIndex: 4,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 5,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "auto",
                                margin: "0px 0px 31px",
                                justifyContent: "flex-start"
                            }}
                        >
                            <div
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    zIndex: 20,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 1,
                                    minHeight: 17,
                                    width: "max-content",
                                    flexGrow: 0,
                                    height: "max-content",
                                    margin: "0px 10px 0px 0px",
                                    justifyContent: "flex-start"
                                }}
                            >
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 13,
                                        alignSelf: "flex-start",
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
                                        zIndex: 16,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 17,
                                        width: "max-content",
                                        flexGrow: 0,
                                        height: "max-content",
                                        margin: 0
                                    }}
                                />
                            </div>
                            <div
                                className="bubble-element Image"
                                style={{
                                    zIndex: 17,
                                    alignSelf: "flex-start",
                                    minWidth: 4,
                                    maxWidth: 4,
                                    order: 4,
                                    minHeight: 4,
                                    maxHeight: 4,
                                    width: 4,
                                    flexGrow: 1,
                                    height: 4,
                                    margin: "5px 10px 0px 0px"
                                }}
                            />
                            <div
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    zIndex: 21,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 5,
                                    minHeight: 17,
                                    width: "max-content",
                                    flexGrow: 0,
                                    height: "max-content",
                                    margin: 0,
                                    justifyContent: "flex-start"
                                }}
                            >
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 14,
                                        alignSelf: "flex-start",
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
                                        zIndex: 16,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 17,
                                        width: "max-content",
                                        flexGrow: 0,
                                        height: "max-content",
                                        margin: 0
                                    }}
                                />
                            </div>
                        </div>
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 5,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 6,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "auto",
                                margin: "0px 0px 15px"
                            }}
                        />
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                zIndex: 6,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 8,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "auto",
                                margin: "0px 0px 25px",
                                justifyContent: "flex-start"
                            }}
                        >
                            <div
                                className="bubble-element Image"
                                style={{
                                    zIndex: 18,
                                    alignSelf: "flex-start",
                                    minWidth: 32,
                                    maxWidth: 32,
                                    order: 1,
                                    minHeight: 32,
                                    maxHeight: 32,
                                    width: 32,
                                    flexGrow: 1,
                                    height: 32,
                                    margin: "0px 10px 0px 0px"
                                }}
                            />
                            <div
                                className="bubble-element Text"
                                style={{
                                    zIndex: 19,
                                    alignSelf: "center",
                                    minWidth: 0,
                                    order: 2,
                                    minHeight: 0,
                                    width: "max-content",
                                    flexGrow: 0,
                                    height: "max-content",
                                    margin: 0
                                }}
                            />
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

export default ProductPage;