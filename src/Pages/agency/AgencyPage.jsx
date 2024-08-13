import React from "react";
import styled from "styled-components";
import AgencyPost from "../../components/agency/post/AgencyPost";
import HeadPost from "../../components/agency/post/HeadPost";
import { Flex } from "../../components/Utlis";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
export const AgencyPagePost = () => {
  return (
    <>
      <Div>
        <HeadPost />
        <AgencyPost />
      </Div>
    </>
  );
};

