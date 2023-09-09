import React from "react";

import { styled } from "styled-components";
import GuestList from "./GuestList";
function GuestName() {
  return (
    <>
      <GuestMainContainer>
        <GuestRecentContainer>
          <GuestTwocontainer>
                <RecentName>
                    Recently Guest
                </RecentName>
                <GuestMoreName>
                    See more
                </GuestMoreName>
          </GuestTwocontainer>
        </GuestRecentContainer>
        <GuestRecentContainer>
        <GuestTwocontainer>
                <RecentName>
                 Guest Traffic
                </RecentName>
                <GuestMoreName>
                    See more
                </GuestMoreName>
          </GuestTwocontainer>
        </GuestRecentContainer>
      </GuestMainContainer>
      <GuestList/>
    </>
    
  );
}
const GuestMainContainer = styled.div`
  width: 100%;
  height: 100hv;
  background-color: #f9f7f8;
  display:flex;
  justify-content: space-around;
`;
const GuestRecentContainer = styled.span`
width:37%
 
`;
const  GuestTwocontainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media all and (max-width:480px){
      display:none;
    }

`;
const RecentName = styled.h4`
    font-size: 20px;
    margin-bottom:20px;

`;

const GuestMoreName = styled.p`
    padding-top:20px;
    font-size:14px;
    color:#c6c6c4;
`;

export default GuestName;
