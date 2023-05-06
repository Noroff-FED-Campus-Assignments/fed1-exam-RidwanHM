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

    if (name === "" || name.length < 2) {
        alert("Please enter a name with at least two characters")
        return;
    }
    

    if (email === "") {
        alert("please enter a email")
        return;
    }

    if (subject === "" || subject.length < 16) {
        alert("Subject should be more than 15 characters long")
        return;
    }

    if (content === "" || content.length < 26) {
        alert("Content should be more than 25 characters long")
        return;
    }

    alert("Form submitted!")
});

nameEl.addEventListener("blur", (event) => {
    const email = event.target.value.trim();

    const emailRegex = /^[a-zA-Z]{2,}$/;

    if (emailRegex.test(email)) {
        event.target.classList.add("is-success");
        event.target.classList.remove("is-error");
    } else {
        event.target.classList.add("is-error");
        event.target.classList.remove("is-success");
    }
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

subjectEl.addEventListener("blur", (event) => {
    const email = event.target.value.trim();

    const emailRegex = /^.{16,}$/;

    if (emailRegex.test(email)) {
        event.target.classList.add("is-success");
        event.target.classList.remove("is-error");
    } else {
        event.target.classList.add("is-error");
        event.target.classList.remove("is-success");
    }
});

contentEl.addEventListener("blur", (event) => {
    const email = event.target.value.trim();

    const emailRegex = /^.{26,}$/;

    if (emailRegex.test(email)) {
        event.target.classList.add("is-success");
        event.target.classList.remove("is-error");
    } else {
        event.target.classList.add("is-error");
        event.target.classList.remove("is-success");
    }
});
