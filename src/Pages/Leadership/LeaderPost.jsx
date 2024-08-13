import React from "react";
import styled from "styled-components";
import { Flex } from "../../components/Utlis";
import HeadPost from "../../components/Leader/post/HeadPost";
import LeaderShPost from "../../components/Leader/post/LeaderShPost";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const LeaderPos = () => {
  return (
    <Div>
      <HeadPost />
      <LeaderShPost/>
    </Div>
  );
};

export default LeaderPos;
