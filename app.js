const navMenu = document.getElementById("nav-menu");
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const feedbackInput = document.getElementById('feedback');

function showMenu() {
    navMenu.style.right = "0";
}
function hideMenu() {
    navMenu.style.right = "-250px";
}

function submitForm() {
    // Get form data
    var email = emailInput.value;
    var phone = phoneInput.value;
    var feedback = feedbackInput.value;
    var formData = { email, phone, feedback };

    // Form data to JSON
    var jsonData = JSON.stringify(formData, null, 2);

    // Confirmation before downloading
    if (confirm('Do you want to download the data as JSON?')) {
        // Blob with the JSON data
        var blob = new Blob([jsonData], { type: 'application/json' });

        // Download link
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'contact_data.json';
        a.click();
    }
}
