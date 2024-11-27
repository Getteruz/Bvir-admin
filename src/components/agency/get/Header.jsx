import React from "react";
import styled from "styled-components";
import { Flex } from "../../Utlis";
import {
  ArrowL,
  ArrowR,
  Cencel,
  Edit2,
  Priceteg,
  Redo,
  Save,
  Shield,
  User,
} from "../../../assets/img/img";
import { Link, useNavigate } from "react-router-dom";
import { addElem } from "../../../config/agency-statis";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { editElement, showElem } from "../../../config/edit1";
const Header1 = styled.header`
  background: #f2f3f4;
  width: 100% !important;
  padding: 26px 91px 26px 35px;
  /* position: fixed; */
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
const Header = () => {
  const { agencyStatis } = useSelector(addElem);
  const dispatch = useDispatch();
  // const click = async () => {
  //   await axios
  //     .get("https://api.agroxizmatlar.uz/agency-statistic")
  //     .then(async (res) => {
  //       console.log(res.data);
  //       if (Object.keys(res?.data).length > 0) {
  //         axios.delete(
  //           `https://api.agroxizmatlar.uz/agency-statistic/${res?.data?.id}`
  //         );
  //       }
  //       setTimeout((e) => {
  //         axios
  //           .post(
  //             "https://api.agroxizmatlar.uz/agency-statistic",
  //             {
  //               allocatedSubsidies: agencyStatis.allocatedSubsidies * 1,
  //               detachedLandArea: agencyStatis.detachedLandArea * 1,
  //               greenhouseSubsidies: agencyStatis.greenhouseSubsidies * 1,
  //               rejected: agencyStatis.rejected * 1,
  //               solved: agencyStatis.solved * 1,
  //               uderReview: agencyStatis.uderReview * 1,
  //             },
  //             {
  //               withCredentials: true,
  //             }
  //           )
  //           .then((res) => {
  //             alert("malumot qoshildi");
  //           });
  //       }, 1000);
  //     });
  // };

  const click = async () => {
    await axios
      .patch(
        "https://api.agroxizmatlar.uz/agency-statistic/036a5886-8141-40b7-94f9-b5800d4cb0b2",

        {
          rejected: agencyStatis.rejected * 1,
          solved: agencyStatis.solved * 1,
          uderReview: agencyStatis.uderReview * 1,
          allocatedSubsidies: agencyStatis.allocatedSubsidies * 1,
          detachedLandArea: agencyStatis.detachedLandArea * 1,
          greenhouseSubsidies: agencyStatis.greenhouseSubsidies * 1,
         
        }
      )
      .then((res) => {
        if (res.status === 200) {
          alert("maluomot o'zgartirildi");
          window.location.reload();
        }
      });
  };
  const navigate = useNavigate();
  const { edit1 } = useSelector(showElem);
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
            {edit1 === false ? (
              <Add onClick={() => dispatch(editElement(true))}>
                <img src={Edit2} alt="" />
                Tahirlash
              </Add>
            ) : (
              <>
                <Link
                  onClick={() => {
                    dispatch(editElement(false));
                    window.location.reload();
                  }}
                >
                  <Add>
                    <img src={Cencel} alt="" />
                    Bekor qilish
                  </Add>
                </Link>
                <Link>
                  <Add
                    onClick={() => {
                      click();
                      dispatch(editElement(false));
                    }}
                  >
                    <img src={Save} alt="" />
                    Saqlash
                  </Add>
                </Link>
              </>
            )}

            <img src={User} />
          </Right>
        </Nav>
      </div>
    </Header1>
  );
};

export default Header;
