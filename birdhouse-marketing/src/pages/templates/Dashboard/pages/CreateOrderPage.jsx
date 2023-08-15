import {Button, Col, Form, Input, InputNumber, message, Select, Typography, Upload} from "antd";
import imagePlaceholder from "../../../../assets/img/images/imagePlaceholder.svg";
import React, {useState} from "react";
import {InboxOutlined} from "@ant-design/icons";
import axios from "axios";

const { Title, Text } = Typography;
const { Dragger } = Upload;
const { TextArea } = Input;

const SelectCurrency = (
    <Select
        defaultValue="USD"
        style={{
            width: 60,
        }}
    >
        <Option value="USD">$</Option>
        <Option value="EUR">€</Option>
        <Option value="GBP">£</Option>
        <Option value="CNY">¥</Option>
    </Select>
);

const ImageUpload = () => {
    const [imageUrl, setImageUrl] = useState("");

    const handleUpload = (info) => {
        if (info.file.status === "done") {
            // File has been uploaded successfully
            const reader = new FileReader();
            reader.onload = (e) => {
                setImageUrl(e.target.result);
            };
            reader.readAsDataURL(info.file.originFileObj);
        } else if (info.file.status === "error") {
            message.error("File upload failed.");
        }
    };

    return (
        <div>
            <Dragger
                name="file"
                showUploadList={false}
                onChange={handleUpload}
            >
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Drag & Drop an image here</p>
                <p className="ant-upload-hint">Supports single image upload.</p>
            </Dragger>
            {imageUrl && (
                <div
                    className="image-preview"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                />
            )}
        </div>
    );
};

export const CreateOrderPage = () => {
    const [selectedType, setSelectedType] = useState("Choose an option...");
    const [selectedCategory, setSelectedCategory] = useState("Choose an option...");
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(100);


    const handleTypeChange = (value) => {
        setSelectedType(value);
    };

    const handleCategoryChange = (value) => {
        setSelectedCategory(value);
    };

    const handleSubmit = (event) => {
        axios.post('https://httpbin.org/post', {
            "created_at": "",
            "updated_at": "",
            "guid": "",
            "name": event.target.value,
            "description": "string",
            "merchant": {
                "guid": "string",
                "name": "string"
            },
            "meta_data": "string"
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div style={{
            marginLeft: 50,
            width: 580
        }}>
            <Title>
                Create Ad
            </Title>
            <Form>
                <div style={{
                    fontWeight: 500
                }}>
                    Insert order preview picture <span style={{color: "red"}}>*</span>
                </div>
                <Form.Item style={{ fontSize: 13, marginBottom: 15 }}>
                    File types supported: JPG, PNG, GIF, SVG. Max size: 50 MB
                    <ImageUpload />
                </Form.Item>
                <Form.Item style={{
                    fontWeight: 500,
                    marginBottom: 30
                }}>
                    Order Title <span style={{color: "red"}}>*</span>
                    <Input size="large" placeholder="Set the name of an advertisement" />
                </Form.Item>

                <Form.Item style={{
                    fontWeight: 500,
                    marginBottom: 30
                }}>
                    Your referral link
                    <div style={{
                        fontSize: 12,
                        fontWeight: "normal",
                        color: "rgb(123, 123, 123)"
                    }}>
                        We will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.
                    </div>
                    <Input size="large" placeholder="Type here" />
                </Form.Item>
                <Form.Item style={{
                    fontWeight: 500,
                    marginBottom: 30
                }}>
                    Description
                    <div style={{
                        fontSize: 12,
                        fontWeight: "normal",
                        color: "rgb(123, 123, 123)"
                    }}>
                        The description will be included on the item's detail page underneath its image.
                    </div>
                    <TextArea size="large" placeholder="Detailed description of your item" />
                </Form.Item>

                <div style={{
                    fontWeight: 500,
                    marginBottom: 30
                }}>
                    I am looking for <span style={{color: "red"}}>*</span>
                    <Form.Item>
                        <Select
                            value={selectedType}
                            defaultValue="Select an option..."
                            onChange={handleTypeChange}
                            style={{ width: "100%" }}
                            size="large"
                        >
                            <Option value="blogger">Blogger</Option>
                            <Option value="advertiser">Advertiser</Option>
                        </Select>
                    </Form.Item>
                </div>

                <div style={{
                    fontWeight: 500,
                    marginBottom: 30
                }}>
                    Categories <span style={{color: "red"}}>*</span>
                    <Form.Item>
                        <Select
                            value={selectedCategory}
                            defaultValue="Select an option..."
                            onChange={handleCategoryChange}
                            style={{ width: "100%" }}
                            size="large"
                        >
                            <Option value="Fashion">Fashion</Option>
                            <Option value="Lifestyle">Lifestyle</Option>
                            <Option value="Beauty">Beauty</Option>
                            <Option value="Music">Music</Option>
                            <Option value="Crypto">Crypto</Option>
                            <Option value="Other">Other</Option>
                        </Select>
                    </Form.Item>
                </div>
                <Form.Item style={{marginBottom: 30}}>
                    Price <span style={{color: "red"}}>*</span>
                    <InputNumber style={{ width: "100%" }} size="large" addonBefore={SelectCurrency} defaultValue={100} />
                </Form.Item>
                <Form.Item>
                    <Button size="large">
                        Create
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
