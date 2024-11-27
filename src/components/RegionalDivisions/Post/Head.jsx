import React from "react";
import styled from "styled-components";
import {
  ArrowL,
  ArrowR,
  Cencel,
  Priceteg,
  Redo,
  Save,
  Shield,
  User,
} from "../../../assets/img/img.js";
import { Flex } from "../../Utlis.js";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addElem } from "../../../config/reigional2.js";
import axios from "axios";
const Header1 = styled.header`
  background: #f2f3f4;
  width: 100% !important;
  padding: 26px 91px 26px 35px;
`;
const Nav = styled.nav`
  width: 100% !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled(Flex)`
  gap: 15px;
  align-items: center;
`;
const Arrows = styled(Flex)`
  gap: 10px;
  align-items: center;
`;
const Arrow = styled.img`
  cursor: pointer;
`;
const Tittle = styled.p`
  color: #444;
  text-align: center;
  font-family: Overpass;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.26px;
  opacity: 0.6;
`;
const Right = styled(Flex)`
  align-items: center;
  gap: 40px;
`;
const Btns = styled(Flex)`
  gap: 28px;
  align-items: center;
`;
const Icon = styled.img`
  cursor: pointer;
`;
const Actions = styled(Flex)`
  gap: 20px;
`;
const Action = styled(Flex)`
  cursor: pointer;
  color: #444;
  font-family: Overpass;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.26px;
  gap: 5px;
  align-items: center;
`;
const HeadPost = () => {
  const { reigional2 } = useSelector(addElem);
  const navigate = useNavigate();

  const click = async () => {
    console.log(reigional2);
    try {
      await axios
        .post(
          "https://api.agroxizmatlar.uz/territorial-management",
          reigional2,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.status === 201) {
            alert("malumot qo'shildi");
            navigate("/dash/regdivison");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Header1>
      <div className="container2">
        <Nav>
          <Left>
            <Arrows>
              <Arrow src={ArrowR} onClick={() => navigate(-1)} />
              <Arrow src={ArrowL} onClick={() => navigate(+1)} />
            </Arrows>
            <Tittle>Bosh sahifa</Tittle>
          </Left>
          <Right>
            <Btns>
              <Icon
                src={Redo}
                onClick={() => window.location.reload()}
                alt=""
              />
              <Icon src={Priceteg} alt="" />
              <Icon src={Shield} alt="" />
            </Btns>
            <Actions>
              {/* <Action>
                <img src={Edit2} alt="" />
                Tahrirlash
              </Action> */}
              <Link to="/dash/regdivison">
                <Action>
                  <img src={Cencel} alt="" />
                  Bekor qilish
                </Action>
              </Link>
              <Action onClick={() => click()}>
                <img src={Save} alt="" />
                Saqalsh
              </Action>
            </Actions>
            <img src={User} />
          </Right>
        </Nav>
      </div>
    </Header1>
  );
};

export default HeadPost;
