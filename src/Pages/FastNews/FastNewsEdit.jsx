import React from "react";
import styled from "styled-components";
import { Flex } from "../../components/Utlis";
import HeadEdit from "../../components/FastNews/edit/HeadEdit";
import FastEd from "../../components/FastNews/edit/FastEd";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const FastNewsEdit = () => {
  return (
    <Div>
      <HeadEdit />
      <FastEd />
    </Div>
  );
};

export default FastNewsEdit;
