import React from 'react';
import styled from 'styled-components';
import hand from '../images/hand.jpg';

const HomeStyle = styled.div`
.firstSection{
    width:100vw;
    height:380px;
   background:#f4f4f4;
    
    .Wrapper{
        
        width:95vw;
        height:350px;
        display:flex;
        flex-wrap:wrap;
        
        margin:20px auto;
    }
    .information{
        flex:2;
     p{
         margin-left:20px;
     }


    }
    .leftImage{
        flex:1;
        
        .imageWrapper{
            width:370px;
            height:240px;

            img{
                width:100%;
                height:100%;
                object-fit:cover;
                margin-left:30px;
                margin-top:20px;
                border-radius:10px;
            }
        }
        

    }

}}

@media screen and(max-width: 600px) {
    .firstSection{
        height:900px;
    }
    .Wrapper{
       
        display:block;
        background:green;

        .information{
            display:block;
        }
        .leftImage{
            display:block;
        }
    }
    
  }
  
  .leftImage{
    display:block;
    
    .imageWrapper{
        width:250px;
        height:240px;
        background:blue;

        img{
            width:100%;
            height:100%;
            object-fit:contain;
           margin:auto;
            border-radius:10px;
        }
    }
    

}


`
function Homefirst() {
    return (
        <div>
            <HomeStyle>
               <div className='firstSection'>
                   <div className='Wrapper'>
               <div className='information'>
                   <p>
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/><br/> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br/><br/> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                   software like Aldus PageMaker including versions of Lorem Ipsum.
                      <br/><br/>
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                   </p>
                   
                   </div>

                   <div className ='leftImage'>
                       <div className='imageWrapper'>
                     <img src={hand} alt='leftImage'/>
                     </div>
                       </div>

               </div>
               </div>
               </HomeStyle>
        </div>
    )
}

export default Homefirst;
