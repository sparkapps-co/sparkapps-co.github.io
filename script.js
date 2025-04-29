function openModal() {
    document.getElementById("orbitModal").style.display = "block";
}

function closeModal() {
    document.getElementById("orbitModal").style.display = "none";
}

// Optional: Close when clicking outside the modal box
window.onclick = function(event) {
    const modal = document.getElementById("orbitModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
