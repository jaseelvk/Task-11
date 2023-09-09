import React from "react";
import styled from "styled-components";

import {
  BarChart,
  Bar,
  // XAxis,
  // YAxis,
  // CartesianGrid,
  Tooltip,
  //   Legend
} from "recharts";

const data = [
  {
    name: "Page A",
    Female_Guest: 300,
    Male_Guest: 310,
    Total_Guest: 1600,
    amt: 2400,
  },
  {
    name: "Page B",
    Female_Guest: 290,
    Male_Guest: 195,
    Total_Guest: 2098,
    amt: 2210,
  },
  {
    name: "Page C",
    Female_Guest: 250,
    Male_Guest: 230,
    Total_Guest: 2600,
    amt: 2290,
  },
  {
    name: "Page D",
    Female_Guest: 310,
    Male_Guest: 290,
    Total_Guest: 3408,
    amt: 2000,
  },
  {
    name: "Page E",
    Female_Guest: 240,
    Male_Guest: 260,
    Total_Guest: 2000,
    amt: 2181,
  },
  {
    name: "Page F",
    Female_Guest: 275,
    Male_Guest: 290,
    Total_Guest: 2900,
    amt: 2500,
  },
];

export default function Graph() {
  return (
    <>
      <GraphContainer>
        <BarChartBox>
          <Charth3>Guest Traffic</Charth3>
          <GraphHead>
            <GuestTop>
              <TotalDiv>
                <Tbox></Tbox>
                <Gh4>Total guest</Gh4>
              </TotalDiv>
              <TotalDiv>
                <Mbox></Mbox>
                <Gh4>Male guest</Gh4>
              </TotalDiv>
              <TotalDiv>
                <Fbox></Fbox>
                <Gh4>Female guest</Gh4>
              </TotalDiv>
            </GuestTop>
            <Slide>
              <Limg
                src={
                  require("../../Assets/eva_arrow-ios-back-fill.svg").default
                }
              />
              <Limg
                src={
                  require("../../Assets/eva_arrow-ios-back-fill-1.svg").default
                }
              />
            </Slide>
          </GraphHead>
          <BarChart
            width={500}
            height={250}
            data={data}
            margin={{
              top: 10,
              right: 40,
              left: 20,
              bottom: 5,
            }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            {/* <XAxis dataKey="name" /> */}
            {/* <YAxis /> */}
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="Total_Guest" stackId="a" fill="#000" />
            <Bar dataKey="Female_Guest" stackId="a" fill="#D2A2F7" />
            <Bar dataKey="Male_Guest" stackId="a" fill="#A5E3E3" />
          </BarChart>
        </BarChartBox>
      </GraphContainer>
    </>
  );
}

const GraphContainer = styled.section`

  margin-right:95px;
  width: 50%;
  height: 320px;
  margin-top: 25px;
  background-color: #fff;
  margin-left: 40px;
  border-radius: 20px;
  text-align: center;
  @media all and (max-width: 1080px) {
    width: 85%;
  }
  @media all and (max-width: 980px) {
    background: #f9f8f8;
  }
  @media all and (max-width: 640px) {
    width: 120%;
    background-color: #fff;
  }
  @media all and (max-width: 480px) {
    width: 100%;
  }
  @media all and (max-width:480px){
    display:none;
  
  }
`;
const Charth3 = styled.h3`
  display: none;
  @media all and (max-width: 1080px) {
    display: block;
    font-size: 25px;
    font-weight: bold;
  }

  @media all and (max-width: 768px) {
    margin-left: 40px;
  }
  @media all and (max-width: 480px) {
    width:40%;
  }
`;
const BarChartBox = styled.section`
  width: 90%;
  margin: 0 auto;
  @media all and (max-width: 1280px) {
    width: 95%;
  }
  @media all and (max-width: 768px) {
    width: 90%;
    position: relative;

    background-color: #fff;
  }
  @media all and (max-width: 640px) {
    width: 100%;
  }
  @media all and (max-width: 480px) {
  }
  @media all and (max-width: 360px) {
    left: -163px;
  }
`;

const GraphHead = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  @media all and (max-width: 768px) {
    width: 115%;
    margin-left: 20px;
  }
  @media all and (max-width: 640px) {
    margin-top: -10px;
    width: 100%;
  }
`;
const GuestTop = styled.section`
  display: flex;
  align-items: center;
  @media all and (max-width: 1280px) {
    align-items: flex-start;
  }
  @media all and (max-width: 640px) {
    display: flex;
    margin-left: 100px;
  }
  @media all and (max-width: 480px) {
    width: 150%;
  }
`;
const TotalDiv = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-size: 13px;
  &:last-child {
    margin-right: 0;
  }
  @media all and (max-width: 1280px) {
    margin-right: 10px;
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  @media all and (max-width: 640px) {
    margin-right: 20px;
  }
`;
const Tbox = styled.span`
  background-color: #000;
  border-radius: 10px;
  padding: 10px;
  display: inline-block;
  margin-right: 5px;
`;
const Gh4 = styled.h4``;

const Mbox = styled.span`
  background-color: #a5e3e3;
  border-radius: 10px;
  padding: 10px;
  display: inline-block;
  margin-right: 5px;
`;

const Fbox = styled.span`
  background-color: #d2a2f7;
  border-radius: 10px;
  padding: 10px;
  display: inline-block;
  margin-right: 5px;
`;

const Slide = styled.div`
  @media all and (max-width: 640px) {
    display: none;
  }
`;
const Limg = styled.img``;
