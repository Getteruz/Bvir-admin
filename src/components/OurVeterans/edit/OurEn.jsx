import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Flex } from "../../Utlis";
import axios from "axios";
import UseInput from "../../../hooks/useInput";
import FileInput from "../../library/FileInput";
import { addElement } from "../../../config/OurVeterans";
import { useParams } from "react-router-dom";
const Top = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputBox = styled(Flex)`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Inputs = styled(Flex)`
  gap: 16px;
  align-items: center;
`;
const Label = styled.label`
  color: #444;
  opacity: 0.7;
  font-family: Overpass;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.24px;
`;
const VideoLinkInput = styled.input`
  width: 631px;
  padding: 13px 10px 12px 10px;
  border-radius: 3px;
  border: 1px solid #e5e6e6;
  background: rgba(242, 243, 244, 0.8);
  outline: none;
`;

const TittleInput = styled.input`
  padding: 13px 0px 12px 10px;
  border-radius: 3px;
  border: 1px solid #e5e6e6;
  background: rgba(242, 243, 244, 0.8);
  width: 511px;
  color: #444;
  font-family: Overpass;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.24px;
  outline: none;
`;

const OurEdEn = () => {
  const dispatch = useDispatch();
  const [data, setData] = React.useState({});
  const { id } = useParams();
  async function getInfo() {
    await axios
      .get(`https://api.agroxizmatlar.uz/agency-veteran/${id}`)
      .then(res => setData(res.data));
  }
  React.useEffect(() => {
    getInfo();
  }, []);
  const { value, changeValue } = UseInput(data);
  React.useEffect(() => {
    dispatch(addElement(value));
  }, [value]);
  

  return (
    <>
      <Inputs>
        <InputBox>
          <Label>Ism Familyasi</Label>
          <TittleInput
            type="text"
            name={"nameEn"}
            defaultValue={data.nameEn}
            placeholder={"Ism Familyasi"}
            onChange={changeValue}
          />
        </InputBox>
        <InputBox>
          <Label>Lavozimi</Label>
          <TittleInput
            type="text"
            defaultValue={data.positionEn}
            placeholder="Lavozimi"
            name={"positionEn"}
            onChange={changeValue}
          />
        </InputBox>
      </Inputs>
    </>
  );
};

export default OurEdEn;
