import React from "react";
import styled from "styled-components";
import { Flex } from "../../Utlis";
import Topbar from "../../library/Topbar";
import {
  Dote,
  Edit2,
  Eye,
  Facebook,
  Instagram,
  Plus,
  Telegram,
  Trash,
} from "../../../assets/img/img";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addElement } from "../../../config/reigional2";
const Content = styled(Flex)`
  flex-direction: column;
  gap: 13px;
  width: 100%;
`;
const Th = styled.th`
  overflow: hidden;
  color: #141414;
  text-overflow: ellipsis;
  font-family: Open Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 10px;
`;
const Text1 = styled.p`
  color: #141414;
  font-family: Overpass;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const Text2 = styled.p`
  color: #141414;
  font-family: Overpass;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px; /* 136.364% */
`;
const Text3 = styled.p`
  color: #141414;
  font-family: Overpass;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px; /* 136.364% */
  opacity: 0.7;
`;
const Text4 = styled.p`
  color: #141414;
  font-family: Open Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 155px;
`;
const Text5 = styled.p`
  overflow: hidden;
  color: #141414;
  text-overflow: ellipsis;
  font-family: Open Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
`;
const Table = styled.table`
  border-collapse: collapse;
  width: 100% !important;
  text-align: left;
`;
const Tr = styled.tr`
  text-align: left;
  border-radius: 3px;
  border: 1px solid #e5e6e6;
  background: #f5f5f6;
  height: 56px;
`;
const Tr1 = styled.tr`
  text-align: left;
`;
const Td = styled.td`
  /* display: flex; */
  text-align: left;
  padding-top: 5px;
  margin-bottom: 100px;
`;
const Box = styled(Flex)`
  width: 100%;
  padding-left: 39px;
  padding-right: 91px;
  gap: 14px;
`;
const Bar = styled.ul`
  display: flex;
  width: 139px;
  flex-direction: column;
  padding-top: 8px;
  height: 740px;
  padding-right: 19px;
  border-right: 1px solid #e7e3dd;
`;
const BarItem = styled.li`
  overflow: hidden;
  color: #000000;
  text-overflow: ellipsis;
  font-family: Overpass;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
  width: 120px;
  border-radius: 3px;
  padding: 8px 34px 5px 10px;
`;
const Bottom = styled(Flex)`
  width: 100%;
  flex-direction: column;
  gap: 18px;
`;
const SocialIcons = styled(Flex)`
  gap: 12px;
  align-items: center;
`;
const Div = styled(Flex)`
  gap: 3px;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  border-radius: 3px;
  background: #f5f5f6;
`;
const Icons = styled(Flex)`
  position: absolute;
  /* top: 0p/x; */
  right: 100px;
  gap: 19px;
  padding: 9px 15px 8px 15px;
  background-color: #fff;
  width: 116px;
  border-radius: 2px;
  background: #fff;
  box-shadow: 0px 6px 13px 0px rgba(0, 0, 0, 0.12);
`;
const RegionalDGet = () => {
  const [num, SetNum] = React.useState(1);
  const [data, setData] = React.useState([]);
  const [data2, setData2] = React.useState({});
  const [data3, setData3] = React.useState([]);
  const [modal, setModal] = React.useState(false);
  const [uid, setUid] = React.useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function get() {
    try {
      await axios
        .get("https://api.agroxizmatlar.uz/territorial-division")
        .then((res) => setData(res.data.items));
    } catch (error) {
      console.log(error);
    }
  }
  async function getOne(id) {
    try {
      await axios
        .get(`https://api.agroxizmatlar.uz/territorial-division/${id}`)
        .then((res) => {
          setData2(res.data);
          setData3(res.data.territorialManagements);
        });
    } catch (error) {
      console.log(error);
    }
  }
  React.useEffect(() => {
    get();
  }, []);
  const deleteFun = async (id) => {
    await axios
      .delete(`https://api.agroxizmatlar.uz/territorial-management/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status == 204) {
          alert("malumot o'chirildi");
          window.location.reload();
        }
      });
  };
  const deleteFun2 = async (id) => {
    await axios
      .delete(`https://api.agroxizmatlar.uz/territorial-division/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status == 204) {
          alert("malumot o'chirildi");
          window.location.reload();
        }
      });
  };

  return (
    <Content>
      <Topbar text1={"| Hududiy Bo'linmalar"} />
      <Box>
        <Bar>
          {data?.map((e) => (
            <BarItem
              key={e.id}
              onClick={() => {
                SetNum(e.id);
                getOne(e.id);
              }}
              className={num == e.id ? "baritemActive" : null}
            >
              {e.areaUz}
            </BarItem>
          ))}
        </Bar>
        {Object.keys(data2).length ? (
          <Bottom>
            <Table>
              <Tr1>
                <Th style={{ paddingLeft: "15px" }}>Hudud</Th>
                <Th>Aloqa vositalari</Th>
                <Th>Sayt</Th>
                <Th>Ijtimoiy tarmoqlari</Th>
                <Th>Menu</Th>
              </Tr1>
              <Tr>
                <Td style={{ paddingLeft: "15px" }}>
                  <Text1>{data2.areaUz}</Text1>
                </Td>
                <Td>
                  <Text2>{data2.phone}</Text2>
                </Td>
                <Td>
                  <Text2>{data2.website}</Text2>
                </Td>
                <Td>
                  <SocialIcons>
                    <Link to={data2.facebook}>
                      <img src={Facebook} alt="" />
                    </Link>
                    <Link to={data2.instagram}>
                      <img src={Instagram} alt="" />
                    </Link>
                    <Link to={data2.telegram}>
                      <img src={Telegram} alt="" />
                    </Link>
                  </SocialIcons>
                </Td>
                <Td>
                  <img
                    src={Dote}
                    alt=""
                    onClick={() => {
                      setUid(data2.id);
                      setModal(!modal);
                    }}
                  />
                  {data2.id == uid && modal ? (
                    <Icons>
                      <Link to={`/dash/reg/edit/${data2.id}`}>
                        <img style={{ cursor: "pointer" }} src={Edit2} alt="" />
                      </Link>
                      <img
                        style={{ cursor: "pointer" }}
                        src={Trash}
                        onClick={() => deleteFun2(data2.id)}
                        alt=""
                      />
                      <img style={{ cursor: "pointer" }} src={Eye} alt="" />
                    </Icons>
                  ) : null}
                </Td>
              </Tr>
            </Table>
            {data3.length > 0 ? (
              <Table>
                <Tr1>
                  <Th style={{ paddingLeft: "15px" }}>Ismi Familiyasi</Th>
                  <Th>Lavozim</Th>
                  <Th>Aloqa vositalari</Th>
                  <Th>Email</Th>
                  <Th>Ijtimoiy tarmoqlari</Th>
                  <Th>Menu</Th>
                </Tr1>
                {data3?.map((e) => (
                  <Tr key={e.id}>
                    <Td style={{ paddingLeft: "15px" }}>
                      <Text4>{e.firstNameUz + " " + e.lastNameUz}</Text4>
                    </Td>
                    <Td>
                      <Text3>{e.positionUz}</Text3>
                    </Td>
                    <Td>
                      <Text2>{e.phone}</Text2>
                    </Td>
                    <Td>
                      <Text2>www.agroxizmatlar@gmail.com</Text2>
                    </Td>
                    <Td>
                      <SocialIcons>
                        <Link to={e.facebook}>
                          <img src={Facebook} alt="" />
                        </Link>
                        <Link to={e.instagram}>
                          <img src={Instagram} alt="" />
                        </Link>
                        <Link to={e.telegram}>
                          <img src={Telegram} alt="" />
                        </Link>
                      </SocialIcons>
                    </Td>

                    <Td>
                      <img
                        src={Dote}
                        alt=""
                        onClick={() => {
                          setUid(e.id);
                          setModal(!modal);
                        }}
                      />
                      {e.id == uid && modal ? (
                        <Icons>
                          <Link to={`edit/${e.id}`}>
                            <img
                              style={{ cursor: "pointer" }}
                              src={Edit2}
                              alt=""
                            />
                          </Link>
                          <img
                            style={{ cursor: "pointer" }}
                            src={Trash}
                            onClick={() => deleteFun(e.id)}
                            alt=""
                          />
                          <img style={{ cursor: "pointer" }} src={Eye} alt="" />
                        </Icons>
                      ) : null}
                    </Td>
                  </Tr>
                ))}
              </Table>
            ) : null}
            <Link
              onClick={() => dispatch(addElement({ territorialDivision: num }))}
              to={"add"}
              style={{ width: "100%" }}
            >
              <Div>
                <img src={Plus} alt="" />
                Qosish
              </Div>
            </Link>
          </Bottom>
        ) : null}
      </Box>
    </Content>
  );
};

export default RegionalDGet;
