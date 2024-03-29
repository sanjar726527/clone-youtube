import React, { Profiler } from "react";
import styled from "styled-components";
import LamaTube from "../img/logo.png";
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

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link } from "react-router-dom";
const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  z-index: 12;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 65px 35px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-weight: bold;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;
  width: 100%;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Menu = ({ darkMode, setDarkMode }) => {
  const profilerCallback = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interaction
  ) => {
    console.log(
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interaction
    );
  };
  return (
    <Container>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "inherit",
          position: "absolute",
          padding: "15.7px 0px",
          width: "100%",
        }}
      >
        <Logo>
          <Img src={LamaTube} />
          YouTube
        </Logo>
      </Link>
      <Profiler id="profiler" onRender={profilerCallback}>
        <Wrapper>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Item>
              <HomeIcon />
              Home
            </Item>
          </Link>
          <Link
            to="/explore"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Item>
              <ExploreOutlinedIcon />
              Explore
            </Item>
          </Link>
          <Link
            to="/subscriptions"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Item>
              <SubscriptionsOutlinedIcon />
              Subscriptions
            </Item>
          </Link>
          <Hr />
          <Link
            to="/library"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Item>
              <VideoLibraryOutlinedIcon />
              Library
            </Item>
          </Link>
          <Link
            to="/history"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Item>
              <HistoryOutlinedIcon />
              History
            </Item>
          </Link>
          <Hr />
          <Link
            to="/music"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Item>
              <LibraryMusicOutlinedIcon />
              Music
            </Item>
          </Link>
          <Link
            to="/sports"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Item>
              <SportsBasketballOutlinedIcon />
              Sports
            </Item>
          </Link>
          <Link
            to="/gaming"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Item>
              <SportsEsportsOutlinedIcon />
              Gaming
            </Item>
          </Link>
          <Link
            to="/movies"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Item>
              <MovieOutlinedIcon />
              Movies
            </Item>
          </Link>
          <Link
            to="/news"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Item>
              <ArticleOutlinedIcon />
              News
            </Item>
          </Link>
          <Link
            to="/live"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Item>
              <LiveTvOutlinedIcon />
              Live
            </Item>
          </Link>
          <Hr />
          <Link
            to="/settings"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Item>
              <SettingsOutlinedIcon />
              Settings
            </Item>
          </Link>
          <Link
            to="/report"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Item>
              <FlagOutlinedIcon />
              Report
            </Item>
          </Link>
          <Link
            to="/help"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Item>
              <HelpOutlineOutlinedIcon />
              Help
            </Item>
          </Link>
          <Item onClick={() => setDarkMode(!darkMode)}>
            <SettingsBrightnessOutlinedIcon />
            {darkMode ? "Light" : "Dark"} Mode
          </Item>
        </Wrapper>
      </Profiler>
    </Container>
  );
};

export default Menu;
