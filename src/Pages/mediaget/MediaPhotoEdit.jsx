import React from "react";
import styled from "styled-components";
import { Flex } from "../../components/Utlis.js";
import HeadEdit from "../../components/mediagalary/post/photedit/HeadEdit.jsx";
import PhotoEdit from "../../components/mediagalary/post/photedit/PhotoEdit.jsx";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const MediaPhotoEdit = () => {
  return (
    <Div>
      <HeadEdit />
      <PhotoEdit />
    </Div>
  );
};

export default MediaPhotoEdit;
