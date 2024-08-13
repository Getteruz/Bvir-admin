import React from "react";
import styled from "styled-components";
import { Flex } from "../../components/Utlis";
import Head from "../../components/FastNews/get/Head";
import FastNewGet from "../../components/FastNews/get/FastNewGet";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const FastNewsGet = () => {
  return (
    <Div>
      <Head />
      <FastNewGet />
    </Div>
  );
};

export default FastNewsGet;
