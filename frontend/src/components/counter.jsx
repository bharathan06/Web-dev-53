import React from 'react'

const Count = () => {
    var counterEl = document.getElementById('counter');
    var decrementBtn = document.getElementById('decrement-btn');
    var incrementBtn = document.getElementById('increment-btn');
    let count = 1;

    decremen - tBtn.addEventListener('click', () => {
        if (count > 1) {
            count--;
            counterEl.textContent = count;
        }
    });

    incrementBtn.addEventListener('click', () => {
        count++;
        counterEl.textContent = count;
    });
}

export default Count
