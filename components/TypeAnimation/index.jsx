import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function TypeAnimationComponent() {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Official Broadcasting Society of KIIT',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Official Graphics Designing Society of KIIT',
                1000,
                'Official Painting Society of KIIT',
                1000,
            ]}
            wrapper="span"
            speed={20}
            style={{ fontSize: '2em', display: 'inline-block', color: 'white' }}
            repeat={Infinity}
        />
    );
}
