import React from "react";
import styled from "styled-components";
import { Flex } from "../../components/Utlis";
import Head from "../../components/banner/get/Head";
import BannerGet from "../../components/banner/get/BannerGet";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const BannersGet = () => {
  return (
    <Div>
      <Head />
      <BannerGet/>
    </Div>
  );
};

export default BannersGet;
