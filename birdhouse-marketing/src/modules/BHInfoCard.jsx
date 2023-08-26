import {Col, Row} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

export const BHInfoCard = (props) => {
    const {userName, adName, category, price, bg} = props;
    return (
        <div
            style={{
                height: 280,
                width: 280,
                borderRadius: 20,
                backgroundSize: "cover",
                backgroundImage: `url(${bg})`,
                alignItems: "flex-end",
                display: "flex",
                marginBottom: 20,
                marginRight: 20,
            }}
        >
            <div style={{
                width: "100%",
                background: "-webkit-linear-gradient(top, rgba(33, 33, 33, 0) 0%, rgb(33, 33, 33) 100%)",
                borderRadius: 20,
            }}>
                <Row style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginLeft: 12,
                    marginRight: 12,
                    marginBottom: 10,
                    marginTop: 18,
                    fontWeight: "bold"
                }}>
                    <Col>
                        <Link to="/account_preview" style={{
                            fontSize: 12,
                            color: "#d5cdcd",
                        }}>
                            <UserOutlined />{userName}
                        </Link>
                        <div style={{
                            fontSize: 14,
                            color: "#fdfefc",
                        }}>
                            {adName}
                        </div>
                    </Col>
                    <Col>
                        <div style={{
                            fontSize: 12,
                            color: "#d5cdcd",
                        }}>
                            {category}
                        </div>
                    </Col>
                    <Col>
                        <div style={{
                            fontSize: 12,
                            color: "#d5cdcd",
                        }}>
                            Price
                        </div>
                        <div style={{
                            fontSize: 14,
                            color: "#fdfefc",
                        }}>
                            {price}
                        </div>
                    </Col>
                </Row>
            </div>
            <Row>

            </Row>
        </div>
    )
}