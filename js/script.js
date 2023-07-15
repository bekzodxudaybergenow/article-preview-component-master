const body = document.querySelector('body');
const shareBtn = document.querySelector('.share-btn');
const shareList = document.querySelector('.share-list');
const overlay = document.querySelector('.overlay');




shareBtn.addEventListener('click', () => {
    shareList.classList.toggle('hidden');
    shareBtn.classList.toggle('share-btn-bg');
})
window.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
        shareList.classList.add('hidden');
        shareBtn.classList.remove('share-btn-bg');
    }
})
