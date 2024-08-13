import React from "react";
import { addElement } from "../../../config/agency";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Flex } from "../../Utlis";
import UseInput from "../../../hooks/useInput";
import ReactQuill from "react-quill";

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

const TittleInput = styled.input`
  padding: 13px 0px 12px 10px;
  border-radius: 3px;
  border: 1px solid #e5e6e6;
  background: rgba(242, 243, 244, 0.8);
  width: 1037px;
  color: #444;
  font-family: Overpass;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.24px;
  outline: none;
`;
const TextInput = styled.input`
  outline: none;
  padding: 13px 10px;
  width: 1037px;
  vertical-align: top;
  text-align: start;
  height: 180px;
  border-radius: 3px;
  border: 1px solid #e5e6e6;
  background: rgba(242, 243, 244, 0.8);
`;
const AgencyEn = () => {
  const dispatch = useDispatch();
  const [value2, setValue] = React.useState("");
  const obj = {
    titleEn: "",
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
    dispatch(addElement({ descriptionEn: value2 }));
  }, [value2]);
  return (
    <>
      <InputBox>
        <Label>Mavzu</Label>
        <TittleInput type="text" name={"titleEn"} onChange={changeValue} />
      </InputBox>
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

export default AgencyEn;
