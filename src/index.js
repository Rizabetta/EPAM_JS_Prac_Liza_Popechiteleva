const allvoices = document.querySelector('.allvoices');
const microphone = document.querySelector('.microphone');
const stream = document.querySelector('.stream');

const inputactive = document.querySelector('.activereplacement');

const messagesallvoices = document.getElementById('messagesallvoices');
const messagesmicrophone = document.getElementById('messagesmicrophone');
const messagesstream = document.getElementById('messagesstream');

messagesallvoices.hidden = true;
messagesmicrophone.hidden = true;
messagesstream.hidden = true;

function changeclass(activemode) {
    allvoices.classList.remove("selecteditem");
    microphone.classList.remove("selecteditem");
    stream.classList.remove("selecteditem");
    activemode.classList.add("selecteditem");
}

function hideelements(activemode) {
    messagesallvoices.hidden = true;
    messagesmicrophone.hidden = true;
    messagesstream.hidden = true;
    document.getElementById(activemode).hidden = false;
}

allvoices.onclick = function () {
    inputactive.textContent = 'allvoices - mode';
    changeclass(this);
    hideelements('messagesallvoices');
};

microphone.onclick = function () {
    inputactive.textContent = 'speaker - mode';
    hideelements('messagesmicrophone');
    changeclass(this);

    const start = document.getElementById('start');
    const stop = document.getElementById('stop');

    start.onclick = () => {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                const mediaRecorder = new MediaRecorder(stream);
                mediaRecorder.start();
                let chuck = [];
                mediaRecorder.addEventListener('dataavailable', e => {
                    chuck.push(e.data);
                });
                mediaRecorder.addEventListener('stop', e => {
                    const blob = new Blob(chuck);
                    const audio_url = URL.createObjectURL(blob);
                    const audio = new Audio(audio_url);
                    audio.setAttribute('controls', 1);
                    if (messagesallvoices.childElementCount >= 5) messagesallvoices.firstElementChild.remove();
                    messagesallvoices.appendChild(audio);

                    const player = document.getElementById('player');
                    if (window.URL) { //это нужно починить
                        player.srcObject = stream;
                    } else {
                        player.src = stream;
                    }
                });
                stop.onclick = () => {
                    mediaRecorder.stop();
                };
            });
    };
}

stream.onclick = function () {
    inputactive.textContent = 'stream - mode';
    changeclass(this);
    hideelements('messagesstream');
};