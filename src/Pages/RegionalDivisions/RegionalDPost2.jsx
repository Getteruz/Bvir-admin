import React from "react";
import { Flex } from "../../components/Utlis";
import styled from "styled-components";
import HeadPost from "../../components/RegionalDivisions/Post/Head";
import RegionalPost2 from "../../components/RegionalDivisions/Post/RegionalPost2";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const RegionalDPost2= () => {
  return (
    <Div>
      <HeadPost/>
      <RegionalPost2/>
    </Div>
  );
};

export default RegionalDPost2;
