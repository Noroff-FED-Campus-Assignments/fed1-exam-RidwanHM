const formEl = document.querySelector("form");
const nameEl = document.querySelector("#js-name");
const emailEl = document.querySelector("#js-email");
const subjectEl = document.querySelector("#js-subject");
const contentEl = document.querySelector("#js-content");

formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameEl.value;
    const email = emailEl.value; 
    const subject = subjectEl.value;
    const content = contentEl.value;

    if (name === "") {
        alert("Please enter a name")
        return;
    }

    if (email === "") {
        alert("please enter a email")
        return;
    }

    if (subject === "") {
        alert("Should be more than 15 characters lonng")
        return;
    }

    if (content === "") {
        alert("Should be more than 25 characters long")
    }

    alert("Form submitted")
});

emailEl.addEventListener("blur", (event) => {
    const email = event.target.value.trim();

    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    if (emailRegex.test(email)) {
        event.target.classList.add("is-success");
        event.target.classList.remove("is-error");
    } else {
        event.target.classList.add("is-error");
        event.target.classList.remove("is-success");
    }
});
