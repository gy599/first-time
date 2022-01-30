var firstH1 = document.getElementById("firstHeading");
var para = document.getElementById("para")
firstH1.innerHTML ="DOM";
firstHeading.style.color = "red"
firstHeading.style.fontSize = "30px"
firstHeading.style.backgroundColor = "black"
firstHeading.style.display = "none"
para.style.display = "flex"
//dom.onclick = function () {
 //   alert("Hello")
// }
dom.addEventListener("click", function() {
    if(para.style.display == "flex") {
      para.style.display = "none";
    }else{
        para.style.display = "flex";
    }
});

//function addition(name of the function) (parameters to allow users){body of the fuction where the operation takes place}
//created a function
// for a function to take effect, it must be called to action.
function addition(input){
    let x = input;
    let y = 50;
    let z = x + y;
    //the return function is to give us result irrespective of the alert. like a feedback
     return 500;
    //alert(z);
}
//call the function by referencing the name of the function, then add bracket name()
addition(300)
var res = addition(20);
//alert(res);
//logical operators; and, or||, not!
/*let bankAccount = 10000;
if(bankAccount == 60000) {
alert("i am coming to Ghana");
}else if(bankAccount==70000) {
    alert("i am going to korea");
}else if(bankAccount < 20000) {
    alert("just stay home");
}else {
    alert("do anything at all");
}*/
