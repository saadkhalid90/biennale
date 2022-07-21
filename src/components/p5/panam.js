import React from "react";
import Sketch from "react-p5";

let pano;
let imageW;
let imageH;
let startX = 0;
let computedH;
let computedW;
let speedF = 1;
let transVal;

function InfinitePanam (props) {

    const preload = (p5) => {
        pano = p5.loadImage(props.imageSrc);
    }

	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
        imageW = pano.width;
        imageH = pano.height;
        computedH = window.innerHeight;
        computedW = window.innerHeight * (imageW/imageH);
        transVal = startX;
	};

	const draw = (p5) => {
        p5.push();
            p5.translate(transVal,0);
            p5.image(pano, 0, 0, computedW, computedH);
            p5.image(pano, computedW, 0, computedW, computedH);
        
            if (transVal > -computedW) {
                transVal -= speedF;
            }
            else {
                transVal = 0;
            }  
        p5.pop();
	};

	return <Sketch preload={preload} setup={setup} draw={draw} />;
};

export default InfinitePanam;