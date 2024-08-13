import React from "react";
import { Flex } from "../../components/Utlis";
import styled from "styled-components";
import RegionalPost from "../../components/Region/post/Region";
import HeadPost from "../../components/RegionalDivisions/Post/Head";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const RegionalDPost= () => {
  return (
    <Div>
      <HeadPost/>
      <RegionalPost/>
    </Div>
  );
};

export default RegionalDPost;
