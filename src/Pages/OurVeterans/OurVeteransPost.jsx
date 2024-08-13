import React from "react";
import { Flex } from "../../components/Utlis";
import styled from "styled-components";
import HeadPost from "../../components/OurVeterans/post/HeadPost";
import OurVeterans from "../../components/OurVeterans/post/OurVeterans";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const OurVeteransPost = () => {
  return (
    <Div>
      <HeadPost />
      <OurVeterans />
    </Div>
  );
};

export default OurVeteransPost;
