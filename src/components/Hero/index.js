import React, {useState} from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {HeroContainer, HeroContent, HeroItems, HeroP, HeroH1, HeroBtn} from './HeroElements';
import { AnimatedText } from '../AnimatedText';
const Hero = () => {
    
    const [isOpen,setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <HeroContainer>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>
                        <AnimatedText 
                            textColor="#cd122d" 
                            overlayColor="#f2a12c"
                            >CLOUDKITCHEN</AnimatedText>
                    </HeroH1>
                    <HeroP>Covid Safe Flight Food Experience</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
