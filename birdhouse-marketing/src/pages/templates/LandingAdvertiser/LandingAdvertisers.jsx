import React, { useEffect, useState } from 'react';
import "./style.css"

const LandingAdvertisers = () => {
    return (
        <>
                <div
                    className="bubble-element Image"
                    style={{
                        zIndex: 18,
                        alignSelf: "flex-start",
                        minWidth: 153,
                        maxWidth: 153,
                        order: 3,
                        minHeight: 22,
                        height: "max-content",
                        flexGrow: 0,
                        flexShrink: 0,
                        width: 153,
                        margin: 0,
                        borderRadius: 0,
                        opacity: 1
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
                    className="bubble-element Group bubble-r-container flex row"
                    style={{
                        zIndex: 17,
                        alignSelf: "center",
                        minWidth: 320,
                        maxWidth: 1200,
                        order: 9,
                        minHeight: 0,
                        height: "max-content",
                        flexGrow: 0,
                        flexShrink: 0,
                        width: "calc(100% - 0px)",
                        margin: "170px 0px 120px",
                        justifyContent: "space-between",
                        overflow: "visible",
                        borderRadius: 0,
                        opacity: 1
                    }}
                >
                    <div
                        className="bubble-element Group bubble-r-container flex column"
                        style={{
                            zIndex: 6,
                            alignSelf: "center",
                            minWidth: 300,
                            order: 1,
                            minHeight: 0,
                            width: 300,
                            flexGrow: 1,
                            height: "max-content",
                            margin: "0px 10px 40px",
                            justifyContent: "flex-start",
                            overflow: "visible",
                            borderRadius: 0,
                            opacity: 1
                        }}
                    >
                        <h1
                            className="bubble-element Text"
                            style={{
                                zIndex: 3,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                maxWidth: 900,
                                order: 2,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 25px",
                                whiteSpace: "pre-wrap",
                                overflow: "visible",
                                wordBreak: "break-word",
                                fontFamily: "Poppins",
                                fontSize: 72,
                                fontWeight: 600,
                                color: "rgb(0, 0, 0)",
                                lineHeight: 1,
                                borderRadius: 0,
                                opacity: 1,
                                textDecoration: "none",
                                fontStyle: "normal",
                                textAlign: "left"
                            }}
                        >
                            Influence your ROI up to 11x
                            <font color="#999999">
                                <font size={6}>and build or expand the brand with our blogger</font>
                            </font>
                        </h1>
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
                                margin: "0px 0px 38px",
                                whiteSpace: "pre-wrap",
                                overflow: "visible",
                                wordBreak: "break-word",
                                fontFamily: "Poppins",
                                fontSize: 18,
                                fontWeight: 500,
                                color: "rgb(123, 123, 123)",
                                letterSpacing: "0.5px",
                                lineHeight: "1.4",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            Explore our trusted parthners, who can promote and sell your product
                            to the masses at a low prices with using influence marketing
                        </div>
                        <button
                            className="bubble-element Button"
                            style={{
                                zIndex: 5,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                maxWidth: 138,
                                order: 5,
                                minHeight: 46,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: 0,
                                padding: 0,
                                cursor: "inherit",
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
                            Explore
                        </button>
                    </div>
                    <div
                        className="bubble-element Group bubble-r-container flex column"
                        style={{
                            zIndex: 7,
                            alignSelf: "center",
                            minWidth: 0,
                            order: 3,
                            minHeight: 0,
                            width: 0,
                            flexGrow: 1,
                            height: "max-content",
                            margin: "0px 10px 40px",
                            justifyContent: "flex-start",
                            overflow: "visible",
                            borderRadius: 0,
                            opacity: 1
                        }}
                    >
                        <div
                            className="bubble-element Image"
                            style={{
                                zIndex: 8,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 1,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: 0,
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            <img
                                alt=""
                                src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1657631420634x579904668389891600%2FUntitled%2520design%2520%25283%2529.png?w=512&h=512&auto=compress&dpr=1&fit=max"
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
                            <div style={{ position: "relative", paddingTop: "100%" }} />
                        </div>
                    </div>
                </div>
                <div
                    className="bubble-element Text"
                    style={{
                        zIndex: 9,
                        alignSelf: "center",
                        minWidth: 0,
                        order: 10,
                        minHeight: 0,
                        height: "max-content",
                        flexGrow: 0,
                        flexShrink: 0,
                        width: "auto",
                        margin: "0px 10px 50px",
                        whiteSpace: "pre-wrap",
                        overflow: "visible",
                        wordBreak: "break-word",
                        fontFamily: "Poppins",
                        fontSize: 36,
                        fontWeight: 600,
                        color: "rgb(0, 0, 0)",
                        textAlign: "center",
                        letterSpacing: "0.5px",
                        lineHeight: 1,
                        borderRadius: 0,
                        opacity: 1
                    }}
                >
                    Pay for result, not for clicks
                </div>
                <div
                    className="bubble-element Group bubble-r-container flex row"
                    style={{
                        zIndex: 7,
                        alignSelf: "center",
                        minWidth: 320,
                        maxWidth: 1200,
                        order: 11,
                        minHeight: 0,
                        height: "max-content",
                        flexGrow: 0,
                        flexShrink: 0,
                        width: "calc(100% - 0px)",
                        margin: "0px 0px 85px",
                        justifyContent: "center",
                        overflow: "visible",
                        borderRadius: 0,
                        opacity: 1
                    }}
                >
                    <div
                        className="bubble-element Group bubble-r-container flex column clickable-element"
                        style={{
                            zIndex: 24,
                            alignSelf: "stretch",
                            minWidth: 280,
                            maxWidth: 300,
                            order: 1,
                            minHeight: 0,
                            width: 280,
                            flexGrow: 1,
                            height: "auto",
                            margin: "0px 10px 20px",
                            justifyContent: "flex-start",
                            overflow: "visible",
                            backgroundColor: "rgba(255, 255, 255, 0.7)",
                            borderStyle: "solid",
                            borderWidth: 2,
                            borderColor: "rgb(9, 23, 71)",
                            borderRadius: 15,
                            padding: 20,
                            opacity: 1,
                            cursor: "default"
                        }}
                    >
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                zIndex: 2,
                                alignSelf: "center",
                                minWidth: 80,
                                maxWidth: 80,
                                order: 1,
                                minHeight: 80,
                                maxHeight: 80,
                                height: 80,
                                flexGrow: 1,
                                width: 80,
                                margin: "0px 0px 20px",
                                justifyContent: "center",
                                overflow: "visible",
                                borderRadius: 0,
                                opacity: 1,
                                backgroundColor: "rgba(255, 255, 255, 0)",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundImage:
                                    'url("https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647439422860x592145729085035800/Rectangle%2018.svg")'
                            }}
                        >
                            <div
                                className="bubble-element HTML"
                                style={{
                                    zIndex: 2,
                                    alignSelf: "center",
                                    minWidth: 36,
                                    maxWidth: 36,
                                    order: 1,
                                    minHeight: 36,
                                    maxHeight: 36,
                                    width: 36,
                                    flexGrow: 1,
                                    height: 36,
                                    margin: 0,
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                <svg
                                    width={36}
                                    height={36}
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
                        </div>
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 9,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 2,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 20px",
                                whiteSpace: "pre-wrap",
                                overflow: "visible",
                                wordBreak: "break-word",
                                fontFamily: "Poppins",
                                fontSize: 24,
                                fontWeight: 600,
                                color: "rgb(0, 0, 0)",
                                textAlign: "center",
                                letterSpacing: "0.5px",
                                lineHeight: 1,
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            Pay only for result
                        </div>
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 10,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 3,
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
                                fontSize: 14,
                                fontWeight: 400,
                                color: "rgb(123, 123, 123)",
                                textAlign: "center",
                                lineHeight: "1.5",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            We dont have any subscriptions or other costs. We only charge small
                            fee for each transaction within platform.
                        </div>
                    </div>
                    <div
                        className="bubble-element Group bubble-r-container flex column clickable-element"
                        style={{
                            zIndex: 25,
                            alignSelf: "stretch",
                            minWidth: 280,
                            maxWidth: 300,
                            order: 3,
                            minHeight: 0,
                            width: 280,
                            flexGrow: 1,
                            height: "auto",
                            margin: "0px 10px 20px",
                            justifyContent: "flex-start",
                            overflow: "visible",
                            backgroundColor: "rgba(255, 255, 255, 0.7)",
                            borderStyle: "solid",
                            borderWidth: 2,
                            borderColor: "rgb(9, 23, 71)",
                            borderRadius: 15,
                            padding: 20,
                            opacity: 1,
                            cursor: "default"
                        }}
                    >
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                zIndex: 2,
                                alignSelf: "center",
                                minWidth: 80,
                                maxWidth: 80,
                                order: 1,
                                minHeight: 80,
                                maxHeight: 80,
                                height: 80,
                                flexGrow: 1,
                                width: 80,
                                margin: "0px 0px 20px",
                                justifyContent: "center",
                                overflow: "visible",
                                borderRadius: 0,
                                opacity: 1,
                                backgroundColor: "rgba(255, 255, 255, 0)",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundImage:
                                    'url("https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647439429425x675276110042789800/Rectangle%2018.svg")'
                            }}
                        >
                            <div
                                className="bubble-element HTML"
                                style={{
                                    zIndex: 2,
                                    alignSelf: "center",
                                    minWidth: 36,
                                    maxWidth: 36,
                                    order: 1,
                                    minHeight: 36,
                                    maxHeight: 36,
                                    width: 36,
                                    flexGrow: 1,
                                    height: 36,
                                    margin: 0,
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                <svg
                                    width={36}
                                    height={36}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6.5 8C6.36739 8 6.24021 7.94732 6.14645 7.85355C6.05268 7.75979 6 7.63261 6 7.5C6 7.36739 6.05268 7.24021 6.14645 7.14645C6.24021 7.05268 6.36739 7 6.5 7H17.5C17.6326 7 17.7598 7.05268 17.8536 7.14645C17.9473 7.24021 18 7.36739 18 7.5C18 7.63261 17.9473 7.75979 17.8536 7.85355C17.7598 7.94732 17.6326 8 17.5 8H6.5ZM8.5 6C8.36739 6 8.24021 5.94732 8.14645 5.85355C8.05268 5.75979 8 5.63261 8 5.5C8 5.36739 8.05268 5.24021 8.14645 5.14645C8.24021 5.05268 8.36739 5 8.5 5H15.5C15.6326 5 15.7598 5.05268 15.8536 5.14645C15.9473 5.24021 16 5.36739 16 5.5C16 5.63261 15.9473 5.75979 15.8536 5.85355C15.7598 5.94732 15.6326 6 15.5 6H8.5ZM4 17.5C4 17.8978 4.15804 18.2794 4.43934 18.5607C4.72064 18.842 5.10218 19 5.5 19H18.5C18.8978 19 19.2794 18.842 19.5607 18.5607C19.842 18.2794 20 17.8978 20 17.5V10.5C20 10.1022 19.842 9.72064 19.5607 9.43934C19.2794 9.15804 18.8978 9 18.5 9H5.5C5.10218 9 4.72064 9.15804 4.43934 9.43934C4.15804 9.72064 4 10.1022 4 10.5V17.5ZM5.5 18C5.36739 18 5.24021 17.9473 5.14645 17.8536C5.05268 17.7598 5 17.6326 5 17.5V10.5C5 10.3674 5.05268 10.2402 5.14645 10.1464C5.24021 10.0527 5.36739 10 5.5 10H18.5C18.6326 10 18.7598 10.0527 18.8536 10.1464C18.9473 10.2402 19 10.3674 19 10.5V17.5C19 17.6326 18.9473 17.7598 18.8536 17.8536C18.7598 17.9473 18.6326 18 18.5 18H5.5Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 9,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 2,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 20px",
                                whiteSpace: "pre-wrap",
                                overflow: "visible",
                                wordBreak: "break-word",
                                fontFamily: "Poppins",
                                fontSize: 24,
                                fontWeight: 600,
                                color: "rgb(0, 0, 0)",
                                textAlign: "center",
                                letterSpacing: "0.5px",
                                lineHeight: 1,
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            Trusted bloggers
                        </div>
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                zIndex: 12,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 4,
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
                        />
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 12,
                                alignSelf: "center",
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
                                fontWeight: 400,
                                color: "rgb(123, 123, 123)",
                                textAlign: "center",
                                lineHeight: "1.5",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            We are moderating or bloggers and ensuring quality of their content.
                        </div>
                    </div>
                    <div
                        className="bubble-element Group bubble-r-container flex column clickable-element"
                        style={{
                            zIndex: 26,
                            alignSelf: "stretch",
                            minWidth: 280,
                            maxWidth: 300,
                            order: 4,
                            minHeight: 0,
                            width: 280,
                            flexGrow: 1,
                            height: "auto",
                            margin: "0px 10px 20px",
                            justifyContent: "flex-start",
                            overflow: "visible",
                            backgroundColor: "rgba(255, 255, 255, 0.7)",
                            borderStyle: "solid",
                            borderWidth: 2,
                            borderColor: "rgb(9, 23, 71)",
                            borderRadius: 15,
                            padding: 20,
                            opacity: 1,
                            cursor: "default"
                        }}
                    >
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                zIndex: 2,
                                alignSelf: "center",
                                minWidth: 80,
                                maxWidth: 80,
                                order: 1,
                                minHeight: 80,
                                maxHeight: 80,
                                height: 80,
                                flexGrow: 1,
                                width: 80,
                                margin: "0px 0px 20px",
                                justifyContent: "center",
                                overflow: "visible",
                                borderRadius: 0,
                                opacity: 1,
                                backgroundColor: "rgba(255, 255, 255, 0)",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundImage:
                                    'url("https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647439463181x385103574717489600/Rectangle%2018.svg")'
                            }}
                        >
                            <div
                                className="bubble-element HTML"
                                style={{
                                    zIndex: 2,
                                    alignSelf: "center",
                                    minWidth: 36,
                                    maxWidth: 36,
                                    order: 1,
                                    minHeight: 36,
                                    maxHeight: 36,
                                    width: 36,
                                    flexGrow: 1,
                                    height: 36,
                                    margin: 0,
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                <svg
                                    width={36}
                                    height={36}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18.7198 18.24H5.27984C4.46384 18.24 3.83984 17.616 3.83984 16.8V7.20001C3.83984 6.38401 4.46384 5.76001 5.27984 5.76001H18.7198C19.5358 5.76001 20.1598 6.38401 20.1598 7.20001V16.8C20.1598 17.616 19.5358 18.24 18.7198 18.24ZM5.27984 6.72001C4.99184 6.72001 4.79984 6.91201 4.79984 7.20001V16.8C4.79984 17.088 4.99184 17.28 5.27984 17.28H18.7198C19.0078 17.28 19.1998 17.088 19.1998 16.8V7.20001C19.1998 6.91201 19.0078 6.72001 18.7198 6.72001H5.27984Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M14.3998 11.52C13.3438 11.52 12.4798 10.656 12.4798 9.60001C12.4798 8.54401 13.3438 7.68001 14.3998 7.68001C15.4558 7.68001 16.3198 8.54401 16.3198 9.60001C16.3198 10.656 15.4558 11.52 14.3998 11.52ZM14.3998 8.64001C13.8718 8.64001 13.4398 9.07201 13.4398 9.60001C13.4398 10.128 13.8718 10.56 14.3998 10.56C14.9278 10.56 15.3598 10.128 15.3598 9.60001C15.3598 9.07201 14.9278 8.64001 14.3998 8.64001ZM16.1608 17.28L9.11984 10.752L4.79984 14.7431V13.5L9.11984 9.40801L17.4276 17.28H16.1608Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M19.1998 15.5L16.7998 13.584L15.0214 15L14.3264 14.3414L16.7998 12.336L19.1998 14.3343V15.5Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 9,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 2,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 20px",
                                whiteSpace: "pre-wrap",
                                overflow: "visible",
                                wordBreak: "break-word",
                                fontFamily: "Poppins",
                                fontSize: 24,
                                fontWeight: 600,
                                color: "rgb(0, 0, 0)",
                                textAlign: "center",
                                letterSpacing: "0.5px",
                                lineHeight: 1,
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            No useeless bargain
                        </div>
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 10,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 3,
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
                                fontSize: 14,
                                fontWeight: 400,
                                color: "rgb(123, 123, 123)",
                                textAlign: "center",
                                lineHeight: "1.5",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            We offer p2p marketplace, where you do not need to negotiate directly
                            with blogger.
                        </div>
                    </div>
                </div>
                <div
                    className="bubble-element Group bubble-r-container flex column"
                    style={{
                        zIndex: 5,
                        alignSelf: "center",
                        minWidth: 0,
                        maxWidth: 1180,
                        order: 12,
                        minHeight: 0,
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
                        className="bubble-element Group bubble-r-container flex row"
                        style={{
                            zIndex: 18,
                            alignSelf: "center",
                            minWidth: 0,
                            order: 2,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "auto",
                            margin: "0px 0px 50px",
                            justifyContent: "center",
                            overflow: "visible",
                            borderRadius: 0,
                            opacity: 1
                        }}
                    >
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 16,
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
                                fontSize: 36,
                                fontWeight: 600,
                                color: "rgb(0, 0, 0)",
                                letterSpacing: "0.5px",
                                lineHeight: "1.3",
                                borderRadius: 0,
                                opacity: 1,
                                textDecoration: "none",
                                fontStyle: "normal",
                                textAlign: "left"
                            }}
                        >
                            Top campaings{" "}
                        </div>
                        <div
                            className="bubble-element Text"
                            id="gradient-text"
                            style={{
                                zIndex: 17,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 2,
                                minHeight: 0,
                                width: "max-content",
                                flexGrow: 0,
                                height: "max-content",
                                margin: "0px 8px 0px 0px",
                                whiteSpace: "pre-wrap",
                                overflow: "visible",
                                wordBreak: "break-word",
                                fontFamily: "Poppins",
                                fontSize: 36,
                                fontWeight: 600,
                                color: "rgb(0, 0, 0)",
                                textAlign: "right",
                                letterSpacing: "0.5px",
                                lineHeight: "1.3",
                                borderRadius: 0,
                                opacity: 1,
                                textDecoration: "none",
                                fontStyle: "normal"
                            }}
                        >
                            over last 7 days
                        </div>
                        <div
                            className="bubble-element HTML"
                            style={{
                                visibility: "hidden",
                                zIndex: 9,
                                alignSelf: "center",
                                minWidth: 24,
                                maxWidth: 24,
                                order: 3,
                                minHeight: 24,
                                maxHeight: 24,
                                width: 24,
                                flexGrow: 1,
                                height: 24,
                                margin: "0px 5px 0px 0px"
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
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M16.5303 10.9697C16.8232 11.2626 16.8232 11.7374 16.5303 12.0303L12.5303 16.0303C12.2374 16.3232 11.7626 16.3232 11.4697 16.0303L7.46967 12.0303C7.17678 11.7374 7.17678 11.2626 7.46967 10.9697C7.76256 10.6768 8.23744 10.6768 8.53033 10.9697L12 14.4393L15.4697 10.9697C15.7626 10.6768 16.2374 10.6768 16.5303 10.9697Z"
                                    fill="url(#paint0_linear_190_1099)"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_190_1099"
                                        x1="4.36607"
                                        y1="9.52778"
                                        x2="19.6027"
                                        y2="11.6918"
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
                    <div
                        className="bubble-element Group bubble-r-container flex column"
                        id="scrolling"
                        style={{
                            zIndex: 19,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            order: 5,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: 0,
                            justifyContent: "flex-start",
                            overflow: "visible",
                            borderRadius: 10,
                            opacity: 1
                        }}
                    >
                        <div
                            className="bubble-element Group bubble-r-container flex column"
                            id=""
                            style={{
                                zIndex: 12,
                                alignSelf: "flex-start",
                                minWidth: 900,
                                order: 1,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: 0,
                                justifyContent: "flex-start",
                                overflow: "visible",
                                backgroundColor: "rgba(255, 255, 255, 0.7)",
                                borderStyle: "solid",
                                borderWidth: 1,
                                borderColor: "rgb(238, 238, 238)",
                                borderRadius: 15,
                                opacity: 1
                            }}
                        >
                            <div
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    zIndex: 11,
                                    alignSelf: "center",
                                    minWidth: 0,
                                    order: 2,
                                    minHeight: 0,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "calc(100% - 0px)",
                                    margin: "30px 0px 23px",
                                    justifyContent: "center",
                                    gap: "0px 10px",
                                    overflow: "visible",
                                    borderRadius: 0,
                                    padding: "0px 25px",
                                    opacity: 1
                                }}
                            >
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 2,
                                        alignSelf: "flex-start",
                                        minWidth: 79,
                                        maxWidth: "45%",
                                        order: 1,
                                        minHeight: 16,
                                        width: 79,
                                        flexGrow: 1,
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
                                    Campaing name
                                </div>
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 4,
                                        alignSelf: "flex-start",
                                        minWidth: 79,
                                        maxWidth: "10%",
                                        order: 2,
                                        minHeight: 16,
                                        width: 79,
                                        flexGrow: 1,
                                        height: "max-content",
                                        margin: 0,
                                        whiteSpace: "pre-wrap",
                                        overflow: "visible",
                                        wordBreak: "break-word",
                                        fontFamily: "Poppins",
                                        fontSize: 16,
                                        fontWeight: 500,
                                        color: "rgb(123, 123, 123)",
                                        letterSpacing: "0.5px",
                                        lineHeight: "1.5",
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    Category
                                </div>
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 6,
                                        alignSelf: "flex-start",
                                        minWidth: 79,
                                        maxWidth: "15%",
                                        order: 3,
                                        minHeight: 16,
                                        width: 79,
                                        flexGrow: 1,
                                        height: "max-content",
                                        margin: 0,
                                        whiteSpace: "pre-wrap",
                                        overflow: "visible",
                                        wordBreak: "break-word",
                                        fontFamily: "Poppins",
                                        fontSize: 16,
                                        fontWeight: 500,
                                        color: "rgb(123, 123, 123)",
                                        letterSpacing: "0.5px",
                                        lineHeight: "1.5",
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    Blogger's orders ammount
                                </div>
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 3,
                                        alignSelf: "flex-start",
                                        minWidth: 79,
                                        maxWidth: "10%",
                                        order: 4,
                                        minHeight: 16,
                                        width: 79,
                                        flexGrow: 1,
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
                                    ROI
                                </div>
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 5,
                                        alignSelf: "flex-start",
                                        minWidth: 79,
                                        maxWidth: "10%",
                                        order: 5,
                                        minHeight: 16,
                                        width: 79,
                                        flexGrow: 1,
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
                                    Average ROI by Category
                                </div>
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 7,
                                        alignSelf: "flex-start",
                                        minWidth: 79,
                                        maxWidth: "10%",
                                        order: 6,
                                        minHeight: 16,
                                        width: 79,
                                        flexGrow: 1,
                                        height: "max-content",
                                        margin: 0,
                                        whiteSpace: "pre-wrap",
                                        overflow: "visible",
                                        wordBreak: "break-word",
                                        fontFamily: "Poppins",
                                        fontSize: 16,
                                        fontWeight: 500,
                                        color: "rgb(123, 123, 123)",
                                        textAlign: "center",
                                        letterSpacing: 1,
                                        lineHeight: "1.5",
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    Price
                                </div>
                            </div>
                            <div
                                className="bubble-element RepeatingGroup bubble-rg"
                                id="noscroll"
                                style={{
                                    zIndex: 10,
                                    alignSelf: "center",
                                    minWidth: 0,
                                    order: 3,
                                    minHeight: 0,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "calc(100% - 0px)",
                                    margin: "10px 0px 0px",
                                    gap: 0,
                                    gridAutoRows: "minmax(max-content, 60px)",
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
                                        minHeight: 60,
                                        borderTopStyle: "none",
                                        borderLeftStyle: "none"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 13,
                                            alignSelf: "center",
                                            minWidth: 0,
                                            order: 2,
                                            minHeight: 60,
                                            width: 0,
                                            flexGrow: 1,
                                            height: "max-content",
                                            margin: 0,
                                            justifyContent: "center",
                                            gap: "0px 10px",
                                            overflow: "visible",
                                            backgroundColor: "rgb(249, 250, 251)",
                                            borderRadius: 0,
                                            padding: "0px 25px",
                                            opacity: 1
                                        }}
                                    >
                                        <div
                                            className="bubble-element Group bubble-r-container flex row clickable-element"
                                            style={{
                                                zIndex: 9,
                                                alignSelf: "center",
                                                minWidth: 0,
                                                maxWidth: "45%",
                                                order: 1,
                                                minHeight: 60,
                                                maxHeight: 60,
                                                width: 0,
                                                flexGrow: 1,
                                                height: 60,
                                                margin: 0,
                                                justifyContent: "flex-start",
                                                overflow: "visible",
                                                borderRadius: 0,
                                                opacity: 1,
                                                cursor: "pointer"
                                            }}
                                        >
                                            <div
                                                className="bubble-element Image"
                                                style={{
                                                    zIndex: 9,
                                                    alignSelf: "center",
                                                    minWidth: 34,
                                                    maxWidth: 34,
                                                    order: 1,
                                                    minHeight: 34,
                                                    maxHeight: 34,
                                                    width: 34,
                                                    flexGrow: 1,
                                                    height: 34,
                                                    margin: "0px 10px 0px 0px",
                                                    borderRadius: 5,
                                                    opacity: 1
                                                }}
                                            >
                                                <img
                                                    alt=""
                                                    src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1688214501231x465366423289209400%2FPolygon_blockchain_logo-removebg-preview.png?w=48&h=48&auto=compress&dpr=1&fit=max"
                                                    style={{
                                                        position: "absolute",
                                                        top: 0,
                                                        left: 0,
                                                        display: "block",
                                                        width: "100%",
                                                        height: "100%",
                                                        margin: 0,
                                                        objectFit: "contain",
                                                        borderRadius: 5
                                                    }}
                                                />
                                                <div style={{ display: "none" }} />
                                            </div>
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 2,
                                                    alignSelf: "center",
                                                    minWidth: 0,
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
                                                    fontSize: 16,
                                                    fontWeight: 500,
                                                    color: "rgb(0, 0, 0)",
                                                    letterSpacing: "0.5px",
                                                    lineHeight: "1.5",
                                                    borderRadius: 0,
                                                    opacity: 1
                                                }}
                                            >
                                                hshrdtdjtu
                                            </div>
                                        </div>
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 12,
                                                alignSelf: "center",
                                                minWidth: 0,
                                                maxWidth: "10%",
                                                order: 2,
                                                minHeight: 60,
                                                maxHeight: 60,
                                                width: 0,
                                                flexGrow: 1,
                                                height: 60,
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
                                                    letterSpacing: "0.5px",
                                                    lineHeight: "1.5",
                                                    borderRadius: 0,
                                                    opacity: 1
                                                }}
                                            >
                                                Crypto
                                            </div>
                                        </div>
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 14,
                                                alignSelf: "center",
                                                minWidth: 0,
                                                maxWidth: "15%",
                                                order: 3,
                                                minHeight: 60,
                                                maxHeight: 60,
                                                width: 0,
                                                flexGrow: 1,
                                                height: 60,
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
                                                    letterSpacing: "0.5px",
                                                    lineHeight: "1.5",
                                                    borderRadius: 0,
                                                    opacity: 1
                                                }}
                                            />
                                        </div>
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 11,
                                                alignSelf: "center",
                                                minWidth: 0,
                                                maxWidth: "10%",
                                                order: 4,
                                                minHeight: 60,
                                                maxHeight: 60,
                                                width: 0,
                                                flexGrow: 1,
                                                height: 60,
                                                margin: 0,
                                                justifyContent: "flex-start",
                                                gap: 0,
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
                                                    order: 4,
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
                                                    letterSpacing: "0.5px",
                                                    lineHeight: "1.5",
                                                    borderRadius: 0,
                                                    opacity: 1
                                                }}
                                            >
                                                0%
                                            </div>
                                        </div>
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 15,
                                                alignSelf: "center",
                                                minWidth: 0,
                                                maxWidth: "10%",
                                                order: 5,
                                                minHeight: 60,
                                                maxHeight: 60,
                                                width: 0,
                                                flexGrow: 1,
                                                height: 60,
                                                margin: 0,
                                                justifyContent: "flex-start",
                                                gap: 0,
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
                                                    order: 4,
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
                                                    letterSpacing: "0.5px",
                                                    lineHeight: "1.5",
                                                    borderRadius: 0,
                                                    opacity: 1
                                                }}
                                            >
                                                0%
                                            </div>
                                        </div>
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 13,
                                                alignSelf: "center",
                                                minWidth: 0,
                                                maxWidth: "10%",
                                                order: 6,
                                                minHeight: 60,
                                                maxHeight: 60,
                                                width: 0,
                                                flexGrow: 1,
                                                height: 60,
                                                margin: 0,
                                                justifyContent: "flex-start",
                                                gap: 0,
                                                overflow: "visible",
                                                borderRadius: 0,
                                                opacity: 1
                                            }}
                                        >
                                            <div
                                                className="bubble-element Image"
                                                style={{
                                                    zIndex: 10,
                                                    alignSelf: "center",
                                                    minWidth: 34,
                                                    maxWidth: 34,
                                                    order: 1,
                                                    minHeight: 34,
                                                    maxHeight: 34,
                                                    width: 34,
                                                    flexGrow: 1,
                                                    height: 34,
                                                    margin: "0px 10px 0px 0px",
                                                    borderRadius: 5,
                                                    opacity: 1
                                                }}
                                            >
                                                <img
                                                    alt=""
                                                    src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1657633985492x211575392420328060%2F25228.png?w=48&h=48&auto=compress&dpr=1&fit=max"
                                                    style={{
                                                        borderRadius: 5,
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
                                                <div style={{ display: "none" }} />
                                            </div>
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 2,
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
                                                    fontSize: 16,
                                                    fontWeight: 500,
                                                    color: "rgb(0, 0, 0)",
                                                    textAlign: "right",
                                                    letterSpacing: "0.5px",
                                                    lineHeight: "1.5",
                                                    borderRadius: 0,
                                                    opacity: 1
                                                }}
                                            >
                                                100
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="bubble-element GroupItem bubble-r-container flex row group-item entry-2"
                                    style={{
                                        justifyContent: "center",
                                        boxSizing: "content-box",
                                        minHeight: 60,
                                        borderTop: "0px none rgba(150, 150, 150, 0.5)",
                                        marginTop: 0,
                                        borderLeftStyle: "none"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 13,
                                            alignSelf: "center",
                                            minWidth: 0,
                                            order: 2,
                                            minHeight: 60,
                                            width: 0,
                                            flexGrow: 1,
                                            height: "max-content",
                                            margin: 0,
                                            justifyContent: "center",
                                            gap: "0px 10px",
                                            overflow: "visible",
                                            borderRadius: 0,
                                            padding: "0px 25px",
                                            opacity: 1
                                        }}
                                    >
                                        <div
                                            className="bubble-element Group bubble-r-container flex row clickable-element"
                                            style={{
                                                zIndex: 9,
                                                alignSelf: "center",
                                                minWidth: 0,
                                                maxWidth: "45%",
                                                order: 1,
                                                minHeight: 60,
                                                maxHeight: 60,
                                                width: 0,
                                                flexGrow: 1,
                                                height: 60,
                                                margin: 0,
                                                justifyContent: "flex-start",
                                                overflow: "visible",
                                                borderRadius: 0,
                                                opacity: 1,
                                                cursor: "pointer"
                                            }}
                                        >
                                            <div
                                                className="bubble-element Image"
                                                style={{
                                                    zIndex: 9,
                                                    alignSelf: "center",
                                                    minWidth: 34,
                                                    maxWidth: 34,
                                                    order: 1,
                                                    minHeight: 34,
                                                    maxHeight: 34,
                                                    width: 34,
                                                    flexGrow: 1,
                                                    height: 34,
                                                    margin: "0px 10px 0px 0px",
                                                    borderRadius: 5,
                                                    opacity: 1
                                                }}
                                            >
                                                <img
                                                    alt=""
                                                    src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1688368811224x263609441702520770%2F14f6944b242eef8884e860f46c01a291.png?w=48&h=48&auto=compress&dpr=1&fit=max"
                                                    style={{
                                                        position: "absolute",
                                                        top: 0,
                                                        left: 0,
                                                        display: "block",
                                                        width: "100%",
                                                        height: "100%",
                                                        margin: 0,
                                                        objectFit: "contain",
                                                        borderRadius: 5
                                                    }}
                                                />
                                                <div style={{ display: "none" }} />
                                            </div>
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 2,
                                                    alignSelf: "center",
                                                    minWidth: 0,
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
                                                    fontSize: 16,
                                                    fontWeight: 500,
                                                    color: "rgb(0, 0, 0)",
                                                    letterSpacing: "0.5px",
                                                    lineHeight: "1.5",
                                                    borderRadius: 0,
                                                    opacity: 1
                                                }}
                                            >
                                                Costa Coffe
                                            </div>
                                        </div>
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 12,
                                                alignSelf: "center",
                                                minWidth: 0,
                                                maxWidth: "10%",
                                                order: 2,
                                                minHeight: 60,
                                                maxHeight: 60,
                                                width: 0,
                                                flexGrow: 1,
                                                height: 60,
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
                                                    letterSpacing: "0.5px",
                                                    lineHeight: "1.5",
                                                    borderRadius: 0,
                                                    opacity: 1
                                                }}
                                            >
                                                Lifestyle
                                            </div>
                                        </div>
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 14,
                                                alignSelf: "center",
                                                minWidth: 0,
                                                maxWidth: "15%",
                                                order: 3,
                                                minHeight: 60,
                                                maxHeight: 60,
                                                width: 0,
                                                flexGrow: 1,
                                                height: 60,
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
                                                    letterSpacing: "0.5px",
                                                    lineHeight: "1.5",
                                                    borderRadius: 0,
                                                    opacity: 1
                                                }}
                                            />
                                        </div>
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 11,
                                                alignSelf: "center",
                                                minWidth: 0,
                                                maxWidth: "10%",
                                                order: 4,
                                                minHeight: 60,
                                                maxHeight: 60,
                                                width: 0,
                                                flexGrow: 1,
                                                height: 60,
                                                margin: 0,
                                                justifyContent: "flex-start",
                                                gap: 0,
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
                                                    order: 4,
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
                                                    letterSpacing: "0.5px",
                                                    lineHeight: "1.5",
                                                    borderRadius: 0,
                                                    opacity: 1
                                                }}
                                            >
                                                0%
                                            </div>
                                        </div>
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 15,
                                                alignSelf: "center",
                                                minWidth: 0,
                                                maxWidth: "10%",
                                                order: 5,
                                                minHeight: 60,
                                                maxHeight: 60,
                                                width: 0,
                                                flexGrow: 1,
                                                height: 60,
                                                margin: 0,
                                                justifyContent: "flex-start",
                                                gap: 0,
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
                                                    order: 4,
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
                                                    letterSpacing: "0.5px",
                                                    lineHeight: "1.5",
                                                    borderRadius: 0,
                                                    opacity: 1
                                                }}
                                            >
                                                0%
                                            </div>
                                        </div>
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 13,
                                                alignSelf: "center",
                                                minWidth: 0,
                                                maxWidth: "10%",
                                                order: 6,
                                                minHeight: 60,
                                                maxHeight: 60,
                                                width: 0,
                                                flexGrow: 1,
                                                height: 60,
                                                margin: 0,
                                                justifyContent: "flex-start",
                                                gap: 0,
                                                overflow: "visible",
                                                borderRadius: 0,
                                                opacity: 1
                                            }}
                                        >
                                            <div
                                                className="bubble-element Image"
                                                style={{
                                                    zIndex: 10,
                                                    alignSelf: "center",
                                                    minWidth: 34,
                                                    maxWidth: 34,
                                                    order: 1,
                                                    minHeight: 34,
                                                    maxHeight: 34,
                                                    width: 34,
                                                    flexGrow: 1,
                                                    height: 34,
                                                    margin: "0px 10px 0px 0px",
                                                    borderRadius: 5,
                                                    opacity: 1
                                                }}
                                            >
                                                <img
                                                    alt=""
                                                    src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1657633985492x211575392420328060%2F25228.png?w=48&h=48&auto=compress&dpr=1&fit=max"
                                                    style={{
                                                        borderRadius: 5,
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
                                                <div style={{ display: "none" }} />
                                            </div>
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 2,
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
                                                    fontSize: 16,
                                                    fontWeight: 500,
                                                    color: "rgb(0, 0, 0)",
                                                    textAlign: "right",
                                                    letterSpacing: "0.5px",
                                                    lineHeight: "1.5",
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
                                    className="bubble-element GroupItem bubble-r-container flex row group-item entry-3"
                                    style={{
                                        justifyContent: "center",
                                        boxSizing: "content-box",
                                        minHeight: 60,
                                        borderTop: "0px none rgba(150, 150, 150, 0.5)",
                                        marginTop: 0,
                                        borderLeftStyle: "none",
                                        display: "none"
                                    }}
                                >
                                    <div
                                        className="bubble-element Group bubble-r-container flex row"
                                        style={{
                                            zIndex: 13,
                                            alignSelf: "center",
                                            minWidth: 0,
                                            order: 2,
                                            minHeight: 60,
                                            width: 0,
                                            flexGrow: 1,
                                            height: "max-content",
                                            margin: 0,
                                            justifyContent: "center",
                                            gap: "0px 10px"
                                        }}
                                    >
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 9,
                                                alignSelf: "center",
                                                minWidth: 0,
                                                maxWidth: "45%",
                                                order: 1,
                                                minHeight: 60,
                                                maxHeight: 60,
                                                width: 0,
                                                flexGrow: 1,
                                                height: 60,
                                                margin: 0,
                                                justifyContent: "flex-start"
                                            }}
                                        >
                                            <div
                                                className="bubble-element Image"
                                                style={{
                                                    zIndex: 9,
                                                    alignSelf: "center",
                                                    minWidth: 34,
                                                    maxWidth: 34,
                                                    order: 1,
                                                    minHeight: 34,
                                                    maxHeight: 34,
                                                    width: 34,
                                                    flexGrow: 1,
                                                    height: 34,
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 2,
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
                                        <div
                                            className="bubble-element Group bubble-r-container flex row"
                                            style={{
                                                zIndex: 12,
                                                alignSelf: "center",
                                                minWidth: 0,
                                                maxWidth: "10%",
                                                order: 2,
                                                minHeight: 60,
                                                maxHeight: 60,
                                                width: 0,
                                                flexGrow: 1,
                                                height: 60,
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
                                                zIndex: 14,
                                                alignSelf: "center",
                                                minWidth: 0,
                                                maxWidth: "15%",
                                                order: 3,
                                                minHeight: 60,
                                                maxHeight: 60,
                                                width: 0,
                                                flexGrow: 1,
                                                height: 60,
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
                                                zIndex: 11,
                                                alignSelf: "center",
                                                minWidth: 0,
                                                maxWidth: "10%",
                                                order: 4,
                                                minHeight: 60,
                                                maxHeight: 60,
                                                width: 0,
                                                flexGrow: 1,
                                                height: 60,
                                                margin: 0,
                                                justifyContent: "flex-start",
                                                gap: 0
                                            }}
                                        >
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 2,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 4,
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
                                                zIndex: 15,
                                                alignSelf: "center",
                                                minWidth: 0,
                                                maxWidth: "10%",
                                                order: 5,
                                                minHeight: 60,
                                                maxHeight: 60,
                                                width: 0,
                                                flexGrow: 1,
                                                height: 60,
                                                margin: 0,
                                                justifyContent: "flex-start",
                                                gap: 0
                                            }}
                                        >
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 2,
                                                    alignSelf: "center",
                                                    minWidth: 0,
                                                    order: 4,
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
                                                zIndex: 13,
                                                alignSelf: "center",
                                                minWidth: 0,
                                                maxWidth: "10%",
                                                order: 6,
                                                minHeight: 60,
                                                maxHeight: 60,
                                                width: 0,
                                                flexGrow: 1,
                                                height: 60,
                                                margin: 0,
                                                justifyContent: "flex-start",
                                                gap: 0
                                            }}
                                        >
                                            <div
                                                className="bubble-element Image"
                                                style={{
                                                    zIndex: 10,
                                                    alignSelf: "center",
                                                    minWidth: 34,
                                                    maxWidth: 34,
                                                    order: 1,
                                                    minHeight: 34,
                                                    maxHeight: 34,
                                                    width: 34,
                                                    flexGrow: 1,
                                                    height: 34,
                                                    margin: "0px 10px 0px 0px"
                                                }}
                                            />
                                            <div
                                                className="bubble-element Text"
                                                style={{
                                                    zIndex: 2,
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
                    <button
                        className="bubble-element Button clickable-element"
                        style={{
                            visibility: "hidden",
                            zIndex: 6,
                            alignSelf: "center",
                            minWidth: 0,
                            maxWidth: 202,
                            order: 6,
                            minHeight: 46,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: "40px 0px 0px",
                            padding: 0,
                            cursor: "inherit",
                            background: "none",
                            border: "none",
                            textAlign: "left"
                        }}
                    />
                </div>
                <button
                    className="bubble-element Button"
                    style={{
                        visibility: "hidden",
                        zIndex: 3,
                        alignSelf: "center",
                        minWidth: 0,
                        maxWidth: 233,
                        order: 13,
                        minHeight: 46,
                        height: "max-content",
                        flexGrow: 0,
                        flexShrink: 0,
                        width: "calc(100% - 20px)",
                        margin: "0px 10px",
                        display: "none"
                    }}
                />
                <div
                    className="bubble-element Group bubble-r-container flex row"
                    style={{
                        zIndex: 6,
                        alignSelf: "center",
                        minWidth: 320,
                        maxWidth: 1200,
                        order: 15,
                        minHeight: 0,
                        height: "max-content",
                        flexGrow: 0,
                        flexShrink: 0,
                        width: "calc(100% - 0px)",
                        margin: "50px 0px 70px",
                        justifyContent: "space-between",
                        overflow: "visible",
                        borderRadius: 0,
                        opacity: 1
                    }}
                />
                <div
                    className="bubble-element Group bubble-r-container flex row"
                    style={{
                        zIndex: 17,
                        alignSelf: "center",
                        minWidth: 320,
                        maxWidth: 1200,
                        order: 17,
                        minHeight: 0,
                        height: "max-content",
                        flexGrow: 0,
                        flexShrink: 0,
                        width: "calc(100% - 0px)",
                        margin: "50px 0px 70px",
                        justifyContent: "center",
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
                            minWidth: 300,
                            order: 1,
                            minHeight: 0,
                            width: 300,
                            flexGrow: 1,
                            height: "max-content",
                            margin: "0px 10px 20px",
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
                                maxWidth: 478,
                                order: 1,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 14px",
                                whiteSpace: "pre-wrap",
                                overflow: "visible",
                                wordBreak: "break-word",
                                fontFamily: "Poppins",
                                fontSize: 48,
                                fontWeight: "bold",
                                color: "rgb(0, 0, 0)",
                                lineHeight: "1.5",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            How does it work?
                        </div>
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                zIndex: 26,
                                alignSelf: "stretch",
                                minWidth: 0,
                                maxWidth: 600,
                                order: 4,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "auto",
                                margin: "0px 10px 20px",
                                justifyContent: "flex-end",
                                overflow: "visible",
                                backgroundColor: "rgba(255, 255, 255, 0.7)",
                                borderStyle: "solid",
                                borderWidth: 2,
                                borderColor: "rgb(9, 23, 71)",
                                borderRadius: 15,
                                padding: 10,
                                opacity: 1
                            }}
                        >
                            <div
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    zIndex: 2,
                                    alignSelf: "center",
                                    minWidth: 80,
                                    maxWidth: 80,
                                    order: 1,
                                    minHeight: 80,
                                    width: 80,
                                    flexGrow: 1,
                                    height: "max-content",
                                    margin: "0px 0px 0px 5px",
                                    justifyContent: "center",
                                    overflow: "visible",
                                    borderRadius: 0,
                                    opacity: 1,
                                    backgroundColor: "rgba(255, 255, 255, 0)",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundImage:
                                        'url("https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647439469005x850476471653050900/Rectangle%2018.svg")'
                                }}
                            >
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        alignSelf: "center",
                                        minWidth: 36,
                                        order: 2,
                                        minHeight: 36,
                                        width: 36,
                                        flexGrow: 1,
                                        height: "max-content",
                                        margin: 0,
                                        whiteSpace: "pre-wrap",
                                        overflow: "visible",
                                        wordBreak: "break-word",
                                        fontFamily: "Poppins",
                                        fontSize: 36,
                                        fontWeight: 700,
                                        color: "rgb(1, 4, 13)",
                                        textAlign: "center",
                                        lineHeight: 1,
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    1
                                </div>
                            </div>
                            <div
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    zIndex: 11,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 2,
                                    minHeight: 0,
                                    width: 0,
                                    flexGrow: 1,
                                    height: "max-content",
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
                                        zIndex: 9,
                                        alignSelf: "flex-start",
                                        minWidth: 400,
                                        maxWidth: 400,
                                        order: 1,
                                        minHeight: 24,
                                        width: 400,
                                        flexGrow: 1,
                                        height: "max-content",
                                        margin: "10px 0px",
                                        whiteSpace: "pre-wrap",
                                        overflow: "visible",
                                        wordBreak: "break-word",
                                        fontFamily: "Poppins",
                                        fontSize: 24,
                                        fontWeight: 600,
                                        color: "rgb(0, 0, 0)",
                                        textAlign: "center",
                                        letterSpacing: "0.5px",
                                        lineHeight: 1,
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    Register on platform
                                </div>
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 10,
                                        alignSelf: "flex-start",
                                        minWidth: 400,
                                        maxWidth: 400,
                                        order: 3,
                                        minHeight: 0,
                                        width: 400,
                                        flexGrow: 1,
                                        height: "max-content",
                                        margin: "10px 0px",
                                        whiteSpace: "pre-wrap",
                                        overflow: "visible",
                                        wordBreak: "break-word",
                                        fontFamily: "Poppins",
                                        fontSize: 14,
                                        fontWeight: 400,
                                        color: "rgb(123, 123, 123)",
                                        textAlign: "center",
                                        lineHeight: "1.5",
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    Register and link your product's website, this wont take more than
                                    couple of minutes. Then we will verify your profile. This will
                                    take up to 24 hours.
                                </div>
                            </div>
                        </div>
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                zIndex: 30,
                                alignSelf: "stretch",
                                minWidth: 0,
                                maxWidth: 600,
                                order: 5,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "auto",
                                margin: "0px 10px 20px",
                                justifyContent: "flex-end",
                                overflow: "visible",
                                backgroundColor: "rgba(255, 255, 255, 0.7)",
                                borderStyle: "solid",
                                borderWidth: 2,
                                borderColor: "rgb(9, 23, 71)",
                                borderRadius: 15,
                                padding: 10,
                                opacity: 1
                            }}
                        >
                            <div
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    zIndex: 2,
                                    alignSelf: "center",
                                    minWidth: 80,
                                    maxWidth: 80,
                                    order: 1,
                                    minHeight: 80,
                                    width: 80,
                                    flexGrow: 1,
                                    height: "max-content",
                                    margin: "0px 0px 0px 5px",
                                    justifyContent: "center",
                                    overflow: "visible",
                                    borderRadius: 0,
                                    opacity: 1,
                                    backgroundColor: "rgba(255, 255, 255, 0)",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundImage:
                                        'url("https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647439469005x850476471653050900/Rectangle%2018.svg")'
                                }}
                            >
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        alignSelf: "center",
                                        minWidth: 36,
                                        order: 2,
                                        minHeight: 36,
                                        width: 36,
                                        flexGrow: 1,
                                        height: "max-content",
                                        margin: 0,
                                        whiteSpace: "pre-wrap",
                                        overflow: "visible",
                                        wordBreak: "break-word",
                                        fontFamily: "Poppins",
                                        fontSize: 36,
                                        fontWeight: 700,
                                        color: "rgb(1, 4, 13)",
                                        textAlign: "center",
                                        lineHeight: 1,
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    2
                                </div>
                            </div>
                            <div
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    zIndex: 11,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 2,
                                    minHeight: 0,
                                    width: 0,
                                    flexGrow: 1,
                                    height: "max-content",
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
                                        zIndex: 9,
                                        alignSelf: "flex-start",
                                        minWidth: 400,
                                        maxWidth: 400,
                                        order: 1,
                                        minHeight: 24,
                                        width: 400,
                                        flexGrow: 1,
                                        height: "max-content",
                                        margin: "10px 0px",
                                        whiteSpace: "pre-wrap",
                                        overflow: "visible",
                                        wordBreak: "break-word",
                                        fontFamily: "Poppins",
                                        fontSize: 24,
                                        fontWeight: 600,
                                        color: "rgb(0, 0, 0)",
                                        textAlign: "center",
                                        letterSpacing: "0.5px",
                                        lineHeight: 1,
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    Choose your bloggers
                                </div>
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 10,
                                        alignSelf: "flex-start",
                                        minWidth: 400,
                                        maxWidth: 400,
                                        order: 3,
                                        minHeight: 0,
                                        width: 400,
                                        flexGrow: 1,
                                        height: "max-content",
                                        margin: "10px 0px",
                                        whiteSpace: "pre-wrap",
                                        overflow: "visible",
                                        wordBreak: "break-word",
                                        fontFamily: "Poppins",
                                        fontSize: 14,
                                        fontWeight: 400,
                                        color: "rgb(123, 123, 123)",
                                        textAlign: "center",
                                        lineHeight: "1.5",
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    You can easily access our bloggers' marketplace or &nbsp;create
                                    campaign.
                                </div>
                            </div>
                        </div>
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                zIndex: 31,
                                alignSelf: "stretch",
                                minWidth: 0,
                                maxWidth: 600,
                                order: 6,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "auto",
                                margin: "0px 10px 20px",
                                justifyContent: "flex-end",
                                overflow: "visible",
                                backgroundColor: "rgba(255, 255, 255, 0.7)",
                                borderStyle: "solid",
                                borderWidth: 2,
                                borderColor: "rgb(9, 23, 71)",
                                borderRadius: 15,
                                padding: 10,
                                opacity: 1
                            }}
                        >
                            <div
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    zIndex: 2,
                                    alignSelf: "center",
                                    minWidth: 80,
                                    maxWidth: 80,
                                    order: 1,
                                    minHeight: 80,
                                    width: 80,
                                    flexGrow: 1,
                                    height: "max-content",
                                    margin: "0px 0px 0px 5px",
                                    justifyContent: "center",
                                    overflow: "visible",
                                    borderRadius: 0,
                                    opacity: 1,
                                    backgroundColor: "rgba(255, 255, 255, 0)",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundImage:
                                        'url("https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647439469005x850476471653050900/Rectangle%2018.svg")'
                                }}
                            >
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        alignSelf: "center",
                                        minWidth: 36,
                                        order: 2,
                                        minHeight: 36,
                                        width: 36,
                                        flexGrow: 1,
                                        height: "max-content",
                                        margin: 0,
                                        whiteSpace: "pre-wrap",
                                        overflow: "visible",
                                        wordBreak: "break-word",
                                        fontFamily: "Poppins",
                                        fontSize: 36,
                                        fontWeight: 700,
                                        color: "rgb(1, 4, 13)",
                                        textAlign: "center",
                                        lineHeight: 1,
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    3
                                </div>
                            </div>
                            <div
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    zIndex: 11,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 2,
                                    minHeight: 0,
                                    width: 0,
                                    flexGrow: 1,
                                    height: "max-content",
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
                                        zIndex: 9,
                                        alignSelf: "flex-start",
                                        minWidth: 400,
                                        maxWidth: 400,
                                        order: 1,
                                        minHeight: 24,
                                        width: 400,
                                        flexGrow: 1,
                                        height: "max-content",
                                        margin: "10px 0px",
                                        whiteSpace: "pre-wrap",
                                        overflow: "visible",
                                        wordBreak: "break-word",
                                        fontFamily: "Poppins",
                                        fontSize: 24,
                                        fontWeight: 600,
                                        color: "rgb(0, 0, 0)",
                                        textAlign: "center",
                                        letterSpacing: "0.5px",
                                        lineHeight: 1,
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    Promote your product
                                </div>
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 10,
                                        alignSelf: "flex-start",
                                        minWidth: 400,
                                        maxWidth: 400,
                                        order: 3,
                                        minHeight: 0,
                                        width: 400,
                                        flexGrow: 1,
                                        height: "max-content",
                                        margin: "10px 0px",
                                        whiteSpace: "pre-wrap",
                                        overflow: "visible",
                                        wordBreak: "break-word",
                                        fontFamily: "Poppins",
                                        fontSize: 14,
                                        fontWeight: 400,
                                        color: "rgb(123, 123, 123)",
                                        textAlign: "center",
                                        lineHeight: "1.5",
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    It takes a while for blogger to find your caompaing and accept
                                    your sponsorship.
                                </div>
                            </div>
                        </div>
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                zIndex: 32,
                                alignSelf: "stretch",
                                minWidth: 0,
                                maxWidth: 600,
                                order: 7,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "auto",
                                margin: "0px 10px 20px",
                                justifyContent: "flex-end",
                                overflow: "visible",
                                backgroundColor: "rgba(255, 255, 255, 0.7)",
                                borderStyle: "solid",
                                borderWidth: 2,
                                borderColor: "rgb(9, 23, 71)",
                                borderRadius: 15,
                                padding: 10,
                                opacity: 1
                            }}
                        >
                            <div
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    zIndex: 2,
                                    alignSelf: "center",
                                    minWidth: 80,
                                    maxWidth: 80,
                                    order: 1,
                                    minHeight: 80,
                                    width: 80,
                                    flexGrow: 1,
                                    height: "max-content",
                                    margin: "0px 0px 0px 5px",
                                    justifyContent: "center",
                                    overflow: "visible",
                                    borderRadius: 0,
                                    opacity: 1,
                                    backgroundColor: "rgba(255, 255, 255, 0)",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundImage:
                                        'url("https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647439469005x850476471653050900/Rectangle%2018.svg")'
                                }}
                            >
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        alignSelf: "center",
                                        minWidth: 36,
                                        order: 2,
                                        minHeight: 36,
                                        width: 36,
                                        flexGrow: 1,
                                        height: "max-content",
                                        margin: 0,
                                        whiteSpace: "pre-wrap",
                                        overflow: "visible",
                                        wordBreak: "break-word",
                                        fontFamily: "Poppins",
                                        fontSize: 36,
                                        fontWeight: 700,
                                        color: "rgb(1, 4, 13)",
                                        textAlign: "center",
                                        lineHeight: 1,
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    4
                                </div>
                            </div>
                            <div
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    zIndex: 11,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 2,
                                    minHeight: 0,
                                    width: 0,
                                    flexGrow: 1,
                                    height: "max-content",
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
                                        zIndex: 9,
                                        alignSelf: "flex-start",
                                        minWidth: 400,
                                        maxWidth: 400,
                                        order: 1,
                                        minHeight: 24,
                                        width: 400,
                                        flexGrow: 1,
                                        height: "max-content",
                                        margin: "10px 0px",
                                        whiteSpace: "pre-wrap",
                                        overflow: "visible",
                                        wordBreak: "break-word",
                                        fontFamily: "Poppins",
                                        fontSize: 24,
                                        fontWeight: 600,
                                        color: "rgb(0, 0, 0)",
                                        textAlign: "center",
                                        letterSpacing: "0.5px",
                                        lineHeight: 1,
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    Verify and enjoy ROI
                                </div>
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 10,
                                        alignSelf: "flex-start",
                                        minWidth: 400,
                                        maxWidth: 400,
                                        order: 3,
                                        minHeight: 0,
                                        width: 400,
                                        flexGrow: 1,
                                        height: "max-content",
                                        margin: "10px 0px",
                                        whiteSpace: "pre-wrap",
                                        overflow: "visible",
                                        wordBreak: "break-word",
                                        fontFamily: "Poppins",
                                        fontSize: 14,
                                        fontWeight: 400,
                                        color: "rgb(123, 123, 123)",
                                        textAlign: "center",
                                        lineHeight: "1.5",
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    You can verify blogger's add manualy or our modeators will do it
                                    automaticaly.
                                </div>
                            </div>
                        </div>
                        <button
                            className="bubble-element Button clickable-element"
                            style={{
                                zIndex: 6,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                maxWidth: 234,
                                order: 12,
                                minHeight: 46,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 30px)",
                                margin: "20px 0px 0px 30px",
                                padding: 0,
                                cursor: "pointer",
                                background:
                                    "linear-gradient(120deg, rgb(45, 45, 255) 0%, rgb(0, 212, 255) 100%)",
                                border: "none",
                                textAlign: "center",
                                fontFamily: "Poppins",
                                fontSize: 24,
                                fontWeight: 500,
                                color: "rgb(255, 255, 255)",
                                letterSpacing: 1,
                                lineHeight: 1,
                                borderRadius: 5,
                                opacity: 1,
                                transition: "background 200ms ease 0s"
                            }}
                        >
                            Register
                        </button>
                    </div>
                    <div
                        className="bubble-element Group bubble-r-container flex row"
                        style={{
                            zIndex: 7,
                            alignSelf: "center",
                            minWidth: 0,
                            order: 2,
                            minHeight: 513,
                            width: 0,
                            flexGrow: 1,
                            height: "max-content",
                            margin: 0,
                            justifyContent: "center",
                            overflow: "visible",
                            borderRadius: 0,
                            opacity: 1
                        }}
                    >
                        <div
                            className="bubble-element Image"
                            style={{
                                zIndex: 6,
                                alignSelf: "center",
                                minWidth: 0,
                                maxWidth: 300,
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
                                src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1655838863446x979903421066397000%2FUntitled%2520%2528500%2520%25C3%2597%25201000%2520px%2529.png?w=384&h=768&auto=compress&dpr=1&fit=max"
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
                            <div style={{ position: "relative", paddingTop: "200%" }} />
                        </div>
                    </div>
                </div>
                <div
                    className="bubble-element Text"
                    style={{
                        zIndex: 4,
                        alignSelf: "center",
                        minWidth: 0,
                        order: 18,
                        minHeight: 0,
                        height: "max-content",
                        flexGrow: 0,
                        flexShrink: 0,
                        width: "auto",
                        margin: "0px 10px 50px",
                        whiteSpace: "pre-wrap",
                        overflow: "visible",
                        wordBreak: "break-word",
                        fontFamily: "Poppins",
                        fontSize: 36,
                        fontWeight: 600,
                        color: "rgb(0, 0, 0)",
                        letterSpacing: "0.5px",
                        lineHeight: 1,
                        borderRadius: 0,
                        opacity: 1
                    }}
                >
                    Explore advertisers by category
                </div>
                <div
                    className="bubble-element Group bubble-r-container flex column"
                    style={{
                        zIndex: 10,
                        alignSelf: "center",
                        minWidth: 320,
                        maxWidth: 1200,
                        order: 19,
                        minHeight: 0,
                        height: "max-content",
                        flexGrow: 0,
                        flexShrink: 0,
                        width: "calc(100% - 20px)",
                        margin: "0px 10px 10px",
                        justifyContent: "flex-start",
                        overflow: "visible",
                        borderRadius: 0,
                        opacity: 1
                    }}
                >
                    <div
                        className="bubble-element RepeatingGroup bubble-rg"
                        style={{
                            zIndex: 35,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            order: 1,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: 0,
                            gap: 20,
                            gridAutoRows: "minmax(max-content, 250px)",
                            gridTemplateColumns: "repeat(4, minmax(0px, 1fr))",
                            gridAutoFlow: "row",
                            overflow: "auto",
                            borderRadius: 0,
                            opacity: 1
                        }}
                        id="RG"
                    >
                        <div
                            className="bubble-element GroupItem bubble-r-container flex column group-item entry-1"
                            style={{
                                justifyContent: "flex-start",
                                boxSizing: "content-box",
                                minHeight: 250,
                                borderTopStyle: "none",
                                borderLeftStyle: "none"
                            }}
                        >
                            <div
                                className="bubble-element Group bubble-r-container flex column clickable-element"
                                style={{
                                    zIndex: 35,
                                    alignSelf: "center",
                                    minWidth: 280,
                                    order: 6,
                                    minHeight: 250,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "0px 0px 20px",
                                    justifyContent: "flex-start",
                                    overflow: "visible",
                                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                                    borderStyle: "solid",
                                    borderWidth: 1,
                                    borderColor: "rgb(255, 255, 255)",
                                    borderRadius: 15,
                                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 10px 20px 0px",
                                    padding: 20,
                                    opacity: 1,
                                    cursor: "pointer"
                                }}
                            >
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 9,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 0,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "auto",
                                        margin: "0px 0px 19px",
                                        whiteSpace: "pre-wrap",
                                        overflow: "visible",
                                        wordBreak: "break-word",
                                        fontFamily: "Poppins",
                                        fontSize: 18,
                                        fontWeight: 600,
                                        color: "rgb(0, 0, 0)",
                                        letterSpacing: "0.5px",
                                        lineHeight: "1.3",
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    Other
                                </div>
                                <div
                                    className="bubble-element Image"
                                    style={{
                                        zIndex: 10,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        maxWidth: "240%",
                                        order: 3,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "calc(100% - 0px)",
                                        margin: 0,
                                        borderRadius: 10,
                                        opacity: 1
                                    }}
                                >
                                    <img
                                        alt=""
                                        src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1657617438962x275396978998287300%2Faccuracy.png?w=384&h=384&auto=compress&dpr=1&fit=crop&q=100"
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            display: "block",
                                            width: "100%",
                                            height: "100%",
                                            margin: 0,
                                            objectFit: "fill",
                                            borderRadius: 10
                                        }}
                                    />
                                    <div style={{ position: "relative", paddingTop: "100%" }} />
                                </div>
                            </div>
                        </div>
                        <div
                            className="bubble-element GroupItem bubble-r-container flex column group-item entry-2"
                            style={{
                                justifyContent: "flex-start",
                                boxSizing: "content-box",
                                minHeight: 250,
                                borderTopStyle: "none",
                                borderLeft: "20px solid rgba(150, 150, 150, 0)",
                                marginLeft: "-20px"
                            }}
                        >
                            <div
                                className="bubble-element Group bubble-r-container flex column clickable-element"
                                style={{
                                    zIndex: 35,
                                    alignSelf: "center",
                                    minWidth: 280,
                                    order: 6,
                                    minHeight: 250,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "0px 0px 20px",
                                    justifyContent: "flex-start",
                                    overflow: "visible",
                                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                                    borderStyle: "solid",
                                    borderWidth: 1,
                                    borderColor: "rgb(255, 255, 255)",
                                    borderRadius: 15,
                                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 10px 20px 0px",
                                    padding: 20,
                                    opacity: 1,
                                    cursor: "pointer"
                                }}
                            >
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 9,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 0,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "auto",
                                        margin: "0px 0px 19px",
                                        whiteSpace: "pre-wrap",
                                        overflow: "visible",
                                        wordBreak: "break-word",
                                        fontFamily: "Poppins",
                                        fontSize: 18,
                                        fontWeight: 600,
                                        color: "rgb(0, 0, 0)",
                                        letterSpacing: "0.5px",
                                        lineHeight: "1.3",
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    Music
                                </div>
                                <div
                                    className="bubble-element Image"
                                    style={{
                                        zIndex: 10,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        maxWidth: "240%",
                                        order: 3,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "calc(100% - 0px)",
                                        margin: 0,
                                        borderRadius: 10,
                                        opacity: 1
                                    }}
                                >
                                    <img
                                        alt=""
                                        src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1657617290034x147128686178153120%2Fcircled-pause.png?w=384&h=384&auto=compress&dpr=1&fit=crop&q=100"
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            display: "block",
                                            width: "100%",
                                            height: "100%",
                                            margin: 0,
                                            objectFit: "fill",
                                            borderRadius: 10
                                        }}
                                    />
                                    <div style={{ position: "relative", paddingTop: "100%" }} />
                                </div>
                            </div>
                        </div>
                        <div
                            className="bubble-element GroupItem bubble-r-container flex column group-item entry-3"
                            style={{
                                justifyContent: "flex-start",
                                boxSizing: "content-box",
                                minHeight: 250,
                                borderTopStyle: "none",
                                borderLeft: "20px solid rgba(150, 150, 150, 0)",
                                marginLeft: "-20px"
                            }}
                        >
                            <div
                                className="bubble-element Group bubble-r-container flex column clickable-element"
                                style={{
                                    zIndex: 35,
                                    alignSelf: "center",
                                    minWidth: 280,
                                    order: 6,
                                    minHeight: 250,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "0px 0px 20px",
                                    justifyContent: "flex-start",
                                    overflow: "visible",
                                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                                    borderStyle: "solid",
                                    borderWidth: 1,
                                    borderColor: "rgb(255, 255, 255)",
                                    borderRadius: 15,
                                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 10px 20px 0px",
                                    padding: 20,
                                    opacity: 1,
                                    cursor: "pointer"
                                }}
                            >
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 9,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 0,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "auto",
                                        margin: "0px 0px 19px",
                                        whiteSpace: "pre-wrap",
                                        overflow: "visible",
                                        wordBreak: "break-word",
                                        fontFamily: "Poppins",
                                        fontSize: 18,
                                        fontWeight: 600,
                                        color: "rgb(0, 0, 0)",
                                        letterSpacing: "0.5px",
                                        lineHeight: "1.3",
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    Lifestyle
                                </div>
                                <div
                                    className="bubble-element Image"
                                    style={{
                                        zIndex: 10,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        maxWidth: "240%",
                                        order: 3,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "calc(100% - 0px)",
                                        margin: 0,
                                        borderRadius: 10,
                                        opacity: 1
                                    }}
                                >
                                    <img
                                        alt=""
                                        src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1657617335996x289766229915394050%2Fsun.png?w=384&h=384&auto=compress&dpr=1&fit=crop&q=100"
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            display: "block",
                                            width: "100%",
                                            height: "100%",
                                            margin: 0,
                                            objectFit: "fill",
                                            borderRadius: 10
                                        }}
                                    />
                                    <div style={{ position: "relative", paddingTop: "100%" }} />
                                </div>
                            </div>
                        </div>
                        <div
                            className="bubble-element GroupItem bubble-r-container flex column group-item entry-4"
                            style={{
                                justifyContent: "flex-start",
                                boxSizing: "content-box",
                                minHeight: 250,
                                borderTopStyle: "none",
                                borderLeft: "20px solid rgba(150, 150, 150, 0)",
                                marginLeft: "-20px"
                            }}
                        >
                            <div
                                className="bubble-element Group bubble-r-container flex column clickable-element"
                                style={{
                                    zIndex: 35,
                                    alignSelf: "center",
                                    minWidth: 280,
                                    order: 6,
                                    minHeight: 250,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "0px 0px 20px",
                                    justifyContent: "flex-start",
                                    overflow: "visible",
                                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                                    borderStyle: "solid",
                                    borderWidth: 1,
                                    borderColor: "rgb(255, 255, 255)",
                                    borderRadius: 15,
                                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 10px 20px 0px",
                                    padding: 20,
                                    opacity: 1,
                                    cursor: "pointer"
                                }}
                            >
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 9,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 0,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "auto",
                                        margin: "0px 0px 19px",
                                        whiteSpace: "pre-wrap",
                                        overflow: "visible",
                                        wordBreak: "break-word",
                                        fontFamily: "Poppins",
                                        fontSize: 18,
                                        fontWeight: 600,
                                        color: "rgb(0, 0, 0)",
                                        letterSpacing: "0.5px",
                                        lineHeight: "1.3",
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    Fashion
                                </div>
                                <div
                                    className="bubble-element Image"
                                    style={{
                                        zIndex: 10,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        maxWidth: "240%",
                                        order: 3,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "calc(100% - 0px)",
                                        margin: 0,
                                        borderRadius: 10,
                                        opacity: 1
                                    }}
                                >
                                    <img
                                        alt=""
                                        src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1657617380488x746603478234660600%2Fskirt.png?w=384&h=384&auto=compress&dpr=1&fit=crop&q=100"
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            display: "block",
                                            width: "100%",
                                            height: "100%",
                                            margin: 0,
                                            objectFit: "fill",
                                            borderRadius: 10
                                        }}
                                    />
                                    <div style={{ position: "relative", paddingTop: "100%" }} />
                                </div>
                            </div>
                        </div>
                        <div
                            className="bubble-element GroupItem bubble-r-container flex column group-item entry-5"
                            style={{
                                justifyContent: "flex-start",
                                boxSizing: "content-box",
                                minHeight: 250,
                                borderTop: "20px solid rgba(150, 150, 150, 0)",
                                marginTop: "-20px",
                                borderLeftStyle: "none"
                            }}
                        >
                            <div
                                className="bubble-element Group bubble-r-container flex column clickable-element"
                                style={{
                                    zIndex: 35,
                                    alignSelf: "center",
                                    minWidth: 280,
                                    order: 6,
                                    minHeight: 250,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "0px 0px 20px",
                                    justifyContent: "flex-start",
                                    overflow: "visible",
                                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                                    borderStyle: "solid",
                                    borderWidth: 1,
                                    borderColor: "rgb(255, 255, 255)",
                                    borderRadius: 15,
                                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 10px 20px 0px",
                                    padding: 20,
                                    opacity: 1,
                                    cursor: "pointer"
                                }}
                            >
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 9,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 0,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "auto",
                                        margin: "0px 0px 19px",
                                        whiteSpace: "pre-wrap",
                                        overflow: "visible",
                                        wordBreak: "break-word",
                                        fontFamily: "Poppins",
                                        fontSize: 18,
                                        fontWeight: 600,
                                        color: "rgb(0, 0, 0)",
                                        letterSpacing: "0.5px",
                                        lineHeight: "1.3",
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    Crypto
                                </div>
                                <div
                                    className="bubble-element Image"
                                    style={{
                                        zIndex: 10,
                                        alignSelf: "flex-start",
                                        minWidth: 0,
                                        maxWidth: "240%",
                                        order: 3,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "calc(100% - 0px)",
                                        margin: 0,
                                        borderRadius: 10,
                                        opacity: 1
                                    }}
                                >
                                    <img
                                        alt=""
                                        src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1657617270783x566441029317267700%2Fbitcoin.png?w=384&h=384&auto=compress&dpr=1&fit=crop&q=100"
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            display: "block",
                                            width: "100%",
                                            height: "100%",
                                            margin: 0,
                                            objectFit: "fill",
                                            borderRadius: 10
                                        }}
                                    />
                                    <div style={{ position: "relative", paddingTop: "100%" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="bubble-element RepeatingGroup bubble-rg"
                        style={{
                            zIndex: 34,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            order: 2,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: 0,
                            gap: 20,
                            gridTemplateRows: "repeat(1, minmax(max-content, auto))",
                            gridAutoColumns: "minmax(max-content, 100px)",
                            gridAutoFlow: "column",
                            overflow: "auto",
                            borderRadius: 0,
                            opacity: 1,
                            display: "none",
                            visibility: "hidden"
                        }}
                        id=""
                    >
                        <div
                            className="bubble-element GroupItem bubble-r-container flex column group-item entry-1"
                            style={{
                                justifyContent: "flex-start",
                                boxSizing: "content-box",
                                minWidth: 100,
                                borderTopStyle: "none",
                                borderLeftStyle: "none"
                            }}
                        >
                            <div
                                className="bubble-element Group bubble-r-container flex column clickable-element"
                                style={{
                                    zIndex: 35,
                                    alignSelf: "center",
                                    minWidth: 280,
                                    order: 6,
                                    minHeight: 250,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "0px 0px 20px",
                                    justifyContent: "flex-start",
                                    overflow: "visible",
                                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                                    borderStyle: "solid",
                                    borderWidth: 1,
                                    borderColor: "rgb(255, 255, 255)",
                                    borderRadius: 15,
                                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 10px 20px 0px",
                                    padding: 20,
                                    opacity: 1,
                                    cursor: "pointer"
                                }}
                            >
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 9,
                                        alignSelf: "center",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 0,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "auto",
                                        margin: "0px 0px 19px",
                                        whiteSpace: "pre-wrap",
                                        overflow: "visible",
                                        fontFamily: "Poppins",
                                        fontSize: 18,
                                        fontWeight: 600,
                                        color: "rgb(0, 0, 0)",
                                        letterSpacing: "0.5px",
                                        lineHeight: "1.3",
                                        borderRadius: 0,
                                        opacity: 1,
                                        wordBreak: "break-word"
                                    }}
                                >
                                    Other
                                </div>
                                <div
                                    className="bubble-element Image"
                                    style={{
                                        zIndex: 10,
                                        alignSelf: "center",
                                        minWidth: 0,
                                        maxWidth: 240,
                                        order: 3,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "calc(100% - 0px)",
                                        margin: 0,
                                        borderRadius: 10,
                                        opacity: 1
                                    }}
                                >
                                    <img
                                        alt=""
                                        src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1657617438962x275396978998287300%2Faccuracy.png?w=&h=&auto=compress&dpr=2&fit=crop&q=100"
                                        style={{
                                            borderRadius: 10,
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
                                    <div style={{ position: "relative", paddingTop: "72.9167%" }} />
                                </div>
                            </div>
                        </div>
                        <div
                            className="bubble-element GroupItem bubble-r-container flex column group-item entry-2"
                            style={{
                                justifyContent: "flex-start",
                                boxSizing: "content-box",
                                minWidth: 100,
                                borderTopStyle: "none",
                                borderLeft: "20px solid rgba(150, 150, 150, 0)",
                                marginLeft: "-20px"
                            }}
                        >
                            <div
                                className="bubble-element Group bubble-r-container flex column clickable-element"
                                style={{
                                    zIndex: 35,
                                    alignSelf: "center",
                                    minWidth: 280,
                                    order: 6,
                                    minHeight: 250,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "0px 0px 20px",
                                    justifyContent: "flex-start",
                                    overflow: "visible",
                                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                                    borderStyle: "solid",
                                    borderWidth: 1,
                                    borderColor: "rgb(255, 255, 255)",
                                    borderRadius: 15,
                                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 10px 20px 0px",
                                    padding: 20,
                                    opacity: 1,
                                    cursor: "pointer"
                                }}
                            >
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 9,
                                        alignSelf: "center",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 0,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "auto",
                                        margin: "0px 0px 19px",
                                        whiteSpace: "pre-wrap",
                                        overflow: "visible",
                                        wordBreak: "break-word",
                                        fontFamily: "Poppins",
                                        fontSize: 18,
                                        fontWeight: 600,
                                        color: "rgb(0, 0, 0)",
                                        letterSpacing: "0.5px",
                                        lineHeight: "1.3",
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    Music
                                </div>
                                <div
                                    className="bubble-element Image"
                                    style={{
                                        zIndex: 10,
                                        alignSelf: "center",
                                        minWidth: 0,
                                        maxWidth: 240,
                                        order: 3,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "calc(100% - 0px)",
                                        margin: 0,
                                        borderRadius: 10,
                                        opacity: 1
                                    }}
                                >
                                    <img
                                        alt=""
                                        src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1657617290034x147128686178153120%2Fcircled-pause.png?w=&h=&auto=compress&dpr=2&fit=crop&q=100"
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            display: "block",
                                            width: "100%",
                                            height: "100%",
                                            margin: 0,
                                            objectFit: "contain",
                                            borderRadius: 10
                                        }}
                                    />
                                    <div style={{ position: "relative", paddingTop: "72.9167%" }} />
                                </div>
                            </div>
                        </div>
                        <div
                            className="bubble-element GroupItem bubble-r-container flex column group-item entry-3"
                            style={{
                                justifyContent: "flex-start",
                                boxSizing: "content-box",
                                minWidth: 100,
                                borderTopStyle: "none",
                                borderLeft: "20px solid rgba(150, 150, 150, 0)",
                                marginLeft: "-20px"
                            }}
                        >
                            <div
                                className="bubble-element Group bubble-r-container flex column clickable-element"
                                style={{
                                    zIndex: 35,
                                    alignSelf: "center",
                                    minWidth: 280,
                                    order: 6,
                                    minHeight: 250,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "0px 0px 20px",
                                    justifyContent: "flex-start",
                                    overflow: "visible",
                                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                                    borderStyle: "solid",
                                    borderWidth: 1,
                                    borderColor: "rgb(255, 255, 255)",
                                    borderRadius: 15,
                                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 10px 20px 0px",
                                    padding: 20,
                                    opacity: 1,
                                    cursor: "pointer"
                                }}
                            >
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 9,
                                        alignSelf: "center",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 0,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "auto",
                                        margin: "0px 0px 19px",
                                        whiteSpace: "pre-wrap",
                                        overflow: "visible",
                                        wordBreak: "break-word",
                                        fontFamily: "Poppins",
                                        fontSize: 18,
                                        fontWeight: 600,
                                        color: "rgb(0, 0, 0)",
                                        letterSpacing: "0.5px",
                                        lineHeight: "1.3",
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    Lifestyle
                                </div>
                                <div
                                    className="bubble-element Image"
                                    style={{
                                        zIndex: 10,
                                        alignSelf: "center",
                                        minWidth: 0,
                                        maxWidth: 240,
                                        order: 3,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "calc(100% - 0px)",
                                        margin: 0,
                                        borderRadius: 10,
                                        opacity: 1
                                    }}
                                >
                                    <img
                                        alt=""
                                        src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1657617335996x289766229915394050%2Fsun.png?w=&h=&auto=compress&dpr=2&fit=crop&q=100"
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            display: "block",
                                            width: "100%",
                                            height: "100%",
                                            margin: 0,
                                            objectFit: "contain",
                                            borderRadius: 10
                                        }}
                                    />
                                    <div style={{ position: "relative", paddingTop: "72.9167%" }} />
                                </div>
                            </div>
                        </div>
                        <div
                            className="bubble-element GroupItem bubble-r-container flex column group-item entry-4"
                            style={{
                                justifyContent: "flex-start",
                                boxSizing: "content-box",
                                minWidth: 100,
                                borderTopStyle: "none",
                                borderLeft: "20px solid rgba(150, 150, 150, 0)",
                                marginLeft: "-20px"
                            }}
                        >
                            <div
                                className="bubble-element Group bubble-r-container flex column clickable-element"
                                style={{
                                    zIndex: 35,
                                    alignSelf: "center",
                                    minWidth: 280,
                                    order: 6,
                                    minHeight: 250,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "0px 0px 20px",
                                    justifyContent: "flex-start",
                                    overflow: "visible",
                                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                                    borderStyle: "solid",
                                    borderWidth: 1,
                                    borderColor: "rgb(255, 255, 255)",
                                    borderRadius: 15,
                                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 10px 20px 0px",
                                    padding: 20,
                                    opacity: 1,
                                    cursor: "pointer"
                                }}
                            >
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 9,
                                        alignSelf: "center",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 0,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "auto",
                                        margin: "0px 0px 19px",
                                        whiteSpace: "pre-wrap",
                                        overflow: "visible",
                                        wordBreak: "break-word",
                                        fontFamily: "Poppins",
                                        fontSize: 18,
                                        fontWeight: 600,
                                        color: "rgb(0, 0, 0)",
                                        letterSpacing: "0.5px",
                                        lineHeight: "1.3",
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    Fashion
                                </div>
                                <div
                                    className="bubble-element Image"
                                    style={{
                                        zIndex: 10,
                                        alignSelf: "center",
                                        minWidth: 0,
                                        maxWidth: 240,
                                        order: 3,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "calc(100% - 0px)",
                                        margin: 0,
                                        borderRadius: 10,
                                        opacity: 1
                                    }}
                                >
                                    <img
                                        alt=""
                                        src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1657617380488x746603478234660600%2Fskirt.png?w=&h=&auto=compress&dpr=2&fit=crop&q=100"
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            display: "block",
                                            width: "100%",
                                            height: "100%",
                                            margin: 0,
                                            objectFit: "contain",
                                            borderRadius: 10
                                        }}
                                    />
                                    <div style={{ position: "relative", paddingTop: "72.9167%" }} />
                                </div>
                            </div>
                        </div>
                        <div
                            className="bubble-element GroupItem bubble-r-container flex column group-item entry-5"
                            style={{
                                justifyContent: "flex-start",
                                boxSizing: "content-box",
                                minWidth: 100,
                                borderTopStyle: "none",
                                borderLeft: "20px solid rgba(150, 150, 150, 0)",
                                marginLeft: "-20px"
                            }}
                        >
                            <div
                                className="bubble-element Group bubble-r-container flex column clickable-element"
                                style={{
                                    zIndex: 35,
                                    alignSelf: "center",
                                    minWidth: 280,
                                    order: 6,
                                    minHeight: 250,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "0px 0px 20px",
                                    justifyContent: "flex-start",
                                    overflow: "visible",
                                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                                    borderStyle: "solid",
                                    borderWidth: 1,
                                    borderColor: "rgb(255, 255, 255)",
                                    borderRadius: 15,
                                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 10px 20px 0px",
                                    padding: 20,
                                    opacity: 1,
                                    cursor: "pointer"
                                }}
                            >
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 9,
                                        alignSelf: "center",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 0,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "auto",
                                        margin: "0px 0px 19px",
                                        whiteSpace: "pre-wrap",
                                        overflow: "visible",
                                        wordBreak: "break-word",
                                        fontFamily: "Poppins",
                                        fontSize: 18,
                                        fontWeight: 600,
                                        color: "rgb(0, 0, 0)",
                                        letterSpacing: "0.5px",
                                        lineHeight: "1.3",
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    Crypto
                                </div>
                                <div
                                    className="bubble-element Image"
                                    style={{
                                        zIndex: 10,
                                        alignSelf: "center",
                                        minWidth: 0,
                                        maxWidth: 240,
                                        order: 3,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "calc(100% - 0px)",
                                        margin: 0,
                                        borderRadius: 10,
                                        opacity: 1
                                    }}
                                >
                                    <img
                                        alt=""
                                        src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1657617270783x566441029317267700%2Fbitcoin.png?w=&h=&auto=compress&dpr=2&fit=crop&q=100"
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            display: "block",
                                            width: "100%",
                                            height: "100%",
                                            margin: 0,
                                            objectFit: "contain",
                                            borderRadius: 10
                                        }}
                                    />
                                    <div style={{ position: "relative", paddingTop: "72.9167%" }} />
                                </div>
                            </div>
                        </div>
                        <div
                            className="bubble-element GroupItem bubble-r-container flex column group-item entry-6"
                            style={{
                                justifyContent: "flex-start",
                                boxSizing: "content-box",
                                minWidth: 100,
                                borderTopStyle: "none",
                                borderLeft: "20px solid rgba(150, 150, 150, 0)",
                                marginLeft: "-20px"
                            }}
                        >
                            <div
                                className="bubble-element Group bubble-r-container flex column clickable-element"
                                style={{
                                    zIndex: 35,
                                    alignSelf: "center",
                                    minWidth: 280,
                                    order: 6,
                                    minHeight: 250,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "0px 0px 20px",
                                    justifyContent: "flex-start",
                                    overflow: "visible",
                                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                                    borderStyle: "solid",
                                    borderWidth: 1,
                                    borderColor: "rgb(255, 255, 255)",
                                    borderRadius: 15,
                                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 10px 20px 0px",
                                    padding: 20,
                                    opacity: 1,
                                    cursor: "pointer"
                                }}
                            >
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 9,
                                        alignSelf: "center",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 0,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "auto",
                                        margin: "0px 0px 19px",
                                        whiteSpace: "pre-wrap",
                                        overflow: "visible",
                                        wordBreak: "break-word",
                                        fontFamily: "Poppins",
                                        fontSize: 18,
                                        fontWeight: 600,
                                        color: "rgb(0, 0, 0)",
                                        letterSpacing: "0.5px",
                                        lineHeight: "1.3",
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    Beauty
                                </div>
                                <div
                                    className="bubble-element Image"
                                    style={{
                                        zIndex: 10,
                                        alignSelf: "center",
                                        minWidth: 0,
                                        maxWidth: 240,
                                        order: 3,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "calc(100% - 0px)",
                                        margin: 0,
                                        borderRadius: 10,
                                        opacity: 1
                                    }}
                                >
                                    <img
                                        alt=""
                                        src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1657617304208x254203081488479500%2Fmakeup-bag.png?w=&h=&auto=compress&dpr=2&fit=crop&q=100"
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            display: "block",
                                            width: "100%",
                                            height: "100%",
                                            margin: 0,
                                            objectFit: "contain",
                                            borderRadius: 10
                                        }}
                                    />
                                    <div style={{ position: "relative", paddingTop: "72.9167%" }} />
                                </div>
                            </div>
                        </div>
                        <div
                            className="bubble-element GroupItem bubble-r-container flex column group-item entry-7"
                            style={{
                                justifyContent: "flex-start",
                                boxSizing: "content-box",
                                minWidth: 100,
                                borderTopStyle: "none",
                                borderLeft: "20px solid rgba(150, 150, 150, 0)",
                                marginLeft: "-20px",
                                display: "none"
                            }}
                        >
                            <div
                                className="bubble-element Group bubble-r-container flex column"
                                style={{
                                    zIndex: 35,
                                    alignSelf: "center",
                                    minWidth: 280,
                                    order: 6,
                                    minHeight: 250,
                                    height: "max-content",
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    width: "auto",
                                    margin: "0px 0px 20px",
                                    justifyContent: "flex-start"
                                }}
                            >
                                <div
                                    className="bubble-element Text"
                                    style={{
                                        zIndex: 9,
                                        alignSelf: "center",
                                        minWidth: 0,
                                        order: 2,
                                        minHeight: 0,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "auto",
                                        margin: "0px 0px 19px"
                                    }}
                                />
                                <div
                                    className="bubble-element Image"
                                    style={{
                                        zIndex: 10,
                                        alignSelf: "center",
                                        minWidth: 0,
                                        maxWidth: 240,
                                        order: 3,
                                        height: "max-content",
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        width: "calc(100% - 0px)",
                                        margin: 0
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="bubble-element Group bubble-r-container flex row"
                    style={{
                        zIndex: 12,
                        alignSelf: "center",
                        minWidth: 320,
                        maxWidth: 1200,
                        order: 23,
                        minHeight: 0,
                        height: "max-content",
                        flexGrow: 0,
                        flexShrink: 0,
                        width: "calc(100% - 0px)",
                        margin: "0px 0px 50px",
                        justifyContent: "space-between",
                        overflow: "visible",
                        borderRadius: 0,
                        opacity: 1
                    }}
                >
                    <div
                        className="bubble-element Group bubble-r-container flex column"
                        style={{
                            zIndex: 44,
                            alignSelf: "center",
                            minWidth: 300,
                            maxWidth: 380,
                            order: 1,
                            minHeight: 0,
                            width: "max-content",
                            flexGrow: 0,
                            height: "max-content",
                            margin: "20px 10px",
                            justifyContent: "flex-start",
                            overflow: "visible",
                            borderRadius: 0,
                            opacity: 1
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
                                margin: "0px 0px 10px",
                                whiteSpace: "pre-wrap",
                                overflow: "visible",
                                wordBreak: "break-word",
                                fontFamily: "Poppins",
                                fontSize: 24,
                                fontWeight: 500,
                                color: "rgb(0, 0, 0)",
                                letterSpacing: "0.5px",
                                lineHeight: "1.5",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            Stay in the loop
                        </div>
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 36,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 2,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 20px",
                                whiteSpace: "pre-wrap",
                                overflow: "visible",
                                wordBreak: "break-word",
                                fontFamily: "Poppins",
                                fontSize: 14,
                                fontWeight: 500,
                                color: "rgb(123, 123, 123)",
                                lineHeight: "1.5",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            Join our mailing list to stay in the loop with our newest feature
                            releases, interesting Ad, and tips and tricks for navigating.
                        </div>
                        <div
                            className="bubble-element Group bubble-r-container relative"
                            style={{
                                zIndex: 38,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 3,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 28px",
                                overflow: "visible",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            <input
                                type="email"
                                className="bubble-element Input a1688719274977x10578"
                                style={{
                                    zIndex: 37,
                                    placeSelf: "end center",
                                    minWidth: 0,
                                    minHeight: 50,
                                    width: "calc(100% - 0px)",
                                    height: "calc(100% - 0px)",
                                    margin: 0,
                                    border: "1px solid rgb(237, 237, 237)",
                                    backgroundColor: "transparent",
                                    borderRadius: 15,
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: "rgb(123, 123, 123)",
                                    letterSpacing: "0.5px",
                                    padding: "0px 10px",
                                    opacity: 1
                                }}
                                placeholder="Your email address"
                                maxLength=""
                            />
                            <div
                                className="bubble-element Group bubble-r-container flex column clickable-element"
                                style={{
                                    zIndex: 39,
                                    placeSelf: "center end",
                                    minWidth: 0,
                                    minHeight: 0,
                                    width: "max-content",
                                    height: "max-content",
                                    margin: "0px 13px 0px 0px",
                                    justifyContent: "flex-start",
                                    overflow: "visible",
                                    borderRadius: 0,
                                    opacity: 1,
                                    cursor: "pointer"
                                }}
                            >
                                <div
                                    className="bubble-element HTML"
                                    style={{
                                        zIndex: 38,
                                        alignSelf: "flex-start",
                                        minWidth: 24,
                                        maxWidth: 24,
                                        order: 1,
                                        minHeight: 24,
                                        maxHeight: 24,
                                        height: 24,
                                        flexGrow: 1,
                                        width: 24,
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
                                            d="M15.6893 10.75L12.9697 8.03033C12.6768 7.73744 12.6768 7.26256 12.9697 6.96967C13.2626 6.67678 13.7374 6.67678 14.0303 6.96967L18.0303 10.9697C18.3232 11.2626 18.3232 11.7374 18.0303 12.0303L14.0303 16.0303C13.7374 16.3232 13.2626 16.3232 12.9697 16.0303C12.6768 15.7374 12.6768 15.2626 12.9697 14.9697L15.6893 12.25L6 12.25C5.58579 12.25 5.25 11.9142 5.25 11.5C5.25 11.0858 5.58579 10.75 6 10.75L15.6893 10.75Z"
                                            fill="black"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 39,
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
                                fontSize: 24,
                                fontWeight: 500,
                                color: "rgb(0, 0, 0)",
                                letterSpacing: "0.5px",
                                lineHeight: "1.5",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            Stay in the loop
                        </div>
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                zIndex: 43,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 5,
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
                                className="bubble-element Group bubble-r-container relative"
                                style={{
                                    zIndex: 40,
                                    alignSelf: "flex-start",
                                    minWidth: 50,
                                    maxWidth: 50,
                                    order: 1,
                                    minHeight: 50,
                                    maxHeight: 50,
                                    width: 50,
                                    flexGrow: 1,
                                    height: 50,
                                    margin: "0px 12px 0px 0px",
                                    overflow: "visible",
                                    background:
                                        "-webkit-linear-gradient(left, rgba(45, 45, 255, 0.85) 0%, rgba(0, 212, 255, 0.85) 100%)",
                                    borderRadius: 10,
                                    opacity: 1
                                }}
                            >
                                <div
                                    className="bubble-element HTML"
                                    style={{
                                        zIndex: 2,
                                        placeSelf: "center",
                                        minWidth: 24,
                                        maxWidth: 24,
                                        minHeight: 24,
                                        maxHeight: 24,
                                        width: 24,
                                        height: 24,
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
                                            d="M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM15.9141 16.35C14.9625 17.2266 13.6641 17.7422 12.1148 17.7422C9.87188 17.7422 7.93125 16.4555 6.98672 14.5805C6.59766 13.8047 6.375 12.9281 6.375 12C6.375 11.0719 6.59766 10.1953 6.98672 9.41953C7.93125 7.54219 9.87188 6.25547 12.1148 6.25547C13.6617 6.25547 14.9602 6.825 15.9562 7.75078L14.3109 9.39844C13.7156 8.82891 12.9586 8.54062 12.1172 8.54062C10.6219 8.54062 9.35625 9.55078 8.90391 10.9078C8.78906 11.2523 8.72344 11.6203 8.72344 12C8.72344 12.3797 8.78906 12.7477 8.90391 13.0922C9.35625 14.4492 10.6219 15.4594 12.1148 15.4594C12.8883 15.4594 13.5445 15.2555 14.0578 14.9109C14.6672 14.5031 15.0703 13.8961 15.2039 13.1766H12.1148V10.9547H17.5219C17.5898 11.332 17.625 11.7234 17.625 12.1289C17.625 13.8797 16.9992 15.3492 15.9141 16.35V16.35Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div
                                className="bubble-element Group bubble-r-container relative"
                                style={{
                                    zIndex: 42,
                                    alignSelf: "flex-start",
                                    minWidth: 50,
                                    maxWidth: 50,
                                    order: 2,
                                    minHeight: 50,
                                    maxHeight: 50,
                                    width: 50,
                                    flexGrow: 1,
                                    height: 50,
                                    margin: "0px 12px 0px 0px",
                                    overflow: "visible",
                                    background:
                                        "-webkit-linear-gradient(left, rgba(45, 45, 255, 0.85) 0%, rgba(0, 212, 255, 0.85) 100%)",
                                    borderRadius: 10,
                                    opacity: 1
                                }}
                            >
                                <div
                                    className="bubble-element HTML"
                                    style={{
                                        zIndex: 2,
                                        placeSelf: "center",
                                        minWidth: 24,
                                        maxWidth: 24,
                                        minHeight: 24,
                                        maxHeight: 24,
                                        width: 24,
                                        height: 24,
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
                                            d="M12.001 2.00195C6.47895 2.00195 2.00195 6.47895 2.00195 12.001C2.00195 16.991 5.65795 21.127 10.439 21.88V14.892H7.89895V12.001H10.439V9.79795C10.439 7.28995 11.932 5.90695 14.215 5.90695C15.309 5.90695 16.455 6.10195 16.455 6.10195V8.56095H15.191C13.951 8.56095 13.563 9.33295 13.563 10.124V11.999H16.334L15.891 14.89H13.563V21.878C18.344 21.129 22 16.992 22 12.001C22 6.47895 17.523 2.00195 12.001 2.00195Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div
                                className="bubble-element Group bubble-r-container relative"
                                style={{
                                    zIndex: 41,
                                    alignSelf: "flex-start",
                                    minWidth: 50,
                                    maxWidth: 50,
                                    order: 3,
                                    minHeight: 50,
                                    maxHeight: 50,
                                    width: 50,
                                    flexGrow: 1,
                                    height: 50,
                                    margin: "0px 12px 0px 0px",
                                    overflow: "visible",
                                    background:
                                        "-webkit-linear-gradient(left, rgba(45, 45, 255, 0.85) 0%, rgba(0, 212, 255, 0.85) 100%)",
                                    borderRadius: 10,
                                    opacity: 1
                                }}
                            >
                                <div
                                    className="bubble-element HTML"
                                    style={{
                                        zIndex: 2,
                                        placeSelf: "center",
                                        minWidth: 24,
                                        maxWidth: 24,
                                        minHeight: 24,
                                        maxHeight: 24,
                                        width: 24,
                                        height: 24,
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
                                            d="M12 9.52C11.5095 9.52 11.03 9.66545 10.6222 9.93795C10.2144 10.2105 9.89648 10.5978 9.70878 11.0509C9.52107 11.5041 9.47196 12.0028 9.56765 12.4838C9.66334 12.9649 9.89954 13.4068 10.2464 13.7536C10.5932 14.1005 11.0351 14.3367 11.5162 14.4323C11.9972 14.528 12.4959 14.4789 12.9491 14.2912C13.4022 14.1035 13.7895 13.7856 14.062 13.3778C14.3346 12.97 14.48 12.4905 14.48 12C14.48 11.6743 14.4159 11.3518 14.2912 11.0509C14.1666 10.7501 13.9839 10.4767 13.7536 10.2464C13.5233 10.0161 13.2499 9.83341 12.9491 9.70878C12.6482 9.58415 12.3257 9.52 12 9.52ZM21.93 7.07C21.9247 6.29776 21.7825 5.53257 21.51 4.81C21.3093 4.28126 20.9987 3.80109 20.5988 3.40119C20.1989 3.00128 19.7187 2.69072 19.19 2.49C18.4674 2.21746 17.7022 2.07526 16.93 2.07C15.64 2 15.26 2 12 2C8.74 2 8.36 2 7.07 2.07C6.29776 2.07526 5.53257 2.21746 4.81 2.49C4.28126 2.69072 3.80109 3.00128 3.40119 3.40119C3.00128 3.80109 2.69072 4.28126 2.49 4.81C2.21746 5.53257 2.07526 6.29776 2.07 7.07C2 8.36 2 8.74 2 12C2 15.26 2 15.64 2.07 16.93C2.08076 17.705 2.22277 18.4725 2.49 19.2C2.68983 19.7263 3.00013 20.2037 3.4 20.6C3.79819 21.0023 4.27939 21.3129 4.81 21.51C5.53257 21.7825 6.29776 21.9247 7.07 21.93C8.36 22 8.74 22 12 22C15.26 22 15.64 22 16.93 21.93C17.7022 21.9247 18.4674 21.7825 19.19 21.51C19.7206 21.3129 20.2018 21.0023 20.6 20.6C20.9999 20.2037 21.3102 19.7263 21.51 19.2C21.7823 18.4739 21.9244 17.7055 21.93 16.93C22 15.64 22 15.26 22 12C22 8.74 22 8.36 21.93 7.07ZM19.39 15.07C19.3579 15.6871 19.2262 16.295 19 16.87C18.8059 17.3497 18.5173 17.7854 18.1514 18.1514C17.7854 18.5173 17.3497 18.8059 16.87 19C16.2895 19.2136 15.6783 19.3318 15.06 19.35C14.27 19.35 14.06 19.35 12 19.35C9.94 19.35 9.73 19.35 8.94 19.35C8.32173 19.3318 7.71049 19.2136 7.13 19C6.6341 18.8157 6.18628 18.5217 5.82 18.14C5.45767 17.7813 5.17784 17.3479 5 16.87C4.78556 16.2901 4.67061 15.6782 4.66 15.06C4.66 14.27 4.66 14.06 4.66 12C4.66 9.94 4.66 9.73 4.66 8.94C4.67061 8.32183 4.78556 7.70988 5 7.13C5.18428 6.6341 5.47827 6.18628 5.86 5.82C6.22033 5.45962 6.65326 5.18009 7.13 5C7.71049 4.78641 8.32173 4.66821 8.94 4.65C9.73 4.65 9.94 4.65 12 4.65C14.06 4.65 14.27 4.65 15.06 4.65C15.6783 4.66821 16.2895 4.78641 16.87 5C17.3659 5.18428 17.8137 5.47827 18.18 5.86C18.5423 6.21875 18.8222 6.65213 19 7.13C19.2136 7.71049 19.3318 8.32173 19.35 8.94C19.35 9.73 19.35 9.94 19.35 12C19.35 14.06 19.42 14.27 19.39 15.06V15.07ZM17.79 7.63C17.6709 7.30698 17.4832 7.01364 17.2398 6.77021C16.9964 6.52678 16.703 6.33906 16.38 6.22C15.9365 6.06626 15.4693 5.99179 15 6C14.22 6 14 6 12 6C10 6 9.78 6 9 6C8.52827 6.00461 8.06107 6.09263 7.62 6.26C7.30193 6.37366 7.01169 6.55371 6.76858 6.7882C6.52547 7.02269 6.33506 7.30624 6.21 7.62C6.06478 8.06537 5.99383 8.5316 6 9C6 9.78 6 10 6 12C6 14 6 14.22 6 15C6.00991 15.4712 6.09777 15.9375 6.26 16.38C6.37906 16.703 6.56678 16.9964 6.81021 17.2398C7.05364 17.4832 7.34698 17.6709 7.67 17.79C8.09667 17.9469 8.54565 18.0347 9 18.05C9.78 18.05 10 18.05 12 18.05C14 18.05 14.22 18.05 15 18.05C15.4717 18.0454 15.9389 17.9574 16.38 17.79C16.703 17.6709 16.9964 17.4832 17.2398 17.2398C17.4832 16.9964 17.6709 16.703 17.79 16.38C17.9574 15.9389 18.0454 15.4717 18.05 15C18.05 14.22 18.05 14 18.05 12C18.05 10 18.05 9.78 18.05 9C18.0503 8.5278 17.9621 8.05972 17.79 7.62V7.63ZM12 15.82C11.4988 15.82 11.0026 15.7211 10.5397 15.529C10.0768 15.3369 9.6563 15.0554 9.30238 14.7005C8.94846 14.3457 8.66803 13.9245 8.47714 13.4611C8.28626 12.9977 8.18868 12.5012 8.19 12C8.19 11.2441 8.4143 10.5051 8.83449 9.87669C9.25468 9.24828 9.85187 8.75866 10.5505 8.46983C11.2491 8.181 12.0177 8.10594 12.7589 8.25415C13.5002 8.40236 14.1808 8.76717 14.7147 9.30241C15.2485 9.83764 15.6116 10.5192 15.7578 11.2609C15.9041 12.0026 15.827 12.771 15.5363 13.4688C15.2457 14.1666 14.7545 14.7625 14.125 15.1811C13.4955 15.5996 12.7559 15.822 12 15.82ZM16 8.93C15.7789 8.9066 15.5744 8.80222 15.4257 8.63697C15.277 8.47172 15.1947 8.25729 15.1947 8.035C15.1947 7.81271 15.277 7.59828 15.4257 7.43303C15.5744 7.26778 15.7789 7.1634 16 7.14C16.2211 7.1634 16.4256 7.26778 16.5743 7.43303C16.723 7.59828 16.8053 7.81271 16.8053 8.035C16.8053 8.25729 16.723 8.47172 16.5743 8.63697C16.4256 8.80222 16.2211 8.9066 16 8.93Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div
                                className="bubble-element Group bubble-r-container relative"
                                style={{
                                    zIndex: 42,
                                    alignSelf: "flex-start",
                                    minWidth: 50,
                                    maxWidth: 50,
                                    order: 4,
                                    minHeight: 50,
                                    maxHeight: 50,
                                    width: 50,
                                    flexGrow: 1,
                                    height: 50,
                                    margin: "0px 12px 0px 0px",
                                    overflow: "visible",
                                    background:
                                        "-webkit-linear-gradient(left, rgba(45, 45, 255, 0.85) 0%, rgba(0, 212, 255, 0.85) 100%)",
                                    borderRadius: 10,
                                    opacity: 1
                                }}
                            >
                                <div
                                    className="bubble-element HTML"
                                    style={{
                                        zIndex: 2,
                                        placeSelf: "center",
                                        minWidth: 24,
                                        maxWidth: 24,
                                        minHeight: 24,
                                        maxHeight: 24,
                                        width: 24,
                                        height: 24,
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
                                            d="M13.3701 2.09408C10.9774 1.76493 8.54634 2.31263 6.52592 3.63604C4.5055 4.95944 3.03214 6.96918 2.3779 9.29414C1.72365 11.6191 1.9327 14.1023 2.96646 16.2851C4.00021 18.468 5.78885 20.2031 8.0021 21.1701C7.94224 20.4019 7.99718 19.6291 8.1651 18.8771C8.3501 18.0381 9.4611 13.4141 9.4611 13.4141C9.23986 12.9182 9.1293 12.38 9.1371 11.8371C9.1371 10.3521 9.9941 9.24408 11.0601 9.24408C11.2516 9.24129 11.4415 9.27977 11.6168 9.35691C11.7921 9.43404 11.9487 9.54802 12.076 9.6911C12.2034 9.83418 12.2984 10.003 12.3547 10.1861C12.4109 10.3691 12.4271 10.5622 12.4021 10.7521C12.4021 11.6521 11.8241 13.0141 11.5221 14.2921C11.4624 14.5265 11.4586 14.7716 11.511 15.0077C11.5635 15.2438 11.6706 15.4643 11.8239 15.6514C11.9771 15.8385 12.1722 15.987 12.3933 16.0849C12.6145 16.1828 12.8555 16.2274 13.0971 16.2151C14.9951 16.2151 16.2671 13.7841 16.2671 10.9141C16.2671 8.71408 14.8101 7.06608 12.1241 7.06608C11.4815 7.04111 10.8405 7.147 10.24 7.37733C9.63958 7.60766 9.09221 7.95762 8.63115 8.40597C8.17008 8.85431 7.80495 9.39168 7.55792 9.98545C7.31089 10.5792 7.18711 11.217 7.1941 11.8601C7.16546 12.5734 7.3956 13.273 7.8421 13.8301C7.92553 13.8924 7.98645 13.9801 8.01567 14.08C8.04489 14.1799 8.04083 14.2867 8.0041 14.3841C7.9581 14.5681 7.8421 15.0071 7.7961 15.1681C7.78653 15.2227 7.76427 15.2743 7.73112 15.3187C7.69797 15.3631 7.65484 15.3991 7.60523 15.4238C7.55561 15.4486 7.50088 15.4613 7.44545 15.461C7.39002 15.4607 7.33544 15.4473 7.2861 15.4221C5.9021 14.8681 5.2501 13.3451 5.2501 11.6061C5.2501 8.75908 7.6341 5.35108 12.4041 5.35108C16.2001 5.35108 18.7241 8.12808 18.7241 11.0981C18.7241 15.0071 16.5471 17.9461 13.3301 17.9461C12.8493 17.9614 12.3724 17.8553 11.9434 17.6375C11.5145 17.4198 11.1474 17.0973 10.8761 16.7001C10.8761 16.7001 10.2981 19.0161 10.1841 19.4541C9.95139 20.2108 9.608 20.9289 9.1651 21.5851C10.0881 21.8651 11.0471 22.0051 12.0111 22.0011C13.3247 22.0021 14.6256 21.7441 15.8393 21.2417C17.053 20.7392 18.1556 20.0024 19.0842 19.0732C20.0127 18.144 20.7488 17.0408 21.2504 15.8268C21.7519 14.6127 22.0091 13.3117 22.0071 11.9981C22.0059 9.58308 21.1309 7.25007 19.5437 5.42986C17.9566 3.60964 15.7644 2.42514 13.3721 2.09508L13.3701 2.09408Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div
                                className="bubble-element Group bubble-r-container relative"
                                style={{
                                    zIndex: 41,
                                    alignSelf: "flex-start",
                                    minWidth: 50,
                                    maxWidth: 50,
                                    order: 5,
                                    minHeight: 50,
                                    maxHeight: 50,
                                    width: 50,
                                    flexGrow: 1,
                                    height: 50,
                                    margin: 0,
                                    overflow: "visible",
                                    background:
                                        "-webkit-linear-gradient(left, rgba(45, 45, 255, 0.85) 0%, rgba(0, 212, 255, 0.85) 100%)",
                                    borderRadius: 10,
                                    opacity: 1
                                }}
                            >
                                <div
                                    className="bubble-element HTML"
                                    style={{
                                        zIndex: 2,
                                        placeSelf: "center",
                                        minWidth: 24,
                                        maxWidth: 24,
                                        minHeight: 24,
                                        maxHeight: 24,
                                        width: 24,
                                        height: 24,
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
                                            d="M22 5.79997C21.2483 6.12606 20.4534 6.34163 19.64 6.43997C20.4982 5.92729 21.1413 5.12075 21.45 4.16997C20.6436 4.65003 19.7608 4.98826 18.84 5.16997C18.2245 4.50254 17.405 4.05826 16.5098 3.90682C15.6147 3.75537 14.6945 3.90532 13.8938 4.33315C13.093 4.76099 12.4569 5.4425 12.0852 6.2708C11.7135 7.09911 11.6273 8.02736 11.84 8.90997C10.2094 8.82749 8.61444 8.40292 7.15865 7.66383C5.70287 6.92474 4.41885 5.88766 3.39 4.61997C3.02914 5.25013 2.83952 5.96379 2.84 6.68997C2.83872 7.36435 3.00422 8.02858 3.32176 8.62353C3.63929 9.21848 4.09902 9.72568 4.66 10.1C4.00798 10.0822 3.36989 9.90726 2.8 9.58997V9.63997C2.80489 10.5849 3.13599 11.4991 3.73731 12.2279C4.33864 12.9568 5.17326 13.4556 6.1 13.64C5.74326 13.7485 5.37287 13.8058 5 13.81C4.74189 13.807 4.48442 13.7835 4.23 13.74C4.49391 14.5528 5.00462 15.2631 5.69107 15.7721C6.37753 16.2811 7.20558 16.5635 8.06 16.58C6.6172 17.7152 4.83588 18.3348 3 18.34C2.66574 18.3411 2.33174 18.321 2 18.28C3.87443 19.4902 6.05881 20.1327 8.29 20.13C9.82969 20.146 11.3571 19.855 12.7831 19.274C14.2091 18.6931 15.505 17.8338 16.5952 16.7465C17.6854 15.6591 18.548 14.3654 19.1326 12.9409C19.7172 11.5164 20.012 9.98969 20 8.44997C20 8.27996 20 8.09997 20 7.91997C20.7847 7.33478 21.4615 6.61739 22 5.79997Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="bubble-element Video"
                        style={{
                            zIndex: 48,
                            alignSelf: "flex-start",
                            minWidth: 300,
                            maxWidth: 582,
                            order: 5,
                            minHeight: 347,
                            width: 300,
                            flexGrow: 1,
                            height: 347,
                            margin: "0px 10px",
                            borderRadius: 0,
                            opacity: 1
                        }}
                    >
                        <div style={{ display: "none" }} />
                        <iframe
                            allow="autoplay; fullscreen"
                            width="100% - 0"
                            height=" 100% - 0"
                            id="youtube_uuid_1688719274988x11234"
                            frameBorder={0}
                            allowFullScreen=""
                            modestbranding={1}
                            autohide={1}
                            src="//www.youtube.com/embed/1e9FwSrrs4w?rel=0&enablejsapi=1"
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                display: "block",
                                width: "100%",
                                height: "100%"
                            }}
                        />
                    </div>
                </div>
        </>

    );
};

export default LandingAdvertisers;