/* eslint-disable no-unused-vars */
import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from "react-router-dom";
import { HomeOutline, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, HomeOutlined } from "@ant-design/icons";
import icon from '../images/cryptocurrency.png';

export const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size={'large'} />
                <Typography.Title level={2} className="logo">
                    <Link to="/">CryptoVerse</Link>
                </Typography.Title>
                {/* <Button className="menu-control-container">
                    <MenuOutlined />
                </Button> */}
            </div>
            <Menu theme="dark" mode="inline">
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />}>
                    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined />}>
                    <Link to="/exchanges">Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined />}>
                    <Link to="/news">News</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}
