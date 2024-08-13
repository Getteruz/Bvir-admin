import React from "react";
import styled from "styled-components";
import { Flex } from "../../Utlis";
import axios from "axios";
import { useParams } from "react-router-dom";
const Content = styled(Flex)`
  padding-top: 20px;
  flex-direction: column;
  gap: 10px;
`;
const Title = styled.p`
  width: 697px;
  color: #141414;
  font-family: Overpass;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px; /* 141.667% */
`;
const Cards = styled(Flex)`
  width: 1044px;
  border-radius: 3px;
  border: 1px solid #e5e6e6;
  background: #f5f5f6;
  row-gap: 10px;
  column-gap: 7px;
  flex-wrap: wrap;
  padding: 10px 10px 18px 10px;
`;
const Img = styled.img`
  width: 140px;
  height: 90px;
  border-radius: 2px;
  border: none;
  background-size: cover;
`;
const PhotoInside = () => {
  const { id } = useParams();
  const [response, setResponse] = React.useState([]);
  async function getInfo() {
    await axios.get(`https://api.agroxizmatlar.uz/gallery/${id}`).then(res => {
      console.log(res.data);
      return setResponse(res.data);
    });
  }
  React.useEffect(() => {
    getInfo();
  }, []);
  return (
    <Content>
      <Title>{response?.descriptionUz}</Title>
      <Cards>
        {response?.url?.map(e => (
          <Img src={e}/>
        ))}
      </Cards>
    </Content>
  );
};

export default PhotoInside;
