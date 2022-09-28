function changeOver(el) {
    if (el.id === "about"){
        let next = el.parentElement.nextElementSibling.firstElementChild;
        next.classList.add("btn-header-first");
    }
    else if (el.id === "question"){
        let prev = el.parentElement.previousElementSibling.firstElementChild;
        prev.classList.add("btn-header-last");
    } else {
        let next = el.parentElement.nextElementSibling.firstElementChild;
        let prev = el.parentElement.previousElementSibling.firstElementChild;
        next.classList.add("btn-header-first");
        prev.classList.add("btn-header-last");
    }
}

function changeOut(el) {
    if (el.id === "about"){
        let next = el.parentElement.nextElementSibling.firstElementChild;
        next.classList.remove("btn-header-first");
    }
    else if (el.id === "question"){
        let prev = el.parentElement.previousElementSibling.firstElementChild;
        prev.classList.remove("btn-header-last");
    } else {
        let next = el.parentElement.nextElementSibling.firstElementChild;
        let prev = el.parentElement.previousElementSibling.firstElementChild;
        next.classList.remove("btn-header-first");
        prev.classList.remove("btn-header-last");
    }
}

let about = document.getElementById("about");
let service = document.getElementById("service");
let cost = document.getElementById("cost");
let record = document.getElementById("record");
let question = document.getElementById("question");
about.onfocus = function() {
    changeOver(this);
};
service.onfocus = function() {
    changeOver(this);
};
cost.onfocus = function() {
    changeOver(this);
};
record.onfocus = function() {
    changeOver(this);
};
question.onfocus = function() {
    changeOver(this);
};