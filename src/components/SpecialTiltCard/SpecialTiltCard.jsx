import React from 'react';
import Tilt from 'react-parallax-tilt';
import './specialTiltCard.css';

export default function ParallaxEffectGlareScale(){
    return(
        <Tilt
          className="parallax-effect-glare-scale"
          perspective={600}
          glareEnable={true}
          glareMaxOpacity={0.45}
          scale={1.02}
        >
          <div className="inner-element">
            <img src="/images/phoenix-round.png" alt="" />
          </div>
        </Tilt>
    )
};
