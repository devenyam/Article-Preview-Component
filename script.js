'use strict';

const share = document.querySelector('.share');
const profile = document.querySelector('.profile');
const socialMedia = document.querySelector('.social-media');
const shareBtn = document.querySelector('.share-btn');
const shareLs = document.querySelector('.share-ls');
const shareIcon = document.querySelector('.share-icon');

share.addEventListener('click', () => {
  if (innerWidth < 900) {
    profile.classList.add('hide');
    socialMedia.classList.remove('hide');
  } else {
    shareLs.classList.toggle('hide');
    shareIcon.src = 'images/icon-share2.svg';
    share.style.backgroundColor = 'hsl(214, 17%, 51%)';
    shareIcon.style.height = '18px';
    shareIcon.style.width = '30px';
    shareIcon.style.filter = 'invert(100%)';
    if (shareLs.classList.contains('hide')) {
      share.style.backgroundColor = 'hsl(210, 46%, 95%)';
      shareIcon.src = 'images/icon-share.svg';
      shareIcon.style.filter = 'invert(0)';
      shareIcon.style.height = '15px';
      shareIcon.style.width = '15px';
    }
  }
});

shareBtn.addEventListener('click', () => {
  if (innerWidth < 900) {
    profile.classList.remove('hide');
    socialMedia.classList.add('hide');
  }
});
