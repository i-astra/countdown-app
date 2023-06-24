const settings_modal = document.querySelector(".controls_settings-modal");
const modal_open = document.querySelector(".modal_button");
const modal_close = document.querySelector(".modal_close");

console.log(settings_modal);

modal_open.addEventListener("click", openModal);
modal_close.addEventListener("click", closeModal);

function openModal() {
    settings_modal.style.display = "flex"
}
function closeModal() {
    settings_modal.style.display = "none"
}

// modal open & close functioning done 