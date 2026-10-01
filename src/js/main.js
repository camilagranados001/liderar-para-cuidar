function verSeccion(nombreSeccion) {
    const pagPsicologia = document.getElementById('page-psicologia');
    const pagAmigo = document.getElementById('page-amigo-secreto');
    const tabPsicologia = document.getElementById('tab-psicologia');
    const tabAmigo = document.getElementById('tab-amigo-secreto');

    if (nombreSeccion === 'psicologia') {
        pagPsicologia.classList.remove('hidden');
        pagPsicologia.classList.add('block');
        pagAmigo.classList.remove('block');
        pagAmigo.classList.add('hidden');

        tabPsicologia.className = "bg-vatcoGold text-vatcoBlue font-bold px-3 py-1.5 rounded-lg shadow transition flex items-center gap-1.5";
        tabAmigo.className = "text-white hover:text-vatcoGold px-3 py-1.5 rounded-lg transition flex items-center gap-1.5";
    } else {
        pagPsicologia.classList.remove('block');
        pagPsicologia.classList.add('hidden');
        pagAmigo.classList.remove('hidden');
        pagAmigo.classList.add('block');

        tabAmigo.className = "bg-vatcoGold text-vatcoBlue font-bold px-3 py-1.5 rounded-lg shadow transition flex items-center gap-1.5";
        tabPsicologia.className = "text-white hover:text-vatcoGold px-3 py-1.5 rounded-lg transition flex items-center gap-1.5";
    }
}

window.onload = function() {
    const qrContainer = document.getElementById("qrcode");
    if(qrContainer && typeof QRCode !== 'undefined') {
        new QRCode(qrContainer, {
            text: "https://self-compassion.org/self-compassion-test/",
            width: 180,
            height: 180,
            colorDark: "#0b2545",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    }
};

function openModal(imgSrc, title, desc) {
    const modal = document.getElementById('imageModal');
    const container = document.getElementById('modalContainer');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');

    modalImg.src = imgSrc;
    modalTitle.innerText = title;
    modalDesc.innerText = desc;

    modal.classList.remove('hidden');
    setTimeout(() => { container.classList.add('modal-enter-active'); }, 10);
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    const container = document.getElementById('modalContainer');
    container.classList.remove('modal-enter-active');
    setTimeout(() => { modal.classList.add('hidden'); }, 200);
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") { closeModal(); }
});