import React from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { ChannelImage } from "../components/Card";
import Comments from "../components/Comments";
import Card from '../components/Card'


const Container = styled.div`
  display: flex;
  gap: 24px;
  padding: 0 15px;
`;
const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;
const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;
const Hr = styled.hr`
  border: 0.5 solid ${({ theme }) => theme.soft};
  margin: 15px 0;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Recommendation = styled.div`
  flex: 2;
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Channelnfo = styled.div`
  display: flex;
  gap: 20px;
`;
const ChannelImg = styled(ChannelImage)``;
const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.span`
  font-weight: 500;
`;
const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;
const Descrition = styled.p`
  font-size: 14px;
`;
const Subscribe = styled.button`
  background-color: #cc1a00;
  color: #fff;
  font-weight: 500;
  border: none;
  border-radius:3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;
const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height={300}
            src="https://www.youtube.com/embed/yIaXoop8gl4"
            title="React Video Sharing App UI Design | Youtube UI Clone with React"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoWrapper>
        <Title>Test Title</Title>
        <Details>
          <Info>7,567,565 views Jun 22, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon />
              123
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon />
              dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon />
              share
            </Button>
            <Button>
              <AddTaskOutlinedIcon />
              save
            </Button>
            {/* <Button>
              <ThumbDownIcon />
            </Button>
            <Button>
              <ThumbUpIcon />
            </Button> */}
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <Channelnfo>
            <ChannelImg src="https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-48.jpg" />
            <ChannelDetail>
              <ChannelName>Pavel dev</ChannelName>
              <ChannelCounter>200K subscribers</ChannelCounter>
              <Descrition>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium quod qui voluptatem amet ipsum quidem quos
                exercitationem reiciendis accusamus voluptas placeat, cum
                nesciunt neque sed provident aliquam iusto modi enim unde
                inventore assumenda obcaecati iure quibusdam? Ratione nam
                dolores veniam maxime nostrum, esse eaque itaque, eveniet
                aspernatur voluptatem doloribus ab expedita totam. Dolores
                facilis quod eius molestia
              </Descrition>
            </ChannelDetail>
          </Channelnfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Comments/>
      </Content>
      <Recommendation>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
      </Recommendation>
    </Container>
  );
};

export default Video;
