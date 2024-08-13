import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Flex } from "../../../Utlis";
import UseInput from "../../../../hooks/useInput";
import { addElement } from "../../../../config/photoGalery";

const InputBox = styled(Flex)`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Inputs = styled.form`
  display: flex;
  gap: 18px;
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
const Input1 = styled.input`
  width: 1041px;

  height: 40px;
  flex-shrink: 0;
  border-radius: 3px;
  border: 1px solid #e5e6e6;
  background: rgba(242, 243, 244, 0.8);
  color: #444;
  font-family: Overpass;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.24px;
  padding: 13px 10px 12px 10px;
`;

const PhotoPostRu = () => {
  const obj = {
    descriptionRu: "",
  };
  const { value, changeValue } = UseInput(obj);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(addElement(value));
  }, [value]);

  return (
    <>
      <Inputs>
        <InputBox>
          <Label>Nomi</Label>
          <Input1
            placeholder="nomi"
            name="descriptionRu"
            onChange={changeValue}
          />
        </InputBox>
      </Inputs>
    </>
  );
};

export default PhotoPostRu;
