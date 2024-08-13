import React from "react";
import { Flex } from "../../components/Utlis";
import styled from "styled-components";
import HeadPost from "../../components/vacancy2/post/HeadPost";
import VacancyPost2 from "../../components/vacancy2/post/VacancyPost";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const VacancysPost2= () => {
  return (
    <Div>
      <HeadPost />
      <VacancyPost2/>
    </Div>
  );
};

export default VacancysPost2;
