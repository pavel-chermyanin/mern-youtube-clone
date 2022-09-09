import React from "react";
import styled from "styled-components";
import { ChannelImage } from "./Card";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0;
`;
const Avatar = styled(ChannelImage)``;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;
const Date = styled.span`
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
  font-weight: 400;
  margin-left: 5px;
`;
const Text = styled.p`
  font-size: 14px;
  
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-48.jpg" />
      <Details>
        <Name>
          Pave dev <Date>1 day ago</Date>
        </Name>

        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis optio
          ratione eius illum sapiente earum consequuntur tenetur dolor!
          Perferendis, consequuntur{" "}
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
