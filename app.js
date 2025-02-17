let card = document.querySelectorAll(".trend");
let mainpage = document.querySelector(".main");
let contact = document.getElementById("contact");
let blog = document.querySelector(".trends");
let container = document.querySelector(".container");


function homes(){
    mainpage.style.display = "flex";
    for(x of card){
        x.style.display = "block";
    }
    blog.style.display = "block";

    document.getElementById("home").style.color = "rgb(78, 214, 214)";
    document.getElementById("blog").style.color = "black";
    document.getElementById("shops").style.color = "black";
    document.getElementById("contact").style.color = "black";


}

function shops(){
    mainpage.style.display = "none";
    blog.style.display = "none";
    document.getElementById("shops").style.color = "rgb(78, 214, 214)";
    document.getElementById("home").style.color = "black";
    document.getElementById("blog").style.color = "black";
    document.getElementById("contact").style.color = "black";
}

function blogs(){
    mainpage.style.display = "none";
    for(x of card){
        x.style.display = "none";
    }
    blog.style.display = "block";
    document.getElementById("blog").style.color = "rgb(78, 214, 214)";
    document.getElementById("home").style.color = "black";
    document.getElementById("shops").style.color = "black";
    document.getElementById("contact").style.color = "black";
}


