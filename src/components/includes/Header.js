import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom';
function Header() {
  return (
<>
<MainContainer>
    <HeadContainer>
            <NavView>
                <DataLink>OverView</DataLink>
            </NavView>
            <NavView>
                <DataLink>Guestlist</DataLink>
            </NavView>
            <NavView>
                <DataLink>Temprory traffic</DataLink>
            </NavView>
        </HeadContainer>
        <SettingsHead>
            <Setting>
                <SettingImg
                src={require("../../Assets/bxs_bell.svg").default} alt="Bell" />
            </Setting>
            <Setting>
                <SettingImg
                src={require("../../Assets/Rectangle 20695.jpg")} alt="Bell" />
            </Setting>
        </SettingsHead>
</MainContainer>


</>
  )
}
const MainContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
`;
const HeadContainer = styled.div`
width:40%;
margin-top:50px;
display:flex;
justify-content:space-around;

`;

const NavView = styled.ul`

`

const DataLink = styled(Link)`
text-decoration: none;
color: #8D8989;
margin-right: 20px;
font-weight: 600;
&:hover {
    color: #000;
  border-bottom: 2px solid #000;
}
`;

const SettingsHead = styled.div`
margin-top:3px;
display:flex;
justify-content: space-between;


`;

const Setting = styled.div`

`;

const SettingImg = styled.img`
    padding:20px;
    display:block;
    width:35px;
    &:last-child {
        border-radius:50px;
        
    }
`;



export default Header
