import React from "react";
import styled from "styled-components";
import { Flex } from "../../Utlis";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addElement } from "../../../config/event";
import UseInput from "../../../hooks/useInput";
import FileInput from "../../library/FileInput";
import ReactQuill from "react-quill";
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

const EventEdUz = () => {
  const [selectedFile, setSelectedFile] = React.useState("");
  const [value2, setValue] = React.useState("");
  const { id } = useParams();
  const [data, setData] = React.useState({});
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
        const arr = [];
        urlFile = response.data;
        arr.push(response.data);
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

  async function getInfo() {
    await axios
      .get(`https://api.agroxizmatlar.uz/information/${id}`)
      .then((res) => {
        console.log(res);
        setData(res.data);
        setValue(res.data.descriptionUz);
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
    dispatch(addElement(selectedFile));
  }, [selectedFile]);
  React.useEffect(() => {
    dispatch(addElement({ descriptionUz: value2 }));
  }, [value2]);
  return (
    <>
      <Inputs>
        <InputBox>
          <Label>Nomi</Label>
          <Input1
            placeholder="nomi"
            name="titleUz"
            defaultValue={data.titleUz}
            onChange={changeValue}
          />
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

export default EventEdUz
;
