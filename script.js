const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});

   
function tarjima() {
  var oynasi = document.getElementById("tarjima");
  var tanlangan_tarjima = oynasi.value;
  var natija = document.getElementById("natija");

  if (tanlangan_tarjima == "uzbek") {
    natija.innerHTML = "Uy";
  } else if (tanlangan_tarjima == "english") {
    natija.innerHTML = "Home";
  } 
  // 
  var natija = document.getElementById("natija1");

if (tanlangan_tarjima == "uzbek") {
  natija.innerHTML = "Haqida";
} else if (tanlangan_tarjima == "english") {
  natija.innerHTML = "About";
} 
// 
var natija = document.getElementById("natija2");

if (tanlangan_tarjima == "uzbek") {
  natija.innerHTML = "Turkum";
} else if (tanlangan_tarjima == "english") {
  natija.innerHTML = "Category";
} 
// 
var natija = document.getElementById("natija3");

if (tanlangan_tarjima == "uzbek") {
  natija.innerHTML = "Xizmatlar";
} else if (tanlangan_tarjima == "english") {
  natija.innerHTML = "Services";
} 
// 
var natija = document.getElementById("natija4");

if (tanlangan_tarjima == "uzbek") {
  natija.innerHTML = "Aloqa";
} else if (tanlangan_tarjima == "english") {
  natija.innerHTML = "Contact";
} 
// 
var natija = document.getElementById("natija5");

if (tanlangan_tarjima == "uzbek") {
  natija.innerHTML = "Salom Dunyo!";
} else if (tanlangan_tarjima == "english") {
  natija.innerHTML = "Hello World!";
} 
// 
var natija = document.getElementById("natija6");

if (tanlangan_tarjima == "uzbek") {
  natija.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, farq.";
} else if (tanlangan_tarjima == "english") {
  natija.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, distinctio.";
} 
// 
var natija = document.getElementById("natija7");

if (tanlangan_tarjima == "uzbek") {
  natija.innerHTML = "Salom Dunyo!";
} else if (tanlangan_tarjima == "english") {
  natija.innerHTML = "Hello World!";
} 
}


