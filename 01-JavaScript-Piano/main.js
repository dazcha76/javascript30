function playSound(e){
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  switch(e.keyCode){
    case 83:
      key.setAttribute('id', 'red');
      break;
    case 68:
      key.setAttribute('id', 'orange');
      break;
    case 70:
      key.setAttribute('id', 'yellow');
      break;
    case 71:
      key.setAttribute('id', 'green');
      break;
    case 72:
      key.setAttribute('id', 'blue');
      break;
    case 74:
      key.setAttribute('id', 'indigo');
      break;
    case 75:
      key.setAttribute('id', 'violet');
      break;
    case 69:
    case 82:
    case 89:
    case 85:
    case 73:
      key.setAttribute('id', 'playing');
      break;
  }
}

function removeID(e){
  if(e.propertyName !== "background-color") return
  this.removeAttribute('id');
}

const keys = document.querySelectorAll('.flex-key');
keys.forEach(key => {
  key.addEventListener('transitionend', removeID);
});

window.addEventListener('keydown', playSound);