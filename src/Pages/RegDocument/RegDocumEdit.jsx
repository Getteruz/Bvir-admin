import React from "react";
import { Flex } from "../../components/Utlis";
import styled from "styled-components";
import HeadEdit from "../../components/RegDocument/edit/HeadEdit";
import RegEdit from "../../components/RegDocument/edit/RegEdit";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const RegDocumEdit = () => {
  return (
    <Div>
      <HeadEdit />
      <RegEdit />
    </Div>
  );
};

export default RegDocumEdit;
