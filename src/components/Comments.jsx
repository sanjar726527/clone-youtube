import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Comment from "./Comment";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import { Context } from "../context/Context";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
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
  const [value, setValue] = useState("");
  const [comments, setComments] = useContext(Context);

  const [comment, setComment] = useState({});

  useEffect(() => {
    const res = axios
      .post("http://localhost:3002/comments", comment)
      .then((data) => {
        Click();
        console.log(data);
      })
      .catch((err) => {
        {
          console.log(err);
        }
      });
  }, []);
  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(value);
  };
  const Click = (comments) => {
    setComment({
      id: `${comments.length} + 1`,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5SQntNi68ASSiKFpRVzQOMfJCx5aYevH69w&usqp=CAU",
      name: "John Doe",
      date: "1 day ago",
      text: `${value}`,
    });
    setValue("");
  };

  return (
    <Container>
      <NewComment>
        <Input
          value={value}
          onChange={(e) => handleChange(e)}
          placeholder="Add a comment..."
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={() => Click(comments)}
        >
          Send
        </Button>
      </NewComment>
      <Comment />
    </Container>
  );
};

export default Comments;
