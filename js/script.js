'use sctrict';

const modal = document.querySelector('.modal'),
      modalBtn = document.querySelector('.signup_btn'),
      closeBtn = document.querySelector('.modal_close'),
      modalBody = document.querySelector('.modal_wrapper');


function openModal() {
    modal.classList.add('modal_show');
    modal.classList.remove('modal_hide');
    document.body.style.overflow = 'hidden';
}

function hideModal() {
    modal.classList.add('modal_hide');
    modal.classList.remove('modal_show');
    document.body.style.overflow = 'auto';
}

modalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
});

closeBtn.addEventListener('click', hideModal);


modal.addEventListener('click', (e) => {
    if (e.target == modal) {
        hideModal();
    }
});


document.addEventListener('keydown', (e) => {
    if (e.code == 'Escape' && modal.classList.contains('modal_show')) {
        hideModal();
    }
});