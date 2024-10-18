import React, { useState } from 'react';
import NewsCard from './NewsCard'; // Assuming NewsCard is in the same directory
import './NewsList.css';

const NewsList = () => {
  const [newsItems, setNewsItems] = useState([
    // Use the updated news data structure with image URLs
    {
      id: 1,
      title: 'India Prepares for Cricket World Cup 2024',
      date: '13/10/2024',
      imageUrl: require('../img/WORLD.jpeg'),
    },
    {
      id: 2,
      title: 'NEP 2020 Implementation to Restructure Indian Higher Education',
      date: '14/10/2024',
      imageUrl: require('../img/NEP.jpg'),
    },
    {
      id: 3,
      title: 'AI-Powered Diagram Tools Revolutionizing Visual Content',
      date: '15/10/2024',
      imageUrl: require('../img/aI.jpg'),
    },
    {
      id: 4,
      title: 'Reliance Q2 FY24 Results Announced',
      date: '16/10/2024',
      imageUrl: require('../img/REL.jpg'),
    },
  ]);

  const handleDelete = (id) => {
    setNewsItems(newsItems.filter((item) => item.id !== id));
  };

  const handleEdit = (editedItem) => {
    setNewsItems(
      newsItems.map((item) => (item.id === editedItem.id ? editedItem : item))
    );
  };

  return (
    <div className="news-list">
      {newsItems.map((item) => (
        <NewsCard key={item.id} newsItem={item} onDelete={handleDelete} onEdit={handleEdit} />
      ))}
    </div>
  );
};

export default NewsList;
