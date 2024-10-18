// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NewsCard from './components/NewsCard';
import IndividualNews from './components/IndividualNews';
import AddNewsModal from './components/AddNewsModal';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css';
import env from './img/WORLD.jpeg';
import gov from './img/NEP.jpg';
import ai from './img/aI.jpg';
import ten from './img/REL.jpg';

function App() {
  const [newsList, setNewsList] = useState([
    { id: '1', title: 'India Prepares for Cricket World Cup 2024',  extraDescription: 'As India prepares for the 2024 Cricket World Cup, the nation is abuzz with excitement and anticipation. Set to be held in India, the tournament promises a thrilling showcase of the worlds best cricketing talent. India, as both the host and a formidable team, is keen on capitalizing on home advantage. The Indian squad, led by top players, is focused on preparation, blending a mix of experienced stars and emerging talents to strengthen their lineup.', date: '13/10/2024', image: env },
    { id: '2', title: 'NEP 2020 Implementation to Restructure Indian Higher Education',  extraDescription: 'The implementation of the National Education Policy (NEP) 2020 is set to bring significant restructuring to Indian higher education, aiming to transform the educational landscape and prepare students for the demands of the 21st century. NEP 2020 emphasizes a more holistic, flexible, and multidisciplinary approach to learning, shifting away from the rigid, siloed structures of the past.', date: '14/10/2024', image: gov },
    { id: '3', title: 'AI-Powered Diagram Tools Revolutionizing Visual Content',  extraDescription: 'AI-powered diagram tools are revolutionizing the creation of visual content by automating complex design tasks, making it easier for users to generate professional, clear, and interactive diagrams. These tools leverage artificial intelligence to simplify processes like diagram generation, layout optimization, and data visualization, allowing both technical and non-technical users to quickly create flowcharts, mind maps, org charts, network diagrams, and more.', date: '15/10/2024', image: ai },
    { id: '4', title: 'Reliance Q2 FY24 Results Announced',  extraDescription: 'Reliance Industries announced its Q2 FY24 results, showing strong financial performance. The company reported a consolidated net profit of ₹19,878 crore, marking a 28% increase year-over-year (YoY). This growth was driven by a rise in EBITDA across various segments, particularly in retail and oil-to-chemicals (O2C). Revenue from operations stood at ₹2.31 lakh crore, a slight increase from the same period last year.', date: '16/10/2024', image: ten }
  ]);

  const [showModal, setShowModal] = useState(false); // State to handle modal visibility

  const addNewsHandler = (newNews) => {
    setNewsList([...newsList, newNews]); // Function to add new news
    setShowModal(false); // Close the modal after adding news
  };

  const editNewsHandler = (id, updatedData) => {
    const updatedNewsList = newsList.map((news) =>
      news.id === id ? { ...news, ...updatedData } : news
    );
    setNewsList(updatedNewsList); // Update the state with the new news list
  };

  const deleteNewsHandler = (id) => {
    const updatedNewsList = newsList.filter((news) => news.id !== id);
    setNewsList(updatedNewsList); // Update the state with the filtered news list
  };

  return (
    <Router>
      <div className="App">
        {/* Navbar with Add Icon */}
        <nav className="navbar">
          <h1>InstantNews</h1>
          <Link to="#" className="add-icon" onClick={() => setShowModal(true)}>
            <i className="fas fa-plus"></i>
          </Link>
        </nav>

        {showModal && <AddNewsModal addNews={addNewsHandler} closeModal={() => setShowModal(false)} />}
        
        <Routes>
          <Route path="/" element={
            <div className="news-list">
              {newsList.map((news) => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          } />
          <Route path="/news/:id" element={<IndividualNews newsList={newsList} editNews={editNewsHandler} deleteNews={deleteNewsHandler} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
