const shareBtn = document.getElementById('share-btn');
const shareOptions = document.getElementById('share-options');

shareBtn.addEventListener('click', () => {
  if (screen.width < 451) {
    document.querySelector('.avatar-container').classList.toggle('hidden');
    document.querySelector('.author-infos').classList.toggle('hidden');
    document.querySelector('.left-paragraphs').classList.toggle('hidden');
    document.querySelector('.mobile-onclick').classList.toggle('hidden');
    document.querySelector('.author').classList.toggle('author-mobile-onclick');
  } else {
    shareOptions.classList.toggle('hidden');
  }
});
