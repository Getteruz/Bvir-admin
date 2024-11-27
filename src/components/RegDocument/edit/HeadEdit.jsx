import React from "react";
import styled from "styled-components";
import { Flex } from "../../Utlis";
import {
  ArrowL,
  ArrowR,
  Cencel,
  Plus,
  Priceteg,
  Redo,
  Save,
  Shield,
  User,
} from "../../../assets/img/img";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { addElem } from "../../../config/opend";
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
  gap: 47px;
`;
const Btns = styled(Flex)`
  gap: 28px;
  align-items: center;
`;
const Icon = styled.img`
  cursor: pointer;
`;
const Add = styled(Flex)`
  gap: 5px;
  align-items: center;
  color: #444;
  font-family: Overpass;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.26px;
  margin-right: 6px;
`;
const HeadEdit = () => {
  const navigate = useNavigate();
  const { openD } = useSelector(addElem);
  const { id } = useParams();
  const click = async () => {
    await axios
      .patch(`https://api.agroxizmatlar.uz/document/${id}`, openD, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status === 200) {
          alert("malumot o'zgartirildi");
          navigate("/dash/regdoc");
        }
      });
  };
  return (
    <Header1>
      <div className="container2">
        <Nav>
          <Left>
            <Arrows>
              <Arrow src={ArrowR} />
              <Arrow src={ArrowL} />
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
            <Link to={"/dash/regdoc"}>
              <Add>
                <img src={Cencel} alt="" />
                Bekor qilish
              </Add>
            </Link>
            <Add onClick={() => click()}>
              <img src={Save} alt="" />
              Saqalsh
            </Add>
            <img src={User} />
          </Right>
        </Nav>
      </div>
    </Header1>
  );
};

export default HeadEdit;
