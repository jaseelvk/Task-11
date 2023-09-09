import React from 'react'
import { styled } from 'styled-components'
function CateringSts() {
  return (
 <>
  <SoonContainer>
    <ComingSoon>
      COMING SOON  !!!
    </ComingSoon>
  </SoonContainer>
 
 </>
  )
}
const SoonContainer = styled.div`
width: 100%;
height:100hv;
margin-top:200px;
text-align: center;
position: relative;
animation-name: example;
animation-duration: 4s;
@keyframes example {
  0%   {background-color:red; left:0px; top:0px;}
  25%  {background-color:yellow; left:200px; top:0px;}
  50%  {background-color:blue; left:200px; top:200px;}
  75%  {background-color:green; left:0px; top:200px;}
  100% {background-color:red; left:0px; top:0px;}
}

`;
const ComingSoon = styled.h1`
  font-size: 55px;
`;
export default CateringSts