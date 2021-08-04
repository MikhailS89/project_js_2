const paragraf = document.querySelector('.paragraf');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
// console.log(paragraf, one, two);
one.addEventListener('click', () => {
    paragraf.textContent = paragraf.textContent.replace(/'/g,'"');
});
two.addEventListener('click', () => {
    paragraf.textContent = paragraf.textContent.replace(/\B'|'\B /g,'"');
});

