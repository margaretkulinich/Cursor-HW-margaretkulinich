const playAudio = function (keyElem, audioElem) {
    audioElem.currentTime = 0;
    audioElem.play();
    keyElem.classList.add('playing');
};

const getAudioElem = (value) => {
    return document.querySelector(`audio[data-key="${value}"]`);
}

function handleClick() {
    const keyElem = this;
    const dataKeyValue = keyElem.dataset.key;
    const audioElem = getAudioElem(dataKeyValue);

    playAudio(keyElem, audioElem);
};

const handleKeydown = (e) => {
    const keyElem = document.querySelector(`.key[data-key="${e.code}"]`);
    const audioElem = getAudioElem(e.code);

    if (!audioElem) return;

    playAudio(keyElem, audioElem);
};

const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('click', handleClick);

    key.addEventListener('transitionend', event => {
      event.currentTarget.classList.remove('playing');
    });
});


window.addEventListener('keydown', handleKeydown);
