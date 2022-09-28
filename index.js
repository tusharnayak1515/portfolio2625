const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");
const navmenu = document.querySelector(".menu");
const submit_btn = document.querySelector("#contact .contact_form button");
const inputs = document.querySelectorAll(".contact_form input");
const name_input = inputs[0];
const email = inputs[1];
const message = document.querySelector(".contact_form textarea");

hamburger.addEventListener("click", ()=> {
    hamburger.style.display = "none";
    close.style.display = "block";
    navmenu.style.display = "flex";
});

close.addEventListener("click", ()=> {
    hamburger.style.display = "block";
    close.style.display = "none";
    navmenu.style.display = "none";
});

submit_btn.addEventListener("click", (e)=> {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if(name_input.value.trim().length > 0 && emailRegex.test(email.value) && message.value.trim().length > 0) {
        name_input.style.border = "0.1rem solid #244d61";
        email.style.border = "0.1rem solid #244d61";
        message.style.border = "0.1rem solid #244d61";
        alert("Message sent successfully!");
        name_input.value = "";
        email.value = "";
        message.value = "";
    }
    else {
        if(name_input.value.trim().length <= 0) {
            name_input.style.border = "0.1rem solid red";
        }
        else if(!emailRegex.test(email.value)) {
            name_input.style.border = "0.1rem solid #244d61";
            email.style.border = "0.1rem solid red";
        }
        else {
            name_input.style.border = "0.1rem solid #244d61";
            email.style.border = "0.1rem solid #244d61";
            message.style.border = "0.1rem solid red";
        }
    }
});