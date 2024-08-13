import React from "react";
import { Flex } from "../../components/Utlis";
import styled from "styled-components";
import RegDoc from "../../components/RegDocument/get/RegDoc";
import Head from "../../components/RegDocument/get/Head";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const RegDocumGet = () => {
  return (
    <Div>
      <Head />
      <RegDoc/>
    </Div>
  );
};

export default RegDocumGet;
