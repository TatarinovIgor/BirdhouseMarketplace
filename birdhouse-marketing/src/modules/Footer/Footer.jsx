import React from "react";
import "./style.css"
import {Col, Row, Typography} from "antd";

const { Title, Text } = Typography;
export const Footer = () => {
    return (
        <>
                <Row
                    justify="space-between"
                    align="center"
                    style={{
                        alignSelf: "center",
                        minWidth: 320,
                        maxWidth: 1200,
                        width: "calc(100% - 20px)",
                        marginBottom: 70,
                }}>
                        <Col span={6}>
                                <div>
                                        <Text style={{ fontSize: 14, color: 'rgb(123, 123, 123)' }}>MarketingBirdHouse</Text>
                                </div>
                                <Row style={{ marginTop: 10 }}>
                                        <div>
                                                <img src="https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647387110450x225588365466711900/Group%20252.svg" alt="Icon" style={{ width: 35, height: 35 }} />
                                        </div>
                                        <div>
                                                <img src="https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647387114934x751236047018641900/Group%20253.svg" alt="Icon" style={{ width: 35, height: 35 }} />
                                        </div>
                                        <div>
                                                <img src="https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647387119622x631156546568235800/Group%20254.svg" alt="Icon" style={{ width: 35, height: 35 }} />
                                        </div>
                                        <div>
                                                <img src="https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647453372274x846150973190001900/Group%20255%20%281%29.svg" alt="Icon" style={{ width: 35, height: 35 }} />
                                        </div>
                                </Row>
                        </Col>
                        <Col span={6}>
                                <Title style={{
                                        letterSpacing: "0.3px",
                                        fontSize: 18,
                                        fontWeight: 600,
                                }}>Navigation</Title>
                                <div style={{ marginBottom: 30, letterSpacing: "0.5px", }}>
                                        <div style={{ marginBottom: 18, cursor: 'pointer' }}>About Us</div>
                                        <div style={{ marginBottom: 18, cursor: 'pointer' }} onClick={() => window.location.href='contact_us'}>Contact Us</div>
                                        <div style={{ marginBottom: 18, cursor: 'pointer' }}>Terms & Conditions</div>
                                        <div style={{ cursor: 'pointer' }}>Privacy Policy</div>
                                </div>
                        </Col>
                        <Col span={6}>
                                <div>
                                        <Title level={5}>Contact Us</Title>
                                </div>
                                <div>
                                        <Text>+1 23 456 789 123</Text>
                                </div>
                                <div>
                                        <Text>itatarinov@gmail.com</Text>
                                </div>
                        </Col>
                        <Col span={6}>
                                <div>
                                        <Title level={5}>Soon available</Title>
                                        <Text>Vulputate hac felis morbi egestas.</Text>
                                        <Row style={{marginTop: 23}}>
                                                <Col span={12}>
                                                        <img src="https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647386772268x850938693558971400/Frame%20670.svg" alt="App store" style={{ width: 132 , height: 45 }} />
                                                </Col>
                                                <Col span={12}>
                                                        <img src="https://38a0942e450bdb16ca9cf24659307840.cdn.bubble.io/f1647386777421x635310095370716000/Frame%20669.svg" alt="Google play" style={{ width: 146, height: 44 }} />
                                                </Col>
                                        </Row>
                                </div>
                        </Col>
                </Row>
        </>
    );
};

export default Footer;