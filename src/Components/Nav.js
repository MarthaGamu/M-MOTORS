import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import logo from '../images/logo.PNG';

const Navstyle= styled.div`

.topNav{
    width:100vw;
    height:50px;
    background:#0771a6;
    display:flex;

     .innerTopNav{
         display:flex;
        margin-left:140px;
     }
     
     
    p{
        font-size:13px;
        color:white;
        margin-left:10px;
        font-weight:500;
      

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
       width:80px;
       height:70px;

       img{
        
           height:100%;
           object-fit:cover;
       }
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
        flex-wrap:wrap;

        li{
        color:#333333;
        font-size:15px;
        font-weight:400;
        font-style:normal;
        font-family:Fira Sans;
        .text-link{
            text-decoration:none;
            color:#474747;
            font-size:15px;
            font-weight:400;
        }
        
        

        }
    }
}
`;



function Nav() {
    return (
        <Navstyle>
        <div>
           <div className='topNav'>
               <div className='innerTopNav'>
               <p><i class="fa fa-phone" aria-hidden="true"></i>Please Call : <span className='innerborder'>0775 1099 803</span> </p>
               <p><i class="fa fa-envelope" aria-hidden="true"></i>Email: <span className='innerborder'>info@garage.com</span> </p>
               </div>
               </div>
        </div>
        <div className='bottomNav'>
        <div className='logo'>
        <Link to='/'  className='text-link'>
         <img src={logo} alt='logo'/>
         </Link>
          </div>
       <div className='navWrapper'>
        <nav>
            <ul>
                <li>
                   <Link to='/'  className='text-link'> HOME</Link>
                    </li>
                <li>
                    <Link to='/Servicing'  className='text-link'>SERVICING AND REPAIRS</Link></li>
                <li><Link to ='/MOT'  className='text-link'>MOT WORK</Link></li>
                <li><Link to='/Book'  className='text-link'>BOOK NOW</Link></li>
                <li><Link to='/Testimonial'  className='text-link'>TESTIMONIALS</Link></li>
                <li><Link to='/Contact'  className='text-link'>CONTACT</Link></li>
                </ul>
            </nav>
           </div>

            </div>

        </Navstyle>
    )
}

export default Nav
