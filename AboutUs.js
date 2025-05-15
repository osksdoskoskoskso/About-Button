function aboutUs() {
  alert("Our name is Soichiro and Dinula. We are selling a product called the about button, when we press it we get a brief explanation about the person");
}

function ownerInfo() {
  alert("Soichiro is 14 years old and Dinula is 15 years old. We are both one of the smartest student from stanford university");
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.home-button').addEventListener('click', function() {
        alert('Redirecting to home!');
    });
