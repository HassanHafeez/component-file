import React from 'react';
import './BannerEditProfile.css'; // Import your CSS 
import StarIcon from '@mui/icons-material/Stars';

const BannerEditProfile = () => {
    return (
        <div className="banner-card">
           
            <h2>To get more benefit and social links<br/> 
            Go with Premium </h2>
            
            <p>Unlock more features and take your profile to the next level with our Premium plan. Enjoy unlimited uploads, advanced image analytics, portfolio customization, and seamless social media integration. Upgrade now to maximize your visibility and showcase your work like a pro!</p>
            
            <button className="premium-button"><StarIcon/> Update to Premium</button>
        </div>
    );
};

export default BannerEditProfile;
