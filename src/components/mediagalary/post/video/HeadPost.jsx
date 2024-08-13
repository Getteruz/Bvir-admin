import React from "react";
import styled from "styled-components";
import { Flex } from "../../../Utlis";
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
} from '../../../../assets/img/img.js' 
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addElem } from "../../../../config/videoGalery.js";
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
const PictureInput = styled.input`
  width: 256px;
  height: 40px;
  &::before {
    content: "Select some files";
    display: inline-block;
    background: linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt;
  }
  &::-webkit-file-upload-button {
    visibility: hidden;
  }
  &:active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
  }
`;
const HeadPost = () => {
  const { videoGalery } = useSelector(addElem);
  const navigate = useNavigate();

  const click = async () => {
    await axios
      .post("https://api.agroxizmatlar.uz/gallery", videoGalery, {
        withCredentials: true,
      })
      .then(res => {
        if (res.status == 201) {
          alert("malumot qowildi");
          navigate("/dash/galery/video");
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
            {/* <Add onClick={() => click()}>
              <img src={Plus} alt="" />
              Qo'shish
            </Add> */}
            <Add>
              <img src={Cencel} alt="" />
              Bekor qilish
            </Add>
            <Link>
              <Add onClick={() => click()}>
                <img src={Save} alt="" />
                Saqlash
              </Add>
            </Link>
            <img src={User} />
          </Right>
        </Nav>
      </div>
    </Header1>
  );
};

export default HeadPost;
