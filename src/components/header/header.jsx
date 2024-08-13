import React from "react";
import styled from "styled-components";
import { Logo } from "../../assets/img/img";
import { Flex } from "../Utls";
const Content = styled.div`
  padding: 12px 0px 10px 0px;
  background-color: #fff;
`;
const Nav = styled.nav`
  width: 100%;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;
const Left = styled(Flex)`
  gap: 104px;
  align-items: center;

`;
const Text1 = styled.h5`
  width: 226px;
  color: #444;
  font-family: Overpass;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px; /* 126.667% */
  letter-spacing: -0.75px;
  text-transform: uppercase;
`;
const Text2 = styled.p`
  color: #555;
  text-align: center;
  font-family: Overpass;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.36px;
`;
const UserType = styled.h6`
  color: #444;
  font-family: Overpass;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.28px;
`;
const UserID = styled.p`
  color: #444;
  font-family: Overpass;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Logos = styled(Flex)`
  gap: 4px;
`;
const Right = styled(Flex)`
  gap: 10px;
`;
const Img = styled.img`
  width: 42px;
  height: 42px;
`;
const Texts1 = styled(Flex)`
  flex-direction: column;
  gap: 3px;
`;
const Header = () => {
  return (
    <Content>
      <div className="container">
        <Nav>
          <Left>
            <Logos>
              <img src={Logo} alt="" />
              <Text1>Qishloq xo'jaligida xizmatlar ko'rsatish agentligi</Text1>
            </Logos>
            <Text2>Bosh sahifa</Text2>
          </Left>
          <Right>
            <Img src="" />
            <Texts1>
              <UserType>Админстрация</UserType>
              <UserID>id:981723</UserID>
            </Texts1>
          </Right>
        </Nav>
      </div>
    </Content>
  );
};

export default Header;
