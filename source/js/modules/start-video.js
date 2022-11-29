const videoContainer = document.querySelector('.about__video');
let videoUrl = videoContainer.dataset.videoSrc;
const videoCover = videoContainer.querySelector('img');
const videoButton = videoContainer.querySelector('svg');

const startPlay = () => {
  let video = document.createElement('div');
  video.innerHTML = '<iframe width="560" height="315" src="' + videoUrl + '?feature=oembed&autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  videoContainer.appendChild(video);
  videoContainer.classList.add('about__video--close-cover');
  videoCover.style.display = 'none';
  videoButton.style.display = 'none';
};

export const initVideo = () => {
  videoContainer.addEventListener('click', () => {
    startPlay();
  });
};
