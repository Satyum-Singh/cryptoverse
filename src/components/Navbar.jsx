import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutline, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from "@ant-design/icons";
import icon from '../images/cryptocurrency.png';

export const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size='large' />
                <Typography.Title level={2} className="logo">
                    <Link to="/">Crypto</Link>
                </Typography.Title>
                {/* <Button className="menu-control-container">
                    <MenuOutlined />
                </Button> */}
            </div>
        </div>
    )
}
