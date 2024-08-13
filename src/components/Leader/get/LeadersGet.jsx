import React from "react";
import styled from "styled-components";
import { Flex } from "../../Utlis";

import {
  Dote,
  Edit2,
  Eye,
  Facebook,
  Instagram,
  Mail,
  Phone,
  Telegram,
  Trash,
} from "../../../assets/img/img";
import axios from "axios";
import { Link } from "react-router-dom";
const Content = styled(Flex)`
  flex-direction: column;
  gap: 13px;
  width: 100%;
`;
const TopBar = styled(Flex)`
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  padding: 9px 91px 9px 39px;
  justify-content: space-between;
  width: 100%;
`;
const Text = styled.p`
  color: #888;
  font-family: Overpass;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.24px;
`;
const Text2 = styled.p`
  color: #bbb;
  text-align: right;
  font-family: Overpass;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.24px;
`;
const Texts = styled(Flex)`
  align-items: center;
  gap: 6px;
`;
const Box = styled(Flex)`
  width: 100%;
  padding-left: 39px;
  padding-right: 91px;
`;
const Th = styled.th`
  overflow: hidden;
  color: #141414;
  text-overflow: ellipsis;
  font-family: Overpass;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  /* padding: 8px; */
  text-align: left;
`;

const Div = styled(Flex)`
  display: flex;
  gap: 20px;
`;
const Img = styled.img`
  width: 43px;
  height: 52px;
  border: none !important;
`;
const Name = styled.p`
  color: rgb(20, 20, 20);
  font-family: Overpass;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 142px;
`;
const Text3 = styled.p`
  width: 209px;
  height: 36px;
  flex-shrink: 0;
  overflow: hidden;
  color: #141414;
  font-family: Overpass;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
  opacity: 0.7;
`;
const Task = styled(Flex)`
  color: #6c9b31;
  font-family: Overpass;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: underline;
`;
const Phone1 = styled(Flex)`
  gap: 10px;
  color: #141414;
  font-family: Overpass;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const SocialIcons = styled(Flex)`
  gap: 12px;
  align-items: center;
`;
const Div2 = styled(Flex)`
  gap: 23px;
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
  padding: 2px;
`;
const Tr1 = styled.tr`
  text-align: left;
`;
const Td = styled.td`
  /* display: flex; */
  text-align: left;
  padding-top: 5px;
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
const LeaderShipGet = () => {
  const [modal, setModal] = React.useState(false);
  const [response, setResponse] = React.useState([]);
  async function getInfo() {
    await axios
      .get(`https://api.agroxizmatlar.uz/management/management`)
      .then(res => {
        console.log(res.data.items);
        return setResponse(res.data.items);
      });
  }
  const [uid, setUid] = React.useState();

  React.useEffect(() => {
    getInfo();
  }, []);

  const deleteFun = async id => {
    await axios
      .delete(`https://api.agroxizmatlar.uz/management/${id}`, {
        withCredentials: true,
      })
      .then(res => {
        if (res.status == 204) {
          window.location.reload();
        }
      });
  };
  return (
    <Content>
      <TopBar>
        <Text>Bosh sahifa | Rahbariyat</Text>
        <Texts>
          <Text2>Oxirgi yangilangan sana:</Text2>
          <Text>2023 yil 24 oktyabr 13:43</Text>
        </Texts>
      </TopBar>
      <Box>
        <Table>
          <Tr1>
            <Th>Rasmi</Th>
            <Th>Ismi Familiyasi</Th>
            <Th>Lavozimi</Th>
            <Th>Vazifasi</Th>
            <Th>Aloqa vositalari</Th>
            <Th>Menu</Th>
          </Tr1>

          {response?.map(e => (
            <Tr>
              <Td>
                <Img src={e.url} />
              </Td>

              <Td>
                <Name>
                  {e.firstNameUz + " " + e.lastNameUz + " " + e.fatherNameUz}
                </Name>
              </Td>
              <Td>
                <Text3>{e.positionUz}</Text3>
              </Td>
              <Td>
                <Task>Vazifalari</Task>
              </Td>
              <Td>
                <Div2>
                  <Link to={`tel:${e.phone}`}>
                    <Phone1>
                      <img src={Phone} alt="" />
                      {e.phone}
                    </Phone1>
                  </Link>
                  <Phone1>
                    <img src={Mail} alt="" />
                    {e.gmail}
                  </Phone1>
                  <SocialIcons>
                    <Link to={e.facebook}>
                      <img
                        style={{ cursor: "pointer" }}
                        src={Facebook}
                        alt=""
                      />
                    </Link>
                    {""}
                    <Link to={e.instagram}>
                      <img
                        style={{ cursor: "pointer" }}
                        src={Instagram}
                        alt=""
                      />
                    </Link>{" "}
                    <Link to={e.telegram}>
                      <img
                        style={{ cursor: "pointer" }}
                        src={Telegram}
                        alt=""
                      />
                    </Link>{" "}
                  </SocialIcons>
                </Div2>
              </Td>
              <Td>
                <img
                  onClick={() => {
                    setUid(e.id);
                    setModal(!modal);
                  }}
                  style={{ paddingLeft: "15px" }}
                  src={Dote}
                  alt=""
                />
                {e.id == uid && modal ? (
                  <Icons>
                    <Link to={`edit/${e.id}`}>
                      <img style={{ cursor: "pointer" }} src={Edit2} alt="" />
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
      </Box>
    </Content>
  );
};

export default LeaderShipGet;
