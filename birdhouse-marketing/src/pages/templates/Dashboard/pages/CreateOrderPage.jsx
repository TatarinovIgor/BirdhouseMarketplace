import {Button, Col, Form, Input, InputNumber, message, Select, Space, Typography, Upload} from "antd";
import imagePlaceholder from "../../../../assets/img/images/imagePlaceholder.svg";
import React, {useContext, useState} from "react";
import {InboxOutlined, PlusOutlined, UploadOutlined} from "@ant-design/icons";
import axios from "axios";
import {CRM_BASE_URL} from "../../../../constants/endpoins.js";

import OfferStoreContext, {OfferStoreG} from "../../../../stores/offers";
import UserStoreContext from "../../../../stores/user";
import {MERCHANT_GUID} from "../../../../constants/merchant";
import {useLoaderData} from "react-router-dom";
import CategoryStoreContext from "../../../../stores/category";

const { Title, Text } = Typography;
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

export const CreateOrderPage = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [imageUrl, setImageUrl] = useState("");
    const [selectedType, setSelectedType] = useState("Choose an option...");
    const [selectedCategory, setSelectedCategory] = useState("Choose an option...");
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(100);
    const [fileList, setFileList] = useState([]);

    const offerStore = useContext(OfferStoreContext);
    const userStore = useContext(UserStoreContext);
    const categoryStore = useContext(CategoryStoreContext);

    const options = Object.entries(categoryStore.Category)
    const handleTypeChange = (value) => {
        setSelectedType(value);
    };

    const handleCategoryChange = (value) => {
        setSelectedCategory(value);
    };

    const handleCreateClick = async (values) => {
        if (!values) {
            return
        }
        console.log(values)
        offerStore.setName(values['offer.title']);
        offerStore.setPrice(values['offer.price']);
        offerStore.setCategory(values['offer.category']);
        offerStore.setDescription(description);
        offerStore.setMetadata('{}');
        offerStore.setGuid(userStore.CurrentEntity.ID)
        const response = await offerStore.uploadData();
        for (const image of fileList) {
            const formData = new FormData();
            formData.append('image', image);
            console.log(image);

            try {
                const imgResponse = await axios
                    .post(`${CRM_BASE_URL}/images/services/${response.data}`, formData, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    });

                console.log(imgResponse.data)
            } catch (error) {
                console.error('Error uploading image', error);
            }
        }


    };

    const handleBeforeUpload = (file) => {
        console.log('File selected:', file);
        return false;
    };

    const handleFileUpload = ({fileList: newFileList}) => setFileList(newFileList);


    const uploadButton = (
        <div>
            <PlusOutlined/>
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
            <title>
                Create Order
            </title>
            <div style={{
                marginLeft: 50,
                maxWidth: 580
            }}>
                {contextHolder}
                <Title>
                    Create Ad
                </Title>
                <Form layout="vertical" onFinish={handleCreateClick}>
                    <Form.Item
                        label={
                            <div style={{
                                fontWeight: 500
                            }}>
                                Insert order preview picture
                            </div>
                        }
                        name="orderPicture"
                        rules={[
                            {
                                required: true,
                                message: 'Please upload the picture!',
                            },
                        ]}
                    >
                        <div style={{fontSize: 13, marginBottom: 15}}>
                            File types supported: JPG, PNG, GIF, SVG. Max size: 50 MB
                            <div>
                                <Upload
                                    beforeUpload={handleBeforeUpload}
                                    listType="picture-card"
                                    fileList={fileList}
                                    onChange={handleFileUpload}
                                >
                                    {fileList.length >= 8 ? null : uploadButton}
                                </Upload>
                            </div>
                        </div>
                    </Form.Item>
                    <Form.Item
                        key={'offer.title'}
                        name={'offer.title'}
                        label="Order Title"
                        style={{
                            fontWeight: 500,
                            marginBottom: 30
                        }}
                        rules={[
                            {
                                required: true,
                                message: 'Please enter the title!',
                            },
                        ]}
                    >
                        <Input
                            size="large"
                            placeholder="Set the title of an advertisement"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item
                        key={'offer.link'}
                        name={'offer.link'}
                        label="Your referral link"
                        style={{
                            fontWeight: 500,
                            marginBottom: 30
                        }}
                    >
                        <div style={{
                            fontSize: 12,
                            fontWeight: "normal",
                            color: "rgb(123, 123, 123)"
                        }}>
                            We will include a link to this URL on this item's detail page, so that users can click to
                            learn more about it. You are welcome to link to your own webpage with more details.
                        </div>
                        <Input
                            size="large"
                            placeholder="Type here"
                            value={link}
                            onChange={e => setLink(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item
                        key={'offer.description'}
                        name={'offer.description'}
                        label="Description"
                        style={{
                            fontWeight: 500,
                            marginBottom: 30
                        }}
                    >
                        <div style={{
                            fontSize: 12,
                            fontWeight: "normal",
                            color: "rgb(123, 123, 123)"
                        }}>
                            The description will be included on the item's detail page underneath its image.
                        </div>
                        <TextArea
                            size="large"
                            placeholder="Detailed description of your item"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </Form.Item>

                    <div style={{
                        fontWeight: 500,
                        marginBottom: 30
                    }}>
                        <Form.Item
                            key={'offer.type'}
                            name={'offer.type'}
                            label="I am looking for..."
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select option!',
                                },
                            ]}
                        >
                            <Select
                                value={selectedType}
                                defaultValue="Select an option..."
                                onChange={handleTypeChange}
                                style={{width: "100%"}}
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
                        <Form.Item
                            key={'offer.key'}
                            name={'offer.category'}
                            label="Categories"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select category!',
                                },
                            ]}
                        >
                            <Select
                                value={selectedCategory}
                                defaultValue="Select an option..."
                                onChange={handleCategoryChange}
                                style={{width: "100%"}}
                                size="large"
                            >
                                {options.map(option => (
                                    <option key={option[0]} value={option[1].guid}>
                                        {option[1].category}
                                    </option>
                                ))}
                            </Select>
                        </Form.Item>
                    </div>

                    <Form.Item
                        style={{
                            fontWeight: 500,
                            marginBottom: 30
                        }}
                        key={'offer.price'}
                        name={'offer.price'}
                        label="Price"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter price!',
                            },
                        ]}
                    >
                        <InputNumber
                            style={{width: "100%"}}
                            size="large"
                            addonBefore={SelectCurrency}
                            value={price}
                            onChange={value => setPrice(value)}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button size="large" htmlType="submit">
                            Create
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}

export default CreateOrderPage;
