import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Text, Title } = Typography;
const { Option } = Select;

export const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCatergory: "Cryptocurrency", count: simplified ? 10 : 100 });
  console.log(cryptoNews);
  return (
    <div>News</div>
  )
}
