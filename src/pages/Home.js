import React from 'react';
import Nav from '../Components/Nav';
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
           <ServiceBanner/>
           <About/>
           <EnquireBanner/>
           <Footer/>
            
        </div>
    )
}

export default Home
