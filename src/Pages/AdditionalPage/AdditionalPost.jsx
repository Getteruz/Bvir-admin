import React from "react";
import styled from "styled-components";
import { Flex } from "../../components/Utlis";
import HeadPost from "../../components/AdditionalPage/post/HeadPost";
import AdditionalPost from "../../components/AdditionalPage/post/AdditionalPost";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const AdditionalPagePost = () => {
  return (
    <Div>
      <HeadPost />
      <AdditionalPost />
    </Div>
  );
};

export default AdditionalPagePost;
