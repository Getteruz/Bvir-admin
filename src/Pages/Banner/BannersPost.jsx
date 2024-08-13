import React from "react";
import styled from "styled-components";
import { Flex } from "../../components/Utlis";
import Head from "../../components/banner/post/Head";
import BannerPost from "../../components/banner/post/BannerPost";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const BannersPost = () => {
  return (
    <Div>
      <Head />
      <BannerPost />
    </Div>
  );
};

export default BannersPost;
