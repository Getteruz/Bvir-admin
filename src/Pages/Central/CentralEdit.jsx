import React from "react";
import styled from "styled-components";
import { Flex } from "../../components/Utlis.js";
import CentralEdit from "../../components/CentralApp/edit/CentrallMap.jsx";
import HeadPost from "../../components/CentralApp/edit/Head.jsx";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const CentralEd = () => {
  return (
    <Div>
      <HeadPost />
      <CentralEdit/>
    </Div>
  );
};

export default CentralEd;
