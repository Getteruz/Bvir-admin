import React from "react";
import styled from "styled-components";
const PictureInput = styled.input`
  border-radius: 3px;
  border: 1px solid #e5e6e6;
  background: rgba(242, 243, 244, 0.8);
  cursor: pointer;
  /* border: none; */
  width: 256px;
  height: 40px;
  padding: 10px;
  &::before {
    content: "Fayl yuklang!";
    color: #7d7d7d;
    font-family: Overpass;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.24px;
  }
  &::-webkit-file-upload-button {
    visibility: hidden;
  }
`;
const FileInput = ({ placeH, name, func, accept }) => {
  return (
    <PictureInput
      type="file"
      name={name}
      placeholder={placeH}
      onChange={func}
      accept={accept}
    />
  );
};

export default FileInput;
