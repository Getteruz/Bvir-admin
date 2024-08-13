import React from "react";
import styled from "styled-components";
import { Flex } from "../../components/Utlis";
import HeadPost from "../../components/FastNews/post/HeadPost";
import FastNewPost from "../../components/FastNews/post/FastNewsPost";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const FastNewsPost = () => {
  return (
    <Div>
      <HeadPost />
      <FastNewPost />
    </Div>
  );
};

export default FastNewsPost;
