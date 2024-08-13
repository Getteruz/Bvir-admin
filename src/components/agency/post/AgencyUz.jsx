import React from "react";
import { addElement } from "../../../config/agency";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Flex } from "../../Utlis";
import axios from "axios";
import UseInput from "../../../hooks/useInput";
import FileInput from "../../library/FileInput";
import ReactQuill from "react-quill";
import { showElem } from "../../../config/edit3";

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
const AgencyUz = () => {
  const dispatch = useDispatch();
  const [value2, setValue] = React.useState("");

  const [selectedFile, setSelectedFile] = React.useState({});
  let urlFile = "";
  const handleFileChange = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const file = e.target.files[0];
    formData.append("image", file);

    await axios
      .post("https://grm-upload.getter.uz/upload/image", formData)
      .then(async (response) => {
        if (response.status == "400") {
          alert("iltimos rasm qayta yuklang!");
        }
        urlFile = response.data;
        setSelectedFile({ url: response.data });
      })
      .catch((error) => {
        console.error("File upload failed:", error);
      });
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
  const obj = {
    link: "",
    titleUz: "",
  };
  const { value, changeValue } = UseInput(obj);
  React.useEffect(() => {
    dispatch(addElement(value));
  }, [value]);
  React.useEffect(() => {
    dispatch(addElement({ descriptionUz: value2 }));
  }, [value2]);
  React.useEffect(() => {
    dispatch(addElement(selectedFile));
  }, [selectedFile]);
  const { edit3 } = useSelector(showElem);
  
  return (
    <>
      <Inputs>
        <InputBox>
          <Label>Video havola</Label>
          <VideoLinkInput
            placeholder="video link"
            name={"link"}
            disabled={edit3 == false}
            onChange={changeValue}
          />
        </InputBox>
        <InputBox>
          <Label>Rasm yuklash</Label>
          <FileInput
            name={"image"}
            disabled={edit3 == false}
            func={handleFileChange}
          />
        </InputBox>
      </Inputs>
      <InputBox>
        <Label>Mavzu</Label>
        <TittleInput
          type="text"
          disabled={edit3 == false}
          name={"titleUz"}
          onChange={changeValue}
        />
      </InputBox>

      <ReactQuill
        style={{ width: "768px", height: "300px" }}
        modules={moduls}
        theme="snow"
        disabled={edit3 == false}
        value={value2}
        readOnly={edit3==false}
        onChange={setValue}
      />
    </>
  );
};

export default AgencyUz;
