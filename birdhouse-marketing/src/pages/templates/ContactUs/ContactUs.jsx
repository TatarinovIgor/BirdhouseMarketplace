import React, { useEffect, useState } from 'react';


const ContactUs = () => {
    return (
        <>
            {/* Header */}
            <div
                className="bubble-element Group bubble-r-container flex row"
                style={{
                    zIndex: 2,
                    alignSelf: "center",
                    minWidth: 320,
                    maxWidth: 1200,
                    order: 2,
                    minHeight: 0,
                    height: "max-content",
                    flexGrow: 0,
                    flexShrink: 0,
                    width: "calc(100% - 0px)",
                    margin: "150px 0px 70px",
                    justifyContent: "space-between",
                    overflow: "visible",
                    borderRadius: 0,
                    opacity: 1
                }}
            >
                {/* Form */}
                <div
                    className="bubble-element Group bubble-r-container flex column"
                    style={{
                        zIndex: 4,
                        alignSelf: "stretch",
                        minWidth: 300,
                        maxWidth: 537,
                        order: 4,
                        minHeight: 0,
                        width: 300,
                        flexGrow: 1,
                        height: "auto",
                        margin: "0px 10px",
                        justifyContent: "flex-start",
                        overflow: "visible",
                        borderRadius: 0,
                        opacity: 1
                    }}
                >
                    <div
                        className="bubble-element Image"
                        style={{
                            visibility: "hidden",
                            zIndex: 6,
                            alignSelf: "flex-start",
                            minWidth: 300,
                            order: 1,
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
                            zIndex: 8,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            maxWidth: 480,
                            order: 4,
                            minHeight: 0,
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
                            className="bubble-element Text"
                            style={{
                                zIndex: 11,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 1,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 15px",
                                whiteSpace: "pre-wrap",
                                overflow: "visible",
                                paddingBottom: 0,
                                wordBreak: "break-word",
                                fontFamily: "Poppins",
                                fontSize: 32,
                                fontWeight: 600,
                                color: "rgb(0, 0, 0)",
                                lineHeight: 1,
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            Send a message
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
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 15px",
                                whiteSpace: "pre-wrap",
                                overflow: "visible",
                                paddingBottom: 0,
                                wordBreak: "break-word",
                                fontFamily: "Poppins",
                                fontSize: 16,
                                fontWeight: 400,
                                color: "rgb(123, 123, 123)",
                                lineHeight: "1.4",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            Share your thoughts or inquires with us, we’ll be happy to assist with
                            anything in mind. We reply within 24 hours.
                        </div>
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 12,
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
                                paddingBottom: 0,
                                wordBreak: "break-word",
                                fontFamily: "Poppins",
                                fontSize: 14,
                                fontWeight: 600,
                                color: "rgb(0, 0, 0)",
                                lineHeight: 1,
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            Email
                        </div>
                        <input
                            type="email"
                            className="bubble-element Input"
                            placeholder="Enter Email"
                            maxLength=""
                            style={{
                                zIndex: 14,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 4,
                                minHeight: 50,
                                height: 50,
                                flexGrow: 1,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 20px",
                                border: "1px solid rgb(238, 238, 238)",
                                backgroundColor: "transparent",
                                borderRadius: 15,
                                fontFamily: "Poppins",
                                fontSize: 14,
                                fontWeight: 500,
                                color: "rgb(0, 0, 0)",
                                letterSpacing: "0.5px",
                                padding: "0px 15px",
                                opacity: 1
                            }}
                        />
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 13,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 5,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 10px",
                                whiteSpace: "pre-wrap",
                                overflow: "visible",
                                paddingBottom: 0,
                                wordBreak: "break-word",
                                fontFamily: "Poppins",
                                fontSize: 14,
                                fontWeight: 600,
                                color: "rgb(0, 0, 0)",
                                lineHeight: 1,
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            Subject
                        </div>
                        <input
                            type="input"
                            className="bubble-element Input"
                            placeholder="Enter Subject"
                            maxLength=""
                            style={{
                                zIndex: 15,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 6,
                                minHeight: 50,
                                height: 50,
                                flexGrow: 1,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 20px",
                                border: "1px solid rgb(238, 238, 238)",
                                backgroundColor: "transparent",
                                borderRadius: 15,
                                fontFamily: "Poppins",
                                fontSize: 14,
                                fontWeight: 500,
                                color: "rgb(0, 0, 0)",
                                letterSpacing: "0.5px",
                                padding: "0px 15px",
                                opacity: 1
                            }}
                        />
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 2,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 10,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 10px",
                                whiteSpace: "pre-wrap",
                                overflow: "visible",
                                paddingBottom: 0,
                                wordBreak: "break-word",
                                fontFamily: "Poppins",
                                fontSize: 14,
                                fontWeight: 600,
                                color: "rgb(0, 0, 0)",
                                lineHeight: 1,
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            Message
                        </div>
                        <textarea
                            className="bubble-element MultiLineInput"
                            data-gramm_editor="false"
                            maxLength=""
                            placeholder="Enter Message"
                            style={{
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 11,
                                minHeight: 150,
                                height: 150,
                                flexGrow: 1,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 20px",
                                border: "1px solid rgb(238, 238, 238)",
                                backgroundColor: "transparent",
                                borderRadius: 15,
                                fontFamily: "Poppins",
                                fontSize: 14,
                                fontWeight: 500,
                                color: "rgb(0, 0, 0)",
                                letterSpacing: "0.5px",
                                lineHeight: 1,
                                padding: "18px 15px",
                                opacity: 1
                            }}
                            defaultValue={""}
                        />
                        <button
                            className="bubble-element Button clickable-element"
                            style={{
                                zIndex: 10,
                                alignSelf: "flex-end",
                                minWidth: 0,
                                maxWidth: 121,
                                order: 12,
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
                                borderRadius: 7,
                                opacity: 1,
                                transition: "background 200ms ease 0s"
                            }}
                        >
                            Send
                        </button>
                    </div>
                    {/* Contact */}
                    <div
                        className="bubble-element Group bubble-r-container flex column"
                        style={{
                            zIndex: 8,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            order: 5,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
                            margin: "0px 0px 20px",
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
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 15px",
                                whiteSpace: "pre-wrap",
                                overflow: "visible",
                                paddingBottom: 0,
                                wordBreak: "break-word",
                                fontFamily: "Poppins",
                                fontSize: 32,
                                fontWeight: 600,
                                color: "rgb(0, 0, 0)",
                                lineHeight: 1,
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            Contact Us
                        </div>
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                zIndex: 3,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 2,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 15px",
                                justifyContent: "flex-start",
                                overflow: "visible",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            <div
                                className="bubble-element Image"
                                style={{
                                    zIndex: 2,
                                    alignSelf: "flex-start",
                                    minWidth: 30,
                                    maxWidth: 30,
                                    order: 1,
                                    minHeight: 30,
                                    maxHeight: 30,
                                    width: 30,
                                    flexGrow: 1,
                                    height: 30,
                                    margin: "0px 10px 0px 0px",
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                <img
                                    alt=""
                                    src="https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1646927756712x784452518492168400/Location.svg"
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
                                <div style={{display: "none"}}/>
                            </div>
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
                                    margin: 0,
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    paddingBottom: 0,
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 16,
                                    fontWeight: 400,
                                    color: "rgb(123, 123, 123)",
                                    lineHeight: "1.4",
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                BirdHouse Office
                            </div>
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
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 15px",
                                justifyContent: "flex-start",
                                overflow: "visible",
                                borderRadius: 0,
                                opacity: 1
                            }}
                        >
                            <div
                                className="bubble-element Image"
                                style={{
                                    zIndex: 2,
                                    alignSelf: "flex-start",
                                    minWidth: 30,
                                    maxWidth: 30,
                                    order: 1,
                                    minHeight: 30,
                                    maxHeight: 30,
                                    width: 30,
                                    flexGrow: 1,
                                    height: 30,
                                    margin: "0px 10px 0px 0px",
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                <img
                                    alt=""
                                    src="https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1646927790375x840830970954417300/phone.svg"
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
                                <div style={{display: "none"}}/>
                            </div>
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
                                    margin: 0,
                                    whiteSpace: "pre-wrap",
                                    overflow: "visible",
                                    paddingBottom: 0,
                                    wordBreak: "break-word",
                                    fontFamily: "Poppins",
                                    fontSize: 16,
                                    fontWeight: 400,
                                    color: "rgb(123, 123, 123)",
                                    lineHeight: "1.4",
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                +1 234-567-890
                            </div>
                        </div>
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                zIndex: 7,
                                alignSelf: "flex-start",
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
                                borderStyle: "solid",
                                borderWidth: 1,
                                borderColor: "rgb(238, 238, 238)",
                                borderRadius: 20,
                                opacity: 1
                            }}
                        >
                            <div
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    zIndex: 5,
                                    alignSelf: "flex-start",
                                    minWidth: 45,
                                    maxWidth: 45,
                                    order: 1,
                                    minHeight: 40,
                                    maxHeight: 40,
                                    width: 45,
                                    flexGrow: 1,
                                    height: 40,
                                    margin: 0,
                                    justifyContent: "center",
                                    overflow: "visible",
                                    borderRadius: 0,
                                    borderRight: "1px solid rgb(238, 238, 238)",
                                    opacity: 1
                                }}
                            >
                                <div
                                    className="bubble-element Image"
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
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    <img
                                        alt=""
                                        src="https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1646927940570x384290366354949500/Icons.svg"
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
                                    <div style={{display: "none"}}/>
                                </div>
                            </div>
                            <div
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    zIndex: 6,
                                    alignSelf: "flex-start",
                                    minWidth: 45,
                                    maxWidth: 45,
                                    order: 2,
                                    minHeight: 40,
                                    maxHeight: 40,
                                    width: 45,
                                    flexGrow: 1,
                                    height: 40,
                                    margin: 0,
                                    justifyContent: "center",
                                    overflow: "visible",
                                    borderRadius: 0,
                                    borderRight: "1px solid rgb(238, 238, 238)",
                                    opacity: 1
                                }}
                            >
                                <div
                                    className="bubble-element Image"
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
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    <img
                                        alt=""
                                        src="https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1646928002560x538703172767904800/Icons%20%281%29.svg"
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
                                    <div style={{display: "none"}}/>
                                </div>
                            </div>
                            <div
                                className="bubble-element Group bubble-r-container flex row"
                                style={{
                                    zIndex: 6,
                                    alignSelf: "flex-start",
                                    minWidth: 45,
                                    maxWidth: 45,
                                    order: 3,
                                    minHeight: 40,
                                    maxHeight: 40,
                                    width: 45,
                                    flexGrow: 1,
                                    height: 40,
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
                                        borderRadius: 0,
                                        opacity: 1
                                    }}
                                >
                                    <img
                                        alt=""
                                        src="https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1646928019475x227829831370387260/website.svg"
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
                                    <div style={{display: "none"}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer starts here -*/}
        </>

    );
};

export default ContactUs;