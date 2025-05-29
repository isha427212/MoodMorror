 const buttons = document.querySelectorAll('.mood-selector button');
const body = document.body;
const avatar = document.getElementById('avatar');
const moodMessage = document.getElementById('moodMessage');

const moodData = {
  happy: {
    theme: 'happy-theme',
    face: 'face-happy',
    message: 'You’re glowing! Stay bright 🌞'
  },
  sad: {
    theme: 'sad-theme',
    face: 'face-sad',
    message: 'It’s okay to feel down. Take it easy 💙'
  },
  angry: {
    theme: 'angry-theme',
    face: 'face-angry',
    message: 'Breathe. Punch a pillow, not a person 😤'
  },
  calm: {
    theme: 'calm-theme',
    face: 'face-calm',
    message: 'Tranquility suits you 🌿'
  },
  excited: {
    theme: 'excited-theme',
    face: 'face-excited',
    message: 'Vibes on max! Keep the energy up 🔥'
  },
  meh: {
    theme: 'default-theme',
    face: 'face-default',
    message: 'Neutral feels? Totally valid 😐'

    
  }
};

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const mood = button.dataset.mood;
    applyMood(mood);
  });
});

function applyMood(mood) {
  
  body.className = '';
  avatar.className = 'avatar';

  if (moodData[mood]) {
    body.classList.add(moodData[mood].theme);
    avatar.classList.add(moodData[mood].face);
    moodMessage.textContent = moodData[mood].message;
  } else {
    
    body.classList.add('default-theme');
    avatar.classList.add('face-default');
    moodMessage.textContent = 'Unexpected mood detected. Sending virtual hug 🤗';
  }
}
