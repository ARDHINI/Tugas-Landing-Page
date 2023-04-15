// Tambahkan kode JavaScript kalian di file ini

function handleGetFormData(){
    const name =  document.getElementById("name").value;
    const email =  document.getElementById("email").value;
    const city =  document.getElementById("city").value;
    const zipCode =  document.getElementById("zip-code").value;
    const status =  document.getElementById("status").checked;

    return {
        name, email, city, zipCode, status
    }
}

function isNumber(string){
    if(isNaN(string)){
        return false;
    } else{
        return true;
    }
}

function checkboxIsChecked(){
    const checkbox = document.getElementById("status").checked;
    if(checkbox){
        return true;
    } else{
        return false
    }
}


function validateFormData(validasi){
    if (validasi.name && validasi.city && validasi.email && validasi.zipCode == null || !checkboxIsChecked() || !isNumber(validasi.zipCode)) {
        return false;
    } else {
        return true;
    }
}

function submit(){
    const warning = document.querySelector("#warning");

    const form = handleGetFormData();
    if(validateFormData(form) == false ){
        warning.innerText = "Periksa form anda sekali lagi"; 
        warning.style.color = "yellow"; 
    }else if(validateFormData(form) == true ){
        warning.innerText = ""; 
    }
}

addEventListener("submit", submit);