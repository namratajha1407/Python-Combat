let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let h = c.height
let w = c.width
console.log(h,w)
ctx.moveTo(0, 0);
ctx.lineTo(w, h);
ctx.stroke();