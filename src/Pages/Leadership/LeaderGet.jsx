import React from "react";
import styled from "styled-components";
import { Flex } from "../../components/Utlis";
import LeaderShipGet from "../../components/Leader/get/LeadersGet";
import Header from "../../components/Leader/get/Header";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const LeaderGet = () => {
  return (
    <Div>
      <Header />
      <LeaderShipGet />
    </Div>
  );
};

export default LeaderGet;
