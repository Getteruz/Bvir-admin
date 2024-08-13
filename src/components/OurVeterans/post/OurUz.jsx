import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Flex } from "../../Utlis";
import axios from "axios";
import UseInput from "../../../hooks/useInput";
import FileInput from "../../library/FileInput";
import { addElement } from "../../../config/OurVeterans";
const Top = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

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
const VideoLinkInput = styled.input`
  width: 631px;
  padding: 13px 10px 12px 10px;
  border-radius: 3px;
  border: 1px solid #e5e6e6;
  background: rgba(242, 243, 244, 0.8);
  outline: none;
`;

const TittleInput = styled.input`
  padding: 13px 0px 12px 10px;
  border-radius: 3px;
  border: 1px solid #e5e6e6;
  background: rgba(242, 243, 244, 0.8);
  width: 375px;
  color: #444;
  font-family: Overpass;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.24px;
  outline: none;
`;

const OurUz = () => {
  const dispatch = useDispatch();

  const [selectedFile, setSelectedFile] = React.useState({});
  let urlFile = "";
  const handleFileChange = async e => {
    e.preventDefault();
    const formData = new FormData();
    const file = e.target.files[0];
    formData.append("image", file);

    await axios
      .post("https://grm-upload.getter.uz/upload/image", formData)
      .then(async response => {
        if (response.status == "400") {
          alert("iltimos rasm qayta yuklang!");
        }
        urlFile = response.data;
        setSelectedFile({ url: response.data });
      })
      .catch(error => {
        console.error("File upload failed:", error);
      });
  };

  const obj = {
    nameUz: "",
    positionUz: "",
  };
  const { value, changeValue } = UseInput(obj);
  React.useEffect(() => {
    console.log(value);
    dispatch(addElement(value));
  }, [value]);
  React.useEffect(() => {
    console.log(selectedFile);
    dispatch(addElement(selectedFile));
  }, [selectedFile]);

  return (
    <>
      <Inputs>
        <InputBox>
          <Label>Ism Familyasi</Label>
          <TittleInput
            type="text"
            name={"nameUz"}
            placeholder={"Ism Familyasi"}
            onChange={changeValue}
          />
        </InputBox>
        <InputBox>
          <Label>Lavozimi</Label>
          <TittleInput
            type="text"
            placeholder="Lavozimi"
            name={"positionUz"}
            onChange={changeValue}
          />
        </InputBox>
        <InputBox>
          <Label>Rasm yuklash</Label>
          <FileInput name={"image"} func={handleFileChange} />
        </InputBox>
      </Inputs>
    </>
  );
};

export default OurUz;
