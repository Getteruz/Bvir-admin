import React from "react";
import styled from "styled-components";
import { Flex } from "../../Utlis";
import { useDispatch } from "react-redux";
import { addElement } from "../../../config/vacancy";
import UseInput from "../../../hooks/useInput";
import ReactQuill from "react-quill";
import { useParams } from "react-router-dom";
import axios from "axios";
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
const V2EdEn = () => {
  const [value2, setValue] = React.useState("");
  const { id } = useParams();
  const [data, setData] = React.useState({});
  const dispatch = useDispatch();

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
      .get(`https://api.agroxizmatlar.uz/vacancy/${id}`)
      .then((res) => {
        setData(res.data);
        setValue(res.data.descriptionUz);
      });
  }
  const { value, changeValue } = UseInput(data);
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
          <Label>Ish o’rni nomi</Label>
          <Input1
            placeholder="Ish o’rni nomi"
            name={"titleEn"}
            defaultValue={data.titleEn}
            onChange={changeValue}
          />
        </InputBox>
        <InputBox>
          <Label>Maosh</Label>
          <Input3
            placeholder="10mln-20mln"
            name={"salaryEn"}
            defaultValue={data.salaryEn}
            onChange={changeValue}
          />
        </InputBox>
      </Inputs>
      <ReactQuill
        style={{ width: "768px", height: "30salaryEn0px" }}
        modules={moduls}
        theme="snow"
        value={value2}
        onChange={setValue}
      />
    </>
  );
};

export default V2EdEn;
