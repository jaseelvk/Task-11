import React from "react";
import { styled } from "styled-components";
import GuestName from "./GuestName";
function DashBoard() {
  return (
    <>
      <Container>
        <DashContainer>
          <MaleContainer>
            <GuestContainer>
              <ImgContainer>
                <GenImg
                  src={require("../../Assets/white icon.svg").default}
                  alt="Male"
                />
              </ImgContainer>
              <Heading>Male Guest</Heading>
            </GuestContainer>

            <TotelContainer>
              <Total>
                <InvitesHead>Total Invites</InvitesHead>
                <TotalCount>8,124</TotalCount>
              </Total>
              <Bar></Bar>
              <Total>
                <InvitesTotel>Total Come</InvitesTotel>
                <TotalCount>4,204</TotalCount>
              </Total>
            </TotelContainer>
          </MaleContainer>
          <FemaleContainer>
            <GuestContainer>
              <ImgContainer>
                <GenImg
                  src={require("../../Assets/white icon2.svg").default}
                  alt="FemaleIcon"
                />
              </ImgContainer>
              <Heading>Female Guest</Heading>
            </GuestContainer>
            <TotelContainer>
              <Total>
                <InvitesHead>Total Invites</InvitesHead>
                <TotalCount>9,620</TotalCount>
              </Total>
              <Bar></Bar>
              <Total>
                <InvitesTotel>Total Come</InvitesTotel>
                <TotalCount>6,125</TotalCount>
              </Total>
            </TotelContainer>
          </FemaleContainer>

          <GraphContainer>
            <GraphHead>Visitor Traffic</GraphHead>
            <GraphImgContainer>
              <GraphImg
                src={require("../../Assets/Group 3465418.svg").default}
              />
            </GraphImgContainer>
          </GraphContainer>
        </DashContainer>
      
        <GuestName/>
        
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100hv;
  background-color: #f9f7f8;

`;
const DashContainer = styled.span`
  display: flex;
  jsutify-content: space-between;
  padding: 20px;
  @media all and (max-width:768px){
   
    display: flex;
  
    flex-wrap: wrap;

}
`;
const MaleContainer = styled.div`
  margin-top: 20px;
  height: 37%;
  width: 39%;
  padding: 20px 2px 2px 6px;
  background-color: #a6e3e4;
  border-radius: 20px;
  @media all and (max-width:768px){
   
    width: 48%;


}

@media all and (max-width:480px){
  width: 81%;

}
@media all and (max-width:360px){
  width: 100%;

}
`;
const ImgContainer = styled.span`
  width: 40px;
  height: 40px;
  background-color: #000;
  padding: 10px 10px 10px 10px;
  border-radius: 50%;
  margin-top: 0 auto;
`;

const GenImg = styled.img`
  width: 23px;
  margin: 0 auto;
  display: block;
  padding: 10px;
`;
const GuestContainer = styled.div`
  display: flex;
  padding: 10px;
  margin-left: 30px;
`;

const Heading = styled.h1`
  font-size: 25px;
  color: #000;
  margin-left: 10px;
`;
const TotelContainer = styled.div`
  display: flex;
  margin-left: 40px;
`;
const FemaleContainer = styled.div`
  margin-top: 20px;
  height: 40%;
  width: 38%;
  padding: 20px 2px 2px 6px;
  background-color: #d2a2f6;
  border-radius: 20px;
  margin-left: 20px;
  @media all and (max-width:768px){
    margin-left: 6px;
    width: 48%;


}
@media all and (max-width:480px){
  width: 81%;

}
@media all and (max-width:360px){
  width: 100%;

}
`;

const TotalCount = styled.h1`
  margin-bottom: 30px;
`;
const Bar = styled.div`
  border-right: 1px solid #000;
  height: 100px;
  margin-top: 30px;
  font-weight: 700;
`;
const Total = styled.div`
  padding: 0px 20px 0px  20px;
`;
const InvitesHead = styled.h5`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 20px;
`;
const InvitesTotel = styled.h5`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 20px;
`;
const GraphContainer = styled.div`
  margin-left: 20px;
  width: 20%;
  background-color: #fff;
  border-radius: 20px;
  margin-top: 20px;
  @media all and (max-width:768px){
   
    width:40%;
   margin-left: 20%;
    margin-top: 20px;

}
@media all and (max-width:360px){
  width:60%;
}

`;
const GraphHead = styled.h4`
  padding-top: 20px;
  font-size: 20px;
  margin: 0 auto;
  padding-left: 40px;
`;
const GraphImgContainer = styled.div``;
const GraphImg = styled.img`
  display: block;
  width: 156px;
  margin: 0 auto;
`;

export default DashBoard;
