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
const Select = styled.select`
  width: 256px;
  height: 40px;
  border-radius: 3px;
  border: 1px solid #ddd;
  background: #f5f5f6;
`;
const RegionUz = () => {
  const dispatch = useDispatch();

  const obj = {
    areaUz: "",
    titleUz: "",
    code: "",
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
            <Input2 placeholder="Hudud" name="areaUz" onChange={changeValue} />
          </InputBox>
          <InputBox>
            <Label>Nomi</Label>
            <Input3 placeholder="Nomi" name="titleUz" onChange={changeValue} />
          </InputBox>{" "}
        </Inputs>
        <Select name="code" onChange={changeValue}>
          <option value="">xaritada</option>
          <option value="karakalpakstan">karakalpakstan</option>
          <option value="xorazm">xorazm</option>
          <option value="navoiy">navoiy</option>
          <option value="bukhara">bukhara</option>
          <option value="jizzakh">jizzakh</option>
          <option value="samarqand">samarqand</option>
          <option value="qashqadaryo">qashqadaryo</option>
          <option value="surxondaryo">surxondaryo</option>
          <option value="sirdaryo">sirdaryo</option>
          <option value="tashkent">tashkent</option>
          <option value="namangan">namangan</option>
          <option value="fergana">fergana</option>
          <option value="andijan">andijan</option>
        </Select>
      </Left>
    </>
  );
};

export default RegionUz;
