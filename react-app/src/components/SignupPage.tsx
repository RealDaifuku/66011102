// // components/SignupPage.tsx
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";

// const FormContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   background-image: url("https://wallpapers-clan.com/wp-content/uploads/2023/10/minecraft-grass-tree-desktop-wallpaper-preview.jpg");
//   background-size: cover;
//   background-repeat: no-repeat;
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

// const SignupPage: React.FC = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//  const handleSubmit = async (e: React.FormEvent) => {
//    e.preventDefault();
//    try {
//      // Ensure password is sent in the form data
//      await axios.post("http://127.0.0.1:9000/api/users/", formData);
//      navigate("/admin");
//    } catch (err) {
//      setError("Signup failed. Please try again.");
//    }
//  };


//   return (
//     <FormContainer>
//       <h1>Sign Up</h1>
//       <form onSubmit={handleSubmit}>
//         <Input
//           type="text"
//           name="username"
//           placeholder="Username"
//           value={formData.username}
//           onChange={handleInputChange}
//           required
//         />
//         <Input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleInputChange}
//           required
//         />
//         <Input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleInputChange}
//           required
//         />
//         <Button type="submit">Sign Up</Button>
//       </form>
//       {error && <p>{error}</p>}
//     </FormContainer>
//   );
// };

// export default SignupPage;

// components/SignupPage.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url("https://wallpapers-clan.com/wp-content/uploads/2023/10/minecraft-grass-tree-desktop-wallpaper-preview.jpg");
  background-size: cover;
  background-repeat: no-repeat;
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

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:9000/api/users/', formData);
      navigate('/'); // Redirect to HomePage after successful signup
    } catch (err) {
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
      {error && <p>{error}</p>}
    </FormContainer>
  );
};

export default SignupPage;
