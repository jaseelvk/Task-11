import React from 'react'
import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom';
import Header from './Header';
 function LeftNav() {
  return (
    <>
   
    <NavContainer>
      
      <NavLogo  
        src={require("../../Assets/Logo.svg").default} alt="Logo" />
                <NavHead>MAIN MENU</NavHead>
    <NavList>
          <NavItem to="/">
                <NavImg 
                            src=
                            {require("../../Assets/akar-icons_dashboard.svg").default}
                            alt="NavImage"/>
                      <Span to="*">Dashboard</Span>

          </NavItem>

          <NavItem to="/cateringsts">
                <NavImg 
                            src=
                            {require("../../Assets/fluent_food-cake-20-regular.svg").default}
                            alt="NavImage"/>
                      <Span to="/">Catering status</Span>

          </NavItem>
                
          <NavItem to="/guesttraffic" >
                <NavImg 
                            src=
                            {require("../../Assets/bx_bar-chart-square.svg").default}
                            alt="NavImage"/>
                      <Span >Guest traffic</Span>

          </NavItem>

          <NavItem to="/gift">
                <NavImg 
                            src=
                            {require("../../Assets/ant-design_gift-outlined.svg").default}
                            alt="NavImage"/>
                      <Span to="*">Gifts 
                      <Bg>22
                      </Bg>
                       </Span>

          </NavItem>
                
    </NavList>
    <NavHead>SETTINGS</NavHead>
    <NavListBottom>
          <NavItem to="/account">
                <NavImg 
                            src=
                            {require("../../Assets/healthicons_ui-user-profile-outline.svg").default}
                            alt="NavImage"/>
                      <Span to="*">Account</Span>

          </NavItem>            


          <NavItem to="/wallet">
                <NavImg 
                            src=
                            {require("../../Assets/clarity_wallet-line.svg").default}
                            alt="NavImage"/>
                      <Span >Wallet</Span>

          </NavItem>
          <NavItem to="/help">
                <NavImg 
                            src=
                            {require("../../Assets/fluent_chat-help-20-regular.svg").default}
                            alt="NavImage"/>
                      <Span to="*">Help & Support</Span>

          </NavItem>          

    </NavListBottom>
</NavContainer>
    

    </>
  )
};

const NavContainer = styled.div`
      margin-left:20px;
      width: 16%;
      padding:36px 17px 10px 11px;
      border-style: none;
      @media all and (max-width:1080px) {
            width: 18%;
      }
      @media all and (max-width:480px){
            margin-left: -3px;
            width: 16%;
            padding: 26px 36px 10px 11px;
            border-style: none;
      }

`;

const NavLogo = styled.img`
      display:block;
      width:62%;
      margin-bottom:50px;
      margin-top:60px;
      @media all and (max-width:480px){
            display:none;
      }
`;

const NavHead = styled.h5`
      font-size:18px;
      margin-left:0px;
      color:#8D8989;
      margin-top:87px;
`;


const NavList = styled.div`


`;
const NavItem = styled(NavLink)`
      display:flex;
      justify-content:start;
      padding:20px;
      text-decoration: none;
      @media all and (max-width:480px){
            padding:12px;
          
          }

`;
const NavListBottom = styled.div`


`;

const NavImg = styled.img`
      display:block;
      padding:0px 10px 0 0 ;



    @media all and (max-width:1080px) {
      display: block;
      padding: 0px 4px 0 0; 
}
`;

const Span = styled.span`
color: #000;
display:flex; 
align-items: center;
font-size: 14px;
margin-right: 10px;
&:hover {
  font-weight: 600;
  color: #000;
}
@media all and (max-width:1280px) {
 font-size: 13px;
    margin-right: 1px;         
}

@media all and (max-width:1080px) {
      font-size: 12px;
      margin-right: 0px;   
}

`;

const Bg = styled.div`
    width:15px;
    margin-left: 10px;
    height:15px;
    background-color: #A5E3E3;
    padding:2px 8px 1px 9px ;
    border-radius:12px;
    font-size:10px;
    color:#F9F8F8;
    
`;

export default LeftNav;