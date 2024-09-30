// components/AdminPage.tsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
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


const AdminPage: React.FC = () => {
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleRegisterClick = () => {
    navigate("/register"); // Navigate to the Register page
  };

  return (
    <PageContainer>
      <h1>Admin Page</h1>
      <p>Admin controls and management tools go here.</p>
      {/* Add your admin functionalities here */}
      {/* This button should show */}
    </PageContainer>
  );
};

export default AdminPage;
