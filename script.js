// Optional animations or smooth scrolling enhancements can go here

document.addEventListener("DOMContentLoaded", () => {
    // Example: Animate on scroll or show alert on form submit (no backend needed)
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Message sent (simulated)");
        form.reset();
    });
});
