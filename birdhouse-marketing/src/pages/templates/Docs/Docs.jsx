import React from "react"
import {Layout, List, Row, Tabs, Typography} from "antd";
import {AppstoreOutlined, ThunderboltOutlined} from "@ant-design/icons";
import {BHInfoCard} from "../../../modules/BHInfoCard.jsx";

const { Content } = Layout;
const { Title, Paragraph} = Typography;
const { TabPane } = Tabs;

const Docs = () => {
    const privacyData = [
        'Privacy Information\n\nLorem ipsum...',
        'Lorem ipsum...',
        'Incididunt ut labore\n\nLorem ipsum...',
        // Add more privacy policy points here
    ];

    const termsData = [
        'Terms & Conditions Information\n\nSimilar content...',
        // Add more terms & conditions points here
    ];

    const faqData = [
        'Frequently Asked Questions\n\nSimilar content...',
        // Add more FAQ points here
    ];

    return (
        <>
            <div style={{
                placeSelf: "center",
                minWidth: 0,
                maxWidth: 1200,
                minHeight: 0,
                width: "calc(100% - 20px)",
                justifyContent: "center",
                marginTop: 55,
                marginBottom: 125
            }}>
                <Tabs size="large" tabPosition="left" style={{
                    marginLeft: 50,
                }}>
                    <TabPane tab="Privacy Policy" key="1">
                        <Title level={2}>Privacy Policy and Terms</Title>
                        <div className="section">
                            <Paragraph>
                                <List
                                    dataSource={privacyData}
                                    renderItem={item => (
                                        <List.Item>
                                            <Typography.Text>{item}</Typography.Text>
                                        </List.Item>
                                    )}
                                />
                            </Paragraph>
                        </div>
                    </TabPane>
                    <TabPane tab="Terms & Conditions" key="2">
                        <div className="section">
                            <Title level={3}>Terms & Conditions</Title>
                            <Paragraph>
                                <List
                                    dataSource={termsData}
                                    renderItem={item => (
                                        <List.Item>
                                            <Typography.Text>{item}</Typography.Text>
                                        </List.Item>
                                    )}
                                />
                            </Paragraph>
                        </div>
                    </TabPane>
                    <TabPane tab="FAQ" key="3">
                        <div className="section">
                            <Title level={3}>FAQ</Title>
                            <Paragraph>
                                <List
                                    dataSource={faqData}
                                    renderItem={item => (
                                        <List.Item>
                                            <Typography.Text>{item}</Typography.Text>
                                        </List.Item>
                                    )}
                                />
                            </Paragraph>
                        </div>
                    </TabPane>
                </Tabs>

            </div>
        </>
    )
}

export default Docs;