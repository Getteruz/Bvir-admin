import React from "react";
import { Flex } from "../../components/Utlis";
import styled from "styled-components";
import Head from "../../components/OurVeterans/get/Head";
import OurVeterans from "../../components/OurVeterans/get/Veterans";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const OurVeteransGet = () => {
  return (
    <Div>
      <Head />
      <OurVeterans />
    </Div>
  );
};

export default OurVeteransGet;
