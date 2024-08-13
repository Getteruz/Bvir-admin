import React from "react";
import { Flex } from "../../components/Utlis";
import styled from "styled-components";
import Head from "../../components/vacancy/get/Head";
import VacancyGet from "../../components/vacancy/get/VacancyGet";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const VacancysGet = () => {
  return (
    <Div>
      <Head />
      <VacancyGet />
    </Div>
  );
};

export default VacancysGet;
