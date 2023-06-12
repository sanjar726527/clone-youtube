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
  const [value, setValue] = useState({
    // id: comments.length + 1,
    // avatar:
    //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5SQntNi68ASSiKFpRVzQOMfJCx5aYevH69w&usqp=CAU",
    // name: `User ${comments.length + 1}`,
    // date: "11-12-2015",
    // text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, ex laboriosam ipsam aliquam voluptatem perferendis provident modi, sequi tempore reiciendis quod, optio ullam cumque? Quidem numquam sint mollitia totam reiciendis?",
  });
  const [comments, setComments] = useContext(Context);

  // useEffect(() => {
  //   const res = axios
  //     .post("http://localhost:3002/comments")
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       {
  //         console.log(err);
  //       }
  //     });
  // }, []);
  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(value);
  };
  return (
    <Container>
      <NewComment>
        <Input
          value={value}
          onChange={(e) => handleChange(e)}
          placeholder="Add a comment..."
        />
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </NewComment>
      <Comment />
    </Container>
  );
};

export default Comments;
