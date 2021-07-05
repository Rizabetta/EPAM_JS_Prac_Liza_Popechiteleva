const allvoices = document.querySelector('.allvoices');
const microphone = document.querySelector('.microphone');
const stream = document.querySelector('.stream');

const inputactive = document.querySelector('.activereplacement');

function changeclass(activemode) {
    allvoices.classList.remove("selecteditem");
    microphone.classList.remove("selecteditem");
    stream.classList.remove("selecteditem");
    activemode.classList.add("selecteditem");
}

allvoices.onclick = function () {
    inputactive.textContent = 'allvoices - mode';
    changeclass(this);
};

microphone.onclick = function () {
    inputactive.textContent = 'speaker - mode';
    changeclass(this);
};

stream.onclick = function () {
    inputactive.textContent = 'stream - mode';
    changeclass(this);
};