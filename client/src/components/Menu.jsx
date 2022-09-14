import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import logo from "../img/youtube-logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  flex: 2;
  flex-grow: 1;
  min-width: 200px;
  background-color: ${({ theme }) => theme.bg};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
  overflow-y: scroll;
  transition: all 0.3s ease-in-out;
  @media (max-width: 1024px) {
    position: fixed;
    z-index: 1;
    transform: ${(props) =>
      props.isOpen ? "translateX(0)" : "translateX(-150%)"};
  }
  @media (max-width: 450px) {
    width: 280px;
  }
`;
const Wrapper = styled.div`
  padding: 15px 20px;
`;
const LogoBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
  @media (max-width: 1024px) {
    margin-bottom: 0;
  }
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 10px;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;

export const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
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

  span {
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.textSoft};
  }
  @media (max-width: 1024px) {
    display: flex;
  }
`;
const WrapperTop = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1024px) {
    margin-bottom: 20px;
  }
`;

const Menu = ({ darkMode, setDarkMode, isOpenMenu, setIsOpenMenu }) => {
  const menuRef = useRef(null);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const hideMenu = (e) => {
      if (
        (isOpenMenu &&
          menuRef.current &&
          !menuRef.current.contains(e.target)) ||
        e.target.classList.contains(Item.styledComponentId)
      ) {
        setIsOpenMenu(false);
      }
    };

    document.body.addEventListener("click", hideMenu);
    return () => document.body.removeEventListener("click", hideMenu);
  }, [isOpenMenu]);

  useEffect(() => {
    if (isOpenMenu) document.body.style.overflowY = "hidden";
    return () => document.body.style.overflowY = "auto";
  }, [isOpenMenu]);

  return (
    <Container isOpen={isOpenMenu} ref={menuRef}>
      <Wrapper>
        <WrapperTop>
          <MenuButton
            onClick={(e) => {
              setIsOpenMenu(false);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </MenuButton>
          <Link to="/">
            <LogoBlock>
              <Img src={logo} />
              PavelTube
            </LogoBlock>
          </Link>
        </WrapperTop>
        <Link to="/">
          <Item>
            <HomeIcon />
            Home
          </Item>
        </Link>
        <Link to="trend">
          <Item>
            <ExploreOutlinedIcon />
            Explore
          </Item>
        </Link>
        <Link to="subscriptions">
          <Item>
            <SubscriptionsOutlinedIcon />
            Subcriptions
          </Item>
        </Link>
        <Hr />
        <Item>
          <LibraryMusicOutlinedIcon />
          Library
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          History
        </Item>
        <Hr />
        {!user && (
          <>
            <Login>
              Sign in to like videos, comment and subscribe
              <Link to="signin">
                <Button>
                  <AccountCircleOutlinedIcon />
                  SIGN IN
                </Button>
              </Link>
            </Login>
            <Hr />
          </>
        )}
        <Title>BEST OF PAVETUBE</Title>
        <Item>
          <VideoLibraryOutlinedIcon />
          Music
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          Gaming
        </Item>
        <Item>
          <MovieOutlinedIcon />
          Movies
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          Life
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          {darkMode ? "Light " : "Dark "}Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
