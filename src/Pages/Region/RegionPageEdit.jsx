import React from "react";
import { Flex } from "../../components/Utlis";
import styled from "styled-components";
import HeadEdit from "../../components/Region/edit/HeadPost";
import RegionEdit from "../../components/Region/edit/RegionEdit";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const RegionPageEdit = () => {
  return (
    <Div>
      <HeadEdit />
      <RegionEdit />
    </Div>
  );
};

export default RegionPageEdit;
