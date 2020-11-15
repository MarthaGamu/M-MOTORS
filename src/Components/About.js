import React from 'react';
import styled from 'styled-components';

const StyledAbout =styled.div`
width:100vw;
height:550px;
background:#f4f4f4;

.heading{
    width:90vw;
    height:100px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:auto;
    color:#333333;
    text-align:center;
    font-size:25px;
   

    h2{
        margin:0;
        letter-spacing: 2px;
        
    }
}
.videoWrapper{
    width:100vw;
    height:500px;
    display:flex;
    justify-content:center;
    margin-top:20px;

    
    .video{
        width:40vw;
        height:350px;
        
        border-radius:2%;
        
      
        
    }
}
`;
 function About() {
    return (
        <div>
           <StyledAbout>
               <div className='heading'>
                   <h2>WATCH THIS VIDEO TO FIND MORE ABOUT US.</h2>
                   </div>
  
                 <div className='videoWrapper'>
                     <div className='video'>

                     <iframe width="560" height="315" src="https://www.youtube.com/embed/jIusjDquImg?start=844" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



                         </div>

                     </div>
               </StyledAbout>
        </div>
    )
}
export default About;