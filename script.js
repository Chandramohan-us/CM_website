(function(){
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with EmailJS public key
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
        .then(function() {
            alert("✅ Message sent successfully!");
            document.getElementById("contact-form").reset();
        }, function(error) {
            alert("❌ Failed to send message. Please try again.");
            console.error("Error:", error);
        });
});
