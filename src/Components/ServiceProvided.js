import React from 'react';
import styled from 'styled-components';
import undercar from '../images/undercar.jpg';

const StyledServices =styled.div`

width:100vw;
height:600px;
background:#f4f4f4;
.ServicesHeading{
    width:80vw;
    height:100px;
   
    margin:auto;
    margin-bottom:20px;
    display:flex;
    
    justify-content:center;
    align-items:center;
    font-size:20px;

    h2{
        color:#333333;
       
    }
}

.ServiceWrapper{
    width:100vw;
    height:430px;
  

    .innerWrapper{
        width:95vw;
        height:410px;
       
        margin:auto;
        display:flex;

        .serviceContent{
            flex:2;
          

            .listItemWrapper{
                width:600px;
                height:400px;
                display:flex;
                margin:auto;

                 i{
                     color:#098ccd;
                 }

                .firstlistItem{
                    flex:1;
                    

                }
                .secondlistItem{
                    flex:1;
                    

                }
            }

        }
        .carousel{
            flex:1;
         

            img{
                margin-top:30px;
            }

        }

    }
   
}
.bottomParagraph{
    width:100vw;
    text-align:center;
    font-size:16px;
    .innerParagraph{
        width:80vw;
        text-align:center;
        margin:auto;
        line-height: 1.6;
    }
}

`;

function ServiceProvided() {
    return (
        <div>
            <StyledServices>
                <div className='ServiceWrapper'>
                    <div className='ServicesHeading'>
                          <h2>SERVICES WE PROVIDE INCLUDE:</h2>
                        </div>

                    <div className='innerWrapper'>
                    <div className='serviceContent'>
                        <div className='listItemWrapper'>
                        <div className='firstlistItem'>
                        <p> <span><i class="fas fa fa-arrow-right"></i>Tyre Fitting / Repair</span><br/></p>
 <p> <span><i class="fas fa fa-arrow-right"></i>Laser 4 wheel Alignment</span><br/></p>
 <p> <span><i class="fas fa fa-arrow-right"></i>Audio and Technology Installations</span><br/></p>
 <p> <span><i class="fas fa fa-arrow-right"></i>Air-conditioning Services</span><br/></p>
 <p> <span><i class="fas fa fa-arrow-right"></i>Vehicle Diagnostics</span><br/></p>
 <p> <span><i class="fas fa fa-arrow-right"></i>Vehicle Repairs</span><br/></p>
 <p> <span><i class="fas fa fa-arrow-right"></i>Servicing</span><br/></p>
                            </div>

                            <div className='secondlistItem'>

                            <p> <span><i class="fas fa fa-arrow-right"></i>Tyre Fitting / Repair</span><br/></p>
 <p> <span><i class="fas fa fa-arrow-right"></i>Laser 4 wheel Alignment</span><br/></p>
 <p> <span><i class="fas fa fa-arrow-right"></i>Audio and Technology Installations</span><br/></p>
 <p> <span><i class="fas fa fa-arrow-right"></i>Air-conditioning Services</span><br/></p>
 <p> <span><i class="fas fa fa-arrow-right"></i>Vehicle Diagnostics</span><br/></p>
 <p> <span><i class="fas fa fa-arrow-right"></i>Vehicle Repairs</span><br/></p>
 <p> <span><i class="fas fa fa-arrow-right"></i>Servicing</span><br/></p>                            
                                </div>
                        </div>
                        </div>

                        <div className='carousel'>
                          <img src={undercar} alt='Car'/>
                            </div>

                     </div>
                    </div>

                    <div className='bottomParagraph'>
                        <div className='innerParagraph'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                        </div>

                </StyledServices>
        </div>
    )
}

export default ServiceProvided
