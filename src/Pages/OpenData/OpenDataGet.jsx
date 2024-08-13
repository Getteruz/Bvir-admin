import React from "react";
import { Flex } from "../../components/Utlis";
import styled from "styled-components";
import Head from "../../components/OpenData/get/Head";
import ODataGet from "../../components/OpenData/get/ODataGet";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const OpenDataGet = () => {
  return (
    <Div>
      <Head />
      <ODataGet />
    </Div>
  );
};

export default OpenDataGet;
