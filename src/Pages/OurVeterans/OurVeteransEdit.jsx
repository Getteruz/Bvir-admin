import React from "react";
import { Flex } from "../../components/Utlis";
import styled from "styled-components";
import HeadPost from "../../components/OurVeterans/edit/HeadPost";
import OurVeteranEdit from "../../components/OurVeterans/edit/OurVeterans";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const OurVeteransEdit = () => {
  return (
    <Div>
      <HeadPost />
      <OurVeteranEdit />
    </Div>
  );
};

export default OurVeteransEdit;
