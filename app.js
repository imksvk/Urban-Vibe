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
    document.getElementsByClassName("contact")[0].style.display = "none";


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
    document.getElementsByClassName("contact")[0].style.display = "none";
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
    footer.style.display = "flex";
    letter.style.display = "flex";

    
    document.getElementsByClassName("contact")[0].style.display = "none";
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
    document.getElementsByClassName("contact")[0].style.display = "none";
    // footer.style.display = "none";
    // letter.style.display = "none";

    document.getElementById("about").style.color = "rgb(78, 214, 214)";
    document.getElementById("blog").style.color = "black";
    document.getElementById("home").style.color = "black";
    document.getElementById("shops").style.color = "black";
    document.getElementById("contact").style.color = "black";
};




function contacts(){
    mainpage.style.display = "none";
    for(x of card){
        x.style.display = "none";
    }
    blog.style.display = "none";
    about.style.display = "none";
    
    document.getElementsByClassName("contact")[0].style.display = "block";
    // footer.style.display = "none";
    // letter.style.display = "none";

    document.getElementById("contact").style.color = "rgb(78, 214, 214)";
    document.getElementById("blog").style.color = "black";
    document.getElementById("home").style.color = "black";
    document.getElementById("shops").style.color = "black";
    document.getElementById("about").style.color = "black";
}



// cart functions


function show(img){
    let newimg = document.getElementById("newimg");
    // newimg.src = img.src;
    if (img.tagName === "IMG") {
        newimg.src = img.src;
    } else {
        // If the clicked element is a button, find the corresponding image inside its card
        newimg.src = img.closest(".trend").querySelector("img").src;
    }
    document.querySelector(".cart").style.display ="flex";



    // every thing display none 
    mainpage.style.display = "none";
    for(x of card){
        x.style.display = "none";
    }
    blog.style.display = "none";
    about.style.display = "none";
    contact
    document.getElementsByClassName("contact")[0].style.display = "none";
    
}


function addcart(){
    alert("Added to cart");
    location.reload();
}

// dark mode function

function darkmode(){
    body = document.querySelector("body");
    body.classList.toggle("darkmode");
    
    let btn = document.querySelector("#darkmodebtn");
    if(btn.textContent == "Dark Mode"){
        btn.innerText = "Light Mode";
        btn.style.color = "black";
        btn.style.backgroundColor = "white";
    }else{
        btn.innerText = "Dark Mode";
        btn.style.color = "white";
        btn.style.backgroundColor = "black";
        
    }
}