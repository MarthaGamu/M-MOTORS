import React from 'react';
import styled from 'styled-components';
import vintage from '../images/vintage.jpg';

const StyledBanner = styled.div`
.Banner{
    width:100vw;
    height:500px;
    background:#098ccd;
 

    .heading{
        width:80vw;
        padding-top:20px;
        margin:auto;
        text-align:center;
        color:white;
        font-size:20px;
    }

.BannerWrapper{
width:92vw;
height:380px;
margin:auto;
display:flex;
padding:20px;
    .BannerContent{
       flex:2;
       

        p{
            line-height:1.6;
            color:white;
            
        }}
    .sideImage{
        flex:1;

        .innerImage{
            width:400px;
            height:250px;
            background:blue;
            margin-top:10px;

            img{
                width:100%;
                height:100%;
                object-fit:cover;
            }
        
    }
    }
}
}
@media only screen and (max-width: 600px) {
    .Banner{
        display:none;
    }
}

`;


function EnquireBanner() {
    return (
        <div>
            <StyledBanner>
                <div className='Banner'>
                <div className='heading'>
                    <h2>WE ARE THE BEST GARAGE IN TONBRIDGE</h2>
                    </div>

                <div className='BannerWrapper'>
                    <div className='BannerContent'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br/> <br/>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br/><br/> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>

                        <div className ='sideImage'>
                            <div className='innerImage'>
                            <img src={vintage} alt='sideImage'/>
                           </div>
                            </div>

               </div>

                    </div>

                </StyledBanner>
           
        </div>
    )
}

export default EnquireBanner
