
let form = document.querySelector('#receipt-form')
let receiptContainer = document.querySelector('#receipt-container')
let button = document.querySelector('.submit')


function receiptTemplate(receipt) {
    return `<div class="receipt">
                <h3>Category: </h3> <p>${receipt.category}</p>
                <h3>Date: </h3> <p>${receipt.date}</p>
                <h3>Amount: </h3> <p>$ ${receipt.amount}</p>
            </div>

            <hr class="dividor">
    `
}

function renderReceipt(receipt) {
//   console.log("Rendering receipt:", receipt);
  let html = receiptTemplate(receipt);
  receiptContainer.insertAdjacentHTML('beforeend', html)
}

let receiptsList = []

function receiptInput() {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let categoryValue = document.getElementById('category').value;
        let dateValue = document.getElementById('date').value;
        let amountValue = Number(document.getElementById('amount').value);

        let receipt = {
            category: categoryValue.toLowerCase(),
            date: dateValue,
            amount: amountValue
        }
        
        receiptsList.push(receipt);

        renderReceipt(receipt);
        trend();
        form.reset();
    })
}

function totalAmount() {
    let total = 0;

    for (let receipt of receiptsList) {
        total += receipt.amount;
    }

    return total;
}

function averageAmount() {
    if (receiptsList.length === 0) {
        return 0;
    }

    return totalAmount() / receiptsList.length;
}

function mostFrequentCategory() {
    let counts = {};

    for (let receipt of receiptsList) {
        let category = receipt.category;

        if (counts[category]) {
            counts[category]++;
        } else {
            counts[category] = 1;
        }
    }

    let highestCount = 0;
    let mostFrequent = "";

    for (let category in counts) {
        if (counts[category] > highestCount) {
            highestCount = counts[category];
            mostFrequent = category;
        }
    }

    return mostFrequent;
}

let face = document.createElement('img')
let faceSource;
document.querySelector('#trend-area').appendChild(face)
face.src = 'images/happy_face.png'
face.className = 'face'
face.alt = 'Happy face'

function faces(averageValue) {
    if (averageValue < 15) {
        faceSource = 'images/happy_face.png'
        face.alt = 'Happy face'
    } else if (averageValue >= 15 && averageValue < 30) {
        // console.log('medium')
        faceSource = 'images/medium_face.png'
        face.alt = 'Medium face'
    } else {
        faceSource = 'images/sad_face.png'
        face.alt = 'Sad face'
    }

    face.src = faceSource
}

function trend() {

    document.querySelector("#average").textContent =
        `Average amount: $${averageAmount().toFixed(2)}`;
    document.querySelector("#frequency").textContent =
        `You shopped: ${receiptsList.length} times`;
    document.querySelector("#most-category").textContent =
        `Most frequent category: ${mostFrequentCategory()}`;
    document.querySelector("#total").textContent =
        `Total amount: $${totalAmount().toFixed(2)}`;
    faces(averageAmount().toFixed(2))

}

receiptInput();