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
// //   const [content, setContent] = useState("");
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const token = localStorage.getItem("access_token");
// //         if (!token) {
// //           navigate("/admin"); // Redirect to login if no token is present
// //           return;
// //         }

// //         const response = await axios.get(
// //           "http://127.0.0.1:9000/api/protected-admin-route/",
// //           {
// //             headers: {
// //               Authorization: `Bearer ${token}`,
// //             },
// //           }
// //         );
// //         setContent(response.data);
// //       } catch (error) {
// //         // Handle error (e.g., invalid token or other)
// //         console.error(error);
// //         navigate("/admin"); // Redirect to login if token is invalid
// //       }
// //     };

// //     fetchData();
// //   }, [navigate]);

// //   return (
// //     <PageContainer>
// //       <h1>Admin Content</h1>
// //       <p>{content}</p>
// //     </PageContainer>
// //   );
// // };

// // export default AdminContent;


// // components/AdminContent.tsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";

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
// `;

// const AdminContent: React.FC = () => {
//   const [content, setContent] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("access_token");
//         if (!token) {
//           navigate("/admin"); // Redirect to login if no token is present
//           return;
//         }

//         const response = await axios.get(
//           "http://127.0.0.1:9000/api/protected-admin-route/",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         setContent(response.data);
//       } catch (error) {
//         console.error(error);
//         navigate("/admin"); // Redirect to login if token is invalid
//       }
//     };

//     fetchData();
//   }, [navigate]);

//   return (
//     <PageContainer>
//       <h1>Congratulations!</h1>
//       <p>You have successfully logged into the Admin Page.</p>
//       <p>{content}</p>
//     </PageContainer>
//   );
// };

// export default AdminContent;

import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
`;

const AdminContent: React.FC = () => {
  const [content, setContent] = useState<string>(""); // Define content as a string
  const [loading, setLoading] = useState<boolean>(true); // Define loading as a boolean
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (!token) {
          navigate("/admin"); // Redirect to login if no token is present
          return;
        }

        const response = await axios.get<{ message: string }>(
          "http://127.0.0.1:9000/api/protected-admin-route/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Log the response for debugging
        console.log("API Response:", response.data);

        // Set the content from the response
        setContent(response.data.message); // Access the message property
      } catch (error) {
        console.error(error);
        navigate("/admin"); // Redirect to login if token is invalid
      } finally {
        setLoading(false); // Set loading to false when the fetch completes
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <PageContainer>
      <h1>Congratulations!</h1>
      <p>You have successfully logged into the Admin Page.</p>
      {loading ? <p>Loading content...</p> : <p>{content}</p>}{" "}
      {/* Display loading or content */}
    </PageContainer>
  );
};

export default AdminContent;
