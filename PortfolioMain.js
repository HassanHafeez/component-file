import React, { useState } from 'react';
import ProfilePage from './ProfileHeadertem';
import './PortfolioMain.css'; 
import PlaceIcon from '@mui/icons-material/Place';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import ShowChartIcon from '@mui/icons-material/ShowChart';


import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import VerifiedIcon from '@mui/icons-material/Verified';


const PortfolioMain = () => {
  const [activeTab, setActiveTab] = useState('All Posts');
  return (
    <>
      <ProfilePage isEdit={false} />
      
      <div className="profile-container">
        <h1 className="profile-name">James John <VerifiedIcon/></h1>
        <p className="profile-location"><PlaceIcon/> Lahore, Pakistan</p>
        <p className="profile-description">
          I'm James Anderson, a passionate photographer who loves capturing moments that tell a story.
          From landscapes to portraits, with a keen eye for detail, my photography spans landscapes,
          portraits, and urban scenes, each image reflecting my unique artistic perspective. 
          I actively use social media to inspire others and connect with a community that appreciates 
          the beauty in everyday life.
        </p>

        <div className="social-links">
          <a href="#facebook" className="social-link"><FacebookIcon/></a>
          <a href="#linkedin" className="social-link"><LinkedInIcon/></a>
          <a href="#instagram" className="social-link"><PinterestIcon/></a>
          <a href="#pinterest" className="social-link"><InstagramIcon/></a>
        </div>

        <div className="stats">
          <div className="stat-item">
            <span className="stat-title">Likes</span>
            <span className="stat-value">120</span>
          </div>
          <div className="stat-item">
            <span className="stat-title">Posts</span>
            <span className="stat-value">25</span>
          </div>
          <div className="stat-item">
            <span className="stat-title">Followers</span>
            <span className="stat-value">59</span>
          </div>
          <div className="stat-item">
            <span className="stat-title">Following</span>
            <span className="stat-value">3</span>
          </div>
        </div>

        <div className="buttons">
            <button className="profile-button"> Edit Profile</button>
            <button className="dashboard-button"> Dashboard</button>
        </div>  


        <div className="layout">
      <div className="button-container">
        <button
          className={activeTab === 'All Posts' ? 'active' : ''}
          onClick={() => setActiveTab('All Posts')}
        >
          All posts
        </button>
        <button
          className={activeTab === 'Recent Uploads' ? 'active' : ''}
          onClick={() => setActiveTab('Recent Uploads')}
        >
          Favorite
        </button>
        
        <button
          className={activeTab === 'Saved' ? 'active' : ''}
          onClick={() => setActiveTab('Saved')}
        >
          Private
        </button>

        <button
          className={activeTab === 'Download' ? 'active' : ''}
          onClick={() => setActiveTab('Download')}
        >
          Download
        </button>

      </div>

      {/* Image section */}
      <div className="image-container">
        {activeTab === 'All Posts' && (
          <div className="image-grid">
            <img src="https://via.placeholder.com/300" alt="Post 1" />
            <img src="https://via.placeholder.com/300" alt="Post 2" />
            <img src="https://via.placeholder.com/300" alt="Post 3" />
          </div>
        )}
        {activeTab === 'Recent Uploads' && (
          <div className="image-grid">
            <img src="https://via.placeholder.com/300" alt="Upload 1" />
            <img src="https://via.placeholder.com/300" alt="Upload 2" />
          </div>
        )}
        {activeTab === 'Saved' && (
          <div className="image-grid">
            <img src="https://via.placeholder.com/300" alt="Saved 1" />
          </div>
        )}
      </div>
    </div>




      </div>
    </>
  );
};

export default PortfolioMain;
