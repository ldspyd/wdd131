let title = document.querySelector('h1');

console.log(title)

title.textContent = 'Web Page Components';


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})
                