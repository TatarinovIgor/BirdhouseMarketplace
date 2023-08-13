import React from "react";
import {Col, Row} from "antd";

export const BHLandingCard = (props) => {
    const {svgIcon, title, description} = props;
    return (
        <Col
            style={{
                alignSelf: "stretch",
                minWidth: 280,
                maxWidth: 300,
                width: 280,
                height: "auto",
                margin: "0px 10px 20px",
                justifyContent: "flex-start",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                borderStyle: "solid",
                borderWidth: 2,
                borderColor: "rgb(9, 23, 71)",
                borderRadius: 15,
                padding: 20,
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center", // Center content horizontally
                }}
            >
                <div
                    style={{
                        height: 80,
                        width: 80,
                        display: "flex",
                        justifyContent: "center", // Center icon horizontally
                        alignItems: "center", // Center icon vertically
                        backgroundColor: "rgba(255, 255, 255, 0)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundImage: `url("https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647439422860x592145729085035800/Rectangle%2018.svg")`,
                    }}
                >
                    <div
                        style={{
                            width: 36,
                            height: 36,
                        }}
                    >
                        {svgIcon}
                    </div>
                </div>
                <div
                    style={{
                        alignSelf: "center",
                        height: "max-content",
                        width: "calc(100% - 0px)",
                        margin: "20px 0px",
                        fontFamily: "Poppins",
                        fontSize: 24,
                        fontWeight: 600,
                        color: "rgb(0, 0, 0)",
                        textAlign: "center",
                        letterSpacing: "0.5px",
                    }}
                >
                    {title}
                </div>
                <div
                    style={{
                        alignSelf: "center",
                        width: "auto",
                        fontFamily: "Poppins",
                        fontSize: 14,
                        fontWeight: 400,
                        color: "rgb(123, 123, 123)",
                        textAlign: "center",
                        lineHeight: "1.5",
                    }}
                >
                    {description}
                </div>
            </div>
        </Col>


    )
}