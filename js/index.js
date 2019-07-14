let content = document.querySelector(".content");
// Load your images on page-load
function preloader() {
    const imagesPaths = [
        {
            url: "./img/wind.jpg",
            title: "Wind"
        }, {
            url: "./img/solar.jpg",
            title: "Solar"
        }, {
            url: "./img/hydro.jpg",
            title: "Hydroelectricity"
        }
        ];
    const images = [];
    for (let i = 0; i < imagesPaths.length; i++) {
        images[i] = new Image();
        images[i].src = imagesPaths[i].url;
        images[i].header = imagesPaths[i].title;
        content.innerHTML += `<div class="prelode"><img src="${images[i].src}"><h2>${images[i].header}</h2></div>`;
    }

};
window.addEventListener("load", preloader);

// DATA RESOURCES
let dataResource = [
    {
        heading: "Wind",
        content: "Electricity from wind energy is one of the fastest growing sources of electricity in the world and in Canada. Wind accounts for 5% of electricity generation in Canada.",
        imgUrl: "./img/wind.jpg",
        imgAlt: "wind"
    }, {
        heading: "Solar photovoltaic",
        content: "Solar power is the conversion of energy from sunlight into electricity. Solar photovoltaics (PV) are rapidly becoming an economical, renewable technology to harness renewable energy from the sun.",
        imgUrl: "./img/solar.jpg",
        imgAlt: "solar photovoltaic"
    }, {
        heading: "Hydroelectricity",
        content: "Moving water is the most important renewable energy source in Canada, providing 58% of Canada’s electricity generation. In fact, in 2016, Canada was the second largest producer of hydroelectricity in the world.",
        imgUrl: "./img/hydro.jpg",
        imgAlt: "Hydroelectricity"
    },
];

let btns = document.querySelectorAll('.menu a');

// EVENT-OBJECT is accessed 
// as the first parameter of the event-handler
function eventHandler(e) {
    // read the text inside the button
    let btnClass = this.className;

    if (btnClass === "wind") {
        content.innerHTML = `<h2>${dataResource[0].heading}</h2>
                            <div class="box">
                                <img src="${dataResource[0].imgUrl}" alt="${dataResource[0].imgAlt}">
                                <p>${dataResource[0].content}</p>
                            </div>`;
    } else if (btnClass === "solar") {
        content.innerHTML = `<h2>${dataResource[1].heading}</h2>
                            <div class="box">
                                <img src="${dataResource[1].imgUrl}" alt="${dataResource[1].imgAlt}">
                                <p>${dataResource[1].content}</p>
                            </div>`;
    } else {
        content.innerHTML = `<h2>${dataResource[2].heading}</h2>
                            <div class="box">
                                <img src="${dataResource[2].imgUrl}" alt="${dataResource[2].imgAlt}">
                                <p>${dataResource[2].content}</p>
                            </div>`;
    }
}
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", eventHandler);
}



// active link button on second navigation
function handleEvent(e) {
    for (let i = 0; i < btns.length; i++) {
        if (btns[i].hasAttribute("id")) {
            btns[i].removeAttribute("id");
        }
    }
    this.setAttribute("id", "active");
}

for (let btn of btns) {
    btn.addEventListener("click", handleEvent);
}
