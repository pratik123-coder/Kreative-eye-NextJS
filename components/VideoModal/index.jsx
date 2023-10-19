import React from 'react';
import Div from '../Div'; // Make sure Div is imported correctly.

export default function VideoModal() {
    return (
        <Div className="player-wrapper d-flex justify-content-center align-items-center ">
            <video width="1240" height="900" controls>
                <source src="/video/KEVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </Div>
    );
}