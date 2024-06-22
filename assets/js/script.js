let hamburger = document.querySelector('.hamburger')
let header = document.querySelector('header')
let overlay = document.querySelector('.overlay')

hamburger.addEventListener('click', () => {
    header.classList.toggle('open')
    overlay.setAttribute('open', header.classList.contains('open') ? "true" : "false")
    document.body.classList.toggle('no-scroll')
})
// header {
//     &.open.overlay[open = "true"] {
//         +div {
//             overflow: hidden;
//             background - color: yellow;
//         }
//     }

