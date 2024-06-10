import React, { useState, useEffect } from 'react';
import { Typography, Row, Col, Card, Input, Select } from 'antd';
import moment from 'moment';
import { fetchCryptoNews } from '../services/cryptoNewsApi';
import Avvvatars from 'avvvatars-react'

const { Text, Title } = Typography;
const { Search } = Input;
const { Option } = Select;

export const News = ({ simplified }) => {
  const [cryptoNews, setCryptoNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('Cryptocurrency');
  const [sortBy, setSortBy] = useState('publishedAt');
  const count = simplified ? 10 : 100;

  useEffect(() => {
    const getCryptoNews = async () => {
      try {
        const newsData = await fetchCryptoNews(category, count, searchQuery, sortBy);
        setCryptoNews(newsData.articles);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    getCryptoNews();
  }, [count, category, searchQuery, sortBy]);

  const handleSearch = (value) => {
    setSearchQuery(value);
  };
  const handleSortChange = (value) => {
    setSortBy(value);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <Search
          placeholder="Search for crypto news"
          enterButton="Search"
          size="large"
          onSearch={handleSearch}
        />
        <Select
          defaultValue="Cryptocurrency"
          style={{ width: 200, margin: 10, }}
          onChange={(value) => setCategory(value)}
        >
          <Option value="Cryptocurrency">Cryptocurrency</Option>
          <Option value="Blockchain">Blockchain</Option>
        </Select>
        <Select
          defaultValue="Sort By"
          style={{ width: 200, margin: 10 }}
          onChange={handleSortChange}
        >
          <Option value="publishedAt">Latest</Option>
          <Option value="-publishedAt">Earliest</Option>
        </Select>
      </div>
      <Row gutter={[24, 24]} className='crypto-card-container'>
        {cryptoNews.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i} className="crypto-card">
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>{news.title}</Title>
                  <img src={news.urlToImage} alt="news" className="img" />
                </div>
                <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
                <div className="provider-container">
                  <div>
                    <Avvvatars value={news.source.name} displayValue={news.source.name.slice(0, 2).toUpperCase()} />
                    <Text className="provider-name">{news.source.name}</Text>
                  </div>
                  <Text>{moment(news.publishedAt).startOf('ss').fromNow()}</Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};