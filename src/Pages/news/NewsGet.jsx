import React from "react";
import { Flex } from "../../components/Utlis";
import styled from "styled-components";
import Head from "../../components/news/get/Head";
import NewGet from "../../components/news/get/NewGet";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const NewsGet = () => {
  return (
    <Div>
      <Head />
      <NewGet />
    </Div>
  );
};

export default NewsGet;
