
let form = document.querySelector('#receipt-form')
let receiptContainer = document.querySelector('#receipt-container')
let button = document.querySelector('.submit')


function receiptTemplate(receipt) {
    return `<div class="receipt">
                <h3>Category: </h3> <p>${receipt.category}</p>
                <h3>Date: </h3> <p>${receipt.date}</p>
                <h3>Amount: </h3> <p>$ ${receipt.amount}</p>
            </div>
    
    `
}

function renderReceipt(receipt) {
//   console.log("Rendering receipt:", receipt);
  let html = receiptTemplate(receipt);
  receiptContainer.insertAdjacentHTML('beforeend', html)
}


function receiptInput() {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let categoryValue = document.getElementById('category').value;
        let dateValue = document.getElementById('date').value;
        let amountValue = document.getElementById('amount').value;

        let receipt = {
            category: categoryValue,
            date: dateValue,
            amount: amountValue
        }
        
        renderReceipt(receipt);
        form.reset();
    })
}

receiptInput();