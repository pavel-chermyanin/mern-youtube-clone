import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 300px;
  margin-bottom: 45px;
  width: 100%;
  cursor: pointer;
  display: ${(props) => props.type ==='sm' && 'flex'};
`;
 const Image = styled.img`
  height: 200px;
  width: 100%;
  cursor: pointer;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

export const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;
const Texts = styled.div``;
const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color:${({theme}) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 16px;
  color: ${({ theme }) => theme.textSoft};
  margin: 10px 0;
`;
const Info = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({type}) => {
  return (
    <Link to='/video/test' style={{textDecoration: 'none'}}>
      <Container type={type}>
        <Image src="https://img.desktopwallpapers.ru/rocks/pics/wide/1920x1200/27640f370156a0e0ae3ee9608fc8480a.jpg" />
        <Details>
          <ChannelImage src="https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-48.jpg" />
          <Texts>
            <Title>Test</Title>
            <ChannelName>Pavel dev</ChannelName>
            <Info>660,908 views 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
