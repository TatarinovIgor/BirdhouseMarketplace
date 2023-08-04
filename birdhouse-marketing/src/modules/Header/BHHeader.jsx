import React from "react";
import "./style.css"

import {Layout, Input, Menu} from 'antd';

const { Search } = Input;
const { Header} = Layout;

export const BHHeader = () => {


    return (
        <>
            <Header
                style={{
                    backgroundColor: 'white',
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 25px 0px',
                }}
            >
                <div
                    style={{
                        fontSize: 40,
                        fontWeight: 800,
                    }}
                >
                    <font color="#00ffff">B</font>
                    <font color="#000000">H</font>
                </div>
                <Search size="middle" placeholder="Search ads, usernames, categories" style={{
                    width: '395px',
                    margin: '0px 20px',
                }}/>
                <Menu mode="horizontal" style={{width: '470px'}}>
                    <Menu.Item key="1">Bloggers</Menu.Item>
                    <Menu.Item key="2">Advertisers</Menu.Item>
                    <Menu.Item key="3">Create</Menu.Item>
                    <Menu.Item key="4">About us</Menu.Item>
                    <Menu.Item key="5">Contact us</Menu.Item>
                </Menu>
            </Header>
        </>
    );
};

export default BHHeader;