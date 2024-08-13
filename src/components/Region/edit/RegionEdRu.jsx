import React from "react";
import styled from "styled-components";
import { Flex } from "../../Utlis";
import UseInput from "../../../hooks/useInput";
import { useDispatch } from "react-redux";
import { addElement } from "../../../config/reigional1";
import { useParams } from "react-router-dom";
import axios from "axios";
const Input2 = styled.input`
  width: 256px;
  height: 40px;
  border-radius: 3px;
  border: 1px solid #ddd;
  background: #f5f5f6;
  padding: 13px 10px 12px 10px;
`;
const Label = styled.label`
  color: #444;
  font-family: Overpass;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.24px;
  opacity: 0.7;
`;
const Left = styled(Flex)`
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
const InputBox = styled(Flex)`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Input3 = styled.input`
  width: 531px;
  height: 40px;
  border-radius: 3px;
  border: 1px solid #ddd;
  background: #f5f5f6;
  padding: 13px 10px 12px 10px;
`;
const Inputs = styled(Flex)`
  gap: 19px;
  justify-content: space-between;
  width: 100%;
`;
const RegionEdRu = () => {
  const { id } = useParams();
  const [data, setData] = React.useState({});
  async function getInfo() {
    await axios
      .get(`https://api.agroxizmatlar.uz/territorial-division/${id}`)
      .then((res) => {
        setData(res.data);
      });
  }
  const { value, changeValue } = UseInput(data);
  const dispatch = useDispatch();
  React.useEffect(() => {
    getInfo();
  }, []);
  React.useEffect(() => {
    dispatch(addElement(value));
  }, [value]);
  return (
    <>
      <Left>
        <Inputs>
          <InputBox>
            <Label>Hudud</Label>
            <Input2
              placeholder="Hudud"
              name="areaRu"
              defaultValue={data.areaRu}
              onChange={changeValue}
            />
          </InputBox>
          <InputBox>
            <Label>Nomi</Label>
            <Input3
              placeholder="Nomi"
              name="titleRu"
              defaultValue={data.titleRu}
              onChange={changeValue}
            />
          </InputBox>
        </Inputs>
      </Left>
    </>
  );
};

export default RegionEdRu;
