import React from "react";
import styled from "styled-components";
import { Flex } from "../../../Utlis";
import { Download } from "../../../../assets/img/img";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addElement } from "../../../../config/photoGalery";
import { useParams } from "react-router-dom";
// import "./inddex.css";
const Content = styled(Flex)`
  width: 1041px;
  border-radius: 3px;
  border: 1px solid #e5e6e6;
  background: #f5f5f6;
`;
const Text1 = styled.p`
  color: #0f1826;
  font-family: Onest;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 100% */
`;
const Text2 = styled.p`
  color: #0f1826;
  font-family: Onest;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 112.5% */
`;
const Texts = styled(Flex)`
  flex-direction: column;
  gap: 14px;
  align-items: flex-start;
`;
const FileUpload = styled.section`
  width: 1041px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 10px;
  gap: 10px;
`;
const Input = styled.input`
  display: none;
`;
const UploadBtn = styled(Flex)`
  align-items: center;
  padding: 23px 26px 23px 26px;
  width: 140px;
  /* margin-right: 10px; */
  height: 90px;
  flex-direction: column;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 2px;
  background: linear-gradient(0deg, #fff 0%, #fff 100%), url(<path-to-image>),
    lightgray 50% / cover no-repeat;
  color: #777;
  font-family: Overpass;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.24px;
  cursor: pointer;
`;
const Img = styled.img`
  width: 140px;
  height: 90px;
  flex-shrink: 0;
  border-radius: 2px;
  margin-right: 10px;
`;
const DltBtn = styled.div`
  color: #e0e0e0;
  font-family: Overpass;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.24px;
`;
const UploadEdit = () => {
  const { id } = useParams();
  const [data, setData] = React.useState({});
  const [photoArr, setPhotoArr] = React.useState([]);

  async function getInfo() {
    await axios
      .get(`https://api.agroxizmatlar.uz/gallery/${id}`)
      .then((res) => {
        setPhotoArr(res.data.url);
      });
  }
  const [selectedImages, setSelectedImages] = React.useState([]);
  const dispatch = useDispatch();
  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }
  const [selectedFile, setSelectedFile] = React.useState({});
  const handleFileChange = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    await axios
      .post("https://grm-upload.getter.uz/upload/image", formData)
      .then(async (response) => {
        if (response.status === "400") {
          alert("iltimos rasm qayta yuklang!");
        }
        setPhotoArr((prevArr) => [...prevArr, response.data]);
        console.log(photoArr);
      })
      .catch((error) => {
        console.error("File upload failed:", error);
      });
  };

  React.useEffect(() => {
    getInfo();
  }, []);
  React.useEffect(() => {
    dispatch(addElement({ url: photoArr }));
  }, [photoArr]);
  return (
    <Content>
      <FileUpload>
        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <div key={image}>
                <Img src={image} alt="upload" />
                {/* <DltBtn onClick={() => deleteHandler(image)}>
                  delete image
                </DltBtn> */}
              </div>
            );
          })}
        <label>
          <UploadBtn>
            <img src={Download} alt="" />
            Добавить фото
          </UploadBtn>
          <Input
            type="file"
            name="image"
            className="input"
            onChange={(e) => {
              handleFileChange(e);
              onSelectFile(e);
            }}
            multiple
            accept="image/png , image/jpeg, image/webp"
          />
        </label>
        <br />

        <Input className="input" type="file" multiple onChange={onSelectFile} />
      </FileUpload>
      {/* {selectedImages.length > 0 ? (
        <button
          className="upload-btn"
          onClick={() => {
            console.log(selectedImages);
          }}
        >
          UPLOAD {selectedImages.length} IMAGE
          {selectedImages.length === 1 ? "" : ""}
        </button>
      ) : null} */}
    </Content>
  );
};

export default UploadEdit;
