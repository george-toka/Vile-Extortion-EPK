/* For red animation on media icons */
icons = document.querySelectorAll(".icon a img");
for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener("mouseover", function(e) {
            e.target.src = "res/" + e.target.id + "-black.svg";
    });

    icons[i].addEventListener("mouseout", function(e) {
        e.target.src = "res/" + e.target.id + ".svg";
    });
}

// Navbar styling when scrolling
document.addEventListener("scroll", function(){
    if(document.documentElement.scrollTop > 50){
        //change the navbar
        document.querySelector(".nav-bar").style.background = "rgba(0,0,0,0.6)";
        document.querySelector(".nav-bar").style.transition = "all 0.5s";
    }else{
        document.querySelector(".nav-bar").style.background = "rgba(0,0,0,0.0)";
        document.querySelector(".nav-bar").style.transition = "all 0.5s";
    }
});


  








