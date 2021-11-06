
function subscribeBack(){
window.location="index.html";
}


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


var toTop = document.querySelector(".back_to_top");
window.addEventListener("scroll", ()=>{
if (window.pageYOffset > 100) {
    toTop.classList.add("active");
} else {
    toTop.classList.remove("active");
}


})