import React from "react";
import { Flex } from "../../components/Utlis";
import styled from "styled-components";
import HeadEdit from "../../components/RegionalDivisions/edit/Head";
import RegionalEdit from "../../components/RegionalDivisions/edit/RegionalEdit";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const RegionalDEdit= () => {
  return (
    <Div>
      <HeadEdit/>
      <RegionalEdit/>
    </Div>
  );
};

export default RegionalDEdit;
