// Handle Get Started Button
document.getElementById('start-btn').addEventListener('click', function() {
    window.location.href = 'link-card.html'; // Redirect to link card page
});

// Handle Card Linking Form
document.getElementById('card-link-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const cardNumber = document.getElementById('card-number').value;
    alert(`Card Linked: ${cardNumber}`);
    window.location.href = 'balance.html'; // After linking, go to balance page
});

// Handle Balance Check
document.getElementById('check-balance-btn').addEventListener('click', function() {
    const balance = '₦50,000'; // Simulated balance
    document.getElementById('balance').textContent = `Your balance: ${balance}`;
});

// Handle Transaction Form
document.getElementById('transfer-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const recipientCard = document.getElementById('recipient-card').value;
    const amount = document.getElementById('amount').value;
    alert(`Transferred ₦${amount} to card ${recipientCard}`);
});
