import React from 'react'
import Nav from '../Components/Nav';
import styled from 'styled-components';
import Footer from '../Components/Footer';

const StyledBook = styled.div`
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

function Book() {
    return (
        <div>
          <Nav/>
          <StyledBook>
            <div className='topHeader'>
              BOOK NOW
              </div>
            </StyledBook>
            <Footer/>
        </div>
       
    )
}

export default Book;

