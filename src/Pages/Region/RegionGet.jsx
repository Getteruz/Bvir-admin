import React from "react";
import { Flex } from "../../components/Utlis";
import styled from "styled-components";
import Head from "../../components/Region/get/Head";
import Region from "../../components/Region/get/Region";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const RegionGet = () => {
  return (
    <Div>
      <Head />
      <Region />
    </Div>
  );
};

export default RegionGet;
