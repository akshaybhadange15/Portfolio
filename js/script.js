document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
    } else {
        alert('Thank you! Your message has been sent.');
        // Here, you can add code to send the form data to a server
    }
});
