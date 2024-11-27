import React from "react";
import Topbar from "../../library/Topbar";
import styled from "styled-components";
import { Flex } from "../../Utlis";
import axios from "axios";
import { useDispatch } from "react-redux";
import UseInput from "../../../hooks/useInput";
import { addElement } from "../../../config/event";
import LangBox from "../../library/LangBox";
import { Outlet } from "react-router-dom";
const Content = styled(Flex)`
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
const Box = styled(Flex)`
  flex-direction: column;
  gap: 27px;
  padding-left: 38px;
  padding-right: 91px;
  width: 100%;
`;

const EventPost = () => {
  const [selectedFile, setSelectedFile] = React.useState("");
  let urlFile = "";
  const handleFileChange = async e => {
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
  };
  const obj = {
    type: "event",
    titleUz: "",
    descriptionUz: "",
  };
  const { value, changeValue } = UseInput(obj);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(addElement(value));
  }, [value]);
  React.useEffect(() => {
    dispatch(addElement(selectedFile));
  }, [selectedFile]);

  return (
    <Content>
      <Topbar text1={"| Tadbirlar"} />
      <Box>
        <LangBox />
        <Outlet />
      </Box>
    </Content>
  );
};

export default EventPost;
