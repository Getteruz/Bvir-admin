import React from "react";
import { Flex } from "../../components/Utlis";
import styled from "styled-components";
import HeadPost from "../../components/Leader/edit/HeadPost";
import LeaderShEdit from "../../components/Leader/edit/LeaderShEdit";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const LeaderEdit = () => {
  return (
    <Div>
      <HeadPost />
      <LeaderShEdit />
    </Div>
  );
};

export default LeaderEdit;
