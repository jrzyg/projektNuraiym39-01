const gmailInput = document.querySelector('#gmail_input')
const gmailResult = document.querySelector('#gmail_result')
const gmailBtn = document.querySelector('#gmail_button')

const ValidSyntax = /^[a-z0-9]+@gmail\.com$/i

gmailBtn.onclick = () => {
    if (ValidSyntax.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK!'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'NOT OK!'
        gmailResult.style.color = 'red'
    }
}

const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')

let positionX = 0

const offsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth

const moveBlock = () => {
    if (positionX < offsetWidth) {
        positionX++
        childBlock.style.left = `${positionX}px`
        requestAnimationFrame(moveBlock)
    }
}
moveBlock()
