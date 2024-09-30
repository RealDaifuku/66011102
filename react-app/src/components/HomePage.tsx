// components/HomePage.tsx
import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  background-image: url("https://wallpapers-clan.com/wp-content/uploads/2023/10/minecraft-grass-tree-desktop-wallpaper-preview.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh; /* Full viewport height */
  color: white; /* Change text color for visibility */
  display: flex; /* Center content vertically and horizontally */
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HomePage: React.FC = () => {
  return (
    <PageContainer>
      <h1>Welcome to the Home Page!</h1>
      <p>This is the content of your home page.</p>
      {/* Add any additional content or components for the home page here */}
    </PageContainer>
  );
};

export default HomePage;
