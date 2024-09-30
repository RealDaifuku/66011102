// components/Navigation_bar.tsx
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
  background-color: #458f50;
  display: flex; /* Use flexbox for layout */
  align-items: center; /* Center items vertically */
  padding: 10px; /* Add padding to the navbar */
`;

const Brand = styled(Link)`
  margin-right: 20px; /* Space between logo and links */
`;

const Logo = styled.img`
  height: 40px; /* Adjust the height of the logo */
`;

const NavContainer = styled.div`
  display: flex; /* Use flexbox for links */
  flex-grow: 1; /* Allow the links to grow and take available space */
  justify-content: flex-start; /* Align items to the start */
`;

const NavButton = styled(Link)`
  background-color: #242424;
  border-radius: 50em;
  color: white;
  padding: 10px 20px;
  margin: 0 10px; /* Add margin between buttons */
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: #1b1b1b;
  }
`;

const Navigation_bar: React.FC = () => {
  return (
    <Navbar>
      <Brand to="/">
        <Logo
          src="https://art.pixilart.com/b3c4e59e84e9b32.png"
          alt="Navbar Logo"
        />
      </Brand>
      <NavContainer>
        <NavButton to="/">Home</NavButton>
        <NavButton to="/score">Score</NavButton>
        <NavButton to="/admin">Admin</NavButton>
        <NavButton to="/contact">Contact</NavButton>
      </NavContainer>
    </Navbar>
  );
};

export default Navigation_bar;
