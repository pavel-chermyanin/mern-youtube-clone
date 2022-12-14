import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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

const Comments = ({ videoId }) => {
  const { user } = useSelector((state) => state.user);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comments/${videoId}`);
        setComments(res.data);
      } catch (error) {}
    };
    fetchComments();
  }, [videoId]);
  return (
    <Container>
      <NewComment>
        <Avatar src={user.img} />
        <Input placeholder="Add a comment..." />
      </NewComment>
      {comments.map((comment) => (
        <Comment comment={comment} key={comment._id} />
      ))}
    </Container>
  );
};

export default Comments;
