let tablinks = document.querySelectorAll(".tab-links");
let tabcontents = document.querySelectorAll(".tab-contents");
let sidemenu = document.getElementById("sidemenu");


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

function closemenu() {
    sidemenu.style.right = "-200px";
}

function openmenu() {
    sidemenu.style.right = "0";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxzE-2Q15tFk5c7G8wy-I_Wr6oXh7oIfDAMGzjmqeXJV0UAT5pr96MCVevzwxC4vVgM/exec'
const form = document.forms['submit-to-google-sheet']

const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    //.then(response => console.log('Success!', response))
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(() => {
            msg.innerHTML = ""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
