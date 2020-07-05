import React from 'react';
import Nav from '../Components/Nav';
import styled from 'styled-components';
import Footer from '../Components/Footer';

const StyledContact = styled.div`
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
  .contactContainer{
    width:100vw;
    height:600px;
    background:#f4f4f4;
      display:flex;
      
  }
  .contactWrapper{
     flex:1;
     padding-left:100px;
      padding-top:50px;
    
  }
  .formWrapper{
      flex:2;
      
  }
  .form{
      width:450px;
      height:400px;
      background:#f9f9f9;
      margin: 50px auto;
      padding:15px;
      border-box:box-sizing;
      border-radius:10px;
      border-radius: 10px 10px 10px 10px;
-moz-border-radius: 10px 10px 10px 10px;
-webkit-border-radius: 10px 10px 10px 10px;
border: 8px solid #098ccd;

input{
    width:400px;
    height:45px;
    margin-bottom:10px;
    font-size:18px;
    outline:none;
    border-top:none;
    border-right:none;
    border-left:none;
    border-bottom:1px solid #9d9d9d;
    background:#f9f9f9;
}
textarea{
    width:400px;
    height:130px;
    margin-bottom:10px;
    font-size:18px;
    outline:none;
    border-top:none;
    border-right:none;
    border-left:none;
    border-bottom:1px solid #9d9d9d;
    background:#f9f9f9;
}
.button{
    display:flex;
    justify-content:center;
    border-bottom:none;
    background:#098ccd;
    color:white;
    width: 150px;
    text-align: center;
    margin:10px auto;
    border-radius:5px;
}
      
  }
  i{
      margin-right:2px;
  }
  .info{
      display:flex;
      font-size:14px;
      line-height:1.8;

      
      .phone{
        margin-bottom:10px;
    }
      span{
          color:#098ccd;
          margin-right:10px;
          font-weight:600;
      }
      p{
          margin:0;
          color:#868686;
          font-weight:400;
          font-size:16px;
          margin-bottom:20px;
      }
      .blue{
          color:#088ccd;
          border-bottom:1px solid #088ccd;
      }
    
  }
  .mapContainer{
      width:100vw;
      height:300px;
      background:green;
  }
  
  `;


;

function Contact() {
    return (
        <div>
            <Nav/>
            <StyledContact>
            <div className='topHeader'>
           CONTACT
              </div>
<div className='contactContainer'>
            <div className='contactWrapper'>
            <div className='content'>
                <div className = 'contactinfo'>
                    <div className='info'>
                    <span><i class="fa fa-home" aria-hidden="true"></i>Our Address:</span>
                    <p> 62 Saint John's Road<br/>Sevenoaks<br/>Kent<br/>TN133NA
                    </p>
                        </div>

                    <div className='info'>
                 
                        <span><i class="fa fa-phone" aria-hidden="true"></i>Phone:</span><p className='blue'>07751099803</p>
                        </div>
                        
                       
                
                        <div className='info'>
                           
                        <span>
<i class="fa fa-envelope" aria-hidden="true"></i>Email:</span><p className='blue'> info@garage.com</p>
                        </div>
                        

                        <div className='info'>
                           
                        <span>
                        <i class="fa fa-clock-o" aria-hidden="true"></i>We are open:</span><p className='blue-heading'>Monday-Friday,8:00am to 17:00pm<br/>Saturday,8:00am to 13:00pm<br/>Sunday,Closed</p>
                        </div>



                    </div>
                </div>
                </div>
                <div className = 'formWrapper'>
                 <div className='form'>
                     <form>
                     <input type="text" name="name" placeholder='Name(required)'/>
                     <input type="email" name="name" placeholder='Email Address(required)'/>
                     <input type="text" name="name" placeholder='Telephone Number(required)'/>
                     <textarea placeholder='Message'></textarea>
                     <input className="button" type="submit" value="Submit" />
                         </form>

                     </div>


                    </div>

                    </div>

            <div className='mapContainer'>
                

                </div>


              </StyledContact>
              <Footer/>
        </div>
    )
}

export default Contact
