import React from "react";
import { Flex } from "../../components/Utlis";
import styled from "styled-components";
import HeadEdit from "../../components/Statistic/edit/HeadEdit";
import StatisticEdit from "../../components/Statistic/edit/StatisticEdit";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const StatisticsEdit = () => {
  return (
    <Div>
      <HeadEdit />
      <StatisticEdit />
    </Div>
  );
};

export default StatisticsEdit;
