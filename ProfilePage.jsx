import React, { useState } from 'react';
import './ProfilePage.css';
import { IconButton, Button } from '@mui/material'; // Import Material UI components
import CameraAltIcon from '@mui/icons-material/CameraAlt'; // Import Camera Icon
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

const ProfilePage = () => {
  // State to store the uploaded cover and profile images
  const [coverImage, setCoverImage] = useState('https://via.placeholder.com/800x300');
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150');

  // Handle image change for cover photo
  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(URL.createObjectURL(file));
    }
  };

  // Handle image change for profile picture
  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="profile-container">
      <div className="cover-photo">
        {/* Display the selected cover photo */}
        <img src={coverImage} alt="Cover" className="cover-img" />

        {/* Rounded Button with Camera Icon and Text for Cover Picture */}
        <label className="change-cover-btn">
        <Button
        startIcon={<CameraAltOutlinedIcon />}
        component="span"
        className="cover-btn" // Custom class for additional styling
        sx={{
        backgroundColor: "white", // Set the background color to white
        color: "black", // Set text and icon color to black
        borderRadius: "30px", // Set a rounded border
        padding: "8px 16px", // Padding for button size
        '&:hover': {
                    backgroundColor: '#f0f0f0', // Optional hover effect for better UX
        },
          }}
>
  Update Cover
</Button>

          <input type="file" accept="image/*" onChange={handleCoverChange} style={{ display: 'none' }} />
        </label>
      </div>

      <div className="profile-picture">
        {/* Display the selected profile picture */}
        <img src={profileImage} alt="Profile" className="profile-img" />

        {/* Small Camera Icon Button in the corner for Profile Picture */}
        <label className="change-profile-btn">
          
          
        <IconButton 
        component="span" 
        className="profile-icon-btn"
        sx={{
    
        color: 'black',            // Set icon color to black
        padding: '6px',            // Adjust padding for button size
        borderRadius: '50%',       // Make it circular
        backgroundColor: 'white',  // Set background color to white
        '&:hover': {
            backgroundColor: '#f0f0f0', // Optional hover effect
        },
    }}
>
  <CameraAltOutlinedIcon style={{ color: 'black' }} />
</IconButton>


          
          
          <input type="file" accept="image/*" onChange={handleProfileChange} style={{ display: 'none' }} />
        </label>
      </div>
    </div>
  );
};

export default ProfilePage;
