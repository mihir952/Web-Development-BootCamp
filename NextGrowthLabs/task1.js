$(document).ready(function () {
    $('#userSlider').on('input', function () {
        var numUsers = parseInt($(this).val());

        // Remove highlighting from all pricing plans
        $('.card').removeClass('highlighted');

        // Highlight the appropriate pricing plan
        if (numUsers >= 0 && numUsers < 10) {
            $('#plan1').addClass('highlighted');
        } else if (numUsers >= 10 && numUsers < 20) {
            $('#plan2').addClass('highlighted');
        } else if (numUsers >= 20 && numUsers <= 30) {
            $('#plan3').addClass('highlighted');
        }
    });

    // Clear the form when the modal is hidden
    $('#pricingModal').on('hidden.bs.modal', function () {
        $('#name').val('');
        $('#email').val('');
        $('#comments').val('');
    });

    // Update the modal title based on the chosen plan
    $('#pricingModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Button that triggered the modal
        var plan = button.data('plan'); // Extract plan name from data-* attributes
        var modal = $(this);
        modal.find('.modal-title').text('Select a Plan: ' + plan);
    });
});
const form = document.getElementById('form');
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(this);

    
    this.reset();

    
    const accessToken = 'OU3LW3M0QY30554J4QJQ8ENHL'; 

    // Create headers object with the access token
    const headers = new Headers({
        'Access-Code': accessToken,
        "Content-Type": "application/json",

    });

    // Send the form data to the server using fetch with headers
    fetch('https://forms.maakeetoo.com/formapi/280', {
        method: 'POST',
        body: formData,
        headers: headers, // Include headers with the access token
    })
    .then(response => {
        if (response.ok) {
            // Request was successful, you can handle the success here
            alert('Form submitted successfully');
        } else {
            // Request failed, handle errors here
            alert('Form submission failed');
        }
    })
    .catch(error => {
        // An error occurred, handle errors here
        console.error('Error:', error);
        alert('An error occurred while submitting the form');
    });
});

/************Error I am getting after clicking on submit button**********////
// task1.html:1 Access to fetch at 'https://forms.maakeetoo.com/formapi/280' from origin 'http://127.0.0.1:5501' has been blocked by CORS policy: Request header field access-code is not allowed by Access-Control-Allow-Headers in preflight response.
// task1.js:52     POST https://forms.maakeetoo.com/formapi/280 net::ERR_FAILED
// (anonymous) @ task1.js:52
// task1.js:68 Error: TypeError: Failed to fetch
//     at HTMLFormElement.<anonymous> (task1.js:52:5)

