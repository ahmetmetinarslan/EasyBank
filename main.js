const navBtn =  document.getElementById("navBtn");
      navBtnClose = document.getElementById("navBtnClose");
      mobileMenu = document.getElementById("mobileMenu");
      home = document.getElementById("home");

      
navBtn.addEventListener("click", function() {
    navBtn.style.display = "none";
    navBtnClose.style.display = "inline";
    mobileMenu.style.display = "inline";
});


navBtnClose.addEventListener("click", function() {
    navBtnClose.style.display = "none";
    navBtn.style.display = "inline";
    mobileMenu.style.display = "none";
});

home.addEventListener("click", function() {
    navBtn.style.display = "inline";
    navBtnClose.style.display = "none";
    mobileMenu.style.display = "none";
});