
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.querySelector('body').style.backgroundColor = '#353535';
        document.querySelector('body').style.color = '#fff';
        document.querySelector('#name').style.color = 'skyblue';
        document.querySelector('#topics p').style.color = '#fff';
        document.querySelector('#italic').style.color = '#fff';
        logo.src = 'images/byui-logo-white.png'
    } else {
        // code for changes to colors and logo
        document.querySelector('body').style.backgroundColor = '#fff';
        document.querySelector('body').style.color = 'black';
        document.querySelector('#name').style.color = '#035f9c';
        document.querySelector('#topics p').style.color = 'black';
        document.querySelector('#italic').style.color = 'black';
        logo.src = 'images/byui-logo-blue.webp'

    }
}           
                    