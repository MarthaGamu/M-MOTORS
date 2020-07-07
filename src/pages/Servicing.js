import React from 'react';
import Nav from '../Components/Nav';
import styled from 'styled-components';
import Footer from '../Components/Footer';
import hand from '../images/auto.jpg';
function Servicing() {

    const StyledServicing =styled.div`
    
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
      .contentContainer{
          color:#4c4c4c;
          p{
              margin-left:10px;

          }
          h1{
              margin-left:10px;
              margin-top:40px;
              color:#4c4c4c;
          }
          
      }
      .serviceContainer{
          width:100vw;
          height:560px;
         
          display:flex;
         

          .listWrapper{
           width:70vw;
           display:flex;
          }
          .listWork{
              margin-left:50px;

              i{
                font-size:14px;
                color:#64bbe3;
                margin-right:1px;
            }
          }
         .carousel{
             margin-top:100px;
             margin-right:150px;
         }
      }
      .bookAppointment{
          width:70vw;
          height:100px;
          margin-left:100px;
          margin-bottom:100px;
          display:flex;
          justify-content:center;
          align-items:center;
          border-radius: 10px 10px 10px 10px;
          -moz-border-radius: 10px 10px 10px 10px;
          -webkit-border-radius: 10px 10px 10px 10px;
          border: 6px solid #4ea6ca;

          .book{
              flex:2;
              font-size:18px;
              p{
                  margin-left:40px;
              }
          }
          .button{
              flex:1;
              display:flex;
              justify-content:flex-end;
              margin-right:100px;

              button{
                  padding:20px 30px;
                  background:#4ea6ca;
                  border-radius:3px;
                  border:none;
                  color:white;
                  font-size:16px;
                  letter-spacing:0.5px;
              }
      }
    `;
    return (
        <div>
            <Nav/>
            <StyledServicing>
            <div className='topHeader'>
           CAR SERVICING
              </div>
              <div className='contentContainer'>
                  <h1>OUR CAR SERVICING AND REPAIR SERVICE</h1>
                  <p>Whether you are looking for interim car servicing in Sevenoaks or a full service, we can help. Our skilled automotive technicians are able to undertake the following work:</p>
                   <p>When you contact us please have the following details available to help us process your booking as quickly as possible:</p>
                  <div className='serviceContainer'>
                      <div className='listWrapper'>
               <div className='listWork'>
     
                   <p> <span><i class="fas fa fa-arrow-right"></i>MOT work</span><br/></p>
 <p> <span><i class="fas fa fa-arrow-right"></i>Tyre Fitting / Repair</span><br/></p>
 <p> <span><i class="fas fa fa-arrow-right"></i>Laser 4 wheel Alignment</span><br/></p>
 <p> <span><i class="fas fa fa-arrow-right"></i>Audio and Technology Installations</span><br/></p>
 <p> <span><i class="fas fa fa-arrow-right"></i>Air-conditioning Services</span><br/></p>
 <p> <span><i class="fas fa fa-arrow-right"></i>Vehicle Diagnostics</span><br/></p>
 <p> <span><i class="fas fa fa-arrow-right"></i>Vehicle Repairs</span><br/></p>
 <p> <span><i class="fas fa fa-arrow-right"></i>Servicing</span><br/></p>
 <p> <span><i class="fas fa fa-arrow-right"></i>Clutch and Gearbox Repairs</span><br/></p>
 <p> <span><i class="fas fa fa-arrow-right"></i>DPF cleaning</span><br/></p>
 <p> <span><i class="fas fa fa-arrow-right"></i>Exhaust</span><br/></p>
 <p> <span><i class="fas fa fa-arrow-right"></i>Brakes</span><br/></p>
 <p> <span><i class="fas fa fa-arrow-right"></i>Cam Belts</span><br/></p>
 <p> <span><i class="fas fa fa-arrow-right"></i>Emissions Testing</span><br/></p>
                   
</div>

         </div>


         <div className ='sidebar'>
         <div className='carousel'>
                       <img src={hand} alt='carousel'/>
                       </div>
             </div>



                      </div>

                      <div className='bookAppointment'>
                          <div className='book'>
                              <p>Request your appointment here</p>
                              </div>
                              <div className='button'>
                                  <button>Appointments</button>
                                  </div>
                          </div>


                  </div>
              </StyledServicing>
              <Footer/>
        </div>
    )
}

export default Servicing
