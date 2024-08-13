import React from "react";
import styled from "styled-components";
import { Flex } from "../../components/Utlis";
import Header from "../../components/agency/get/Header";
import AgencyGet from "../../components/agency/get/AgencyGet";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
export const AgencyPageGet = () => {
  return (
    <>
      <Div>
        <Header />
        <AgencyGet />
      </Div>
    </>
  );
};
