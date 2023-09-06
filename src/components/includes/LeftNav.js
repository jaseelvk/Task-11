import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom';
 function LeftNav() {
  return (
    <>
    <NavContainer>

        <NavLogo  
          src={require("../../Assets/Logo.svg").default} alt="Logo" />
          <NavHead>MAIN MENU</NavHead>

    </NavContainer>
    <NavList>
      <NavImg 
      src={require("../../Assets/akar-icons_dashboard.svg").default} alt="NavImage"/>
      
    </NavList>
    </>
  )
}
export default LeftNav;