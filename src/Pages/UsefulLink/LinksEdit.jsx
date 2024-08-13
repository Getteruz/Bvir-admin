import React from "react";
import { Flex } from "../../components/Utlis";
import styled from "styled-components";
import HeadEdit from "../../components/UsefulLink/edit/HeadEdit";
import LinkEdit from "../../components/UsefulLink/edit/LinkEdit";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const LinksEdit = () => {
  return (
    <Div>
      <HeadEdit />
      <LinkEdit />
    </Div>
  );
};

export default LinksEdit;
