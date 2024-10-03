// // components/ContactPage.tsx
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

// const ContactPage: React.FC = () => {
//   return (
//     <PageContainer>
//       <h1>Contact Page</h1>
//       <p>If you have any questions, feel free to reach out!</p>
//       {/* You can add a contact form or additional info here */}
//     </PageContainer>
//   );
// };

// export default ContactPage;

// components/ContactPage.tsx


import React from "react";
import styled from "styled-components";

// Styled component for the page container
const PageContainer = styled.div`
  background-image: url("https://wallpapers-clan.com/wp-content/uploads/2023/10/minecraft-grass-tree-desktop-wallpaper-preview.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh; /* Full viewport height */
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Align items at the top */
  align-items: center;
  padding: 50px; /* Padding for spacing */
`;

// Styled component for the team section
const TeamSection = styled.div`
  width: 80%;
  margin: 30px 0;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7); /* Transparent black background */
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Added shadow for depth */
  text-align: center;
`;

// Styled component for the team member container
const TeamContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start; /* Align items at the top of each card */
  flex-wrap: wrap; /* Allow wrapping for smaller screens */
  gap: 20px; /* Gap between each card */
  margin-top: 20px;
`;

// Styled component for individual team member cards
const TeamCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1); /* Slightly transparent white */
  border-radius: 10px;
  text-align: center;
  padding: 20px;
  width: 250px; /* Fixed width for each card */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Box shadow for 3D effect */
  transition: transform 0.3s ease; /* Smooth hover effect */

  &:hover {
    transform: translateY(-5px); /* Lift the card on hover */
  }
`;

// Styled component for team member images
const TeamImage = styled.img`
  width: 100%;
  height: 200px; /* Adjusted height for better image visibility */
  object-fit: cover;
  border-radius: 10px 10px 0 0; /* Rounded corners for the top */
`;

// Styled component for team member names
const TeamName = styled.h3`
  margin: 15px 0;
  color: #ffeb3b; /* Yellow color for member names */
`;

// Styled component for team member descriptions
const TeamDescription = styled.p`
  font-size: 14px;
  color: white;
  line-height: 1.4;
`;

const ContactPage: React.FC = () => {
  // Placeholder team members data
  const teamMembers = [
    {
      name: "Kris",
      image:
        "https://i.pinimg.com/736x/66/74/e2/6674e2d54d20a2744ea6cd639d42cf64.jpg",
      description:
        "I heard you’re very interested in going to Stonegoat! Well, just follow these instructions and you should be able to get there. Firstly, you need to get to the highway from our university. When you head out the main entrance of the engineering faculty go towards the train tracks and take a left from where the bridge is. Then you’ll keep heading straight until you reach an underpass where there are two lanes to the right and one lane forward. Make sure you keep going straight and then you’ll be able to get to the highway. Great! Now you wanna keep on going straight on that highway For around 6 km until you see that you will have to go up a bridge. Do not go up that bridge and take the middle left lane to get out of the highway. Once there you wanna keep on going straight until you see a red light then turn left then, you wanna keep on going straight pass the train tracks pass the red light, and pass the bridge. Now, you’re at the most important area which is Pridi road. You want to keep your eyes out on a soi on the right side of the road while you’re heading straight. You wanna be able to turn into the soi with the number 15 on it. Then, follow the arrows that shows the directions towards sukhumvit road. Once you’re out of that soy and on the main road below the BTS, you want to keep on going straight until you reach a soi on the left right next to the BTS station, pra khanong. Turn left on soi 69 and head straight then you will see Stonegoat!",
    },
    {
      name: "Justin",
      image:
        "https://scontent.fbkk6-1.fna.fbcdn.net/v/t39.30808-6/450460208_7872443099542255_7686689311997513635_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=b04a48&_nc_eui2=AeHHBIcTicebcgm4jpPUGEJjbKwaHZ-CDlJsrBodn4IOUlidbnZzwMhj_JG2cqdVIFQkY8ceI_Rn4y-bboDASiGc&_nc_ohc=jlBQ3HlCCWMQ7kNvgEQP_z_&_nc_ht=scontent.fbkk6-1.fna&_nc_gid=AF4ddWo5xtbjFiu3SHFvigB&oh=00_AYD4nzAg32LJysm_TsiOXqb1YK7PsugRuufwlsHQ3JeU6A&oe=6702EF81",
      description:
        "Justin is a front-end developer and UX/UI designer who ensures that our site looks beautiful and user-friendly.",
    },
    {
      name: "Daifuku",
      image:
        "https://scontent.fbkk6-2.fna.fbcdn.net/v/t1.6435-9/69443142_651165062040685_3498677292714950656_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHCEiuk8xK25S-rphKhypiMOTFPtfeOuHM5MU-19464c1RSHJTzdKQ_IBnSSQYfmv_4i55VwSKMxtXpq6WSjBSw&_nc_ohc=KrSGynKI9SgQ7kNvgE7-rio&_nc_ht=scontent.fbkk6-2.fna&oh=00_AYCC-JNwWoawWaQQC0kEaf9QrSePV6DKuMQxBGGebFpGQw&oe=6724A116",
      description:
        "Professional chatGPT user. Currently working a six-figure job at Nasa as a janitor.",
    },
    {
      name: "Gun",
      image:
        "https://scontent.fbkk6-2.fna.fbcdn.net/v/t39.30808-6/224116762_817203252276602_3490496092869765405_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHUDdM1AgxkSijJRxUj5OWtw8FVruit97XDwVWu6K33tU471lZxN8Y9mnZ2JSL5XbHvrIR3k00m0PqkXgkIg4jO&_nc_ohc=3N8ix_0QRP8Q7kNvgHoeuqM&_nc_ht=scontent.fbkk6-2.fna&oh=00_AYAAKccd1PsL9dZ8t9Eu6X0y-5kzKtaA7NIe-ABySMzVcA&oe=6702F656",
      description:
        "Hello there!!, Dear future engineer my name is Nonpravit Kachonnarongvanich, you guys can call me Gun, I’m new staff here to take care RAI minecraft server .Please clean up your server everyday and respect each other , especially we have intern in our server.",
    },
  ];

  return (
    <PageContainer>
      {/* Contact Page Header */}
      <h1>Contact Our Team</h1>
      <p>
        If you have any questions or suggestions, feel free to reach out to any
        of our team members!
      </p>

      {/* Team Section */}
      <TeamSection>
        <h2>Meet the Team</h2>
        <TeamContainer>
          {teamMembers.map((member, index) => (
            <TeamCard key={index}>
              <TeamImage src={member.image} alt={member.name} />
              <TeamName>{member.name}</TeamName>
              <TeamDescription>{member.description}</TeamDescription>
            </TeamCard>
          ))}
        </TeamContainer>
      </TeamSection>
    </PageContainer>
  );
};

export default ContactPage;
