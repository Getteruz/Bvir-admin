import React from "react";
import styled from "styled-components";
import { Flex } from "../../Utlis";
import UseInput from "../../../hooks/useInput";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addElement } from "../../../config/banner";
import FileInput from "../../library/FileInput";
import ReactQuill from "react-quill";
import { Link, useParams } from "react-router-dom";
const Inputs = styled.form`
  display: flex;
  gap: 18px;
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
const Language = styled(Flex)`
  border-radius: 3px;
  border: 1px solid #e5e6e6;
  background: #f2f3f4;
  width: 1038px;
  height: 32px;
  flex-shrink: 0;
  padding: 0px 0px 0px 15px;
`;

const Btns = styled(Flex)`
  border-radius: 3px;
  border: 1px solid #e5e6e6;
  background: rgba(242, 243, 244, 0.8);
`;
const Btn = styled(Flex)`
  padding: 12px 34px;
  color: #000000;
  font-family: Overpass;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.24px;
  border-radius: 2px;
`;

const BannerEdUz = () => {
  const [selectedFile, setSelectedFile] = React.useState("");
  const [value2, setValue] = React.useState();
  const { id } = useParams();
  const [data, setData] = React.useState({});
  const [type, setType] = React.useState(data.type);

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
    await axios.get(`https://api.agroxizmatlar.uz/banner/${id}`).then((res) => {
      setData(res.data);
      setValue(res.data.descriptionUz);
      setType(res.data.type);
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
      <InputBox>
        <Label>Turini tanlang</Label>
        <Btns>
          <Link>
            <Btn
              onClick={() => {
                dispatch(addElement({ type: "left" }));
                setType("left");
              }}
              className={type === "left" ? "btnIsActive" : null}
            >
              Banner left
            </Btn>
          </Link>
          <Link>
            <Btn
              onClick={() => {
                dispatch(addElement({ type: "right" }));
                setType("right");
              }}
              className={type === "right" ? "btnIsActive" : null}
            >
              Banner right
            </Btn>
          </Link>
        </Btns>
      </InputBox>
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
          <FileInput func={handleFileChange} />
        </InputBox>
      </Inputs>
      <InputBox>
        <Label>Batafsil</Label>
        <ReactQuill
          style={{ width: "768px", height: "300px" }}
          modules={moduls}
          theme="snow"
          value={value2}
          onChange={setValue}
        />
      </InputBox>
    </>
  );
};

export default BannerEdUz;
