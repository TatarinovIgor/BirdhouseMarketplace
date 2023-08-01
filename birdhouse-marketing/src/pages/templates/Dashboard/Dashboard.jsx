import React, { useEffect, useState } from 'react';
import "./style.css";

const Dashboard = () => {
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
                    'url("https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1648042133128x973166173247376600%2FGroup%25201000000957%2520%25281%2529.png?w=1536&h=&auto=compress&dpr=2&fit=max") center top / cover repeat-y rgba(255, 255, 255, 0)'
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
                className="bubble-element Group bubble-r-container flex row"
                style={{
                    zIndex: 2,
                    alignSelf: "center",
                    minWidth: 320,
                    maxWidth: 1200,
                    order: 4,
                    minHeight: 0,
                    height: "max-content",
                    flexGrow: 0,
                    flexShrink: 0,
                    width: "calc(100% - 0px)",
                    margin: "100px 0px 0px",
                    justifyContent: "space-between",
                    overflow: "visible",
                    borderRadius: 0,
                    opacity: 1
                }}
            >
                {/* Left Panel */}
                <div
                    className="bubble-element Group bubble-r-container flex column"
                    style={{
                        zIndex: 7,
                        alignSelf: "flex-start",
                        minWidth: 0,
                        maxWidth: 230,
                        order: 2,
                        minHeight: 400,
                        width: 0,
                        flexGrow: 1,
                        height: "max-content",
                        margin: 0,
                        justifyContent: "flex-start",
                        overflow: "visible",
                        borderRadius: 0,
                        opacity: 1
                    }}
                    id="position-sticky"
                >
                    <div
                        className="bubble-element Group bubble-r-container flex row clickable-element"
                        style={{
                            zIndex: 4,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            order: 1,
                            minHeight: 60,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: "0px 0px 10px",
                            justifyContent: "flex-start",
                            overflow: "visible",
                            backgroundColor: "rgb(255, 255, 255)",
                            borderStyle: "solid",
                            borderWidth: 1,
                            borderColor: "rgb(238, 238, 238)",
                            borderRadius: 0,
                            opacity: 1,
                            cursor: "pointer"
                        }}
                    >
                        <div
                            className="bubble-element Group bubble-r-container fixed"
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
                                margin: "0px 0px 0px 20px",
                                overflow: "visible",
                                borderRadius: 0,
                                padding: 0,
                                opacity: 1,
                                backgroundColor: "rgba(255, 255, 255, 0)",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundImage:
                                    'url("https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1657003567373x578777759303418900%2Fweb.png?w=32&h=32&auto=compress&fit=crop&dpr=2")'
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
                                width: "max-content",
                                flexGrow: 0,
                                height: "max-content",
                                margin: "0px 0px 0px 10px",
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
                                opacity: 1
                            }}
                            onClick="SetSection1()"
                        >
                            Created orders
                        </div>
                    </div>
                    <div
                        className="bubble-element Group bubble-r-container flex row clickable-element"
                        style={{
                            zIndex: 6,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            order: 2,
                            minHeight: 60,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: "0px 0px 10px",
                            justifyContent: "flex-start",
                            overflow: "visible",
                            borderRadius: 0,
                            opacity: 1,
                            cursor: "pointer"
                        }}
                    >
                        <div
                            className="bubble-element Group bubble-r-container fixed"
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
                                margin: "0px 0px 0px 20px",
                                overflow: "visible",
                                borderRadius: 0,
                                padding: 0,
                                opacity: 1,
                                backgroundColor: "rgba(255, 255, 255, 0)",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundImage:
                                    'url("https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1657003561152x702908939978423800%2Fcollection.png?w=32&h=32&auto=compress&fit=crop&dpr=2")'
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
                                width: "max-content",
                                flexGrow: 0,
                                height: "max-content",
                                margin: "0px 0px 0px 10px",
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
                                opacity: 1
                            }}
                            onClick="SetSection2()"
                        >
                            Accepted orders
                        </div>
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                visibility: "hidden",
                                zIndex: 26,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 5,
                                minHeight: 0,
                                width: 0,
                                flexGrow: 1,
                                height: "max-content",
                                margin: "0px 0px 10px",
                                justifyContent: "flex-start",
                                overflow: "visible"
                            }}
                        >
                            <div
                                className="bubble-element progressbar-ProgressBar"
                                style={{
                                    zIndex: 4,
                                    alignSelf: "flex-start",
                                    minWidth: 300,
                                    maxWidth: 300,
                                    order: 1,
                                    minHeight: 25,
                                    maxHeight: 25,
                                    width: 300,
                                    flexGrow: 1,
                                    height: 25,
                                    margin: 0
                                }}
                            >
                                <div
                                    className="inner-progressbar"
                                    style={{
                                        backgroundColor: "rgb(127, 149, 235)",
                                        lineHeight: 25,
                                        transition: "width 0.3s ease 0s",
                                        width: "0%"
                                    }}
                                >
                                    <div
                                        className="progressbar-label"
                                        style={{
                                            clipPath: "inset(0px)",
                                            padding: "inherit",
                                            transition: "width 0.3s ease 0s, clip-path 0.3s ease 0s",
                                            width: 300
                                        }}
                                    >
                                        0%
                                    </div>
                                    <div
                                        className="progressbar-label-overlay"
                                        style={{
                                            clipPath: "inset(0px 300px 0px 0px)",
                                            padding: "inherit",
                                            transition: "width 0.3s ease 0s, clip-path 0.3s ease 0s",
                                            width: 300
                                        }}
                                    >
                                        0%
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element Text"
                                style={{
                                    zIndex: 5,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 2,
                                    minHeight: 0,
                                    width: 0,
                                    flexGrow: 1,
                                    height: "max-content",
                                    margin: "0px 0px 0px 10px",
                                    whiteSpace: "pre-wrap"
                                }}
                            />
                        </div>
                    </div>
                    <div
                        className="bubble-element Group bubble-r-container flex row clickable-element"
                        style={{
                            zIndex: 8,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            order: 3,
                            minHeight: 60,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: "0px 0px 10px",
                            justifyContent: "flex-start",
                            overflow: "visible",
                            borderRadius: 0,
                            opacity: 1,
                            cursor: "pointer"
                        }}
                    >
                        <div
                            className="bubble-element Group bubble-r-container fixed"
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
                                margin: "0px 0px 0px 20px",
                                overflow: "visible",
                                borderRadius: 0,
                                padding: 0,
                                opacity: 1,
                                backgroundColor: "rgba(255, 255, 255, 0)",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundImage:
                                    'url("https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1657779343897x414356299746209150%2Fcheckmark-png-25959.png?w=32&h=32&auto=compress&fit=crop&dpr=2")'
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
                                width: "max-content",
                                flexGrow: 0,
                                height: "max-content",
                                margin: "0px 0px 0px 10px",
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
                                opacity: 1
                            }}
                            onClick="SetSection3()"
                        >
                            Assigned orders
                        </div>
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                visibility: "hidden",
                                zIndex: 26,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 5,
                                minHeight: 0,
                                width: 0,
                                flexGrow: 1,
                                height: "max-content",
                                margin: "0px 0px 10px",
                                justifyContent: "flex-start",
                                overflow: "visible"
                            }}
                        >
                            <div
                                className="bubble-element progressbar-ProgressBar"
                                style={{
                                    zIndex: 4,
                                    alignSelf: "flex-start",
                                    minWidth: 300,
                                    maxWidth: 300,
                                    order: 1,
                                    minHeight: 25,
                                    maxHeight: 25,
                                    width: 300,
                                    flexGrow: 1,
                                    height: 25,
                                    margin: 0
                                }}
                            >
                                <div
                                    className="inner-progressbar"
                                    style={{
                                        backgroundColor: "rgb(127, 149, 235)",
                                        lineHeight: 25,
                                        transition: "width 0.3s ease 0s",
                                        width: "0%"
                                    }}
                                >
                                    <div
                                        className="progressbar-label"
                                        style={{
                                            clipPath: "inset(0px)",
                                            padding: "inherit",
                                            transition: "width 0.3s ease 0s, clip-path 0.3s ease 0s",
                                            width: 300
                                        }}
                                    >
                                        0%
                                    </div>
                                    <div
                                        className="progressbar-label-overlay"
                                        style={{
                                            clipPath: "inset(0px 300px 0px 0px)",
                                            padding: "inherit",
                                            transition: "width 0.3s ease 0s, clip-path 0.3s ease 0s",
                                            width: 300
                                        }}
                                    >
                                        0%
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element Text"
                                style={{
                                    zIndex: 5,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 2,
                                    minHeight: 0,
                                    width: 0,
                                    flexGrow: 1,
                                    height: "max-content",
                                    margin: "0px 0px 0px 10px",
                                    whiteSpace: "pre-wrap"
                                }}
                            />
                        </div>
                    </div>
                    <div
                        className="bubble-element Group bubble-r-container flex row clickable-element"
                        style={{
                            zIndex: 5,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            order: 4,
                            minHeight: 60,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: "0px 0px 10px",
                            justifyContent: "flex-start",
                            overflow: "visible",
                            borderRadius: 20,
                            opacity: 1,
                            cursor: "pointer",
                            transition: "background 200ms linear 0s"
                        }}
                    >
                        <div
                            className="bubble-element Group bubble-r-container fixed"
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
                                margin: "0px 0px 0px 20px",
                                overflow: "visible",
                                borderRadius: 0,
                                padding: 0,
                                opacity: 1,
                                backgroundColor: "rgba(255, 255, 255, 0)",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundImage:
                                    'url("https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1646656909311x277336483683550800/edit.svg")'
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
                                width: "max-content",
                                flexGrow: 0,
                                height: "max-content",
                                margin: "0px 0px 0px 10px",
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
                                opacity: 1
                            }}
                            onClick="SetSection4()"
                        >
                            Create order
                        </div>
                    </div>
                    <div
                        className="bubble-element Group bubble-r-container flex row clickable-element"
                        style={{
                            zIndex: 5,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            order: 5,
                            minHeight: 60,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: "0px 0px 10px",
                            justifyContent: "flex-start",
                            overflow: "visible",
                            borderRadius: 20,
                            opacity: 1,
                            cursor: "pointer",
                            transition: "background 200ms linear 0s"
                        }}
                    >
                        <div
                            className="bubble-element Group bubble-r-container fixed"
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
                                margin: "0px 0px 0px 20px",
                                overflow: "visible",
                                borderRadius: 0,
                                padding: 0,
                                opacity: 1,
                                backgroundColor: "rgba(255, 255, 255, 0)",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundImage:
                                    'url("https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1646656633061x297849365330265150/user.svg")'
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
                                width: "max-content",
                                flexGrow: 0,
                                height: "max-content",
                                margin: "0px 0px 0px 10px",
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
                                opacity: 1
                            }}
                            onClick="SetSection5()"
                        >
                            Profile
                        </div>
                    </div>
                    <div
                        className="bubble-element Group bubble-r-container flex row clickable-element"
                        style={{
                            zIndex: 5,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            order: 10,
                            minHeight: 60,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: "0px 0px 10px",
                            justifyContent: "flex-start",
                            overflow: "visible",
                            borderRadius: 20,
                            opacity: 1,
                            cursor: "pointer",
                            transition: "background 200ms linear 0s"
                        }}
                    >
                        <div
                            className="bubble-element Group bubble-r-container fixed"
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
                                margin: "0px 0px 0px 20px",
                                overflow: "visible",
                                borderRadius: 0,
                                padding: 0,
                                opacity: 1,
                                backgroundColor: "rgba(255, 255, 255, 0)",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundImage:
                                    'url("https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647470078185x821974678684926200/Settings.svg")'
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
                                width: "max-content",
                                flexGrow: 0,
                                height: "max-content",
                                margin: "0px 0px 0px 10px",
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
                                opacity: 1
                            }}
                            onClick="SetSection6()"
                        >
                            Settings
                        </div>
                    </div>
                    <div
                        className="bubble-element Group bubble-r-container flex row clickable-element"
                        style={{
                            zIndex: 5,
                            alignSelf: "flex-start",
                            minWidth: 230,
                            maxWidth: 230,
                            order: 11,
                            minHeight: 60,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: 230,
                            margin: "60px 0px 0px",
                            justifyContent: "flex-start",
                            overflow: "visible",
                            borderRadius: 20,
                            opacity: 1,
                            cursor: "pointer",
                            transition: "background 200ms linear 0s"
                        }}
                    >
                        <div
                            className="bubble-element Group bubble-r-container fixed"
                            style={{
                                zIndex: 2,
                                alignSelf: "center",
                                minWidth: 20,
                                maxWidth: 20,
                                order: 1,
                                minHeight: 20,
                                maxHeight: 20,
                                width: 20,
                                flexGrow: 1,
                                height: 20,
                                margin: "0px 0px 0px 20px",
                                overflow: "visible",
                                borderRadius: 0,
                                padding: 0,
                                opacity: 1,
                                backgroundColor: "rgba(255, 255, 255, 0)",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundImage:
                                    'url("https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1646657123576x984020082182149600%2Flogout.png?w=24&h=24&auto=compress&fit=crop&dpr=2")'
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
                                width: "max-content",
                                flexGrow: 0,
                                height: "max-content",
                                margin: "0px 0px 0px 10px",
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
                                opacity: 1
                            }}
                            onClick="Logout()"
                        >
                            Log out
                        </div>
                    </div>
                </div>
                {/* Elements */}
                <div
                    className="bubble-element Group bubble-r-container flex column"
                    style={{
                        zIndex: 4,
                        alignSelf: "flex-start",
                        minWidth: 0,
                        maxWidth: 900,
                        order: 5,
                        minHeight: 0,
                        width: 0,
                        flexGrow: 1,
                        height: "max-content",
                        margin: "20px 0px 0px",
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
                            zIndex: 8,
                            alignSelf: "flex-start",
                            minWidth: 300,
                            order: 1,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 20px)",
                            margin: "0px 10px",
                            display: "none",
                            justifyContent: "flex-start"
                        }}
                    >
                        <div
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
                                margin: "0px 0px 30px"
                            }}
                        />
                        <div
                            className="bubble-element RepeatingGroup"
                            style={{
                                zIndex: 15,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 2,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 10px"
                            }}
                        />
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 16,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 4,
                                minHeight: 1,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: 0
                            }}
                        />
                    </div>
                    {/* Enabled Section 1 */}
                    <div
                        className="bubble-element Group bubble-r-container flex column"
                        id="section-1"
                        style={{
                            zIndex: 2,
                            alignSelf: "flex-start",
                            minWidth: 300,
                            order: 2,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 20px)",
                            margin: "0px 10px",
                            justifyContent: "flex-start",
                            overflow: "visible",
                            borderRadius: 0,
                            padding: "0px 0px 100px",
                            opacity: 1
                        }}
                    >
                        <div
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
                                margin: "0px 0px 30px",
                                whiteSpace: "pre-wrap",
                                overflow: "visible",
                                wordBreak: "break-word",
                                fontFamily: "Poppins",
                                fontSize: 28,
                                fontWeight: 600,
                                color: "rgb(0, 0, 0)",
                                lineHeight: 1,
                                borderRadius: 0,
                                opacity: 1
                            }}
                            onClick="SetSection1"
                        >
                            Created orders
                        </div>
                        <div
                            className="bubble-element RepeatingGroup bubble-rg"
                            style={{
                                zIndex: 15,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 4,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 10px",
                                gap: 20,
                                gridAutoRows: "minmax(max-content, 280px)",
                                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                                gridAutoFlow: "row",
                                overflow: "auto",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            <div
                                className="bubble-element GroupItem bubble-r-container flex column group-item entry-1"
                                style={{
                                    justifyContent: "flex-start",
                                    boxSizing: "content-box",
                                    minHeight: 280,
                                    borderTopStyle: "none",
                                    borderLeftStyle: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container relative clickable-element"
                                    style={{
                                        zIndex: 2,
                                        alignSelf: "center",
                                        minWidth: 280,
                                        maxWidth: 280,
                                        order: 1,
                                        minHeight: 0,
                                        height: 0,
                                        flexGrow: 1,
                                        width: 280,
                                        margin: "0px 0px 20px",
                                        overflow: "visible",
                                        borderRadius: 20,
                                        opacity: 1,
                                        cursor: "pointer",
                                        backgroundColor: "rgba(255, 255, 255, 0)",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                        backgroundImage:
                                            'url("https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1688368811224x263609441702520770%2F14f6944b242eef8884e860f46c01a291.png?w=384&h=357&auto=compress&fit=crop&dpr=2")'
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container flex column"
                                        style={{
                                            zIndex: 16,
                                            placeSelf: "end center",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "calc(100% - 0px)",
                                            height: "max-content",
                                            margin: 0,
                                            justifyContent: "flex-start",
                                            overflow: "visible",
                                            background:
                                                "-webkit-linear-gradient(top, rgba(33, 33, 33, 0) 0%, rgb(33, 33, 33) 100%)",
                                            borderRadius: 20,
                                            padding: "15px 12px",
                                            opacity: 1
                                        }}
                                    >
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 2,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 1,
                                                minHeight: 17,
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
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 2,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 1,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px",
                                                    whiteSpace: "pre-wrap",
                                                    overflow: "visible",
                                                    fontFamily: "Poppins",
                                                    fontSize: 12,
                                                    fontWeight: 600,
                                                    color: "rgba(255, 255, 255, 0.77)",
                                                    lineHeight: 1,
                                                    borderRadius: 0,
                                                    opacity: 1,
                                                    wordBreak: "break-word"
                                                }}
                                            >
                                                IgorTatarinov
                                            </div>
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 4,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px",
                                                    whiteSpace: "pre-wrap",
                                                    overflow: "visible",
                                                    wordBreak: "break-word",
                                                    fontFamily: "Poppins",
                                                    fontSize: 12,
                                                    fontWeight: 600,
                                                    color: "rgba(255, 255, 255, 0.77)",
                                                    lineHeight: 1,
                                                    borderRadius: 0,
                                                    opacity: 1
                                                }}
                                            >
                                                Lifestyle
                                            </div>
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 3,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    maxWidth: 80,
                                                    order: 3,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: 0,
                                                    whiteSpace: "pre-wrap",
                                                    overflow: "visible",
                                                    wordBreak: "break-word",
                                                    fontFamily: "Poppins",
                                                    fontSize: 12,
                                                    fontWeight: 600,
                                                    color: "rgba(255, 255, 255, 0.77)",
                                                    textAlign: "right",
                                                    lineHeight: 1,
                                                    borderRadius: 0,
                                                    opacity: 1
                                                }}
                                            >
                                                Price
                                            </div>
                                        </div>
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 3,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 2,
                                                minHeight: 17,
                                                height: "max-content",
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                width: "calc(100% - 0px)",
                                                margin: 0,
                                                justifyContent: "center",
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
                                                    order: 1,
                                                    minHeight: 0,
                                                    width: 0,
                                                    flexGrow: 1,
                                                    height: "max-content",
                                                    margin: 0,
                                                    whiteSpace: "pre-wrap",
                                                    overflow: "visible",
                                                    wordBreak: "break-word",
                                                    fontFamily: "Poppins",
                                                    fontSize: 14,
                                                    fontWeight: 600,
                                                    color: "rgb(255, 255, 255)",
                                                    lineHeight: 1,
                                                    borderRadius: 0,
                                                    opacity: 1
                                                }}
                                            >
                                                Costa Coffe
                                            </div>
                                            <div
                                                className="bubble-element Group bubble-r-container flex row"
                                                style={{
                                                    zIndex: 5,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: 0,
                                                    flexGrow: 1,
                                                    height: "max-content",
                                                    margin: 0,
                                                    justifyContent: "flex-end",
                                                    overflow: "visible",
                                                    borderRadius: 0,
                                                    opacity: 1
                                                }}
                                            >
                                                <div
                                                    className="bubble-element Image"
                                                    style={{
                                                        zIndex: 4,
                                                        alignSelf: "center",
                                                        minWidth: 0,
                                                        maxWidth: 24,
                                                        order: 1,
                                                        width: 0,
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
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                                    />
                                                    <div
                                                        style={{position: "relative", paddingTop: "100%"}}
                                                    />
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
                                                        margin: 0,
                                                        whiteSpace: "pre-wrap",
                                                        overflow: "visible",
                                                        wordBreak: "break-word",
                                                        fontFamily: "Poppins",
                                                        fontSize: 14,
                                                        fontWeight: 600,
                                                        color: "rgb(255, 255, 255)",
                                                        textAlign: "right",
                                                        lineHeight: 1,
                                                        borderRadius: 0,
                                                        opacity: 1
                                                    }}
                                                >
                                                    0
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 19,
                                            placeSelf: "start end",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "max-content",
                                            height: "max-content",
                                            margin: "10px 10px 0px 0px",
                                            justifyContent: "flex-start",
                                            overflow: "visible",
                                            borderRadius: 0,
                                            opacity: 1
                                        }}
                                    >
                                        <div
                                            className="bubble-element Image clickable-element"
                                            style={{
                                                zIndex: 17,
                                                alignSelf: "flex-start",
                                                minWidth: 36,
                                                maxWidth: 36,
                                                order: 1,
                                                width: 36,
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
                                                src="https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647470239115x593164468864627600/Frame%2010.svg"
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
                                            <div style={{position: "relative", paddingTop: "100%"}}/>
                                        </div>
                                        <div
                                            className="bubble-element Image clickable-element"
                                            style={{
                                                zIndex: 18,
                                                alignSelf: "flex-start",
                                                minWidth: 36,
                                                maxWidth: 36,
                                                order: 2,
                                                width: 36,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: "0px 0px 0px 10px",
                                                borderRadius: 0,
                                                opacity: 1,
                                                cursor: "pointer"
                                            }}
                                        >
                                            <img
                                                alt=""
                                                src="https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647470245189x925024197092840600/Frame%207.svg"
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
                                            <div style={{position: "relative", paddingTop: "100%"}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element GroupItem bubble-r-container flex column group-item entry-2"
                                style={{
                                    justifyContent: "flex-start",
                                    boxSizing: "content-box",
                                    minHeight: 280,
                                    borderTopStyle: "none",
                                    borderLeft: "20px solid rgba(150, 150, 150, 0)",
                                    marginLeft: "-20px",
                                    display: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container relative"
                                    style={{
                                        zIndex: 2,
                                        alignSelf: "center",
                                        minWidth: 280,
                                        maxWidth: 280,
                                        order: 1,
                                        minHeight: 0,
                                        height: 0,
                                        flexGrow: 1,
                                        width: 280,
                                        margin: "0px 0px 20px"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container flex column"
                                        style={{
                                            zIndex: 16,
                                            placeSelf: "end center",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "calc(100% - 0px)",
                                            height: "max-content",
                                            margin: 0,
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 2,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 1,
                                                minHeight: 17,
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
                                                    zIndex: 2,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 1,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 4,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 3,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    maxWidth: 80,
                                                    order: 3,
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
                                                zIndex: 3,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 2,
                                                minHeight: 17,
                                                height: "max-content",
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                width: "calc(100% - 0px)",
                                                margin: 0,
                                                justifyContent: "center"
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
                                                className="bubble-element Group bubble-r-container flex row"
                                                style={{
                                                    zIndex: 5,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: 0,
                                                    flexGrow: 1,
                                                    height: "max-content",
                                                    margin: 0,
                                                    justifyContent: "flex-end"
                                                }}
                                            >
                                                <div
                                                    className="bubble-element Image"
                                                    style={{
                                                        zIndex: 4,
                                                        alignSelf: "center",
                                                        minWidth: 0,
                                                        maxWidth: 24,
                                                        order: 1,
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
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 19,
                                            placeSelf: "start end",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "max-content",
                                            height: "max-content",
                                            margin: "10px 10px 0px 0px",
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 17,
                                                alignSelf: "flex-start",
                                                minWidth: 36,
                                                maxWidth: 36,
                                                order: 1,
                                                width: 36,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 18,
                                                alignSelf: "flex-start",
                                                minWidth: 36,
                                                maxWidth: 36,
                                                order: 2,
                                                width: 36,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: "0px 0px 0px 10px"
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element GroupItem bubble-r-container flex column group-item entry-3"
                                style={{
                                    justifyContent: "flex-start",
                                    boxSizing: "content-box",
                                    minHeight: 280,
                                    borderTopStyle: "none",
                                    borderLeft: "20px solid rgba(150, 150, 150, 0)",
                                    marginLeft: "-20px",
                                    display: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container relative"
                                    style={{
                                        zIndex: 2,
                                        alignSelf: "center",
                                        minWidth: 280,
                                        maxWidth: 280,
                                        order: 1,
                                        minHeight: 0,
                                        height: 0,
                                        flexGrow: 1,
                                        width: 280,
                                        margin: "0px 0px 20px"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container flex column"
                                        style={{
                                            zIndex: 16,
                                            placeSelf: "end center",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "calc(100% - 0px)",
                                            height: "max-content",
                                            margin: 0,
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 2,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 1,
                                                minHeight: 17,
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
                                                    zIndex: 2,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 1,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 4,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 3,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    maxWidth: 80,
                                                    order: 3,
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
                                                zIndex: 3,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 2,
                                                minHeight: 17,
                                                height: "max-content",
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                width: "calc(100% - 0px)",
                                                margin: 0,
                                                justifyContent: "center"
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
                                                className="bubble-element Group bubble-r-container flex row"
                                                style={{
                                                    zIndex: 5,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: 0,
                                                    flexGrow: 1,
                                                    height: "max-content",
                                                    margin: 0,
                                                    justifyContent: "flex-end"
                                                }}
                                            >
                                                <div
                                                    className="bubble-element Image"
                                                    style={{
                                                        zIndex: 4,
                                                        alignSelf: "center",
                                                        minWidth: 0,
                                                        maxWidth: 24,
                                                        order: 1,
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
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 19,
                                            placeSelf: "start end",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "max-content",
                                            height: "max-content",
                                            margin: "10px 10px 0px 0px",
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 17,
                                                alignSelf: "flex-start",
                                                minWidth: 36,
                                                maxWidth: 36,
                                                order: 1,
                                                width: 36,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 18,
                                                alignSelf: "flex-start",
                                                minWidth: 36,
                                                maxWidth: 36,
                                                order: 2,
                                                width: 36,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: "0px 0px 0px 10px"
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element GroupItem bubble-r-container flex column group-item entry-4"
                                style={{
                                    justifyContent: "flex-start",
                                    boxSizing: "content-box",
                                    minHeight: 280,
                                    borderTop: "20px solid rgba(150, 150, 150, 0)",
                                    marginTop: "-20px",
                                    borderLeftStyle: "none",
                                    display: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container relative"
                                    style={{
                                        zIndex: 2,
                                        alignSelf: "center",
                                        minWidth: 280,
                                        maxWidth: 280,
                                        order: 1,
                                        minHeight: 0,
                                        height: 0,
                                        flexGrow: 1,
                                        width: 280,
                                        margin: "0px 0px 20px"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container flex column"
                                        style={{
                                            zIndex: 16,
                                            placeSelf: "end center",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "calc(100% - 0px)",
                                            height: "max-content",
                                            margin: 0,
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 2,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 1,
                                                minHeight: 17,
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
                                                    zIndex: 2,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 1,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 4,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 3,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    maxWidth: 80,
                                                    order: 3,
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
                                                zIndex: 3,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 2,
                                                minHeight: 17,
                                                height: "max-content",
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                width: "calc(100% - 0px)",
                                                margin: 0,
                                                justifyContent: "center"
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
                                                className="bubble-element Group bubble-r-container flex row"
                                                style={{
                                                    zIndex: 5,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: 0,
                                                    flexGrow: 1,
                                                    height: "max-content",
                                                    margin: 0,
                                                    justifyContent: "flex-end"
                                                }}
                                            >
                                                <div
                                                    className="bubble-element Image"
                                                    style={{
                                                        zIndex: 4,
                                                        alignSelf: "center",
                                                        minWidth: 0,
                                                        maxWidth: 24,
                                                        order: 1,
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
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 19,
                                            placeSelf: "start end",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "max-content",
                                            height: "max-content",
                                            margin: "10px 10px 0px 0px",
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 17,
                                                alignSelf: "flex-start",
                                                minWidth: 36,
                                                maxWidth: 36,
                                                order: 1,
                                                width: 36,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 18,
                                                alignSelf: "flex-start",
                                                minWidth: 36,
                                                maxWidth: 36,
                                                order: 2,
                                                width: 36,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: "0px 0px 0px 10px"
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element GroupItem bubble-r-container flex column group-item entry-5"
                                style={{
                                    justifyContent: "flex-start",
                                    boxSizing: "content-box",
                                    minHeight: 280,
                                    borderTop: "20px solid rgba(150, 150, 150, 0)",
                                    marginTop: "-20px",
                                    borderLeft: "20px solid rgba(150, 150, 150, 0)",
                                    marginLeft: "-20px",
                                    display: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container relative"
                                    style={{
                                        zIndex: 2,
                                        alignSelf: "center",
                                        minWidth: 280,
                                        maxWidth: 280,
                                        order: 1,
                                        minHeight: 0,
                                        height: 0,
                                        flexGrow: 1,
                                        width: 280,
                                        margin: "0px 0px 20px"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container flex column"
                                        style={{
                                            zIndex: 16,
                                            placeSelf: "end center",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "calc(100% - 0px)",
                                            height: "max-content",
                                            margin: 0,
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 2,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 1,
                                                minHeight: 17,
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
                                                    zIndex: 2,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 1,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 4,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 3,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    maxWidth: 80,
                                                    order: 3,
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
                                                zIndex: 3,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 2,
                                                minHeight: 17,
                                                height: "max-content",
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                width: "calc(100% - 0px)",
                                                margin: 0,
                                                justifyContent: "center"
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
                                                className="bubble-element Group bubble-r-container flex row"
                                                style={{
                                                    zIndex: 5,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: 0,
                                                    flexGrow: 1,
                                                    height: "max-content",
                                                    margin: 0,
                                                    justifyContent: "flex-end"
                                                }}
                                            >
                                                <div
                                                    className="bubble-element Image"
                                                    style={{
                                                        zIndex: 4,
                                                        alignSelf: "center",
                                                        minWidth: 0,
                                                        maxWidth: 24,
                                                        order: 1,
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
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 19,
                                            placeSelf: "start end",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "max-content",
                                            height: "max-content",
                                            margin: "10px 10px 0px 0px",
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 17,
                                                alignSelf: "flex-start",
                                                minWidth: 36,
                                                maxWidth: 36,
                                                order: 1,
                                                width: 36,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 18,
                                                alignSelf: "flex-start",
                                                minWidth: 36,
                                                maxWidth: 36,
                                                order: 2,
                                                width: 36,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: "0px 0px 0px 10px"
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element GroupItem bubble-r-container flex column group-item entry-6"
                                style={{
                                    justifyContent: "flex-start",
                                    boxSizing: "content-box",
                                    minHeight: 280,
                                    borderTop: "20px solid rgba(150, 150, 150, 0)",
                                    marginTop: "-20px",
                                    borderLeft: "20px solid rgba(150, 150, 150, 0)",
                                    marginLeft: "-20px",
                                    display: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container relative"
                                    style={{
                                        zIndex: 2,
                                        alignSelf: "center",
                                        minWidth: 280,
                                        maxWidth: 280,
                                        order: 1,
                                        minHeight: 0,
                                        height: 0,
                                        flexGrow: 1,
                                        width: 280,
                                        margin: "0px 0px 20px"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container flex column"
                                        style={{
                                            zIndex: 16,
                                            placeSelf: "end center",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "calc(100% - 0px)",
                                            height: "max-content",
                                            margin: 0,
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 2,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 1,
                                                minHeight: 17,
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
                                                    zIndex: 2,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 1,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 4,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 3,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    maxWidth: 80,
                                                    order: 3,
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
                                                zIndex: 3,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 2,
                                                minHeight: 17,
                                                height: "max-content",
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                width: "calc(100% - 0px)",
                                                margin: 0,
                                                justifyContent: "center"
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
                                                className="bubble-element Group bubble-r-container flex row"
                                                style={{
                                                    zIndex: 5,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: 0,
                                                    flexGrow: 1,
                                                    height: "max-content",
                                                    margin: 0,
                                                    justifyContent: "flex-end"
                                                }}
                                            >
                                                <div
                                                    className="bubble-element Image"
                                                    style={{
                                                        zIndex: 4,
                                                        alignSelf: "center",
                                                        minWidth: 0,
                                                        maxWidth: 24,
                                                        order: 1,
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
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 19,
                                            placeSelf: "start end",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "max-content",
                                            height: "max-content",
                                            margin: "10px 10px 0px 0px",
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 17,
                                                alignSelf: "flex-start",
                                                minWidth: 36,
                                                maxWidth: 36,
                                                order: 1,
                                                width: 36,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 18,
                                                alignSelf: "flex-start",
                                                minWidth: 36,
                                                maxWidth: 36,
                                                order: 2,
                                                width: 36,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: "0px 0px 0px 10px"
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element GroupItem bubble-r-container flex column group-item entry-7"
                                style={{
                                    justifyContent: "flex-start",
                                    boxSizing: "content-box",
                                    minHeight: 280,
                                    borderTop: "20px solid rgba(150, 150, 150, 0)",
                                    marginTop: "-20px",
                                    borderLeftStyle: "none",
                                    display: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container relative"
                                    style={{
                                        zIndex: 2,
                                        alignSelf: "center",
                                        minWidth: 280,
                                        maxWidth: 280,
                                        order: 1,
                                        minHeight: 0,
                                        height: 0,
                                        flexGrow: 1,
                                        width: 280,
                                        margin: "0px 0px 20px"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container flex column"
                                        style={{
                                            zIndex: 16,
                                            placeSelf: "end center",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "calc(100% - 0px)",
                                            height: "max-content",
                                            margin: 0,
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 2,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 1,
                                                minHeight: 17,
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
                                                    zIndex: 2,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 1,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 4,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 3,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    maxWidth: 80,
                                                    order: 3,
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
                                                zIndex: 3,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 2,
                                                minHeight: 17,
                                                height: "max-content",
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                width: "calc(100% - 0px)",
                                                margin: 0,
                                                justifyContent: "center"
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
                                                className="bubble-element Group bubble-r-container flex row"
                                                style={{
                                                    zIndex: 5,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: 0,
                                                    flexGrow: 1,
                                                    height: "max-content",
                                                    margin: 0,
                                                    justifyContent: "flex-end"
                                                }}
                                            >
                                                <div
                                                    className="bubble-element Image"
                                                    style={{
                                                        zIndex: 4,
                                                        alignSelf: "center",
                                                        minWidth: 0,
                                                        maxWidth: 24,
                                                        order: 1,
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
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 19,
                                            placeSelf: "start end",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "max-content",
                                            height: "max-content",
                                            margin: "10px 10px 0px 0px",
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 17,
                                                alignSelf: "flex-start",
                                                minWidth: 36,
                                                maxWidth: 36,
                                                order: 1,
                                                width: 36,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 18,
                                                alignSelf: "flex-start",
                                                minWidth: 36,
                                                maxWidth: 36,
                                                order: 2,
                                                width: 36,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: "0px 0px 0px 10px"
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element GroupItem bubble-r-container flex column group-item entry-8"
                                style={{
                                    justifyContent: "flex-start",
                                    boxSizing: "content-box",
                                    minHeight: 280,
                                    borderTop: "20px solid rgba(150, 150, 150, 0)",
                                    marginTop: "-20px",
                                    borderLeft: "20px solid rgba(150, 150, 150, 0)",
                                    marginLeft: "-20px",
                                    display: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container relative"
                                    style={{
                                        zIndex: 2,
                                        alignSelf: "center",
                                        minWidth: 280,
                                        maxWidth: 280,
                                        order: 1,
                                        minHeight: 0,
                                        height: 0,
                                        flexGrow: 1,
                                        width: 280,
                                        margin: "0px 0px 20px"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container flex column"
                                        style={{
                                            zIndex: 16,
                                            placeSelf: "end center",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "calc(100% - 0px)",
                                            height: "max-content",
                                            margin: 0,
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 2,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 1,
                                                minHeight: 17,
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
                                                    zIndex: 2,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 1,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 4,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 3,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    maxWidth: 80,
                                                    order: 3,
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
                                                zIndex: 3,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 2,
                                                minHeight: 17,
                                                height: "max-content",
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                width: "calc(100% - 0px)",
                                                margin: 0,
                                                justifyContent: "center"
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
                                                className="bubble-element Group bubble-r-container flex row"
                                                style={{
                                                    zIndex: 5,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: 0,
                                                    flexGrow: 1,
                                                    height: "max-content",
                                                    margin: 0,
                                                    justifyContent: "flex-end"
                                                }}
                                            >
                                                <div
                                                    className="bubble-element Image"
                                                    style={{
                                                        zIndex: 4,
                                                        alignSelf: "center",
                                                        minWidth: 0,
                                                        maxWidth: 24,
                                                        order: 1,
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
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 19,
                                            placeSelf: "start end",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "max-content",
                                            height: "max-content",
                                            margin: "10px 10px 0px 0px",
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 17,
                                                alignSelf: "flex-start",
                                                minWidth: 36,
                                                maxWidth: 36,
                                                order: 1,
                                                width: 36,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 18,
                                                alignSelf: "flex-start",
                                                minWidth: 36,
                                                maxWidth: 36,
                                                order: 2,
                                                width: 36,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: "0px 0px 0px 10px"
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element GroupItem bubble-r-container flex column group-item entry-9"
                                style={{
                                    justifyContent: "flex-start",
                                    boxSizing: "content-box",
                                    minHeight: 280,
                                    borderTop: "20px solid rgba(150, 150, 150, 0)",
                                    marginTop: "-20px",
                                    borderLeft: "20px solid rgba(150, 150, 150, 0)",
                                    marginLeft: "-20px",
                                    display: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container relative"
                                    style={{
                                        zIndex: 2,
                                        alignSelf: "center",
                                        minWidth: 280,
                                        maxWidth: 280,
                                        order: 1,
                                        minHeight: 0,
                                        height: 0,
                                        flexGrow: 1,
                                        width: 280,
                                        margin: "0px 0px 20px"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container flex column"
                                        style={{
                                            zIndex: 16,
                                            placeSelf: "end center",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "calc(100% - 0px)",
                                            height: "max-content",
                                            margin: 0,
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 2,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 1,
                                                minHeight: 17,
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
                                                    zIndex: 2,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 1,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 4,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 3,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    maxWidth: 80,
                                                    order: 3,
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
                                                zIndex: 3,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 2,
                                                minHeight: 17,
                                                height: "max-content",
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                width: "calc(100% - 0px)",
                                                margin: 0,
                                                justifyContent: "center"
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
                                                className="bubble-element Group bubble-r-container flex row"
                                                style={{
                                                    zIndex: 5,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: 0,
                                                    flexGrow: 1,
                                                    height: "max-content",
                                                    margin: 0,
                                                    justifyContent: "flex-end"
                                                }}
                                            >
                                                <div
                                                    className="bubble-element Image"
                                                    style={{
                                                        zIndex: 4,
                                                        alignSelf: "center",
                                                        minWidth: 0,
                                                        maxWidth: 24,
                                                        order: 1,
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
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 19,
                                            placeSelf: "start end",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "max-content",
                                            height: "max-content",
                                            margin: "10px 10px 0px 0px",
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 17,
                                                alignSelf: "flex-start",
                                                minWidth: 36,
                                                maxWidth: 36,
                                                order: 1,
                                                width: 36,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 18,
                                                alignSelf: "flex-start",
                                                minWidth: 36,
                                                maxWidth: 36,
                                                order: 2,
                                                width: 36,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: "0px 0px 0px 10px"
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element GroupItem bubble-r-container flex column group-item entry-10"
                                style={{
                                    justifyContent: "flex-start",
                                    boxSizing: "content-box",
                                    minHeight: 280,
                                    borderTop: "20px solid rgba(150, 150, 150, 0)",
                                    marginTop: "-20px",
                                    borderLeftStyle: "none",
                                    display: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container relative"
                                    style={{
                                        zIndex: 2,
                                        alignSelf: "center",
                                        minWidth: 280,
                                        maxWidth: 280,
                                        order: 1,
                                        minHeight: 0,
                                        height: 0,
                                        flexGrow: 1,
                                        width: 280,
                                        margin: "0px 0px 20px"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container flex column"
                                        style={{
                                            zIndex: 16,
                                            placeSelf: "end center",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "calc(100% - 0px)",
                                            height: "max-content",
                                            margin: 0,
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 2,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 1,
                                                minHeight: 17,
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
                                                    zIndex: 2,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 1,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 4,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 3,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    maxWidth: 80,
                                                    order: 3,
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
                                                zIndex: 3,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 2,
                                                minHeight: 17,
                                                height: "max-content",
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                width: "calc(100% - 0px)",
                                                margin: 0,
                                                justifyContent: "center"
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
                                                className="bubble-element Group bubble-r-container flex row"
                                                style={{
                                                    zIndex: 5,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: 0,
                                                    flexGrow: 1,
                                                    height: "max-content",
                                                    margin: 0,
                                                    justifyContent: "flex-end"
                                                }}
                                            >
                                                <div
                                                    className="bubble-element Image"
                                                    style={{
                                                        zIndex: 4,
                                                        alignSelf: "center",
                                                        minWidth: 0,
                                                        maxWidth: 24,
                                                        order: 1,
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
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 19,
                                            placeSelf: "start end",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "max-content",
                                            height: "max-content",
                                            margin: "10px 10px 0px 0px",
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 17,
                                                alignSelf: "flex-start",
                                                minWidth: 36,
                                                maxWidth: 36,
                                                order: 1,
                                                width: 36,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                        <div
                                            className="bubble-element Image"
                                            style={{
                                                zIndex: 18,
                                                alignSelf: "flex-start",
                                                minWidth: 36,
                                                maxWidth: 36,
                                                order: 2,
                                                width: 36,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: "0px 0px 0px 10px"
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 16,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 5,
                                minHeight: 1,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: 0,
                                whiteSpace: "pre-wrap",
                                overflow: "visible",
                                wordBreak: "break-word",
                                fontFamily: "Poppins",
                                fontSize: 16,
                                fontWeight: 500,
                                color: "rgb(0, 0, 0)",
                                letterSpacing: 1,
                                lineHeight: "1.5",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            No orders founded.
                        </div>
                    </div>
                    {/* Enabled Section 2 */}
                    <div
                        className="bubble-element Group bubble-r-container flex column"
                        id="section-2"
                        style={{
                            zIndex: 7,
                            alignSelf: "flex-start",
                            minWidth: 300,
                            order: 3,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 20px)",
                            margin: "0px 10px",
                            justifyContent: "flex-start",
                            overflow: "visible",
                            borderRadius: 0,
                            padding: "0px 0px 100px",
                            opacity: 1
                        }}
                    >
                        <div
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
                                margin: "0px 0px 30px",
                                whiteSpace: "pre-wrap",
                                overflow: "visible",
                                wordBreak: "break-word",
                                fontFamily: "Poppins",
                                fontSize: 28,
                                fontWeight: 600,
                                color: "rgb(0, 0, 0)",
                                lineHeight: 1,
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            Accepted orders
                        </div>
                        <div
                            className="bubble-element RepeatingGroup bubble-rg"
                            style={{
                                zIndex: 15,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 2,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 10px",
                                gap: 20,
                                gridAutoRows: "minmax(max-content, 280px)",
                                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                                gridAutoFlow: "row",
                                overflow: "auto",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            <div
                                className="bubble-element GroupItem bubble-r-container flex column group-item entry-1"
                                style={{
                                    justifyContent: "flex-start",
                                    boxSizing: "content-box",
                                    minHeight: 280,
                                    borderTopStyle: "none",
                                    borderLeftStyle: "none",
                                    display: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container relative"
                                    style={{
                                        zIndex: 2,
                                        alignSelf: "center",
                                        minWidth: 280,
                                        maxWidth: 280,
                                        order: 1,
                                        minHeight: 0,
                                        height: 0,
                                        flexGrow: 1,
                                        width: 280,
                                        margin: "0px 0px 20px"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container flex column"
                                        style={{
                                            zIndex: 16,
                                            placeSelf: "end center",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "calc(100% - 0px)",
                                            height: "max-content",
                                            margin: 0,
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 2,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 1,
                                                minHeight: 17,
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
                                                    zIndex: 2,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 1,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 4,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 3,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    maxWidth: 80,
                                                    order: 3,
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
                                                zIndex: 3,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 2,
                                                minHeight: 17,
                                                height: "max-content",
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                width: "calc(100% - 0px)",
                                                margin: 0,
                                                justifyContent: "center"
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
                                                className="bubble-element Group bubble-r-container flex row"
                                                style={{
                                                    zIndex: 5,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: 0,
                                                    flexGrow: 1,
                                                    height: "max-content",
                                                    margin: 0,
                                                    justifyContent: "flex-end"
                                                }}
                                            >
                                                <div
                                                    className="bubble-element Image"
                                                    style={{
                                                        zIndex: 4,
                                                        alignSelf: "center",
                                                        minWidth: 0,
                                                        maxWidth: 24,
                                                        order: 1,
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
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 19,
                                            placeSelf: "start end",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "max-content",
                                            height: "max-content",
                                            margin: "10px 10px 0px 0px",
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <button
                                            className="bubble-element Button"
                                            style={{
                                                zIndex: 25,
                                                alignSelf: "flex-start",
                                                minWidth: 100,
                                                maxWidth: 140,
                                                order: 28,
                                                minHeight: 35,
                                                width: 100,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element GroupItem bubble-r-container flex column group-item entry-2"
                                style={{
                                    justifyContent: "flex-start",
                                    boxSizing: "content-box",
                                    minHeight: 280,
                                    borderTopStyle: "none",
                                    borderLeft: "20px solid rgba(150, 150, 150, 0)",
                                    marginLeft: "-20px",
                                    display: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container relative"
                                    style={{
                                        zIndex: 2,
                                        alignSelf: "center",
                                        minWidth: 280,
                                        maxWidth: 280,
                                        order: 1,
                                        minHeight: 0,
                                        height: 0,
                                        flexGrow: 1,
                                        width: 280,
                                        margin: "0px 0px 20px"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container flex column"
                                        style={{
                                            zIndex: 16,
                                            placeSelf: "end center",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "calc(100% - 0px)",
                                            height: "max-content",
                                            margin: 0,
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 2,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 1,
                                                minHeight: 17,
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
                                                    zIndex: 2,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 1,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 4,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 3,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    maxWidth: 80,
                                                    order: 3,
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
                                                zIndex: 3,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 2,
                                                minHeight: 17,
                                                height: "max-content",
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                width: "calc(100% - 0px)",
                                                margin: 0,
                                                justifyContent: "center"
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
                                                className="bubble-element Group bubble-r-container flex row"
                                                style={{
                                                    zIndex: 5,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: 0,
                                                    flexGrow: 1,
                                                    height: "max-content",
                                                    margin: 0,
                                                    justifyContent: "flex-end"
                                                }}
                                            >
                                                <div
                                                    className="bubble-element Image"
                                                    style={{
                                                        zIndex: 4,
                                                        alignSelf: "center",
                                                        minWidth: 0,
                                                        maxWidth: 24,
                                                        order: 1,
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
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 19,
                                            placeSelf: "start end",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "max-content",
                                            height: "max-content",
                                            margin: "10px 10px 0px 0px",
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <button
                                            className="bubble-element Button"
                                            style={{
                                                zIndex: 25,
                                                alignSelf: "flex-start",
                                                minWidth: 100,
                                                maxWidth: 140,
                                                order: 28,
                                                minHeight: 35,
                                                width: 100,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element GroupItem bubble-r-container flex column group-item entry-3"
                                style={{
                                    justifyContent: "flex-start",
                                    boxSizing: "content-box",
                                    minHeight: 280,
                                    borderTopStyle: "none",
                                    borderLeft: "20px solid rgba(150, 150, 150, 0)",
                                    marginLeft: "-20px",
                                    display: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container relative"
                                    style={{
                                        zIndex: 2,
                                        alignSelf: "center",
                                        minWidth: 280,
                                        maxWidth: 280,
                                        order: 1,
                                        minHeight: 0,
                                        height: 0,
                                        flexGrow: 1,
                                        width: 280,
                                        margin: "0px 0px 20px"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container flex column"
                                        style={{
                                            zIndex: 16,
                                            placeSelf: "end center",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "calc(100% - 0px)",
                                            height: "max-content",
                                            margin: 0,
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 2,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 1,
                                                minHeight: 17,
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
                                                    zIndex: 2,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 1,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 4,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 3,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    maxWidth: 80,
                                                    order: 3,
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
                                                zIndex: 3,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 2,
                                                minHeight: 17,
                                                height: "max-content",
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                width: "calc(100% - 0px)",
                                                margin: 0,
                                                justifyContent: "center"
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
                                                className="bubble-element Group bubble-r-container flex row"
                                                style={{
                                                    zIndex: 5,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: 0,
                                                    flexGrow: 1,
                                                    height: "max-content",
                                                    margin: 0,
                                                    justifyContent: "flex-end"
                                                }}
                                            >
                                                <div
                                                    className="bubble-element Image"
                                                    style={{
                                                        zIndex: 4,
                                                        alignSelf: "center",
                                                        minWidth: 0,
                                                        maxWidth: 24,
                                                        order: 1,
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
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 19,
                                            placeSelf: "start end",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "max-content",
                                            height: "max-content",
                                            margin: "10px 10px 0px 0px",
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <button
                                            className="bubble-element Button"
                                            style={{
                                                zIndex: 25,
                                                alignSelf: "flex-start",
                                                minWidth: 100,
                                                maxWidth: 140,
                                                order: 28,
                                                minHeight: 35,
                                                width: 100,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element GroupItem bubble-r-container flex column group-item entry-4"
                                style={{
                                    justifyContent: "flex-start",
                                    boxSizing: "content-box",
                                    minHeight: 280,
                                    borderTop: "20px solid rgba(150, 150, 150, 0)",
                                    marginTop: "-20px",
                                    borderLeftStyle: "none",
                                    display: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container relative"
                                    style={{
                                        zIndex: 2,
                                        alignSelf: "center",
                                        minWidth: 280,
                                        maxWidth: 280,
                                        order: 1,
                                        minHeight: 0,
                                        height: 0,
                                        flexGrow: 1,
                                        width: 280,
                                        margin: "0px 0px 20px"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container flex column"
                                        style={{
                                            zIndex: 16,
                                            placeSelf: "end center",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "calc(100% - 0px)",
                                            height: "max-content",
                                            margin: 0,
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 2,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 1,
                                                minHeight: 17,
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
                                                    zIndex: 2,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 1,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 4,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 3,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    maxWidth: 80,
                                                    order: 3,
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
                                                zIndex: 3,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 2,
                                                minHeight: 17,
                                                height: "max-content",
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                width: "calc(100% - 0px)",
                                                margin: 0,
                                                justifyContent: "center"
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
                                                className="bubble-element Group bubble-r-container flex row"
                                                style={{
                                                    zIndex: 5,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: 0,
                                                    flexGrow: 1,
                                                    height: "max-content",
                                                    margin: 0,
                                                    justifyContent: "flex-end"
                                                }}
                                            >
                                                <div
                                                    className="bubble-element Image"
                                                    style={{
                                                        zIndex: 4,
                                                        alignSelf: "center",
                                                        minWidth: 0,
                                                        maxWidth: 24,
                                                        order: 1,
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
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 19,
                                            placeSelf: "start end",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "max-content",
                                            height: "max-content",
                                            margin: "10px 10px 0px 0px",
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <button
                                            className="bubble-element Button"
                                            style={{
                                                zIndex: 25,
                                                alignSelf: "flex-start",
                                                minWidth: 100,
                                                maxWidth: 140,
                                                order: 28,
                                                minHeight: 35,
                                                width: 100,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element GroupItem bubble-r-container flex column group-item entry-5"
                                style={{
                                    justifyContent: "flex-start",
                                    boxSizing: "content-box",
                                    minHeight: 280,
                                    borderTop: "20px solid rgba(150, 150, 150, 0)",
                                    marginTop: "-20px",
                                    borderLeft: "20px solid rgba(150, 150, 150, 0)",
                                    marginLeft: "-20px",
                                    display: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container relative"
                                    style={{
                                        zIndex: 2,
                                        alignSelf: "center",
                                        minWidth: 280,
                                        maxWidth: 280,
                                        order: 1,
                                        minHeight: 0,
                                        height: 0,
                                        flexGrow: 1,
                                        width: 280,
                                        margin: "0px 0px 20px"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container flex column"
                                        style={{
                                            zIndex: 16,
                                            placeSelf: "end center",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "calc(100% - 0px)",
                                            height: "max-content",
                                            margin: 0,
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 2,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 1,
                                                minHeight: 17,
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
                                                    zIndex: 2,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 1,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 4,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 3,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    maxWidth: 80,
                                                    order: 3,
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
                                                zIndex: 3,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 2,
                                                minHeight: 17,
                                                height: "max-content",
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                width: "calc(100% - 0px)",
                                                margin: 0,
                                                justifyContent: "center"
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
                                                className="bubble-element Group bubble-r-container flex row"
                                                style={{
                                                    zIndex: 5,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: 0,
                                                    flexGrow: 1,
                                                    height: "max-content",
                                                    margin: 0,
                                                    justifyContent: "flex-end"
                                                }}
                                            >
                                                <div
                                                    className="bubble-element Image"
                                                    style={{
                                                        zIndex: 4,
                                                        alignSelf: "center",
                                                        minWidth: 0,
                                                        maxWidth: 24,
                                                        order: 1,
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
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 19,
                                            placeSelf: "start end",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "max-content",
                                            height: "max-content",
                                            margin: "10px 10px 0px 0px",
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <button
                                            className="bubble-element Button"
                                            style={{
                                                zIndex: 25,
                                                alignSelf: "flex-start",
                                                minWidth: 100,
                                                maxWidth: 140,
                                                order: 28,
                                                minHeight: 35,
                                                width: 100,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element GroupItem bubble-r-container flex column group-item entry-6"
                                style={{
                                    justifyContent: "flex-start",
                                    boxSizing: "content-box",
                                    minHeight: 280,
                                    borderTop: "20px solid rgba(150, 150, 150, 0)",
                                    marginTop: "-20px",
                                    borderLeft: "20px solid rgba(150, 150, 150, 0)",
                                    marginLeft: "-20px",
                                    display: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container relative"
                                    style={{
                                        zIndex: 2,
                                        alignSelf: "center",
                                        minWidth: 280,
                                        maxWidth: 280,
                                        order: 1,
                                        minHeight: 0,
                                        height: 0,
                                        flexGrow: 1,
                                        width: 280,
                                        margin: "0px 0px 20px"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container flex column"
                                        style={{
                                            zIndex: 16,
                                            placeSelf: "end center",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "calc(100% - 0px)",
                                            height: "max-content",
                                            margin: 0,
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 2,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 1,
                                                minHeight: 17,
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
                                                    zIndex: 2,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 1,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 4,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 3,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    maxWidth: 80,
                                                    order: 3,
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
                                                zIndex: 3,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 2,
                                                minHeight: 17,
                                                height: "max-content",
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                width: "calc(100% - 0px)",
                                                margin: 0,
                                                justifyContent: "center"
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
                                                className="bubble-element Group bubble-r-container flex row"
                                                style={{
                                                    zIndex: 5,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: 0,
                                                    flexGrow: 1,
                                                    height: "max-content",
                                                    margin: 0,
                                                    justifyContent: "flex-end"
                                                }}
                                            >
                                                <div
                                                    className="bubble-element Image"
                                                    style={{
                                                        zIndex: 4,
                                                        alignSelf: "center",
                                                        minWidth: 0,
                                                        maxWidth: 24,
                                                        order: 1,
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
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 19,
                                            placeSelf: "start end",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "max-content",
                                            height: "max-content",
                                            margin: "10px 10px 0px 0px",
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <button
                                            className="bubble-element Button"
                                            style={{
                                                zIndex: 25,
                                                alignSelf: "flex-start",
                                                minWidth: 100,
                                                maxWidth: 140,
                                                order: 28,
                                                minHeight: 35,
                                                width: 100,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element GroupItem bubble-r-container flex column group-item entry-7"
                                style={{
                                    justifyContent: "flex-start",
                                    boxSizing: "content-box",
                                    minHeight: 280,
                                    borderTop: "20px solid rgba(150, 150, 150, 0)",
                                    marginTop: "-20px",
                                    borderLeftStyle: "none",
                                    display: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container relative"
                                    style={{
                                        zIndex: 2,
                                        alignSelf: "center",
                                        minWidth: 280,
                                        maxWidth: 280,
                                        order: 1,
                                        minHeight: 0,
                                        height: 0,
                                        flexGrow: 1,
                                        width: 280,
                                        margin: "0px 0px 20px"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container flex column"
                                        style={{
                                            zIndex: 16,
                                            placeSelf: "end center",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "calc(100% - 0px)",
                                            height: "max-content",
                                            margin: 0,
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 2,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 1,
                                                minHeight: 17,
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
                                                    zIndex: 2,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 1,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 4,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 3,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    maxWidth: 80,
                                                    order: 3,
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
                                                zIndex: 3,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 2,
                                                minHeight: 17,
                                                height: "max-content",
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                width: "calc(100% - 0px)",
                                                margin: 0,
                                                justifyContent: "center"
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
                                                className="bubble-element Group bubble-r-container flex row"
                                                style={{
                                                    zIndex: 5,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: 0,
                                                    flexGrow: 1,
                                                    height: "max-content",
                                                    margin: 0,
                                                    justifyContent: "flex-end"
                                                }}
                                            >
                                                <div
                                                    className="bubble-element Image"
                                                    style={{
                                                        zIndex: 4,
                                                        alignSelf: "center",
                                                        minWidth: 0,
                                                        maxWidth: 24,
                                                        order: 1,
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
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 19,
                                            placeSelf: "start end",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "max-content",
                                            height: "max-content",
                                            margin: "10px 10px 0px 0px",
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <button
                                            className="bubble-element Button"
                                            style={{
                                                zIndex: 25,
                                                alignSelf: "flex-start",
                                                minWidth: 100,
                                                maxWidth: 140,
                                                order: 28,
                                                minHeight: 35,
                                                width: 100,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element GroupItem bubble-r-container flex column group-item entry-8"
                                style={{
                                    justifyContent: "flex-start",
                                    boxSizing: "content-box",
                                    minHeight: 280,
                                    borderTop: "20px solid rgba(150, 150, 150, 0)",
                                    marginTop: "-20px",
                                    borderLeft: "20px solid rgba(150, 150, 150, 0)",
                                    marginLeft: "-20px",
                                    display: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container relative"
                                    style={{
                                        zIndex: 2,
                                        alignSelf: "center",
                                        minWidth: 280,
                                        maxWidth: 280,
                                        order: 1,
                                        minHeight: 0,
                                        height: 0,
                                        flexGrow: 1,
                                        width: 280,
                                        margin: "0px 0px 20px"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container flex column"
                                        style={{
                                            zIndex: 16,
                                            placeSelf: "end center",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "calc(100% - 0px)",
                                            height: "max-content",
                                            margin: 0,
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 2,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 1,
                                                minHeight: 17,
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
                                                    zIndex: 2,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 1,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 4,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 3,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    maxWidth: 80,
                                                    order: 3,
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
                                                zIndex: 3,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 2,
                                                minHeight: 17,
                                                height: "max-content",
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                width: "calc(100% - 0px)",
                                                margin: 0,
                                                justifyContent: "center"
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
                                                className="bubble-element Group bubble-r-container flex row"
                                                style={{
                                                    zIndex: 5,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: 0,
                                                    flexGrow: 1,
                                                    height: "max-content",
                                                    margin: 0,
                                                    justifyContent: "flex-end"
                                                }}
                                            >
                                                <div
                                                    className="bubble-element Image"
                                                    style={{
                                                        zIndex: 4,
                                                        alignSelf: "center",
                                                        minWidth: 0,
                                                        maxWidth: 24,
                                                        order: 1,
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
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 19,
                                            placeSelf: "start end",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "max-content",
                                            height: "max-content",
                                            margin: "10px 10px 0px 0px",
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <button
                                            className="bubble-element Button"
                                            style={{
                                                zIndex: 25,
                                                alignSelf: "flex-start",
                                                minWidth: 100,
                                                maxWidth: 140,
                                                order: 28,
                                                minHeight: 35,
                                                width: 100,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element GroupItem bubble-r-container flex column group-item entry-9"
                                style={{
                                    justifyContent: "flex-start",
                                    boxSizing: "content-box",
                                    minHeight: 280,
                                    borderTop: "20px solid rgba(150, 150, 150, 0)",
                                    marginTop: "-20px",
                                    borderLeft: "20px solid rgba(150, 150, 150, 0)",
                                    marginLeft: "-20px",
                                    display: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container relative"
                                    style={{
                                        zIndex: 2,
                                        alignSelf: "center",
                                        minWidth: 280,
                                        maxWidth: 280,
                                        order: 1,
                                        minHeight: 0,
                                        height: 0,
                                        flexGrow: 1,
                                        width: 280,
                                        margin: "0px 0px 20px"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container flex column"
                                        style={{
                                            zIndex: 16,
                                            placeSelf: "end center",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "calc(100% - 0px)",
                                            height: "max-content",
                                            margin: 0,
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 2,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 1,
                                                minHeight: 17,
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
                                                    zIndex: 2,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 1,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 4,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 3,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    maxWidth: 80,
                                                    order: 3,
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
                                                zIndex: 3,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 2,
                                                minHeight: 17,
                                                height: "max-content",
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                width: "calc(100% - 0px)",
                                                margin: 0,
                                                justifyContent: "center"
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
                                                className="bubble-element Group bubble-r-container flex row"
                                                style={{
                                                    zIndex: 5,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: 0,
                                                    flexGrow: 1,
                                                    height: "max-content",
                                                    margin: 0,
                                                    justifyContent: "flex-end"
                                                }}
                                            >
                                                <div
                                                    className="bubble-element Image"
                                                    style={{
                                                        zIndex: 4,
                                                        alignSelf: "center",
                                                        minWidth: 0,
                                                        maxWidth: 24,
                                                        order: 1,
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
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 19,
                                            placeSelf: "start end",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "max-content",
                                            height: "max-content",
                                            margin: "10px 10px 0px 0px",
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <button
                                            className="bubble-element Button"
                                            style={{
                                                zIndex: 25,
                                                alignSelf: "flex-start",
                                                minWidth: 100,
                                                maxWidth: 140,
                                                order: 28,
                                                minHeight: 35,
                                                width: 100,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element GroupItem bubble-r-container flex column group-item entry-10"
                                style={{
                                    justifyContent: "flex-start",
                                    boxSizing: "content-box",
                                    minHeight: 280,
                                    borderTop: "20px solid rgba(150, 150, 150, 0)",
                                    marginTop: "-20px",
                                    borderLeftStyle: "none",
                                    display: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container relative"
                                    style={{
                                        zIndex: 2,
                                        alignSelf: "center",
                                        minWidth: 280,
                                        maxWidth: 280,
                                        order: 1,
                                        minHeight: 0,
                                        height: 0,
                                        flexGrow: 1,
                                        width: 280,
                                        margin: "0px 0px 20px"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container flex column"
                                        style={{
                                            zIndex: 16,
                                            placeSelf: "end center",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "calc(100% - 0px)",
                                            height: "max-content",
                                            margin: 0,
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 2,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 1,
                                                minHeight: 17,
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
                                                    zIndex: 2,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 1,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 4,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 3,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    maxWidth: 80,
                                                    order: 3,
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
                                                zIndex: 3,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 2,
                                                minHeight: 17,
                                                height: "max-content",
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                width: "calc(100% - 0px)",
                                                margin: 0,
                                                justifyContent: "center"
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
                                                className="bubble-element Group bubble-r-container flex row"
                                                style={{
                                                    zIndex: 5,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: 0,
                                                    flexGrow: 1,
                                                    height: "max-content",
                                                    margin: 0,
                                                    justifyContent: "flex-end"
                                                }}
                                            >
                                                <div
                                                    className="bubble-element Image"
                                                    style={{
                                                        zIndex: 4,
                                                        alignSelf: "center",
                                                        minWidth: 0,
                                                        maxWidth: 24,
                                                        order: 1,
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
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 19,
                                            placeSelf: "start end",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "max-content",
                                            height: "max-content",
                                            margin: "10px 10px 0px 0px",
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <button
                                            className="bubble-element Button"
                                            style={{
                                                zIndex: 25,
                                                alignSelf: "flex-start",
                                                minWidth: 100,
                                                maxWidth: 140,
                                                order: 28,
                                                minHeight: 35,
                                                width: 100,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 16,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 4,
                                minHeight: 1,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: 0,
                                whiteSpace: "pre-wrap",
                                overflow: "visible",
                                wordBreak: "break-word",
                                fontFamily: "Poppins",
                                fontSize: 16,
                                fontWeight: 500,
                                color: "rgb(0, 0, 0)",
                                letterSpacing: 1,
                                lineHeight: "1.5",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            No orders founded.
                        </div>
                    </div>
                    {/* Enabled Section 3 */}
                    <div
                        className="bubble-element Group bubble-r-container flex column"
                        id="section-3"
                        style={{
                            zIndex: 8,
                            alignSelf: "flex-start",
                            minWidth: 300,
                            order: 1,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 20px)",
                            margin: "0px 10px",
                            justifyContent: "flex-start",
                            overflow: "visible",
                            borderRadius: 0,
                            padding: "0px 0px 100px",
                            opacity: 1
                        }}
                    >
                        <div
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
                                margin: "0px 0px 30px",
                                whiteSpace: "pre-wrap",
                                overflow: "visible",
                                wordBreak: "break-word",
                                fontFamily: "Poppins",
                                fontSize: 28,
                                fontWeight: 600,
                                color: "rgb(0, 0, 0)",
                                lineHeight: 1,
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            Assinged orders
                        </div>
                        <div
                            className="bubble-element RepeatingGroup bubble-rg"
                            style={{
                                zIndex: 15,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 2,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 10px",
                                gap: 20,
                                gridAutoRows: "minmax(max-content, 280px)",
                                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                                gridAutoFlow: "row",
                                overflow: "auto",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            <div
                                className="bubble-element GroupItem bubble-r-container flex column group-item entry-1"
                                style={{
                                    justifyContent: "flex-start",
                                    boxSizing: "content-box",
                                    minHeight: 280,
                                    borderTopStyle: "none",
                                    borderLeftStyle: "none",
                                    display: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container relative"
                                    style={{
                                        zIndex: 2,
                                        alignSelf: "center",
                                        minWidth: 280,
                                        maxWidth: 280,
                                        order: 1,
                                        minHeight: 0,
                                        height: 0,
                                        flexGrow: 1,
                                        width: 280,
                                        margin: "0px 0px 20px"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container flex column"
                                        style={{
                                            zIndex: 16,
                                            placeSelf: "end center",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "calc(100% - 0px)",
                                            height: "max-content",
                                            margin: 0,
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 2,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 1,
                                                minHeight: 17,
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
                                                    zIndex: 2,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 1,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 4,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 3,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    maxWidth: 80,
                                                    order: 3,
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
                                                zIndex: 3,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 2,
                                                minHeight: 17,
                                                height: "max-content",
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                width: "calc(100% - 0px)",
                                                margin: 0,
                                                justifyContent: "center"
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
                                                className="bubble-element Group bubble-r-container flex row"
                                                style={{
                                                    zIndex: 5,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: 0,
                                                    flexGrow: 1,
                                                    height: "max-content",
                                                    margin: 0,
                                                    justifyContent: "flex-end"
                                                }}
                                            >
                                                <div
                                                    className="bubble-element Image"
                                                    style={{
                                                        zIndex: 4,
                                                        alignSelf: "center",
                                                        minWidth: 0,
                                                        maxWidth: 24,
                                                        order: 1,
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
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 19,
                                            placeSelf: "start end",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "max-content",
                                            height: "max-content",
                                            margin: "10px 10px 0px 0px",
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <button
                                            className="bubble-element Button"
                                            style={{
                                                zIndex: 25,
                                                alignSelf: "flex-start",
                                                minWidth: 100,
                                                maxWidth: 140,
                                                order: 28,
                                                minHeight: 35,
                                                width: 100,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element GroupItem bubble-r-container flex column group-item entry-2"
                                style={{
                                    justifyContent: "flex-start",
                                    boxSizing: "content-box",
                                    minHeight: 280,
                                    borderTopStyle: "none",
                                    borderLeft: "20px solid rgba(150, 150, 150, 0)",
                                    marginLeft: "-20px",
                                    display: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container relative"
                                    style={{
                                        zIndex: 2,
                                        alignSelf: "center",
                                        minWidth: 280,
                                        maxWidth: 280,
                                        order: 1,
                                        minHeight: 0,
                                        height: 0,
                                        flexGrow: 1,
                                        width: 280,
                                        margin: "0px 0px 20px"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container flex column"
                                        style={{
                                            zIndex: 16,
                                            placeSelf: "end center",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "calc(100% - 0px)",
                                            height: "max-content",
                                            margin: 0,
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 2,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 1,
                                                minHeight: 17,
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
                                                    zIndex: 2,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 1,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 4,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 3,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    maxWidth: 80,
                                                    order: 3,
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
                                                zIndex: 3,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 2,
                                                minHeight: 17,
                                                height: "max-content",
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                width: "calc(100% - 0px)",
                                                margin: 0,
                                                justifyContent: "center"
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
                                                className="bubble-element Group bubble-r-container flex row"
                                                style={{
                                                    zIndex: 5,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: 0,
                                                    flexGrow: 1,
                                                    height: "max-content",
                                                    margin: 0,
                                                    justifyContent: "flex-end"
                                                }}
                                            >
                                                <div
                                                    className="bubble-element Image"
                                                    style={{
                                                        zIndex: 4,
                                                        alignSelf: "center",
                                                        minWidth: 0,
                                                        maxWidth: 24,
                                                        order: 1,
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
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 19,
                                            placeSelf: "start end",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "max-content",
                                            height: "max-content",
                                            margin: "10px 10px 0px 0px",
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <button
                                            className="bubble-element Button"
                                            style={{
                                                zIndex: 25,
                                                alignSelf: "flex-start",
                                                minWidth: 100,
                                                maxWidth: 140,
                                                order: 28,
                                                minHeight: 35,
                                                width: 100,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element GroupItem bubble-r-container flex column group-item entry-3"
                                style={{
                                    justifyContent: "flex-start",
                                    boxSizing: "content-box",
                                    minHeight: 280,
                                    borderTopStyle: "none",
                                    borderLeft: "20px solid rgba(150, 150, 150, 0)",
                                    marginLeft: "-20px",
                                    display: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container relative"
                                    style={{
                                        zIndex: 2,
                                        alignSelf: "center",
                                        minWidth: 280,
                                        maxWidth: 280,
                                        order: 1,
                                        minHeight: 0,
                                        height: 0,
                                        flexGrow: 1,
                                        width: 280,
                                        margin: "0px 0px 20px"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container flex column"
                                        style={{
                                            zIndex: 16,
                                            placeSelf: "end center",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "calc(100% - 0px)",
                                            height: "max-content",
                                            margin: 0,
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 2,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 1,
                                                minHeight: 17,
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
                                                    zIndex: 2,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 1,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 4,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 3,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    maxWidth: 80,
                                                    order: 3,
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
                                                zIndex: 3,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 2,
                                                minHeight: 17,
                                                height: "max-content",
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                width: "calc(100% - 0px)",
                                                margin: 0,
                                                justifyContent: "center"
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
                                                className="bubble-element Group bubble-r-container flex row"
                                                style={{
                                                    zIndex: 5,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: 0,
                                                    flexGrow: 1,
                                                    height: "max-content",
                                                    margin: 0,
                                                    justifyContent: "flex-end"
                                                }}
                                            >
                                                <div
                                                    className="bubble-element Image"
                                                    style={{
                                                        zIndex: 4,
                                                        alignSelf: "center",
                                                        minWidth: 0,
                                                        maxWidth: 24,
                                                        order: 1,
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
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 19,
                                            placeSelf: "start end",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "max-content",
                                            height: "max-content",
                                            margin: "10px 10px 0px 0px",
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <button
                                            className="bubble-element Button"
                                            style={{
                                                zIndex: 25,
                                                alignSelf: "flex-start",
                                                minWidth: 100,
                                                maxWidth: 140,
                                                order: 28,
                                                minHeight: 35,
                                                width: 100,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element GroupItem bubble-r-container flex column group-item entry-4"
                                style={{
                                    justifyContent: "flex-start",
                                    boxSizing: "content-box",
                                    minHeight: 280,
                                    borderTop: "20px solid rgba(150, 150, 150, 0)",
                                    marginTop: "-20px",
                                    borderLeftStyle: "none",
                                    display: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container relative"
                                    style={{
                                        zIndex: 2,
                                        alignSelf: "center",
                                        minWidth: 280,
                                        maxWidth: 280,
                                        order: 1,
                                        minHeight: 0,
                                        height: 0,
                                        flexGrow: 1,
                                        width: 280,
                                        margin: "0px 0px 20px"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container flex column"
                                        style={{
                                            zIndex: 16,
                                            placeSelf: "end center",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "calc(100% - 0px)",
                                            height: "max-content",
                                            margin: 0,
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 2,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 1,
                                                minHeight: 17,
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
                                                    zIndex: 2,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 1,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 4,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 3,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    maxWidth: 80,
                                                    order: 3,
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
                                                zIndex: 3,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 2,
                                                minHeight: 17,
                                                height: "max-content",
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                width: "calc(100% - 0px)",
                                                margin: 0,
                                                justifyContent: "center"
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
                                                className="bubble-element Group bubble-r-container flex row"
                                                style={{
                                                    zIndex: 5,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: 0,
                                                    flexGrow: 1,
                                                    height: "max-content",
                                                    margin: 0,
                                                    justifyContent: "flex-end"
                                                }}
                                            >
                                                <div
                                                    className="bubble-element Image"
                                                    style={{
                                                        zIndex: 4,
                                                        alignSelf: "center",
                                                        minWidth: 0,
                                                        maxWidth: 24,
                                                        order: 1,
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
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 19,
                                            placeSelf: "start end",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "max-content",
                                            height: "max-content",
                                            margin: "10px 10px 0px 0px",
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <button
                                            className="bubble-element Button"
                                            style={{
                                                zIndex: 25,
                                                alignSelf: "flex-start",
                                                minWidth: 100,
                                                maxWidth: 140,
                                                order: 28,
                                                minHeight: 35,
                                                width: 100,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element GroupItem bubble-r-container flex column group-item entry-5"
                                style={{
                                    justifyContent: "flex-start",
                                    boxSizing: "content-box",
                                    minHeight: 280,
                                    borderTop: "20px solid rgba(150, 150, 150, 0)",
                                    marginTop: "-20px",
                                    borderLeft: "20px solid rgba(150, 150, 150, 0)",
                                    marginLeft: "-20px",
                                    display: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container relative"
                                    style={{
                                        zIndex: 2,
                                        alignSelf: "center",
                                        minWidth: 280,
                                        maxWidth: 280,
                                        order: 1,
                                        minHeight: 0,
                                        height: 0,
                                        flexGrow: 1,
                                        width: 280,
                                        margin: "0px 0px 20px"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container flex column"
                                        style={{
                                            zIndex: 16,
                                            placeSelf: "end center",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "calc(100% - 0px)",
                                            height: "max-content",
                                            margin: 0,
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 2,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 1,
                                                minHeight: 17,
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
                                                    zIndex: 2,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 1,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 4,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 3,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    maxWidth: 80,
                                                    order: 3,
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
                                                zIndex: 3,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 2,
                                                minHeight: 17,
                                                height: "max-content",
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                width: "calc(100% - 0px)",
                                                margin: 0,
                                                justifyContent: "center"
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
                                                className="bubble-element Group bubble-r-container flex row"
                                                style={{
                                                    zIndex: 5,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: 0,
                                                    flexGrow: 1,
                                                    height: "max-content",
                                                    margin: 0,
                                                    justifyContent: "flex-end"
                                                }}
                                            >
                                                <div
                                                    className="bubble-element Image"
                                                    style={{
                                                        zIndex: 4,
                                                        alignSelf: "center",
                                                        minWidth: 0,
                                                        maxWidth: 24,
                                                        order: 1,
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
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 19,
                                            placeSelf: "start end",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "max-content",
                                            height: "max-content",
                                            margin: "10px 10px 0px 0px",
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <button
                                            className="bubble-element Button"
                                            style={{
                                                zIndex: 25,
                                                alignSelf: "flex-start",
                                                minWidth: 100,
                                                maxWidth: 140,
                                                order: 28,
                                                minHeight: 35,
                                                width: 100,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element GroupItem bubble-r-container flex column group-item entry-6"
                                style={{
                                    justifyContent: "flex-start",
                                    boxSizing: "content-box",
                                    minHeight: 280,
                                    borderTop: "20px solid rgba(150, 150, 150, 0)",
                                    marginTop: "-20px",
                                    borderLeft: "20px solid rgba(150, 150, 150, 0)",
                                    marginLeft: "-20px",
                                    display: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container relative"
                                    style={{
                                        zIndex: 2,
                                        alignSelf: "center",
                                        minWidth: 280,
                                        maxWidth: 280,
                                        order: 1,
                                        minHeight: 0,
                                        height: 0,
                                        flexGrow: 1,
                                        width: 280,
                                        margin: "0px 0px 20px"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container flex column"
                                        style={{
                                            zIndex: 16,
                                            placeSelf: "end center",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "calc(100% - 0px)",
                                            height: "max-content",
                                            margin: 0,
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 2,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 1,
                                                minHeight: 17,
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
                                                    zIndex: 2,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 1,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 4,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 3,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    maxWidth: 80,
                                                    order: 3,
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
                                                zIndex: 3,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 2,
                                                minHeight: 17,
                                                height: "max-content",
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                width: "calc(100% - 0px)",
                                                margin: 0,
                                                justifyContent: "center"
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
                                                className="bubble-element Group bubble-r-container flex row"
                                                style={{
                                                    zIndex: 5,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: 0,
                                                    flexGrow: 1,
                                                    height: "max-content",
                                                    margin: 0,
                                                    justifyContent: "flex-end"
                                                }}
                                            >
                                                <div
                                                    className="bubble-element Image"
                                                    style={{
                                                        zIndex: 4,
                                                        alignSelf: "center",
                                                        minWidth: 0,
                                                        maxWidth: 24,
                                                        order: 1,
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
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 19,
                                            placeSelf: "start end",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "max-content",
                                            height: "max-content",
                                            margin: "10px 10px 0px 0px",
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <button
                                            className="bubble-element Button"
                                            style={{
                                                zIndex: 25,
                                                alignSelf: "flex-start",
                                                minWidth: 100,
                                                maxWidth: 140,
                                                order: 28,
                                                minHeight: 35,
                                                width: 100,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element GroupItem bubble-r-container flex column group-item entry-7"
                                style={{
                                    justifyContent: "flex-start",
                                    boxSizing: "content-box",
                                    minHeight: 280,
                                    borderTop: "20px solid rgba(150, 150, 150, 0)",
                                    marginTop: "-20px",
                                    borderLeftStyle: "none",
                                    display: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container relative"
                                    style={{
                                        zIndex: 2,
                                        alignSelf: "center",
                                        minWidth: 280,
                                        maxWidth: 280,
                                        order: 1,
                                        minHeight: 0,
                                        height: 0,
                                        flexGrow: 1,
                                        width: 280,
                                        margin: "0px 0px 20px"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container flex column"
                                        style={{
                                            zIndex: 16,
                                            placeSelf: "end center",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "calc(100% - 0px)",
                                            height: "max-content",
                                            margin: 0,
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 2,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 1,
                                                minHeight: 17,
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
                                                    zIndex: 2,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 1,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 4,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 3,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    maxWidth: 80,
                                                    order: 3,
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
                                                zIndex: 3,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 2,
                                                minHeight: 17,
                                                height: "max-content",
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                width: "calc(100% - 0px)",
                                                margin: 0,
                                                justifyContent: "center"
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
                                                className="bubble-element Group bubble-r-container flex row"
                                                style={{
                                                    zIndex: 5,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: 0,
                                                    flexGrow: 1,
                                                    height: "max-content",
                                                    margin: 0,
                                                    justifyContent: "flex-end"
                                                }}
                                            >
                                                <div
                                                    className="bubble-element Image"
                                                    style={{
                                                        zIndex: 4,
                                                        alignSelf: "center",
                                                        minWidth: 0,
                                                        maxWidth: 24,
                                                        order: 1,
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
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 19,
                                            placeSelf: "start end",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "max-content",
                                            height: "max-content",
                                            margin: "10px 10px 0px 0px",
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <button
                                            className="bubble-element Button"
                                            style={{
                                                zIndex: 25,
                                                alignSelf: "flex-start",
                                                minWidth: 100,
                                                maxWidth: 140,
                                                order: 28,
                                                minHeight: 35,
                                                width: 100,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element GroupItem bubble-r-container flex column group-item entry-8"
                                style={{
                                    justifyContent: "flex-start",
                                    boxSizing: "content-box",
                                    minHeight: 280,
                                    borderTop: "20px solid rgba(150, 150, 150, 0)",
                                    marginTop: "-20px",
                                    borderLeft: "20px solid rgba(150, 150, 150, 0)",
                                    marginLeft: "-20px",
                                    display: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container relative"
                                    style={{
                                        zIndex: 2,
                                        alignSelf: "center",
                                        minWidth: 280,
                                        maxWidth: 280,
                                        order: 1,
                                        minHeight: 0,
                                        height: 0,
                                        flexGrow: 1,
                                        width: 280,
                                        margin: "0px 0px 20px"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container flex column"
                                        style={{
                                            zIndex: 16,
                                            placeSelf: "end center",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "calc(100% - 0px)",
                                            height: "max-content",
                                            margin: 0,
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 2,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 1,
                                                minHeight: 17,
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
                                                    zIndex: 2,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 1,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 4,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 3,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    maxWidth: 80,
                                                    order: 3,
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
                                                zIndex: 3,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 2,
                                                minHeight: 17,
                                                height: "max-content",
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                width: "calc(100% - 0px)",
                                                margin: 0,
                                                justifyContent: "center"
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
                                                className="bubble-element Group bubble-r-container flex row"
                                                style={{
                                                    zIndex: 5,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: 0,
                                                    flexGrow: 1,
                                                    height: "max-content",
                                                    margin: 0,
                                                    justifyContent: "flex-end"
                                                }}
                                            >
                                                <div
                                                    className="bubble-element Image"
                                                    style={{
                                                        zIndex: 4,
                                                        alignSelf: "center",
                                                        minWidth: 0,
                                                        maxWidth: 24,
                                                        order: 1,
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
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 19,
                                            placeSelf: "start end",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "max-content",
                                            height: "max-content",
                                            margin: "10px 10px 0px 0px",
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <button
                                            className="bubble-element Button"
                                            style={{
                                                zIndex: 25,
                                                alignSelf: "flex-start",
                                                minWidth: 100,
                                                maxWidth: 140,
                                                order: 28,
                                                minHeight: 35,
                                                width: 100,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element GroupItem bubble-r-container flex column group-item entry-9"
                                style={{
                                    justifyContent: "flex-start",
                                    boxSizing: "content-box",
                                    minHeight: 280,
                                    borderTop: "20px solid rgba(150, 150, 150, 0)",
                                    marginTop: "-20px",
                                    borderLeft: "20px solid rgba(150, 150, 150, 0)",
                                    marginLeft: "-20px",
                                    display: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container relative"
                                    style={{
                                        zIndex: 2,
                                        alignSelf: "center",
                                        minWidth: 280,
                                        maxWidth: 280,
                                        order: 1,
                                        minHeight: 0,
                                        height: 0,
                                        flexGrow: 1,
                                        width: 280,
                                        margin: "0px 0px 20px"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container flex column"
                                        style={{
                                            zIndex: 16,
                                            placeSelf: "end center",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "calc(100% - 0px)",
                                            height: "max-content",
                                            margin: 0,
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 2,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 1,
                                                minHeight: 17,
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
                                                    zIndex: 2,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 1,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 4,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 3,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    maxWidth: 80,
                                                    order: 3,
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
                                                zIndex: 3,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 2,
                                                minHeight: 17,
                                                height: "max-content",
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                width: "calc(100% - 0px)",
                                                margin: 0,
                                                justifyContent: "center"
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
                                                className="bubble-element Group bubble-r-container flex row"
                                                style={{
                                                    zIndex: 5,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: 0,
                                                    flexGrow: 1,
                                                    height: "max-content",
                                                    margin: 0,
                                                    justifyContent: "flex-end"
                                                }}
                                            >
                                                <div
                                                    className="bubble-element Image"
                                                    style={{
                                                        zIndex: 4,
                                                        alignSelf: "center",
                                                        minWidth: 0,
                                                        maxWidth: 24,
                                                        order: 1,
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
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 19,
                                            placeSelf: "start end",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "max-content",
                                            height: "max-content",
                                            margin: "10px 10px 0px 0px",
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <button
                                            className="bubble-element Button"
                                            style={{
                                                zIndex: 25,
                                                alignSelf: "flex-start",
                                                minWidth: 100,
                                                maxWidth: 140,
                                                order: 28,
                                                minHeight: 35,
                                                width: 100,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element GroupItem bubble-r-container flex column group-item entry-10"
                                style={{
                                    justifyContent: "flex-start",
                                    boxSizing: "content-box",
                                    minHeight: 280,
                                    borderTop: "20px solid rgba(150, 150, 150, 0)",
                                    marginTop: "-20px",
                                    borderLeftStyle: "none",
                                    display: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container relative"
                                    style={{
                                        zIndex: 2,
                                        alignSelf: "center",
                                        minWidth: 280,
                                        maxWidth: 280,
                                        order: 1,
                                        minHeight: 0,
                                        height: 0,
                                        flexGrow: 1,
                                        width: 280,
                                        margin: "0px 0px 20px"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container flex column"
                                        style={{
                                            zIndex: 16,
                                            placeSelf: "end center",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "calc(100% - 0px)",
                                            height: "max-content",
                                            margin: 0,
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 2,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 1,
                                                minHeight: 17,
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
                                                    zIndex: 2,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 1,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 4,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 3,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    maxWidth: 80,
                                                    order: 3,
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
                                                zIndex: 3,
                                                alignSelf: "flex-end",
                                                minWidth: 0,
                                                order: 2,
                                                minHeight: 17,
                                                height: "max-content",
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                width: "calc(100% - 0px)",
                                                margin: 0,
                                                justifyContent: "center"
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
                                                className="bubble-element Group bubble-r-container flex row"
                                                style={{
                                                    zIndex: 5,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 2,
                                                    minHeight: 0,
                                                    width: 0,
                                                    flexGrow: 1,
                                                    height: "max-content",
                                                    margin: 0,
                                                    justifyContent: "flex-end"
                                                }}
                                            >
                                                <div
                                                    className="bubble-element Image"
                                                    style={{
                                                        zIndex: 4,
                                                        alignSelf: "center",
                                                        minWidth: 0,
                                                        maxWidth: 24,
                                                        order: 1,
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
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 19,
                                            placeSelf: "start end",
                                            minWidth: 0,
                                            minHeight: 0,
                                            width: "max-content",
                                            height: "max-content",
                                            margin: "10px 10px 0px 0px",
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <button
                                            className="bubble-element Button"
                                            style={{
                                                zIndex: 25,
                                                alignSelf: "flex-start",
                                                minWidth: 100,
                                                maxWidth: 140,
                                                order: 28,
                                                minHeight: 35,
                                                width: 100,
                                                flexGrow: 1,
                                                height: "max-content",
                                                margin: 0
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 16,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 4,
                                minHeight: 1,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: 0,
                                whiteSpace: "pre-wrap",
                                overflow: "visible",
                                wordBreak: "break-word",
                                fontFamily: "Poppins",
                                fontSize: 16,
                                fontWeight: 500,
                                color: "rgb(0, 0, 0)",
                                letterSpacing: 1,
                                lineHeight: "1.5",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            No orders founded.
                        </div>
                    </div>
                    {/* Enabled Section 4 */}
                    <div
                        className="bubble-element Group bubble-r-container flex column"
                        id="section-4"
                        style={{
                            zIndex: 3,
                            alignSelf: "flex-start",
                            minWidth: 300,
                            order: 4,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 20px)",
                            margin: "0px 10px",
                            justifyContent: "flex-start",
                            overflow: "visible",
                            borderRadius: 0,
                            padding: "0px 0px 100px",
                            opacity: 1
                        }}
                    >
                        <div
                            className="bubble-element Group bubble-r-container flex column"
                            style={{
                                zIndex: 24,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                maxWidth: 580,
                                order: 27,
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
                                    margin: "0px 0px 50px",
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 28,
                                    fontWeight: 600,
                                    color: "rgb(0, 0, 0)",
                                    lineHeight: 1,
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                Create Ad
                            </div>
                            <div
                                className="bubble-element Text"
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
                                    margin: "0px 0px 10px",
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: "rgb(0, 0, 0)",
                                    lineHeight: 1,
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                Insert order preview picture <font color="#ff0000">*</font>
                            </div>
                            <div
                                className="bubble-element Text"
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
                                    margin: "0px 0px 15px",
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 12,
                                    fontWeight: 400,
                                    color: "rgb(123, 123, 123)",
                                    lineHeight: 1,
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                File types supported: JPG, PNG, GIF, SVG. Max size: 50 MB
                            </div>
                            <div
                                className="bubble-element PictureInput clickable-element"
                                style={{
                                    zIndex: 5,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    maxWidth: 280,
                                    order: 4,
                                    minHeight: 280,
                                    height: 280,
                                    flexGrow: 1,
                                    width: "calc(100% - 0px)",
                                    margin: "0px 0px 30px",
                                    borderStyle: "solid",
                                    borderWidth: 2,
                                    borderColor: "rgb(237, 237, 237)",
                                    borderRadius: 20,
                                    opacity: 1
                                }}
                            >
                                <img
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        zIndex: 5,
                                        position: "absolute",
                                        objectFit: "contain",
                                        opacity: 0
                                    }}
                                />
                                <button
                                    className="button_for_file_uploader"
                                    style={{
                                        border: "none",
                                        backgroundColor: "rgba(255, 255, 255, 0)",
                                        zIndex: 4,
                                        position: "absolute",
                                        left: 0,
                                        top: 0,
                                        width: "100%",
                                        height: "100%",
                                        cursor: "pointer",
                                        opacity: 1,
                                        fontFamily: "Barlow",
                                        fontSize: 14,
                                        fontWeight: 500,
                                        color: "rgb(58, 77, 143)",
                                        textAlign: "center",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center center",
                                        backgroundSize: "cover",
                                        backgroundImage:
                                            'url("https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1648463175515x503048959543825900%2FGroup%25201000000914.png?w=384&h=&auto=compress&dpr=1&fit=max")'
                                    }}
                                />
                                <input
                                    id="input-preview"
                                    type="file"
                                    accept="image/*"
                                    style={{
                                        opacity: 0,
                                        position: "absolute",
                                        zIndex: 15,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        fontSize: 0,
                                        cursor: "pointer"
                                    }}
                                />
                            </div>
                            <div
                                className="bubble-element Text"
                                style={{
                                    zIndex: 6,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 5,
                                    minHeight: 0,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "0px 0px 10px",
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: "rgb(0, 0, 0)",
                                    lineHeight: 1,
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                Order Title <font color="#ff0000">*</font>
                            </div>
                            <input
                                id="input-title"
                                type="input"
                                className="bubble-element Input a1689834994986x14741"
                                placeholder="Set the name of Ad"
                                maxLength=""
                                style={{
                                    zIndex: 7,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 6,
                                    minHeight: 50,
                                    height: 50,
                                    flexGrow: 1,
                                    width: "calc(100% - 0px)",
                                    margin: "0px 0px 30px",
                                    border: "1px solid rgb(238, 238, 238)",
                                    backgroundColor: "transparent",
                                    borderRadius: 15,
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: "rgb(0, 0, 0)",
                                    padding: "0px 15px",
                                    opacity: 1
                                }}
                            />
                            <div
                                className="bubble-element Text"
                                style={{
                                    zIndex: 8,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 7,
                                    minHeight: 0,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "0px 0px 10px",
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: "rgb(0, 0, 0)",
                                    lineHeight: 1,
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                Your refferal link or code (only for online businesses)
                            </div>
                            <div
                                className="bubble-element Text"
                                style={{
                                    zIndex: 9,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    maxWidth: 580,
                                    order: 8,
                                    minHeight: 0,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "calc(100% - 0px)",
                                    margin: "0px 0px 10px",
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 12,
                                    fontWeight: 400,
                                    color: "rgb(123, 123, 123)",
                                    lineHeight: "1.5",
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                We will include a link to this URL on this item's detail page, so
                                that users can click to learn more about it. You are welcome to link
                                to your own webpage with more details.
                            </div>
                            <input
                                id="input-link"
                                type="input"
                                className="bubble-element Input a1689834994986x14741"
                                placeholder="Type here..."
                                maxLength=""
                                style={{
                                    zIndex: 10,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 9,
                                    minHeight: 50,
                                    height: 50,
                                    flexGrow: 1,
                                    width: "calc(100% - 0px)",
                                    margin: "0px 0px 30px",
                                    border: "1px solid rgb(238, 238, 238)",
                                    backgroundColor: "transparent",
                                    borderRadius: 15,
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: "rgb(0, 0, 0)",
                                    padding: "0px 15px",
                                    opacity: 1
                                }}
                            />
                            <div
                                className="bubble-element Text"
                                style={{
                                    zIndex: 11,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 10,
                                    minHeight: 0,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "0px 0px 10px",
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: "rgb(0, 0, 0)",
                                    lineHeight: 1,
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                Description
                            </div>
                            <div
                                className="bubble-element Text"
                                style={{
                                    zIndex: 11,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 11,
                                    minHeight: 0,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "calc(100% - 0px)",
                                    margin: "0px 0px 10px",
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 12,
                                    fontWeight: 400,
                                    color: "rgb(123, 123, 123)",
                                    lineHeight: "1.5",
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                The description will be included on the item's detail page
                                underneath its image.
                            </div>
                            <textarea
                                id="input-description"
                                className="bubble-element MultiLineInput a1689834994986x14741"
                                data-gramm_editor="false"
                                maxLength=""
                                placeholder="Provide a detailed description of your item."
                                style={{
                                    zIndex: 12,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 12,
                                    minHeight: 150,
                                    height: 150,
                                    flexGrow: 1,
                                    width: "calc(100% - 0px)",
                                    margin: "0px 0px 30px",
                                    border: "1px solid rgb(238, 238, 238)",
                                    backgroundColor: "transparent",
                                    borderRadius: 15,
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: "rgb(0, 0, 0)",
                                    lineHeight: "1.5",
                                    padding: "15px 18px",
                                    opacity: 1
                                }}
                                defaultValue={""}
                            />
                            <div
                                className="bubble-element Text"
                                style={{
                                    zIndex: 23,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 13,
                                    minHeight: 0,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "0px 0px 10px",
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: "rgb(0, 0, 0)",
                                    lineHeight: 1,
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                I am looking for: <font color="#ff0000">*</font>
                            </div>
                            <select
                                id="input-look-for"
                                className="bubble-element Dropdown"
                                style={{
                                    zIndex: 22,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 14,
                                    minHeight: 49,
                                    height: 49,
                                    flexGrow: 1,
                                    width: "calc(100% - 0px)",
                                    margin: "0px 0px 30px",
                                    display: "block",
                                    border: "1px solid rgb(237, 237, 237)",
                                    backgroundColor: "transparent",
                                    color: "rgb(153, 153, 153)",
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    borderRadius: 15,
                                    letterSpacing: "0.3px",
                                    padding: "0px 15px 0px 5px",
                                    opacity: 1
                                }}
                            >
                                <option
                                    className="dropdown-choice dropdown-placeholder"
                                    value='"PLACEHOLDER_1427118222253"'
                                    style={{color: "rgb(0, 0, 0)", display: "none"}}
                                >
                                    Choose an option...
                                </option>
                                <option
                                    className="dropdown-choice"
                                    value='"1348695171700984260__LOOKUP__1655914521354x993542613203760600"'
                                    style={{color: "rgb(0, 0, 0)"}}
                                >
                                    Blogger
                                </option>
                                <option
                                    className="dropdown-choice"
                                    value='"1348695171700984260__LOOKUP__1655914531378x292482317519252160"'
                                    style={{color: "rgb(0, 0, 0)"}}
                                >
                                    Advertiser
                                </option>
                            </select>
                            <div
                                className="bubble-element Text"
                                style={{
                                    zIndex: 24,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 17,
                                    minHeight: 0,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "0px 0px 10px",
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: "rgb(0, 0, 0)",
                                    lineHeight: 1,
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                Categories <font color="#ff0000">*</font>
                            </div>
                            <select
                                id="input-category"
                                className="bubble-element Dropdown"
                                style={{
                                    zIndex: 24,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 18,
                                    minHeight: 49,
                                    height: 49,
                                    flexGrow: 1,
                                    width: "calc(100% - 0px)",
                                    margin: "0px 0px 30px",
                                    display: "block",
                                    border: "1px solid rgb(237, 237, 237)",
                                    backgroundColor: "transparent",
                                    color: "rgb(153, 153, 153)",
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    borderRadius: 15,
                                    letterSpacing: "0.3px",
                                    padding: "0px 15px 0px 5px",
                                    opacity: 1
                                }}
                            >
                                <option
                                    className="dropdown-choice dropdown-placeholder"
                                    value='"PLACEHOLDER_1427118222253"'
                                    style={{color: "rgb(0, 0, 0)", display: "none"}}
                                >
                                    Choose an option...
                                </option>
                                <option
                                    className="dropdown-choice"
                                    value='"1348695171700984260__LOOKUP__1655915048958x774413879836322000"'
                                    style={{color: "rgb(0, 0, 0)"}}
                                >
                                    Fashion
                                </option>
                                <option
                                    className="dropdown-choice"
                                    value='"1348695171700984260__LOOKUP__1655915103865x604125479111830300"'
                                    style={{color: "rgb(0, 0, 0)"}}
                                >
                                    Lifestyle
                                </option>
                                <option
                                    className="dropdown-choice"
                                    value='"1348695171700984260__LOOKUP__1655915114633x686655037183082900"'
                                    style={{color: "rgb(0, 0, 0)"}}
                                >
                                    Beauty
                                </option>
                                <option
                                    className="dropdown-choice"
                                    value='"1348695171700984260__LOOKUP__1655915125148x581360832021081500"'
                                    style={{color: "rgb(0, 0, 0)"}}
                                >
                                    Music
                                </option>
                                <option
                                    className="dropdown-choice"
                                    value='"1348695171700984260__LOOKUP__1655915152856x133988939524297700"'
                                    style={{color: "rgb(0, 0, 0)"}}
                                >
                                    Crypto
                                </option>
                                <option
                                    className="dropdown-choice"
                                    value='"1348695171700984260__LOOKUP__1655915161895x165208841614873820"'
                                    style={{color: "rgb(0, 0, 0)"}}
                                >
                                    Other
                                </option>
                            </select>
                            <div
                                className="bubble-element Text"
                                style={{
                                    zIndex: 13,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 19,
                                    minHeight: 0,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "0px 0px 10px",
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: "rgb(0, 0, 0)",
                                    lineHeight: 1,
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                Currency
                            </div>
                            <div
                                className="bubble-element Group bubble-r-container flex row clickable-element"
                                style={{
                                    zIndex: 14,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 20,
                                    minHeight: 50,
                                    height: 50,
                                    flexGrow: 1,
                                    width: "calc(100% - 0px)",
                                    margin: "0px 0px 30px",
                                    justifyContent: "space-between",
                                    overflow: "visible",
                                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                                    borderStyle: "solid",
                                    borderWidth: 1,
                                    borderColor: "rgb(238, 238, 238)",
                                    borderRadius: 15,
                                    opacity: 1,
                                    cursor: "pointer"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container flex row"
                                    style={{
                                        zIndex: 2,
                                        alignSelf: "center",
                                        minWidth: 0,
                                        order: 1,
                                        minHeight: 30,
                                        width: "max-content",
                                        flexGrow: 0,
                                        height: "max-content",
                                        margin: "0px 0px 0px 20px",
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
                                            alignSelf: "center",
                                            minWidth: 24,
                                            maxWidth: 24,
                                            order: 1,
                                            minHeight: 24,
                                            maxHeight: 24,
                                            width: 24,
                                            flexGrow: 1,
                                            height: 24,
                                            margin: 0,
                                            overflow: "visible",
                                            backgroundColor: "rgba(255, 255, 255, 0)",
                                            borderStyle: "solid",
                                            borderWidth: 1,
                                            borderColor: "rgb(238, 238, 238)",
                                            borderRadius: 20,
                                            padding: 0,
                                            opacity: 1,
                                            backgroundImage:
                                                'url("https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1657633985492x211575392420328060%2F25228.png?w=32&h=32&auto=compress&fit=crop&dpr=2")',
                                            backgroundSize: "cover",
                                            backgroundRepeat: "no-repeat",
                                            backgroundAttachment: "initial",
                                            backgroundOrigin: "initial",
                                            backgroundClip: "initial"
                                        }}
                                    />
                                    <div
                                        className="bubble-element Text"
                                        style={{
                                            zIndex: 3,
                                            alignSelf: "center",
                                            minWidth: 158,
                                            order: 2,
                                            minHeight: 0,
                                            maxHeight: 30,
                                            width: 158,
                                            flexGrow: 1,
                                            height: "max-content",
                                            margin: "0px 0px 0px 10px",
                                            whiteSpace: "pre-wrap",
                                            overflow: "visible",
                                            wordBreak: "break-word",
                                            fontFamily: "Poppins",
                                            fontSize: 16,
                                            fontWeight: 500,
                                            color: "rgb(123, 123, 123)",
                                            letterSpacing: 1,
                                            lineHeight: "1.5",
                                            borderRadius: 0,
                                            opacity: 1
                                        }}
                                    >
                                        <div>USD</div>
                                    </div>
                                </div>
                                <div
                                    className="bubble-element Group bubble-r-container fixed"
                                    style={{
                                        zIndex: 3,
                                        alignSelf: "center",
                                        minWidth: 24,
                                        maxWidth: 24,
                                        order: 2,
                                        minHeight: 24,
                                        maxHeight: 24,
                                        width: 24,
                                        flexGrow: 1,
                                        height: 24,
                                        margin: "0px 10px 0px 0px",
                                        overflow: "visible",
                                        borderRadius: 0,
                                        padding: 0,
                                        opacity: 1,
                                        backgroundColor: "rgba(255, 255, 255, 0)",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                        backgroundImage:
                                            'url("https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647516484530x217959983199276220/Carret%20Down.svg")'
                                    }}
                                />
                            </div>
                            <div
                                className="bubble-element Text"
                                style={{
                                    zIndex: 15,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 21,
                                    minHeight: 0,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "0px 0px 10px",
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: "rgb(0, 0, 0)",
                                    lineHeight: 1,
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                Price <font color="#ff0000">*</font>
                            </div>
                            <input
                                id="input-price"
                                type="input"
                                className="bubble-element Input a1689834994986x14741"
                                style={{
                                    zIndex: 16,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 22,
                                    minHeight: 50,
                                    maxHeight: 50,
                                    height: 50,
                                    flexGrow: 1,
                                    width: "calc(100% - 0px)",
                                    margin: "0px 0px 30px",
                                    border: "1px solid rgb(238, 238, 238)",
                                    backgroundColor: "transparent",
                                    borderRadius: 15,
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: "rgb(0, 0, 0)",
                                    padding: "0px 15px",
                                    opacity: 1
                                }}
                                placeholder="Type here..."
                                inputMode="text"
                            />
                            <button
                                className="bubble-element Button clickable-element"
                                style={{
                                    zIndex: 20,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    maxWidth: 140,
                                    order: 23,
                                    minHeight: 46,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "calc(100% - 0px)",
                                    margin: 0,
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
                                onClick="CreateOrder()"
                            >
                                Create
                            </button>
                        </div>
                    </div>
                    {/* Enabled Section 5 */}
                    <div id="section-5">
                        <div
                            className="bubble-element Group bubble-r-container flex column"
                            style={{
                                zIndex: 4,
                                alignSelf: "flex-start",
                                minWidth: 320,
                                order: 5,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: 0,
                                justifyContent: "flex-start",
                                overflow: "visible",
                                borderRadius: 0,
                                padding: "0px 0px 100px",
                                opacity: 1
                            }}
                        >
                            <div
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
                                    margin: "0px 0px 50px 10px",
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 28,
                                    fontWeight: 600,
                                    color: "rgb(0, 0, 0)",
                                    lineHeight: "1.5",
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                Profile Settings
                            </div>
                            <div
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    zIndex: 31,
                                    alignSelf: "center",
                                    minWidth: 320,
                                    order: 2,
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
                                    className="bubble-element Group bubble-r-container flex column"
                                    style={{
                                        zIndex: 29,
                                        alignSelf: "flex-start",
                                        minWidth: 300,
                                        maxWidth: 380,
                                        order: 1,
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
                                        className="bubble-element Text"
                                        style={{
                                            zIndex: 21,
                                            alignSelf: "flex-start",
                                            minWidth: 0,
                                            order: 2,
                                            minHeight: 0,
                                            height: "max-content",
                                            flexGrow: 0,
                                            flexShrink: 0,
                                            width: "auto",
                                            margin: "0px 0px 10px",
                                            whiteSpace: "pre-wrap",
                                            overflow: "visible",
                                            wordBreak: "break-word",
                                            fontFamily: "Poppins",
                                            fontSize: 14,
                                            fontWeight: 500,
                                            color: "rgb(0, 0, 0)",
                                            lineHeight: 1,
                                            borderRadius: 0,
                                            opacity: 1
                                        }}
                                    >
                                        Username <font color="#ff0000">*</font>
                                    </div>
                                    <input
                                        id="input-username"
                                        type="input"
                                        className="bubble-element Input a1689834994986x14741"
                                        placeholder="Username"
                                        maxLength=""
                                        style={{
                                            zIndex: 21,
                                            alignSelf: "flex-start",
                                            minWidth: 0,
                                            order: 3,
                                            minHeight: 50,
                                            height: 50,
                                            flexGrow: 1,
                                            width: "calc(100% - 0px)",
                                            margin: "0px 0px 30px",
                                            border: "1px solid rgb(238, 238, 238)",
                                            backgroundColor: "transparent",
                                            borderRadius: 15,
                                            fontFamily: "Poppins",
                                            fontSize: 14,
                                            fontWeight: 500,
                                            color: "rgb(0, 0, 0)",
                                            padding: "0px 15px",
                                            opacity: 1
                                        }}
                                    />
                                    <div
                                        className="bubble-element Text"
                                        style={{
                                            zIndex: 21,
                                            alignSelf: "flex-start",
                                            minWidth: 0,
                                            order: 4,
                                            minHeight: 0,
                                            height: "max-content",
                                            flexGrow: 0,
                                            flexShrink: 0,
                                            width: "auto",
                                            margin: "0px 0px 10px",
                                            whiteSpace: "pre-wrap",
                                            overflow: "visible",
                                            wordBreak: "break-word",
                                            fontFamily: "Poppins",
                                            fontSize: 14,
                                            fontWeight: 500,
                                            color: "rgb(0, 0, 0)",
                                            lineHeight: 1,
                                            borderRadius: 0,
                                            opacity: 1
                                        }}
                                    >
                                        Bio
                                    </div>
                                    <textarea
                                        id="input-bio"
                                        className="bubble-element MultiLineInput a1689834994986x14741"
                                        data-gramm_editor="false"
                                        maxLength=""
                                        placeholder="Tell the world your story!"
                                        style={{
                                            zIndex: 21,
                                            alignSelf: "flex-start",
                                            minWidth: 0,
                                            maxWidth: 380,
                                            order: 5,
                                            minHeight: 100,
                                            height: 100,
                                            flexGrow: 1,
                                            width: "calc(100% - 0px)",
                                            margin: "0px 0px 30px",
                                            border: "1px solid rgb(238, 238, 238)",
                                            backgroundColor: "transparent",
                                            borderRadius: 15,
                                            fontFamily: "Poppins",
                                            fontSize: 14,
                                            fontWeight: 500,
                                            color: "rgb(0, 0, 0)",
                                            lineHeight: "1.5",
                                            padding: "15px 18px",
                                            opacity: 1
                                        }}
                                        defaultValue={""}
                                    />
                                    <div
                                        className="bubble-element Text"
                                        style={{
                                            zIndex: 32,
                                            alignSelf: "flex-start",
                                            minWidth: 0,
                                            order: 6,
                                            minHeight: 0,
                                            height: "max-content",
                                            flexGrow: 0,
                                            flexShrink: 0,
                                            width: "auto",
                                            margin: "0px 0px 10px",
                                            whiteSpace: "pre-wrap",
                                            overflow: "visible",
                                            wordBreak: "break-word",
                                            fontFamily: "Poppins",
                                            fontSize: 14,
                                            fontWeight: 500,
                                            color: "rgb(0, 0, 0)",
                                            lineHeight: 1,
                                            borderRadius: 0,
                                            opacity: 1
                                        }}
                                    >
                                        Email Address <font color="#ff0000">*</font>
                                    </div>
                                    <input
                                        type="input"
                                        className="bubble-element Input a1689834994986x14741"
                                        placeholder="Email"
                                        maxLength=""
                                        disabled=""
                                        style={{
                                            zIndex: 32,
                                            alignSelf: "flex-start",
                                            minWidth: 0,
                                            order: 7,
                                            minHeight: 50,
                                            height: 50,
                                            flexGrow: 1,
                                            width: "calc(100% - 0px)",
                                            margin: "0px 0px 30px",
                                            border: "1px solid rgb(238, 238, 238)",
                                            backgroundColor: "rgb(235, 235, 235)",
                                            borderRadius: 15,
                                            fontFamily: "Poppins",
                                            fontSize: 14,
                                            fontWeight: 500,
                                            color: "rgb(0, 0, 0)",
                                            padding: "0px 15px",
                                            opacity: 1
                                        }}
                                    />
                                    <div
                                        className="bubble-element Text"
                                        style={{
                                            zIndex: 24,
                                            alignSelf: "flex-start",
                                            minWidth: 0,
                                            order: 8,
                                            minHeight: 0,
                                            height: "max-content",
                                            flexGrow: 0,
                                            flexShrink: 0,
                                            width: "auto",
                                            margin: "0px 0px 10px",
                                            whiteSpace: "pre-wrap",
                                            overflow: "visible",
                                            wordBreak: "break-word",
                                            fontFamily: "Poppins",
                                            fontSize: 14,
                                            fontWeight: 500,
                                            color: "rgb(0, 0, 0)",
                                            lineHeight: 1,
                                            borderRadius: 0,
                                            opacity: 1
                                        }}
                                    >
                                        Social media or product links
                                    </div>
                                    <div
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 30,
                                            alignSelf: "flex-start",
                                            minWidth: 0,
                                            order: 9,
                                            minHeight: 0,
                                            height: "max-content",
                                            flexGrow: 0,
                                            flexShrink: 0,
                                            width: "calc(100% - 0px)",
                                            margin: "0px 0px 30px",
                                            justifyContent: "flex-start",
                                            overflow: "visible",
                                            borderStyle: "solid",
                                            borderWidth: 1,
                                            borderColor: "rgb(238, 238, 238)",
                                            borderRadius: 15,
                                            opacity: 1
                                        }}
                                    >
                                        <input
                                            type="input"
                                            className="bubble-element Input a1689834994986x14741"
                                            placeholder="Enter link"
                                            maxLength=""
                                            style={{
                                                zIndex: 28,
                                                alignSelf: "flex-start",
                                                minWidth: 0,
                                                order: 1,
                                                minHeight: 50,
                                                width: 0,
                                                flexGrow: 1,
                                                height: 50,
                                                margin: 0,
                                                border: "none",
                                                backgroundColor: "transparent",
                                                borderRadius: 0,
                                                fontFamily: "Poppins",
                                                fontSize: 14,
                                                fontWeight: 500,
                                                color: "rgb(0, 0, 0)",
                                                padding: "0px 15px",
                                                opacity: 1
                                            }}
                                        />
                                        <div
                                            className="bubble-element CustomElement bubble-r-container flex row clickable-element"
                                            style={{
                                                zIndex: 29,
                                                alignSelf: "center",
                                                minWidth: 0,
                                                maxWidth: 48,
                                                order: 2,
                                                minHeight: 24,
                                                maxHeight: 24,
                                                width: 0,
                                                flexGrow: 1,
                                                height: 24,
                                                margin: "0px 5px 0px 0px",
                                                justifyContent: "center",
                                                overflow: "visible",
                                                borderRadius: 0,
                                                opacity: 1,
                                                cursor: "pointer"
                                            }}
                                        >
                                            <div
                                                className="bubble-element Group bubble-r-container fixed"
                                                style={{
                                                    zIndex: 6,
                                                    alignSelf: "flex-start",
                                                    minWidth: 24,
                                                    maxWidth: 24,
                                                    order: 1,
                                                    minHeight: 24,
                                                    maxHeight: 24,
                                                    width: 24,
                                                    flexGrow: 1,
                                                    height: 24,
                                                    margin: 0,
                                                    overflow: "visible",
                                                    borderRadius: 0,
                                                    padding: 0,
                                                    opacity: 1,
                                                    backgroundColor: "rgba(255, 255, 255, 0)",
                                                    backgroundRepeat: "no-repeat",
                                                    backgroundSize: "cover",
                                                    backgroundImage:
                                                        'url("https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647536585250x463795952349799200/Property%3Dfilled%2C%20Network%3Dgoogle.svg")'
                                                }}
                                            />
                                            <div
                                                className="bubble-element Group bubble-r-container flex row"
                                                style={{
                                                    zIndex: 6,
                                                    alignSelf: "flex-start",
                                                    minWidth: 24,
                                                    order: 2,
                                                    minHeight: 24,
                                                    width: "max-content",
                                                    flexGrow: 0,
                                                    height: "max-content",
                                                    margin: 0,
                                                    justifyContent: "flex-start",
                                                    overflow: "visible",
                                                    borderRadius: 0,
                                                    opacity: 1,
                                                    backgroundColor: "rgba(255, 255, 255, 0)",
                                                    backgroundRepeat: "no-repeat",
                                                    backgroundSize: "cover",
                                                    backgroundImage:
                                                        'url("https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1644856829814x920083039750816600/Carret%20Down.svg")'
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="bubble-element RepeatingGroup bubble-rg"
                                        style={{
                                            zIndex: 23,
                                            alignSelf: "flex-start",
                                            minWidth: 0,
                                            order: 11,
                                            minHeight: 0,
                                            height: "max-content",
                                            flexGrow: 0,
                                            flexShrink: 0,
                                            width: "calc(100% - 0px)",
                                            margin: "0px 0px 30px",
                                            gap: 0,
                                            gridAutoRows: "minmax(max-content, 0px)",
                                            gridTemplateColumns: "repeat(1, minmax(0px, 1fr))",
                                            gridAutoFlow: "row",
                                            overflow: "auto",
                                            borderStyle: "solid",
                                            borderWidth: 1,
                                            borderColor: "rgb(238, 238, 238)",
                                            borderRadius: 15,
                                            opacity: 1
                                        }}
                                    >
                                        <div
                                            className="bubble-element GroupItem bubble-r-container flex row group-item entry-1"
                                            style={{
                                                justifyContent: "flex-start",
                                                boxSizing: "content-box",
                                                minHeight: 0,
                                                borderTopStyle: "none",
                                                borderLeftStyle: "none"
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
                                                    width: 0,
                                                    flexGrow: 1,
                                                    height: "max-content",
                                                    margin: 0,
                                                    justifyContent: "flex-start",
                                                    overflow: "visible",
                                                    borderRadius: 0,
                                                    padding: 13,
                                                    opacity: 1
                                                }}
                                            >
                                                <div
                                                    className="bubble-element Image"
                                                    style={{
                                                        zIndex: 3,
                                                        alignSelf: "center",
                                                        minWidth: 0,
                                                        maxWidth: 24,
                                                        order: 2,
                                                        width: 0,
                                                        flexGrow: 1,
                                                        height: "max-content",
                                                        margin: 0,
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
                                                    <div
                                                        style={{position: "relative", paddingTop: "100%"}}
                                                    />
                                                </div>
                                                <div
                                                    className="bubble-element Text"
                                                    style={{
                                                        zIndex: 2,
                                                        alignSelf: "center",
                                                        minWidth: 0,
                                                        order: 3,
                                                        minHeight: 32,
                                                        width: 0,
                                                        flexGrow: 1,
                                                        height: "max-content",
                                                        margin: "0px 0px 0px 10px",
                                                        whiteSpace: "pre-wrap",
                                                        overflow: "visible",
                                                        fontFamily: "Poppins",
                                                        fontSize: 14,
                                                        fontWeight: 500,
                                                        color: "rgb(33, 33, 33)",
                                                        letterSpacing: "0.1px",
                                                        lineHeight: "1.5",
                                                        padding: "5px 1px",
                                                        borderRadius: 0,
                                                        opacity: 1,
                                                        wordBreak: "break-word"
                                                    }}
                                                >
                                                    birdhouse.technology
                                                </div>
                                                <div
                                                    className="bubble-element Group bubble-r-container relative clickable-element"
                                                    style={{
                                                        zIndex: 4,
                                                        alignSelf: "center",
                                                        minWidth: 24,
                                                        maxWidth: 24,
                                                        order: 4,
                                                        minHeight: 24,
                                                        maxHeight: 24,
                                                        width: 24,
                                                        flexGrow: 1,
                                                        height: 24,
                                                        margin: 0,
                                                        overflow: "visible",
                                                        backgroundColor: "rgb(255, 255, 255)",
                                                        borderRadius: 0,
                                                        opacity: 1,
                                                        cursor: "pointer"
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
                                                            margin: 0,
                                                            borderRadius: 0,
                                                            opacity: 1
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
                                        </div>
                                        <div
                                            className="bubble-element GroupItem bubble-r-container flex row group-item entry-2"
                                            style={{
                                                justifyContent: "flex-start",
                                                boxSizing: "content-box",
                                                minHeight: 0,
                                                borderTop: "0px none rgba(238, 238, 238, 0.5)",
                                                marginTop: 0,
                                                borderLeftStyle: "none",
                                                display: "none"
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
                                                    width: 0,
                                                    flexGrow: 1,
                                                    height: "max-content",
                                                    margin: 0,
                                                    justifyContent: "flex-start"
                                                }}
                                            >
                                                <div
                                                    className="bubble-element Image"
                                                    style={{
                                                        zIndex: 3,
                                                        alignSelf: "center",
                                                        minWidth: 0,
                                                        maxWidth: 24,
                                                        order: 2,
                                                        width: 0,
                                                        flexGrow: 1,
                                                        height: "max-content",
                                                        margin: 0
                                                    }}
                                                />
                                                <div
                                                    className="bubble-element Text"
                                                    style={{
                                                        zIndex: 2,
                                                        alignSelf: "center",
                                                        minWidth: 0,
                                                        order: 3,
                                                        minHeight: 32,
                                                        width: 0,
                                                        flexGrow: 1,
                                                        height: "max-content",
                                                        margin: "0px 0px 0px 10px"
                                                    }}
                                                />
                                                <div
                                                    className="bubble-element Group bubble-r-container relative"
                                                    style={{
                                                        zIndex: 4,
                                                        alignSelf: "center",
                                                        minWidth: 24,
                                                        maxWidth: 24,
                                                        order: 4,
                                                        minHeight: 24,
                                                        maxHeight: 24,
                                                        width: 24,
                                                        flexGrow: 1,
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
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="bubble-element Group bubble-r-container flex column"
                                    style={{
                                        zIndex: 30,
                                        alignSelf: "flex-start",
                                        minWidth: 300,
                                        maxWidth: 500,
                                        order: 2,
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
                                        className="bubble-element Text"
                                        style={{
                                            zIndex: 33,
                                            alignSelf: "flex-start",
                                            minWidth: 0,
                                            order: 1,
                                            minHeight: 0,
                                            height: "max-content",
                                            flexGrow: 0,
                                            flexShrink: 0,
                                            width: "auto",
                                            margin: "0px 0px 10px",
                                            whiteSpace: "pre-wrap",
                                            overflow: "visible",
                                            wordBreak: "break-word",
                                            fontFamily: "Poppins",
                                            fontSize: 14,
                                            fontWeight: 500,
                                            color: "rgb(0, 0, 0)",
                                            lineHeight: 1,
                                            borderRadius: 0,
                                            opacity: 1
                                        }}
                                    >
                                        Profile Image
                                    </div>
                                    <div
                                        className="bubble-element PictureInput clickable-element"
                                        style={{
                                            zIndex: 24,
                                            alignSelf: "flex-start",
                                            minWidth: 0,
                                            maxWidth: 150,
                                            order: 2,
                                            minHeight: 150,
                                            height: 150,
                                            flexGrow: 1,
                                            width: "calc(100% - 0px)",
                                            margin: "0px 0px 30px",
                                            borderStyle: "dotted",
                                            borderWidth: 1,
                                            borderColor: "rgb(237, 237, 237)",
                                            borderRadius: 20,
                                            opacity: 1
                                        }}
                                    >
                                        <img
                                            src="https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647552379244x207864892994998200/Group%20462.svg"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                zIndex: 5,
                                                position: "absolute",
                                                objectFit: "contain",
                                                opacity: 1
                                            }}
                                        />
                                        <button
                                            className="button_for_file_uploader"
                                            style={{
                                                border: "none",
                                                backgroundColor: "rgba(255, 255, 255, 0.63)",
                                                zIndex: 4,
                                                position: "absolute",
                                                left: 0,
                                                top: 0,
                                                width: "100%",
                                                height: "100%",
                                                padding: 0,
                                                cursor: "pointer",
                                                opacity: 0,
                                                fontFamily: "Barlow",
                                                fontSize: 14,
                                                fontWeight: 500,
                                                color: "rgb(58, 77, 143)",
                                                textAlign: "center"
                                            }}
                                        />
                                        <input
                                            type="file"
                                            accept="image/*"
                                            title="https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647552379244x207864892994998200/Group%20462.svg"
                                            style={{
                                                opacity: 0,
                                                position: "absolute",
                                                zIndex: 15,
                                                left: 0,
                                                width: "100%",
                                                height: "100%",
                                                fontSize: 0,
                                                cursor: "pointer"
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="bubble-element Text"
                                        style={{
                                            zIndex: 34,
                                            alignSelf: "flex-start",
                                            minWidth: 0,
                                            order: 3,
                                            minHeight: 0,
                                            height: "max-content",
                                            flexGrow: 0,
                                            flexShrink: 0,
                                            width: "auto",
                                            margin: "0px 0px 10px",
                                            whiteSpace: "pre-wrap",
                                            overflow: "visible",
                                            wordBreak: "break-word",
                                            fontFamily: "Poppins",
                                            fontSize: 14,
                                            fontWeight: 500,
                                            color: "rgb(0, 0, 0)",
                                            lineHeight: 1,
                                            borderRadius: 0,
                                            opacity: 1
                                        }}
                                    >
                                        Profile Banner
                                    </div>
                                    <div
                                        className="bubble-element Text"
                                        style={{
                                            zIndex: 24,
                                            alignSelf: "flex-start",
                                            minWidth: 0,
                                            order: 4,
                                            minHeight: 0,
                                            height: "max-content",
                                            flexGrow: 0,
                                            flexShrink: 0,
                                            width: "calc(100% - 0px)",
                                            margin: "0px 0px 10px",
                                            whiteSpace: "pre-wrap",
                                            overflow: "visible",
                                            wordBreak: "break-word",
                                            fontFamily: "Poppins",
                                            fontSize: 12,
                                            fontWeight: 400,
                                            color: "rgb(123, 123, 123)",
                                            lineHeight: "1.5",
                                            borderRadius: 0,
                                            opacity: 1
                                        }}
                                    >
                                        Recomendable size is 1440 x 250.
                                    </div>
                                    <div
                                        className="bubble-element PictureInput clickable-element"
                                        style={{
                                            zIndex: 34,
                                            alignSelf: "flex-start",
                                            minWidth: 0,
                                            order: 22,
                                            minHeight: 85,
                                            height: 85,
                                            flexGrow: 1,
                                            width: "calc(100% - 0px)",
                                            margin: "0px 0px 30px",
                                            borderStyle: "solid",
                                            borderWidth: 1,
                                            borderColor: "rgb(237, 237, 237)",
                                            borderRadius: 20,
                                            opacity: 1
                                        }}
                                    >
                                        <img
                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                zIndex: 5,
                                                position: "absolute",
                                                objectFit: "contain",
                                                opacity: 0
                                            }}
                                        />
                                        <button
                                            className="button_for_file_uploader"
                                            style={{
                                                border: "none",
                                                backgroundColor: "rgba(255, 255, 255, 0.63)",
                                                zIndex: 4,
                                                position: "absolute",
                                                left: 0,
                                                top: 0,
                                                width: "100%",
                                                height: "100%",
                                                padding: 0,
                                                cursor: "pointer",
                                                opacity: 1,
                                                fontFamily: "Barlow",
                                                fontSize: 14,
                                                fontWeight: 500,
                                                color: "rgb(58, 77, 143)",
                                                textAlign: "center",
                                                backgroundRepeat: "no-repeat",
                                                backgroundPosition: "center center",
                                                backgroundSize: "cover",
                                                backgroundImage:
                                                    'url("https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647546632984x709636644989855000/Group%201000000914%20%281%29.svg")'
                                            }}
                                        />
                                        <input
                                            type="file"
                                            accept="image/*"
                                            style={{
                                                opacity: 0,
                                                position: "absolute",
                                                zIndex: 15,
                                                left: 0,
                                                width: "100%",
                                                height: "100%",
                                                fontSize: 0,
                                                cursor: "pointer"
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                className="bubble-element Button clickable-element"
                                style={{
                                    zIndex: 27,
                                    alignSelf: "flex-start",
                                    minWidth: 120,
                                    maxWidth: 120,
                                    order: 3,
                                    minHeight: 50,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: 120,
                                    margin: "0px 0px 0px 10px",
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
                                onClick="UpdateProfile()"
                            >
                                Update
                            </button>
                        </div>
                    </div>
                    {/* Enabled Section 6 */}
                    <div
                        className="bubble-element Group bubble-r-container flex column"
                        id="section-6"
                        style={{
                            zIndex: 5,
                            alignSelf: "flex-start",
                            minWidth: 300,
                            order: 6,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 20px)",
                            margin: "0px 10px",
                            justifyContent: "flex-start",
                            overflow: "visible",
                            borderRadius: 0,
                            padding: "0px 0px 100px",
                            opacity: 1
                        }}
                    >
                        <h2
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
                                margin: "0px 0px 50px",
                                whiteSpace: "pre-wrap",
                                overflow: "visible",
                                wordBreak: "break-word",
                                fontFamily: "Poppins",
                                fontSize: 28,
                                fontWeight: 600,
                                color: "rgb(5, 5, 5)",
                                lineHeight: "1.5",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            Settings
                        </h2>
                        <div
                            className="bubble-element Group bubble-r-container flex column"
                            style={{
                                zIndex: 39,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                maxWidth: 580,
                                order: 4,
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
                                    zIndex: 30,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 1,
                                    minHeight: 0,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "0px 0px 10px",
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: "rgb(0, 0, 0)",
                                    lineHeight: 1,
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                Password
                            </div>
                            <input
                                type="password"
                                autoComplete="new-password"
                                className="bubble-element Input a1689834994986x14741"
                                placeholder=" Password"
                                maxLength=""
                                style={{
                                    zIndex: 30,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 2,
                                    minHeight: 50,
                                    maxHeight: 50,
                                    height: 50,
                                    flexGrow: 1,
                                    width: "calc(100% - 0px)",
                                    margin: 0,
                                    border: "1px solid rgb(238, 238, 238)",
                                    backgroundColor: "transparent",
                                    borderRadius: 15,
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: "rgb(0, 0, 0)",
                                    padding: "0px 15px",
                                    opacity: 1
                                }}
                            />
                            <div
                                className="bubble-element Group bubble-r-container flex column"
                                style={{
                                    visibility: "hidden",
                                    zIndex: 33,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 3,
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
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 29,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 1,
                                        minHeight: 0,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "auto",
                                        margin: "0px 0px 10px"
                                    }}
                                />
                                <input
                                    type="password"
                                    autoComplete="new-password"
                                    className="bubble-element Input"
                                    style={{
                                        zIndex: 29,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 50,
                                        maxHeight: 50,
                                        height: 50,
                                        flexGrow: 1,
                                        width: "calc(100% - 0px)",
                                        margin: "0px 0px 30px"
                                    }}
                                />
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 29,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 3,
                                        minHeight: 0,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "auto",
                                        margin: "0px 0px 10px"
                                    }}
                                />
                                <input
                                    type="password"
                                    autoComplete="new-password"
                                    className="bubble-element Input"
                                    style={{
                                        zIndex: 29,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 4,
                                        minHeight: 50,
                                        maxHeight: 50,
                                        height: 50,
                                        flexGrow: 1,
                                        width: "calc(100% - 0px)",
                                        margin: 0
                                    }}
                                />
                            </div>
                            <div
                                className="bubble-element Text clickable-element"
                                id=""
                                style={{
                                    zIndex: 38,
                                    alignSelf: "flex-end",
                                    minWidth: 0,
                                    order: 4,
                                    minHeight: 0,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "10px 0px 40px",
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 12,
                                    fontWeight: 400,
                                    color: "rgb(123, 123, 123)",
                                    letterSpacing: "0.5px",
                                    lineHeight: "1.5",
                                    borderRadius: 0,
                                    opacity: 1,
                                    cursor: "pointer"
                                }}
                            >
                                change password
                            </div>
                            <div
                                className="bubble-element Text"
                                style={{
                                    zIndex: 36,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 5,
                                    minHeight: 0,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "0px 0px 10px",
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 600,
                                    color: "rgb(33, 33, 33)",
                                    letterSpacing: "0.2px",
                                    lineHeight: "1.6",
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                Email
                            </div>
                            <input
                                type="email"
                                className="bubble-element Input a1689834994986x14741"
                                placeholder="Email"
                                maxLength=""
                                style={{
                                    zIndex: 29,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 6,
                                    minHeight: 50,
                                    maxHeight: 50,
                                    height: 50,
                                    flexGrow: 1,
                                    width: "calc(100% - 0px)",
                                    margin: 0,
                                    border: "1px solid rgb(238, 238, 238)",
                                    backgroundColor: "transparent",
                                    borderRadius: 15,
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: "rgb(0, 0, 0)",
                                    padding: "0px 15px",
                                    opacity: 1
                                }}
                            />
                            <div
                                className="bubble-element Group bubble-r-container flex column"
                                style={{
                                    visibility: "hidden",
                                    zIndex: 37,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 7,
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
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 36,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 1,
                                        minHeight: 0,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "auto",
                                        margin: "0px 0px 10px"
                                    }}
                                />
                                <input
                                    type="password"
                                    autoComplete="new-password"
                                    className="bubble-element Input"
                                    style={{
                                        zIndex: 35,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 50,
                                        maxHeight: 50,
                                        height: 50,
                                        flexGrow: 1,
                                        width: "calc(100% - 0px)",
                                        margin: 0
                                    }}
                                />
                            </div>
                            <div
                                className="bubble-element Text clickable-element"
                                id=""
                                style={{
                                    zIndex: 34,
                                    alignSelf: "flex-end",
                                    minWidth: 0,
                                    order: 8,
                                    minHeight: 0,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "10px 0px 40px",
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 12,
                                    fontWeight: 400,
                                    color: "rgb(123, 123, 123)",
                                    letterSpacing: "0.5px",
                                    lineHeight: "1.5",
                                    borderRadius: 0,
                                    opacity: 1,
                                    cursor: "pointer"
                                }}
                            >
                                change email
                            </div>
                            <button
                                className="bubble-element Button"
                                style={{
                                    visibility: "hidden",
                                    zIndex: 33,
                                    alignSelf: "flex-end",
                                    minWidth: 0,
                                    maxWidth: 120,
                                    order: 9,
                                    minHeight: 50,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "calc(100% - 0px)",
                                    margin: 0,
                                    display: "none"
                                }}
                            />
                            <div
                                className="bubble-element Group bubble-r-container flex column"
                                style={{
                                    visibility: "hidden",
                                    zIndex: 39,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 10,
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
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 30,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 1,
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
                                        zIndex: 31,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 0,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "calc(100% - 0px)",
                                        margin: "0px 0px 10px"
                                    }}
                                />
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 32,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 3,
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

export default Dashboard;