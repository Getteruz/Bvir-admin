import React from "react";
import { Flex } from "../../Utlis";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import UseInput from "../../../hooks/useInput";
import { addElement } from "../../../config/reigional2";

const Bottom = styled(Flex)`
  gap: 20px;
`;
const InputBox = styled(Flex)`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Left = styled(Flex)`
  flex-direction: column;
  gap: 20px;
  width: 100%;
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

const Input2 = styled.input`
  width: 256px;
  height: 40px;
  border-radius: 3px;
  border: 1px solid #ddd;
  background: #f5f5f6;
  padding: 13px 10px 12px 10px;
`;
const Input3 = styled.input`
  width: 806px;
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
const RegionalPost2Ru = () => {
  const dispatch = useDispatch();
  const obj = {
    firstNameRu: "",
    lastNameRu: "",
    fatherNameRu: "",
    positionRu: "",
  };
  const { value, changeValue } = UseInput(obj);
  React.useEffect(() => {
    dispatch(addElement(value));
  }, [value]);
  return (
    <Left>
      <Inputs>
        <InputBox>
          <Label>Ism</Label>
          <Input2
            placeholder="Ism"
            name={"firstNameRu"}
            onChange={changeValue}
          />
        </InputBox>
        <InputBox>
          <Label>Familiyasi</Label>
          <Input2
            placeholder="Familiyasi"
            name={"lastNameRu"}
            onChange={changeValue}
          />
        </InputBox>
        <InputBox>
          <Label>Otasining ismi</Label>
          <Input2
            placeholder="Otasining ismi"
            name={"fatherNameRu"}
            onChange={changeValue}
          />
        </InputBox>
      </Inputs>
      <InputBox>
        <Label>Lavozimi</Label>
        <Input3
          placeholder="Lavozimi"
          name={"positionRu"}
          onChange={changeValue}
        />
      </InputBox>
    </Left>
  );
};

export default RegionalPost2Ru;
