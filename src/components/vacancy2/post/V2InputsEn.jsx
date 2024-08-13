import React from "react";
import styled from "styled-components";
import { Flex } from "../../Utlis";
import { useDispatch } from "react-redux";
import {  addElement } from "../../../config/vacancy";
import UseInput from "../../../hooks/useInput";
import ReactQuill from "react-quill";
const Input2 = styled.input`
  width: 1038px;
  height: 262px;
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
const PictureInput = styled.input`
  width: 246px;
  height: 40px;
  &::before {
    content: "Select some files";
    display: inline-block;
    background: linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt;
  }
  &::-webkit-file-upload-button {
    visibility: hidden;
  }
  &:active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
  }
`;
const Input3 = styled.input`
  width: 256px;
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
const Inputs = styled.form`
  display: flex;
  gap: 13px;
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

const InputBox = styled(Flex)`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const V2InputsEn = () => {
  const [value2, setValue] = React.useState("");
  const dispatch = useDispatch();
  const obj = {
    titleEn: "",
    descriptionEn: "",
    salaryEn: "",
  };
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
  const { value, changeValue } = UseInput(obj);
  React.useEffect(() => {
    dispatch(addElement(value));
  }, [value]);
  React.useEffect(() => {
    dispatch(addElement({ descriptionUz: value2 }));
  }, [value2]);
  return (
    <>
      <Inputs>
        <InputBox>
          <Label>Ish o’rni nomi</Label>
          <Input1
            placeholder="Ish o’rni nomi"
            name={"titleEn"}
            onChange={changeValue}
          />
        </InputBox>
        <InputBox>
          <Label>Maosh</Label>
          <Input3
            placeholder="10mln-20mln"
            name={"salaryEn"}
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

export default V2InputsEn;
