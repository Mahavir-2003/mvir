"use client"
import React, { useEffect, useState } from 'react'
import gsap from 'gsap';

const Cursor = () => {

    const [color , setColor] = useState('#ffffff');

useEffect(()=>{

    // create random object of color codes 
    const colors = {
        1 : '#facc15',
        2 : '#ee6055',
        3 : '#60d394',
        4 : '#aaf683',
        5 : '#b388eb',
        6 : '#ff9b85',
    }

    // select color codes randomly
    const randomColor = colors[Math.floor(Math.random() * 6) + 1];

    // target all elements to be used for cursor
    const cursor = document.getElementById("custom-cursor");
    const cursorFollower = document.getElementById("custom-cursor-follower");
    const cursorTextContainer = document.querySelectorAll(".cursor-text-container");
    const cursorText = document.querySelectorAll(".cursor-text");


    // target all elements to be used for DOM elements
    const headerText = document.getElementById("header-text");

    // move cursor along with mouse cursor
    const onMouseMove = (event) => {
        const { clientX, clientY } = event;
        gsap.to(cursor, { x: clientX, y: clientY, duration: 0});
        gsap.to(cursorFollower, { x: clientX, y: clientY, duration: 0.4  });
    };
    document.addEventListener("mousemove", onMouseMove);


    // handle animation for header text
    headerText.addEventListener("mouseenter", () => {
        gsap.set(cursorFollower, {
            opacity : 0,
            duration : 0.1
        })
        gsap.to(cursor, {
            width : "350px",
            height : "350px",
            backgroundColor : randomColor,
            duration : 0.4,
            ease : "power2.inOut"
        });
    })
    headerText.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
            width : "20px",
            height : "20px",
            backgroundColor : "#ffffff",
            duration : 0.4,
            ease : "power2.inOut"
        })
        gsap.set(cursorFollower, {
            opacity : 1,
            duration : 0.5
        })
    })


})

    



    return (
        <div>
            <div id="custom-cursor-follower"></div>
            <div id="custom-cursor" className="custom-cursor">
                <span className="cursor-text-container">
                    <p className="cursor-text">View</p>
                </span>
            </div>
        </div>
    )
}

export default Cursor