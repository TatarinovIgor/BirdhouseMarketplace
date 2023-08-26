import React, { useEffect, useState } from 'react';
import "./style.css"
import {Row, Typography, Col, Divider, Button, Card, Space, Radio, Checkbox, Slider, InputNumber, Select} from "antd";
import {AppstoreOutlined, BarsOutlined, CloseOutlined, SortAscendingOutlined} from "@ant-design/icons";
import {BHInfoCard} from "../../../modules/BHInfoCard.jsx";
import axios from "axios";
import {CRM_BASE_URL} from '../../../constants/endpoins';
import {Link} from "react-router-dom";
import settingsIcon from "../../../assets/img/icons/settings.svg"

const { Title, Text} = Typography;

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
    const [selectedFilter, setSelectedFilter] = useState("LowHigh");
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100);
    const [showFilter, setShowFilter ] = useState(false);
    const windowWidth = useWindowWidth(); // Custom hook to get window width

    useEffect(() => {
        // Define the API URL

        const apiUrl = `${CRM_BASE_URL}/partners/63c53aa5-5165-49c5-8b81-b01b1362a4d5/services`;

        axios.get(apiUrl)
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const toggleFilter = () => {
        setShowFilter(!showFilter);
    };

    const handleFilterChange = (value) => {
        setSelectedFilter(value);
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

    const menu = (
      <div>
          <Title level={3}>Category</Title>
          <Checkbox.Group style={{
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
                    <Col xs={{span: 0}} lg={{span: 6}}>
                        <Title level={3}>Explore Bloggers</Title>
                        <Divider/>
                        {menu}
                    </Col>
                    <Col xs={{span: 24}} lg={{span: 18}}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {windowWidth <= 992 &&
                                mobileMenu
                            }
                            <span style={{ flex: 1, textAlign: 'left', color: "rgb(123, 123, 123)" }}>Found 0 Ads</span>
                            <Select
                                value={selectedFilter}
                                defaultValue="LowHigh"
                                onChange={handleFilterChange}
                                style={{ width: 200 }}
                            >
                                <Option value="LowHigh">Price: Low - High</Option>
                                <Option value="HighLow">Price: High - Low</Option>
                                <Option value="AZ">Name: A - Z</Option>
                                <Option value="ZA">Name: Z - A</Option>
                                {/* Add more Option components for additional filters */}
                            </Select>
                            <Button icon={<AppstoreOutlined />} />
                            <Button icon={<BarsOutlined />} />
                        </div>
                        <Divider />
                        <Row gutter={20} style={{
                            marginLeft: 50
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
                                                category: metaData.category,
                                                price: metaData.price,
                                                bg: item.bg,
                                            }}
                                            style={{ textDecoration: "none" }}
                                        >
                                            <BHInfoCard
                                                key={item.guid}
                                                userName={item.name}
                                                adName={item.description}
                                                category={metaData.category}
                                                price={metaData.price}
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