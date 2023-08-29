import React, { useEffect, useState } from 'react';
import "./style.css"
import {
    Row,
    Typography,
    Col,
    Divider,
    Button,
    Card,
    Space,
    Radio,
    Checkbox,
    Slider,
    InputNumber,
    Select,
    Input
} from "antd";
import {AppstoreOutlined, BarsOutlined, CloseOutlined, SortAscendingOutlined} from "@ant-design/icons";
import {BHInfoCard} from "../../../modules/BHInfoCard.jsx";
import axios from "axios";
import {CRM_BASE_URL} from '../../../constants/endpoins';
import {Link} from "react-router-dom";
import settingsIcon from "../../../assets/img/icons/settings.svg"

const { Title, Text} = Typography;
const { Search } = Input;

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowWidth;
};

const ExploreBloggers = () => {
    const [data, setData] = useState([]);
    const [checkedList, setCheckedList] = useState([]);
    const [selectedSort, setSelectedSort] = useState("LowHigh");
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100);
    const [searchQuery, setSearchQuery] = useState("");
    const [showFilter, setShowFilter ] = useState(false);
    const windowWidth = useWindowWidth(); // Custom hook to get window width

    useEffect(() => {
        // Define the API URL

        const apiUrl = `${CRM_BASE_URL}/products/6f916130-724a-434c-8f87-f6fea8c35b85/services`;

        axios.get(apiUrl)
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleApplyFilters = () => {
        const apiUrl = `${CRM_BASE_URL}/products/6f916130-724a-434c-8f87-f6fea8c35b85/services`;

        const queryParams = [];
        if (checkedList.length > 0) {
            queryParams.push(`categories=${checkedList.join(',')}`);
        }
        if (selectedSort) {
            queryParams.push(`sort=${selectedSort}`);
        }
        if (minPrice !== 0) {
            queryParams.push(`priceMin=${minPrice}`);
        }
        if (maxPrice !== 100) {
            queryParams.push(`priceMax=${maxPrice}`);
        }
        if (searchQuery !== "") {
            queryParams.push(`search=${searchQuery}`)
        }

        if (queryParams.length > 0) {
            const queryString = queryParams.join('&');
            const fullApiUrl = `${apiUrl}?${queryString}`;

            axios.get(fullApiUrl)
                .then(response => setData(response.data))
                .catch(error => console.error('Error fetching data:', error));
        }
    };

    const toggleFilter = () => {
        setShowFilter(!showFilter);
    };

    const sortData = (sortOption) => {
        const sortedData = [...data]; // Create a copy of the data array

        switch (sortOption) {
            case "LowHigh":
                sortedData.sort((a, b) => a.price - b.price);
                break;
            case "HighLow":
                sortedData.sort((a, b) => b.price - a.price);
                break;
            case "Recency":
                sortedData.sort((a, b) => {
                    const dateA = new Date(a.created_at);
                    const dateB = new Date(b.created_at);
                    return dateB - dateA; // Sort in descending order (most recent first)
                });
                break;
            default:
                break;
        }

        setData(sortedData); // Update the state with sorted data
    };
    const handleSortChange = (value) => {
        setSelectedSort(value);
        sortData(value);
    };

    const handleMinPriceChange = (value) => {
        setMinPrice(value);
    };
    const handleMaxPriceChange = (value) => {
        setMaxPrice(value);
    };
    const handleSliderChange = (values) => {
        setMinPrice(values[0]);
        setMaxPrice(values[1]);
    };
    const handleFilterChange = (list) => {
        setCheckedList(list)
    }

    const handleSearch = (value) => {
        setSearchQuery(value);
    }

    useEffect(() => {
        handleApplyFilters();
    }, [searchQuery]);

    const menu = (
        <div>
            <Title level={3}>Category</Title>
            <Checkbox.Group value={checkedList} onChange={handleFilterChange} style={{
                marginBottom: 50,
            }}>
                <Col>
                    <div>
                        <Checkbox value="Beauty">Beauty</Checkbox>
                    </div>
                    <div>
                        <Checkbox value="Crypto">Crypto</Checkbox>
                    </div>
                    <div>
                        <Checkbox value="Fashion">Fashion</Checkbox>
                    </div>
                    <div>
                        <Checkbox value="Lifestyle">Lifestyle</Checkbox>
                    </div>
                    <div>
                        <Checkbox value="Music">Music</Checkbox>
                    </div>
                    <div>
                        <Checkbox value="Other">Other</Checkbox>
                    </div>
                </Col>
            </Checkbox.Group>
            <Title level={3}>Price</Title>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <InputNumber
                    style={{ width: 100 }}
                    value={minPrice}
                    addonAfter="$"
                    onChange={handleMinPriceChange}
                />
                <InputNumber
                    style={{ width: 100 }}
                    value={maxPrice}
                    addonAfter="$"
                    onChange={handleMaxPriceChange}
                />
            </div>
            <Slider range value={[minPrice, maxPrice]} onChange={handleSliderChange}/>
            <Button size="large" onClick={handleApplyFilters}>Apply</Button>
        </div>
    );

    const mobileMenu = (
        <div style={{
            marginRight: 25
        }}>
            <Button type="text" size="large" onClick={toggleFilter}>
                <img src={settingsIcon} alt="Settings icon"/>
            </Button>
            {showFilter && (
                <div style={{
                    zIndex: 1,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "white",
                    paddingLeft: 20,
                    paddingTop: 50,
                    paddingRight: 20
                }}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}>
                        <span style={{
                            fontSize: 30,
                            fontWeight: "500"
                        }}>
                            Filters
                        </span>

                        <Button type="text" size="large" onClick={toggleFilter}>
                            <CloseOutlined/>
                        </Button>
                    </div>
                    <Divider/>
                    {menu}

                </div>
            )}
        </div>
    );

    return (
        <>
            <Col style={{
                alignSelf: "center",
                minWidth: 320,
                maxWidth: 1200,
                minHeight: 150,
                width: "calc(100% - 0px)",
                marginBottom: 100,
                marginTop: 150,
            }}>
                {/* Upper panel */}
                <Row justify="space-between" gutter={20} align="top">
                    <Col xs={{span: 0}} lg={{span: 5}}>
                        <Title level={3}>Explore Bloggers</Title>
                        <Divider/>
                        {menu}
                    </Col>
                    <Col xs={{span: 24}} lg={{span: 19}}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                            {windowWidth <= 992 &&
                                mobileMenu
                            }
                            <span style={{ flex: 1, textAlign: 'left', color: "rgb(123, 123, 123)" }}>Found 0 Ads</span>
                            <Search
                                placeholder="input search text"
                                allowClear
                                onSearch={handleSearch}
                                size="middle"
                                style={{
                                    maxWidth: 300,
                                }}
                            />
                            <Select
                                value={selectedSort}
                                defaultValue="LowHigh"
                                onChange={handleSortChange}
                                style={{ width: 200 }}
                            >
                                <Option value="LowHigh">Price: Low - High</Option>
                                <Option value="HighLow">Price: High - Low</Option>
                                <Option value="Recency">Newest</Option>
                            </Select>
                        </div>
                        <Divider />
                        <Row gutter={20} style={{
                            marginLeft: 50,
                            display: "flex",
                            alignSelf: "center",
                            justifyContent: "center"
                        }}>
                            {data.map(item => {
                                const metaData = JSON.parse(item.meta_data); // Parse the JSON string
                                return (
                                    <Link
                                        to={'/ui/product_page'}
                                        state={{
                                            userName: item.name,
                                            description: item.description,
                                            adName: item.name,
                                            category: item.category,
                                            price: item.price,
                                            bg: item.bg,
                                        }}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <BHInfoCard
                                            key={item.guid}
                                            userName={item.name}
                                            adName={item.description}
                                            category={item.category}
                                            price={item.price}
                                            bg={item.bg}
                                        />
                                    </Link>
                                );
                            })}
                        </Row>
                    </Col>
                </Row>
            </Col>
        </>
    );
};

export default ExploreBloggers;