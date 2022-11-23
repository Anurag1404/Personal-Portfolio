const openMenu = document.querySelector(".openMenu");

navbar.addEventListener("mouseenter", () => {
    
    $(".navbar").css({"width": "12.2em"});
    $(".navItemName").show();
 
})

navbar.addEventListener("mouseleave", () => {
    
    $(".navbar").css({"width": "6.5625em"});
    $(".navItemName").hide();

})

openMenu.addEventListener("click", () => {
    const isOpened = openMenu.getAttribute('aria-expanded');
    if (isOpened === 'false') {
        openMenu.setAttribute('aria-expanded', 'true');
        navbar.style.transform = "translateX(0em)";
    } else {
        openMenu.setAttribute('aria-expanded', 'false');
        navbar.style.transform = "translateX(-6.5625em)";
    }
});






