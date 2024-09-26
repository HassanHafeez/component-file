import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API from "../constants/apiConfig.js"; // Ensure this path is correct
import "./SearchBar.css";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [userImages, setUserImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [trendingText, setTrendingText] = useState("");

  const navigate = useNavigate();
  const trendingWords = "Trending: Historical, Contests, Park, Portraits, Clothes";

  // Function to fetch images from the API
  const fetchImages = async () => {
    try {
      const response = await axios.get(API.FETCH_IMAGES);
      const imageGroups = response.data.images || [];
      
      const flatImages = imageGroups.reduce((acc, imageGroup) => {
        const userId = imageGroup.userId;
        const userInfo = imageGroup.user;
        return acc.concat(
          imageGroup.images.map((img) => ({
            ...img,
            userId,
            userInfo,
          }))
        );
      }, []);

      // Log all fetched images to the console
      console.log("Fetched Images: ", flatImages);

      const publicImages = flatImages.filter(
        (image) => image.visibility === "Public"
      );

      setUserImages(publicImages);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user images:", error);
      setLoading(false);
    }
  };

  // Function to create a typing effect for trending words
  const startTypingEffect = () => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < trendingWords.length) {
        setTrendingText(trendingWords.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    setTimeout(() => {
      setTrendingText("");
      startTypingEffect();
    }, 7000);
  };

  // Fetch images and start typing effect on component mount
  useEffect(() => {
    fetchImages();
    startTypingEffect();
  }, []);

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle click event for finding images
  const handleFindClick = () => {
    if (loading) {
      console.warn("Images are still loading.");
      return; // Prevent searching if still loading
    }

    const query = searchQuery.trim().toLowerCase();
    const foundImages = userImages.filter((image) => {
      let tagsArray = Array.isArray(image.tags) 
        ? image.tags.map(tag => tag.toLowerCase()) 
        : image.tags.toLowerCase().split(/[,\s]+/);
      return tagsArray.some((tag) => tag.includes(query));
    });

    console.log("Found Images: ", foundImages);
    
    navigate(`/search/${query}`, {
      state: { searchedImages: foundImages, searchQuery }
    });
  };

  // Handle key press for searching images
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleFindClick();
    }
  };

  // Display loading state while fetching images
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="heading poppins-bold">
        The best free stock photos, royalty-free images & videos shared by creators.
      </h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Explore the World in Pictures ..."
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
          className="input"
        />
        <button onClick={handleFindClick} className="button">
          Find
        </button>
      </div>
      <div className="trending-text">
        {trendingText}
      </div>
    </div>
  );
};

export default SearchBar;
