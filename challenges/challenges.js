
const intro = document.querySelector('#intro');
intro.style.backgroundColor = '#f2c556';

const em = document.querySelector('em');
em.style.backgroundColor = '#acbfcc';
em.innerText = 'USS Voyager Starship';

const img = document.createElement('img');
img.setAttribute('src','https://bit.ly/3RfG4sY');
const imgHolder = document.querySelector('#starship');
imgHolder.append(img);
img.setAttribute('class','rounded');
// img.classList.add('.round')
document.querySelector('.rounded').style.borderRadius = '30px'