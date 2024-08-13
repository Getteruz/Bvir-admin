import React from "react";
import styled from "styled-components";
import { Flex } from "../../Utlis";
import UseInput from "../../../hooks/useInput";
import { useDispatch } from "react-redux";
import { addElement } from "../../../config/reigional1";
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
const RegionEn = () => {
  const dispatch = useDispatch();

  const obj = {
    areaEn: "",
    titleEn: "",
  };
  console.log(obj);
  const { value, changeValue } = UseInput(obj);
  React.useEffect(() => {
    dispatch(addElement(value));
  }, [value]);
  return (
    <>
      <Left>
        <Inputs>
          <InputBox>
            <Label>Hudud</Label>
            <Input2 placeholder="Hudud" name="areaEn" onChange={changeValue} />
          </InputBox>
          <InputBox>
            <Label>Nomi</Label>
            <Input3 placeholder="Nomi" name="titleEn" onChange={changeValue} />
          </InputBox>{" "}
        </Inputs>
      </Left>
    </>
  );
};

export default RegionEn;
