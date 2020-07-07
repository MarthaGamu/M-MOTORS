import React from 'react';
import Nav from '../Components/Nav';
import styled from 'styled-components';
import Footer from '../Components/Footer';
import hand from '../images/hand.jpg'
const StyledTestimonial = styled.div`
line-height:1.8;
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
    letter-spacing:3px;
    
  }
.contentContainer{
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:18px;
    width:100vw;
    height:820px;
    background:#f4f4f4;
.contentWrapper{
    width:95vw;
    height:700px;
    margin:auto;
    color:#5d6873;


    h2{
        padding-top:60px;
        margin:0;
        color:#333333;
    }
    .firstQuote{
        font-style:italic;
        
        
    }
    .secondQuote{
        display:flex;
        align-items:center;
        padding:10px;
       
    }
   .Quote{
       width:60%;
       height:280px;
      
   }
   .shakingHand{
       width:40%;
       height:280px;
       
       margin:auto;
   }
   .innerHand{
       width:350px;
       height:250px;
      

       img{
           width:100%;
           height:100%;
           border-radius:10%;
       }
   }
   .name{
       font-style:bold;
       font-size:18px;
       margin-left:10px;
       font-weight:900;
   }

}
}

`;

function Testimonial() {


    return (
        
        <div>
            <Nav/>
            <StyledTestimonial>
            <div className='topHeader'>
            
           TESTIMONIALS
              </div>
          <div className ='contentContainer'>
           <div className = 'contentWrapper'>
               <h2>HERE IS   FEEDBACK FROM OUR SATISFIED CUSTOMERS</h2>
               <div className='firstQuote'>
               <blockquote>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
               
               <span className='name'><q>Marks Spencer</q></span></blockquote>
<div className='secondQuote'>
    <div className='Quote'>
    <blockquote>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
               
               <span className='name'><q>Natasha Williams</q></span></blockquote>
    
    </div>
    <div className='shakingHand'>
        <div className ='innerHand'>
    <img src={hand} alt='hand'/>
    </div>
    </div>

    

    </div>
    <div className='thirdQuote'>
    <blockquote>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
               
               <span className='name'><q>Alexander Chamwada</q></span></blockquote>
        </div>
                   </div>
               </div>
              </div>

              </StyledTestimonial>
              <Footer/>
        </div>
        
    )
}

export default Testimonial
