// // components/HomePage.tsx
// import React from "react";
// import styled from "styled-components";

// const PageContainer = styled.div`
//   background-image: url("https://wallpapers-clan.com/wp-content/uploads/2023/10/minecraft-grass-tree-desktop-wallpaper-preview.jpg");
//   background-size: cover;
//   background-repeat: no-repeat;
//   height: 100vh; /* Full viewport height */
//   color: white; /* Change text color for visibility */
//   display: flex; /* Center content vertically and horizontally */
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const HomePage: React.FC = () => {
//   return (
//     <PageContainer>
//       <h1>Welcome to the Home Page!</h1>
//       <p>This is the content of your home page.</p>
//       {/* Add any additional content or components for the home page here */}
//     </PageContainer>
//   );
// };

// export default HomePage;

// components/HomePage.tsx
// import React from "react";
// import styled from "styled-components";

// // Styles for the page container
// const PageContainer = styled.div`
//   background-image: url("https://wallpapers-clan.com/wp-content/uploads/2023/10/minecraft-grass-tree-desktop-wallpaper-preview.jpg");
//   background-size: cover;
//   background-repeat: no-repeat;
//   min-height: 100vh;
//   color: white;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 50px; /* Added padding to give space */
// `;

// // Styles for the server overview section
// const ServerOverviewSection = styled.div`
//   width: 80%;
//   margin: 30px 0;
//   padding: 20px;
//   text-align: center;
//   background-color: rgba(0, 0, 0, 0.7); /* Transparent black background */
//   border-radius: 15px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Added shadow for depth */
// `;

// const OverviewImage = styled.img`
//   width: 100%;
//   max-height: 400px; /* Maximum height for the image */
//   object-fit: cover;
//   border-radius: 15px;
// `;

// const WelcomeMessage = styled.h1`
//   margin: 20px 0;
//   font-size: 36px;
//   color: #ffeb3b; /* Yellow title color for contrast */
// `;

// const Foreword = styled.p`
//   font-size: 18px;
//   text-align: justify;
//   line-height: 1.6;
// `;

// // Styled components for different sections
// const Section = styled.div`
//   width: 80%;
//   margin: 30px 0;
//   padding: 20px;
//   background-color: rgba(0, 0, 0, 0.6); /* Transparent black background */
//   border-radius: 15px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Added shadow for depth */
// `;

// const SectionTitle = styled.h2`
//   text-align: center;
//   color: #ffeb3b; /* Yellow title color for contrast */
//   margin-bottom: 20px;
// `;

// const SectionContent = styled.p`
//   text-align: justify;
//   line-height: 1.6;
// `;

// // Styled components for the members' section
// const MembersContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-evenly;
//   margin-top: 20px;
// `;

// const MemberCard = styled.div`
//   width: 250px;
//   background-color: rgba(255, 255, 255, 0.1); /* Slightly transparent white */
//   border-radius: 10px;
//   margin: 10px;
//   text-align: center;
//   padding: 15px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Box shadow for 3D effect */
// `;

// const MemberImage = styled.img`
//   width: 100%;
//   height: 150px;
//   object-fit: cover;
//   border-radius: 10px 10px 0 0;
// `;

// const MemberName = styled.h3`
//   margin-top: 15px;
//   color: #ff9800; /* Orange color for member names */
// `;

// // Styled components for landmarks section
// const LandmarkCard = styled.div`
//   display: flex;
//   align-items: center;
//   background-color: rgba(255, 255, 255, 0.1);
//   border-radius: 10px;
//   margin: 15px 0;
//   padding: 15px;
//   width: 100%;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
// `;

// const LandmarkImage = styled.img`
//   width: 200px;
//   height: 150px;
//   object-fit: cover;
//   border-radius: 10px;
//   margin-right: 20px;
// `;

// const LandmarkDescription = styled.div`
//   flex: 1;
//   text-align: left;
// `;

// // Blog page component
// const HomePage: React.FC = () => {
//   // Placeholder data for members (use historical figures)
//   const members = [
//     {
//       name: "Saddam Hussein",
//       image:
//         "https://hips.hearstapps.com/hmg-prod/images/gettyimages-113975611.jpg?crop=1xw:1.0xh;center,top&resize=640:*",
//     },
//     {
//       name: "Gojo Satoru",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbYuYDD0d6_ejWCiMwEQBabeXohZOe0guz0A&s",
//     },
//     {
//       name: "Hatsune Miku",
//       image: "https://i.scdn.co/image/ab6761610000e5ebba025c8f62612b2ca6bfa375",
//     },
//     {
//       name: "Genghis Khan",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/c/ca/Osama_bin_Laden_portrait.jpg",
//     },
//     {
//       name: "Napoleon Bonaparte",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvtZSXoa7lU0IBaV41q5B1awCYijsFF5Sh-Q&s",
//     },
//   ];

//   // Placeholder data for landmarks
//   const landmarks = [
//     {
//       name: "Saddam Huessein's base",
//       description:
//         "An underground base of Saddam Hussein. Some say this where the greatest manhunt took place.",
//       image:
//         "https://media.printables.com/media/prints/711467/images/5578115_d6e7c290-74c9-4caf-a476-439d9126ebf2_e0057403-2cc8-4bf4-ac65-2715a3816533/thumbs/inside/1280x960/jpg/minecraft.webp",
//     },
//     {
//       name: "The Holy Land",
//       description: "An ominous mountain filled with secrets and treasures.",
//       image: "https://i.imgur.com/ldZqY.jpg",
//     },
//     {
//       name: "Hogwarts",
//       description: "The most presitigious university in the server where the strongest sorcerers and engineers are created. This university doesn't teach COMSCI though.",
//       image:
//         "https://minecraftbuildinginc.com/wp-content/uploads/2013/09/AUSCHWITZ-BIRKENAU-OSWIECIM-POLAND-minecraft-building-ideas.jpg",
//     },
//   ];

//   return (
//     <PageContainer>
//       {/* Server Overview Section */}
//       <ServerOverviewSection>
//         <OverviewImage
//           src="https://64.media.tumblr.com/988f2051e9184c99dc7efcff55f45a02/1863d558b8fb1236-0b/s1280x1920/537138a4a40572b1121c305e166d00df5b7f0f9b.jpg"
//           alt="Server Overview"
//         />
//         <WelcomeMessage>Welcome to the Minecraft Server</WelcomeMessage>
//         <Foreword>
//           Welcome to our beloved Minecraft server, a place where creativity
//           meets adventure. Here, you will embark on a journey filled with
//           excitement, challenges, and unforgettable memories. Explore our vast
//           lands, build your dreams, and become part of our growing community. We
//           hope you enjoy your time here!
//         </Foreword>
//       </ServerOverviewSection>

//       {/* Server History Section */}
//       <Section>
//         <SectionTitle>Server History</SectionTitle>
//         <SectionContent>
//           Our Minecraft server has a rich history filled with epic builds,
//           fierce battles, and a strong community of players who have shaped its
//           landscape. Founded many years ago, this server started as a small
//           realm and grew into a bustling world with incredible creations.
//         </SectionContent>
//       </Section>

//       {/* Members Section */}
//       <Section>
//         <SectionTitle>Meet the Members</SectionTitle>
//         <MembersContainer>
//           {members.map((member, index) => (
//             <MemberCard key={index}>
//               <MemberImage src={member.image} alt={member.name} />
//               <MemberName>{member.name}</MemberName>
//             </MemberCard>
//           ))}
//         </MembersContainer>
//       </Section>

//       {/* Landmarks Section */}
//       <Section>
//         <SectionTitle>Server Landmarks</SectionTitle>
//         {landmarks.map((landmark, index) => (
//           <LandmarkCard key={index}>
//             <LandmarkImage src={landmark.image} alt={landmark.name} />
//             <LandmarkDescription>
//               <h3>{landmark.name}</h3>
//               <p>{landmark.description}</p>
//             </LandmarkDescription>
//           </LandmarkCard>
//         ))}
//       </Section>
//     </PageContainer>
//   );
// };

// export default HomePage;

// components/HomePage.tsx

// components/HomePage.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

// Styles for the page container
const PageContainer = styled.div`
  background-image: url("https://wallpapers-clan.com/wp-content/uploads/2023/10/minecraft-grass-tree-desktop-wallpaper-preview.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px; /* Added padding to give space */
`;

// Styles for the server overview section
const ServerOverviewSection = styled.div`
  width: 80%;
  margin: 30px 0;
  padding: 20px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7); /* Transparent black background */
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Added shadow for depth */
`;

const OverviewImage = styled.img`
  width: 100%;
  max-height: 400px; /* Maximum height for the image */
  object-fit: cover;
  border-radius: 15px;
`;

const WelcomeMessage = styled.h1`
  margin: 20px 0;
  font-size: 36px;
  color: #ffeb3b; /* Yellow title color for contrast */
`;

const Foreword = styled.p`
  font-size: 18px;
  text-align: justify;
  line-height: 1.6;
`;

// Styled components for different sections
const Section = styled.div`
  width: 80%;
  margin: 30px 0;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.6); /* Transparent black background */
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Added shadow for depth */
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: #ffeb3b; /* Yellow title color for contrast */
  margin-bottom: 20px;
`;

const SectionContent = styled.p`
  text-align: justify;
  line-height: 1.6;
`;

// Styled components for the members' section
const MembersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 20px;
`;

const MemberCard = styled.div`
  width: 250px;
  background-color: rgba(255, 255, 255, 0.1); /* Slightly transparent white */
  border-radius: 10px;
  margin: 10px;
  text-align: center;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Box shadow for 3D effect */
`;

const MemberImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

const MemberName = styled.h3`
  margin-top: 15px;
  color: #ff9800; /* Orange color for member names */
`;

// Styled components for landmarks section
const LandmarkCard = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin: 15px 0;
  padding: 15px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;

const LandmarkImage = styled.img`
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 20px;
`;

const LandmarkDescription = styled.div`
  flex: 1;
  text-align: left;
`;

// Styled components for server status section
const ServerStatusSection = styled.div`
  width: 80%;
  margin: 30px 0;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7); /* Transparent black background */
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Added shadow for depth */
`;

const StatusInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const StatusLabel = styled.span`
  color: #ffeb3b; /* Yellow color for labels */
`;

const StatusValue = styled.span`
  color: #ffffff; /* White color for values */
`;

// Blog page component
const HomePage: React.FC = () => {
  // Placeholder data for members (use historical figures)
  const members = [
    {
      name: "Saddam Hussein",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/gettyimages-113975611.jpg?crop=1xw:1.0xh;center,top&resize=640:*",
    },
    {
      name: "Gojo Satoru",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbYuYDD0d6_ejWCiMwEQBabeXohZOe0guz0A&s",
    },
    {
      name: "Hatsune Miku",
      image: "https://i.scdn.co/image/ab6761610000e5ebba025c8f62612b2ca6bfa375",
    },
    {
      name: "Genghis Khan",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/ca/Osama_bin_Laden_portrait.jpg",
    },
    {
      name: "Napoleon Bonaparte",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvtZSXoa7lU0IBaV41q5B1awCYijsFF5Sh-Q&s",
    },
  ];

  // Placeholder data for landmarks
  const landmarks = [
    {
      name: "Saddam Huessein's base",
      description:
        "An underground base of Saddam Hussein. Some say this where the greatest manhunt took place.",
      image:
        "https://media.printables.com/media/prints/711467/images/5578115_d6e7c290-74c9-4caf-a476-439d9126ebf2_e0057403-2cc8-4bf4-ac65-2715a3816533/thumbs/inside/1280x960/jpg/minecraft.webp",
    },
    {
      name: "The Holy Land",
      description: "An ominous mountain filled with secrets and treasures.",
      image: "https://i.imgur.com/ldZqY.jpg",
    },
    {
      name: "Hogwarts",
      description:
        "The most presitigious university in the server where the strongest sorcerers and engineers are created. This university doesn't teach COMSCI though.",
      image:
        "https://minecraftbuildinginc.com/wp-content/uploads/2013/09/AUSCHWITZ-BIRKENAU-OSWIECIM-POLAND-minecraft-building-ideas.jpg",
    },
  ];

  // Server status state
  const [serverStatus, setServerStatus] = useState<any>({});

  // Fetch server status from backend
  useEffect(() => {
    axios
      .get("http://127.0.0.1:9000/minecraft/serverstatus/")
      .then((response) => {
        console.log("Fetched server data:", response.data); // Debugging: Check fetched data
        if (response.data && response.data.length > 0) {
          setServerStatus(response.data[0]); // Assuming response is an array of server data
        }
      })
      .catch((error) => {
        console.error("Error fetching server status:", error);
      });
  }, []);

  return (
    <PageContainer>
      {/* Server Overview Section */}
      <ServerOverviewSection>
        <OverviewImage
          src="https://64.media.tumblr.com/988f2051e9184c99dc7efcff55f45a02/1863d558b8fb1236-0b/s1280x1920/537138a4a40572b1121c305e166d00df5b7f0f9b.jpg"
          alt="Server Overview"
        />
        <WelcomeMessage>Welcome to the Minecraft Server</WelcomeMessage>
        <Foreword>
          Welcome to our beloved Minecraft server, a place where creativity
          meets adventure. Here, you will embark on a journey filled with
          excitement, challenges, and unforgettable memories. Explore our vast
          lands, build your dreams, and become part of our growing community.
          We hope you enjoy your time here!
        </Foreword>
      </ServerOverviewSection>

      {/* Server History Section */}
      <Section>
        <SectionTitle>Server History</SectionTitle>
        <SectionContent>
          Our Minecraft server has a rich history filled with epic builds, fierce battles, and a strong community of players who have shaped its landscape. Founded many years ago, this server started as a small realm and grew into a bustling world with incredible creations.
        </SectionContent>
      </Section>

      {/* Members Section */}
      <Section>
        <SectionTitle>Meet the Members</SectionTitle>
        <MembersContainer>
          {members.map((member, index) => (
            <MemberCard key={index}>
              <MemberImage src={member.image} alt={member.name} />
              <MemberName>{member.name}</MemberName>
            </MemberCard>
          ))}
        </MembersContainer>
      </Section>

      {/* Landmarks Section */}
      <Section>
        <SectionTitle>Server Landmarks</SectionTitle>
        {landmarks.map((landmark, index) => (
          <LandmarkCard key={index}>
            <LandmarkImage src={landmark.image} alt={landmark.name} />
            <LandmarkDescription>
              <h3>{landmark.name}</h3>
              <p>{landmark.description}</p>
            </LandmarkDescription>
          </LandmarkCard>
        ))}
      </Section>

      {/* Server Status Section */}
      <ServerStatusSection>
        <SectionTitle>Server Status</SectionTitle>
        <StatusInfo>
          <StatusLabel>Player Count:</StatusLabel>
          <StatusValue>{serverStatus.player_count || "N/A"}</StatusValue>
        </StatusInfo>
        <StatusInfo>
          <StatusLabel>Ping:</StatusLabel>
          <StatusValue>{serverStatus.ping || "N/A"} ms</StatusValue>
        </StatusInfo>
        <StatusInfo>
          <StatusLabel>Tick Per Second:</StatusLabel>
          <StatusValue>{serverStatus.tick_per_sec || "N/A"}</StatusValue>
        </StatusInfo>
        <StatusInfo>
          <StatusLabel>Server Version:</StatusLabel>
          <StatusValue>{serverStatus.server_ver || "N/A"}</StatusValue>
        </StatusInfo>
        <StatusInfo>
          <StatusLabel>API Version:</StatusLabel>
          <StatusValue>{serverStatus.api_ver || "N/A"}</StatusValue>
        </StatusInfo>
        <StatusInfo>
          <StatusLabel>Weather:</StatusLabel>
          <StatusValue>{serverStatus.weather || "N/A"}</StatusValue>
        </StatusInfo>
      </ServerStatusSection>
    </PageContainer>
  );
};

export default HomePage;

