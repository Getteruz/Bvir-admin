import React from "react";
import { Flex } from "../../Utlis";
import styled from "styled-components";
import { Dote, Edit2, Eye, Trash } from "../../../assets/img/img";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

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
const Tr1 = styled.tr`
  text-align: left;
`;
const Img = styled.img`
  width: 73px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 2px;
`;
const Td = styled.td`
  /* display: flex; */
  text-align: left;
  padding-top: 5px;
  margin-bottom: 100px;
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
`;
const Text2 = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 697px;
  color: #141414;
  font-family: Overpass;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px; /* 141.667% */
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
const Ahref = styled.p`
  color: #6c9b31;
  font-family: Overpass;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px; /* 141.667% */
`;
const Video = () => {
  const [modal, setModal] = React.useState(false);
  const [uid, setUid] = React.useState();
  const [response, setResponse] = React.useState([]);
  async function getInfo() {
    await axios
      .get("https://api.agroxizmatlar.uz/gallery/video")
      .then((res) => {
        return setResponse(res.data.items);
      });
  }
  console.log(response);
  React.useEffect(() => {
    getInfo();
  }, []);
  const deleteFun = async (id) => {
    await axios
      .delete(`https://api.agroxizmatlar.uz/gallery/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status === 204) {
          alert("malumot o'chirildi");
          window.location.reload();
        }
      });
  };
  return (
    <Table>
      <Tr1>
        <Th style={{ paddingLeft: "10px" }}>Video Havola</Th>
        <Th>Mavzu</Th>
        <Th>Sanasi</Th>
        <Th>Menu</Th>
      </Tr1>

      {response?.map((e, i) => (
        <Tr key={i}>
          <Td Td style={{ paddingLeft: "12px" }}>
            <Link to={e.url[0]} target="_blank">
              <Ahref>video havolasi</Ahref>
            </Link>
          </Td>
          <Td>
            <Text2>{e.descriptionUz}</Text2>
          </Td>
          <Td>
            <Text1>{e.date}</Text1>
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
            {e.id === uid && modal ? (
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
  );
};

export default Video;
