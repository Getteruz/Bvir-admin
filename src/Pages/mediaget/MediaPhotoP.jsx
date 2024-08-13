import React from "react";
import styled from "styled-components";
import { Flex } from "../../components/Utlis.js";
import HeadPost from "../../components/mediagalary/post/photo/HeadPost.jsx";
import PhotoPost from "../../components/mediagalary/post/photo/PhotoPost.jsx";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const MediaPhotoP = () => {
  return (
    <Div>
      <HeadPost />
      <PhotoPost />
    </Div>
  );
};

export default MediaPhotoP;
