// get all keys
const keys = document.querySelectorAll('.key')

function playNote(event) {

    let audioKeyCode = getKeyCode(event);
    
    // typed or pressed key
    const key =document.querySelector(`[data-key="${audioKeyCode}"]`)

    // if key exists
    const cantFoundAnyKey = !key
    
    if(cantFoundAnyKey) {
        return;
    }

    addPlayingClass(key)
    playAudio (audioKeyCode)
}

function addPlayingClass(key) {
    key.classList.add('playing')
}

function getKeyCode() {
    let keyCode;
    
    const isKeyBoard =event.type === "keydown" // boolean
    if (isKeyBoard) {
        keyCode = event.keyCode
    } else {
        keyCode= event.target.dataset.key
    }

    return keyCode
}

function playAudio (audioKeyCode) {

    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.correntTime = 0
    audio.play()
}

function removePlayingClass (event) {
    event.target.classList.remove("playing")
}

function registerEvents () {
    // click with mouse
    keys.forEach(function(key) {
        key.addEventListener('click', playNote)
        key.addEventListener('transitionend', removePlayingClass)
    })

    // keyboard type
    window.addEventListener('keydown', playNote)
}

window.addEventListener("load", registerEvents)