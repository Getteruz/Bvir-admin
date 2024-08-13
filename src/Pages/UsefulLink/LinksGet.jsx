import React from "react";
import { Flex } from "../../components/Utlis";
import styled from "styled-components";
import Head from "../../components/UsefulLink/get/Head";
import LinkGet from "../../components/UsefulLink/get/LinkGet";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const LinksGet = () => {
  return (
    <Div>
      <Head />
      <LinkGet />
    </Div>
  );
};

export default LinksGet;
