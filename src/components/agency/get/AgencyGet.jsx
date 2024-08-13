import React from "react";
import styled from "styled-components";
import { Flex } from "../../Utlis";
import Card from "./Card";
import { PieChart } from "react-minimal-pie-chart";
import { Icon2, Icon3, Icon4, Vector } from "../../../assets/img/img";
import UseInput from "../../../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { addElement } from "../../../config/agency-statis";
import Topbar from "../../library/Topbar";
import { showElem } from "../../../config/edit1";
import axios from "axios";
const Content = styled(Flex)`
  flex-direction: column;
  gap: 13px;
  width: 100%;
`;

const Box = styled(Flex)`
  width: 100%;
  gap: 71px;
  flex-direction: column;
  padding-left: 39px;
  padding-right: 91px;
`;
const Cards = styled(Flex)`
  gap: 12px;
`;
const Bottom = styled(Flex)`
  gap: 92px;
  justify-content: end;
  align-items: flex-end;
`;
const Left = styled(Flex)`
  flex-direction: column;
  gap: 55px;
  align-items: center;
`;
const Right = styled(Flex)`
  flex-direction: column;
  gap: 86px;
`;
const InputBox = styled(Flex)`
  flex-direction: column;
  gap: 20px;
`;
const ColorG = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 10000px;
  background: #4eb027;
`;
const ColorB = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 10000px;
  background: #2c4da4;
`;
const ColorP = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 10000px;
  background: #d16eff;
`;
const Label = styled.label`
  gap: 5px;
  align-items: center;
  display: flex;
  color: #141f14;
  font-family: Open Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
`;
const Inputs1 = styled(Flex)`
  gap: 10px;
`;
const Inputs2 = styled(Flex)`
  gap: 5px;
`;
const Input1 = styled.input`
  padding: 10px 12px;
  width: 120px;
  height: 40px;
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
`;
const Input2 = styled.input`
  padding: 10px 12px;
  color: #444;
  font-family: Overpass;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.24px;
  border-radius: 3px;
  border: 1px solid #e5e6e6;
  background: rgba(242, 243, 244, 0.8);
`;
const AgencyGet = () => {
  const { edit1 } = useSelector(showElem);
  const [data1, setData] = React.useState({});
  const dispatch = useDispatch();
  async function getInfo() {
    await axios
      .get("https://api.agroxizmatlar.uz/agency-statistic")
      .then((res) => {
        setData(res.data);
      });
  }
  const { value, changeValue } = UseInput(data1);

  const defaultLabelStyle = {
    fontSize: "8px",
    fontFamily: "sans-serif",
  };
  React.useEffect(() => {
    getInfo();
  }, []);
  React.useEffect(() => {
    dispatch(addElement(value));
  }, [value]);
  return (
    <Content>
      <Topbar text1={""} text2={""} />
      <Box>
        <Cards>
          <Card img={Icon2} t1={"2400 м²"} t2={"Ajiratilgan yer maydoni"} />
          <Card
            img={Icon3}
            t1={"2400 mln uzs"}
            t2={"Ajiratilgan subsidiyalar"}
          />
          <Card
            img={Icon3}
            t1={"475 mln uzs"}
            t2={"Issiqxona uchun subsidiyalar"}
          />
          <Card img={Icon4} t1={"1273"} t2={"Saytga tashrif buyuruvchilar"} />
        </Cards>
        <Bottom>
          <Left>
            <PieChart
              style={{
                width: "217px",
                height: "218px",
              }}
              label={({ dataEntry }) => dataEntry.value + "%"}
              labelStyle={{
                ...defaultLabelStyle,
              }}
              data={[
                {
                  title: "Rad qilingan",
                  value: data1.underReviewPercantage,
                  color: "#2C4DA4",
                },
                {
                  title: "Korib chiqilmoqda",
                  value: data1.rejectedPercantage,
                  color: "#4EB027",
                },
                {
                  title: "Hal qilingan",
                  value: data1.solvedPercantage,
                  color: "#D16FFF",
                },
              ]}
            />
            <Inputs1>
              <InputBox>
                <Label>
                  <ColorG />
                  Korib chiqilmoqda
                </Label>
                <Input1
                  type="number"
                  name="uderReview"
                  disabled={edit1 == false}
                  defaultValue={data1.uderReview}
                  onChange={changeValue}
                />
              </InputBox>
              <InputBox>
                <Label>
                  <ColorB />
                  Rad qilingan
                </Label>
                <Input1
                  type="number"
                  name="rejected"
                  disabled={edit1 == false}
                  defaultValue={data1.rejected}
                  onChange={changeValue}
                />
              </InputBox>
              <InputBox>
                <Label>
                  <ColorP />
                  Hal qilingan
                </Label>
                <Input1
                  type="number"
                  name="solved"
                  disabled={edit1 == false}
                  defaultValue={data1.solved}
                  onChange={changeValue}
                />
              </InputBox>
            </Inputs1>
          </Left>
          <Right>
            <img src={Vector} />
            <Inputs2>
              <InputBox>
                <Label>Ajiratilgan yer maydoni</Label>
                <Input2
                  type="number"
                  name="detachedLandArea"
                  disabled={edit1 == false}
                  defaultValue={data1.detachedLandArea}
                  onChange={changeValue}
                />
              </InputBox>
              <InputBox>
                <Label>Ajiratilgan subsidiyalar</Label>
                <Input2
                  type="number"
                  name="allocatedSubsidies"
                  disabled={edit1 == false}
                  defaultValue={data1.allocatedSubsidies}
                  onChange={changeValue}
                />
              </InputBox>
              <InputBox>
                <Label>Issiqxona uchun subsidiyalar</Label>
                <Input2
                  type="number"
                  name="greenhouseSubsidies"
                  disabled={edit1 == false}
                  defaultValue={data1.greenhouseSubsidies}
                  onChange={changeValue}
                />
              </InputBox>
            </Inputs2>
          </Right>
        </Bottom>
      </Box>
    </Content>
  );
};

export default AgencyGet;
