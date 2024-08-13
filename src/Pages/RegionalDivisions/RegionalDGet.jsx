import React from "react";
import { Flex } from "../../components/Utlis";
import styled from "styled-components";
import Head from "../../components/RegionalDivisions/get/Heaad";
import RegionalDGet from "../../components/RegionalDivisions/get/RegionalDGet";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const RegionalDivisonGet = () => {
  return (
    <Div>
      <Head />
      <RegionalDGet />
    </Div>
  );
};

export default RegionalDivisonGet;
