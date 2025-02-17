let card = document.querySelectorAll(".trend");
let mainpage = document.querySelector(".main");
let contact = document.getElementById("contact");
let blog = document.querySelector(".trends");
let container = document.querySelector(".container");
let about = document.querySelector(".about")
let footer = document.querySelector(".footer");
let letter = document.querySelector(".letter");

function homes(){
    mainpage.style.display = "flex";
    footer.style.display = "flex";
    letter.style.display = "flex";
    for(x of card){
        x.style.display = "block";
    }
    blog.style.display = "block";
    about.style.display = "none";



    document.getElementById("home").style.color = "rgb(78, 214, 214)";
    document.getElementById("blog").style.color = "black";
    document.getElementById("shops").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "black";


};

function shops(){
    mainpage.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    footer.style.display = "none";
    letter.style.display = "none";
    for(x of card){
        x.style.display = "block";
    }
    document.getElementById("shops").style.color = "rgb(78, 214, 214)";
    document.getElementById("home").style.color = "black";
    document.getElementById("blog").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "black";
};

function blogs(){
    mainpage.style.display = "none";
    for(x of card){
        x.style.display = "none";
    }
    blog.style.display = "block";
    about.style.display = "none";
    document.getElementById("blog").style.color = "rgb(78, 214, 214)";
    document.getElementById("home").style.color = "black";
    document.getElementById("shops").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "black";
};


function aboutus(){
    mainpage.style.display = "none";
    for(x of card){
        x.style.display = "none";
    }
    blog.style.display = "none";
    about.style.display = "block";
    footer.style.display = "none";
    letter.style.display = "none";

    document.getElementById("about").style.color = "rgb(78, 214, 214)";
    document.getElementById("blog").style.color = "black";
    document.getElementById("home").style.color = "black";
    document.getElementById("shops").style.color = "black";
    document.getElementById("contact").style.color = "black";
};