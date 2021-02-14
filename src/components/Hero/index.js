import React, { useState } from 'react';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, HeroBtn } from './HeroElements';
const Hero = () => {
    const [hover, setHover] = useState(false)

    const onHover = () =>  {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Greatest Pizza Ever</HeroH1>
                    <HeroP>Ready in 60 Seconds</HeroP>
                    <HeroBtnWrapper>
                        <HeroBtn to="/signin" onMouseEnter={onHover} onMouseLeave={onHover}
                        primary="true"
                        dark="true">
                            Place an Order {hover ? <ArrowForward /> : <ArrowRight />}
                        </HeroBtn>
                    </HeroBtnWrapper>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;
