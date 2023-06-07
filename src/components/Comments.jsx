import React, { useState } from "react";
import styled from "styled-components";
import Comment from "./Comment";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

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
