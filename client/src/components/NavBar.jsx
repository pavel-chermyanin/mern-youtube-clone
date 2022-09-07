import React from "react";
import styled from "styled-components";
import { Button } from "./Menu";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  height: 56px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0 20px;
  position: relative;
`;
const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;
const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
`;
const ButtonMenu = styled(Button)`
  margin-top: 0;
`;


const NavBar = ({ darkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <SearchOutlinedIcon style={{
            fill: `${darkMode ? 'white': 'black'}`
          }}/>
        </Search>
        <ButtonMenu>
          <AccountCircleOutlinedIcon />
          SIGN IN
        </ButtonMenu>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
