import React from "react";
import styled from "styled-components";
import { Flex } from "../../components/Utlis";
import Head from "../../components/mediagalary/get/Head";
import MediaGet from "../../components/mediagalary/get/MediaGet.jsx";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const MediaGaleryGet = () => {
  return (
    <Div>
      <Head />
      <MediaGet />
    </Div>
  );
};

export default MediaGaleryGet;
