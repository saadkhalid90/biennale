import { useRef, useEffect } from 'react';
import p5 from 'p5';

function Blob ({ projectsDiv }) {

    let sketchRef = useRef();
    let sketch;
    let w;
    let r;
    const count = 500;
    let y = 0;


    let Sketch = (p5) => {
        p5.setup = () => {
            p5.createCanvas(w, window.innerHeight);
            p5.background('#fff');
            p5.noStroke()
         //   p5.colorMode(p5.HSB, 100);
            p5.blendMode(p5.DIFFERENCE);
            p5.noiseDetail(2);
        }
   
        p5.draw = () => {
            p5.background('#fff');
            p5.blendMode(p5.BLEND);
            p5.background('#fff');
            p5.blendMode(p5.DIFFERENCE);
            p5.translate(p5.width / 2, p5.height / 2);
            drawCircle(p5.color(15 ,100, 100), 1000);
            drawCircle(p5.color(60 ,100, 60), 0.4);
          //  drawCircle(p5.color(0 ,100, 80), 0.8);
            y += 0.01;
        }

        let drawCircle = (color, diff) => {
            p5.beginShape()
            p5.fill(color)
            for (let i = 0; i <= count; i++) {
                const deg = (p5.TWO_PI / count) * (i % count)
                
                const nr = p5.noise(
                    (p5.sin(deg) + 1) * 0.4, 
                    (p5.cos(deg) + 1) * 0.4, 
                    y + diff
                ) * 100 + (r);

                p5.vertex(
                    p5.sin(deg) * nr, 
                    p5.cos(deg) * nr
                )
            }
            p5.endShape()
        };
    
     }

     useEffect(() => {
        console.log(Math.floor(projectsDiv.current.getBoundingClientRect().width * 0.2));
        w = Math.floor(projectsDiv.current.getBoundingClientRect().width * 0.2);
        r = w*0.2;
        sketch = new p5(Sketch, sketchRef.current);
     }, []); 

    return (
        <div ref={sketchRef}>
            
        </div>
    );
};

export default Blob;