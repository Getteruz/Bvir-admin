import React from "react";
import styled from "styled-components";
import { Flex } from "../../Utlis";
import { useDispatch } from "react-redux";
import UseInput from "../../../hooks/useInput";
import axios from "axios";
import { addElement } from "../../../config/central";
import FileInput from "../../library/FileInput";
import ReactQuill from "react-quill";
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
const Select = styled.select`
  width: 256px;
  height: 40px;
  border-radius: 3px;
  border: 1px solid #ddd;
  background: #f5f5f6;
`;

const Inputs = styled(Flex)`
  gap: 19px;
  justify-content: space-between;
  width: 100%;
`;
const Input4 = styled.input`
  width: 806px;
  height: 376px;
  border-radius: 3px;
  border: 1px solid #ddd;
  background: #f5f5f6;
  padding: 13px 10px;
`;

const CInputUz = () => {
  const dispatch = useDispatch();

  const [selectedFile, setSelectedFile] = React.useState("");
  const [bolim, setBolim] = React.useState([]);
  const [value2, setValue] = React.useState("");

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
    firstNameUz: "",
    lastNameUz: "",
    fatherNameUz: "",
    positionUz: "",
    type: "central apparatus",
    apparatusType: "",
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
    dispatch(addElement(selectedFile));
  }, [selectedFile]);
  React.useEffect(() => {
    axios
      .get("https://api.agroxizmatlar.uz/menagement-apparatus-type")
      .then(res => setBolim(res.data.items));
  }, []);
  React.useEffect(() => {
    dispatch(addElement({ taskUz: value2 }));
  }, [value2]);
  return (
    <>
      <Left>
        <Inputs>
          <InputBox>
            <Label>Ism</Label>
            <Input2
              placeholder="Ism"
              name="firstNameUz"
              onChange={changeValue}
            />
          </InputBox>
          <InputBox>
            <Label>Familiyasi</Label>
            <Input2
              placeholder="Familiyasi"
              name="lastNameUz"
              onChange={changeValue}
            />
          </InputBox>
          <InputBox>
            <Label>Sharifi</Label>
            <Input2
              placeholder="Sharifi"
              name="fatherNameUz"
              onChange={changeValue}
            />
          </InputBox>
        </Inputs>
        <Inputs>
          <InputBox>
            <Label>Rasm</Label>
            <FileInput name={"image"} func={handleFileChange} />
          </InputBox>
          <InputBox>
            <Label>Lavozimi</Label>
            <Input2
              placeholder="Lavozimi"
              name="positionUz"
              onChange={changeValue}
            />
          </InputBox>
          <InputBox>
            <Label>Bo'limi</Label>
            <Select name="apparatusType" onChange={changeValue}>
              <option value="" selected>
                Bo'lim
              </option>

              {bolim?.map(e => (
                <option key={e.id} value={e.id}>
                  {e.typeUz}
                </option>
              ))}
            </Select>
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

export default CInputUz;
