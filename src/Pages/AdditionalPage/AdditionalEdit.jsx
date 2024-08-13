import React from "react";
import styled from "styled-components";
import { Flex } from "../../components/Utlis";
import HeadEdit from "../../components/AdditionalPage/edit/HeadEdit";
import AdditionalsEdit from "../../components/AdditionalPage/edit/AdditionalEdit";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const AdditionalEdit = () => {
  return (
    <Div>
      <HeadEdit />
      <AdditionalsEdit />
    </Div>
  );
};

export default AdditionalEdit;
