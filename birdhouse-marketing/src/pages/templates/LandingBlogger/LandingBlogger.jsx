
import React, { useEffect, useState } from 'react';
import {Row, Col, Typography, Button, Card, Table, Steps, Input} from 'antd';
import {BHLandingCard} from "../../../modules/BHLandingCard.jsx";
import {BHCarousel} from "../../../modules/BHCarousel.jsx";
import {
    FacebookFilled,
    InstagramFilled,
    TwitterSquareFilled
} from "@ant-design/icons";
import influencer from "../../../assets/img/images/influencer2.png"
import influencerWithALaptop from "../../../assets/img/images/influencer.png"
import othersImage from "../../../assets/img/images/target.png"
import musicImage from "../../../assets/img/images/circlePause.png"
import lifestyleImage from "../../../assets/img/images/sun.png"
import fashionImage from "../../../assets/img/images/skirt.png"
import cryptoImage from "../../../assets/img/images/bitcoin.png"
import beautyImage from "../../../assets/img/images/makeupBag.png"

const { Title, Text } = Typography;
const { Meta } = Card;
const { Column } = Table;

const LandingBloggers = () => {

    const data = [
        {
            key: '1',
            campaignName: 'John Brown',
            category: 'Crypto',
            ordersWithinPlatform: 0,
            bloggersEnrolled: 0,
            pricePerPost: 100,
        },
    ];

    return (

        <>
            <div
                style={{
                    alignSelf: "center",
                    minWidth: 320,
                    maxWidth: 1200,
                    width: "calc(100% - 0px)",
                    marginBottom: 70,
                }}
            >
                <Row
                    style={{
                        margin: "170px 0px 120px",
                    }}
                >
                    <Col
                        span={15}
                        style={{
                            alignSelf: "center",
                            minWidth: 300,
                        }}
                    >
                        <Title style={{
                            marginBottom: 25,
                            fontSize: 84,
                            fontWeight: 600,
                            fontFamily: 'Poppins',
                        }}>
                            Fire your agent{' '}
                            <font color="#999999">
                                <font size={6}> and find the best sponsors on our platform </font>
                            </font>
                        </Title>
                        <Text
                            style={{
                                marginBottom: 38,
                                fontSize: 18,
                                fontWeight: 500,
                                color: "rgb(123, 123, 123)",
                                lineHeight: "1.4",
                            }}
                        >
                            Explore available sponsors for you
                        </Text>
                        <div>
                            <Button
                                type="primary"
                                size="large"
                                style={{
                                    marginTop: 38,
                                    width: "100%",
                                    maxWidth: 138,
                                    background: "linear-gradient(120deg, rgb(45, 45, 255) 0%, rgb(0, 212, 255) 100%)"
                                }}
                            >
                                Explore
                            </Button>
                        </div>
                    </Col>
                    <Col
                        span={9}
                        style={{
                            minWidth: 300,
                        }}
                    >
                        <img
                            alt="influencer"
                            src={influencer}
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    </Col>
                </Row>
                <div
                    style={{
                        alignSelf: "center",
                        width: "auto",
                        margin: "0px 10px 50px",
                        fontFamily: "Poppins",
                        fontSize: 36,
                        fontWeight: 600,
                        textAlign: "center"
                    }}
                >
                    After registration you will be accessed to:
                </div>
                <Row
                    justify="space-around"
                    align="center"
                    style={{
                        marginBottom: 105
                    }}
                >
                    <BHLandingCard
                        svgIcon={
                            <svg
                                width={36}
                                height={36}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M14.8108 13.2973C14.8108 13.1253 14.8792 12.9603 15.0008 12.8386C15.1224 12.717 15.2874 12.6486 15.4595 12.6486H17.1892C17.3612 12.6486 17.5262 12.717 17.6479 12.8386C17.7695 12.9603 17.8378 13.1253 17.8378 13.2973C17.8378 13.4693 17.7695 13.6343 17.6479 13.756C17.5262 13.8776 17.3612 13.9459 17.1892 13.9459H15.4595C15.2874 13.9459 15.1224 13.8776 15.0008 13.756C14.8792 13.6343 14.8108 13.4693 14.8108 13.2973ZM4 5.72973H4.01211C4.06529 5.25404 4.29193 4.81465 4.64869 4.49554C5.00544 4.17644 5.4673 4.00001 5.94595 4H15.8919C16.1474 4 16.4005 4.05033 16.6366 4.14813C16.8727 4.24592 17.0872 4.38926 17.2679 4.56995C17.4486 4.75065 17.5919 4.96517 17.6897 5.20126C17.7875 5.43736 17.8378 5.6904 17.8378 5.94595V6.66984C18.4535 6.81601 19.0018 7.16557 19.3942 7.66198C19.7865 8.1584 20 8.77265 20 9.40541V16.7568C20 17.5022 19.7039 18.2172 19.1767 18.7443C18.6496 19.2714 17.9347 19.5676 17.1892 19.5676H6.81081C6.06534 19.5676 5.3504 19.2714 4.82327 18.7443C4.29614 18.2172 4 17.5022 4 16.7568V5.72973ZM17.1892 7.89189H5.2973V16.7568C5.2973 17.5922 5.97535 18.2703 6.81081 18.2703H17.1892C17.5906 18.2703 17.9756 18.1108 18.2594 17.827C18.5432 17.5431 18.7027 17.1582 18.7027 16.7568V9.40541C18.7027 9.004 18.5432 8.61903 18.2594 8.33519C17.9756 8.05135 17.5906 7.89189 17.1892 7.89189V7.89189ZM16.5405 6.59459V5.94595C16.5405 5.77391 16.4722 5.60893 16.3506 5.48728C16.2289 5.36564 16.0639 5.2973 15.8919 5.2973H5.94595C5.77391 5.2973 5.60893 5.36564 5.48728 5.48728C5.36564 5.60893 5.2973 5.77391 5.2973 5.94595C5.2973 6.11798 5.36564 6.28296 5.48728 6.40461C5.60893 6.52626 5.77391 6.59459 5.94595 6.59459H16.5405Z"
                                    fill="white"
                                />
                            </svg>
                        }
                        title="Secure crypto wallet"
                        description="You can use your own wallet or we will create you our secure wallet"
                    />
                    <BHLandingCard
                        svgIcon={
                            <svg
                                width={36}
                                height={36}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.5 8C6.36739 8 6.24021 7.94732 6.14645 7.85355C6.05268 7.75979 6 7.63261 6 7.5C6 7.36739 6.05268 7.24021 6.14645 7.14645C6.24021 7.05268 6.36739 7 6.5 7H17.5C17.6326 7 17.7598 7.05268 17.8536 7.14645C17.9473 7.24021 18 7.36739 18 7.5C18 7.63261 17.9473 7.75979 17.8536 7.85355C17.7598 7.94732 17.6326 8 17.5 8H6.5ZM8.5 6C8.36739 6 8.24021 5.94732 8.14645 5.85355C8.05268 5.75979 8 5.63261 8 5.5C8 5.36739 8.05268 5.24021 8.14645 5.14645C8.24021 5.05268 8.36739 5 8.5 5H15.5C15.6326 5 15.7598 5.05268 15.8536 5.14645C15.9473 5.24021 16 5.36739 16 5.5C16 5.63261 15.9473 5.75979 15.8536 5.85355C15.7598 5.94732 15.6326 6 15.5 6H8.5ZM4 17.5C4 17.8978 4.15804 18.2794 4.43934 18.5607C4.72064 18.842 5.10218 19 5.5 19H18.5C18.8978 19 19.2794 18.842 19.5607 18.5607C19.842 18.2794 20 17.8978 20 17.5V10.5C20 10.1022 19.842 9.72064 19.5607 9.43934C19.2794 9.15804 18.8978 9 18.5 9H5.5C5.10218 9 4.72064 9.15804 4.43934 9.43934C4.15804 9.72064 4 10.1022 4 10.5V17.5ZM5.5 18C5.36739 18 5.24021 17.9473 5.14645 17.8536C5.05268 17.7598 5 17.6326 5 17.5V10.5C5 10.3674 5.05268 10.2402 5.14645 10.1464C5.24021 10.0527 5.36739 10 5.5 10H18.5C18.6326 10 18.7598 10.0527 18.8536 10.1464C18.9473 10.2402 19 10.3674 19 10.5V17.5C19 17.6326 18.9473 17.7598 18.8536 17.8536C18.7598 17.9473 18.6326 18 18.5 18H5.5Z"
                                    fill="white"
                                />
                            </svg>
                        }
                        title="40 of advertisers already registered"
                        description="You will have access to all our partners to sponsor your content"
                    />
                    <BHLandingCard
                        svgIcon={
                            <svg
                                width={36}
                                height={36}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18.7198 18.24H5.27984C4.46384 18.24 3.83984 17.616 3.83984 16.8V7.20001C3.83984 6.38401 4.46384 5.76001 5.27984 5.76001H18.7198C19.5358 5.76001 20.1598 6.38401 20.1598 7.20001V16.8C20.1598 17.616 19.5358 18.24 18.7198 18.24ZM5.27984 6.72001C4.99184 6.72001 4.79984 6.91201 4.79984 7.20001V16.8C4.79984 17.088 4.99184 17.28 5.27984 17.28H18.7198C19.0078 17.28 19.1998 17.088 19.1998 16.8V7.20001C19.1998 6.91201 19.0078 6.72001 18.7198 6.72001H5.27984Z"
                                    fill="white"
                                />
                                <path
                                    d="M14.3998 11.52C13.3438 11.52 12.4798 10.656 12.4798 9.60001C12.4798 8.54401 13.3438 7.68001 14.3998 7.68001C15.4558 7.68001 16.3198 8.54401 16.3198 9.60001C16.3198 10.656 15.4558 11.52 14.3998 11.52ZM14.3998 8.64001C13.8718 8.64001 13.4398 9.07201 13.4398 9.60001C13.4398 10.128 13.8718 10.56 14.3998 10.56C14.9278 10.56 15.3598 10.128 15.3598 9.60001C15.3598 9.07201 14.9278 8.64001 14.3998 8.64001ZM16.1608 17.28L9.11984 10.752L4.79984 14.7431V13.5L9.11984 9.40801L17.4276 17.28H16.1608Z"
                                    fill="white"
                                />
                                <path
                                    d="M19.1998 15.5L16.7998 13.584L15.0214 15L14.3264 14.3414L16.7998 12.336L19.1998 14.3343V15.5Z"
                                    fill="white"
                                />
                            </svg>
                        }
                        title="High payment"
                        description="We are ensuring that our bloggers get fair payment according to market"
                    />
                    <BHLandingCard
                        svgIcon={
                            <svg
                                width={36}
                                height={36}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18.7198 18.24H5.27984C4.46384 18.24 3.83984 17.616 3.83984 16.8V7.20001C3.83984 6.38401 4.46384 5.76001 5.27984 5.76001H18.7198C19.5358 5.76001 20.1598 6.38401 20.1598 7.20001V16.8C20.1598 17.616 19.5358 18.24 18.7198 18.24ZM5.27984 6.72001C4.99184 6.72001 4.79984 6.91201 4.79984 7.20001V16.8C4.79984 17.088 4.99184 17.28 5.27984 17.28H18.7198C19.0078 17.28 19.1998 17.088 19.1998 16.8V7.20001C19.1998 6.91201 19.0078 6.72001 18.7198 6.72001H5.27984Z"
                                    fill="white"
                                />
                                <path
                                    d="M14.3998 11.52C13.3438 11.52 12.4798 10.656 12.4798 9.60001C12.4798 8.54401 13.3438 7.68001 14.3998 7.68001C15.4558 7.68001 16.3198 8.54401 16.3198 9.60001C16.3198 10.656 15.4558 11.52 14.3998 11.52ZM14.3998 8.64001C13.8718 8.64001 13.4398 9.07201 13.4398 9.60001C13.4398 10.128 13.8718 10.56 14.3998 10.56C14.9278 10.56 15.3598 10.128 15.3598 9.60001C15.3598 9.07201 14.9278 8.64001 14.3998 8.64001ZM16.1608 17.28L9.11984 10.752L4.79984 14.7431V13.5L9.11984 9.40801L17.4276 17.28H16.1608Z"
                                    fill="white"
                                />
                                <path
                                    d="M19.1998 15.5L16.7998 13.584L15.0214 15L14.3264 14.3414L16.7998 12.336L19.1998 14.3343V15.5Z"
                                    fill="white"
                                />
                            </svg>
                        }
                        title="Use NFT, to optimise your experience"
                        description="We use smart-contrats to offer a wide range of contracts for blogger, whi can be signed with ease"
                    />
                </Row>
                <Col
                    align="center"
                    style={{
                        marginBottom: 100
                    }}
                >
                    <Title>Top campaigns <span style={{
                        backgroundClip: "text",
                        backgroundImage: "linear-gradient(45deg, #244fff, #07b9ff)",
                        WebkitBackgroundClip: "text",
                        color: "transparent"
                    }}>over last 7 days</span></Title>

                    <Table dataSource={data}>
                        <Column title="Campaign name" dataIndex="campaignName" key="campaignName" width={200} />
                        <Column title="Category" dataIndex="category" key="category" width={100} />
                        <Column title="Orders within platform" dataIndex="ordersWithinPlatform" key="ordersWithinPlatform" width={150} />
                        <Column title="Bloggers enroled" dataIndex="bloggersEnroled" key="bloggersEnrolled" width={100} />
                        <Column title="Price per post" dataIndex="pricePerPost" key="pricePerPost" width={150} />
                    </Table>
                </Col>
                <Row style={{
                    marginBottom: 100
                }}>
                    <Col span={15}>
                        <Title>How does it work?</Title>
                        <Steps
                            style={{
                                marginLeft: 20,
                                marginTop: 50,
                                width: 1000
                            }}
                            direction="vertical"
                            current={0}
                            items={[
                                {
                                    title: <div style={{
                                        width: 400,
                                        textAlign: "center",
                                        fontWeight:"bold",
                                        fontSize: 25
                                    }}>
                                        Register on platform
                                    </div>,

                                    description: <div style={{
                                        width: 400,
                                        textAlign: "center",
                                        margin: 10,
                                        color: "rgb(123, 123, 123)",
                                        fontSize: 15,
                                    }}>
                                        Register and link your social media account, this wont take more than
                                        couple of minutes. Then we will verify your profile. This will take up to 24 hours
                                    </div>
                                },
                                {
                                    title: <div style={{
                                        width: 400,
                                        textAlign: "center",
                                        fontWeight:"bold",
                                        fontSize: 25
                                    }}>
                                        Select sponsor
                                    </div>,
                                    description: <div style={{
                                        width: 400,
                                        textAlign: "center",
                                        margin: 10,
                                        color: "rgb(123, 123, 123)",
                                        fontSize: 15,
                                    }}>
                                        Choose the most interesting offers for you and your subscribers
                                    </div>
                                },
                                {
                                    title: <div style={{
                                        width: 400,
                                        textAlign: "center",
                                        fontWeight:"bold",
                                        fontSize: 25
                                    }}>
                                        Post an add
                                    </div>,
                                    description: <div style={{
                                        width: 400,
                                        textAlign: "center",
                                        margin: 10,
                                        color: "rgb(123, 123, 123)",
                                        fontSize: 15,
                                    }}>
                                        Get in touch with business, make or request an ad and publish it on your social media account
                                    </div>
                                },
                                {
                                    title: <div style={{
                                        width: 400,
                                        textAlign: "center",
                                        fontWeight:"bold",
                                        fontSize: 25
                                    }}>
                                        Receive payment
                                    </div>,
                                    description: <div style={{
                                        width: 400,
                                        textAlign: "center",
                                        margin: 10,
                                        color: "rgb(123, 123, 123)",
                                        fontSize: 15,
                                    }}>
                                        Receive payment on your crypto wallet. Then, you can withdraw your balance
                                    </div>
                                }
                            ]}
                        />
                        <Button
                            type="primary"
                            size="large"
                            style={{
                                marginLeft: 30,
                                marginTop: 20,
                                width: "100%",
                                maxWidth: 235,
                                height: "max-content",
                                background: "linear-gradient(120deg, rgb(45, 45, 255), rgb(0, 212, 255))",
                                fontSize: 24,
                                fontWeight: "bold",
                                textAlign: "center"
                            }}
                        >
                            Register
                        </Button>
                    </Col>
                    <Col span={9}>
                        <img
                            alt="Influencer with a laptop"
                            src={influencerWithALaptop}
                            style={{
                                width: 300,
                                height: 600,
                            }}
                        />
                    </Col>
                </Row>
                <div
                    style={{
                        fontFamily: "Poppins",
                        fontSize: 36,
                        fontWeight: 600,
                        textAlign: "left",
                        alignSelf: "center",
                        margin: "0px 10px 50px"
                    }}
                >
                    Explore advertisers by category
                </div>
                <Row
                    style={{
                        marginBottom: 100,
                        justifyContent: "start",
                    }}
                >
                    <BHCarousel title="Others" imgUrl={othersImage}/>
                    <BHCarousel title="Music" imgUrl={musicImage}/>
                    <BHCarousel title="Lifestyle" imgUrl={lifestyleImage}/>
                    <BHCarousel title="Fashion" imgUrl={fashionImage}/>
                    <BHCarousel title="Crypto" imgUrl={cryptoImage}/>
                    <BHCarousel title="Beauty" imgUrl={beautyImage}/>
                </Row>
                <Row style={{
                    marginBottom: 100,
                    justifyContent: "start",
                }}>
                    <Col span={12}>
                        <div style={{ width: 380, }}>
                            <Title style={{ fontFamily: "Poppins" }}>
                                Stay in the loop
                            </Title>
                            <Text style={{
                                fontFamily: "Poppins",
                                color: "rgb(123, 123, 123)",
                            }}>
                                Join our mailing list to stay in the loop with our newest feature releases, interesting ads,
                                and tips and tricks for navigating.
                            </Text>

                            <Input size="large" placeholder="Your email address" style={{
                                marginTop: 20,
                            }} suffix={
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15.6893 10.75L12.9697 8.03033C12.6768 7.73744 12.6768 7.26256 12.9697 6.96967C13.2626 6.67678 13.7374 6.67678 14.0303 6.96967L18.0303 10.9697C18.3232 11.2626 18.3232 11.7374 18.0303 12.0303L14.0303 16.0303C13.7374 16.3232 13.2626 16.3232 12.9697 16.0303C12.6768 15.7374 12.6768 15.2626 12.9697 14.9697L15.6893 12.25L6 12.25C5.58579 12.25 5.25 11.9142 5.25 11.5C5.25 11.0858 5.58579 10.75 6 10.75L15.6893 10.75Z"
                                        fill="black"
                                    />
                                </svg>
                            }/>
                            <Row>
                                <div style={{
                                    borderRadius: "10px",
                                    background: "-webkit-linear-gradient(left, rgba(45, 45, 255, 0.85) 0%, rgba(0, 212, 255, 0.85) 100%)",
                                    padding: "10px",
                                    marginRight: 10,
                                    marginTop: 50,
                                    marginBottom: 10,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}>
                                    <FacebookFilled style={{ fontSize: "24px", color: "white" }} />
                                </div>

                                <div style={{
                                    borderRadius: "10px",
                                    background: "-webkit-linear-gradient(left, rgba(45, 45, 255, 0.85) 0%, rgba(0, 212, 255, 0.85) 100%)",
                                    padding: "10px",
                                    margin: 10,
                                    marginTop: 50,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}>
                                    <InstagramFilled style={{ fontSize: "24px", color: "white" }} />
                                </div>

                                <div style={{
                                    borderRadius: "10px",
                                    background: "-webkit-linear-gradient(left, rgba(45, 45, 255, 0.85) 0%, rgba(0, 212, 255, 0.85) 100%)",
                                    padding: "10px",
                                    margin: 10,
                                    marginTop: 50,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}>
                                    <TwitterSquareFilled style={{ fontSize: "24px", color: "white" }} />
                                </div>
                            </Row>
                        </div>
                    </Col>
                    <Col span={12}>
                        <iframe src="//www.youtube.com/embed/1e9FwSrrs4w?rel=0&enablejsapi=1"
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    display: "block",
                                    width: "100%",
                                    height: "100%"
                                }}
                        />
                    </Col>
                </Row>
            </div>
        </>

    );
};

export default LandingBloggers;