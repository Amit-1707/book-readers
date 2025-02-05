document.getElementById("sell-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your book has been listed for sale!");
});

document.getElementById("request-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your book request has been submitted!");
});
