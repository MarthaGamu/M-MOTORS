import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Navstyle= styled.div`

.topNav{
    width:100vw;
    height:50px;
    background:#0771a6;
    display:flex;
     justify-content:center;
     
    p{
        font-size:13px;
        color:white;
        margin-left:20px;

        i{
            margin-right:2px;
        }
        .innerborder{
            border-bottom :1px solid #fff;
        }
    }
}
.bottomNav{
    width:100vw;
    height:80px;
    display:flex;
    align-items:center;
    flex-wrap:wrap;
   .logo{
        flex:1;
        text-align:center;
        h1{
            padding:0;
            margin:0;
        }
    }
    .navWrapper{
        flex:2;
    }
    ul{
        display:flex;
        list-style-type:none;
        padding:0;
        justify-content:space-evenly;


        li{
        color:#333333;
        font-size:15px;
        font-weight:400;
        font-style:normal;
        font-family:Fira Sans;

        }
    }
}
`;



function Nav() {
    return (
        <Navstyle>
        <div>
           <div className='topNav'>
               <p><i class="fa fa-phone" aria-hidden="true"></i>Please Call : <span className='innerborder'>0775 1099 803</span> </p>
               <p><i class="fa fa-envelope" aria-hidden="true"></i>Email: <span className='innerborder'>info@garage.com</span> </p>
               </div>
        </div>
        <div className='bottomNav'>
        <div className='logo'>
         <h1>M-MOTORS</h1>

          </div>
       <div className='navWrapper'>
        <nav>
            <ul>
                <li>
                   <Link to='/'> HOME</Link>
                    </li>
                <li>
                    <Link to='/Servicing'>SERVICING AND REPAIRS</Link></li>
                <li><Link to ='/MOT'>MOT WORK</Link></li>
                <li><Link to='/Book'>BOOK NOW</Link></li>
                <li><Link to='/Testimonial'>TESTIMONIALS</Link></li>
                <li><Link to='/Contact'>CONTACT</Link></li>
                </ul>
            </nav>
           </div>

            </div>

        </Navstyle>
    )
}

export default Nav
