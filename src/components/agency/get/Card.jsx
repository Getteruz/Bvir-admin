import React from "react";
import styled from "styled-components";
import { Flex } from "../../Utlis";
const Content = styled(Flex)`
  padding: 20px 20px 34px 20px;
  border-radius: 2px;
  border: 1px solid #eaeaea;
  background: #fff;
  width: 250px;
  height: 90px;
  gap: 15px;
`;
const Texts = styled(Flex)`
  flex-direction: column;
`;
const Text1 = styled.p`
  color: #141f14;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.3px;
`;
const Text2 = styled.p`
  color: #141f14;
  font-family: Open Sans;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.3px;
  opacity: 0.4;
`;
const Card = ({ img, t1, t2 }) => {
  return (
    <Content>
      <img src={img} alt="" />
      <Texts>
        <Text1>{t1}</Text1>
        <Text2>{t2}</Text2>
      </Texts>
    </Content>
  );
};

export default Card;
