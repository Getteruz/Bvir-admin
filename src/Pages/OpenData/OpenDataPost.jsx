import React from "react";
import { Flex } from "../../components/Utlis";
import styled from "styled-components";
import HeadPost from "../../components/OpenData/post/HeadPost";
import ODataPost from "../../components/OpenData/post/ODataPost";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const OpenDataPost = () => {
  return (
    <Div>
      <HeadPost />
      <ODataPost />
    </Div>
  );
};

export default OpenDataPost;
