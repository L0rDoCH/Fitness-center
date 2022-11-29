const videoContainer = document.querySelector('.about__video');
const videoIframe = videoContainer.querySelector('iframe');
const videoCover = videoContainer.querySelector('img');
const videoButton = videoContainer.querySelector('svg');

const startPlay = () => {
  videoIframe.src += '?feature=oembed&autoplay=1';
  videoContainer.classList.add('about__video--close-cover');
  videoCover.style.display = 'none';
  videoButton.style.display = 'none';
};

export const initVideo = () => {
  videoContainer.addEventListener('click', () => {
    startPlay();
  });
};
