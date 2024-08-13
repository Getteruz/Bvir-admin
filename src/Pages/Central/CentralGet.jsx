import React from "react";
import styled from "styled-components";
import { Flex } from "../../components/Utlis";
import Header from "../../components/CentralApp/get/Header";
import CentralGet from "../../components/CentralApp/get/CentralGet";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const CentralAppGet = () => {
  return (
    <Div>
      <Header />
      <CentralGet />
    </Div>
  );
};

export default CentralAppGet;
