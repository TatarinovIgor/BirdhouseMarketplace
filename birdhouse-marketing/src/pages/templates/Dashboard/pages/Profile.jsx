import ImgCrop from 'antd-img-crop';
import {Button, Col, Form, Input, message, Row, Select, Typography, Upload} from "antd";
import React, {useState} from "react";
import twitterIcon from "../../../../assets/img/icons/twitterIcon.svg";
import instagramIcon from "../../../../assets/img/icons/instagramIcon.svg";
import websiteIcon from "../../../../assets/img/icons/website.svg";
import facebookIcon from "../../../../assets/img/icons/facebookIcon.svg";
import youtubeIcon from "../../../../assets/img/icons/youtubeIcon.svg";
import pinterestIcon from "../../../../assets/img/icons/pinterestIcon.svg";
import imagePlaceholder from "../../../../assets/img/images/imagePlaceholder.svg";
import axios from 'axios';
import {CRM_BASE_URL} from "../../../../constants/endpoins.js";
import {PlusOutlined} from "@ant-design/icons";

const { Option } = Select;
const { TextArea } = Input;
const { Title } = Typography;

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
    const [messageApi, contextHolder] = message.useMessage();
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
    const [imageUrl, setImageUrl] = useState();
    const [email, setEmail] = useState('');
    const [selectedSocialMedia, setSelectedSocialMedia] = useState('twitter');
    const [profilePicture, setProfilePicture] = useState([]);
    const isMobile = window.innerWidth <= 768;

    const handleSubmit = async () => {
        try {
            // Define the URL for the resource you want to update
            const updateUrl = `${CRM_BASE_URL}/users`;

            // Create the updated data object
            const updatedData = {
                first_name: username,
                last_name: bio
            };

            axios
                .put(updateUrl, updatedData)
                .then(response => {
                    // Handle success
                    console.log('Update successful', response.data);
                })
                .catch(error => {
                    // Handle error
                    console.error('Error updating resource', error);
                });

        } catch (error) {
            // Handle error message
            messageApi.error('Failed to update profile');
        }
    };

    const handleProfileChange = ({ fileList: newFileList }) => {

        setProfilePicture(newFileList);
    }

    const uploadButtonProfile = (
        <div>
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );

    return (
        <>
        <Title>
            Profile
        </Title>
        <div>
            {contextHolder}
            <Form
                layout="vertical"
                onFinish={handleSubmit}
            >
                <Row style={
                    isMobile
                        ? {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }
                        : {}
                }
                >
                    <Col span={15}>
                        <Row gutter={20}>
                            <Col span={9} style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <Form.Item
                                    label="Profile"
                                    name="profile"
                                    style={{ fontWeight: 500 }}>
                                    <ImgCrop rotationSlider cropShape="round">
                                        <Upload
                                            listType="picture-circle"
                                            fileList={profilePicture}
                                            onChange={handleProfileChange}
                                        >
                                            {profilePicture.length >= 1 ? null : uploadButtonProfile}
                                        </Upload>
                                    </ImgCrop>
                                </Form.Item>
                            </Col>
                            <Col span={15}>
                                {/* Username */}
                                <Form.Item
                                    label="Username"
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input size="large" placeholder="*Actual username*" />
                                </Form.Item>
                                {/* Email */}
                                <Form.Item
                                    label="Email address"
                                    name="email"
                                >
                                    <Input size="large" value="*Actual Email*" disabled />
                                </Form.Item>
                            </Col>
                        </Row>
                        {/* Bio */}
                        <Form.Item
                            label="Bio"
                            name="bio"
                        >
                            <TextArea size="large" placeholder="Tell the world your story!" />
                        </Form.Item>

                        {/* Social media */}
                        <Form.Item
                            label="Social media product links"
                            name="socialMedia"
                        >
                            <Input size="large" addonBefore={SelectSocialMedia} />
                        </Form.Item>
                        <Form.Item>
                            <Button size="large" htmlType="submit">
                                Update
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
        </>
    );
};
