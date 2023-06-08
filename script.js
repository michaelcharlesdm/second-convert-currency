
// Construa sua aplicação com calma, parte por parte, e pesquise caso tenha dúvidas

const buttonConvert = document.querySelector(".convert-button") // 1° chamei o botão
const currencySelect = document.querySelector(".currency-select") // 13° seletor da moeda a ser convertida
const secondCurrencySelecT = document.querySelector(".currency-select-2")

function currencyValues (){ // 3° criei a função com as condições para a mudança

    const inputCurrency = document.querySelector("#input-insert-value").value // 4° chamei somente o valor do input
    const currencyValueToConvert = document.querySelector(".p-money-convert") // 9° valor de outras moedas
    const currencyValueToInsert = document.querySelector(".p-real") // valor em real
    

    const dollarToDay = 5.05 // 5° chamei o valor de dolar
    const euroToDay = 5.41 // 14° valor do euro
    const libraToDay = 6.30 // valor do euro
    const realToDay = 1.0 // valor do real

    const euroUnit = 0.93
    const libraUnit = 0.81
    


    // console.log(currencySelect.value)


    if(currencySelect.value == "dolar"){ // AQUI EU ERREI POR MUITO TEMPO, ESQUECIA DE COLOCAR .VALUE

        currencyValueToConvert.innerHTML =  new Intl.NumberFormat("en-US",{ // aqui foi feito calculo simples
            // depois adicionamos a formatação Intl.Number
            style: "currency",
            currency:"USD"
        }).format(inputCurrency / dollarToDay);
    }
    
    if(currencySelect.value == "euro"){ // AQUI EU ERREI POR MUITO TEMPO, ESQUECIA DE COLOCAR .VALUE

        currencyValueToConvert.innerHTML =  new Intl.NumberFormat("en-EN",{ // aqui foi feito calculo simples
            // depois adicionamos a formatação Intl.Number
            style: "currency",
            currency:"EUR"
        }).format(inputCurrency / euroToDay);
    }

    if(currencySelect.value == "libra"){ // AQUI EU ERREI POR MUITO TEMPO, ESQUECIA DE COLOCAR .VALUE

        currencyValueToConvert.innerHTML =  new Intl.NumberFormat("en-GB",{ // aqui foi feito calculo simples
            // depois adicionamos a formatação Intl.Number
            style: "currency",
            currency:"GBP"
        }).format(inputCurrency / libraToDay);
    }

    if(currencySelect.value == "real"){ // AQUI EU ERREI POR MUITO TEMPO, ESQUECIA DE COLOCAR .VALUE

        currencyValueToConvert.innerHTML =  new Intl.NumberFormat("pt-BR",{ // aqui foi feito calculo simples
            // depois adicionamos a formatação Intl.Number
            style: "currency",
            currency:"BRL"
        }).format(inputCurrency / realToDay);
    }


//----------------CONVERTER DE DOLAR P/ EURO, LIBRA, REAL E MANTER O VALOR DE DOLAR P/ DOLAR ---------------------------
 if(secondCurrencySelecT.value == "dolar"){ // AQUI EU ERREI POR MUITO TEMPO, ESQUECIA DE COLOCAR .VALUE

    currencyValueToConvert.innerHTML =  new Intl.NumberFormat("en-EN",{ // aqui foi feito calculo simples
        // depois adicionamos a formatação Intl.Number
        style: "currency",
        currency:"EUR"
    }).format(inputCurrency * euroUnit);
}

if(secondCurrencySelecT.value == "dolar"){ // AQUI EU ERREI POR MUITO TEMPO, ESQUECIA DE COLOCAR .VALUE

    currencyValueToConvert.innerHTML =  new Intl.NumberFormat("en-GB",{ // aqui foi feito calculo simples
        // depois adicionamos a formatação Intl.Number
        style: "currency",
        currency:"GBP"
    }).format(inputCurrency * libraUnit);
}



currencyValueToInsert.innerHTML = new Intl.NumberFormat("pt-BR",{
    style: "currency",
    currency: "BRL"
}).format(inputCurrency)

currencyValueToInsert.innerHTML = new Intl.NumberFormat("en-US",{
    style: "currency",
    currency: "USD"
}).format(inputCurrency)

}


function changeCurrency (){// criamos um ouvidor para ouvir a CHANGE = MUDANÇA / quando houver essa mudança essa
    // function vai executar os comando que estão abaixo
    const currencyImg = document.querySelector(".img-united") 
    const currencyName = document.querySelector(".text-dolar")


    if(currencySelect.value == "dolar"){

        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/estados-unidos (1) 1.png"
    }


    if(currencySelect.value == "euro"){

        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/image-euro.png"
    }

    if(currencySelect.value == "libra"){

        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra 1.png"
    }

    if(currencySelect.value == "real"){

        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/brasil 2.png"
    }

    
    currencyValues ()
    
}

function changeCurrencySecond (){

    const currencyImgBrasil = document.querySelector(".img-brasil") 
    const currencyNameReal = document.querySelector("#text-real-2")

    if(secondCurrencySelecT.value == "dolar"){

        currencyNameReal.innerHTML = "Dólar Americano"
        currencyImgBrasil.src = "./assets/estados-unidos (1) 1.png"
    }


    if(secondCurrencySelecT.value == "euro"){

        currencyNameReal.innerHTML = "Euro"
        currencyImgBrasil.src = "./assets/image-euro.png"
    }

    if(secondCurrencySelecT.value == "libra"){

        currencyNameReal.innerHTML = "Libra"
        currencyImgBrasil.src = "./assets/libra 1.png"
    }

    if(secondCurrencySelecT.value == "real"){

        currencyNameReal.innerHTML = "Real"
        currencyImgBrasil.src = "./assets/brasil 2.png"
    }


}



secondCurrencySelecT.addEventListener("change",changeCurrencySecond )
currencySelect.addEventListener("change", changeCurrency)
buttonConvert.addEventListener("click", currencyValues) // 2° liguei o ouvir de eventos ao botão