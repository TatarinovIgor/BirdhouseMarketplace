import React, { useEffect, useState } from 'react';

const AccountPreview = () => {
    return (
        <>
            {/* Background */}
            <div
                className="bubble-element Group bubble-r-container relative"
                style={{
                    zIndex: 2,
                    alignSelf: "flex-start",
                    minWidth: 0,
                    order: 4,
                    minHeight: 270,
                    height: "max-content",
                    flexGrow: 0,
                    flexShrink: 0,
                    width: "calc(100% - 0px)",
                    margin: "80px 0px 100px",
                    overflow: "visible",
                    backgroundColor: "rgba(255, 255, 255, 0)",
                    borderRadius: 0,
                    boxShadow: "rgba(170, 170, 170, 0.15) 0px 5px 4px 0px",
                    opacity: 1
                }}
            >
                <div
                    className="bubble-element Image"
                    style={{
                        zIndex: 3,
                        placeSelf: "end center",
                        minWidth: 0,
                        maxWidth: 130,
                        width: "calc(100% - 0px)",
                        height: "max-content",
                        margin: "0px 0px -60px",
                        borderRadius: 100,
                        opacity: 1
                    }}
                >
                    <img
                        alt=""
                        src="https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647552379244x207864892994998200/Group%20462.svg"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            display: "block",
                            width: "100%",
                            height: "100%",
                            margin: 0,
                            objectFit: "contain",
                            borderRadius: 100
                        }}
                    />
                    <div style={{position: "relative", paddingTop: "100%"}}/>
                </div>
            </div>
            {/* Stats */}
            <div
                className="bubble-element Group bubble-r-container flex column"
                style={{
                    zIndex: 3,
                    alignSelf: "center",
                    minWidth: 300,
                    maxWidth: 1200,
                    order: 5,
                    minHeight: 100,
                    height: "max-content",
                    flexGrow: 0,
                    flexShrink: 0,
                    width: "calc(100% - 20px)",
                    margin: "0px 10px 50px",
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
                        minWidth: 9,
                        order: 1,
                        minHeight: 0,
                        height: "max-content",
                        flexGrow: 0,
                        flexShrink: 0,
                        width: "auto",
                        margin: "0px 0px 35px",
                        whiteSpace: "pre-wrap",
                        overflow: "visible",
                        wordBreak: "break-word",
                        fontFamily: "Poppins",
                        fontSize: 36,
                        fontWeight: 600,
                        color: "rgb(0, 0, 0)",
                        letterSpacing: 1,
                        lineHeight: "1.5",
                        borderRadius: 0,
                        opacity: 1
                    }}
                >
                    <p id="UserName"/>
                </div>
                <div
                    className="bubble-element Text"
                    style={{
                        visibility: "hidden",
                        zIndex: 3,
                        alignSelf: "center",
                        minWidth: 0,
                        maxWidth: 580,
                        order: 2,
                        minHeight: 0,
                        height: "max-content",
                        flexGrow: 0,
                        flexShrink: 0,
                        width: "calc(100% - 0px)",
                        margin: "0px 0px 20px",
                        display: "none"
                    }}
                />
                <div
                    className="bubble-element RepeatingGroup"
                    style={{
                        visibility: "hidden",
                        zIndex: 5,
                        alignSelf: "center",
                        minWidth: 0,
                        order: 5,
                        minHeight: 50,
                        height: "max-content",
                        flexGrow: 0,
                        flexShrink: 0,
                        width: "calc(100% - 0px)",
                        margin: "0px 0px 30px",
                        display: "none"
                    }}
                />
                <div
                    className="bubble-element Group bubble-r-container flex row"
                    style={{
                        zIndex: 7,
                        alignSelf: "center",
                        minWidth: 0,
                        maxWidth: 762,
                        order: 6,
                        minHeight: 0,
                        height: "max-content",
                        flexGrow: 0,
                        flexShrink: 0,
                        width: "calc(100% - 0px)",
                        margin: 0,
                        justifyContent: "center",
                        overflow: "visible",
                        backgroundColor: "rgba(255, 255, 255, 0.7)",
                        borderRadius: 15,
                        opacity: 1
                    }}
                >
                    <div
                        className="bubble-element Group bubble-r-container flex column"
                        style={{
                            visibility: "hidden",
                            zIndex: 2,
                            alignSelf: "stretch",
                            minWidth: 190,
                            order: 1,
                            minHeight: 110,
                            width: 190,
                            flexGrow: 1,
                            height: "auto",
                            margin: 0,
                            display: "none",
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
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "auto",
                                margin: "0px 0px 10px"
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
                            zIndex: 6,
                            alignSelf: "stretch",
                            minWidth: 190,
                            order: 2,
                            minHeight: 110,
                            width: 190,
                            flexGrow: 1,
                            height: "auto",
                            margin: 0,
                            justifyContent: "flex-start",
                            overflow: "visible",
                            borderStyle: "solid",
                            borderWidth: 1,
                            borderColor: "rgb(238, 238, 238)",
                            borderRadius: 0,
                            padding: 29,
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
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "auto",
                                margin: "0px 0px 10px",
                                whiteSpace: "pre-wrap",
                                overflow: "visible",
                                wordBreak: "break-word",
                                fontFamily: "Poppins",
                                fontSize: 28,
                                fontWeight: 600,
                                color: "rgb(0, 0, 0)",
                                textAlign: "center",
                                letterSpacing: 1,
                                lineHeight: "1.5",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            <p id="UserItems"/>
                        </div>
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 3,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 2,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "auto",
                                margin: 0,
                                whiteSpace: "pre-wrap",
                                overflow: "visible",
                                wordBreak: "break-word",
                                fontFamily: "Poppins",
                                fontSize: 14,
                                fontWeight: 500,
                                color: "rgb(123, 123, 123)",
                                letterSpacing: 1,
                                lineHeight: "1.5",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            Items
                        </div>
                    </div>
                    <div
                        className="bubble-element Group bubble-r-container flex column"
                        style={{
                            zIndex: 3,
                            alignSelf: "stretch",
                            minWidth: 190,
                            order: 3,
                            minHeight: 110,
                            width: 190,
                            flexGrow: 1,
                            height: "auto",
                            margin: 0,
                            justifyContent: "flex-start",
                            overflow: "visible",
                            borderStyle: "solid",
                            borderWidth: 1,
                            borderColor: "rgb(238, 238, 238)",
                            borderRadius: 0,
                            padding: 29,
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
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "auto",
                                margin: "0px 0px 10px",
                                whiteSpace: "pre-wrap",
                                overflow: "visible",
                                fontFamily: "Poppins",
                                fontSize: 28,
                                fontWeight: 600,
                                color: "rgb(0, 0, 0)",
                                textAlign: "center",
                                letterSpacing: 1,
                                lineHeight: "1.5",
                                borderRadius: 0,
                                opacity: 1,
                                wordBreak: "break-word"
                            }}
                        >
                            <p id="UserTrades"/>
                        </div>
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 3,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 2,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "auto",
                                margin: 0,
                                whiteSpace: "pre-wrap",
                                overflow: "visible",
                                wordBreak: "break-word",
                                fontFamily: "Poppins",
                                fontSize: 14,
                                fontWeight: 500,
                                color: "rgb(123, 123, 123)",
                                letterSpacing: 1,
                                lineHeight: "1.5",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            Trades
                        </div>
                    </div>
                    <div
                        className="bubble-element Group bubble-r-container flex column"
                        style={{
                            zIndex: 5,
                            alignSelf: "flex-start",
                            minWidth: 190,
                            order: 4,
                            minHeight: 110,
                            width: 190,
                            flexGrow: 1,
                            height: "max-content",
                            margin: 0,
                            justifyContent: "flex-start",
                            overflow: "visible",
                            borderStyle: "solid",
                            borderWidth: 1,
                            borderColor: "rgb(238, 238, 238)",
                            borderRadius: 0,
                            padding: 29,
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
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "auto",
                                margin: "0px 0px 10px",
                                whiteSpace: "pre-wrap",
                                overflow: "visible",
                                fontFamily: "Poppins",
                                fontSize: 28,
                                fontWeight: 600,
                                color: "rgb(0, 0, 0)",
                                textAlign: "center",
                                letterSpacing: 1,
                                lineHeight: "1.5",
                                borderRadius: 0,
                                opacity: 1,
                                wordBreak: "break-word"
                            }}
                        >
                            <p id="UserVolume"/>
                        </div>
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 3,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 2,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "auto",
                                margin: 0,
                                whiteSpace: "pre-wrap",
                                overflow: "visible",
                                wordBreak: "break-word",
                                fontFamily: "Poppins",
                                fontSize: 14,
                                fontWeight: 500,
                                color: "rgb(123, 123, 123)",
                                letterSpacing: 1,
                                lineHeight: "1.5",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            Volume traded
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="bubble-element Group bubble-r-container flex row"
                style={{
                    zIndex: 5,
                    alignSelf: "center",
                    minWidth: 320,
                    order: 6,
                    minHeight: 8,
                    height: "max-content",
                    flexGrow: 0,
                    flexShrink: 0,
                    width: "calc(100% - 0px)",
                    margin: "0px 0px 30px",
                    justifyContent: "center",
                    overflow: "visible",
                    borderRadius: 0,
                    borderBottom: "1px solid rgb(238, 238, 238)",
                    padding: "0px 10px 12px",
                    opacity: 1
                }}
            >
                {/* Section Selector */}
                <div
                    className="bubble-element Group bubble-r-container flex row clickable-element"
                    style={{
                        zIndex: 6,
                        alignSelf: "center",
                        minWidth: 120,
                        order: 2,
                        minHeight: 0,
                        width: "max-content",
                        flexGrow: 0,
                        height: "max-content",
                        margin: "0px 15px 0px 0px",
                        justifyContent: "center",
                        overflow: "visible",
                        borderRadius: 0,
                        opacity: 1,
                        cursor: "pointer"
                    }}
                >
                    <div
                        className="bubble-element HTML"
                        style={{
                            zIndex: 5,
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
                            borderRadius: 0,
                            opacity: 1
                        }}
                    >
                        <svg
                            width={25}
                            height={24}
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.75 3H8.375V7.875H3.5V5.25C3.5 4.65326 3.73705 4.08097 4.15901 3.65901C4.58097 3.23705 5.15326 3 5.75 3ZM6.875 6.375V4.5H5.75C5.55109 4.5 5.36032 4.57902 5.21967 4.71967C5.07902 4.86032 5 5.05109 5 5.25V6.375H6.875Z"
                                fill="url(#paint0_linear_301_3402)"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.5 9.5625H8.375V14.4375H3.5V9.5625ZM6.875 12.9375V11.0625H5V12.9375H6.875Z"
                                fill="url(#paint1_linear_301_3402)"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.375 16.125H3.5V18.75C3.5 19.3467 3.73705 19.919 4.15901 20.341C4.58097 20.7629 5.15326 21 5.75 21H8.375V16.125ZM6.875 17.625V19.5H5.75C5.55109 19.5 5.36032 19.421 5.21967 19.2803C5.07902 19.1397 5 18.9489 5 18.75V17.625H6.875Z"
                                fill="url(#paint2_linear_301_3402)"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M21.5 16.125H16.625V21H19.25C19.8467 21 20.419 20.7629 20.841 20.341C21.2629 19.919 21.5 19.3467 21.5 18.75V16.125ZM20 17.625V18.75C20 18.9489 19.921 19.1397 19.7803 19.2803C19.6397 19.421 19.4489 19.5 19.25 19.5H18.125V17.625H20Z"
                                fill="url(#paint3_linear_301_3402)"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M21.5 9.5625H16.625V14.4375H21.5V9.5625ZM20 11.0625V12.9375H18.125V11.0625H20Z"
                                fill="url(#paint4_linear_301_3402)"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.9375 16.125H10.0625V21H14.9375V16.125ZM13.4375 17.625V19.5H11.5625V17.625H13.4375Z"
                                fill="url(#paint5_linear_301_3402)"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10.0625 9.5625H14.9375V14.4375H10.0625V9.5625ZM13.4375 12.9375V11.0625H11.5625V12.9375H13.4375Z"
                                fill="url(#paint6_linear_301_3402)"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.9375 3H10.0625V7.875H14.9375V3ZM13.4375 4.5V6.375H11.5625V4.5H13.4375Z"
                                fill="url(#paint7_linear_301_3402)"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16.625 3H19.25C19.8467 3 20.419 3.23705 20.841 3.65901C21.2629 4.08097 21.5 4.65326 21.5 5.25V7.875H16.625V3ZM19.7803 4.71967C19.6397 4.57902 19.4489 4.5 19.25 4.5H18.125V6.375H20V5.25C20 5.05109 19.921 4.86032 19.7803 4.71967Z"
                                fill="url(#paint8_linear_301_3402)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_301_3402"
                                    x1="-1.96429"
                                    y1="-0.999999"
                                    x2="27.2898"
                                    y2="1.40544"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#2D2DFF"/>
                                    <stop offset={1} stopColor="#00D4FF"/>
                                    <stop offset={1} stopColor="#00D4FF"/>
                                </linearGradient>
                                <linearGradient
                                    id="paint1_linear_301_3402"
                                    x1="-1.96429"
                                    y1="-0.999999"
                                    x2="27.2898"
                                    y2="1.40544"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#2D2DFF"/>
                                    <stop offset={1} stopColor="#00D4FF"/>
                                    <stop offset={1} stopColor="#00D4FF"/>
                                </linearGradient>
                                <linearGradient
                                    id="paint2_linear_301_3402"
                                    x1="-1.96429"
                                    y1="-0.999999"
                                    x2="27.2898"
                                    y2="1.40544"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#2D2DFF"/>
                                    <stop offset={1} stopColor="#00D4FF"/>
                                    <stop offset={1} stopColor="#00D4FF"/>
                                </linearGradient>
                                <linearGradient
                                    id="paint3_linear_301_3402"
                                    x1="-1.96429"
                                    y1="-0.999999"
                                    x2="27.2898"
                                    y2="1.40544"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#2D2DFF"/>
                                    <stop offset={1} stopColor="#00D4FF"/>
                                    <stop offset={1} stopColor="#00D4FF"/>
                                </linearGradient>
                                <linearGradient
                                    id="paint4_linear_301_3402"
                                    x1="-1.96429"
                                    y1="-0.999999"
                                    x2="27.2898"
                                    y2="1.40544"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#2D2DFF"/>
                                    <stop offset={1} stopColor="#00D4FF"/>
                                    <stop offset={1} stopColor="#00D4FF"/>
                                </linearGradient>
                                <linearGradient
                                    id="paint5_linear_301_3402"
                                    x1="-1.96429"
                                    y1="-0.999999"
                                    x2="27.2898"
                                    y2="1.40544"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#2D2DFF"/>
                                    <stop offset={1} stopColor="#00D4FF"/>
                                    <stop offset={1} stopColor="#00D4FF"/>
                                </linearGradient>
                                <linearGradient
                                    id="paint6_linear_301_3402"
                                    x1="-1.96429"
                                    y1="-0.999999"
                                    x2="27.2898"
                                    y2="1.40544"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#2D2DFF"/>
                                    <stop offset={1} stopColor="#00D4FF"/>
                                    <stop offset={1} stopColor="#00D4FF"/>
                                </linearGradient>
                                <linearGradient
                                    id="paint7_linear_301_3402"
                                    x1="-1.96429"
                                    y1="-0.999999"
                                    x2="27.2898"
                                    y2="1.40544"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#2D2DFF"/>
                                    <stop offset={1} stopColor="#00D4FF"/>
                                    <stop offset={1} stopColor="#00D4FF"/>
                                </linearGradient>
                                <linearGradient
                                    id="paint8_linear_301_3402"
                                    x1="-1.96429"
                                    y1="-0.999999"
                                    x2="27.2898"
                                    y2="1.40544"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#2D2DFF"/>
                                    <stop offset={1} stopColor="#00D4FF"/>
                                    <stop offset={1} stopColor="#00D4FF"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div
                        className="bubble-element Text"
                        style={{
                            zIndex: 4,
                            alignSelf: "center",
                            minWidth: 0,
                            order: 2,
                            minHeight: 0,
                            maxHeight: 30,
                            width: "max-content",
                            flexGrow: 0,
                            height: "max-content",
                            margin: "0px 0px 0px 10px",
                            overflow: "visible",
                            wordBreak: "break-word",
                            fontFamily: "Poppins",
                            fontSize: 14,
                            fontWeight: 500,
                            color: "rgb(33, 33, 33)",
                            letterSpacing: 1,
                            lineHeight: "1.5",
                            borderRadius: 0,
                            opacity: 1,
                            textDecoration: "none",
                            fontStyle: "normal",
                            textAlign: "left"
                        }}
                    >
                        <a>Items</a>
                    </div>
                </div>
            </div>
            {/* Category Selector */}
            <div
                className="bubble-element Group bubble-r-container flex row"
                style={{
                    zIndex: 4,
                    alignSelf: "center",
                    minWidth: 320,
                    maxWidth: 1200,
                    order: 7,
                    minHeight: 150,
                    height: "max-content",
                    flexGrow: 0,
                    flexShrink: 0,
                    width: "calc(100% - 0px)",
                    margin: "0px 0px 70px",
                    justifyContent: "flex-start",
                    overflow: "visible",
                    borderRadius: 0,
                    opacity: 1
                }}
            >
                <div
                    className="bubble-element Group bubble-r-container flex column"
                    style={{
                        zIndex: 4,
                        alignSelf: "flex-start",
                        minWidth: 0,
                        maxWidth: 280,
                        order: 2,
                        minHeight: 0,
                        width: 0,
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
                        className="bubble-element Group bubble-r-container flex column"
                        style={{
                            zIndex: 3,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            order: 2,
                            minHeight: 200,
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
                            className="bubble-element Group bubble-r-container flex row clickable-element"
                            style={{
                                zIndex: 6,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 3,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 20px",
                                justifyContent: "space-between",
                                overflow: "visible",
                                borderRadius: 0,
                                opacity: 1,
                                cursor: "pointer"
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
                                    width: "max-content",
                                    flexGrow: 0,
                                    height: "max-content",
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
                                Category
                            </div>
                            <div
                                className="bubble-element Text"
                                id="gradient-text"
                                style={{
                                    zIndex: 5,
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
                                -
                            </div>
                        </div>
                        <div
                            className="bubble-element RepeatingGroup bubble-rg"
                            id="repeating-scroll"
                            style={{
                                zIndex: 4,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 4,
                                minHeight: 140,
                                height: 140,
                                flexGrow: 1,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 40px",
                                gap: 0,
                                gridAutoRows: "minmax(max-content, 0px)",
                                gridTemplateColumns: "repeat(1, minmax(0px, 1fr))",
                                gridAutoFlow: "row",
                                overflow: "auto",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            <div
                                className="bubble-element GroupItem bubble-r-container flex row group-item entry-1"
                                style={{
                                    justifyContent: "center",
                                    boxSizing: "content-box",
                                    minHeight: 0,
                                    borderTopStyle: "none",
                                    borderLeftStyle: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container flex row"
                                    style={{
                                        zIndex: 5,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 0,
                                        width: 0,
                                        flexGrow: 1,
                                        height: "max-content",
                                        margin: "0px 0px 15px",
                                        justifyContent: "flex-start",
                                        overflow: "visible",
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container fixed clickable-element"
                                        style={{
                                            zIndex: 3,
                                            alignSelf: "center",
                                            minWidth: 20,
                                            maxWidth: 20,
                                            order: 1,
                                            minHeight: 20,
                                            maxHeight: 20,
                                            width: 20,
                                            flexGrow: 1,
                                            height: 20,
                                            margin: 0,
                                            overflow: "visible",
                                            borderRadius: 5,
                                            padding: 0,
                                            opacity: 1,
                                            cursor: "pointer",
                                            backgroundColor: "rgba(255, 255, 255, 0)",
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                            backgroundImage:
                                                'url("https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647622827242x413982903324391200/Rectangle%20368.svg")'
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
                                            width: 0,
                                            flexGrow: 1,
                                            height: "max-content",
                                            margin: "0px 0px 0px 12px",
                                            whiteSpace: "pre-wrap",
                                            overflow: "visible",
                                            wordBreak: "break-word",
                                            fontFamily: "Poppins",
                                            fontSize: 15,
                                            fontWeight: 500,
                                            color: "rgb(123, 123, 123)",
                                            letterSpacing: 1,
                                            lineHeight: "1.5",
                                            borderRadius: 0,
                                            opacity: 1
                                        }}
                                    >
                                        Beauty
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element GroupItem bubble-r-container flex row group-item entry-2"
                                style={{
                                    justifyContent: "center",
                                    boxSizing: "content-box",
                                    minHeight: 0,
                                    borderTop: "0px none rgba(150, 150, 150, 0.5)",
                                    marginTop: 0,
                                    borderLeftStyle: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container flex row"
                                    style={{
                                        zIndex: 5,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 0,
                                        width: 0,
                                        flexGrow: 1,
                                        height: "max-content",
                                        margin: "0px 0px 15px",
                                        justifyContent: "flex-start",
                                        overflow: "visible",
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container fixed clickable-element"
                                        style={{
                                            zIndex: 3,
                                            alignSelf: "center",
                                            minWidth: 20,
                                            maxWidth: 20,
                                            order: 1,
                                            minHeight: 20,
                                            maxHeight: 20,
                                            width: 20,
                                            flexGrow: 1,
                                            height: 20,
                                            margin: 0,
                                            overflow: "visible",
                                            borderRadius: 5,
                                            padding: 0,
                                            opacity: 1,
                                            cursor: "pointer",
                                            backgroundColor: "rgba(255, 255, 255, 0)",
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                            backgroundImage:
                                                'url("https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647622827242x413982903324391200/Rectangle%20368.svg")'
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
                                            width: 0,
                                            flexGrow: 1,
                                            height: "max-content",
                                            margin: "0px 0px 0px 12px",
                                            whiteSpace: "pre-wrap",
                                            overflow: "visible",
                                            wordBreak: "break-word",
                                            fontFamily: "Poppins",
                                            fontSize: 15,
                                            fontWeight: 500,
                                            color: "rgb(123, 123, 123)",
                                            letterSpacing: 1,
                                            lineHeight: "1.5",
                                            borderRadius: 0,
                                            opacity: 1
                                        }}
                                    >
                                        Crypto
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element GroupItem bubble-r-container flex row group-item entry-3"
                                style={{
                                    justifyContent: "center",
                                    boxSizing: "content-box",
                                    minHeight: 0,
                                    borderTop: "0px none rgba(150, 150, 150, 0.5)",
                                    marginTop: 0,
                                    borderLeftStyle: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container flex row"
                                    style={{
                                        zIndex: 5,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 0,
                                        width: 0,
                                        flexGrow: 1,
                                        height: "max-content",
                                        margin: "0px 0px 15px",
                                        justifyContent: "flex-start",
                                        overflow: "visible",
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container fixed clickable-element"
                                        style={{
                                            zIndex: 3,
                                            alignSelf: "center",
                                            minWidth: 20,
                                            maxWidth: 20,
                                            order: 1,
                                            minHeight: 20,
                                            maxHeight: 20,
                                            width: 20,
                                            flexGrow: 1,
                                            height: 20,
                                            margin: 0,
                                            overflow: "visible",
                                            borderRadius: 5,
                                            padding: 0,
                                            opacity: 1,
                                            cursor: "pointer",
                                            backgroundColor: "rgba(255, 255, 255, 0)",
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                            backgroundImage:
                                                'url("https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647622827242x413982903324391200/Rectangle%20368.svg")'
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
                                            width: 0,
                                            flexGrow: 1,
                                            height: "max-content",
                                            margin: "0px 0px 0px 12px",
                                            whiteSpace: "pre-wrap",
                                            overflow: "visible",
                                            wordBreak: "break-word",
                                            fontFamily: "Poppins",
                                            fontSize: 15,
                                            fontWeight: 500,
                                            color: "rgb(123, 123, 123)",
                                            letterSpacing: 1,
                                            lineHeight: "1.5",
                                            borderRadius: 0,
                                            opacity: 1
                                        }}
                                    >
                                        Fashion
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element GroupItem bubble-r-container flex row group-item entry-4"
                                style={{
                                    justifyContent: "center",
                                    boxSizing: "content-box",
                                    minHeight: 0,
                                    borderTop: "0px none rgba(150, 150, 150, 0.5)",
                                    marginTop: 0,
                                    borderLeftStyle: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container flex row"
                                    style={{
                                        zIndex: 5,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 0,
                                        width: 0,
                                        flexGrow: 1,
                                        height: "max-content",
                                        margin: "0px 0px 15px",
                                        justifyContent: "flex-start",
                                        overflow: "visible",
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container fixed clickable-element"
                                        style={{
                                            zIndex: 3,
                                            alignSelf: "center",
                                            minWidth: 20,
                                            maxWidth: 20,
                                            order: 1,
                                            minHeight: 20,
                                            maxHeight: 20,
                                            width: 20,
                                            flexGrow: 1,
                                            height: 20,
                                            margin: 0,
                                            overflow: "visible",
                                            borderRadius: 5,
                                            padding: 0,
                                            opacity: 1,
                                            cursor: "pointer",
                                            backgroundColor: "rgba(255, 255, 255, 0)",
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                            backgroundImage:
                                                'url("https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647622827242x413982903324391200/Rectangle%20368.svg")'
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
                                            width: 0,
                                            flexGrow: 1,
                                            height: "max-content",
                                            margin: "0px 0px 0px 12px",
                                            whiteSpace: "pre-wrap",
                                            overflow: "visible",
                                            wordBreak: "break-word",
                                            fontFamily: "Poppins",
                                            fontSize: 15,
                                            fontWeight: 500,
                                            color: "rgb(123, 123, 123)",
                                            letterSpacing: 1,
                                            lineHeight: "1.5",
                                            borderRadius: 0,
                                            opacity: 1
                                        }}
                                    >
                                        Lifestyle
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element GroupItem bubble-r-container flex row group-item entry-5"
                                style={{
                                    justifyContent: "center",
                                    boxSizing: "content-box",
                                    minHeight: 0,
                                    borderTop: "0px none rgba(150, 150, 150, 0.5)",
                                    marginTop: 0,
                                    borderLeftStyle: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container flex row"
                                    style={{
                                        zIndex: 5,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 0,
                                        width: 0,
                                        flexGrow: 1,
                                        height: "max-content",
                                        margin: "0px 0px 15px",
                                        justifyContent: "flex-start",
                                        overflow: "visible",
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container fixed clickable-element"
                                        style={{
                                            zIndex: 3,
                                            alignSelf: "center",
                                            minWidth: 20,
                                            maxWidth: 20,
                                            order: 1,
                                            minHeight: 20,
                                            maxHeight: 20,
                                            width: 20,
                                            flexGrow: 1,
                                            height: 20,
                                            margin: 0,
                                            overflow: "visible",
                                            borderRadius: 5,
                                            padding: 0,
                                            opacity: 1,
                                            cursor: "pointer",
                                            backgroundColor: "rgba(255, 255, 255, 0)",
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                            backgroundImage:
                                                'url("https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647622827242x413982903324391200/Rectangle%20368.svg")'
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
                                            width: 0,
                                            flexGrow: 1,
                                            height: "max-content",
                                            margin: "0px 0px 0px 12px",
                                            whiteSpace: "pre-wrap",
                                            overflow: "visible",
                                            wordBreak: "break-word",
                                            fontFamily: "Poppins",
                                            fontSize: 15,
                                            fontWeight: 500,
                                            color: "rgb(123, 123, 123)",
                                            letterSpacing: 1,
                                            lineHeight: "1.5",
                                            borderRadius: 0,
                                            opacity: 1
                                        }}
                                    >
                                        Music
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bubble-element GroupItem bubble-r-container flex row group-item entry-6"
                                style={{
                                    justifyContent: "center",
                                    boxSizing: "content-box",
                                    minHeight: 0,
                                    borderTop: "0px none rgba(150, 150, 150, 0.5)",
                                    marginTop: 0,
                                    borderLeftStyle: "none"
                                }}
                            >
                                <div
                                    className="bubble-element Group bubble-r-container flex row"
                                    style={{
                                        zIndex: 5,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 0,
                                        width: 0,
                                        flexGrow: 1,
                                        height: "max-content",
                                        margin: "0px 0px 15px",
                                        justifyContent: "flex-start",
                                        overflow: "visible",
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container fixed clickable-element"
                                        style={{
                                            zIndex: 3,
                                            alignSelf: "center",
                                            minWidth: 20,
                                            maxWidth: 20,
                                            order: 1,
                                            minHeight: 20,
                                            maxHeight: 20,
                                            width: 20,
                                            flexGrow: 1,
                                            height: 20,
                                            margin: 0,
                                            overflow: "visible",
                                            borderRadius: 5,
                                            padding: 0,
                                            opacity: 1,
                                            cursor: "pointer",
                                            backgroundColor: "rgba(255, 255, 255, 0)",
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                            backgroundImage:
                                                'url("https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647622827242x413982903324391200/Rectangle%20368.svg")'
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
                                            width: 0,
                                            flexGrow: 1,
                                            height: "max-content",
                                            margin: "0px 0px 0px 12px",
                                            whiteSpace: "pre-wrap",
                                            overflow: "visible",
                                            wordBreak: "break-word",
                                            fontFamily: "Poppins",
                                            fontSize: 15,
                                            fontWeight: 500,
                                            color: "rgb(123, 123, 123)",
                                            letterSpacing: 1,
                                            lineHeight: "1.5",
                                            borderRadius: 0,
                                            opacity: 1
                                        }}
                                    >
                                        Other
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Price Selector */}
                        <div
                            className="bubble-element Group bubble-r-container flex row clickable-element"
                            style={{
                                zIndex: 7,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 8,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 20px",
                                justifyContent: "space-between",
                                overflow: "visible",
                                borderRadius: 0,
                                opacity: 1,
                                cursor: "pointer"
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
                                    width: "max-content",
                                    flexGrow: 0,
                                    height: "max-content",
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
                                Price
                            </div>
                            <div
                                className="bubble-element Text"
                                style={{
                                    zIndex: 5,
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
                                id="gradient-text"
                            >
                                -
                            </div>
                        </div>
                        <div
                            className="bubble-element Group bubble-r-container flex column"
                            style={{
                                zIndex: 8,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 9,
                                minHeight: 100,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 50px",
                                justifyContent: "flex-start",
                                overflow: "visible",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            <div
                                className="bubble-element Group bubble-r-container flex row clickable-element"
                                style={{
                                    zIndex: 24,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 1,
                                    minHeight: 50,
                                    height: 50,
                                    flexGrow: 1,
                                    width: "calc(100% - 0px)",
                                    margin: "0px 0px 20px",
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
                                            borderStyle: "solid",
                                            borderWidth: 1,
                                            borderColor: "rgb(238, 238, 238)",
                                            borderRadius: 20,
                                            padding: 0,
                                            opacity: 1,
                                            backgroundColor: "rgba(255, 255, 255, 0)",
                                            backgroundImage:
                                                'url("https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1657633985492x211575392420328060%2F25228.png?w=32&h=32&auto=compress&fit=crop&dpr=1")',
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
                                            fontFamily: "Poppins",
                                            fontSize: 15,
                                            fontWeight: 500,
                                            color: "rgb(123, 123, 123)",
                                            letterSpacing: 1,
                                            lineHeight: "1.5",
                                            borderRadius: 0,
                                            opacity: 1,
                                            wordBreak: "break-word"
                                        }}
                                    >
                                        <div>USD 0 - 9</div>
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
                                className="bubble-element SliderInput clickable-element"
                                style={{
                                    zIndex: 25,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 2,
                                    minHeight: 0,
                                    height: 0,
                                    flexGrow: 1,
                                    width: "calc(100% - 0px)",
                                    margin: 0,
                                    padding: 8,
                                    opacity: 1
                                }}
                            >
                                <div
                                    className="jquery-slider ui-slider ui-corner-all ui-widget ui-widget-content ui-slider-horizontal"
                                    style={{
                                        marginLeft: 3,
                                        marginRight: 3,
                                        cursor: "pointer",
                                        background: "rgb(255, 255, 255)",
                                        borderColor: "rgb(222, 222, 222)",
                                        height: "100%",
                                        width: "calc(100% - 7px)"
                                    }}
                                >
              <span
                  tabIndex={0}
                  className="ui-slider-handle ui-corner-all ui-state-default"
                  style={{
                      left: "0%",
                      cursor: "pointer",
                      outline: "none",
                      borderColor: "rgb(222, 222, 222)",
                      top: "-8px",
                      height: "calc(100% + 16px)",
                      width: 19,
                      background: "rgb(230, 230, 230)"
                  }}
              />
                                    <div
                                        className="ui-slider-range ui-corner-all ui-widget-header"
                                        style={{
                                            width: "100%",
                                            background: "rgb(204, 204, 204)",
                                            left: "0%",
                                            height: "100%"
                                        }}
                                    />
                                    <span
                                        tabIndex={0}
                                        className="ui-slider-handle ui-corner-all ui-state-default"
                                        style={{
                                            left: "100%",
                                            cursor: "pointer",
                                            outline: "none",
                                            borderColor: "rgb(222, 222, 222)",
                                            top: "-8px",
                                            height: "calc(100% + 16px)",
                                            width: 19,
                                            background: "rgb(230, 230, 230)"
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="bubble-element Group bubble-r-container flex column"
                    style={{
                        zIndex: 15,
                        alignSelf: "flex-start",
                        minWidth: 0,
                        order: 3,
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
                        className="bubble-element Group bubble-r-container flex column"
                        style={{
                            zIndex: 5,
                            alignSelf: "flex-start",
                            minWidth: 0,
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
                            opacity: 1
                        }}
                    >
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 31,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 2,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "auto",
                                margin: 0,
                                whiteSpace: "pre-wrap",
                                overflow: "visible",
                                wordBreak: "break-word",
                                fontFamily: "Poppins",
                                fontSize: 16,
                                fontWeight: 500,
                                color: "rgb(0, 0, 0)",
                                letterSpacing: "0.5px",
                                lineHeight: "1.5",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            No arts found.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccountPreview;