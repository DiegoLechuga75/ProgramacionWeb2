let registerForm = document.querySelector("#register-form");

const handleForm = (e) => {
    e.preventDefault();
    let name = document.querySelector("#name").value;
    let lastname = document.querySelector("#lastname").value;
    let email = document.querySelector("#email").value;
    let phone = document.querySelector("#phone").value;
    let gender = document.querySelector("#gender").value;
    let showRegister = document.querySelector("#show-register");
    showRegister.textContent = `El usuario ${name} ${lastname}\nCorreo: ${email}\nTelefono: ${phone}\nGenero: ${gender}\nSe acaba de registrar`;
}

registerForm.addEventListener("submit", (e) => handleForm(e));