/**
 * Created by limin on 2016/12/30.
 */

var may;//----计时器返回值--

//----重置颜色---
function refresh(a)
{
    var s=a;
    var i=0;
    while (i<9){
        s[i].style.backgroundColor= "chocolate";
        i++;
    }
}
//----获取三个颜色---
function getcolor(){
    var r;
    var g;
    var b;
    r = Math.floor(Math.random()*250);
    g = Math.floor(Math.random()*250);
    b = Math.floor(Math.random()*250);
    var color = new Array();
    var i = 0;
    for (var n=0;n<3;n++){

        r = Math.floor(Math.random()*250);
        g = Math.floor(Math.random()*250);
        b = Math.floor(Math.random()*250);
        color[i] = "rgb(" + r + "," + g + "," + b +")";
        i++;
    }
    return color;
}
//----改变颜色----
function changecolor (){
    var color = getcolor();
    var i=0;
    var s=0;
    var num_square = new Array();
    var square = document.getElementsByClassName("square");
    refresh(square);
     while (i<3){
         if(i < 1){
             num_square [i] = Math.floor(Math.random()*9);
             i++;
         }
         else {
             num_square [i] = Math.floor(Math.random()*9);
             if(num_square[i] == num_square [i-1]){
                 continue;
             }
             else {
                 i++;
             }
         }

     }
   for (var n=0;n<3;n++){
       var o = num_square[s];
       square[o].style.backgroundColor = color[s];
       s++;
   }
    var sub = document.getElementById("sub")
    sub.innerHTML= num_square[0] +" "+ num_square[1]+" " +num_square[2]+" "+color[0]+color[1]+color[2];
    var square = document.getElementsByClassName("square");
}

function start(){
    may=setInterval(changecolor,1000);
}
function end(){
    clearInterval(may);
    var square = document.getElementsByClassName("square");
    refresh(square);
}