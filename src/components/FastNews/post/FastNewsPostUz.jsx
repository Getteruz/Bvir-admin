import React from "react";
import styled from "styled-components";
import { Flex } from "../../Utlis";
import { useDispatch } from "react-redux";
import UseInput from "../../../hooks/useInput";
import axios from "axios";
import { addElement } from "../../../config/fastnews";
import FileInput from "../../library/FileInput";
import ReactQuill from "react-quill";

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
const FastNewPostUz = () => {
  const [selectedFile, setSelectedFile] = React.useState("");
  const [value2, setValue] = React.useState("");

  let urlFile = "";
  const handleFileChange = async e => {
    try {
      e.preventDefault();
      const formData = new FormData();
      const file = e.target.files[0];
      formData.append("image", file);

      await axios
        .post("https://grm-upload.getter.uz/upload/image", formData)
        .then(async response => {
          if (response.status === "400") {
            alert("iltimos rasm qayta yuklang!");
          }
          urlFile = response.data;
          setSelectedFile({ url: response.data });
        })
        .catch(error => {
          console.error("File upload failed:", error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const obj = {
    type: "breaking news",
    titleUz: "",
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
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(addElement(value));
  }, [value]);
  React.useEffect(() => {
    dispatch(addElement({ descriptionUz: value2 }));
  }, [value2]);
  React.useEffect(() => {
    dispatch(addElement(selectedFile));
  }, [selectedFile]);

  return (
    <>
      <Inputs>
        <InputBox>
          <Label>Nomi</Label>
          <Input1 placeholder="nomi" name="titleUz" onChange={changeValue} />
        </InputBox>
        <InputBox>
          <Label>Havolasi</Label>
          <FileInput name={"image"} func={handleFileChange} />
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

export default FastNewPostUz;
