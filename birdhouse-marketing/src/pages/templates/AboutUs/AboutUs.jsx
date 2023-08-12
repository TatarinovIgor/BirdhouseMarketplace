import React, { useEffect, useState } from 'react';
import "./style.css";
import nftNotMonkey from "../../../assets/img/images/nftButNotMonkey.jpg"
import nft from "../../../assets/img/images/futureNFT.png";
import {Col, Row, Typography} from "antd";

const { Title, Text } = Typography;
const About = () => {

    return (
        <>
            <div style={{
                alignSelf: "center",
                minWidth: 320,
                maxWidth: 1200,
                width: "calc(100% - 0px)",
                marginTop: 150,
                marginBottom: 70,
            }}>
                <Row style={{
                    marginBottom: 170
                }}>
                    <Col span={14}>
                        <Title style={{
                            fontWeight: "bold",
                        }}>
                            Our unique solution
                        </Title>
                        <div style={{
                            fontWeight: 500,
                            marginBottom: 15,
                        }}>
                            What do we do?
                        </div>

                        <Text style={{
                           fontWeight: 500,
                        }}>
                            BirdHouse marketing is a unique influence marketing solution that is based on NFT.
                            Our mission is to make influence marketing easier for businesses and simplify advertisers'
                            search for influencers
                        </Text>
                    </Col>
                    <Col span={10}>
                        <div style={{
                            minWidth: 300,
                            maxWidth: 480,
                            height: "max-content",
                        }}>
                            <img style={{
                                width: "100%",
                                height: "100%",
                            }} src={nft} alt="N F T"/>
                        </div>
                    </Col>
                </Row>
                <Row gutter={20}>
                    <Col span={10}>
                        <img style={{
                            width: "100%",
                            height: "100%"
                        }} src={nftNotMonkey} alt="NFT for advertising agreement"/>
                    </Col>
                    <Col span={14}>
                        <Title style={{
                            fontWeight: "bold",
                        }}>
                            Our method
                        </Title>
                        <div style={{
                            fontWeight: 500,
                            marginBottom: 15,
                        }}>
                            How do we do it?
                        </div>

                        <div style={{
                            fontWeight: 500,
                            lineHeight: 1.5,
                            marginBottom: 15,
                        }}>
                            The system is based on NFT. Influencer issue their own NFT.
                            However, instead of jpeg/png image NFT has advertising agreement.
                            Then influencer can publish his new-made NFT on our marketplace, where it is beign sold like
                            any other NFT.
                        </div>
                        <div style={{
                            fontWeight: 500,
                            lineHeight: 1.5,
                            marginBottom: 15,
                        }}>
                            Then advertisers can buy issued NFT on our marketplace. Advertisers can use it at any
                            moment. As soon as he uses his NFT, it is being transferred to its issuer and the
                            issuer has to post an advertisement, which was discussed in the agreement.
                        </div>
                        <div style={{
                            fontWeight: 500,
                            lineHeight: 1.5,
                            marginBottom: 15,
                        }}>
                            Also, advertisers can hold it, and resell it later. This will allow him to buy ads at a
                            lower price when the influencer has a smaller audience. Later on, an advertiser
                            can sell his NFT to other advertisers. Because an influencer has a larger audience,
                            he can sell his NFT at a higher price.
                        </div>
                    </Col>
                </Row>
            </div>
        </>

    );
};

export default About;