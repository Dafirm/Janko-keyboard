

function soundHandler(music){
		const playSound = new Audio(music)
		playSound.play()
		playSound.currentTime= 0
	}

const notes = document.querySelectorAll(".key");
[...notes].forEach(item=> {
  item.addEventListener('click', (e) => {
  	e.stopPropagation()
  	if (!e.target.id ) return
  	let makeSong = `notes2/${e.target.id}.wav`
  	soundHandler(makeSong)
	 })
   })
 

function soundPlay(e){
 		const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
 		const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
 		if(!audio)return; //stop the function from running all together
 		audio.currentTime = 0;
 		audio.play();
 		key.classList.add('playing');
 		
 	}
function removeTransition(e) {
	if (e.propertyName !== 'transform') return; // skip it if it's not a transform
	this.classList.remove('playing')
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
document.addEventListener('keydown',  soundPlay);

















