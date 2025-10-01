function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
    balloon.style.animationDuration = (Math.random() * 3 + 4) + 's';
    document.body.appendChild(balloon);
    setTimeout(() => balloon.remove(), 7000);
}
    const video = document.getElementById('videoBg');
    document.body.addEventListener('click', () => {
        video.muted = false;
        video.play();
    }, { once: true });

setInterval(createBalloon, 800);

const memeImages = [
  'meme1.jpg',
  'meme2.jpg',
  'meme3.jpg',
  'meme4.jpg',
  'meme5.jpg'
];

function createFlyingMeme() {
  const img = document.createElement('img');
  img.src = `memes/${memeImages[Math.floor(Math.random() * memeImages.length)]}`;
  img.classList.add('flying-meme');
  
  img.style.left = Math.random() * 100 + 'vw';
  img.style.top = Math.random() * 100 + 'vh';
  img.style.transform = `rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.8 + 1})`;

  document.body.appendChild(img);

  setTimeout(() => {
    img.remove();
  }, 3000);
}

const surpriseBtn = document.getElementById('surpriseBtn');
surpriseBtn.addEventListener('click', () => {
  for (let i = 0; i < 10; i++) {
  setTimeout(createFlyingMeme, i * 150); // Esto las separa en el tiempo
}
});