import React from "react";
import styled from "styled-components";
import { Flex } from "../../Utlis";
import { useDispatch } from "react-redux";
import UseInput from "../../../hooks/useInput";
import { addElement } from "../../../config/leader";
import axios from "axios";
import ReactQuill from "react-quill";
import { useParams } from "react-router-dom";
const Label1 = styled.p`
  color: #444;
  font-family: Overpass;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.24px;
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
const Right = styled(Flex)`
  border-radius: 3px;
  border: 1px solid #e5e6e6;
  background: #f5f5f6;
  width: 212px;
  padding: 20px 15px 34px 15px;
  flex-direction: column;
  gap: 8px;
`;
const Label2 = styled.label`
  color: #444;
  font-family: Overpass;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.75px;
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

const LInputEdEn = () => {
  const dispatch = useDispatch();
  const [value2, setValue] = React.useState("");
  const { id } = useParams();
  const [data, setData] = React.useState({});
  async function getInfo() {
    await axios
      .get(`https://api.agroxizmatlar.uz/management/${id}`)
      .then((res) => {
        setData(res.data);
        setValue(res.data.taskEn);
      });
  }
  const { value, changeValue } = UseInput(data);
  React.useEffect(() => {
    getInfo();
  }, []);
  const moduls = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["bold", "italic", "underline", "strike", "blockquote"],
      ["link", "image", "video"],
    ],
  };
  React.useEffect(() => {
    dispatch(addElement(value));
  }, [value]);
  React.useEffect(() => {
    dispatch(addElement({ taskEn: value2 }));
  }, [value2]);
  return (
    <>
      <Left>
        <Inputs>
          <InputBox>
            <Label>Ism</Label>
            <Input2
              placeholder="Ism"
              name="firstNameEn"
              defaultValue={data.firstNameEn}
              onChange={changeValue}
            />
          </InputBox>
          <InputBox>
            <Label>Familiyasi</Label>
            <Input2
              placeholder="Familiyasi"
              name="lastNameEn"
              defaultValue={data.lastNameEn}
              onChange={changeValue}
            />
          </InputBox>
          <InputBox>
            <Label>Otasining Ism</Label>
            <Input2
              placeholder="Otasining Ism"
              name="fatherNameEn"
              defaultValue={data.fatherNameEn}
              onChange={changeValue}
            />
          </InputBox>
        </Inputs>
        <Inputs>
          <InputBox>
            <Label>Lavozimi</Label>
            <Input3
              placeholder="Ism"
              name="positionEn"
              defaultValue={data.positionEn}
              onChange={changeValue}
            />
          </InputBox>
        </Inputs>
        <ReactQuill
          style={{ width: "768px", height: "300px" }}
          modules={moduls}
          theme="snow"
          value={value2}
          onChange={setValue}
        />
      </Left>
    </>
  );
};

export default LInputEdEn;
