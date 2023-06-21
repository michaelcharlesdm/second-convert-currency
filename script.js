// VERIFICAR SE O JAVASCRIPT ESTA CONCTADO
// CHAMAR OS ELEMENTOS, O PRIMEIRO É O BUTTON
const convertButton = document.querySelector(".convert-button") 
const currencySelect = document.querySelector(".currency-select")
const currencySelectSecond = document.querySelector(".currency-select-2")






function convertValues (){
    const inputCurrencyValues = document.querySelector(".dark-placeholder").value // valor digitado no input
    const currencyValueToConvert = document.querySelector(".p-real") // texto do acima valor em real ou valor superior
    const currencyValueConverted = document.querySelector("#p-money-convert-2")// texto do valor abaixo

    const dolarToday = 4.82
    const euroToDay = 5.32
    const libraToDay = 6.18

   
 

if(currencySelect.value === "dolar"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValues / dolarToday)
}

if(currencySelect.value === "euro"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValues / euroToDay)
}

if(currencySelect.value === "libra"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-GB", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValues / libraToDay)
}

if(currencySelectSecond.value === "real" && currencySelect.value === "real"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValues)
}

//----------------------------------do dolar para as demais moedas.

else if(currencySelectSecond.value === "dolar" && currencySelect.value === "dolar"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValues)

}

else if(currencySelectSecond.value === "dolar" && currencySelect.value === "euro"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValues * 0.92 )

}

else if(currencySelectSecond.value === "dolar" && currencySelect.value === "libra"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-GB", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValues * 0.79)

}

else if(currencySelectSecond.value === "dolar" && currencySelect.value === "real"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValues * dolarToday)

}

//----------------------do euro para as demais moedas

else if(currencySelectSecond.value === "euro" && currencySelect.value === "dolar"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValues / 0.92)

}

else if(currencySelectSecond.value === "euro" && currencySelect.value === "euro"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValues)

}

else if(currencySelectSecond.value === "euro" && currencySelect.value === "libra"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-GB", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValues * 0.86)

}

else if(currencySelectSecond.value === "euro" && currencySelect.value === "real"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pr-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValues * 5.2)

}

//----------------------da libra para as demais moedas

else if(currencySelectSecond.value === "libra" && currencySelect.value === "dolar"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValues * 1.27)

}

else if(currencySelectSecond.value === "libra" && currencySelect.value === "euro"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValues * 1.17)

}

else if(currencySelectSecond.value === "libra" && currencySelect.value === "libra"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-GB", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValues)

}

else if(currencySelectSecond.value === "libra" && currencySelect.value === "real"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValues * 6.12)

}


if(currencySelectSecond.value === "dolar"){
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValues)
}

if(currencySelectSecond.value === "real"){
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValues)
}

if(currencySelectSecond.value ==="euro"){
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValues)
}

if(currencySelectSecond.value ==="libra"){
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-GB", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValues)
}



}


function changeImageNacionalitySecond (){
    const changeImageNacionalitySecond = document.querySelector(".img-brasil")
    const convertedNameNacionalitySecond = document.querySelector(".text-real")

    if(currencySelectSecond.value === "real"){
        changeImageNacionalitySecond.src = "./assets/brasil 2.png"
        convertedNameNacionalitySecond.innerHTML = "Real"
    }

    if(currencySelectSecond.value === "dolar"){
        changeImageNacionalitySecond.src = "./assets/estados-unidos (1) 1.png"
        convertedNameNacionalitySecond.innerHTML = "Dólar Americano"
    }

    if(currencySelectSecond.value === "euro"){
        changeImageNacionalitySecond.src = "./assets/image-euro.png"
        convertedNameNacionalitySecond.innerHTML = "Euro"
    }

    if(currencySelectSecond.value === "libra"){
        changeImageNacionalitySecond.src = "./assets/libra 1.png"
        convertedNameNacionalitySecond.innerHTML = "Libra"
    }
    convertValues ()
}


function changeImageNacionality (){

    const changeImageNacionality = document.querySelector(".img-united")
    const convertedNameNacionality = document.querySelector(".text-dolar")
    
    if(currencySelect.value === "dolar"){
        changeImageNacionality.src = "./assets/estados-unidos (1) 1.png"
        convertedNameNacionality.innerHTML = "Dólar Americano"
    }

    if(currencySelect.value === "euro"){
        changeImageNacionality.src = "./assets/image-euro.png"
        convertedNameNacionality.innerHTML = "Euro"
    }

    if(currencySelect.value === "libra"){
        changeImageNacionality.src = "./assets/libra 1.png"
        convertedNameNacionality.innerHTML = "Libra"
    }

    if(currencySelect.value === "real"){
        changeImageNacionality.src = "./assets/brasil 2.png"
        convertedNameNacionality.innerHTML = "Real"
    }
    convertValues ()
}

convertButton.addEventListener("click",convertValues,)
currencySelect.addEventListener("change", changeImageNacionality)
currencySelectSecond.addEventListener("change", changeImageNacionalitySecond)