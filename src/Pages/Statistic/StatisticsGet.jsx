import React from "react";
import { Flex } from "../../components/Utlis";
import styled from "styled-components";
import Head from "../../components/Statistic/get/Head";
import StatisticGet from "../../components/Statistic/get/StatisticGet";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const StatisticsGet = () => {
  return (
    <Div>
      <Head />
      <StatisticGet />
    </Div>
  );
};

export default StatisticsGet;
