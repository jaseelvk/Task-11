import React, { useState } from "react";
import { styled } from "styled-components";
import Graph from "./Graph";

function GuestList() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleActionButtonClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const guestListItems = [
    {
      name: "Aisyah Namanya",
      time: "2 minutes ago",
      image: require("../../Assets/Rectangle 20695.jpg"),
      isHidden: activeIndex === 0,
    },
    {
      name: "Cak Handoko",
      time: "6 minutes ago",
      image: require("../../Assets/Rectangle 20696.jpg"),
      isHidden: activeIndex === 1,
    },
    {
      name: "Aisyah Namanya",
      time: "2 minutes ago",
      image: require("../../Assets/Rectangle 20695.jpg"),
      isHidden: activeIndex === 2,
    },
  ];

  return (
    <>
      <AllMain>
        <GuestListContainer>
          <GuestMainContainer>
            {guestListItems.map((item, index) => (
              <GuestTowerContainer key={index}>
                <GuestListImgContainer>
                  <GuestImg src={item.image} alt="Guest" />
                </GuestListImgContainer>
                <GuestListItem>
                  <GuestName>
                    {item.name} <GuestTime>{item.time}</GuestTime>
                  </GuestName>

                  {item.isHidden ? (
                    <HiddenContainer>
                      <HiddenImg
                        src={require("../../Assets/fa-solid_pen.svg").default}
                        alt="Edit"
                      />
                      <HiddenImg
                        src={require("../../Assets/bxs_trash-alt.svg").default}
                        alt="trash"
                      />
                    </HiddenContainer>
                  ) : (
                    <GuestAction>
                      <ActionButton
                        onClick={() => handleActionButtonClick(index)}
                      >
                        <ButtonImg
                          src={
                            require("../../Assets/bi_three-dots-vertical.svg")
                              .default
                          }
                          alt="Doted"
                        />
                      </ActionButton>
                    </GuestAction>
                  )}
                </GuestListItem>
              </GuestTowerContainer>
            ))}
          </GuestMainContainer>
        </GuestListContainer>
        <Graph/>
      </AllMain>
    </>
  );
}
const AllMain = styled.div`
  display: flex;
  @media all and (max-width:768px){
    flex-wrap: wrap;
  }
`;
const GuestListContainer = styled.div`
  width: 50%;
  height: 100vh;
  background-color: #f9f7f8;
  @media all and (max-width: 640px) {
    margin-left:80px;
  }
  @media all and (max-width:480px){
    margin-left:20px;
  }
  @media all and (max-width:360px){
    margin-left:0px;
  }
`;
const GuestTowerContainer = styled.span`
  display: flex;
  justify-content: space-between;
  width: 370px;
  height: 100px;
  margin-left: 40px;
  margin-top: 60px;
  background-color: #fff;
  border-radius: 20px;
  &:active {
    transition: 2sec;
    transform: translateX(6px);
  }
  @media all and (max-width:360px){
    width:297;      
    margin-left: 1px;
  }
  
`;
const GuestMainContainer = styled.div``;
const GuestListImgContainer = styled.span``;
const GuestImg = styled.img`
  display: block;
  width: 40px;
  border-radius: 50%;
  margin-top: 30px;
  margin-left: 10px;
`;
const GuestListItem = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const GuestName = styled.h5`
  font-size: 18px;
  margin-left: 20px;
  width: 172px;
`;
const GuestTime = styled.p`
  font-size: 13px;
  color: #a8a8a8;
`;
const ActionButton = styled.div`
  width: 30px;

  margin-top: 20px;
`;
const ButtonImg = styled.img`
  display: block;
  width: 100%;
`;
const HiddenContainer = styled.div`
  width: 128px;
  height: 100px;
  background-color: #e6ccf9;
  border-radius: 20px;

`;
const GuestAction = styled.div`
  width: 20%;
  margin-left: 50px;

`;

const HiddenImg = styled.img`
  margin-top: 35px;
  margin-left: 30px;
  &:last-child {
    margin-left: 10px;
  }
`;

export default GuestList;
