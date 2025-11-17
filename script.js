const buttonBank = document.querySelectorAll('#pad-bank .drum-pad');
const powerSpan = document.getElementById('power-span');
const swapSpan = document.getElementById('swap-span')
const powerCheckbox = document.getElementById('power-checkbox');
const swapCheckbox = document.getElementById('swap-checkbox');
const powerButton = document.getElementById('power-button');
const swapButton = document.getElementById('swap-button');
const slider = document.getElementById('volume-slider');
const output = document.getElementById('display');

function setVolume() {
    slider.addEventListener('input', () => {
        document.querySelectorAll('.clip').forEach(audio => {
            audio.volume = slider.value / 100;
        });
        if (powerCheckbox.checked) {
            output.textContent = `Volume: ${slider.value}`;
            setTimeout(() => output.textContent = '', 1000)
        }
    })
}

function swapItems() {
    const swap = swapCheckbox.checked;
    swapSpan.textContent = swap ? 'Bank: Heater Kit' : 'Bank: Smooth Piano Kit';
    
    buttonBank.forEach(b => {
        switch (true) {
        case b.firstChild.textContent.trim() === 'Q':
            b.id = swap ? 'Heater 1' : 'Chord 1' ;
            b.lastElementChild.src = swap 
            ? "https://cdn.freecodecamp.org/curriculum/drum/Heater-1.mp3" 
            : "https://cdn.freecodecamp.org/curriculum/drum/Chord_1.mp3";
            break;
        case b.firstChild.textContent.trim() === 'W':
            b.id = swap ? 'Heater 2' : 'Chord 2' ;
            b.lastElementChild.src = swap 
            ? "https://cdn.freecodecamp.org/curriculum/drum/Heater-2.mp3" 
            : "https://cdn.freecodecamp.org/curriculum/drum/Chord_2.mp3";
            break;
        case b.firstChild.textContent.trim() === 'E':
            b.id = swap ? 'Heater 3' : 'Chord 3' ;
            b.lastElementChild.src = swap 
            ? "https://cdn.freecodecamp.org/curriculum/drum/Heater-3.mp3" 
            : "https://cdn.freecodecamp.org/curriculum/drum/Chord_3.mp3";
            break;
        case b.firstChild.textContent.trim() === 'A':
            b.id = swap ? 'Heater 4' : 'Shaker' ;
            b.lastElementChild.src = swap 
            ? "https://cdn.freecodecamp.org/curriculum/drum/Heater-4_1.mp3" 
            : "https://cdn.freecodecamp.org/curriculum/drum/Give_us_a_light.mp3";
            break;
        case b.firstChild.textContent.trim() === 'S':
            b.id = swap ? 'Clap' : 'Open HH' ;
            b.lastElementChild.src = swap 
            ? "https://cdn.freecodecamp.org/curriculum/drum/Heater-6.mp3" 
            : "https://cdn.freecodecamp.org/curriculum/drum/Dry_Ohh.mp3";
            break;
        case b.firstChild.textContent.trim() === 'D':
            b.id = swap ? 'Open HH' : 'Closed HH' ;
            b.lastElementChild.src = swap 
            ? "https://cdn.freecodecamp.org/curriculum/drum/Dsc_Oh.mp3" 
            : "https://cdn.freecodecamp.org/curriculum/drum/Bld_H1.mp3";
            break;
        case b.firstChild.textContent.trim() === 'Z':
            b.id = swap ? 'Kick n\' Hat' : 'Punchy Kick' ;
            b.lastElementChild.src = swap 
            ? "https://cdn.freecodecamp.org/curriculum/drum/Kick_n_Hat.mp3" 
            : "https://cdn.freecodecamp.org/curriculum/drum/punchy_kick_1.mp3";
            break;
        case b.firstChild.textContent.trim() === 'X':
            b.id = swap ? 'Kick' : 'Side Stick' ;
            b.lastElementChild.src = swap 
            ? "https://cdn.freecodecamp.org/curriculum/drum/RP4_KICK_1.mp3" 
            : "https://cdn.freecodecamp.org/curriculum/drum/side_stick_1.mp3";
            break;
        case b.firstChild.textContent.trim() === 'C':
            b.id = swap ? 'Closed HH' : 'Snare' ;
            b.lastElementChild.src = swap 
            ? "https://cdn.freecodecamp.org/curriculum/drum/Cev_H2.mp3" 
            : "https://cdn.freecodecamp.org/curriculum/drum/Brk_Snr.mp3";
            break;
        }
    })
};

function displayOutput() {
    buttonBank.forEach(b => {
        const audio = b.querySelector('audio');

        b.addEventListener('click', e => {
            if (powerCheckbox.checked) {
                output.textContent = b.id;
                b.classList.add('active');
                audio.currentTime = 0;
                audio.play();
                setTimeout(() => b.classList.remove('active'), 100);
            }
        })
    })

    document.addEventListener('keydown', e => {
        const key = e.key.toUpperCase();
        const audio = document.getElementById(key);
        buttonBank.forEach(b => {
            if (key === b.firstChild.textContent.trim() && powerCheckbox.checked) {
                output.textContent = b.id;
                b.classList.add('active');
                audio.currentTime = 0;
                audio.play();
                setTimeout(() => b.classList.remove('active'), 100);
            }
        })
    })
}

function activeate() {
    powerSpan.textContent = powerCheckbox.checked ? 'Power: On' : 'Power: Off';
    
    if (powerCheckbox.checked) {
        swapCheckbox.addEventListener('click', swapItems)
        swapCheckbox.disabled = false;
        displayOutput();
    } else {
        swapCheckbox.removeEventListener('click', swapItems);
        swapCheckbox.disabled = true;
        output.textContent = '';

    }
}

powerCheckbox.addEventListener('click', activeate)

activeate();