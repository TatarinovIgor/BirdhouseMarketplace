import React, { useEffect, useState } from 'react';
import "./style.css"
const About = () => {

    return (
        <>
            {/* Main content */}
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
                    <h1
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
                            fontSize: 36,
                            fontWeight: 700,
                            color: "rgb(0, 0, 0)",
                            lineHeight: "1.5",
                            borderRadius: 0,
                            opacity: 1
                        }}
                    >
                        Our unique solution
                    </h1>
                    <div
                        className="bubble-element Text"
                        style={{
                            zIndex: 5,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            maxWidth: 478,
                            order: 2,
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
                            fontSize: 14,
                            fontWeight: 500,
                            color: "rgb(0, 0, 0)",
                            lineHeight: 1,
                            borderRadius: 0,
                            opacity: 1
                        }}
                    >
                        What do we do?
                    </div>
                    <div
                        className="bubble-element Text"
                        style={{
                            zIndex: 4,
                            alignSelf: "center",
                            minWidth: 0,
                            order: 3,
                            minHeight: 0,
                            height: "max-content",
                            flexGrow: 0,
                            flexShrink: 0,
                            width: "calc(100% - 0px)",
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
                            opacity: 1
                        }}
                    >
                        BirdHouse marketing is a unique influence marketing solution that is
                        based on NFT. Our mission is to make influence marketing easier for
                        businesses and simplify advertisers' search for influencers
                    </div>
                </div>
                <div
                    className="bubble-element Image"
                    style={{
                        zIndex: 6,
                        alignSelf: "flex-end",
                        minWidth: 300,
                        maxWidth: 480,
                        order: 2,
                        width: 300,
                        flexGrow: 1,
                        height: "max-content",
                        margin: "0px 10px 20px",
                        borderRadius: 0,
                        opacity: 1
                    }}
                >
                    <img
                        alt=""
                        src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1646929483457x999133761311537000%2F5319229%25201.png?w=768&h=526&auto=compress&dpr=2&fit=max"
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
                    <div style={{ position: "relative", paddingTop: "68.5417%" }} />
                </div>
            </div>
            <div
                className="bubble-element Group bubble-r-container flex row"
                style={{
                    zIndex: 5,
                    alignSelf: "center",
                    minWidth: 320,
                    maxWidth: 1200,
                    order: 3,
                    minHeight: 0,
                    height: "max-content",
                    flexGrow: 0,
                    flexShrink: 0,
                    width: "calc(100% - 0px)",
                    margin: "100px 0px 70px",
                    justifyContent: "space-between",
                    overflow: "visible",
                    borderRadius: 0,
                    opacity: 1
                }}
            >
                <div
                    className="bubble-element Image"
                    style={{
                        zIndex: 6,
                        alignSelf: "flex-end",
                        minWidth: 300,
                        maxWidth: 480,
                        order: 3,
                        width: 300,
                        flexGrow: 1,
                        height: "max-content",
                        margin: "0px 10px",
                        borderRadius: 0,
                        opacity: 1
                    }}
                >
                    <img
                        alt=""
                        src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1651395155093x877349976850067700%2Funnamed%2520%25281%2529.png?w=768&h=608&auto=compress&dpr=2&fit=max"
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
                    <div style={{ position: "relative", paddingTop: "79.1667%" }} />
                </div>
                <div
                    className="bubble-element Group bubble-r-container flex column"
                    style={{
                        zIndex: 5,
                        alignSelf: "flex-start",
                        minWidth: 300,
                        order: 4,
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
                    <h1
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
                            fontSize: 36,
                            fontWeight: 700,
                            color: "rgb(0, 0, 0)",
                            lineHeight: "1.5",
                            borderRadius: 0,
                            opacity: 1
                        }}
                    >
                        Our method
                    </h1>
                    <div
                        className="bubble-element Text"
                        style={{
                            zIndex: 5,
                            alignSelf: "flex-start",
                            minWidth: 0,
                            maxWidth: 478,
                            order: 2,
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
                            fontSize: 14,
                            fontWeight: 500,
                            color: "rgb(0, 0, 0)",
                            lineHeight: 1,
                            borderRadius: 0,
                            opacity: 1
                        }}
                    >
                        How do we do it?
                    </div>
                    <div
                        className="bubble-element Text"
                        style={{
                            zIndex: 4,
                            alignSelf: "center",
                            minWidth: 0,
                            order: 3,
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
                            fontSize: 14,
                            fontWeight: 500,
                            color: "rgb(33, 33, 33)",
                            letterSpacing: "0.1px",
                            lineHeight: "1.5",
                            borderRadius: 0,
                            opacity: 1
                        }}
                    >
                        The system is based on NFT. Influencer issue their own NFT. However,
                        instead of jpeg/png image NFT has advertising agreement. Then
                        influencer publish &nbsp; his new-made NFT on our marketplace, where
                        it is beign sold like any other NFT.{" "}
                    </div>
                    <div
                        className="bubble-element Text"
                        style={{
                            zIndex: 6,
                            alignSelf: "center",
                            minWidth: 0,
                            order: 4,
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
                            fontSize: 14,
                            fontWeight: 500,
                            color: "rgb(33, 33, 33)",
                            letterSpacing: "0.1px",
                            lineHeight: "1.5",
                            borderRadius: 0,
                            opacity: 1
                        }}
                    >
                        Then advertisers can buy issued NFT on our marketplace. Advertisers
                        can use it at any moment. As soon as he uses his NFT, it is being
                        transferred to its issuer and the issuer has to post an advertisement,
                        which was discussed in the agreement.&nbsp;
                    </div>
                    <div
                        className="bubble-element Text"
                        style={{
                            zIndex: 7,
                            alignSelf: "center",
                            minWidth: 0,
                            order: 5,
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
                            fontSize: 14,
                            fontWeight: 500,
                            color: "rgb(33, 33, 33)",
                            letterSpacing: "0.1px",
                            lineHeight: "1.5",
                            borderRadius: 0,
                            opacity: 1
                        }}
                    >
                        Also, advertisers can hold it, and resell it later. This will allow
                        him to buy ads at a lower price when the influencer has a smaller
                        audience. Later on, an advertiser can sell his NFT to other
                        advertisers. Because an influencer has a larger audience, he can sell
                        his NFT at a higher price.
                    </div>
                </div>
            </div>
        </>

    );
};

export default About;