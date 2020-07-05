import React from 'react';
import Nav from '../Components/Nav';
import styled from 'styled-components';
function MOT() {
    const StyledMot = styled.div`
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
            <StyledMot>
            <div className='topHeader'>
           MOT WORK
              </div>
              </StyledMot>
        </div>
    )
}

export default MOT
