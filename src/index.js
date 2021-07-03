const allvoices = document.querySelector('.allvoices');
const microphone = document.querySelector('.microphone');
const stream = document.querySelector('.stream');

const iconvalues = document.querySelector('.iconvalues');

const inputactive = document.querySelector('.activereplacement');

allvoices.onclick = function () {
    inputactive.textContent = 'allvoices - mode';

    allvoices.classList.add("selecteditem");
    microphone.classList.remove("selecteditem");
    stream.classList.remove("selecteditem");

};

microphone.onclick = function () {
    inputactive.textContent = 'speaker - mode';

    microphone.classList.add("selecteditem");
    allvoices.classList.remove("selecteditem");
    stream.classList.remove("selecteditem");
};

stream.onclick = function () {
    inputactive.textContent = 'stream - mode';

    stream.classList.add("selecteditem");
    allvoices.classList.remove("selecteditem");
    microphone.classList.remove("selecteditem");
};