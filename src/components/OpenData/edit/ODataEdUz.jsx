import React from "react";
import styled from "styled-components";
import { Flex } from "../../Utlis";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addElement } from "../../../config/opend";
import FileInput from "../../library/FileInput";
import UseInput from "../../../hooks/useInput";
import { useParams } from "react-router-dom";
const InputBox = styled(Flex)`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Inputs = styled.form`
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
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
  width: 350px;
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
  width: 324px;
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
const Select = styled.select`
  width: 324px;
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
const ODataEdUz = () => {
  const [selectedFile, setSelectedFile] = React.useState("");
  let urlFile = "";
  const handleFileChange = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const file = e.target.files[0];
    formData.append("image", file);

    await axios
      .post("https://grm-upload.getter.uz/upload/image", formData)
      .then(async (response) => {
        if (response.status === "400") {
          alert("iltimos rasm qayta yuklang!");
        }
        urlFile = response.data;
        setSelectedFile({ link: response.data });
      })
      .catch((error) => {
        console.error("File upload failed:", error);
      });
  };
  const { id } = useParams();
  const [data, setData] = React.useState({});
  const [querter, setQuerter] = React.useState(false);

  async function getInfo() {
    await axios
      .get(`https://api.agroxizmatlar.uz/open-document/${id}`)
      .then((res) => {
        setData(res.data);
      });
  }
  const { value, changeValue } = UseInput(data);
  React.useEffect(() => {
    if (
      value.type === "budget legislation information" ||
      value.type === "PF - 6742"
    ) {
      setQuerter(true);
    } else {
      setQuerter(false);
      value.querter = "";
    }
  }, [value.type]);
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

  return (
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
        <Label>Qaror Soni</Label>
        <Input2
          placeholder=""
          name="code"
          defaultValue={data.code}
          onChange={changeValue}
        />
      </InputBox>

      <InputBox>
        <Label>Turi</Label>
        <Select name="type" onChange={changeValue}>
          <option value="" defaultChecked>
            {data.type}
          </option>
          <option value="budget legislation information">
            budget legislation information
          </option>
          <option value="PF - 6742">PF - 6742</option>
          <option value="organizations included">organizations included</option>
        </Select>
      </InputBox>
      <InputBox>
        <Label>Chorak</Label>
        <Select
          name="querter"
          disabled={querter === false}
          onChange={changeValue}
        >
          <option value="" defaultChecked>
            {data.quarter}
          </option>
          <option value="1">I Chorak</option>
          <option value="2">II Chorak</option>
          <option value="3">III Chorak</option>
          <option value="4">IV Chorak</option>
        </Select>
      </InputBox>
      <InputBox>
        <Label>Fayl</Label>
        <FileInput name={"image"} func={handleFileChange} />
      </InputBox>
    </Inputs>
  );
};

export default ODataEdUz;
