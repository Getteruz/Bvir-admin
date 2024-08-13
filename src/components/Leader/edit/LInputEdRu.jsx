import React from "react";
import styled from "styled-components";
import { Flex } from "../../Utlis";
import { useDispatch } from "react-redux";
import UseInput from "../../../hooks/useInput";
import { addElement } from "../../../config/leader";
import axios from "axios";
import ReactQuill from "react-quill";
import { useParams } from "react-router-dom";
const Label1 = styled.p`
  color: #444;
  font-family: Overpass;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.24px;
`;
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
const Right = styled(Flex)`
  border-radius: 3px;
  border: 1px solid #e5e6e6;
  background: #f5f5f6;
  width: 212px;
  padding: 20px 15px 34px 15px;
  flex-direction: column;
  gap: 8px;
`;
const Label2 = styled.label`
  color: #444;
  font-family: Overpass;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.75px;
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
  width: 182px;
  height: 35px;
  border-radius: 3px;
  border: 1px solid #ddd;
  background: #f5f5f6;
  padding: 10px;
`;
const Input2 = styled.input`
  width: 256px;
  height: 40px;
  border-radius: 3px;
  border: 1px solid #ddd;
  background: #f5f5f6;
  padding: 13px 10px 12px 10px;
`;
const Input3 = styled.input`
  width: 531px;
  height: 40px;
  border-radius: 3px;
  border: 1px solid #ddd;
  background: #f5f5f6;
  padding: 13px 10px 12px 10px;
`;
const Inputs = styled(Flex)`
  gap: 19px;
  justify-content: space-between;
  width: 100%;
`;

const LInputEdRu = () => {
  const dispatch = useDispatch();
  const [data, setData] = React.useState({});
  const [value2, setValue] = React.useState("");
  const { id } = useParams();

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
      .get(`https://api.agroxizmatlar.uz/management/${id}`)
      .then((res) => {
        setData(res.data);
        setValue(res.data.taskRu);
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
    dispatch(addElement({ taskRu: value2 }));
  }, [value2]);
  return (
    <>
      <Left>
        <Inputs>
          <InputBox>
            <Label>Ism</Label>
            <Input2
              placeholder="Ism"
              name="firstNameRu"
              defaultValue={data.firstNameRu}
              onChange={changeValue}
            />
          </InputBox>
          <InputBox>
            <Label>Familiyasi</Label>
            <Input2
              placeholder="Familiyasi"
              name="lastNameRu"
              defaultValue={data.lastNameRu}
              onChange={changeValue}
            />
          </InputBox>
          <InputBox>
            <Label>Otasining ismi</Label>
            <Input2
              placeholder="Otasining ismi"
              name="fatherNameRu"
              defaultValue={data.fatherNameRu}
              onChange={changeValue}
            />
          </InputBox>
        </Inputs>
        <Inputs>
          <InputBox>
            <Label>Lavozimi</Label>
            <Input3
              placeholder="Ism"
              name="positionRu"
              defaultValue={data.positionRu}
              onChange={changeValue}
            />
          </InputBox>
        </Inputs>
        {/* <InputBox>
          <Label>Vazifasi</Label>
          <Input4 placeholder="Vazifasi" name="taskRu" onChange={changeValue} />
        </InputBox> */}
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

export default LInputEdRu;
