import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import logo from "../img/youtube-logo.png";
import { Button } from "./Menu";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "../redux/userSlice";
import Upload from "./Upload";

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
  @media (max-width: 650px) {
    justify-content: flex-start;
  }
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
  @media (max-width: 1024px) {
    position: static;
  }
  @media (max-width: 650px) {
    display: none;
  }
`;
const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
  width: 100%;
`;
const ButtonMenu = styled(Button)`
  margin-top: 0;
  @media (max-width: 450px) {
    display: none;
  }
`;
const MenuButton = styled.div`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 18px;
  width: 24px;
  margin-right: 30px;
  margin-left: 10px;
  display: none;
  flex-shrink: 0;
  cursor: pointer;
  span {
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.textSoft};
  }
  @media (max-width: 1024px) {
    display: flex;
  }
  @media (max-width: 450px) {
    margin-right: 15px;
  }
  @media (max-width: 370px) {
    margin-left: 0;
  }
`;
const LogoBlock = styled.div`
  align-items: center;
  display: none;
  @media (max-width: 1024px) {
    display: flex;
  }
`;
const LogoImg = styled.img`
  height: 25px;
  margin-right: 5px;
`;
const SearchMobile = styled.div`
  display: none;
  @media (max-width: 650px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
  }
`;
const SearchMobileMenu = styled.div`
  width: 100%;
  display: flex;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
  width: 100%;
`;
const UserMobile = styled.div`
  display: none;
  @media (max-width: 450px) {
    display: block;
    margin-left: 10px;
  }
`;
const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  margin-left: 5px;
`;
const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`;
const LogoName = styled.span`
  @media (max-width: 470px) {
    display: none;
  }
`;

const NavBar = ({ setIsOpenMenu, isOpenMenu }) => {
  const [isSearch, setIsSearch] = useState(false);
  const [open, setOpen] = useState(false);
  const searchMobileRef = useRef();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {
    if (isSearch && searchMobileRef?.current) {
      searchMobileRef?.current.focus();
    }
  }, [isSearch]);
  return (
    <>
      <Container>
        <Wrapper>
          <MenuButton
            onClick={(e) => {
              e.stopPropagation();
              setIsOpenMenu(true);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </MenuButton>
          {!isSearch && (
            <Link to="/">
              <LogoBlock>
                <LogoImg src={logo} alt="" />
                <LogoName>PavelTube</LogoName>
              </LogoBlock>
            </Link>
          )}
          <Search>
            <Input placeholder="Search" />
            <SearchOutlinedIcon />
          </Search>
          <SearchMobile>
            {!isSearch && (
              <SearchOutlinedIcon
                onClick={() => {
                  setIsSearch(true);
                }}
              />
            )}
            {isSearch && (
              <SearchMobileMenu onBlur={() => setIsSearch(false)}>
                <Input placeholder="Search" ref={searchMobileRef} />
                <SearchOutlinedIcon />
              </SearchMobileMenu>
            )}
          </SearchMobile>
          {!user && (
            <Link to="signin">
              <UserMobile>
                <AccountCircleOutlinedIcon />
              </UserMobile>
            </Link>
          )}
          {user ? (
            <User>
              <VideoCallOutlinedIcon
                onClick={() => setOpen(true)}
                style={{ cursor: "pointer" }}
              />
              <Avatar src={user.img} />
              {user.name}
              <LogoutIcon
                onClick={handleLogout}
                style={{ cursor: "pointer" }}
              />
            </User>
          ) : (
            <>
              {!isSearch && (
                <Link to="signin" style={{ textDecoration: "none" }}>
                  <ButtonMenu>
                    <AccountCircleOutlinedIcon />
                    SIGN IN
                  </ButtonMenu>
                </Link>
              )}
            </>
          )}
        </Wrapper>
      </Container>
      {open && <Upload setOpen={setOpen} open={open} />}
    </>
  );
};

export default NavBar;
