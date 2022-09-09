import React from "react";
import styled from "styled-components";
import { ChannelImage } from "./Card";
import Comment from "./Comment";

const Container = styled.div``;
const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Avatar = styled(ChannelImage)``;
const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-48.jpg" />
        <Input placeholder="Add a comment..." />
      </NewComment>
      <Comment/>
      <Comment/>
      <Comment/>
    </Container>
  );
};

export default Comments;
