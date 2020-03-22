const muteAudio = () => {
    let sounds = document.getElementsByTagName('audio');
    for (let j = 0; j < sounds.length; j++) {
        sounds[j].muted = true
        console.log('muted')
    }
}

const unmuteAudio = () => {
    let sounds = document.getElementsByTagName('audio');
    for (let j = 0; j < sounds.length; j++) {
        sounds[j].muted = false
        console.log('unmuted')
    }
}

const checkSound = () => {
    let sound = (localStorage.getItem("sound") === 'true');
    (sound) ? unmuteAudio(): muteAudio() 
}
export {
    checkSound,
    unmuteAudio,
    muteAudio
}