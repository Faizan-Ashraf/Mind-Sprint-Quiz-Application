document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("#form");
    const name = document.querySelector("#name");
    const faculty = document.querySelector("#Faculty");
    const email = document.querySelector("#email");
    const pass = document.querySelector("#pass");
    const cpass = document.querySelector("#cpass");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let validate = true;

        // validate name input
        const name_e = document.querySelector("#name_error");
        if (name.value.trim() == "") {
            name_e.innerText = "Name Required";
            validate = false;
        }
        else if (!/^[A-Za-z\s]+$/.test(name.value)) {
            name_e.innerText = "Name should not include special characters";
            validate = false;
        }
        else {

            name_e.innerText = "";
        }

        // validate faculty input
        const faculty_e = document.querySelector("#faculty_error");
        if (faculty.value === "Faculty") {
            faculty_e.innerText = "Mention your faculty";
            console.log("check");
            validate = false;
        }
        else {
            faculty_e.innerText = "";
        }

        // validate email input
        const email_e = document.querySelector("#email_error");
        if (email.value.trim() == "") {
            email_e.innerText = "Email Required";
            validate = false;
        }
        else {

            email_e.innerText = "";

        }

        // validate password input
        const pass_e = document.querySelector("#pass_error");
        if (pass.value.trim() == "") {
            pass_e.innerText = "Password Required";
            validate = false;
        }
        else if (pass.value.length < 8) {

            pass_e.innerText = "Password should contain 8 letter";
            validate = false;
        }
        else {

            pass_e.innerText = "";

        }

        // confirm password matched not not
        const cpass_e = document.querySelector("#cpass_error");
        if (pass.value !== cpass.value) {
            cpass_e.innerText = "Password not matched";
            validate = false;
        }
        else {

            cpass_e.innerText = "";

        }

        //if all the validaton successfullty completed
        if (validate === true) {
            form.submit();
        }
        else {
            return;
        }

    });




    //to upload image
    let img = document.querySelector(".img");
    let imgInput = document.querySelector("input[type='file']");

    img.addEventListener("mouseover", () => {
        if (img.getAttribute("src") == "images/default2.png") {

            img.setAttribute("src", "images/hoverImage.png");
        }
    });

    img.addEventListener("mouseout", () => {
        if (img.getAttribute("src") == "images/hoverImage.png") {

            img.setAttribute("src", "images/default2.png");

        }
    });

    img.addEventListener("click", () => {
        imgInput.click();
    });

    imgInput.addEventListener("change", (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();

            reader.onload = function (e) {
                img.setAttribute("src", e.target.result);
            }
            reader.readAsDataURL(event.target.files[0]);
        }
    });



})