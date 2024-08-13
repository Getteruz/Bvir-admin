import React from "react";
import styled from "styled-components";
import { Flex } from "../../components/Utlis";
import HeadPost from "../../components/mediagalary/post/video/HeadPost";
import VideoPost from "../../components/mediagalary/post/video/videoPost";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const MediaVideoP = () => {
  return (
    <Div>
      <HeadPost />
      <VideoPost />
    </Div>
  );
};

export default MediaVideoP;
