//Constante REGEX
const mailRegex = '[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}'
const nameRegex = '^[a-zA-Zéèçàùâêîûüëï, \'"]{2,}$'
const subjectRegex = '^[a-zA-Zéèçàùâêîûüëï, \'"0-9]{2,}$'
const regNumber = "\\d{10}"

//Déclaration des variables
let formEl = document.getElementById("formValidate");
let nameInput = document.getElementById("your-name");
let mailInput = document.getElementById("your-email");
let telInput = document.getElementById("your-tel");
let subjectInput = document.getElementById("your-ville");
let cityInput = document.getElementById("your-subject");
let labelVille = document.getElementById("change1");
let labelSubject = document.getElementById("change");
let messageInput = document.getElementById("your-message");
let telLink = document.getElementById("tel");
let mailLink = document.getElementById("email");
let googleMap = document.getElementById("gMap");
let formBloc = document.getElementById("formControl");


//Mise en place des attributs
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

//Ajout des eventlistener pour vérifier les champs
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

//Selection du numéro du téléphone et mise en place du lien
let telLinkValue = telLink.innerText;
telLinkArray = telLinkValue.split(' ');
telLinkValue = telLinkArray[2];
telLinkValue = telLinkValue.replaceAll('.', '');
let resultLink = `${telLinkArray[0]} ${telLinkArray[1]} <a href="tel:${telLinkValue}">${telLinkArray[2]}</a>`;
telLink.innerHTML = resultLink;

//Selection du mail et mise en place du lien
let mailLinkValue = mailLink.innerText;
mailLinkArray = mailLinkValue.split(' ');
mailLinkValue = mailLinkArray[7];
let resultMailLink = `<a href="mailto:${mailLinkValue}">${mailLinkValue}</a>`;
mailLinkArray[7] = resultMailLink;
resultMailLink = "";
mailLinkArray.forEach(element => {
    resultMailLink += ` ${element}`;
});
mailLink.innerHTML = resultMailLink;

//Déplacmeent de la map google sous le formulaire
let saveGoogle = googleMap.outerHTML;
googleMap.outerHTML = "";
let div = document.createElement("div");
div.id = "bloc";
div.append(saveGoogle);
formBloc.after(div);
bloc = document.getElementById("bloc");
bloc.innerHTML = '<p id="gMap"><iframe style="border: 0; float: right;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10840.441212216989!2d-1.562078!3d47.214424!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x10a23dc1d980bca7!2sOcordo+Travaux+Nantes!5e0!3m2!1sfr!2sfr!4v1434122059096" width="600" height="450" frameborder="0"></iframe></p>';