/* -------------------------------------------------------------------------  */

const loadingText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

/* -------------------------------------------------------------------------  */

let load = 0;
let int = setInterval(blurring, 30);    // 30ms

/* -------------------------------------------------------------------------  */

function scale(num, inMin, inMax, outMin, outMax)
{
    return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

/* -------------------------------------------------------------------------  */

function blurring() 
{
    ++load;

    if (load > 99) 
    {
        clearInterval(int);
    }

    loadingText.innerText = `${load}%`;
    loadingText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

/* -------------------------------------------------------------------------  */