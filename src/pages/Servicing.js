import React from 'react';
import Nav from '../Components/Nav';
import styled from 'styled-components';
function Servicing() {

    const StyledServicing =styled.div`
    
    .topHeader{
        width:100vw;
        height:100px;
        background:#088ccd;
        color:white;
        display:flex;
        justify-content:center;
        font-weight:800;
        font-size:40px;
        align-items:center;
        letter-spacing:2px;
      }
    `;
    return (
        <div>
            <Nav/>
            <StyledServicing>
            <div className='topHeader'>
           CAR SERVICING
              </div>
              </StyledServicing>
        </div>
    )
}

export default Servicing
