import React from "react";
import { Flex } from "../../components/Utlis";
import styled from "styled-components";
import HeadPost from "../../components/Region/post/HeadPost";
import Region from "../../components/Region/post/Region";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const RegionPost = () => {
  return (
    <Div>
      <HeadPost />
      <Region />
    </Div>
  );
};

export default RegionPost;
