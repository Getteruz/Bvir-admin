import React from "react";
import { Flex } from "../../components/Utlis";
import styled from "styled-components";
import HeadEdit from "../../components/news/edit/HeadEdit";
import NewEdit from "../../components/news/edit/NewEdit";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const NewesEdit = () => {
  return (
    <Div>
      <HeadEdit />
      <NewEdit />
    </Div>
  );
};

export default NewesEdit;
