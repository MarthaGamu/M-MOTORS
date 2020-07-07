import React from 'react';
import Nav from '../Components/Nav';
import styled from 'styled-components';
import Footer from '../Components/Footer';
function MOT() {
    const StyledMot = styled.div`
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
          width:100vw;
          height:800px;
          margin-top:30px;
          
          h2{
              margin:0;
          }
          .innerWrapper{
            width:90vw;
            height:700px;
            display:flex;
            margin-top:20px;
           
            margin:auto;
          }
          .firstSection{
              flex:2;
              color:#4c4c4c;

              i{
                  font-size:14px;
                  color:#64bbe3;
                  margin-right:1px;
              }
              
          }
          .sideBar{
              flex:1;
              
             

             
          }


          .sidebarContent{
              width:200px;
              height:auto;
              margin:auto;
              padding:10px;
              margin-bottom:10px;
              border-radius: 10px 10px 10px 10px;
-moz-border-radius: 10px 10px 10px 10px;
-webkit-border-radius: 10px 10px 10px 10px;
border: 6px solid #4ea6ca;
            
p{
    font-size:18px;
    color:#4c4c4c;
    
}
.heading{
    width:100px;
    height:50px;
    
}
h3{

    margin:0;
    padding:0;
    color:#4c4c4c;
    
}
button{
    width:100px;
    height:40px;
    color:white;
    background:#4ea6ca;
    border:none;
    border-radius:3%;
    outline:none;
    font-size:14px;
}

          }
          .sideImage{
            width:300px;
            height:300px;

            img{
                width:100%;
                height:100%;
                
            }
          }
      }
        
      

    `;
    return (
        <div>
            <Nav/>
            <StyledMot>
            <div className='topHeader'>
           MOT WORK
              </div>
              <div className='contentContainer'>
                  <div className='innerWrapper'>
                  <div className='firstSection'>
                      <h2>MOT testing at M-MOTORS</h2>
                      <p>Is your car due for an MOT?</p>
                         
                      <h3>MOT Testing</h3>
                      <p>If it’s that time of year again, at JM Motors we offer professional and impartial MOT testing in Lincoln. Our expert mechanics can check that your car is roadworthy from our Lincoln garage.</p>
                      <h2>Our MOT Testing</h2>
                      <p> <span><i class="fas fa fa-arrow-right"></i>MOT prep </span><br/></p>
                <p> <span><i class="fas fa fa-arrow-right"></i>  Full MOT testing </span><br/></p>
                <p><span><i class="fas fa fa-arrow-right"></i> Friendly service</span><br/></p>
                <p><span><i class="fas fa fa-arrow-right"></i>Expert mechanics </span><br/></p>
                <p><span><i class="fas fa fa-arrow-right"></i> Full range of mechanical and electrical repairs</span><br/></p>
                <p> <span><i class="fas fa fa-arrow-right"></i>Huge range of parts on site</span><br/></p>
                 <p>If we find MOT failures on your car then we can complete all repairs for you. We’ll advise you of this and provide a competitive quote before starting work.</p>
                  </div>


                  <div className='sideBar'>
                   <div className='sidebarContent'>
                    <div className='heading'>
                   <h3>BOOKINGS</h3>
                   <hr/></div>
                   <p>Request your appointment here</p>
                   <button>Click Here</button>
                       </div>

                       <div className='sidebarContent'>
                   <h3>HOW CAN WE HELP?</h3>
                   <p>Our highly trained team can provide you 
                       with car servicing & repairs that meet with manufacturers requirements</p>
                   <button>Click Here</button>
                       </div>
                       <div className='sidebarContent'>
                   <h3>READ OUR REVIEWS</h3>
                   <p>Click here to read some reviews from our valued customers

</p>
                   <button>Reviews</button>
                       </div>
                     



                      </div>
                      </div>
                      </div>
              </StyledMot>
              <Footer/>
        </div>
    )
}

export default MOT
