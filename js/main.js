const { easing, tween, styler, keyframes } = window.popmotion;



function draw() {
  let cards = document.getElementsByClassName('card')
  console.log(cards)
  for (let i=0;i<cards.length; i++){

	var divStyler = styler(cards[i]);

	keyframes({
	  values: [
	    { x: -10000, y: 0, rotateY: 0, },
	    { x: 0, y: 0, rotateY: 0, rotateX: 0}
	  ],
	  duration: 1000*(i+1),
	  easings: [easing.easeInOut],
	  loop: 0,
	}).start(divStyler.set);
  }
}

function flip() {
const divStyler = styler(document.querySelector('.card'));
keyframes({
  values: [
    { x: -10000, y: 0, rotateY: 0, },
    { x: 0, y: 0, rotateY: 0, rotateX: 0}
  ],
  duration: 500,
  easings: [easing.easeInOut],
  loop: 0,
}).start(divStyler.set);
}


function sit() {

}

