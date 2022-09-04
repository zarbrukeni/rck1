// form buttons js
const nextFormbtn = document.getElementById("nextFormbtn");
const backbtn = document.getElementById("back-div1");
const formdiv1 = document.getElementById("formdiv1");
const formdiv2 = document.getElementById("formdiv2");
const landingBtn = document.getElementById("landingBtn");
const h1 = document.getElementById("h1")
const h2 = document.getElementById("h2")

// nextFormbtn.addEventListener("click", function(){
//     formdiv1.style.display = "none";
//     formdiv2.style.display = "block";
// })

backbtn.addEventListener("click", function(){
    formdiv2.style.display = "none";
    formdiv1.style.display = "block";
    h1.style.borderBottom = "2px solid #000000";
    h2.style.borderBottom = "";

})


// Initialize get requests
function teams(){
    let teams = {
        method: 'get',
        url: 'https://pcfy.redberryinternship.ge/api/teams',
        headers: { 
        'accept': 'application/json'
        }
    };
    axios(teams)
    .then(function (response) {
        response.data.data.forEach(element => {
            // JQUERY FUNCTION APPEND
            $("#team").append('<option value="'+ element.id +' ">'+ element.name +' </option>');
            // END JQUERY FUNCTION APPEND
        })
    })
    .catch(function (error) {
        console.log(error);
    });
}
function poziciebi(){
    // get position
    let poziciebi = {
        method: 'get',
        url: 'https://pcfy.redberryinternship.ge/api/positions',
        headers: { 
        'accept': 'application/json'
        }
    };
    axios(poziciebi)
    .then(function (response) {
        
        response.data.data.forEach(elementPosition => {
            // JQUERY FUNCTION APPEND
                $("#position").append('<option value="'+ elementPosition.id +' ">'+ elementPosition.name +' </option>')
            // END JQUERY FUNCTION APPEND
        })
    })
    .catch(function (error) {
        console.log(error);
    });
}
function brandebi(){
    let brandebi = {
        method: 'get',
        url: 'https://pcfy.redberryinternship.ge/api/brands',
        headers: { 
        'accept': 'application/json'
        }
    };
    axios(brandebi)
    .then(function (response) {
        
        response.data.data.forEach(elementBrands => {
            // JQUERY FUNCTION APPEND
            $("#laptopbrand").append('<option value="'+ elementBrands.id +' ">'+ elementBrands.name +' </option>')
            
                // END JQUERY FUNCTION APPEND
        })
    })
    .catch(function (error) {
        console.log(error);
    });
}


function cpus(){
    let cpus = {
        method: 'get',
        url: 'https://pcfy.redberryinternship.ge/api/cpus',
        headers: { 
        'accept': 'application/json'
        }
    };
    axios(cpus)
    .then(function (response) {
        response.data.data.forEach(elementCpu => {
            // JQUERY FUNCTION APPEND
            $("#laptopcpu").append('<option value="'+ elementCpu.name +' ">'+ elementCpu.name +' </option>')
            // END JQUERY FUNCTION APPEND
        })
    })
    .catch(function (error) {
        console.log(error);
    });
}

$(document).ready(function() 
{
    teams();
    poziciebi();
    brandebi();
    cpus();
});

// upload image 
const uploadBtn = document.getElementById("upload-btn");
const laptopImage = document.getElementById("laptopimage");

uploadBtn.addEventListener("click", (e) => {
    laptopImage.click();
    e.preventDefault();
});


// modal variables
const modaldiv = document.getElementById("modal-div")
const formdiv = document.getElementById("form-main-container")
const formbody = document.getElementById("form-body")

// post request
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    axios.post("https://pcfy.redberryinternship.ge/api/laptop/create", formData, {
            headers:{
                "Content-Type": "multipart/form-data",
            },
        })
        .then((response) => {
            console.log(response);
            formdiv.style.display = "none";
            modaldiv.style.display = "block";
            formbody.style.backgroundColor = "#4A4A4A";
        })
        .catch((error) => {
            console.log(error);

        })
});
