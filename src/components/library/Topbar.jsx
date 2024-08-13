import React from "react";
import { Flex } from "../Utlis";
import styled from "styled-components";
const TopBar = styled(Flex)`
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  padding: 9px 91px 9px 39px;
  justify-content: space-between;
  width: 100%;
`;
const Text = styled.p`
  color: #888;
  font-family: Overpass;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.24px;
`;
const Text2 = styled.p`
  color: #bbb;
  text-align: right;
  font-family: Overpass;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.24px;
`;
const Texts = styled(Flex)`
  align-items: center;
  gap: 6px;
`;
const Topbar = ({ text1, text2 }) => {
  return (
    <TopBar>
      <Text>{`Bosh sahifa ${text1}` || "Bosh sahifa"}</Text>
      <Texts>
        <Text2>Oxirgi yangilangan sana:</Text2>
        <Text>{text2 || "2023 yil 24 oktyabr 13:43"}</Text>
      </Texts>
    </TopBar>
  );
};

export default Topbar;
