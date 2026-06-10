const aCourse = {
    // code: 'CSE121b',
    name: 'Snortleblat',
    image: 'images/snortleblat.webp',

    sections: [
        { classname: 'Swamp Beast Diplomat', level: 1, health: 100 }
        // { classname: 2, level: 'STC 347', health: 28, days: 'TTh', instructor: 'Sis A' }
    ],

    enrollStudent: function () {
        // find the right section...Array.findIndex will work here
        // const sectionIndex = this.sections.findIndex(
        //     (section) => section.health == health
        // );
        if (this.sections[0].health >= 1) {
            this.sections[0].health -= 20;
            renderSections(this.sections);
        } else {
            alert('The character is dead')
        }
    }
};

function sectionTemplate(section) {
    return `
    <p><strong>Class:</strong> ${section.classname}</p>
    <p><strong>Level:</strong> ${section.level}</p>
    <p><strong>Health:</strong> ${section.health}</p>`
}

// <td>${section.days}</td>
//   <td>${section.instructor}</td>

function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector(".stats").innerHTML = html.join("");
}

renderSections(aCourse.sections);


document.querySelector("#attacked").addEventListener("click", function () {
    // const health = aCourse.sections[0].health;
    aCourse.enrollStudent();
});

document.querySelector("#levelup").addEventListener("click", function () {
    // const health = aCourse.sections[0].health;
    aCourse.sections[0].level++;
    renderSections(aCourse.sections);
});


document.querySelector('.name').textContent = aCourse.name;
// document.querySelector('#courseCode').textContent = aCourse.code;


document.querySelector('img').setAttribute('src', aCourse.image);
document.querySelector('img').setAttribute('alt', aCourse.name);
// document.querySelector('img').style.width = '100px';


// console.log(aCourse.sections);


