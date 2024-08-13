import React from "react";
import { Flex } from "../Utlis";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Language = styled(Flex)`
  border-radius: 3px;
  border: 1px solid #e5e6e6;
  background: #f2f3f4;
  width: 1038px;
  height: 32px;
  flex-shrink: 0;
  padding: 0px 0px 0px 15px;
`;
const LangBtn = styled(Flex)`
  text-align: center;
  font-family: Overpass;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 7px 15px;
`;
const Label1 = styled.p`
  color: #444;
  font-family: Overpass;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.24px;
`;

const Content = styled(Flex)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const LangBox = () => {
  const [num, setNum] = React.useState(1);

  return (
    <Content>
      <Label1>Kiritilayotgan ma’lumot uchun tilni tanlang</Label1>
      <Language>
        <Link to={""}>
          <LangBtn
            onClick={() => setNum(1)}
            className={num === 1 ? "leadLangActive" : null}
          >
            O'zbekcha
          </LangBtn>
        </Link>
        <Link to={"ru"}>
          <LangBtn
            onClick={() => setNum(2)}
            style={{
              borderLeft: "1px solid #E5E6E6",
              borderRight: "1px solid #E5E6E6",
            }}
            className={num === 2 ? "leadLangActive" : null}
          >
            Русский
          </LangBtn>
        </Link>
        <Link to={"en"}>
          <LangBtn
            onClick={() => setNum(3)}
            className={num === 3 ? "leadLangActive" : null}
          >
            English
          </LangBtn>
        </Link>
      </Language>
    </Content>
  );
};

export default LangBox;
