
//Javescript interaction

function showMessage(){
    alert("Your form has been successfully submitted");
  }

  //document.querySelector('button').addEventListener('click', showMessage);


  Fancybox.bind("[data-fancybox]");

//toggle betweem light mode and dark mode 

const dark_mode_toggle = document.querySelector(".js-toggle-mode");

if(dark_mode_toggle != null){

dark_mode_toggle.addEventListener("click", event => {

const icon = event.currentTarget.querySelector("i");

if(icon.classList.contains("darkmode-toggle")){

icon.classList.remove("darkmode-toggle");
icon.classList.add("darkmode-toggle-normal");

icon.classList.remove("fa-sun-o");
icon.classList.add("fa-moon-o");


document.documentElement.setAttribute("data-theme", "");
}else{
icon.classList.remove("darkmode-toggle-normal");
icon.classList.add("darkmode-toggle");

icon.classList.remove("fa-moon-o");
icon.classList.add("fa-sun-o");

document.documentElement.setAttribute("data-theme", "dark-mode");
}



})
}

