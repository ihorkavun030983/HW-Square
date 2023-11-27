const square = document.getElementById('square');
const body = document.body;
const bodyWidth = body.clientWidth;
const squareWidth = square.clientWidth;
let positionSquare = 0;

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    if (positionSquare > 0) {
      positionSquare -= 10;
      square.style.left = parseInt(square.style.left) - 10 + 'px';
    }
  } else if (event.key === 'ArrowRight') {
    if (positionSquare < bodyWidth - squareWidth) {
      positionSquare += 10;
      square.style.left = parseInt(square.style.left) + 10 + 'px';
    }
  }
});

const bumperSquare = () => {
  if (positionSquare + squareWidth >= bodyWidth ) {
    positionSquare = bodyWidth - squareWidth - 20;
    setTimeout(() => {
      square.innerHTML = 'БЕМС';
      setTimeout(() => {
        square.innerHTML = '';
      }, 2000);
    }, 0);

  } else if (positionSquare <= 0) {
    positionSquare = 20;
    setTimeout(() => {
      square.innerHTML = 'БЕМС';
      setTimeout(() => {
        square.innerHTML = '';
      }, 2000);
    }, 0);
    
  }
  square.style.left = positionSquare + 'px';
}

setInterval(bumperSquare);

let positionX = 0;
let positionY = 0;

document.addEventListener('keydown', (event) => {
  if (event.key === " ") {
    positionY -= 10;
    square.style.transform = `translate(${positionX}px, ${positionY}px)`;
    setTimeout(() => {
      positionY += 10;
      square.style.transform = `translate(${positionX}px, ${positionY}px)`;
      square.style.transition = '0.5s';
    }, 200);
  } else if (event.ctrlKey) {
    square.style.height = square.offsetHeight * 0.6 + 'px';
    square.style.width = square.offsetWidth * 1.25 + 'px';
    square.style.transition = '0.5s';
  };
}
);
