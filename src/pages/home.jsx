import About from "../componet/pages/about"
import Footer from "../componet/pages/foater"
import Contact from "../componet/pages/Contact"
import Home from "../componet/pages/home"
import Navbar from "../componet/pages/navbar"
import Vector from "../assets/image/Group 6.png"
import PortfolioItem from "../componet/pages/Portfolio"
import ServiceItem from "../componet/pages/services"
import { CSSTransition } from 'react-transition-group';


const Homepage =()=>{

  const portfolioItems = [
    {
        title: "Front-end Developer",
        duration: "Feb 2023 - July 2023",
        description: "Project Documentation, App Deployment, and Report Writing",
        
    },
    {
      title: "Front-end Developer",
      duration: "Feb 2023 - July 2023",
      description: "Project Documentation, App Deployment, and Report Writing"
  },
  {
  
    description: "Project Documentation, App Deployment, and Report Writing"
},
{
    
    description: "Project Documentation, App Deployment, and Report Writing"
}
    
];
    return(
        
<>
<Navbar/>

<section id="home">
<Home/>
</section>
<div style={{ paddingLeft: '9%', paddingRight: '9%' }}>
<section  id="about">
<h1>About</h1>
<About/>
</section>

<section id="services" >
<h1>Services</h1>
<div className="Servicecont">
<ServiceItem
title="UI / UX Design"
description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat"
/>
<ServiceItem
title="FrontEnd Development"
description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat"
/>
<ServiceItem
title="Backend Development"
description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat"
/>
<ServiceItem
title="Full stack Development"
description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat"
/>
<ServiceItem
title="DevOps Development"
description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat"
/>
</div>
</section>
<section id="Portfolio" className=" ">
    <h1>PORTFOLIO</h1>
    <div className="portifoliaL">
    <div className="leftcont">
        <img src={Vector} alt="" srcSet="" />
        <h2>TeckCode</h2>
    </div>
    <div className="portfolia">
    <CSSTransition
transitionName="portcont"
transitionEnterTimeout={500}
    transitionLeaveTimeout={300}
>
    {() => portfolioItems.map((item) => (
        <PortfolioItem
            key={item.title}
            title={item.title}
            duration={item.duration}
            description={item.description}
        />
        
    ))}
</CSSTransition>
</div>
    </div>
</section>
<section id="contact">
<h1>Contact US</h1>
   <Contact/> 
</section>
</div>
<Footer/>



</>
    )
}
export default Homepage