import React, { useState } from "react";

export const BHCarousel = (props) => {
    const { title, imgUrl } = props;
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const textStyles = {
        fontFamily: "Poppins",
        fontSize: 18,
        fontWeight: 600,
        transition: "color 0.3s ease, text-shadow 0.3s ease"
    };

    const boxStyles = {
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 10px 20px 0px"
    };

    if (isHovered) {
        textStyles.color = "transparent";
        textStyles.backgroundClip = "text";
        textStyles.backgroundImage = "linear-gradient(45deg, rgb(36, 79, 255), rgb(7, 185, 255))";
        textStyles.WebkitBackgroundClip = "text";
        boxStyles.boxShadow = "rgba(7, 185, 255, 0.2) 0px 10px 20px 0px";
    }

    return (
        <div
            style={{
                ...boxStyles,
                cursor: "pointer",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                width: 280,
                height: 258,
                borderStyle: "solid",
                borderColor: "rgb(255, 255, 255)",
                borderRadius: 15,
                marginRight: 20,
                marginBottom: 35,
                transition: "background-color 0.3s ease, box-shadow 0.3s ease"
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div style={{ marginLeft: 21, paddingTop: 21 }}>
                <div>
                    <span style={{ ...textStyles, width: "auto" }}>{title}</span>
                </div>
                <div style={{ textAlign: "center" }}>
                    <img
                        style={{
                            width: 210,
                        }}
                        alt={title}
                        src={imgUrl}
                    />
                </div>
            </div>
        </div>
    );
};
