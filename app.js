let backgroundArray = [
    '#8FB399',
    '#659DBD',
    '#EFE2BA',
    '#EAE7DC',
    '#84CEEB',
    '#5AB9EA',
    '#5680E9',
    '#3AAFA9',
    '#DEF2F1',
    '#3B945E',
    '#687864',
    '#8FC1E3',
    '#0677A1',
    '#0D19A3',
    '#FBE8A6'
]

let previous = document.body.querySelector('.previous');
let next = document.body.querySelector('.next');
let counter = document.body.querySelector('.counter');
let i = 0;
previous.addEventListener('click', () => {
    if (i == 0) {

    } else {
        i--;
        document.body.style.backgroundColor = backgroundArray[i];
        counter.innerHTML = i + 1;
    }

})
next.addEventListener('click', () => {
    if (i == backgroundArray.length - 1) {

    } else {
        i++;
        document.body.style.backgroundColor = backgroundArray[i];
        counter.innerHTML = i + 1;
    }
    
})