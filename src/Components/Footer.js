import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`

.boxFooter{
    width:100vw;
    height:auto;
    position:relative;
    display:flex;
    justify-content:center;
    background:#ffffff;
    .innerBox{
        width:50px;
        height:50px;
        background:#098ccd;
        color:white;
        font-size:20px;
        text-align:center;
        transform: rotate(45deg);
        border:0.1px solid white;
        position:relative;
        z-index:0;
        top:15px;
       
    }
    i{
        position:absolute;
        display:flex;
        justify-content:center;
        align-items:center;
         margin-top:25px;
        z-index:1;
        font-size:20px;
        color:white;
        animation:move 2s infinite;

    }
}
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
            <div className= 'boxFooter'>
                <div className='innerBox'>
          
            </div>
            <i class="fas fa fa-chevron-up"></i>
                </div>
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
