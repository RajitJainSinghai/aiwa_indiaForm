function validate() {
    var x1 = document.getElementById("mobile").value;
    var x = x1.length;
    console.log(x);
    if (x > 11) {
        alert("please put the correct mobile number")
    }
}
function validate_pin() {
    var y1 =document.getElementById("pincode").value;
    var y = y1.length;
    if(y > 6) {
        alert("please put the correct pincode")
    }
}
function name_user() {
    var a = document.getElementById("fname").value;
    document.getElementById('name_user').value = a
}
/************** collapsable button*****************/

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}