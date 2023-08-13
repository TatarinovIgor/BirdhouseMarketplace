import {Button, Col, Input, Row, Select, Typography, Upload} from "antd";
import React from "react";
import twitterIcon from "../../../../assets/img/icons/twitterIcon.svg";
import instagramIcon from "../../../../assets/img/icons/instagramIcon.svg";
import websiteIcon from "../../../../assets/img/icons/website.svg";
import facebookIcon from "../../../../assets/img/icons/facebookIcon.svg";
import youtubeIcon from "../../../../assets/img/icons/youtubeIcon.svg";
import pinterestIcon from "../../../../assets/img/icons/pinterestIcon.svg";
import imagePlaceholder from "../../../../assets/img/images/imagePlaceholder.svg";

const { Title } = Typography;
const { TextArea } = Input;
const { Option } = Select;
const { Dragger } = Upload;

const selectOptionStyle = {
    display: "flex",
    alignItems: "center",
};

const iconStyle = {
    marginRight: 8,
    height: "max-content",
    width: "max-content"
};

const SelectSocialMedia = (
    <Select
        defaultValue="twitter"
        style={{
            width: 60,
        }}
        popupMatchSelectWidth={false}
        dropdownStyle={{
            width: 300,
        }}
    >
        <Option value="twitter">
            <div style={selectOptionStyle}>
                <img src={twitterIcon} alt="Twitter icon" style={iconStyle} />
                Twitter
            </div>
        </Option>
        <Option value="instagram" style={selectOptionStyle}>
            <div style={selectOptionStyle}>
                <img src={instagramIcon} alt="Instagram icon" style={iconStyle} />
                Instagram
            </div>
        </Option>
        <Option value="website" style={selectOptionStyle}>
            <div style={selectOptionStyle}>
                <img src={websiteIcon} alt="Website icon" style={iconStyle} />
                Website
            </div>
        </Option>
        <Option value="facebook" style={selectOptionStyle}>
            <div style={selectOptionStyle}>
                <img src={facebookIcon} alt="Facebook icon" style={iconStyle} /> Facebook
            </div>
        </Option>
        <Option value="youtube" style={selectOptionStyle}>
            <div style={selectOptionStyle}>
                <img src={youtubeIcon} alt="Youtube icon" style={iconStyle} /> Youtube
            </div>
        </Option>
        <Option value="pinterest" style={selectOptionStyle}>
            <div style={selectOptionStyle}>
                <img src={pinterestIcon} alt="Pinterest icon" style={iconStyle} /> Pinterest
            </div>
        </Option>
    </Select>
);

export const Profile = () => {
    return (
        <Row gutter={20}>
            <Col span={12}>
                <div style={{ fontWeight: 500, marginBottom: 30 }}>
                    Username<span style={{ color: "red" }}>*</span>
                    <Input size="large" placeholder="*Actual username*" />
                </div>

                <div style={{ fontWeight: 500, marginBottom: 30 }}>
                    Bio
                    <TextArea size="large" placeholder="Tell the world your story!" />
                </div>

                <div style={{ fontWeight: 500, marginBottom: 30 }}>
                    Email address<span style={{ color: "red" }}>*</span>
                    <Input size="large" value="*Actual Email*" disabled />
                </div>

                <div style={{ fontWeight: 500, marginBottom: 30 }}>
                    Social media product links
                    <Input size="large" addonBefore={SelectSocialMedia} />
                </div>
                <Button size="large">
                    Update
                </Button>
            </Col>
            <Col span={12}>
                <div style={{ fontWeight: 500 }}>
                    Profile picture
                </div>
                <Dragger style={{
                    width: 148,
                    backgroundImage: `url("${imagePlaceholder}")`,
                    backgroundSize: "contain",
                    borderRadius: 10,
                    maxHeight: 148
                }}>
                    <div style={{
                        width: 148,
                        height: 148
                    }}></div>
                </Dragger>
                <div style={{ fontWeight: 500 }}>
                    Profile banner
                </div>
                <Dragger style={{
                    width: 478,
                    backgroundImage: `url("${imagePlaceholder}")`,
                    backgroundSize: "contain",
                    borderRadius: 10,
                    maxHeight: 83
                }}>
                    <div style={{
                        width: 478,
                        height: 83
                    }}></div>
                </Dragger>
            </Col>
        </Row>
    );
};
