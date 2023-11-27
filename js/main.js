const square = document.getElementById('square');
const body = document.body;
const bodyWidth = body.clientWidth;
const squareWidth = square.clientWidth;
let position = 0;

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    if (position > 0) {
      position -= 10;
      square.style.left = parseInt(square.style.left) - 10 + 'px';
    }
  
  } else if (event.key === 'ArrowRight') {

    if (position < bodyWidth - squareWidth) {
      position += 10;
      square.style.left = parseInt(square.style.left) + 10 + 'px';
    }
  }
});

let positionX = 0;
let positionY = 0;

document.addEventListener('keydown', (event) => {
  if (event.key === " ") {
    positionY -= 10;
    square.style.transform = `translate(${positionX}px, ${positionY}px)`;
    setTimeout(() => {
      positionY += 10;
      square.style.transform = `translate(${positionX}px, ${positionY}px)`;
    }, 200);
  } else if (event.ctrlKey) {
    square.style.height = square.offsetHeight * 0.6 + 'px';
    square.style.width = square.offsetWidth * 1.25 + 'px';
  };
}
);


const bumperSquare = () => {
  if (position + squareWidth >= bodyWidth ) {
    position = bodyWidth - squareWidth - 20;
    setTimeout(() => {
      square.innerHTML = "БЕМС";
      setTimeout(() => {
        square.innerHTML = "";
      }, 2000);
    }, 0);

  } else if (position <= 0) {
    position = 20;
    setTimeout(() => {
      square.innerHTML = "БЕМС";
      setTimeout(() => {
        square.innerHTML = "";
      }, 2000);
    }, 0);
    
  }
  square.style.left = position + 'px';
}

setInterval(bumperSquare);



