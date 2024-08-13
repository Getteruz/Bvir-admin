import React from "react";
import { Flex } from "../../components/Utlis";
import styled from "styled-components";
import VacEdit from "../../components/vacancy/edit/VacEdit";
import HeadEdit from "../../components/vacancy/edit/HeadEdit";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const VacancyEdit = () => {
  return (
    <Div>
      <HeadEdit />
      <VacEdit />
    </Div>
  );
};

export default VacancyEdit;
