import React from "react";
import { Flex } from "../../components/Utlis";
import styled from "styled-components";
import ODataEd from "../../components/OpenData/edit/ODataEd";
import HeadEdit from "../../components/OpenData/edit/HeadEdit";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const OpenDataEdit = () => {
  return (
    <Div>
      <HeadEdit />
      <ODataEd />
    </Div>
  );
};

export default OpenDataEdit;
