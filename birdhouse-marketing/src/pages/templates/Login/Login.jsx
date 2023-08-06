import React, { useEffect, useState } from 'react';
import "./style.css";
const Login = () => {
    return (
        <>
                {/* Content */}
                <div
                    className="bubble-element Group bubble-r-container flex column"
                    style={{
                        alignSelf: "center",
                        minWidth: 300,
                        maxWidth: 560,
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
                                alignSelf: "center",
                                minWidth: 0,
                                order: 1,
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
                            Register on BirdHouse
                        </div>
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                alignSelf: "center",
                                minWidth: 0,
                                order: 2,
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
                                        'url("https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647387452165x912281278443527700/Group%20462.svg")'
                                }}
                            />
                            <input
                                type="input"
                                className="bubble-element Input a1688714417222x6472"
                                placeholder="Username"
                                maxLength=""
                                style={{
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
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                alignSelf: "center",
                                minWidth: 0,
                                order: 3,
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
                                        'url("https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647610510371x365926632293561000/contact.svg")'
                                }}
                            />
                            <input
                                type="email"
                                className="bubble-element Input a1688714417222x6472"
                                style={{
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
                                placeholder="Email"
                                maxLength=""
                            />
                        </div>
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                alignSelf: "center",
                                minWidth: 0,
                                order: 4,
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
                                        'url("https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647610510371x365926632293561000/contact.svg")'
                                }}
                            />
                            <input
                                type="tel"
                                className="bubble-element Input a1688714417222x6472"
                                style={{
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
                                placeholder="Phone"
                                inputMode="numeric"
                            />
                        </div>
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                zIndex: 6,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 5,
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
                                        'url("https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647610506434x371512658769353800/password.svg")'
                                }}
                            />
                            <input
                                type="password"
                                autoComplete="new-password"
                                className="bubble-element Input a1688714417222x6472"
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
                                placeholder="Password"
                                maxLength=""
                            />
                        </div>
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                zIndex: 6,
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
                                        'url("https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647610500422x743987472932040600/password.svg")'
                                }}
                            />
                            <input
                                type="password"
                                autoComplete="new-password"
                                className="bubble-element Input a1688714417222x6472"
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
                                placeholder="Confirm password"
                                maxLength=""
                            />
                        </div>
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 13,
                                alignSelf: "flex-start",
                                minWidth: 200,
                                order: 7,
                                minHeight: 25,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: 0,
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
                            Please sellect one
                        </div>
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                zIndex: 12,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 8,
                                minHeight: 50,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 20px",
                                justifyContent: "space-between",
                                overflow: "visible",
                                borderStyle: "solid",
                                borderWidth: 0,
                                borderColor: "rgb(238, 238, 238)",
                                borderRadius: 15,
                                opacity: 1
                            }}
                        >
                            <div
                                className="bubble-element RadioButtons radio clickable-element radio-black"
                                style={{
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    maxWidth: 320,
                                    order: 1,
                                    minHeight: 50,
                                    width: 0,
                                    flexGrow: 1,
                                    height: "max-content",
                                    margin: 0,
                                    gridTemplateColumns: "repeat(1, 1fr)",
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    fontWeight: 400,
                                    color: "rgb(37, 37, 37)",
                                    opacity: 1
                                }}
                            >
                                <input
                                    type="radio"
                                    defaultValue="I am advertiser"
                                    name="1688714417263x7253"
                                    id="1688714417263x7253_option_0"
                                />
                                <label htmlFor="1688714417263x7253_option_0">I am advertiser</label>
                                <input
                                    type="radio"
                                    defaultValue="I am blogger"
                                    name="1688714417263x7253"
                                    id="1688714417263x7253_option_1"
                                />
                                <label htmlFor="1688714417263x7253_option_1">I am blogger</label>
                            </div>
                        </div>
                        <button
                            className="bubble-element Button clickable-element"
                            style={{
                                zIndex: 7,
                                alignSelf: "center",
                                minWidth: 0,
                                maxWidth: 150,
                                order: 9,
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
                            Continue
                        </button>
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                zIndex: 10,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 10,
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
                                className="bubble-element Shape"
                                style={{
                                    zIndex: 2,
                                    alignSelf: "center",
                                    minWidth: 0,
                                    maxWidth: 169,
                                    order: 1,
                                    minHeight: 1,
                                    maxHeight: 1,
                                    width: 0,
                                    flexGrow: 1,
                                    height: 1,
                                    margin: 0,
                                    backgroundColor: "rgb(238, 238, 238)",
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                <div style={{ display: "none" }} />
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
                                    fontSize: 12,
                                    fontWeight: 400,
                                    color: "rgb(0, 0, 0)",
                                    lineHeight: "1.5",
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                or
                            </div>
                            <div
                                className="bubble-element Shape"
                                style={{
                                    zIndex: 4,
                                    alignSelf: "center",
                                    minWidth: 0,
                                    maxWidth: 169,
                                    order: 3,
                                    minHeight: 1,
                                    maxHeight: 1,
                                    width: 0,
                                    flexGrow: 1,
                                    height: 1,
                                    margin: 0,
                                    backgroundColor: "rgb(238, 238, 238)",
                                    borderRadius: 0,
                                    opacity: 1
                                }}
                            >
                                <div style={{ display: "none" }} />
                            </div>
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
                            You already have an account?
                        </div>
                        <div
                            className="bubble-element Text clickable-element"
                            style={{
                                zIndex: 9,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 12,
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
                                fontSize: 16,
                                fontWeight: 500,
                                color: "rgb(45, 45, 255)",
                                letterSpacing: "0.5px",
                                lineHeight: "1.5",
                                borderRadius: 0,
                                opacity: 1,
                                cursor: "pointer"
                            }}
                            id="gradient-text"
                        >
                            Log in
                        </div>
                    </div>
                </div>
                <div
                    className="bubble-element Group bubble-r-container flex column"
                    style={{
                        visibility: "hidden",
                        zIndex: 6,
                        alignSelf: "center",
                        minWidth: 300,
                        maxWidth: 560,
                        order: 3,
                        minHeight: 0,
                        height: "max-content",
                        flexGrow: 0,
                        flexShrink: 0,
                        width: "calc(100% - 20px)",
                        margin: "150px 10px 50px",
                        display: "none",
                        justifyContent: "flex-start",
                        overflow: "visible"
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
                                margin: "38px 0px 40px"
                            }}
                        />
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                zIndex: 11,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 2,
                                minHeight: 50,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 20px",
                                justifyContent: "space-between"
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
                                    margin: 10
                                }}
                            />
                            <input
                                type="input"
                                className="bubble-element Input"
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
                                    margin: 0
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
                                minHeight: 50,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 20px",
                                justifyContent: "space-between"
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
                                    margin: 10
                                }}
                            />
                            <input
                                type="input"
                                className="bubble-element Input"
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
                                    margin: 0
                                }}
                            />
                        </div>
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                zIndex: 6,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 4,
                                minHeight: 50,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 20px",
                                justifyContent: "space-between"
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
                                    margin: 10
                                }}
                            />
                            <input
                                type="input"
                                className="bubble-element Input"
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
                                    margin: 0
                                }}
                            />
                        </div>
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 14,
                                alignSelf: "flex-start",
                                minWidth: 200,
                                order: 5,
                                minHeight: 25,
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
                                zIndex: 6,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 6,
                                minHeight: 50,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 20px",
                                justifyContent: "space-between"
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
                                    margin: 10
                                }}
                            />
                            <input
                                type="input"
                                className="bubble-element Input"
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
                                    margin: 0
                                }}
                            />
                        </div>
                        <button
                            className="bubble-element Button"
                            style={{
                                zIndex: 7,
                                alignSelf: "center",
                                minWidth: 0,
                                maxWidth: 150,
                                order: 9,
                                minHeight: 50,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 30px"
                            }}
                        />
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                zIndex: 10,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 10,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 20px",
                                justifyContent: "space-between"
                            }}
                        >
                            <div
                                className="bubble-element Shape"
                                style={{
                                    zIndex: 2,
                                    alignSelf: "center",
                                    minWidth: 0,
                                    maxWidth: 169,
                                    order: 1,
                                    minHeight: 1,
                                    maxHeight: 1,
                                    width: 0,
                                    flexGrow: 1,
                                    height: 1,
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
                            <div
                                className="bubble-element Shape"
                                style={{
                                    zIndex: 4,
                                    alignSelf: "center",
                                    minWidth: 0,
                                    maxWidth: 169,
                                    order: 3,
                                    minHeight: 1,
                                    maxHeight: 1,
                                    width: 0,
                                    flexGrow: 1,
                                    height: 1,
                                    margin: 0
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
                                margin: "0px 0px 30px"
                            }}
                        />
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 9,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 12,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "auto",
                                margin: "0px 0px 30px"
                            }}
                        />
                    </div>
                </div>
                <div
                    className="bubble-element Group bubble-r-container flex column"
                    style={{
                        visibility: "hidden",
                        zIndex: 6,
                        alignSelf: "center",
                        minWidth: 300,
                        maxWidth: 560,
                        order: 4,
                        minHeight: 0,
                        height: "max-content",
                        flexGrow: 0,
                        flexShrink: 0,
                        width: "calc(100% - 20px)",
                        margin: "150px 10px 50px",
                        display: "none",
                        justifyContent: "flex-start",
                        overflow: "visible"
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
                                margin: "38px 0px 40px"
                            }}
                        />
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                zIndex: 5,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 3,
                                minHeight: 50,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 20px",
                                justifyContent: "space-between"
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
                                    margin: 10
                                }}
                            />
                            <input
                                type="input"
                                className="bubble-element Input"
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
                                    margin: 0
                                }}
                            />
                        </div>
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                zIndex: 6,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 4,
                                minHeight: 50,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 20px",
                                justifyContent: "space-between"
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
                                    margin: 10
                                }}
                            />
                            <input
                                type="input"
                                className="bubble-element Input"
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
                                    margin: 0
                                }}
                            />
                        </div>
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 15,
                                alignSelf: "flex-start",
                                minWidth: 200,
                                order: 5,
                                minHeight: 25,
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
                                zIndex: 6,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 6,
                                minHeight: 50,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 20px",
                                justifyContent: "space-between"
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
                                    margin: 10
                                }}
                            />
                            <input
                                type="input"
                                className="bubble-element Input"
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
                                    margin: 0
                                }}
                            />
                        </div>
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                zIndex: 33,
                                alignSelf: "flex-start",
                                minWidth: 0,
                                order: 9,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 30px",
                                justifyContent: "flex-start"
                            }}
                        >
                            <input
                                type="input"
                                className="bubble-element Input"
                                style={{
                                    zIndex: 28,
                                    alignSelf: "flex-start",
                                    minWidth: 0,
                                    order: 1,
                                    minHeight: 50,
                                    width: 0,
                                    flexGrow: 1,
                                    height: 50,
                                    margin: 0
                                }}
                            />
                            <div
                                className="bubble-element CustomElement bubble-r-container flex row"
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
                                    justifyContent: "center"
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
                                        margin: 0
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
                                        justifyContent: "flex-start"
                                    }}
                                />
                            </div>
                        </div>
                        <button
                            className="bubble-element Button"
                            style={{
                                zIndex: 7,
                                alignSelf: "center",
                                minWidth: 0,
                                maxWidth: 150,
                                order: 10,
                                minHeight: 50,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 30px"
                            }}
                        />
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                zIndex: 10,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 11,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 20px",
                                justifyContent: "space-between"
                            }}
                        >
                            <div
                                className="bubble-element Shape"
                                style={{
                                    zIndex: 2,
                                    alignSelf: "center",
                                    minWidth: 0,
                                    maxWidth: 169,
                                    order: 1,
                                    minHeight: 1,
                                    maxHeight: 1,
                                    width: 0,
                                    flexGrow: 1,
                                    height: 1,
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
                            <div
                                className="bubble-element Shape"
                                style={{
                                    zIndex: 4,
                                    alignSelf: "center",
                                    minWidth: 0,
                                    maxWidth: 169,
                                    order: 3,
                                    minHeight: 1,
                                    maxHeight: 1,
                                    width: 0,
                                    flexGrow: 1,
                                    height: 1,
                                    margin: 0
                                }}
                            />
                        </div>
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 8,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 12,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "auto",
                                margin: "0px 0px 30px"
                            }}
                        />
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 9,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 13,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "auto",
                                margin: "0px 0px 30px"
                            }}
                        />
                    </div>
                </div>
                <div
                    className="bubble-element Group bubble-r-container flex column"
                    style={{
                        visibility: "hidden",
                        zIndex: 3,
                        alignSelf: "center",
                        minWidth: 300,
                        maxWidth: 560,
                        order: 5,
                        minHeight: 0,
                        height: "max-content",
                        flexGrow: 0,
                        flexShrink: 0,
                        width: "calc(100% - 20px)",
                        margin: "150px 10px 50px",
                        display: "none",
                        justifyContent: "flex-start"
                    }}
                >
                    <div
                        className="bubble-element Group bubble-r-container flex column"
                        style={{
                            zIndex: 13,
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
                                margin: "38px 0px 40px"
                            }}
                        />
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                zIndex: 5,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 2,
                                minHeight: 50,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 20px",
                                justifyContent: "space-between"
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
                                    margin: 10
                                }}
                            />
                            <input
                                type="email"
                                className="bubble-element Input"
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
                                    margin: 0
                                }}
                            />
                        </div>
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                zIndex: 6,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 3,
                                minHeight: 50,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 20px",
                                justifyContent: "space-between"
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
                                    margin: 10
                                }}
                            />
                            <input
                                type="password"
                                autoComplete="new-password"
                                className="bubble-element Input"
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
                                    margin: 0
                                }}
                            />
                        </div>
                        <button
                            className="bubble-element Button"
                            style={{
                                zIndex: 7,
                                alignSelf: "center",
                                minWidth: 0,
                                maxWidth: 150,
                                order: 4,
                                minHeight: 50,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 30px"
                            }}
                        />
                        <div
                            className="bubble-element Group bubble-r-container flex row"
                            style={{
                                zIndex: 11,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 5,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "calc(100% - 0px)",
                                margin: "0px 0px 20px",
                                justifyContent: "space-between"
                            }}
                        >
                            <div
                                className="bubble-element Shape"
                                style={{
                                    zIndex: 2,
                                    alignSelf: "center",
                                    minWidth: 0,
                                    maxWidth: 169,
                                    order: 1,
                                    minHeight: 1,
                                    maxHeight: 1,
                                    width: 0,
                                    flexGrow: 1,
                                    height: 1,
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
                            <div
                                className="bubble-element Shape"
                                style={{
                                    zIndex: 4,
                                    alignSelf: "center",
                                    minWidth: 0,
                                    maxWidth: 169,
                                    order: 3,
                                    minHeight: 1,
                                    maxHeight: 1,
                                    width: 0,
                                    flexGrow: 1,
                                    height: 1,
                                    margin: 0
                                }}
                            />
                        </div>
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 8,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 6,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "auto",
                                margin: "0px 0px 30px"
                            }}
                        />
                        <div
                            className="bubble-element Text"
                            style={{
                                zIndex: 9,
                                alignSelf: "center",
                                minWidth: 0,
                                order: 7,
                                minHeight: 0,
                                height: "max-content",
                                flexGrow: 0,
                                flexShrink: 0,
                                width: "auto",
                                margin: "0px 0px 30px"
                            }}
                        />
                    </div>
                </div>
        </>

    )
};

export default Login;