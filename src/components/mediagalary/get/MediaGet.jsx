import React from "react";
import styled from "styled-components";
import { Flex } from "../../Utlis";
import Topbar from "../../library/Topbar";
import axios from "axios";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
const Content = styled(Flex)`
  flex-direction: column;
  gap: 13px;
  width: 100%;
`;

const Box = styled(Flex)`
  width: 100%;
  padding-left: 39px;
  padding-right: 91px;
  flex-direction: column;
  gap: 18px;
`;

const Btns = styled(Flex)``;
const BtnType = styled(Flex)`
  border-radius: 2px;
  background: #ffffff;
  color: #000000;
  font-family: Overpass;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.24px;
  padding: 12px 30px;
`;
const MediaGet = () => {
  const location = useLocation();
  const path = location.pathname;
  console.log(path);
  return (
    <Content>
      <Topbar text1={"| Mediagalareya"} />
      <Box>
        <Btns>
          <Link to={""}>
            <BtnType
              style={
                path === "/dash/galery" 
                  ? { backgroundColor: "#6C9B31", color: "#fff" }
                  : null
              }
            >
              Fotogalereya
            </BtnType>
          </Link>
          <Link to={"video"}>
            <BtnType
              style={
                path === "/dash/galery/video"
                  ? { backgroundColor: "#6C9B31", color: "#fff" }
                  : null
              }
            >
              Videogalereya
            </BtnType>
          </Link>
        </Btns>
        <Outlet />
      </Box>
    </Content>
  );
};

export default MediaGet;
