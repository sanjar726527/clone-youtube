import { React, useContext, useState } from "react";
import styled from "styled-components";
import Comment from "./Comment";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Context } from "../context/Context";
import axios from "axios";

const Container = styled.div``;

const NewComment = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

const Comments = () => {
  const [comments, setComments] = useContext(Context);
  const [commentText, setCommentText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (commentText.trim() === "") return;

    try {
      const newComment = {
        id: comments.length + 1,
        text: commentText,
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5SQntNi68ASSiKFpRVzQOMfJCx5aYevH69w&usqp=CAU",
        name: "John Doe",
        date: "1 day ago",
      };
      const response = await axios.post(
        "http://localhost:3002/comments",
        newComment
      );
      setComments((prevComments) => [...prevComments, response.data]);
      setCommentText("");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };
  return (
    <Container>
      <NewComment onSubmit={handleSubmit}>
        <Input
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Add your comment..."
        />
        <Button variant="contained" endIcon={<SendIcon />} type="submit">
          Send
        </Button>
      </NewComment>
      <Comment />
    </Container>
  );
};

export default Comments;
