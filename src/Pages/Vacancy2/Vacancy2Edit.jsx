import React from "react";
import { Flex } from "../../components/Utlis";
import styled from "styled-components";
import HeadEdit from "../../components/vacancy2/edit/HeadEdit";
import VacancyEdit from "../../components/vacancy2/edit/VacancyEdit";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const Vacancy2Edit = () => {
  return (
    <Div>
      <HeadEdit />
      <VacancyEdit />
    </Div>
  );
};

export default Vacancy2Edit;
