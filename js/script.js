let myslider = document.querySelector(".slider");
let slide = document.querySelectorAll(".card");
slide[0].classList.add("active");
let current = 0;
let dots = document.querySelectorAll(".dot");

slide.forEach((e, i) => {
    e.style.left = `${i*100}%`;

});

function change() {
    slide.forEach((e, i) => {
        dots[i].classList.remove("active");

        e.classList.remove("active");
    });
    current++;

    if (current === 4) {
        current = 0;
        slide.forEach((e, i) => {
            e.style.transition = `all 0s ease-out`
        })

    } else {
        slide.forEach((e, i) => {
            e.style.transition = `all 0.5s ease-out`
        })

    }
    slide[current].classList.add("active");
    dots[current].classList.add("active");

    slide.forEach((e, i) => {
        e.style.transform = `translateX(-${current *100}%)`
    });

}

setInterval(change, 3000);

let email_box = document.querySelector(".email");
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let email_input = document.querySelector("form input").value;
    let emailreg = /^([_/-/.a-zA-Z0-9]+)@([\.a-zA-Z]){2,10}([a-zA-Z]){1,6}$/;
    let result2 = emailreg.exec(email_input);


    if (emailreg.test(email_input)) {
        email_box.classList.remove("error");
        document.querySelector("form input").value = "";
    } else {
        email_box.classList.add("error");
    }

})


let hamburger = document.querySelector(".hamburger");
let shade = document.querySelector(".shade");
let links = document.querySelector(".links");
let link = document.querySelectorAll(".links li");
link.forEach((e, i) => {
    e.addEventListener("click", (e, i) => {
        hamburger.classList.remove("active");
        shade.classList.remove("active");
        links.classList.remove("active");
        hamburger.scrollIntoView(true)
    })
})

hamburger.addEventListener("click", (e, i) => {
    if (hamburger.classList.contains("active")) {
        hamburger.classList.remove("active");
        shade.classList.remove("active");
        links.classList.remove("active");
    } else {
        hamburger.classList.add("active");
        shade.classList.add("active");
        links.classList.add("active");

    }
})