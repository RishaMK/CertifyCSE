function homePage(){
    window.location.href="index.html";
}


let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
let form = document.getElementById("form");
let endLine= document.getElementById("endLine");

signinBtn.onclick = function(){
    nameField.style.display="none";
    form.style.maxHeight="500px";
    title.innerText="Sign-In";
    signinBtn.classList.remove("disable");
    signupBtn.classList.add("disable");
    return false;
}