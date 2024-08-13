import React from "react";
import HeadPost from "../../components/communication/post/HeadPost";
import Communication from "../../components/communication/post/Communication";
import { Flex } from "../../components/Utlis";
import styled from "styled-components";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const CommunicationTools = () => {
  return (
    <Div>
      <HeadPost />
      <Communication />
    </Div>
  );
};

export default CommunicationTools;
