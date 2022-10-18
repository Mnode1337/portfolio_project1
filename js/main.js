let tablinks = document.querySelectorAll(".tab-links");
let tabcontents = document.querySelectorAll(".tab-contents");

function opentab(tabname) {

    for(tablink of tablinks) {
        tablink.classList.remove("active-link")
    }

    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-link")

    //document.getElementById(tabname).classList.add("active-tab")
    let result = '#'+tabname
    //console.log(result);
    document.querySelector(result).classList.add("active-tab")
    
}