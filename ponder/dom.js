let title = document.querySelector('h1');
console.log(title)
title.textContent = 'Web Page Components';
// document.querySelector(('h1')).textContent = 'Web Page Components';

// document.querySelector('#topics').style.color = 'red';

title.addEventListener('click',function() {
    title.classList.toggle('highlight');
});


const topics = document.querySelector('#topics');
topics.style.color = 'purple';

const wrapper = document.getElementById('content');
wrapper.style.backgroundColor = 'lightblue';

let list = document.querySelector('.list');
// let list = document.querySelectorAll('.list');
list.style.border = '3px solid black'

let paragraph = document.querySelector('p');
paragraph.style.fontSize = '3em';

paragraph.classList.add('background');

const image = document.querySelector('img');
image.setAttribute('src', 'images/Web_Page_components.png');

// dropdown.addEventListener('change',)
// let selectElem = document.getElementById('webdevlist');

const html = document.querySelector('#html');
const css = document.querySelector('#css');
const js = document.querySelector('#js');

const dropdown = document.querySelector('#webdevlist');
dropdown.addEventListener('change', function () {
    html.style.color = 'purple'
    css.style.color = 'purple'
    js.style.color = 'purple'
    let codeValue = dropdown.value;
    console.log(codeValue);
    document.getElementById(codeValue).style.color = 'red';
});
