import React from "react";
import styled from "styled-components";
import { Flex } from "../../Utlis";
import Topbar from "../../library/Topbar";
import { Dote, Edit2, Eye, Gerb, Trash } from "../../../assets/img/img";
import axios from "axios";
import { Link } from "react-router-dom";
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
  font-weight: 500;
  line-height: 17px; /* 141.667% */
  width: 409px;
`;
const Text2 = styled.p`
  color: #6c9b31;
  font-family: Overpass;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px; /* 141.667% */
  cursor: pointer;
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
const Img = styled.img`
  width: 42px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 2px;
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
`;
const Icons = styled(Flex)`
  position: absolute;
  right: 100px;
  gap: 19px;
  padding: 9px 15px 8px 15px;
  background-color: #fff;
  width: 116px;
  border-radius: 2px;
  background: #fff;
  box-shadow: 0px 6px 13px 0px rgba(0, 0, 0, 0.12);
`;
const LinkGet = () => {
  const [uid, setUid] = React.useState();
  const [modal, setModal] = React.useState(false);
  const [response, setResponse] = React.useState([]);
  async function getInfo() {
    await axios.get("https://api.agroxizmatlar.uz/useful-link").then((res) => {
      return setResponse(res.data.items);
    });
  }
  React.useEffect(() => {
    getInfo();
  }, []);
  const deleteFun = async (id) => {
    await axios
      .delete(`https://api.agroxizmatlar.uz/useful-link/${id}`, {
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
      <Topbar text1={"| Foydali havolalar"} />

      <Box>
        <Table>
          <Tr1>
            <Th style={{ paddingLeft: "15px" }}>Logo</Th>
            <Th>Nomi</Th>
            <Th>Havolasi</Th>
            <Th>Menu</Th>
          </Tr1>
          {response?.map((e, i) => (
            <Tr key={i}>
              <Td Td style={{ paddingLeft: "15px" }}>
                <Img src={e.url} alt="" />
              </Td>
              <Td>
                <Text1>{e.titleUz}</Text1>
              </Td>
              <Td>
                <Text2>{e.link}</Text2>
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

export default LinkGet;
