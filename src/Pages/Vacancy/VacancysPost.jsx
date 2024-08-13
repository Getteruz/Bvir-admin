import React from "react";
import { Flex } from "../../components/Utlis";
import styled from "styled-components";
import HeadPost from "../../components/vacancy/post/HeadPost";
import VacancyPost from "../../components/vacancy/post/VacancyPost";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const VacancysPost= () => {
  return (
    <Div>
      <HeadPost />
      <VacancyPost/>
    </Div>
  );
};

export default VacancysPost;
