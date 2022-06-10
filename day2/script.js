const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if (currentActive > 4) {
        currentActive = 4
    }
    //console.log(currentActive);

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }
    //console.log(currentActive);

    update()
})

function update() {
    circles.forEach((circle, index) => {
        if(index < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    //console.log(actives);
    //console.log((actives.length - 1) / (circles.length - 1) * 100 + '%');
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'


    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === 4) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}
