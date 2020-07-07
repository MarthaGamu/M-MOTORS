import React from 'react'
import Nav from '../Components/Nav';
import styled from 'styled-components';
import Footer from '../Components/Footer';
import car from '../images/carr.jpg'

const StyledBook = styled.div`
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
.BookContainer{
  width:100vw;
  height:400px;
 
  h5{
    margin-top:25px;
  }
}
.detailsRequired{
  margin-left:20px;
}
.requiredInfo{
  display:flex;
  i{
    color:#64bbe3;
    font-size:14px;
  }
  .garageImg{
    width:350px;
    height:250px;

    img{
      width:100%;
      height:100%;
      border-radius:10%;
      margin-top:80px;
    }
  }
}


.formContainer{
  width:100vw;
  height:700px;
  
  display:flex;
  justify-content:center;
  
}
.formWrapper{
  width:90vw;
  height:600px;
  border-radius: 10px 10px 8px 10px;
  -moz-border-radius: 10px 10px 8px 10px;
  -webkit-border-radius: 10px 10px 8px 10px;
  border: 10px solid #098ccd;
}
.instruction{
  font-size:18px;
  color:#7a8186;
  margin-left:28px;
}
.form{
width:90vw;
height:320px;
display:flex;
margin:10px;

input[type="text"]{
  width:80%;
  height:50px;
  margin-bottom:10px;
  border:none;
  font-size:18px;
  border-bottom:1px solid #cfcfcf;
  outline:none;

}
input[type="email"]{
  width:80%;
  height:50px;
  margin-bottom:10px;
  border:none;
  font-size:18px;
  border-bottom:1px solid #cfcfcf;
  outline:none;

}
input[type="number"]{
  width:80%;
  height:50px;
  margin-bottom:10px;
  border:none;
  font-size:18px;
  border-bottom:1px solid #cfcfcf;

}
input[type="date"]{
  width:80%;
  height:50px;
  margin-bottom:10px;
  border:none;
  font-size:18px;
  border-bottom:1px solid #cfcfcf;
  color:#7a8186;
  outline:none;
}
input[type="checkbox"]{
  
  border-bottom:1px solid #cfcfcf;
}



.firstPart{
flex:1;
margin-top:20px;
margin-left:20px;

}
.secondPart{
flex:1;
margin-top:20px;
}
.required{
  width:80%;
  height:40px;
  font-size:18px;
  color:#7a8186;
  border-bottom:1px solid #cfcfcf;
}
.chooseBox{
  width:5%;
  
}

}
.submitWrapper{
  width:90vw;
  height:40vh;
  
  display:flex;
  justify-content:center;
  align-items:center;
}
input[type="submit"]{
  background:#098ccd;
 width:130px;
  margin:auto;
  color:white;
  display:inline-block;
  border:none;
  font-size:18px;
  font-weight:400;
  height:45px;
  border-radius:5px;
}

`;

function Book() {
    return (
        <div>
          <Nav/>
          <StyledBook>
            <div className='topHeader'>
              BOOK NOW
              </div>
              
<div className='BookContainer'>
                <div className='requiredInfo'>
                  <div className='detailsRequired'>
                <h5>Please note, if you require urgent assistance please contact us via telephone on 07751099803</h5>
                <p>When you contact us please have the following details available to help us process your booking as quickly as possible:</p>
                <p> <span><i class="fas fa fa-arrow-right"></i>Vehicle Registration </span><br/></p>
                <p> <span><i class="fas fa fa-arrow-right"></i>Vehicle Make </span><br/></p>
                <p><span><i class="fas fa fa-arrow-right"></i> Vehicle Model</span><br/></p>
                <p><span><i class="fas fa fa-arrow-right"></i>Engine Size </span><br/></p>
                <p><span><i class="fas fa fa-arrow-right"></i>Fuel Type</span><br/></p>
                <p> <span><i class="fas fa fa-arrow-right"></i>Dates you would like the work to be carried out on</span><br/></p>
                <p><span><i class="fas fa fa-arrow-right"></i> Please tell us if you require a service or a repair. If it is a repair please tell us a little more about your requirements</span><br/></p>
              </div>
              <div className='garageImg'>
             <img src={car} alt ='car'/>
            </div>
                </div>
                </div>

<div className='formContainer'>
  <div className='formWrapper'>
  <div className='form'>
    <div className='firstPart'>
      <input type='text' name='name' placeholder='Name(required)'/>
      <input type='email' name='email' placeholder='Email(required)'/>
      <input type='text' name='telephone' placeholder='Telephone Number(required)'/>
      <input type='date'/><br/>
     <p className='required'> <label>Required Service:</label>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Service" className='chooseBox'/><label>Service</label>
        
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Repair" className='chooseBox'/><label>Repair</label></p>
      </div>
      <div className='secondPart'>
      <input type='text' name='registration' placeholder='Vehicle Registration(required)'/>
      <input type='text' name='Make' placeholder='Vehicle Make(required)'/>
      <input type='text' name='Model' placeholder='Vehicle Model(required)'/>
      <input type='text' name='engine' placeholder='Engine Size(required)'/>
      <input type='text' name='fuel' placeholder='Fuel Type(required)'/>
        </div>
        </div>
        <p className='instruction'>If it is repair thatyou require,provide us with some information prior to us contacting you.</p>
       <div className='submitWrapper'>
        <input type='submit' name='submit' value='Submit'/>
        </div>

    </div> 
    
  </div>
 



            </StyledBook>
            <Footer/>
        </div>
       
    )
}

export default Book;

