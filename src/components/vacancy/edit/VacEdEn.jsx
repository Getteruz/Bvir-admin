import React from "react";
import styled from "styled-components";
import { Flex } from "../../Utlis";
import { useDispatch } from "react-redux";
import { addElement } from "../../../config/vacancy2";
import UseInput from "../../../hooks/useInput";
import ReactQuill from "react-quill";
import axios from "axios";
import { useParams } from "react-router-dom";
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
  width: 768px;
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

const VacEdEn = () => {
  const [value2, setValue] = React.useState("");
  const { id } = useParams();
  const [data, setData] = React.useState({});
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
  async function getInfo() {
    await axios
      .get(`https://api.agroxizmatlar.uz/information/${id}`)
      .then((res) => {
        console.log(res);
        setData(res.data);
        setValue(res.data.descriptionEn);
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
  React.useEffect(() => {
    dispatch(addElement({ descriptionEn: value2 }));
  }, [value2]);
  return (
    <>
      <Inputs>
        <InputBox>
          <Label>Nomi</Label>
          <Input1
            placeholder="nomi"
            name="titleEn"
            defaultValue={data.titleEn}
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
    </>
  );
};

export default VacEdEn;
