import React from 'react';
import Nav from '../Components/Nav';
import HomeFirst from '../Components/Homefirst';
import About from '../Components/About';
import EnquireBanner from '../Components/EnquireBanner';
import ImageBanner from '../Components/ImageBanner';
import ServiceBanner from '../Components/ServiceBanner';
import mechanic from '../images/mercede.jpg';


import Footer from '../Components/Footer';
function Home() {
    return (
        <div>
           <Nav/>
           <ImageBanner image={mechanic}/>
           <HomeFirst/>

        


           
           <Footer/>
            
        </div>
    )
}

export default Home
