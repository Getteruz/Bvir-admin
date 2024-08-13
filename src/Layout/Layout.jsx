import React from "react";
import styled from "styled-components";
import { Flex } from "../components/Utlis";
import Bar from "../components/bar/bar";
import { Outlet } from "react-router-dom";
const Div = styled(Flex)``;
const Content = styled.div`
  /* background: #ededed; */
`;
const Layout = () => {
  return (
    <>
      <Content>
        <div className="container">
          <Div>
            {localStorage.getItem("token") ? (
              <>
                <Bar />
                <Outlet />
              </>
            ) : (
              (window.location.href = "/")
            )}
          </Div>
        </div>
      </Content>
    </>
  );
};

export default Layout;
