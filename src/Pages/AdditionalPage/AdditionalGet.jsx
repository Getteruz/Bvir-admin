import React from "react";
import styled from "styled-components";
import { Flex } from "../../components/Utlis";
import Head from "../../components/AdditionalPage/get/Head";
import AdditionalGet from "../../components/AdditionalPage/get/AdditionalGet";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const AdditionalPageGet = () => {
  return (
    <Div>
      <Head />
      <AdditionalGet />
    </Div>
  );
};

export default AdditionalPageGet;
