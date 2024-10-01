// // // // import React, { useEffect, useState } from "react";
// // // // import axios from "axios";
// // // // import styled from "styled-components";
// // // // import { useNavigate } from "react-router-dom";

// // // // const PageContainer = styled.div`
// // // //   background-image: url("https://wallpapers-clan.com/wp-content/uploads/2023/10/minecraft-grass-tree-desktop-wallpaper-preview.jpg");
// // // //   background-size: cover;
// // // //   background-repeat: no-repeat;
// // // //   height: 100vh;
// // // //   display: flex;
// // // //   flex-direction: column;
// // // //   justify-content: center;
// // // //   align-items: center;
// // // //   color: white;
// // // // `;

// // // // const AdminContent: React.FC = () => {
// // // //   const [content, setContent] = useState("");
// // // //   const navigate = useNavigate();

// // // //   useEffect(() => {
// // // //     const fetchData = async () => {
// // // //       try {
// // // //         const token = localStorage.getItem("access_token");
// // // //         if (!token) {
// // // //           navigate("/admin"); // Redirect to login if no token is present
// // // //           return;
// // // //         }

// // // //         const response = await axios.get(
// // // //           "http://127.0.0.1:9000/api/protected-admin-route/",
// // // //           {
// // // //             headers: {
// // // //               Authorization: `Bearer ${token}`,
// // // //             },
// // // //           }
// // // //         );
// // // //         setContent(response.data);
// // // //       } catch (error) {
// // // //         // Handle error (e.g., invalid token or other)
// // // //         console.error(error);
// // // //         navigate("/admin"); // Redirect to login if token is invalid
// // // //       }
// // // //     };

// // // //     fetchData();
// // // //   }, [navigate]);

// // // //   return (
// // // //     <PageContainer>
// // // //       <h1>Admin Content</h1>
// // // //       <p>{content}</p>
// // // //     </PageContainer>
// // // //   );
// // // // };

// // // // export default AdminContent;


// // // // components/AdminContent.tsx
// // // import React, { useEffect, useState } from "react";
// // // import axios from "axios";
// // // import styled from "styled-components";
// // // import { useNavigate } from "react-router-dom";

// // // const PageContainer = styled.div`
// // //   background-image: url("https://wallpapers-clan.com/wp-content/uploads/2023/10/minecraft-grass-tree-desktop-wallpaper-preview.jpg");
// // //   background-size: cover;
// // //   background-repeat: no-repeat;
// // //   height: 100vh;
// // //   display: flex;
// // //   flex-direction: column;
// // //   justify-content: center;
// // //   align-items: center;
// // //   color: white;
// // // `;

// // // const AdminContent: React.FC = () => {
// // //   const [content, setContent] = useState("");
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       try {
// // //         const token = localStorage.getItem("access_token");
// // //         if (!token) {
// // //           navigate("/admin"); // Redirect to login if no token is present
// // //           return;
// // //         }

// // //         const response = await axios.get(
// // //           "http://127.0.0.1:9000/api/protected-admin-route/",
// // //           {
// // //             headers: {
// // //               Authorization: `Bearer ${token}`,
// // //             },
// // //           }
// // //         );
// // //         setContent(response.data);
// // //       } catch (error) {
// // //         console.error(error);
// // //         navigate("/admin"); // Redirect to login if token is invalid
// // //       }
// // //     };

// // //     fetchData();
// // //   }, [navigate]);

// // //   return (
// // //     <PageContainer>
// // //       <h1>Congratulations!</h1>
// // //       <p>You have successfully logged into the Admin Page.</p>
// // //       <p>{content}</p>
// // //     </PageContainer>
// // //   );
// // // };

// // // export default AdminContent;

// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import styled from "styled-components";
// // import { useNavigate } from "react-router-dom";

// // const PageContainer = styled.div`
// //   background-image: url("https://wallpapers-clan.com/wp-content/uploads/2023/10/minecraft-grass-tree-desktop-wallpaper-preview.jpg");
// //   background-size: cover;
// //   background-repeat: no-repeat;
// //   height: 100vh;
// //   display: flex;
// //   flex-direction: column;
// //   justify-content: center;
// //   align-items: center;
// //   color: white;
// // `;

// // const AdminContent: React.FC = () => {
// //   const [content, setContent] = useState<string>(""); // Define content as a string
// //   const [loading, setLoading] = useState<boolean>(true); // Define loading as a boolean
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const token = localStorage.getItem("access_token");
// //         if (!token) {
// //           navigate("/admin"); // Redirect to login if no token is present
// //           return;
// //         }

// //         const response = await axios.get<{ message: string }>(
// //           "http://127.0.0.1:9000/api/protected-admin-route/",
// //           {
// //             headers: {
// //               Authorization: `Bearer ${token}`,
// //             },
// //           }
// //         );

// //         // Log the response for debugging
// //         console.log("API Response:", response.data);

// //         // Set the content from the response
// //         setContent(response.data.message); // Access the message property
// //       } catch (error) {
// //         console.error(error);
// //         navigate("/admin"); // Redirect to login if token is invalid
// //       } finally {
// //         setLoading(false); // Set loading to false when the fetch completes
// //       }
// //     };

// //     fetchData();
// //   }, [navigate]);

// //   return (
// //     <PageContainer>
// //       <h1>Congratulations!</h1>
// //       <p>You have successfully logged into the Admin Page.</p>
// //       {loading ? <p>Loading content...</p> : <p>{content}</p>}{" "}
// //       {/* Display loading or content */}
// //     </PageContainer>
// //   );
// // };

// // export default AdminContent;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";

// // Styled components
// const PageContainer = styled.div`
//   background-image: url("https://wallpapers-clan.com/wp-content/uploads/2023/10/minecraft-grass-tree-desktop-wallpaper-preview.jpg");
//   background-size: cover;
//   background-repeat: no-repeat;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   color: white;
//   padding: 20px;
// `;

// const SearchContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background: rgba(0, 0, 0, 0.6);
//   padding: 20px;
//   border-radius: 10px;
//   margin-bottom: 20px;
// `;

// const SearchInput = styled.input`
//   width: 300px;
//   padding: 10px;
//   margin-bottom: 10px;
//   border: none;
//   border-radius: 5px;
//   outline: none;
//   font-size: 16px;
// `;

// const SearchButton = styled.button`
//   width: 100px;
//   padding: 10px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   background-color: #ff9505;
//   color: white;
//   font-weight: bold;
//   &:hover {
//     background-color: #e58900;
//   }
// `;

// const PlayerInfoContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background: rgba(0, 0, 0, 0.7);
//   padding: 20px;
//   border-radius: 10px;
//   color: #fff;
// `;

// const PlayerImage = styled.img`
//   width: 150px;
//   height: 150px;
//   margin-bottom: 20px;
// `;

// const PlayerData = styled.p`
//   font-size: 18px;
//   margin: 5px 0;
// `;

// const AdminContent: React.FC = () => {
//   const [content, setContent] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(true);
//   const [searchTerm, setSearchTerm] = useState<string>(""); // Search term for the player name
//   const [playerData, setPlayerData] = useState<any>(null); // State to store player data
//   const [error, setError] = useState<string | null>(null); // State for error messages
//   const navigate = useNavigate();

//   // Fetch initial admin content (if any)
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("access_token");
//         if (!token) {
//           navigate("/admin");
//           return;
//         }
//         const response = await axios.get<{ message: string }>(
//           "http://127.0.0.1:9000/api/protected-admin-route/",
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );
//         setContent(response.data.message);
//       } catch (error) {
//         console.error(error);
//         navigate("/admin");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [navigate]);

//   // Handle player search
//   const handleSearch = async () => {
//     setError(null); // Reset error state
//     setPlayerData(null); // Reset player data state
//     setLoading(true); // Set loading state

//     try {
//       // Use your Django backend as a proxy to avoid CORS issues
//       const playerDataResponse = await axios.get(
//         `http://127.0.0.1:9000/mojang/api/get-player-data/${searchTerm}`
//       );

//       const playerInfo = playerDataResponse.data;

//       setPlayerData({
//         name: playerInfo.name,
//         uuid: playerInfo.id,
//         skinUrl: playerInfo.skinUrl,
//       });
//     } catch (err) {
//       setError("Player not found. Please check the username and try again.");
//       console.error("Error fetching player data:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <PageContainer>
//       <h1>Congratulations!</h1>
//       <p>You have successfully logged into the Admin Page.</p>
//       {loading ? <p>Loading content...</p> : <p>{content}</p>}

//       {/* Search Container */}
//       <SearchContainer>
//         <h2>Search for a Minecraft Player</h2>
//         <SearchInput
//           type="text"
//           placeholder="Enter Minecraft username"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <SearchButton onClick={handleSearch}>Search</SearchButton>
//       </SearchContainer>

//       {/* Display Player Info */}
//       {loading ? (
//         <p>Loading player data...</p>
//       ) : (
//         playerData && (
//           <PlayerInfoContainer>
//             <PlayerImage src={playerData.skinUrl} alt="Player Avatar" />
//             <PlayerData>Player Name: {playerData.name}</PlayerData>
//             <PlayerData>UUID: {playerData.uuid}</PlayerData>
//           </PlayerInfoContainer>
//         )
//       )}

//       {/* Error Handling */}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </PageContainer>
//   );
// };

// export default AdminContent;
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Styled components
const PageContainer = styled.div`
  background-image: url("https://wallpapers-clan.com/wp-content/uploads/2023/10/minecraft-grass-tree-desktop-wallpaper-preview.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 20px;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  width: 300px;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
`;

const SearchButton = styled.button`
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #ff9505;
  color: white;
  font-weight: bold;
  &:hover {
    background-color: #e58900;
  }
`;

const PlayerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  padding: 20px;
  border-radius: 10px;
  color: #fff;
`;

const PlayerImage = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;

const PlayerData = styled.p`
  font-size: 18px;
  margin: 5px 0;
`;

const Warning = styled.p`
  color: red;
  `;

const AdminContent: React.FC = () => {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>(""); // Search term for the player name
  const [playerData, setPlayerData] = useState<any>(null); // State to store player data
  const [error, setError] = useState<string | null>(null); // State for error messages
  const navigate = useNavigate();

  // Fetch initial admin content (if any)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (!token) {
          navigate("/admin");
          return;
        }
        const response = await axios.get<{ message: string }>(
          "http://127.0.0.1:9000/api/protected-admin-route/",
          {
            headers: { Authorization: `Bearer ${token}` },
            withCredentials: true, // Include credentials in the request
          }
        );
        setContent(response.data.message);
      } catch (error) {
        console.error(error);
        navigate("/admin");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [navigate]);

  // Handle player search
  const handleSearch = async () => {
    setError(null); // Reset error state
    setPlayerData(null); // Reset player data state
    setLoading(true); // Set loading state

    try {
      // Use your Django backend as a proxy to avoid CORS issues
      const playerDataResponse = await axios.get(
        `http://127.0.0.1:9000/mojang/api/get-player-data/${searchTerm}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          withCredentials: true, // Include credentials in the request
        }
      );

      const playerInfo = playerDataResponse.data;

      setPlayerData({
        name: playerInfo.name,
        uuid: playerInfo.id,
        skinUrl: playerInfo.skinUrl,
      });
    } catch (err) {
      setError("Player not found. Please check the username and try again.");
      console.error("Error fetching player data:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageContainer>
      <h1>Congratulations!</h1>
      <Warning>Warning : Minecraft player profile search feature may NOT WORK on browsers that is not Chrome</Warning>
      {loading ? <p>Loading content...</p> : <p>{content}</p>}

      {/* Search Container */}
      <SearchContainer>
        <h2>Search for a Minecraft Player</h2>
        <SearchInput
          type="text"
          placeholder="Enter Minecraft username"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </SearchContainer>

      {/* Display Player Info */}
      {loading ? (
        <p>Loading player data...</p>
      ) : (
        playerData && (
          <PlayerInfoContainer>
            <PlayerImage src={playerData.skinUrl} alt="Player Avatar" />
            <PlayerData>Player Name: {playerData.name}</PlayerData>
            <PlayerData>UUID: {playerData.uuid}</PlayerData>
          </PlayerInfoContainer>
        )
      )}

      {/* Error Handling */}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </PageContainer>
  );
};

export default AdminContent;
