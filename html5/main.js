// // //task3


// var pro = document.querySelector("progress");



//         setInterval(function () {
//             // pro.value+=5;
//                 pro.value = (pro.value + 5) % 100;
      
//                 document.getElementById("progressValue").innerHTML=`${pro.value}%`;
//       }, 200);



    
    
// // task4
function mixColor() {
    var redcolor = document.getElementById("red").value;
    var greencolor = document.getElementById("green").value;
    var bluecolor = document.getElementById("blue").value;

    var change = document.getElementById("change");
    change.style.color = `rgb(${redcolor}, ${greencolor}, ${bluecolor})`;
}
document.getElementById("red").addEventListener("input", mixColor); 
document.getElementById("blue").addEventListener("input", mixColor); 
document.getElementById("green").addEventListener("input", mixColor)