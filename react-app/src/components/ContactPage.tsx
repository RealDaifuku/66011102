// components/ContactPage.tsx
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

const ContactPage: React.FC = () => {
  return (
    <PageContainer>
      <h1>Contact Page</h1>
      <p>If you have any questions, feel free to reach out!</p>
      {/* You can add a contact form or additional info here */}
    </PageContainer>
  );
};

export default ContactPage;
