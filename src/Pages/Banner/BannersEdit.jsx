import React from "react";
import styled from "styled-components";
import { Flex } from "../../components/Utlis";
import Head from "../../components/banner/edit/Head";
import BannerEdit from "../../components/banner/edit/BannerEdit";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const BannersEdit = () => {
  return (
    <Div>
      <Head />
      <BannerEdit />
    </Div>
  );
};

export default BannersEdit;
