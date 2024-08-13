import React from "react";
import { Flex } from "../../components/Utlis";
import styled from "styled-components";
import RegPost from "../../components/RegDocument/post/RegPost";
import HeadPost from "../../components/RegDocument/post/HeadPost";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const RegDocumPost = () => {
  return (
    <Div>
      <HeadPost />
      <RegPost />
    </Div>
  );
};

export default RegDocumPost;
