import React from 'react';
import styled from 'styled-components';
import undercar from '../images/undercar.jpg';
import driving from '../images/driving.jpg';
import iphone from '../images/iphone.jpg';


const ServiceStyled = styled.div`
.backgroundBanner{
    width:100vw;
    height:550px;
    background:linear-gradient(to  bottom,
        rgba(0,0,0,0.8),
       30%, rgba(0,0,0,0.8)
       41%,rgba(0,0,0,0.8)
       100%
    ),
    
    
    url(${props=>props.image});
    opacity:0.9;
    
}
.headingWrapper{
    width:30vw;
    height:100px;
    margin:auto;
    color:white;
    text-align:center;
    padding-top:30px;
}
.imageWrapper{
    margin-top:80px;
    display:flex;
    justify-content:space-around;

    .innerImage{
        width:350px;
        height:250px;
        border:1px solid white;
        background:black;
        border-radius:2%;
        position:relative;
        
     img{
         width:100%;
         height:100%;
         object-fit:cover;
         border-radius:2%;
         
     }
      .text{
          width:300px;
          height:60px;
          background:#098ccd;
          color:white;
          display:flex;
          justify-content:center;
          align-items:center;
          margin:auto;
          position:absolute;
          Top:190px;
          left:25px;
          right:25px;
          transition: width 5s;
      }
      .text:hover{
          display:none;
      }  
    }
}

`;

function ServiceBanner(props) {
    return (
        <div>
            <ServiceStyled image={props.image}>
                <div className= 'backgroundBanner' >
                    <div className='headingWrapper'>
                        <h2>WHICH SERVICE DO YOU <br/>REQUIRE </h2><hr/>
                        </div>
                    <div className='imageWrapper'>
                   <div className='innerImage'>
                  
                   <img src={undercar} alt='service and repair'/>
                   <div className='text'>
                       <h3>SERVICING AND REPAIRS</h3>
                       </div>
                       </div>
                       <div className='innerImage'>
                       <img src={driving} alt='service and repair'/>
                       <div className='text'>
                       <h3>MOT WORK</h3>
                       </div>
                       </div>

                       <div className='innerImage'>
                       <img src={iphone} alt='service and repair'/>
                       <div className='text'>
                       <h3>BOOK A FREE QUOTE</h3>  
                       </div>
                      </div> 
                      </div>
                   </div>
            

                </ServiceStyled>

        </div>
    )
}

export default ServiceBanner
