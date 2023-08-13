import {Input, Typography} from "antd";
import React from "react";

const { Title } = Typography;
export const Settings = () => {
    return (
        <div style={{
            marginLeft: 50,
            width: 580
        }}>
            <div style={{
                fontWeight: 500,
                marginBottom: 30
            }}>
                Change password
                <Input size="large" placeholder="Current password" />
                Change password
                <Input size="large" placeholder="Current password" />
            </div>
        </div>
    )
}
