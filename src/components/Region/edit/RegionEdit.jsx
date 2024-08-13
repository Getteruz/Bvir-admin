import React from "react";
import Topbar from "../../library/Topbar";
import { Flex } from "../../Utlis";
import styled from "styled-components";
import { Link, Outlet, useParams } from "react-router-dom";
import { addElement } from "../../../config/reigional1";
import { useDispatch } from "react-redux";
import UseInput from "../../../hooks/useInput";
import LangBox from "../../library/LangBox";
import axios from "axios";
const Content = styled(Flex)`
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
const Box = styled(Flex)`
  flex-direction: column;
  gap: 20px;
  padding-left: 38px;
  padding-right: 91px;
  width: 100%;
`;
const Bottom = styled(Flex)`
  gap: 20px;
  /* width: 100%; */
  /* justify-content: space-between; */
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

const RegionEdit = () => {
  const { id } = useParams();
  const [data, setData] = React.useState({});
  async function getInfo() {
    await axios
      .get(`https://api.agroxizmatlar.uz/territorial-division/${id}`)
      .then((res) => {
        setData(res.data);
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
  return (
    <Content>
      <Topbar text1={"| Hududlar"} />
      <Box>
        <LangBox />
        <Bottom>
          <Outlet />
          <InputBox>
            <Label>Asosiy sahifalar</Label>
            <Right>
              <Label2>Telefon</Label2>
              <Input1
                placeholder="+998"
                defaultValue={data.phone}
                name="phone"
                onChange={changeValue}
              />
              <Label2>Website</Label2>
              <Input1
                placeholder="website"
                name="website"
                defaultValue={data.website}
                onChange={changeValue}
              />
              <Label2>Telegram</Label2>
              <Input1
                placeholder="t.me/"
                name="telegram"
                defaultValue={data.telegram}
                onChange={changeValue}
              />
              <Label2>Twitter</Label2>
              <Input1
                placeholder="twitter"
                name="twitter"
                defaultValue={data.twitter}
                onChange={changeValue}
              />
              <Label2>Linkedin</Label2>
              <Input1
                placeholder="linkedin"
                name="linkedin"
                defaultValue={data.linkedin}
                onChange={changeValue}
              />
              <Label2>Facebook</Label2>
              <Input1
                placeholder="facebook"
                name="facebook"
                defaultValue={data.facebook}
                onChange={changeValue}
              />
              <Label2>Instagram</Label2>
              <Input1
                placeholder="instagram"
                name="instagram"
                defaultValue={data.instagram}
                onChange={changeValue}
              />
            </Right>
          </InputBox>
        </Bottom>
      </Box>
    </Content>
  );
};

export default RegionEdit;
