import { useRef } from 'react';
import About from "./About";
import CarousalPage from "./CarousalPage";
import ConnectWithUs from "./ConnectWithUs";
import Footer from "./Footer";
import Home from "./Home";
import ServicesPage from "./ServicesPage";
import WhyChooseUs from "./WhyChooseUs";

const Hero = (props) => {
    const MessageNameSection = useRef(null);
    return (
        <section className="w-full">
            
            <Home HomeSection={props.HomeSection} />
            <About AboutSection={props.AboutSection} />
            <ServicesPage ServicesPageSection={props.ServicesPageSection} />
            <WhyChooseUs WhyChooseUsSection={props.WhyChooseUsSection} />
            <CarousalPage CarousalPageSection={props.CarousalPageSection} />
            <ConnectWithUs ConnectWithUsSection={props.ConnectWithUsSection} MessageNameSection={MessageNameSection} />
            <Footer  ConnectWithUsSection={props.ConnectWithUsSection} MessageNameSection={MessageNameSection}/>
        </section>
    );
}

export default Hero;