document.querySelector('.pay-button').addEventListener('click', function() {
    alert('Processing payment. Thank you!');
});
document.querySelector('.order-button').addEventListener('click', function() {
    alert('Order confirmed. Thank you for your purchase!');
});
document.querySelector('.save-button').addEventListener('click', function() {
    alert('Saved details thank you!');
});
document.querySelector('.home-button').addEventListener('click', function() {
    alert('Redericting to homepage.');
});


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.home-button').addEventListener('click', function() {
        alert('Redirecting to home!');
    });
