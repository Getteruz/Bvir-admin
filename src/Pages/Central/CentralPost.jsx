import React from "react";
import styled from "styled-components";
import { Flex } from "../../components/Utlis.js";
import HeadPost from "../../components/CentralApp/post/Head.jsx";
import CentralPost from "../../components/CentralApp/post/CentralPost.jsx";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const CentralPos = () => {
  return (
    <Div>
      <HeadPost />
      <CentralPost/>
    </Div>
  );
};

export default CentralPos;
