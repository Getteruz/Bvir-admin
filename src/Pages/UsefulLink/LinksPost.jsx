import React from "react";
import { Flex } from "../../components/Utlis";
import styled from "styled-components";
import HeadPost from "../../components/UsefulLink/post/HeadPost";
import LinkPost from "../../components/UsefulLink/post/LinkPost";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const LinksPost = () => {
  return (
    <Div>
      <HeadPost />
      <LinkPost />
    </Div>
  );
};

export default LinksPost;
