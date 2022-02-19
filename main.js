
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;


var width = screen.width;
var height = screen.height;

new_width = width - 70;
new_height = height - 300;

if(width < 992 ){

canvas.width = new_width;
canvas.height = new_height;
document.body.style.overflow = "hidden";


}




    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
       last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
       last_position_of_y = e.touches[0].clientY - canvas.offsetTop;

        
    }

    canvas.addEventListener("touchmove",my_touchmove);
    function my_touchmove(e)
    {
      Present_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
      Present_position_of_y = e.touches[0].clientY - canvas.offsetTop;

      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = width_of_line;

      console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + Present_position_of_x+ "y = " + Present_position_of_y);
        ctx.lineTo(Present_position_of_x, Present_position_of_y);
        ctx.stroke();
        

        last_position_of_x = Present_position_of_x; 
        last_position_of_y = Present_position_of_y 
    }

    
function Clear_area (){

    ctx.clearRect(0,0,canvas.width,canvas.height);
}    
    

