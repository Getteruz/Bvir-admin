import React from "react";
import styled from "styled-components";
import { Flex } from "../../components/Utlis.js";
import HeadEdit from "../../components/mediagalary/post/videoEdit/HeadEdit.jsx";
import VideoEdit from "../../components/mediagalary/post/videoEdit/videoEdit.jsx";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const MediaVideoEdit = () => {
  return (
    <Div>
      <HeadEdit />
      <VideoEdit />
    </Div>
  );
};

export default MediaVideoEdit;
