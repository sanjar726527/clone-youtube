import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Context } from "../context/Context";
import axios from "axios";

const Container = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

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
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;
const Content = styled.div`
  display: flex;
  gap: 10px;
  flex: 1;
`;
const Comment = () => {
  const [comments, setComments] = useContext(Context);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get("http://localhost:3002/comments");
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchComments();
  }, [setComments]);

  return (
    <Container>
      {comments.map((comment, index) => (
        <Content key={index}>
          <Avatar src={comment.avatar} />
          <Details>
            <Name>
              {comment.name}
              <Date>{comment.date}</Date>
            </Name>
            <Text>{comment.text}</Text>
          </Details>
        </Content>
      ))}
    </Container>
  );
};

export default Comment;
