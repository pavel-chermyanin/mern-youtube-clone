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
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { dislike, fetchStart, fetchSuccess, like } from "../redux/videoSlice";
import { format } from "timeago.js";
import { SpinnerCircular } from "spinners-react";
import { subscription } from "../redux/userSlice";

const Container = styled.div`
  display: flex;
  gap: 24px;
  padding: 0 15px;
`;
const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div`
  width: 100%;
`;
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
  flex: 4;
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
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;
const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
const VideoFrame = styled.video`
  max-height: 720px;
  width: 100%;
  object-fit: cover;
`;


const Video = () => {
  const { user } = useSelector((state) => state.user);
  const { currentVideo, loading } = useSelector((state) => state.video);
  const dispatch = useDispatch();

  const path = useLocation().pathname.split("/")[2];
  const [channel, setChannel] = useState({});

  const handleLike = async () => {
    await axios.put(`/users/like/${currentVideo._id}`);
    dispatch(like(user._id))
  };
  const handleDislike = async () => {
    await axios.put(`/users/dislike/${currentVideo._id}`);
    dispatch(dislike(user._id));
  };
  const handleSub = async () => {
    console.log(channel._id);
    user.subscribedUsers.includes(channel._id)
      ? await axios.put(`/users/unsub/${channel._id}`)
      : await axios.put(`/users/sub/${channel._id}`);
    
    dispatch(subscription(channel._id));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchStart());
        const videoRes = await axios.get(`/videos/find/${path}`);
        const channelRes = await axios.get(
          `/users/find/${videoRes.data.userId}`
        );

        setChannel(channelRes.data);
        dispatch(fetchSuccess(videoRes.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [path, dispatch]);

  if (loading) {
    return (
      <SpinnerWrapper>
        <SpinnerCircular size={100} color="red" secondaryColor="#181818" />;
      </SpinnerWrapper>
    );
  }
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <VideoFrame src={currentVideo.videoUrl}/>
        </VideoWrapper>
        <Title>{currentVideo.title}</Title>
        <Details>
          <Info>
            {currentVideo.views} views {format(currentVideo.createdAt)}
          </Info>
          <Buttons>
            <Button onClick={handleLike}>
              {currentVideo.likes?.includes(user._id) ? (
                <>
                  <ThumbUpIcon />
                  {currentVideo.likes?.length}
                </>
              ) : (
                <>
                  <ThumbUpOutlinedIcon />
                  {currentVideo.likes?.length}
                </>
              )}
            </Button>
            <Button onClick={handleDislike}>
              {currentVideo.dislikes?.includes(user._id) ? (
                <>
                  <ThumbDownIcon />
                  dislike
                </>
              ) : (
                <>
                  <ThumbDownOffAltOutlinedIcon />
                  dislike
                </>
              )}
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
            <ChannelImg src={channel.img} />
            <ChannelDetail>
              <ChannelName>{channel.name}</ChannelName>
              <ChannelCounter>{channel.subscribers} subscribers</ChannelCounter>
              <Descrition>{currentVideo.desc}</Descrition>
            </ChannelDetail>
          </Channelnfo>
          <Subscribe onClick={handleSub}>
            {user.subscribedUsers?.includes(channel._id)
              ? "SUBSCRIBED"
              : "SUBSCRIBE"}
          </Subscribe>
        </Channel>
        <Comments videoId={currentVideo._id}/>
      </Content>
      <Recommendation>
        {/* <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" /> */}
      </Recommendation>
    </Container>
  );
};

export default Video;
