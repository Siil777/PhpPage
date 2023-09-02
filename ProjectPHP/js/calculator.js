
//reset form
function vanish() {
    document.getElementById("var1").reset();
    document.getElementById("vastus").innerHTML = "";
}


//randompic() - võtab pildid massivist ja lehe värskendamisel muudab pildi
function randompic(){
    const images = [
        //massiiv piltidest
        'img/mees.png',
        'img/naine.png',
        'img/Valimata.png'
    ];
    //juhuslikult määratud pildid massivist
    const randomIndex = Math.floor(Math.random() * images.length);
    //pildid võetakse massiivist
    const randomImage = images[randomIndex];

    const img = document.getElementById('random-img');
    img.src = randomImage;
}

// kontrolib kas pildiaadress on sama mis on select loetelus, kui jah sis õige, ei vale
function imgChoice(){
    const img = document.getElementById('random-img');
    if(document.getElementById("valik5").value==img.getAttribute("src"))
    {
        document.getElementById("vastus2").innerHTML="õige";
    }
    else{
        document.getElementById("vastus2").innerHTML="vale";
    }

}
let vastus=document.getElementById("vastus");
let kogus=document.getElementById("kogus");
let vastus3=document.getElementById("vastus3");
let kogus3=document.getElementById("kogus3");

//let vastus2=document.getElementById("vastus2");
//let kogus2=document.getElementById("kogus2");
//let pilt=document.getElementById("pilt");

const dollar=1.16;
const sek=10.65;
const rub=84.20;
const frank=1.077;


// kontrollib et id= kogus ei ole tühi
function validateForm() {
    let x = document.forms["var1"]["kogus"].value;
    if (x == "") {
        alert("Sisesta kogus! ");
        return false;
    }
}
function radioChange(event) {

    validateForm();
    tyhistaCheckboxValik()
    tuhistaselectoption1()
    tyhistaText()
    let vastus=document.getElementById("vastus");
    let kogus=document.getElementById("kogus");
    let inputValue=kogus.value;
    if (event.target.id === "dollar") {
        vastus.innerHTML = calculate(inputValue, dollar) + " $";
        //pilt.src="img/dollar.png";
    } else if (event.target.id === "rub") {
        vastus.innerHTML = calculate(inputValue, rub) + " ₽";
        //pilt.src="img/.png";
    } else if (event.target.id === "kroon") {
        vastus.innerHTML = calculate(inputValue, sek) + " SEK";
        //pilt.src="img/.png";
    } else if (event.target.id === "frank") {
        vastus.innerHTML = calculate(inputValue, frank) + " CHF";
        //pilt.src="img/dollar.png";
    }
}

function calculate(val, currency){

    return (val*currency).toFixed(3);
    // toFixed(3) -? 3 märki peale komat

}

function selectOptionChange(event){

    tyhistaRadioValik()
    validateForm();
    tyhistaCheckboxValik()
    tyhistaText()


    let vastus=document.getElementById("vastus");

    let kogus=document.getElementById("kogus");
    let inputValue=kogus.value;
    if (event.target.value === "dollar") {
        vastus.innerHTML = calculate(inputValue, dollar) + " $";
        //pilt.src="img/dollar.png";
    } else if (event.target.value === "rub") {
        vastus.innerHTML = calculate(inputValue, rub) + " ₽";
        //pilt.src="img/.png";
    } else if (event.target.value === "kroon") {
        vastus.innerHTML = calculate(inputValue, sek) + " SEK";
        //pilt.src="img/.png";
    } else if (event.target.value === "frank") {
        vastus.innerHTML = calculate(inputValue, frank) + " CHF";
        //pilt.src="img/.png";
    }
}













function radioChange1() {
    tyhistaRadioValik()
    tuhistaselectoption1()
    tyhistaCheckboxValik()

    let vastus3 = document.getElementById("vastus");
    let kogus3 = document.getElementById("kogus");
    let inputValue = kogus3.value;
    let inputCurrency = document.getElementById("input").value.toUpperCase();

    let currencyRate = 0;
    let currencySymbol = "";

    if (inputCurrency === "USD") {
        currencyRate = dollar;
        currencySymbol = "$";
    } else if (inputCurrency === "RUB") {
        currencyRate = rub;
        currencySymbol = "₽";
    } else if (inputCurrency === "KROON") {
        currencyRate = sek;
        currencySymbol = "SEK";
    } else if (inputCurrency === "FRANK") {
        currencyRate = frank;
        currencySymbol = "CHF";
    } else {
        vastus3.innerHTML = "Invalid currency";
        return;
    }

    vastus3.innerHTML = calculate(inputValue, currencyRate) + " " + currencySymbol;
}



function checkboxChange1() {
    tyhistaRadioValik()
    tuhistaselectoption1()
    tyhistaText()

    let vastus3 = document.getElementById("vastus");
    let kogus3 = document.getElementById("kogus");
    let inputValue = kogus3.value;

    let checkedCurrencies = [];
    let checkboxes = document.getElementsByName("currency");
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkedCurrencies.push(checkboxes[i].value.toUpperCase());
        }
    }

    let result = "";
    for (let i = 0; i < checkedCurrencies.length; i++) {
        let currencyRate = 0;
        let currencySymbol = "";

        if (checkedCurrencies[i] === "USD") {
            currencyRate = dollar;
            currencySymbol = "$";
        } else if (checkedCurrencies[i] === "RUB") {
            currencyRate = rub;
            currencySymbol = "₽";
        } else if (checkedCurrencies[i] === "KROON") {
            currencyRate = sek;
            currencySymbol = "SEK";
        } else if (checkedCurrencies[i] === "FRANK") {
            currencyRate = frank;
            currencySymbol = "CHF";
        } else {
            vastus3.innerHTML = "Invalid currency";
            return;
        }

        let calculatedValue = calculate(inputValue, currencyRate);
        result += calculatedValue + " " + currencySymbol + "<br>";
    }

    vastus3.innerHTML = result;
}











function selectOptionChange1(event){
    tyhistaRadioValik()

    tyhistaCheckboxValik()
    tyhistaText()

    let vastus1=document.getElementById("vastus3");

    let kogus2=document.getElementById("kogus3");
    let inputValue=kogus2.value;
    if (event.target.value === "dollar1") {
        vastus1.innerHTML = calculate(inputValue, dollar) + " $";
        //pilt.src="img/dollar.png";
    } else if (event.target.value === "rub1") {
        vastus1.innerHTML = calculate(inputValue, rub) + " ₽";
        //pilt.src="img/.png";
    } else if (event.target.value === "kroon1") {
        vastus1.innerHTML = calculate(inputValue, sek) + " SEK";
        //pilt.src="img/.png";
    } else if (event.target.value === "frank1") {
        vastus1.innerHTML = calculate(inputValue, frank) + " CHF";
        //pilt.src="img/.png";
    }
}
function tyhistaRadioValik(){
    var elem=document.getElementsByName("valute");
    for(var i=0; i<elem.length; i++){
        elem[i].checked=false;
    }
}
//input type="text" id="type1" tühistatakse//
function tyhistaText(){
    var inptt=document.getElementById("input");

    inptt.value = "";

}

function tuhistaselectoption1(){
    var elem1=document.getElementById("valik");
    var elem2=document.getElementById("vastus");

    elem1.value = "";
    elem2.value = "";


}

function tyhistaCheckboxValik(){
    var elem3 = document.getElementsByName("currency");
    for(var i = 0; i < elem3.length; i++){
        elem3[i].checked = false;
    }


}
