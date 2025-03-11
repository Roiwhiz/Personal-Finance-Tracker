document.getElementById('add-transaction').addEventListener('click', function() {
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;
    
    if (!description || isNaN(amount)) {
        alert('Please enter valid values');
        return;
    }
    
    const transactionList = document.getElementById('transaction-list');
    const li = document.createElement('li');
    li.classList.add(type);
    li.innerHTML = `${description} - $${amount.toFixed(2)} <button onclick="this.parentElement.remove(); updateBalance();">❌</button>`;
    
    transactionList.appendChild(li);
    updateBalance();
});

function updateBalance() {
    let balance = 0;
    document.querySelectorAll('#transaction-list li').forEach(item => {
        const parts = item.innerText.split(' - $');
        const amount = parseFloat(parts[1]);
        if (item.classList.contains('income')) {
            balance += amount;
        } else {
            balance -= amount;
        }
    });
    document.getElementById('balance').innerText = `$${balance.toFixed(2)}`;
}