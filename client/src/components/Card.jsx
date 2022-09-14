import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { format } from "timeago.js";

const Container = styled.div`
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  width: 100%;
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;
const Image = styled.img`
  height: ${(props) => (props.type === "sm" ? "120px" : "150px")};
  width: 100%;
  min-width: ${(props) => props.type === "sm" && "150px"};
  max-width: ${(props) => props.type === "sm" && "200px"};

  cursor: pointer;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => (props.type === "sm" ? "0" : "16px")};
  gap: 12px;
  flex-grow: 1;
  flex-shrink: ${(props) => props.type === "sm" && "0"};
`;

export const ChannelImage = styled.img`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;
const Texts = styled.div`
  flex-shrink: ${(props) => props.type === "sm" && "0"};
`;
const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 16px;
  color: ${({ theme }) => theme.textSoft};
  margin: 10px 0;
`;
const Info = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type, video }) => {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchChannel = async (id) => {
      try {
        const res = await axios.get(`/users/find/${id}`);
        setChannel(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChannel(video?.userId);
  }, [type]);
  return (
    <Link to={`/video/${video?._id}`} style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image type={type} src={video?.imgUrl} />
        <Details type={type}>
          <ChannelImage type={type} src={channel.img} />
          <Texts type={type}>
            <Title>{video?.title}</Title>
            <ChannelName>{channel.name}</ChannelName>
            <Info>
              {video?.views} views {format(video?.createdAt)}
            </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
