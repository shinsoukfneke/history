function openModal(imageSrc, description) {
    let modal = document.getElementById("imageModal");
    let modalImage = document.getElementById("modalImage");
    let modalDescription = document.getElementById("modalDescription");

    modal.style.display = "block";
    modalImage.src = imageSrc;
    modalDescription.innerText = description;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}  