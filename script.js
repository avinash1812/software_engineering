// Show alert when "Join Now" button is clicked
document.addEventListener('DOMContentLoaded', function () {
    const joinBtn = document.getElementById('joinBtn');
    joinBtn.addEventListener('click', function () {
        alert("Let's Play Cricket!");
    });

    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        alert(`Thank you, ${name}! Your message has been received.`);
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    });
});
