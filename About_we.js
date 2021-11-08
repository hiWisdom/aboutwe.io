

//page back buttons begins//

function subscribeBack(){
window.location="index.html";
}
//page back buttons ends//




//Feedback expression smiley script begins//


var activeHappy = document.querySelector(".feedback_expression_0").addEventListener("click", ()=>{
    var Happy = document.getElementById("feedback_expression_happy").style.display="block";
    var Happy = document.getElementById("feedback_expression_happy").style.color="yellow";
    var Happy = document.getElementById("feedback_expression_sad").style.letterSpacing="2px";
    var Neutral = document.getElementById("feedback_expression_neutral").style.display="none";
    var Sad = document.getElementById("feedback_expression_sad").style.display="none";

});
var activeNeutral = document.querySelector(".feedback_expression_1").addEventListener("click", ()=>{
    var Neutral = document.getElementById("feedback_expression_neutral").style.display="block";
    var Happy = document.getElementById("feedback_expression_happy").style.display="none";
    var Sad = document.getElementById("feedback_expression_sad").style.display="none";

});
var activeSad = document.querySelector(".feedback_expression_2").addEventListener("click", ()=>{
    var Sad = document.getElementById("feedback_expression_sad").style.display="block";
    var Sad = document.getElementById("feedback_expression_sad").style.color="red";
    var Sad = document.getElementById("feedback_expression_sad").style.letterSpacing="2px";
    var Happy = document.getElementById("feedback_expression_happy").style.display="none";
    var Neutral = document.getElementById("feedback_expression_neutral").style.display="none";

});

//Feedback expression smiley script ends//




// var sendButtonEffect = document.getElementById("aboutwe_feedback_button");

// document.addEventListener('mouseover', ()=> {

// sendButtonEffec.style.innerHTML="Sending";
// });








//reset feedback form expressions fields//
function resetExpressions() {
    var Happy = document.getElementById("feedback_expression_happy").style.display="none";
    var Neutral = document.getElementById("feedback_expression_neutral").style.display="none";
    var Sad = document.getElementById("feedback_expression_sad").style.display="none";

}


function sendEffect() {
 document.querySelector(".send_feedback_effect").innerHTML="sending...";

}



//reset feedback form expressions fields//


















//Scroll toTop Button script begins//

var toTop = document.querySelector(".back_to_top");
window.addEventListener("scroll", ()=>{
if (window.pageYOffset > 100) {
    toTop.classList.add("active");
} else {
    toTop.classList.remove("active");
}


})

//Scroll toTop Button script ends//
