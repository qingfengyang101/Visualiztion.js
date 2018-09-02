/**
 * mouse move and a arrow form beginning to end ponit it.
 * author: xyh
 * @class Arrow
 */
import { RediasBase } from "./Redians";

class Arrow extends RediasBase {
    constructor(x, y, color, rotation) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.rotation = rotation; // rotation rote for angle unit.
    }

    canvasContextDraw (ctx, option) {
        if (!ctx) {
            return null;
        }

        ctx.save(); // save last ctx status 
        ctx.translate(this.x, this.y); // move new origin with the specified translation.
        ctx.rotate(this.rotation); 
        ctx.lineWidth = option.lineWidth;
        ctx.fillStype = option.fillStype;

        ctx.beginPath();
        ctx.moveTo(-50, -25);
        ctx.lineTo(0, -25);
        ctx.lineTo(0, -50);
        ctx.lineTo(50, 0);
        ctx.lineTo(0, 50);
        ctx.lineTo(0, 25);
        ctx.lineTo(-50, 25);
        ctx.lineTo(-50, -25);
        ctx.closePath(); // close to 
        ctx.fill();
        ctx.stroke(); // use line to draw the lineTo
        ctx.restore();
    }

    captrueMouse (ctx) {
        if (!ctx) {
            return null;
        }

        let mouse = {x: 0, y: 0};

        ctx.addEventListener('mousemove', function (event) {
            let x = null, y = null;
            if (event.pageX || event.pageY) {
                x = event.pageX;
                y = event.pageY;
            } else {
                x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            }
            
            x = x - ctx.offsetLeft;
            y = y - ctx.offsetTop;

            
            mouse.x = x;
            mouse.y = y;

        }, false);

        return mouse;
    }
}

export default Arrow;