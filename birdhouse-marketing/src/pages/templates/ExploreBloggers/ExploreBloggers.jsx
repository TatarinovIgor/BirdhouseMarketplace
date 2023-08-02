import React, { useEffect, useState } from 'react';
import "./style.css"
import Header from "../../../modules/Header/Header.jsx";
import Footer from "../../../modules/Footer/Footer.jsx";
const ExploreBloggers = () => {
    return (
        <>
                {/* Upper panel */}
            <div
                className="bubble-element Group bubble-r-container flex row"
                style={{
                    zIndex: 3,
                    alignSelf: "center",
                    minWidth: 320,
                    maxWidth: 1200,
                    order: 2,
                    minHeight: 0,
                    height: "max-content",
                    flexGrow: 0,
                    flexShrink: 0,
                    width: "calc(100% - 0px)",
                    margin: "150px 0px 30px",
                    justifyContent: "space-between",
                    overflow: "visible",
                    borderRadius: 0,
                    opacity: 1
                }}
            >
                <div
                    className="bubble-element Group bubble-r-container flex row"
                    style={{
                        zIndex: 2,
                        alignSelf: "flex-end",
                        minWidth: 0,
                        maxWidth: 280,
                        order: 1,
                        minHeight: 0,
                        width: 0,
                        flexGrow: 1,
                        height: "max-content",
                        margin: "0px 10px",
                        justifyContent: "flex-start",
                        overflow: "visible",
                        borderRadius: 0,
                        borderBottom: "1px solid rgb(238, 238, 238)",
                        padding: "0px 0px 10px",
                        opacity: 1
                    }}
                >
                    <div
                        className="bubble-element Text"
                        style={{
                            zIndex: 2,
                            alignSelf: "flex-end",
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
                            fontSize: 24,
                            fontWeight: 500,
                            color: "rgb(0, 0, 0)",
                            letterSpacing: 1,
                            lineHeight: "1.5",
                            borderRadius: 0,
                            opacity: 1
                        }}
                    >
                        Explore Bloggers
                    </div>
                </div>
                <div
                    className="bubble-element Group bubble-r-container flex row"
                    style={{
                        zIndex: 4,
                        alignSelf: "center",
                        minWidth: 0,
                        order: 3,
                        minHeight: 0,
                        width: 0,
                        flexGrow: 1,
                        height: "max-content",
                        margin: "0px 10px",
                        justifyContent: "space-between",
                        overflow: "visible",
                        borderRadius: 0,
                        borderBottom: "1px solid rgb(238, 238, 238)",
                        padding: "0px 0px 13px",
                        opacity: 1
                    }}
                >
                    <div
                        className="bubble-element Group bubble-r-container flex row"
                        style={{
                            zIndex: 10,
                            alignSelf: "flex-end",
                            minWidth: 0,
                            order: 1,
                            minHeight: 0,
                            width: "max-content",
                            flexGrow: 0,
                            height: "max-content",
                            margin: 0,
                            justifyContent: "space-between",
                            overflow: "visible",
                            borderRadius: 0,
                            opacity: 1
                        }}
                    >
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                visibility: "hidden",
                                zIndex: 7,
                                alignSelf: "flex-end",
                                minWidth: 0,
                                order: 1,
                                minHeight: 0,
                                width: "max-content",
                                flexGrow: 0,
                                height: "max-content",
                                margin: "0px 15px 10px 0px",
                                display: "none",
                                justifyContent: "flex-start"
                            }}
                        >
                            <div
                                className="bubble-element HTML"
                                style={{
                                    zIndex: 2,
                                    alignSelf: "flex-start",
                                    minWidth: 24,
                                    maxWidth: 24,
                                    order: 1,
                                    minHeight: 24,
                                    maxHeight: 24,
                                    width: 24,
                                    flexGrow: 1,
                                    height: 24,
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
                                        d="M11.45 4V10.9091H12.55V4H11.45ZM11.45 13.8182V20H12.55V13.8182H11.45ZM12 13.2682C11.5004 13.2682 11.0954 12.8632 11.0954 12.3636H9.99545C9.99545 13.4707 10.8929 14.3682 12 14.3682V13.2682ZM12.9045 12.3636C12.9045 12.8632 12.4996 13.2682 12 13.2682V14.3682C13.1071 14.3682 14.0045 13.4707 14.0045 12.3636H12.9045ZM12 11.4591C12.4996 11.4591 12.9045 11.8641 12.9045 12.3636H14.0045C14.0045 11.2566 13.1071 10.3591 12 10.3591V11.4591ZM12 10.3591C10.8929 10.3591 9.99545 11.2566 9.99545 12.3636H11.0954C11.0954 11.8641 11.5004 11.4591 12 11.4591V10.3591ZM17.9954 4V14.5909H19.0954V4H17.9954ZM17.9954 17.5V20H19.0954V17.5H17.9954ZM18.5454 16.95C18.0459 16.95 17.6409 16.545 17.6409 16.0455H16.5409C16.5409 17.1525 17.4384 18.05 18.5454 18.05V16.95ZM19.45 16.0455C19.45 16.545 19.045 16.95 18.5454 16.95V18.05C19.6525 18.05 20.55 17.1525 20.55 16.0455H19.45ZM18.5454 15.1409C19.045 15.1409 19.45 15.5459 19.45 16.0455H20.55C20.55 14.9384 19.6525 14.0409 18.5454 14.0409V15.1409ZM18.5454 14.0409C17.4384 14.0409 16.5409 14.9384 16.5409 16.0455H17.6409C17.6409 15.5459 18.0459 15.1409 18.5454 15.1409V14.0409ZM4.90454 4L4.90455 6.5L6.00455 6.5L6.00454 4L4.90454 4ZM4.90455 9.40909L4.90454 20H6.00454L6.00455 9.40909L4.90455 9.40909ZM5.45455 8.85909C4.95498 8.85909 4.55 8.45411 4.55 7.95455H3.45C3.45 9.06163 4.34747 9.95909 5.45455 9.95909V8.85909ZM6.35909 7.95455C6.35909 8.45411 5.95411 8.85909 5.45455 8.85909V9.95909C6.56163 9.95909 7.45909 9.06163 7.45909 7.95455H6.35909ZM5.45455 7.05C5.95411 7.05 6.35909 7.45498 6.35909 7.95455H7.45909C7.45909 6.84747 6.56163 5.95 5.45455 5.95V7.05ZM5.45455 5.95C4.34747 5.95 3.45 6.84747 3.45 7.95455H4.55C4.55 7.45498 4.95498 7.05 5.45455 7.05V5.95Z"
                                        fill="#212121"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                zIndex: 6,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 2,
                                minHeight: 0,
                                width: "max-content",
                                flexGrow: 0,
                                height: "max-content",
                                margin: "0px 15px 10px 0px",
                                justifyContent: "flex-start",
                                overflow: "visible",
                                borderRadius: 0,
                                padding: "7px 10px 7px 0px",
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
                                    margin: 0,
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: "rgb(123, 123, 123)",
                                    letterSpacing: 1,
                                    lineHeight: "1.5",
                                    borderRadius: 0,
                                    opacity: 1,
                                    wordBreak: "break-word"
                                }}
                            >
                                {" "}
                                Selected 1 Ads
                            </div>
                        </div>
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                zIndex: 4,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 3,
                                minHeight: 0,
                                width: "max-content",
                                flexGrow: 0,
                                height: "max-content",
                                margin: "0px 15px 10px 0px",
                                justifyContent: "flex-start",
                                overflow: "visible",
                                borderStyle: "solid",
                                borderWidth: 1,
                                borderColor: "rgb(238, 238, 238)",
                                borderRadius: 10,
                                padding: "7px 10px",
                                opacity: 1,
                                display: "none",
                                visibility: "hidden"
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
                                    margin: 0,
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: "rgb(123, 123, 123)",
                                    letterSpacing: 1,
                                    lineHeight: "1.5",
                                    borderRadius: 0,
                                    opacity: 1,
                                    wordBreak: "break-word"
                                }}
                            />
                            <div
                                className="bubble-element Group bubble-r-container relative clickable-element"
                                style={{
                                    zIndex: 4,
                                    alignSelf: "flex-start",
                                    minWidth: 24,
                                    maxWidth: 24,
                                    order: 4,
                                    minHeight: 24,
                                    maxHeight: 24,
                                    width: 24,
                                    flexGrow: 1,
                                    height: 24,
                                    margin: "0px 0px 0px 10px",
                                    overflow: "visible",
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
                        className="bubble-element Group bubble-r-container flex row"
                        style={{
                            zIndex: 11,
                            alignSelf: "center",
                            minWidth: 0,
                            order: 4,
                            minHeight: 28,
                            width: "max-content",
                            flexGrow: 0,
                            height: "max-content",
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
                                zIndex: 26,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 1,
                                minHeight: 0,
                                width: "max-content",
                                flexGrow: 0,
                                height: "max-content",
                                margin: "0px 20px 10px 0px",
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
                                    zIndex: 3,
                                    alignSelf: "center",
                                    minWidth: 158,
                                    order: 2,
                                    minHeight: 0,
                                    maxHeight: 30,
                                    width: 158,
                                    flexGrow: 1,
                                    height: "max-content",
                                    margin: 0,
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
                                <div>Name: A - Z</div>
                            </div>
                            <div
                                className="bubble-element Group bubble-r-container fixed"
                                style={{
                                    zIndex: 3,
                                    alignSelf: "center",
                                    minWidth: 24,
                                    maxWidth: 24,
                                    order: 3,
                                    minHeight: 24,
                                    maxHeight: 24,
                                    width: 24,
                                    flexGrow: 1,
                                    height: 24,
                                    margin: "0px 0px 0px 10px",
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
                            className="bubble-element Group bubble-r-container flex row clickable-element"
                            style={{
                                zIndex: 28,
                                alignSelf: "flex-start",
                                minWidth: 28,
                                order: 2,
                                minHeight: 28,
                                width: "max-content",
                                flexGrow: 0,
                                height: "max-content",
                                margin: "0px 15px 10px 0px",
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
                                    zIndex: 7,
                                    alignSelf: "center",
                                    minWidth: 0,
                                    maxWidth: 16,
                                    order: 1,
                                    minHeight: 16,
                                    maxHeight: 16,
                                    width: 0,
                                    flexGrow: 1,
                                    height: 16,
                                    margin: 0,
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="0.5"
                                        y="0.5"
                                        width="15.5"
                                        height={3}
                                        rx="1.5"
                                        stroke="#BBBBBB"
                                    />
                                    <rect
                                        x="0.5"
                                        y="6.5"
                                        width="15.5"
                                        height={3}
                                        rx="1.5"
                                        stroke="#BBBBBB"
                                    />
                                    <rect
                                        x="0.5"
                                        y="12.5"
                                        width="15.5"
                                        height={3}
                                        rx="1.5"
                                        stroke="#BBBBBB"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div
                            className="bubble-element Group bubble-r-container flex row clickable-element"
                            style={{
                                zIndex: 8,
                                alignSelf: "flex-start",
                                minWidth: 28,
                                order: 3,
                                minHeight: 28,
                                width: "max-content",
                                flexGrow: 0,
                                height: "max-content",
                                margin: "0px 15px 10px 0px",
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
                                    zIndex: 7,
                                    alignSelf: "center",
                                    minWidth: 0,
                                    maxWidth: 16,
                                    order: 1,
                                    minHeight: 16,
                                    maxHeight: 16,
                                    width: 0,
                                    flexGrow: 1,
                                    height: 16,
                                    margin: 0,
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="0.5"
                                        y="0.5"
                                        width={6}
                                        height={6}
                                        rx={3}
                                        stroke="#BBBBBB"
                                    />
                                    <rect
                                        x="9.5"
                                        y="0.5"
                                        width={6}
                                        height={6}
                                        rx={3}
                                        stroke="#BBBBBB"
                                    />
                                    <rect
                                        x="0.5"
                                        y="9.5"
                                        width={6}
                                        height={6}
                                        rx={3}
                                        stroke="#BBBBBB"
                                    />
                                    <rect
                                        x="9.5"
                                        y="9.5"
                                        width={6}
                                        height={6}
                                        rx={3}
                                        stroke="#BBBBBB"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div
                            className="bubble-element Group bubble-r-container flex row clickable-element"
                            style={{
                                zIndex: 9,
                                alignSelf: "flex-start",
                                minWidth: 28,
                                order: 4,
                                minHeight: 28,
                                width: "max-content",
                                flexGrow: 0,
                                height: "max-content",
                                margin: "0px 15px 10px 0px",
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
                                    zIndex: 7,
                                    alignSelf: "center",
                                    minWidth: 0,
                                    maxWidth: 16,
                                    order: 1,
                                    minHeight: 16,
                                    maxHeight: 16,
                                    width: 0,
                                    flexGrow: 1,
                                    height: 16,
                                    margin: 0,
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="0.5"
                                        y="0.5"
                                        width={3}
                                        height={3}
                                        rx="1.5"
                                        stroke="url(#paint0_linear_190_2192)"
                                    />
                                    <rect
                                        x="6.5"
                                        y="0.5"
                                        width={3}
                                        height={3}
                                        rx="1.5"
                                        stroke="url(#paint1_linear_190_2192)"
                                    />
                                    <rect
                                        x="12.5"
                                        y="0.5"
                                        width={3}
                                        height={3}
                                        rx="1.5"
                                        stroke="url(#paint2_linear_190_2192)"
                                    />
                                    <rect
                                        x="0.5"
                                        y="6.5"
                                        width={3}
                                        height={3}
                                        rx="1.5"
                                        stroke="url(#paint3_linear_190_2192)"
                                    />
                                    <rect
                                        x="6.5"
                                        y="6.5"
                                        width={3}
                                        height={3}
                                        rx="1.5"
                                        stroke="url(#paint4_linear_190_2192)"
                                    />
                                    <rect
                                        x="12.5"
                                        y="6.5"
                                        width={3}
                                        height={3}
                                        rx="1.5"
                                        stroke="url(#paint5_linear_190_2192)"
                                    />
                                    <rect
                                        x="0.5"
                                        y="12.5"
                                        width={3}
                                        height={3}
                                        rx="1.5"
                                        stroke="url(#paint6_linear_190_2192)"
                                    />
                                    <rect
                                        x="6.5"
                                        y="12.5"
                                        width={3}
                                        height={3}
                                        rx="1.5"
                                        stroke="url(#paint7_linear_190_2192)"
                                    />
                                    <rect
                                        x="12.5"
                                        y="12.5"
                                        width={3}
                                        height={3}
                                        rx="1.5"
                                        stroke="url(#paint8_linear_190_2192)"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_190_2192"
                                            x1="-1.21429"
                                            y1="-0.888889"
                                            x2="5.28661"
                                            y2="-0.354346"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#2D2DFF" />
                                            <stop offset={1} stopColor="#00D4FF" />
                                            <stop offset={1} stopColor="#00D4FF" />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint1_linear_190_2192"
                                            x1="4.78571"
                                            y1="-0.888889"
                                            x2="11.2866"
                                            y2="-0.354346"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#2D2DFF" />
                                            <stop offset={1} stopColor="#00D4FF" />
                                            <stop offset={1} stopColor="#00D4FF" />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint2_linear_190_2192"
                                            x1="10.7857"
                                            y1="-0.888889"
                                            x2="17.2866"
                                            y2="-0.354346"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#2D2DFF" />
                                            <stop offset={1} stopColor="#00D4FF" />
                                            <stop offset={1} stopColor="#00D4FF" />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint3_linear_190_2192"
                                            x1="-1.21429"
                                            y1="5.11111"
                                            x2="5.28661"
                                            y2="5.64565"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#2D2DFF" />
                                            <stop offset={1} stopColor="#00D4FF" />
                                            <stop offset={1} stopColor="#00D4FF" />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint4_linear_190_2192"
                                            x1="4.78571"
                                            y1="5.11111"
                                            x2="11.2866"
                                            y2="5.64565"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#2D2DFF" />
                                            <stop offset={1} stopColor="#00D4FF" />
                                            <stop offset={1} stopColor="#00D4FF" />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint5_linear_190_2192"
                                            x1="10.7857"
                                            y1="5.11111"
                                            x2="17.2866"
                                            y2="5.64565"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#2D2DFF" />
                                            <stop offset={1} stopColor="#00D4FF" />
                                            <stop offset={1} stopColor="#00D4FF" />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint6_linear_190_2192"
                                            x1="-1.21429"
                                            y1="11.1111"
                                            x2="5.28661"
                                            y2="11.6457"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#2D2DFF" />
                                            <stop offset={1} stopColor="#00D4FF" />
                                            <stop offset={1} stopColor="#00D4FF" />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint7_linear_190_2192"
                                            x1="4.78571"
                                            y1="11.1111"
                                            x2="11.2866"
                                            y2="11.6457"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#2D2DFF" />
                                            <stop offset={1} stopColor="#00D4FF" />
                                            <stop offset={1} stopColor="#00D4FF" />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint8_linear_190_2192"
                                            x1="10.7857"
                                            y1="11.1111"
                                            x2="17.2866"
                                            y2="11.6457"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#2D2DFF" />
                                            <stop offset={1} stopColor="#00D4FF" />
                                            <stop offset={1} stopColor="#00D4FF" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Offers of the page */}
            <div
                className="bubble-element Group bubble-r-container flex row"
                style={{
                    zIndex: 2,
                    alignSelf: "center",
                    minWidth: 320,
                    maxWidth: 1200,
                    order: 3,
                    minHeight: 150,
                    height: "max-content",
                    flexGrow: 0,
                    flexShrink: 0,
                    width: "calc(100% - 0px)",
                    margin: "0px 0px 100px",
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
                        order: 1,
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
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                zIndex: 12,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 1,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 20px",
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
                            id=""
                            style={{
                                zIndex: 12,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 2,
                                minHeight: 140,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
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
                                    className="bubble-element Group bubble-r-container flex row clickable-element"
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
                                        opacity: 1,
                                        cursor: "pointer"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container fixed"
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
                                    className="bubble-element Group bubble-r-container flex row clickable-element"
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
                                        opacity: 1,
                                        cursor: "pointer"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container fixed"
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
                                    className="bubble-element Group bubble-r-container flex row clickable-element"
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
                                        opacity: 1,
                                        cursor: "pointer"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container fixed"
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
                                    className="bubble-element Group bubble-r-container flex row clickable-element"
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
                                        opacity: 1,
                                        cursor: "pointer"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container fixed"
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
                                    className="bubble-element Group bubble-r-container flex row clickable-element"
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
                                        opacity: 1,
                                        cursor: "pointer"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container fixed"
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
                                    className="bubble-element Group bubble-r-container flex row clickable-element"
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
                                        opacity: 1,
                                        cursor: "pointer"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container fixed"
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
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                zIndex: 7,
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
                                className="bubble-element Text clickable-element"
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
                                    opacity: 1,
                                    cursor: "pointer"
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
                                order: 4,
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
                                        <div>USD 0 - 100</div>
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
                            <div
                                className="bubble-element RepeatingGroup"
                                style={{
                                    visibility: "hidden",
                                    zIndex: 13,
                                    alignSelf: "flex-start",
                                    minWidth: 10,
                                    order: 10,
                                    minHeight: 10,
                                    maxHeight: 1,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "calc(100% - 0px)",
                                    margin: 0,
                                    display: "none"
                                }}
                            />
                            <div
                                className="bubble-element RepeatingGroup"
                                style={{
                                    visibility: "hidden",
                                    zIndex: 13,
                                    alignSelf: "flex-start",
                                    minWidth: 10,
                                    order: 11,
                                    minHeight: 10,
                                    maxHeight: 1,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "calc(100% - 0px)",
                                    margin: 0,
                                    display: "none"
                                }}
                            />
                            <div
                                className="bubble-element RepeatingGroup"
                                style={{
                                    visibility: "hidden",
                                    zIndex: 13,
                                    alignSelf: "flex-start",
                                    minWidth: 10,
                                    order: 12,
                                    minHeight: 10,
                                    maxHeight: 1,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "calc(100% - 0px)",
                                    margin: 0,
                                    display: "none"
                                }}
                            />
                            <div
                                className="bubble-element RepeatingGroup"
                                style={{
                                    visibility: "hidden",
                                    zIndex: 13,
                                    alignSelf: "flex-start",
                                    minWidth: 10,
                                    order: 13,
                                    minHeight: 10,
                                    maxHeight: 1,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "calc(100% - 0px)",
                                    margin: 0,
                                    display: "none"
                                }}
                            />
                        </div>
                        <div
                            className="bubble-element RepeatingGroup"
                            style={{
                                visibility: "hidden",
                                zIndex: 9,
                                alignSelf: "flex-start",
                                minWidth: 10,
                                order: 5,
                                minHeight: 10,
                                maxHeight: 1,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: 0,
                                display: "none"
                            }}
                        />
                        <div
                            className="bubble-element RepeatingGroup"
                            style={{
                                visibility: "hidden",
                                zIndex: 10,
                                alignSelf: "flex-start",
                                minWidth: 10,
                                order: 6,
                                minHeight: 10,
                                maxHeight: 1,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: 0,
                                display: "none"
                            }}
                        />
                        <div
                            className="bubble-element RepeatingGroup"
                            style={{
                                visibility: "hidden",
                                zIndex: 13,
                                alignSelf: "flex-start",
                                minWidth: 10,
                                order: 7,
                                minHeight: 10,
                                maxHeight: 1,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: 0,
                                display: "none"
                            }}
                        />
                        <div
                            className="bubble-element RepeatingGroup"
                            style={{
                                visibility: "hidden",
                                zIndex: 11,
                                alignSelf: "flex-start",
                                minWidth: 10,
                                order: 8,
                                minHeight: 10,
                                maxHeight: 1,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: 0,
                                display: "none"
                            }}
                        />
                    </div>
                </div>
                <div
                    className="bubble-element Group bubble-r-container flex column"
                    style={{
                        zIndex: 5,
                        alignSelf: "flex-start",
                        minWidth: 0,
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
                        className="bubble-element Text"
                        style={{
                            visibility: "hidden",
                            zIndex: 30,
                            alignSelf: "center",
                            minWidth: 0,
                            order: 2,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "auto",
                            margin: 0,
                            display: "none"
                        }}
                    />
                    <div
                        className="bubble-element RepeatingGroup bubble-rg"
                        style={{
                            zIndex: 18,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            order: 3,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: "0px 0px 10px",
                            gap: 20,
                            gridAutoRows: "minmax(max-content, 280px)",
                            gridTemplateColumns: "repeat(3, minmax(0px, 1fr))",
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
                                    margin: 0,
                                    overflow: "visible",
                                    borderRadius: 20,
                                    opacity: 1,
                                    cursor: "pointer",
                                    backgroundColor: "rgba(255, 255, 255, 0)",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundImage:
                                        'url("https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1688214501231x465366423289209400%2FPolygon_blockchain_logo-removebg-preview.png?w=384&h=384&auto=compress&fit=crop&dpr=2")'
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
                                            Crypto
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
                                                fontFamily: "Poppins",
                                                fontSize: 14,
                                                fontWeight: 600,
                                                color: "rgb(255, 255, 255)",
                                                lineHeight: 1,
                                                borderRadius: 0,
                                                opacity: 1,
                                                wordBreak: "break-word"
                                            }}
                                        >
                                            hshrdtdjtu
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
                                                    src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1657633985492x211575392420328060%2F25228.png?w=32&h=32&auto=compress&dpr=2&fit=max"
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
                                                    style={{ position: "relative", paddingTop: "100%" }}
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
                                                    fontFamily: "Poppins",
                                                    fontSize: 14,
                                                    fontWeight: 600,
                                                    color: "rgb(255, 255, 255)",
                                                    textAlign: "right",
                                                    lineHeight: 1,
                                                    borderRadius: 0,
                                                    opacity: 1,
                                                    wordBreak: "break-word"
                                                }}
                                            >
                                                100
                                            </div>
                                        </div>
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
                                    margin: 0
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
                                    margin: 0
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
                                    margin: 0
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
                                    margin: 0
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
                                    margin: 0
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
                                    margin: 0
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
                                    margin: 0
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
                                    margin: 0
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
                                    margin: 0
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
                            </div>
                        </div>
                    </div>
                    <div
                        className="bubble-element RepeatingGroup"
                        style={{
                            visibility: "hidden",
                            zIndex: 19,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            order: 4,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: "0px 0px 10px",
                            display: "none"
                        }}
                    />
                    <div
                        className="bubble-element RepeatingGroup"
                        style={{
                            visibility: "hidden",
                            zIndex: 32,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            order: 5,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: "0px 0px 10px",
                            display: "none"
                        }}
                    />
                    <div
                        className="bubble-element RepeatingGroup"
                        style={{
                            visibility: "hidden",
                            zIndex: 20,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            order: 6,
                            minHeight: 280,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: "0px 0px 10px",
                            display: "none"
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default ExploreBloggers;