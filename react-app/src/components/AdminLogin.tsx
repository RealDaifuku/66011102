// // components/AdminLogin.tsx
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";

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

// const Input = styled.input`
//   margin: 10px;
//   padding: 10px;
//   border-radius: 5px;
//   border: 1px solid #ccc;
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   background-color: #458f50;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: #367040;
//   }
// `;

// const AdminLogin: React.FC = () => {
//   const [credentials, setCredentials] = useState({
//     username: "",
//     password: "",
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://127.0.0.1:9000/api/token/",
//         credentials
//       );
//       if (response.status === 200) {
//         // Save the access token in localStorage
//         localStorage.setItem("access_token", response.data.access);
//         localStorage.setItem("refresh_token", response.data.refresh);
//         // Redirect to the admin content page
//         navigate("/admin-content");
//       }
//     } catch {
//       setError("Login failed. Please check your credentials.");
//     }
//   };

//   return (
//     <PageContainer>
//       <h1>Admin Login</h1>
//       <form onSubmit={handleSubmit}>
//         <Input
//           type="text"
//           name="username"
//           placeholder="Username"
//           value={credentials.username}
//           onChange={handleChange}
//         />
//         <Input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={credentials.password}
//           onChange={handleChange}
//         />
//         <Button type="submit">Login</Button>
//       </form>
//       {error && <p>{error}</p>}
//     </PageContainer>
//   );
// };

// export default AdminLogin;

// components/AdminLogin.tsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #458f50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #367040;
  }
`;

const AdminLogin: React.FC = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://127.0.0.1:9000/api/token/', credentials);
//       if (response.status === 200) {
//         localStorage.setItem('access_token', response.data.access);
//         localStorage.setItem('refresh_token', response.data.refresh);
//         navigate('/admin-content'); // Redirect to AdminContent after successful login
//       }
//     } catch {
//       setError('Login failed. Please check your credentials.');
//     }
    //   };
    
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Logging in with:", credentials); // Log credentials
      try {
        const response = await axios.post(
          "http://127.0.0.1:9000/api/token/",
          credentials
        );
        if (response.status === 200) {
          localStorage.setItem("access_token", response.data.access);
          localStorage.setItem("refresh_token", response.data.refresh);
          navigate("/admin-content"); // Redirect to AdminContent after successful login
        }
      } catch (err) {
        console.error(err); // Log the error
        setError("Login failed. Please check your credentials.");
      }
    };

  return (
    <PageContainer>
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
        />
        <Button type="submit">Login</Button>
      </form>
      {error && <p>{error}</p>}
    </PageContainer>
  );
};

export default AdminLogin;
