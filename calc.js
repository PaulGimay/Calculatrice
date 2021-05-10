const myNumbers = document.querySelectorAll('div[data-button="chiffre"]');
myNumbers.forEach(element => {
    element.addEventListener('click', function () {
        resultat.value += this.dataset.translate // += va me permettre la concaténation.
    })
});
const myResult = document.querySelectorAll('div[data-button="egal"]');
myResult.forEach(element => {
    element.addEventListener('click', function () {
        resultat.value = eval(resultat.value)
    })
});

const clear = document.querySelectorAll('div[data-button="cancel"]');
clear.forEach(element => {
    element.addEventListener('click', function () {
        resultat.value = ""
    })
})





