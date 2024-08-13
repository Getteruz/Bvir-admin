import React from "react";
import { Flex } from "../../components/Utlis";
import styled from "styled-components";
import HeadPost from "../../components/news/post/HeadPost";
import NewPost from "../../components/news/post/NewPost";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const NewsPost= () => {
  return (
    <Div>
      <HeadPost />
      <NewPost />
    </Div>
  );
};

export default NewsPost;
