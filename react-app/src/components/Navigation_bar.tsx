import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
  background-color: #458f50;
  display: flex;
  align-items: center;
  padding: 10px;
`;

const Brand = styled(Link)`
  margin-right: 20px;
`;

const Logo = styled.img`
  height: 40px;
`;

const NavContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const NavButton = styled(Link)`
  background-color: #242424;
  border-radius: 50em;
  color: white;
  padding: 10px 20px;
  margin: 0 10px;
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
      <ButtonContainer>
        <NavButton to="/signup">Signup</NavButton>
      </ButtonContainer>
    </Navbar>
  );
};

export default Navigation_bar;
