import React from "react";
import { Flex } from "../../components/Utlis";
import styled from "styled-components";
import HeadPost from "../../components/Statistic/post/HeadPost";
import StatisticPost from "../../components/Statistic/post/StatisticPost";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const StatisticsPost = () => {
  return (
    <Div>
      <HeadPost />
      <StatisticPost />
    </Div>
  );
};

export default StatisticsPost;
