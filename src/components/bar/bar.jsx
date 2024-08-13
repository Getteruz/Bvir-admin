import React from "react";
import { Flex } from "../Utlis";
import styled from "styled-components";
import { Logo2 } from "../../assets/img/img";
import { bar } from "../../constant/sidebar";
import "./bar.css";
import { Link, useLocation } from "react-router-dom";
const Content = styled(Flex)`
  border-radius: 2px;
  background: rgba(186, 186, 186, 0.1);
  backdrop-filter: blur(52px);
  width: 273px;
  padding: 15px 25px 44px 28px;
  flex-direction: column;
  gap: 31px;
  overflow-x: hidden;
  overflow-y: scroll;
  height: 100vh;
`;
const Logos = styled(Flex)`
  gap: 10px;
  align-items: flex-end;
`;
const Text1 = styled(Flex)`
  color: #444;
  font-family: Overpass;
  font-size: 12px;
  font-style: normal;
  font-weight: 800;
  line-height: 15px; /* 125% */
  letter-spacing: 0.12px;
  text-transform: uppercase;
  width: 152px;
`;
const Top = styled(Flex)`
  flex-direction: column;
  gap: 30px;
`;
const Title = styled.p`
  color: rgba(68, 68, 68, 0.8);
  font-family: Overpass;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.75px;
`;
const Bottom = styled(Flex)`
  flex-direction: column;
  gap: 20px;
  margin-bottom: 63px;
`;
const List = styled(Flex)`
  flex-direction: column;
  gap: 4px;
`;
const Items = styled.ul`
  display: flex;
  flex-direction: column;
`;
const Text = styled.p`
  color: rgba(68, 68, 68, 0.6);
  font-family: Overpass;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.75px;
`;
const Item = styled.li`
  padding: 8px 10px;
  width: 220px;
  color: #444;
  font-family: Overpass;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.75px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 3px;
  cursor: pointer;
`;
const Setings = styled(Flex)`
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;
const Bar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <Content>
      <Link to={""}>
        <Logos style={{ cursor: "pointer" }}>
          <img src={Logo2} alt="" />
          {/* <Text1>Qishloq xo'jaligida xizmatlar ko'rsatish agentligi</Text1> */}
        </Logos>
      </Link>
      <Bottom>
        <Link to={"/dash"}>
          <Title style={{ cursor: "pointer" }}>Bosh sahifa</Title>
        </Link>
        {bar?.map(e => (
          <List key={e.id}>
            <Text>{e.title}</Text>
            <Items>
              {e.items.map(item => (
                <Link
                  to={item.path}
                  onClick={() => console.log(item.path)}
                  key={e.id}
                >
                  <Item className={pathname == item.path ? "active" : null}>
                    <img src={item.img} alt="" />
                    {item.text}
                  </Item>
                </Link>
              ))}
            </Items>
          </List>
        ))}
      </Bottom>
      {/* <Setings>
        <img src={SetIcon} alt="" />
        Sozlamalar
      </Setings> */}
    </Content>
  );
};

export default Bar;
