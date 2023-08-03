import axios from "axios";
import React, { Profiler, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Context } from "../context/Context";
import ReactPlayer from "react-player/youtube";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

// const Image = styled.video`
//   width: 100%;
//   height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
//   background-color: #999;
//   flex: 1;
// `;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 25px;
  border-radius: 20px;
`;

const Card = ({ type }) => {
  const [videos, setVideos] = useContext(Context);
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get("http://localhost:3002/videos");
        setVideos(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchComments();
  }, [setVideos]);

  return (
    <Cards>
      {videos.map((video, index) => (
        <Link
          to={`video/${video.id}`}
          style={{ textDecoration: "none" }}
          key={index}
        >
          <Container type={type} key={video.id}>
            <ReactPlayer
              url={`${video.channel}`}
              width={"400px"}
              height={"210px"}
              controls
            />
            <Details type={type}>
              <ChannelImage type={type} src={video.url} />
              <Texts>
                <Title>{video.title}</Title>
                <ChannelName>{video.author}</ChannelName>
                <Info>{video.views}</Info>
              </Texts>
            </Details>
          </Container>
        </Link>
      ))}
    </Cards>
  );
};

export default Card;
