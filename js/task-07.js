const refs = {
    fontSizeInput: document.querySelector('#font-size-control'),
    textSpan: document.querySelector('#text')
}

// console.log(refs.fontSizeInput)
// console.log(refs.textSpan)

refs.fontSizeInput.addEventListener('input', (event) =>
{
    // console.log(refs.fontSizeInput.value)
    refs.textSpan.style.fontSize = refs.fontSizeInput.value + "px"
})