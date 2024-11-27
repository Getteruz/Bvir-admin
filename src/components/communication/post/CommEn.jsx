import React from "react";
import Topbar from "../../library/Topbar";
import { Flex } from "../../Utlis";
import styled from "styled-components";
import LangBox from "../../library/LangBox";
import { useDispatch, useSelector } from "react-redux";
import UseInput from "../../../hooks/useInput";
import { addElement } from "../../../config/comunacation";
import axios from "axios";
import { showElem } from "../../../config/edit2";
const Content = styled(Flex)`
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const InputBox = styled(Flex)`
  display: flex;
  flex-direction: column;
  gap: 5px;
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
  width: 246px;
  height: 40px;
  border-radius: 3px;
  border: 1px solid #ddd;
  background: #f5f5f6;
  padding: 13px 10px 12px 10px;
`;
const Input = styled.input`
  width: 510px;
  height: 40px;
  border-radius: 3px;
  border: 1px solid #ddd;
  background: #f5f5f6;
  padding: 13px 10px 12px 10px;
`;
const Inputs = styled(Flex)`
  gap: 17px;
`;

const Box = styled(Flex)`
  flex-direction: column;
  gap: 20px;
  padding-left: 38px;
  padding-right: 91px;
  width: 100%;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;
const CommEn = () => {
  const [data, setData] = React.useState({});

  async function getInfo() {
    await axios
      .get(
        "https://api.agroxizmatlar.uz/communication-tool/02ddac33-a2a2-4246-9ef3-af832a2fa567"
      )
      .then((res) => setData(res.data));
  }
  const obj = {
    addressEn: "",
    workOrderEn: "",
  };
  const { edit2 } = useSelector(showElem);
  const { value, changeValue } = UseInput(data);
  React.useEffect(() => {
    getInfo();
  }, []);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(addElement(value));
  }, [value]);

  return (
    <Inputs>
      <InputBox>
        <Label>Manzil:</Label>
        <Input
          name="addressEn"
          defaultValue={data.addressEn}
          disabled={edit2 === false}
          onChange={changeValue}
          placeholder="Manzil"
        />
      </InputBox>
      <InputBox>
        <Label>Ish tartibi</Label>
        <Input2
          name="workOrderEn"
          defaultValue={data.workOrderEn}
          disabled={edit2 === false}
          onChange={changeValue}
          placeholder="Ish tartibi"
        />
      </InputBox>
    </Inputs>
  );
};

export default CommEn;
