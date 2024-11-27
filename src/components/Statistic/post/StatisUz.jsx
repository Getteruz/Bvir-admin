import React from "react";
import { addElement } from "../../../config/statstic";
import axios from "axios";
import styled from "styled-components";
import { Flex } from "../../Utlis";
import UseInput from "../../../hooks/useInput";
import { useDispatch } from "react-redux";
import FileInput from "../../library/FileInput";
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
  width: 695px;
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

const StatisUz = () => {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = React.useState({});
  let urlFile = "";
  const handleFileChange = async e => {
    e.preventDefault();
    const formData = new FormData();
    const file = e.target.files[0];
    formData.append("image", file);

    await axios
      .post("storage.agroxizmatlar.uz/upload/image", formData)
      .then(async response => {
        if (response.status === "400") {
          alert("iltimos rasm qayta yuklang!");
        }
        urlFile = response.data;
        setSelectedFile({ link: response.data });
      })
      .catch(error => {
        console.error("File upload failed:", error);
      });
  };
  const obj = {
    titleUz: "",
  };
  const { value, changeValue } = UseInput(obj);
  React.useEffect(() => {
    dispatch(addElement(value));
  }, [value]);
  React.useEffect(() => {
    dispatch(addElement(selectedFile));
  }, [selectedFile]);
  return (
    <Inputs>
      <InputBox>
        <Label>Nomi</Label>
        <Input1 placeholder="nomi" name={"titleUz"} onChange={changeValue} />
      </InputBox>
      <InputBox>
        <Label>File</Label>
        <FileInput name={"image"} func={handleFileChange} />
      </InputBox>
    </Inputs>
  );
};

export default StatisUz;
