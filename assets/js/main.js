const mailRegex = '[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}'
const nameRegex = '^[a-zA-Zéèçàùâêîûüëï, \'"]{2,}$'
const subjectRegex = '^[a-zA-Zéèçàùâêîûüëï, \'"0-9]{2,}$'
const regNumber = "\\d{10}"

let formEl = document.getElementById("formValidate");
let nameInput = document.getElementById("your-name");
let mailInput = document.getElementById("your-email");
let telInput = document.getElementById("your-tel");
let subjectInput = document.getElementById("your-ville");
let cityInput = document.getElementById("your-subject");
let labelVille = document.getElementById("change1");
let labelSubject = document.getElementById("change");
let messageInput = document.getElementById("your-message");



formEl.removeAttribute("novalidate");

nameInput.setAttribute("pattern", nameRegex);
nameInput.setAttribute("placeholder", "Entrez votre nom");
nameInput.setAttribute("min", 2);
nameInput.setAttribute("max", 70);

mailInput.setAttribute("pattern", mailRegex);
mailInput.setAttribute("placeholder", "Entrez votre email");
mailInput.setAttribute("min", 2);
mailInput.setAttribute("max", 70);

telInput.setAttribute("pattern", regNumber);
telInput.setAttribute("placeholder", "Entrez votre téléphone");

subjectInput.setAttribute("pattern", nameRegex);
subjectInput.setAttribute("placeholder", "Entrez votre sujet");
subjectInput.setAttribute("name", "your-subject");
labelVille.innerHTML = "Sujet :"
subjectInput.setAttribute("min", 2);
subjectInput.setAttribute("max", 70);

cityInput.setAttribute("pattern", subjectRegex);
cityInput.setAttribute("placeholder", "Entrez votre ville");
cityInput.setAttribute("name", "your-ville");
labelSubject.innerHTML = "Votre ville :";
cityInput.setAttribute("min", 2);
cityInput.setAttribute("max", 70);

messageInput.setAttribute("placeholder", "Ecrivez votre message");

nameInput.addEventListener('keyup', (event) => {

    if (nameInput.value.match(nameRegex)) {
        nameInput.style.borderColor = "green";
        nameInput.style.borderWidth = "2px";
    } else {
        nameInput.style.borderColor = "red";
        nameInput.style.borderWidth = "2px";
        if (nameInput.value == "") {
            nameInput.style.borderColor = "";
        }
    }
});

mailInput.addEventListener('keyup', (event) => {

    if (mailInput.value.match(mailRegex)) {
        mailInput.style.borderColor = "green";
        mailInput.style.borderWidth = "2px";
    } else {
        mailInput.style.borderColor = "red";
        mailInput.style.borderWidth = "2px";
        if (mailInput.value == "") {
            mailInput.style.borderColor = "";
        }
    }
});

telInput.addEventListener('keyup', (event) => {

    if (telInput.value.match(regNumber)) {
        telInput.style.borderColor = "green";
        telInput.style.borderWidth = "2px";
    } else {
        telInput.style.borderColor = "red";
        telInput.style.borderWidth = "2px";
        if (telInput.value == "") {
            telInput.style.borderColor = "";
        }
    }
});

cityInput.addEventListener('keyup', (event) => {

    if (cityInput.value.match(nameRegex)) {
        cityInput.style.borderColor = "green";
        cityInput.style.borderWidth = "2px";
    } else {
        cityInput.style.borderColor = "red";
        cityInput.style.borderWidth = "2px";
        if (cityInput.value == "") {
            cityInput.style.borderColor = "";
        }
    }
});

subjectInput.addEventListener('keyup', (event) => {

    if (subjectInput.value.match(subjectRegex)) {
        subjectInput.style.borderColor = "green";
        subjectInput.style.borderWidth = "2px";
    } else {
        subjectInput.style.borderColor = "red";
        subjectInput.style.borderWidth = "2px";
        if (subjectInput.value == "") {
            subjectInput.style.borderColor = "";
        }
    }
});