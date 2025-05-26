

window.onresize = screen;
window.onload= screen;



function screen(){
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
    document.getElementById('my_width' ,     'my_height').innerHTML
    =`Width :${my_width}    Height :${my_height}`
}