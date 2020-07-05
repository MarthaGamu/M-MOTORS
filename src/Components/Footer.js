import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
.topFooter{
    background:#098ccd;
    width:100vw;
    height:250px;
    color:white;
    font-size:18px;
    display:flex;
    justify-content:flex-end;
    .Address {
    flex:1;
       padding-top:50px;
        margin-left:100px;
    }
    .services{
        
        flex:2;
        
        padding-top:50px;
        font-size:14px;
        display:flex;
        flex-direction:column;
        
        align-items:flex-end;
        margin-right:40px;
           }
}
.bottomFooter{
    width:100vw;
    height:160px;
    background:#0770a4;
    color:white;
    
    .footerWrapper{
        width:400px;
        padding-top:50px;
        margin:  auto;
        text-align:center;
    }
    .copyright{
        margin-bottom:30px;
    }
    p{
        margin:0;


        .lastWord::last-word {
            background:red;
        }
        
    }
    
    
}
`;




function Footer() {
    return (
        <StyledFooter>
        <div className='topFooter'>
            <div className='Address'>
              
           <p>M-MOTOR garage <br/>62 Saint John's Road <br/>Sevenoaks<br/>Kent<br/></p>
             </div>
            <div className='services'>
             <p>Wheel Alignment</p>
             <p>Tyre Pressure</p>
             <p>Panel Beating</p>
            </div>
        </div>
        <div className='bottomFooter'>
            <div className='footerWrapper'>
            <p className='copyright'><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />Copyright 2020 Reserved by Martha G Mandizvidza</p>
            <p className='lastWord'>Designed by Marthee</p>
            </div>
            </div>
        </StyledFooter>
        
    )
}

export default Footer
