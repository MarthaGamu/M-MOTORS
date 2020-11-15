import React from 'react';
import styled from 'styled-components';


const ImageStyled = styled.div`
width:100vw;
height:90vh;
background:linear-gradient(to  bottom,
    rgba(0,0,0,0.7),
   30%, rgba(0,0,0,0.6)
   41%,rgba(0,0,0,0.9)
   100%
),


url(${props=>props.image});
background-repeat:no-repeat;

background-size:cover;
object-fit:cover;
.innerHeading{
    width:500px;
    height:100px;
    
    color:white;
    text-align:center;
   

}
.Wrapper{
    width:100vw;
    height:60vh;
    display:flex;
    justify-content:center;
   position:absolute;
   Top:50%;
}
`;

function imageBanner(props) {
    return (
        <ImageStyled image={props.image}> 
        <div>
        <div className='Wrapper'>
            <div className ='innerHeading'>
            <h1>WELCOME TO OUR WORKSHOP</h1>
            </div>
           
        </div>
        </div>
        </ImageStyled>
    )
}

export default imageBanner
